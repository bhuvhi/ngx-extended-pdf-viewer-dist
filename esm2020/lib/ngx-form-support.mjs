import { EventEmitter } from '@angular/core';
export class NgxFormSupport {
    constructor() {
        /** Maps the internal ids of the annotations of pdf.js to their field name */
        this.formIdToFullFieldName = {};
        this.formIdToField = {};
        this.radioButtons = {};
        this.formData = {};
        this.formDataChange = new EventEmitter();
    }
    reset() {
        this.formData = {};
        this.formIdToFullFieldName = {};
    }
    registerFormSupportWithPdfjs(ngZone) {
        this.ngZone = ngZone;
        globalThis.getFormValueFromAngular = (key) => this.getFormValueFromAngular(key);
        globalThis.updateAngularFormValue = (key, value) => this.updateAngularFormValueCalledByPdfjs(key, value);
        globalThis.registerAcroformField = (id, element, value, radioButtonValueName) => this.registerAcroformField(id, element, value, radioButtonValueName);
        globalThis.registerXFAField = (element, value) => this.registerXFAField(element, value);
    }
    registerAcroformField(id, element, value, radioButtonValueName) {
        const fieldName = element.name;
        this.formIdToField[id] = element;
        this.formIdToFullFieldName[id] = fieldName;
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            const groupName = fieldName;
            this.formIdToFullFieldName[id] = groupName;
            if (value) {
                this.formData[groupName] = radioButtonValueName;
            }
            element.setAttribute('exportValue', radioButtonValueName);
            if (!this.radioButtons[groupName]) {
                this.radioButtons[groupName] = [];
            }
            this.radioButtons[groupName].push(element);
        }
        else if (element instanceof HTMLSelectElement) {
            this.formData[fieldName] = this.getValueOfASelectField(element);
        }
        else {
            this.formData[fieldName] = value;
        }
    }
    registerXFAField(element, value) {
        const fullFieldName = this.findFullXFAName(element);
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            const id = element.getAttribute('fieldid') ?? '';
            // remove the xfa name of the radio button itself form the field name,
            // because the field name refers to the entire group of relatated radio buttons
            const groupName = fullFieldName.substring(0, fullFieldName.lastIndexOf('.'));
            this.formIdToFullFieldName[id] = groupName;
            this.formData[groupName] = value.value;
            if (!this.radioButtons[groupName]) {
                this.radioButtons[groupName] = [];
            }
            this.radioButtons[groupName].push(element);
        }
        else if (element instanceof HTMLInputElement) {
            const id = element.getAttribute('fieldid') ?? '';
            this.formIdToField[id] = element;
            this.formIdToFullFieldName[id] = fullFieldName;
            this.formData[fullFieldName] = value.value;
        }
        else if (element instanceof HTMLSelectElement) {
            const id = element.getAttribute('fieldid') ?? '';
            this.formIdToField[id] = element;
            this.formIdToFullFieldName[id] = fullFieldName;
            this.formData[fullFieldName] = value.value;
        }
        else if (element instanceof HTMLTextAreaElement) {
            const id = element.getAttribute('fieldid') ?? '';
            this.formIdToField[id] = element;
            this.formIdToFullFieldName[id] = fullFieldName;
            this.formData[fullFieldName] = value.value;
        }
        else {
            console.error("Couldn't register an XFA form field", element);
        }
    }
    getValueOfASelectField(selectElement) {
        const { options, multiple } = selectElement;
        if (!multiple) {
            return options.selectedIndex === -1 ? null : options[options.selectedIndex]['value'];
        }
        return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option['value']);
    }
    getFormValueFromAngular(element) {
        let key;
        if (element instanceof HTMLElement) {
            const fieldName = this.findXFAName(element);
            if (fieldName) {
                if (this.formData.hasOwnProperty(fieldName)) {
                    key = fieldName;
                }
                else {
                    key = this.findFullXFAName(element);
                }
            }
            else {
                console.error("Couldn't find the field name or XFA name of the form field", element);
                return { value: null };
            }
        }
        else {
            key = element;
        }
        return { value: this.formData[key] };
    }
    findXFAName(element) {
        let parentElement = element;
        while (!parentElement.getAttribute('xfaname') && parentElement.parentElement) {
            parentElement = parentElement.parentElement;
        }
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            do {
                parentElement = parentElement?.parentElement;
            } while (!parentElement?.getAttribute('xfaname') && parentElement);
        }
        let fieldName = parentElement?.getAttribute('xfaname');
        if (!fieldName) {
            throw new Error("Couldn't find the xfaname of the field");
        }
        return fieldName;
    }
    findFullXFAName(element) {
        let parentElement = element;
        let fieldName = '';
        while (parentElement instanceof HTMLElement && parentElement.parentElement) {
            const xfaName = parentElement.getAttribute('xfaname');
            if (xfaName) {
                fieldName = xfaName + '.' + fieldName;
            }
            parentElement = parentElement.parentElement;
        }
        if (!fieldName) {
            throw new Error("Couldn't find the xfaname of the field");
        }
        fieldName = fieldName.substring(0, fieldName.length - 1);
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            // ignore the last part of the xfaName because it's actually the value of the field
            return fieldName.substring(0, fieldName.lastIndexOf('.'));
        }
        return fieldName;
    }
    updateAngularFormValueCalledByPdfjs(key, value) {
        if (!this.formData) {
            this.formData = {};
        }
        if (typeof key === 'string') {
            const acroFormKey = this.formIdToFullFieldName[key];
            const fullKey = acroFormKey ?? Object.values(this.formIdToFullFieldName).find((k) => k === key || k.endsWith('.' + key));
            if (fullKey) {
                const field = this.formIdToField[key];
                let change = this.doUpdateAngularFormValue(field, value, fullKey);
                if (change) {
                    this.ngZone.run(() => this.formDataChange.emit(this.formData));
                }
            }
            else {
                console.error("Couldn't find the field with the name " + key);
            }
        }
        else {
            let change = false;
            const shortFieldName = this.findXFAName(key);
            if (this.formData.hasOwnProperty(shortFieldName)) {
                change = this.doUpdateAngularFormValue(key, value, shortFieldName);
            }
            const fullFieldName = this.findFullXFAName(key);
            if (fullFieldName !== shortFieldName) {
                change || (change = this.doUpdateAngularFormValue(key, value, fullFieldName));
            }
            if (change) {
                this.ngZone.run(() => this.formDataChange.emit(this.formData));
            }
        }
    }
    doUpdateAngularFormValue(field, value, fullKey) {
        let change = false;
        if (field instanceof HTMLInputElement && field.type === 'checkbox') {
            const exportValue = field.getAttribute('exportvalue');
            if (exportValue) {
                if (value.value) {
                    if (this.formData[fullKey] !== exportValue) {
                        this.formData[fullKey] = exportValue;
                        change = true;
                    }
                }
                else {
                    if (this.formData[fullKey] !== false) {
                        this.formData[fullKey] = false;
                        change = true;
                    }
                }
            }
            else {
                if (this.formData[fullKey] !== value.value) {
                    this.formData[fullKey] = value.value;
                    change = true;
                }
            }
        }
        else if (field instanceof HTMLInputElement && field.type === 'radio') {
            const exportValue = field.getAttribute('exportvalue') ?? field.getAttribute('xfaon');
            if (value.value) {
                if (this.formData[fullKey] !== exportValue) {
                    this.formData[fullKey] = exportValue;
                    change = true;
                }
            }
        }
        else {
            if (this.formData[fullKey] !== value.value) {
                this.formData[fullKey] = value.value;
                change = true;
            }
        }
        return change;
    }
    updateFormFieldsInPdfCalledByNgOnChanges(previousFormData) {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (!PDFViewerApplication?.pdfDocument?.annotationStorage) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        for (const key in this.formData) {
            if (this.formData.hasOwnProperty(key)) {
                const newValue = this.formData[key];
                if (newValue !== previousFormData[key]) {
                    this.setFieldValueAndUpdateAnnotationStorage(key, newValue);
                }
            }
        }
        for (const key in previousFormData) {
            if (previousFormData.hasOwnProperty(key) && previousFormData[key]) {
                let hasPreviousValue = this.formData.hasOwnProperty(key);
                if (!hasPreviousValue) {
                    const fullKey = Object.keys(this.formData).find((k) => k === key || k.endsWith('.' + key));
                    if (fullKey) {
                        hasPreviousValue = this.formData.hasOwnProperty(fullKey);
                    }
                }
                if (!hasPreviousValue) {
                    this.setFieldValueAndUpdateAnnotationStorage(key, null);
                }
            }
        }
    }
    setFieldValueAndUpdateAnnotationStorage(key, newValue) {
        const radios = this.findRadioButtonGroup(key);
        if (radios) {
            radios.forEach((r) => {
                const activeValue = r.getAttribute('exportValue') ?? r.getAttribute('xfaon');
                r.checked = activeValue === newValue;
            });
            const updateFromAngular = new CustomEvent('updateFromAngular', {
                detail: newValue,
            });
            radios[0].dispatchEvent(updateFromAngular);
        }
        else {
            const fieldId = this.findFormIdFromFieldName(key);
            if (fieldId) {
                const htmlField = this.formIdToField[fieldId];
                if (htmlField) {
                    if (htmlField instanceof HTMLInputElement && htmlField.type === 'checkbox') {
                        let activeValue = htmlField.getAttribute('xfaon') ?? htmlField.getAttribute('exportvalue') ?? true;
                        if (newValue === true || newValue === false) {
                            activeValue = true;
                        }
                        htmlField.checked = activeValue === newValue;
                    }
                    else if (htmlField instanceof HTMLSelectElement) {
                        this.populateSelectField(htmlField, newValue);
                    }
                    else {
                        // textareas and input fields
                        htmlField.value = newValue;
                    }
                    const updateFromAngular = new CustomEvent('updateFromAngular', {
                        detail: newValue,
                    });
                    htmlField.dispatchEvent(updateFromAngular);
                }
                else {
                    console.error("Couldn't set the value of the field", key);
                }
            }
        }
    }
    populateSelectField(htmlField, newValue) {
        if (htmlField.multiple) {
            const { options } = htmlField;
            const newValueArray = newValue;
            for (let i = 0; i < options.length; i++) {
                const option = options.item(i);
                if (option) {
                    option.selected = newValueArray.some((o) => o === option.value);
                }
            }
        }
        else {
            htmlField.value = newValue;
        }
    }
    findFormIdFromFieldName(fieldName) {
        if (Object.entries(this.formIdToFullFieldName).length === 0) {
            // sometimes, ngOnChanges() is called before initializing the PDF file
            return undefined;
        }
        const matchingEntries = Object.entries(this.formIdToFullFieldName).filter((entry) => entry[1] === fieldName || entry[1].endsWith('.' + fieldName));
        if (matchingEntries.length > 1) {
            console.log(`More than one field name matches the field name ${fieldName}. Please use the one of these qualified field names:`, matchingEntries.map((f) => f[1]));
            console.log('ngx-extended-pdf-viewer uses the first matching field (which may or may not be the topmost field on your PDF form): ' + matchingEntries[0][0]);
        }
        else if (matchingEntries.length === 0) {
            console.log("Couldn't find the field " + fieldName);
            return undefined;
        }
        return matchingEntries[0][0];
    }
    findRadioButtonGroup(fieldName) {
        const matchingEntries = Object.entries(this.radioButtons).filter((entry) => entry[0].endsWith('.' + fieldName) || entry[0] === fieldName);
        if (matchingEntries.length === 0) {
            return null;
        }
        if (matchingEntries.length > 1) {
            console.log('More than one radio button group name matches this name. Please use the qualified field name', matchingEntries.map((radio) => radio[0]));
            console.log('ngx-extended-pdf-viewer uses the first matching field (which may not be the topmost field on your PDF form): ' + matchingEntries[0][0]);
        }
        return matchingEntries[0][1];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tc3VwcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWZvcm0tc3VwcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS3JELE1BQU0sT0FBTyxjQUFjO0lBQTNCO1FBQ0UsNkVBQTZFO1FBQ3JFLDBCQUFxQixHQUE4QixFQUFFLENBQUM7UUFFdEQsa0JBQWEsR0FBdUMsRUFBRSxDQUFDO1FBRXZELGlCQUFZLEdBQStDLEVBQUUsQ0FBQztRQUUvRCxhQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUU1QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO0lBaVYzRCxDQUFDO0lBN1VRLEtBQUs7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFTSw0QkFBNEIsQ0FBQyxNQUFjO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLFVBQWtCLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRyxVQUFrQixDQUFDLHNCQUFzQixHQUFHLENBQUMsR0FBd0UsRUFBRSxLQUF3QixFQUFFLEVBQUUsQ0FDbEosSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxVQUFrQixDQUFDLHFCQUFxQixHQUFHLENBQUMsRUFBVSxFQUFFLE9BQXdCLEVBQUUsS0FBNkIsRUFBRSxvQkFBNkIsRUFBRSxFQUFFLENBQ2pKLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtB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UUFDNUMsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUM7UUFDMUksSUFBSSxlQUFlLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsSUFBSSxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUNULDhGQUE4RixFQUM5RixlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDekMsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0dBQStHLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEo7UUFDRCxPQUFPLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtRGF0YVR5cGUsIElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uL3B1YmxpY19hcGknO1xyXG5cclxuZXhwb3J0IHR5cGUgSHRtbEZvcm1FbGVtZW50ID0gSFRNTElucHV0RWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hGb3JtU3VwcG9ydCB7XHJcbiAgLyoqIE1hcHMgdGhlIGludGVybmFsIGlkcyBvZiB0aGUgYW5ub3RhdGlvbnMgb2YgcGRmLmpzIHRvIHRoZWlyIGZpZWxkIG5hbWUgKi9cclxuICBwcml2YXRlIGZvcm1JZFRvRnVsbEZpZWxkTmFtZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuICBwcml2YXRlIGZvcm1JZFRvRmllbGQ6IHsgW2tleTogc3RyaW5nXTogSHRtbEZvcm1FbGVtZW50IH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSByYWRpb0J1dHRvbnM6IHsgW2tleTogc3RyaW5nXTogQXJyYXk8SFRNTElucHV0RWxlbWVudD4gfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZm9ybURhdGE6IEZvcm1EYXRhVHlwZSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZm9ybURhdGFDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEZvcm1EYXRhVHlwZT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZTtcclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xyXG4gICAgdGhpcy5mb3JtSWRUb0Z1bGxGaWVsZE5hbWUgPSB7fTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZWdpc3RlckZvcm1TdXBwb3J0V2l0aFBkZmpzKG5nWm9uZTogTmdab25lKTogdm9pZCB7XHJcbiAgICB0aGlzLm5nWm9uZSA9IG5nWm9uZTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkuZ2V0Rm9ybVZhbHVlRnJvbUFuZ3VsYXIgPSAoa2V5OiBzdHJpbmcpID0+IHRoaXMuZ2V0Rm9ybVZhbHVlRnJvbUFuZ3VsYXIoa2V5KTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkudXBkYXRlQW5ndWxhckZvcm1WYWx1ZSA9IChrZXk6IHN0cmluZyB8IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsIHZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfSkgPT5cclxuICAgICAgdGhpcy51cGRhdGVBbmd1bGFyRm9ybVZhbHVlQ2FsbGVkQnlQZGZqcyhrZXksIHZhbHVlKTtcclxuICAgIChnbG9iYWxUaGlzIGFzIGFueSkucmVnaXN0ZXJBY3JvZm9ybUZpZWxkID0gKGlkOiBzdHJpbmcsIGVsZW1lbnQ6IEh0bWxGb3JtRWxlbWVudCwgdmFsdWU6IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHJhZGlvQnV0dG9uVmFsdWVOYW1lPzogc3RyaW5nKSA9PlxyXG4gICAgICB0aGlzLnJlZ2lzdGVyQWNyb2Zvcm1GaWVsZChpZCwgZWxlbWVudCwgdmFsdWUsIHJhZGlvQnV0dG9uVmFsdWVOYW1lKTtcclxuXHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLnJlZ2lzdGVyWEZBRmllbGQgPSAoZWxlbWVudDogSHRtbEZvcm1FbGVtZW50LCB2YWx1ZTogeyB2YWx1ZTogc3RyaW5nIH0pID0+IHRoaXMucmVnaXN0ZXJYRkFGaWVsZChlbGVtZW50LCB2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyQWNyb2Zvcm1GaWVsZChpZDogc3RyaW5nLCBlbGVtZW50OiBIdG1sRm9ybUVsZW1lbnQsIHZhbHVlOiBudWxsIHwgc3RyaW5nIHwgQXJyYXk8c3RyaW5nPiwgcmFkaW9CdXR0b25WYWx1ZU5hbWU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpZWxkTmFtZSA9IGVsZW1lbnQubmFtZTtcclxuICAgIHRoaXMuZm9ybUlkVG9GaWVsZFtpZF0gPSBlbGVtZW50O1xyXG4gICAgdGhpcy5mb3JtSWRUb0Z1bGxGaWVsZE5hbWVbaWRdID0gZmllbGROYW1lO1xyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICBjb25zdCBncm91cE5hbWUgPSBmaWVsZE5hbWU7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lW2lkXSA9IGdyb3VwTmFtZTtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YVtncm91cE5hbWVdID0gcmFkaW9CdXR0b25WYWx1ZU5hbWUgYXMgc3RyaW5nO1xyXG4gICAgICB9XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdleHBvcnRWYWx1ZScsIHJhZGlvQnV0dG9uVmFsdWVOYW1lIGFzIHN0cmluZyk7XHJcbiAgICAgIGlmICghdGhpcy5yYWRpb0J1dHRvbnNbZ3JvdXBOYW1lXSkge1xyXG4gICAgICAgIHRoaXMucmFkaW9CdXR0b25zW2dyb3VwTmFtZV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJhZGlvQnV0dG9uc1tncm91cE5hbWVdLnB1c2goZWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB0aGlzLmdldFZhbHVlT2ZBU2VsZWN0RmllbGQoZWxlbWVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhW2ZpZWxkTmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJYRkFGaWVsZChlbGVtZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IHsgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XHJcbiAgICBjb25zdCBmdWxsRmllbGROYW1lID0gdGhpcy5maW5kRnVsbFhGQU5hbWUoZWxlbWVudCk7XHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ZpZWxkaWQnKSA/PyAnJztcclxuICAgICAgLy8gcmVtb3ZlIHRoZSB4ZmEgbmFtZSBvZiB0aGUgcmFkaW8gYnV0dG9uIGl0c2VsZiBmb3JtIHRoZSBmaWVsZCBuYW1lLFxyXG4gICAgICAvLyBiZWNhdXNlIHRoZSBmaWVsZCBuYW1lIHJlZmVycyB0byB0aGUgZW50aXJlIGdyb3VwIG9mIHJlbGF0YXRlZCByYWRpbyBidXR0b25zXHJcbiAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IGZ1bGxGaWVsZE5hbWUuc3Vic3RyaW5nKDAsIGZ1bGxGaWVsZE5hbWUubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lW2lkXSA9IGdyb3VwTmFtZTtcclxuICAgICAgdGhpcy5mb3JtRGF0YVtncm91cE5hbWVdID0gdmFsdWUudmFsdWU7XHJcbiAgICAgIGlmICghdGhpcy5yYWRpb0J1dHRvbnNbZ3JvdXBOYW1lXSkge1xyXG4gICAgICAgIHRoaXMucmFkaW9CdXR0b25zW2dyb3VwTmFtZV0gPSBbXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJhZGlvQnV0dG9uc1tncm91cE5hbWVdLnB1c2goZWxlbWVudCk7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ZpZWxkaWQnKSA/PyAnJztcclxuICAgICAgdGhpcy5mb3JtSWRUb0ZpZWxkW2lkXSA9IGVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lW2lkXSA9IGZ1bGxGaWVsZE5hbWU7XHJcbiAgICAgIHRoaXMuZm9ybURhdGFbZnVsbEZpZWxkTmFtZV0gPSB2YWx1ZS52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ZpZWxkaWQnKSA/PyAnJztcclxuICAgICAgdGhpcy5mb3JtSWRUb0ZpZWxkW2lkXSA9IGVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lW2lkXSA9IGZ1bGxGaWVsZE5hbWU7XHJcbiAgICAgIHRoaXMuZm9ybURhdGFbZnVsbEZpZWxkTmFtZV0gPSB2YWx1ZS52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgaWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZmllbGRpZCcpID8/ICcnO1xyXG4gICAgICB0aGlzLmZvcm1JZFRvRmllbGRbaWRdID0gZWxlbWVudDtcclxuICAgICAgdGhpcy5mb3JtSWRUb0Z1bGxGaWVsZE5hbWVbaWRdID0gZnVsbEZpZWxkTmFtZTtcclxuICAgICAgdGhpcy5mb3JtRGF0YVtmdWxsRmllbGROYW1lXSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IHJlZ2lzdGVyIGFuIFhGQSBmb3JtIGZpZWxkXCIsIGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZU9mQVNlbGVjdEZpZWxkKHNlbGVjdEVsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50KTogbnVsbCB8IHN0cmluZyB8IEFycmF5PHN0cmluZz4ge1xyXG4gICAgY29uc3QgeyBvcHRpb25zLCBtdWx0aXBsZSB9ID0gc2VsZWN0RWxlbWVudDtcclxuICAgIGlmICghbXVsdGlwbGUpIHtcclxuICAgICAgcmV0dXJuIG9wdGlvbnMuc2VsZWN0ZWRJbmRleCA9PT0gLTEgPyBudWxsIDogb3B0aW9uc1tvcHRpb25zLnNlbGVjdGVkSW5kZXhdWyd2YWx1ZSddO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChvcHRpb25zLCAob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpLm1hcCgob3B0aW9uKSA9PiBvcHRpb25bJ3ZhbHVlJ10pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRGb3JtVmFsdWVGcm9tQW5ndWxhcihlbGVtZW50OiBIVE1MRWxlbWVudCB8IHN0cmluZyk6IE9iamVjdCB7XHJcbiAgICBsZXQga2V5OiBzdHJpbmc7XHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHRoaXMuZmluZFhGQU5hbWUoZWxlbWVudCk7XHJcbiAgICAgIGlmIChmaWVsZE5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgICBrZXkgPSBmaWVsZE5hbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGtleSA9IHRoaXMuZmluZEZ1bGxYRkFOYW1lKGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGUgZmllbGQgbmFtZSBvciBYRkEgbmFtZSBvZiB0aGUgZm9ybSBmaWVsZFwiLCBlbGVtZW50KTtcclxuICAgICAgICByZXR1cm4geyB2YWx1ZTogbnVsbCB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBrZXkgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgdmFsdWU6IHRoaXMuZm9ybURhdGFba2V5XSB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kWEZBTmFtZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGFyZW50RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkID0gZWxlbWVudDtcclxuICAgIHdoaWxlICghcGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3hmYW5hbWUnKSAmJiBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgcGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIH1cclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgZG8ge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xyXG4gICAgICB9IHdoaWxlICghcGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCd4ZmFuYW1lJykgJiYgcGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBsZXQgZmllbGROYW1lID0gcGFyZW50RWxlbWVudD8uZ2V0QXR0cmlidXRlKCd4ZmFuYW1lJyk7XHJcbiAgICBpZiAoIWZpZWxkTmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIHRoZSB4ZmFuYW1lIG9mIHRoZSBmaWVsZFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmaWVsZE5hbWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRGdWxsWEZBTmFtZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XHJcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICBsZXQgZmllbGROYW1lID0gJyc7XHJcbiAgICB3aGlsZSAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCkge1xyXG4gICAgICBjb25zdCB4ZmFOYW1lID0gcGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3hmYW5hbWUnKTtcclxuICAgICAgaWYgKHhmYU5hbWUpIHtcclxuICAgICAgICBmaWVsZE5hbWUgPSB4ZmFOYW1lICsgJy4nICsgZmllbGROYW1lO1xyXG4gICAgICB9XHJcbiAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoIWZpZWxkTmFtZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIHRoZSB4ZmFuYW1lIG9mIHRoZSBmaWVsZFwiKTtcclxuICAgIH1cclxuICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5zdWJzdHJpbmcoMCwgZmllbGROYW1lLmxlbmd0aCAtIDEpO1xyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICAvLyBpZ25vcmUgdGhlIGxhc3QgcGFydCBvZiB0aGUgeGZhTmFtZSBiZWNhdXNlIGl0J3MgYWN0dWFsbHkgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICByZXR1cm4gZmllbGROYW1lLnN1YnN0cmluZygwLCBmaWVsZE5hbWUubGFzdEluZGV4T2YoJy4nKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmllbGROYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVBbmd1bGFyRm9ybVZhbHVlQ2FsbGVkQnlQZGZqcyhrZXk6IHN0cmluZyB8IEhUTUxTZWxlY3RFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsIHZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvcm1EYXRhKSB7XHJcbiAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgYWNyb0Zvcm1LZXkgPSB0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZVtrZXldO1xyXG4gICAgICBjb25zdCBmdWxsS2V5ID0gYWNyb0Zvcm1LZXkgPz8gT2JqZWN0LnZhbHVlcyh0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZSkuZmluZCgoaykgPT4gayA9PT0ga2V5IHx8IGsuZW5kc1dpdGgoJy4nICsga2V5KSk7XHJcbiAgICAgIGlmIChmdWxsS2V5KSB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLmZvcm1JZFRvRmllbGRba2V5XTtcclxuICAgICAgICBsZXQgY2hhbmdlID0gdGhpcy5kb1VwZGF0ZUFuZ3VsYXJGb3JtVmFsdWUoZmllbGQsIHZhbHVlLCBmdWxsS2V5KTtcclxuICAgICAgICBpZiAoY2hhbmdlKSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5mb3JtRGF0YUNoYW5nZS5lbWl0KHRoaXMuZm9ybURhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IGZpbmQgdGhlIGZpZWxkIHdpdGggdGhlIG5hbWUgXCIgKyBrZXkpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2U7XHJcbiAgICAgIGNvbnN0IHNob3J0RmllbGROYW1lID0gdGhpcy5maW5kWEZBTmFtZShrZXkpO1xyXG4gICAgICBpZiAodGhpcy5mb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShzaG9ydEZpZWxkTmFtZSkpIHtcclxuICAgICAgICBjaGFuZ2UgPSB0aGlzLmRvVXBkYXRlQW5ndWxhckZvcm1WYWx1ZShrZXksIHZhbHVlLCBzaG9ydEZpZWxkTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZnVsbEZpZWxkTmFtZSA9IHRoaXMuZmluZEZ1bGxYRkFOYW1lKGtleSk7XHJcbiAgICAgIGlmIChmdWxsRmllbGROYW1lICE9PSBzaG9ydEZpZWxkTmFtZSkge1xyXG4gICAgICAgIGNoYW5nZSB8fD0gdGhpcy5kb1VwZGF0ZUFuZ3VsYXJGb3JtVmFsdWUoa2V5LCB2YWx1ZSwgZnVsbEZpZWxkTmFtZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmZvcm1EYXRhQ2hhbmdlLmVtaXQodGhpcy5mb3JtRGF0YSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvVXBkYXRlQW5ndWxhckZvcm1WYWx1ZShmaWVsZDogSHRtbEZvcm1FbGVtZW50LCB2YWx1ZTogeyB2YWx1ZTogc3RyaW5nIH0sIGZ1bGxLZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xyXG4gICAgaWYgKGZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBmaWVsZC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgIGNvbnN0IGV4cG9ydFZhbHVlID0gZmllbGQuZ2V0QXR0cmlidXRlKCdleHBvcnR2YWx1ZScpO1xyXG4gICAgICBpZiAoZXhwb3J0VmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUudmFsdWUpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmZvcm1EYXRhW2Z1bGxLZXldICE9PSBleHBvcnRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2Z1bGxLZXldID0gZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLmZvcm1EYXRhW2Z1bGxLZXldICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm1EYXRhW2Z1bGxLZXldID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICh0aGlzLmZvcm1EYXRhW2Z1bGxLZXldICE9PSB2YWx1ZS52YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5mb3JtRGF0YVtmdWxsS2V5XSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgY2hhbmdlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZmllbGQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGZpZWxkLnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgY29uc3QgZXhwb3J0VmFsdWUgPSBmaWVsZC5nZXRBdHRyaWJ1dGUoJ2V4cG9ydHZhbHVlJykgPz8gZmllbGQuZ2V0QXR0cmlidXRlKCd4ZmFvbicpO1xyXG4gICAgICBpZiAodmFsdWUudmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtRGF0YVtmdWxsS2V5XSAhPT0gZXhwb3J0VmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybURhdGFbZnVsbEtleV0gPSBleHBvcnRWYWx1ZTtcclxuICAgICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5mb3JtRGF0YVtmdWxsS2V5XSAhPT0gdmFsdWUudmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvcm1EYXRhW2Z1bGxLZXldID0gdmFsdWUudmFsdWU7XHJcbiAgICAgICAgY2hhbmdlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNoYW5nZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVGb3JtRmllbGRzSW5QZGZDYWxsZWRCeU5nT25DaGFuZ2VzKHByZXZpb3VzRm9ybURhdGE6IE9iamVjdCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBpZiAoIVBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2UpIHtcclxuICAgICAgLy8gbmdPbkNoYW5nZXMgY2FsbHMgdGhpcyBtZXRob2QgdG9vIGVhcmx5IC0gc28ganVzdCBpZ25vcmUgaXRcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZm9ybURhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuZm9ybURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5mb3JtRGF0YVtrZXldO1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gcHJldmlvdXNGb3JtRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWVBbmRVcGRhdGVBbm5vdGF0aW9uU3RvcmFnZShrZXksIG5ld1ZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwcmV2aW91c0Zvcm1EYXRhKSB7XHJcbiAgICAgIGlmIChwcmV2aW91c0Zvcm1EYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJldmlvdXNGb3JtRGF0YVtrZXldKSB7XHJcbiAgICAgICAgbGV0IGhhc1ByZXZpb3VzVmFsdWUgPSB0aGlzLmZvcm1EYXRhLmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgICAgICAgaWYgKCFoYXNQcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgICBjb25zdCBmdWxsS2V5ID0gT2JqZWN0LmtleXModGhpcy5mb3JtRGF0YSkuZmluZCgoaykgPT4gayA9PT0ga2V5IHx8IGsuZW5kc1dpdGgoJy4nICsga2V5KSk7XHJcbiAgICAgICAgICBpZiAoZnVsbEtleSkge1xyXG4gICAgICAgICAgICBoYXNQcmV2aW91c1ZhbHVlID0gdGhpcy5mb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShmdWxsS2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaGFzUHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRGaWVsZFZhbHVlQW5kVXBkYXRlQW5ub3RhdGlvblN0b3JhZ2Uoa2V5LCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0RmllbGRWYWx1ZUFuZFVwZGF0ZUFubm90YXRpb25TdG9yYWdlKGtleTogc3RyaW5nLCBuZXdWYWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCByYWRpb3MgPSB0aGlzLmZpbmRSYWRpb0J1dHRvbkdyb3VwKGtleSk7XHJcbiAgICBpZiAocmFkaW9zKSB7XHJcbiAgICAgIHJhZGlvcy5mb3JFYWNoKChyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlVmFsdWUgPSByLmdldEF0dHJpYnV0ZSgnZXhwb3J0VmFsdWUnKSA/PyByLmdldEF0dHJpYnV0ZSgneGZhb24nKTtcclxuICAgICAgICByLmNoZWNrZWQgPSBhY3RpdmVWYWx1ZSA9PT0gbmV3VmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCB1cGRhdGVGcm9tQW5ndWxhciA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlRnJvbUFuZ3VsYXInLCB7XHJcbiAgICAgICAgZGV0YWlsOiBuZXdWYWx1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJhZGlvc1swXS5kaXNwYXRjaEV2ZW50KHVwZGF0ZUZyb21Bbmd1bGFyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZpZWxkSWQgPSB0aGlzLmZpbmRGb3JtSWRGcm9tRmllbGROYW1lKGtleSk7XHJcbiAgICAgIGlmIChmaWVsZElkKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbEZpZWxkID0gdGhpcy5mb3JtSWRUb0ZpZWxkW2ZpZWxkSWRdO1xyXG5cclxuICAgICAgICBpZiAoaHRtbEZpZWxkKSB7XHJcbiAgICAgICAgICBpZiAoaHRtbEZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBodG1sRmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlVmFsdWUgPSBodG1sRmllbGQuZ2V0QXR0cmlidXRlKCd4ZmFvbicpID8/IGh0bWxGaWVsZC5nZXRBdHRyaWJ1dGUoJ2V4cG9ydHZhbHVlJykgPz8gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09PSB0cnVlIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIGFjdGl2ZVZhbHVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sRmllbGQuY2hlY2tlZCA9IGFjdGl2ZVZhbHVlID09PSBuZXdWYWx1ZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoaHRtbEZpZWxkIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZVNlbGVjdEZpZWxkKGh0bWxGaWVsZCwgbmV3VmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdGV4dGFyZWFzIGFuZCBpbnB1dCBmaWVsZHNcclxuICAgICAgICAgICAgaHRtbEZpZWxkLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVGcm9tQW5ndWxhciA9IG5ldyBDdXN0b21FdmVudCgndXBkYXRlRnJvbUFuZ3VsYXInLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDogbmV3VmFsdWUsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGh0bWxGaWVsZC5kaXNwYXRjaEV2ZW50KHVwZGF0ZUZyb21Bbmd1bGFyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IHNldCB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXCIsIGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHBvcHVsYXRlU2VsZWN0RmllbGQoaHRtbEZpZWxkOiBIVE1MU2VsZWN0RWxlbWVudCwgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgaWYgKGh0bWxGaWVsZC5tdWx0aXBsZSkge1xyXG4gICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IGh0bWxGaWVsZDtcclxuICAgICAgY29uc3QgbmV3VmFsdWVBcnJheSA9IG5ld1ZhbHVlIGFzIEFycmF5PHN0cmluZz47XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IG9wdGlvbnMuaXRlbShpKTtcclxuICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBuZXdWYWx1ZUFycmF5LnNvbWUoKG8pID0+IG8gPT09IG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBodG1sRmllbGQudmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZEZvcm1JZEZyb21GaWVsZE5hbWUoZmllbGROYW1lOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gc29tZXRpbWVzLCBuZ09uQ2hhbmdlcygpIGlzIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIHRoZSBQREYgZmlsZVxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2hpbmdFbnRyaWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5mb3JtSWRUb0Z1bGxGaWVsZE5hbWUpLmZpbHRlcigoZW50cnkpID0+IGVudHJ5WzFdID09PSBmaWVsZE5hbWUgfHwgZW50cnlbMV0uZW5kc1dpdGgoJy4nICsgZmllbGROYW1lKSk7XHJcbiAgICBpZiAobWF0Y2hpbmdFbnRyaWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgYE1vcmUgdGhhbiBvbmUgZmllbGQgbmFtZSBtYXRjaGVzIHRoZSBmaWVsZCBuYW1lICR7ZmllbGROYW1lfS4gUGxlYXNlIHVzZSB0aGUgb25lIG9mIHRoZXNlIHF1YWxpZmllZCBmaWVsZCBuYW1lczpgLFxyXG4gICAgICAgIG1hdGNoaW5nRW50cmllcy5tYXAoKGYpID0+IGZbMV0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlciB1c2VzIHRoZSBmaXJzdCBtYXRjaGluZyBmaWVsZCAod2hpY2ggbWF5IG9yIG1heSBub3QgYmUgdGhlIHRvcG1vc3QgZmllbGQgb24geW91ciBQREYgZm9ybSk6ICcgKyBtYXRjaGluZ0VudHJpZXNbMF1bMF1cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAobWF0Y2hpbmdFbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvdWxkbid0IGZpbmQgdGhlIGZpZWxkIFwiICsgZmllbGROYW1lKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaGluZ0VudHJpZXNbMF1bMF07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRSYWRpb0J1dHRvbkdyb3VwKGZpZWxkTmFtZTogc3RyaW5nKTogQXJyYXk8SFRNTElucHV0RWxlbWVudD4gfCBudWxsIHtcclxuICAgIGNvbnN0IG1hdGNoaW5nRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMucmFkaW9CdXR0b25zKS5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeVswXS5lbmRzV2l0aCgnLicgKyBmaWVsZE5hbWUpIHx8IGVudHJ5WzBdID09PSBmaWVsZE5hbWUpO1xyXG4gICAgaWYgKG1hdGNoaW5nRW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBpZiAobWF0Y2hpbmdFbnRyaWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgJ01vcmUgdGhhbiBvbmUgcmFkaW8gYnV0dG9uIGdyb3VwIG5hbWUgbWF0Y2hlcyB0aGlzIG5hbWUuIFBsZWFzZSB1c2UgdGhlIHF1YWxpZmllZCBmaWVsZCBuYW1lJyxcclxuICAgICAgICBtYXRjaGluZ0VudHJpZXMubWFwKChyYWRpbykgPT4gcmFkaW9bMF0pXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlciB1c2VzIHRoZSBmaXJzdCBtYXRjaGluZyBmaWVsZCAod2hpY2ggbWF5IG5vdCBiZSB0aGUgdG9wbW9zdCBmaWVsZCBvbiB5b3VyIFBERiBmb3JtKTogJyArIG1hdGNoaW5nRW50cmllc1swXVswXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2hpbmdFbnRyaWVzWzBdWzFdO1xyXG4gIH1cclxufVxyXG4iXX0=