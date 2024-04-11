import { EventEmitter } from '@angular/core';
export class NgxFormSupport {
    /** Maps the internal ids of the annotations of pdf.js to their field name */
    formIdToFullFieldName = {};
    formIdToField = {};
    radioButtons = {};
    formData = {};
    formDataChange = new EventEmitter();
    ngZone;
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
                change ||= this.doUpdateAngularFormValue(key, value, fullFieldName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvcm0tc3VwcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWZvcm0tc3VwcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS3JELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLDZFQUE2RTtJQUNyRSxxQkFBcUIsR0FBOEIsRUFBRSxDQUFDO0lBRXRELGFBQWEsR0FBdUMsRUFBRSxDQUFDO0lBRXZELFlBQVksR0FBK0MsRUFBRSxDQUFDO0lBRS9ELFFBQVEsR0FBaUIsRUFBRSxDQUFDO0lBRTVCLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQUVqRCxNQUFNLENBQVM7SUFFaEIsS0FBSztRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVNLDRCQUE0QixDQUFDLE1BQWM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDcEIsVUFBa0IsQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hHLFVBQWtCLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxHQUF3RSxFQUFFLEtBQXdCLEVBQUUsRUFBRSxDQUNsSixJQUFJLENBQUMsbUNBQW1DLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RELFVBQWtCLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxFQUFVLEVBQUUsT0FBd0IsRUFBRSxLQUE2QixFQUFFLG9CQUE2QixFQUFFLEVBQUUsQ0FDakosSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxF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ZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1FBQzFJLElBQUksZUFBZSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FDVCw4RkFBOEYsRUFDOUYsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pDLENBQUM7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLCtHQUErRyxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3RKO1FBQ0QsT0FBTyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybURhdGFUeXBlLCBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcclxuXHJcbmV4cG9ydCB0eXBlIEh0bWxGb3JtRWxlbWVudCA9IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcblxyXG5leHBvcnQgY2xhc3MgTmd4Rm9ybVN1cHBvcnQge1xyXG4gIC8qKiBNYXBzIHRoZSBpbnRlcm5hbCBpZHMgb2YgdGhlIGFubm90YXRpb25zIG9mIHBkZi5qcyB0byB0aGVpciBmaWVsZCBuYW1lICovXHJcbiAgcHJpdmF0ZSBmb3JtSWRUb0Z1bGxGaWVsZE5hbWU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtSWRUb0ZpZWxkOiB7IFtrZXk6IHN0cmluZ106IEh0bWxGb3JtRWxlbWVudCB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgcmFkaW9CdXR0b25zOiB7IFtrZXk6IHN0cmluZ106IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQ+IH0gPSB7fTtcclxuXHJcbiAgcHVibGljIGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUgPSB7fTtcclxuXHJcbiAgcHVibGljIGZvcm1EYXRhQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxGb3JtRGF0YVR5cGU+KCk7XHJcblxyXG4gIHByaXZhdGUgbmdab25lOiBOZ1pvbmU7XHJcblxyXG4gIHB1YmxpYyByZXNldCgpIHtcclxuICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcclxuICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVnaXN0ZXJGb3JtU3VwcG9ydFdpdGhQZGZqcyhuZ1pvbmU6IE5nWm9uZSk6IHZvaWQge1xyXG4gICAgdGhpcy5uZ1pvbmUgPSBuZ1pvbmU7XHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLmdldEZvcm1WYWx1ZUZyb21Bbmd1bGFyID0gKGtleTogc3RyaW5nKSA9PiB0aGlzLmdldEZvcm1WYWx1ZUZyb21Bbmd1bGFyKGtleSk7XHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLnVwZGF0ZUFuZ3VsYXJGb3JtVmFsdWUgPSAoa2V5OiBzdHJpbmcgfCBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCB2YWx1ZTogeyB2YWx1ZTogc3RyaW5nIH0pID0+XHJcbiAgICAgIHRoaXMudXBkYXRlQW5ndWxhckZvcm1WYWx1ZUNhbGxlZEJ5UGRmanMoa2V5LCB2YWx1ZSk7XHJcbiAgICAoZ2xvYmFsVGhpcyBhcyBhbnkpLnJlZ2lzdGVyQWNyb2Zvcm1GaWVsZCA9IChpZDogc3RyaW5nLCBlbGVtZW50OiBIdG1sRm9ybUVsZW1lbnQsIHZhbHVlOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LCByYWRpb0J1dHRvblZhbHVlTmFtZT86IHN0cmluZykgPT5cclxuICAgICAgdGhpcy5yZWdpc3RlckFjcm9mb3JtRmllbGQoaWQsIGVsZW1lbnQsIHZhbHVlLCByYWRpb0J1dHRvblZhbHVlTmFtZSk7XHJcblxyXG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5yZWdpc3RlclhGQUZpZWxkID0gKGVsZW1lbnQ6IEh0bWxGb3JtRWxlbWVudCwgdmFsdWU6IHsgdmFsdWU6IHN0cmluZyB9KSA9PiB0aGlzLnJlZ2lzdGVyWEZBRmllbGQoZWxlbWVudCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckFjcm9mb3JtRmllbGQoaWQ6IHN0cmluZywgZWxlbWVudDogSHRtbEZvcm1FbGVtZW50LCB2YWx1ZTogbnVsbCB8IHN0cmluZyB8IEFycmF5PHN0cmluZz4sIHJhZGlvQnV0dG9uVmFsdWVOYW1lPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBmaWVsZE5hbWUgPSBlbGVtZW50Lm5hbWU7XHJcbiAgICB0aGlzLmZvcm1JZFRvRmllbGRbaWRdID0gZWxlbWVudDtcclxuICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lW2lkXSA9IGZpZWxkTmFtZTtcclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgY29uc3QgZ3JvdXBOYW1lID0gZmllbGROYW1lO1xyXG4gICAgICB0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZVtpZF0gPSBncm91cE5hbWU7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZm9ybURhdGFbZ3JvdXBOYW1lXSA9IHJhZGlvQnV0dG9uVmFsdWVOYW1lIGFzIHN0cmluZztcclxuICAgICAgfVxyXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZXhwb3J0VmFsdWUnLCByYWRpb0J1dHRvblZhbHVlTmFtZSBhcyBzdHJpbmcpO1xyXG4gICAgICBpZiAoIXRoaXMucmFkaW9CdXR0b25zW2dyb3VwTmFtZV0pIHtcclxuICAgICAgICB0aGlzLnJhZGlvQnV0dG9uc1tncm91cE5hbWVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yYWRpb0J1dHRvbnNbZ3JvdXBOYW1lXS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gdGhpcy5nZXRWYWx1ZU9mQVNlbGVjdEZpZWxkKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mb3JtRGF0YVtmaWVsZE5hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyWEZBRmllbGQoZWxlbWVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiB7IHZhbHVlOiBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgY29uc3QgZnVsbEZpZWxkTmFtZSA9IHRoaXMuZmluZEZ1bGxYRkFOYW1lKGVsZW1lbnQpO1xyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIGVsZW1lbnQudHlwZSA9PT0gJ3JhZGlvJykge1xyXG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmaWVsZGlkJykgPz8gJyc7XHJcbiAgICAgIC8vIHJlbW92ZSB0aGUgeGZhIG5hbWUgb2YgdGhlIHJhZGlvIGJ1dHRvbiBpdHNlbGYgZm9ybSB0aGUgZmllbGQgbmFtZSxcclxuICAgICAgLy8gYmVjYXVzZSB0aGUgZmllbGQgbmFtZSByZWZlcnMgdG8gdGhlIGVudGlyZSBncm91cCBvZiByZWxhdGF0ZWQgcmFkaW8gYnV0dG9uc1xyXG4gICAgICBjb25zdCBncm91cE5hbWUgPSBmdWxsRmllbGROYW1lLnN1YnN0cmluZygwLCBmdWxsRmllbGROYW1lLmxhc3RJbmRleE9mKCcuJykpO1xyXG4gICAgICB0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZVtpZF0gPSBncm91cE5hbWU7XHJcbiAgICAgIHRoaXMuZm9ybURhdGFbZ3JvdXBOYW1lXSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICBpZiAoIXRoaXMucmFkaW9CdXR0b25zW2dyb3VwTmFtZV0pIHtcclxuICAgICAgICB0aGlzLnJhZGlvQnV0dG9uc1tncm91cE5hbWVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yYWRpb0J1dHRvbnNbZ3JvdXBOYW1lXS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmaWVsZGlkJykgPz8gJyc7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GaWVsZFtpZF0gPSBlbGVtZW50O1xyXG4gICAgICB0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZVtpZF0gPSBmdWxsRmllbGROYW1lO1xyXG4gICAgICB0aGlzLmZvcm1EYXRhW2Z1bGxGaWVsZE5hbWVdID0gdmFsdWUudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCBpZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdmaWVsZGlkJykgPz8gJyc7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GaWVsZFtpZF0gPSBlbGVtZW50O1xyXG4gICAgICB0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZVtpZF0gPSBmdWxsRmllbGROYW1lO1xyXG4gICAgICB0aGlzLmZvcm1EYXRhW2Z1bGxGaWVsZE5hbWVdID0gdmFsdWUudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGlkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2ZpZWxkaWQnKSA/PyAnJztcclxuICAgICAgdGhpcy5mb3JtSWRUb0ZpZWxkW2lkXSA9IGVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lW2lkXSA9IGZ1bGxGaWVsZE5hbWU7XHJcbiAgICAgIHRoaXMuZm9ybURhdGFbZnVsbEZpZWxkTmFtZV0gPSB2YWx1ZS52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCByZWdpc3RlciBhbiBYRkEgZm9ybSBmaWVsZFwiLCBlbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VmFsdWVPZkFTZWxlY3RGaWVsZChzZWxlY3RFbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudCk6IG51bGwgfCBzdHJpbmcgfCBBcnJheTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IHsgb3B0aW9ucywgbXVsdGlwbGUgfSA9IHNlbGVjdEVsZW1lbnQ7XHJcbiAgICBpZiAoIW11bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zLnNlbGVjdGVkSW5kZXggPT09IC0xID8gbnVsbCA6IG9wdGlvbnNbb3B0aW9ucy5zZWxlY3RlZEluZGV4XVsndmFsdWUnXTtcclxuICAgIH1cclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwob3B0aW9ucywgKG9wdGlvbikgPT4gb3B0aW9uLnNlbGVjdGVkKS5tYXAoKG9wdGlvbikgPT4gb3B0aW9uWyd2YWx1ZSddKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Rm9ybVZhbHVlRnJvbUFuZ3VsYXIoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBzdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgbGV0IGtleTogc3RyaW5nO1xyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICBjb25zdCBmaWVsZE5hbWUgPSB0aGlzLmZpbmRYRkFOYW1lKGVsZW1lbnQpO1xyXG4gICAgICBpZiAoZmllbGROYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybURhdGEuaGFzT3duUHJvcGVydHkoZmllbGROYW1lKSkge1xyXG4gICAgICAgICAga2V5ID0gZmllbGROYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBrZXkgPSB0aGlzLmZpbmRGdWxsWEZBTmFtZShlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkbid0IGZpbmQgdGhlIGZpZWxkIG5hbWUgb3IgWEZBIG5hbWUgb2YgdGhlIGZvcm0gZmllbGRcIiwgZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG51bGwgfTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAga2V5ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHZhbHVlOiB0aGlzLmZvcm1EYXRhW2tleV0gfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmluZFhGQU5hbWUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZCA9IGVsZW1lbnQ7XHJcbiAgICB3aGlsZSAoIXBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4ZmFuYW1lJykgJiYgcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQgPSBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZWxlbWVudC50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcclxuICAgICAgfSB3aGlsZSAoIXBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgneGZhbmFtZScpICYmIHBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgbGV0IGZpZWxkTmFtZSA9IHBhcmVudEVsZW1lbnQ/LmdldEF0dHJpYnV0ZSgneGZhbmFtZScpO1xyXG4gICAgaWYgKCFmaWVsZE5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGUgeGZhbmFtZSBvZiB0aGUgZmllbGRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmllbGROYW1lO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kRnVsbFhGQU5hbWUoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBzdHJpbmcge1xyXG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgbGV0IGZpZWxkTmFtZSA9ICcnO1xyXG4gICAgd2hpbGUgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBwYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgeGZhTmFtZSA9IHBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd4ZmFuYW1lJyk7XHJcbiAgICAgIGlmICh4ZmFOYW1lKSB7XHJcbiAgICAgICAgZmllbGROYW1lID0geGZhTmFtZSArICcuJyArIGZpZWxkTmFtZTtcclxuICAgICAgfVxyXG4gICAgICBwYXJlbnRFbGVtZW50ID0gcGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKCFmaWVsZE5hbWUpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCB0aGUgeGZhbmFtZSBvZiB0aGUgZmllbGRcIik7XHJcbiAgICB9XHJcbiAgICBmaWVsZE5hbWUgPSBmaWVsZE5hbWUuc3Vic3RyaW5nKDAsIGZpZWxkTmFtZS5sZW5ndGggLSAxKTtcclxuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBlbGVtZW50LnR5cGUgPT09ICdyYWRpbycpIHtcclxuICAgICAgLy8gaWdub3JlIHRoZSBsYXN0IHBhcnQgb2YgdGhlIHhmYU5hbWUgYmVjYXVzZSBpdCdzIGFjdHVhbGx5IHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAgcmV0dXJuIGZpZWxkTmFtZS5zdWJzdHJpbmcoMCwgZmllbGROYW1lLmxhc3RJbmRleE9mKCcuJykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZpZWxkTmFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQW5ndWxhckZvcm1WYWx1ZUNhbGxlZEJ5UGRmanMoa2V5OiBzdHJpbmcgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCB2YWx1ZTogeyB2YWx1ZTogc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb3JtRGF0YSkge1xyXG4gICAgICB0aGlzLmZvcm1EYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGNvbnN0IGFjcm9Gb3JtS2V5ID0gdGhpcy5mb3JtSWRUb0Z1bGxGaWVsZE5hbWVba2V5XTtcclxuICAgICAgY29uc3QgZnVsbEtleSA9IGFjcm9Gb3JtS2V5ID8/IE9iamVjdC52YWx1ZXModGhpcy5mb3JtSWRUb0Z1bGxGaWVsZE5hbWUpLmZpbmQoKGspID0+IGsgPT09IGtleSB8fCBrLmVuZHNXaXRoKCcuJyArIGtleSkpO1xyXG4gICAgICBpZiAoZnVsbEtleSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5mb3JtSWRUb0ZpZWxkW2tleV07XHJcbiAgICAgICAgbGV0IGNoYW5nZSA9IHRoaXMuZG9VcGRhdGVBbmd1bGFyRm9ybVZhbHVlKGZpZWxkLCB2YWx1ZSwgZnVsbEtleSk7XHJcbiAgICAgICAgaWYgKGNoYW5nZSkge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuZm9ybURhdGFDaGFuZ2UuZW1pdCh0aGlzLmZvcm1EYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBmaW5kIHRoZSBmaWVsZCB3aXRoIHRoZSBuYW1lIFwiICsga2V5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlO1xyXG4gICAgICBjb25zdCBzaG9ydEZpZWxkTmFtZSA9IHRoaXMuZmluZFhGQU5hbWUoa2V5KTtcclxuICAgICAgaWYgKHRoaXMuZm9ybURhdGEuaGFzT3duUHJvcGVydHkoc2hvcnRGaWVsZE5hbWUpKSB7XHJcbiAgICAgICAgY2hhbmdlID0gdGhpcy5kb1VwZGF0ZUFuZ3VsYXJGb3JtVmFsdWUoa2V5LCB2YWx1ZSwgc2hvcnRGaWVsZE5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZ1bGxGaWVsZE5hbWUgPSB0aGlzLmZpbmRGdWxsWEZBTmFtZShrZXkpO1xyXG4gICAgICBpZiAoZnVsbEZpZWxkTmFtZSAhPT0gc2hvcnRGaWVsZE5hbWUpIHtcclxuICAgICAgICBjaGFuZ2UgfHw9IHRoaXMuZG9VcGRhdGVBbmd1bGFyRm9ybVZhbHVlKGtleSwgdmFsdWUsIGZ1bGxGaWVsZE5hbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjaGFuZ2UpIHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5mb3JtRGF0YUNoYW5nZS5lbWl0KHRoaXMuZm9ybURhdGEpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1VwZGF0ZUFuZ3VsYXJGb3JtVmFsdWUoZmllbGQ6IEh0bWxGb3JtRWxlbWVudCwgdmFsdWU6IHsgdmFsdWU6IHN0cmluZyB9LCBmdWxsS2V5OiBzdHJpbmcpIHtcclxuICAgIGxldCBjaGFuZ2UgPSBmYWxzZTtcclxuICAgIGlmIChmaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xyXG4gICAgICBjb25zdCBleHBvcnRWYWx1ZSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgnZXhwb3J0dmFsdWUnKTtcclxuICAgICAgaWYgKGV4cG9ydFZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5mb3JtRGF0YVtmdWxsS2V5XSAhPT0gZXhwb3J0VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRGF0YVtmdWxsS2V5XSA9IGV4cG9ydFZhbHVlO1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5mb3JtRGF0YVtmdWxsS2V5XSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtRGF0YVtmdWxsS2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5mb3JtRGF0YVtmdWxsS2V5XSAhPT0gdmFsdWUudmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuZm9ybURhdGFbZnVsbEtleV0gPSB2YWx1ZS52YWx1ZTtcclxuICAgICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZpZWxkIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBmaWVsZC50eXBlID09PSAncmFkaW8nKSB7XHJcbiAgICAgIGNvbnN0IGV4cG9ydFZhbHVlID0gZmllbGQuZ2V0QXR0cmlidXRlKCdleHBvcnR2YWx1ZScpID8/IGZpZWxkLmdldEF0dHJpYnV0ZSgneGZhb24nKTtcclxuICAgICAgaWYgKHZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZm9ybURhdGFbZnVsbEtleV0gIT09IGV4cG9ydFZhbHVlKSB7XHJcbiAgICAgICAgICB0aGlzLmZvcm1EYXRhW2Z1bGxLZXldID0gZXhwb3J0VmFsdWU7XHJcbiAgICAgICAgICBjaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuZm9ybURhdGFbZnVsbEtleV0gIT09IHZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtRGF0YVtmdWxsS2V5XSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNoYW5nZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlRm9ybUZpZWxkc0luUGRmQ2FsbGVkQnlOZ09uQ2hhbmdlcyhwcmV2aW91c0Zvcm1EYXRhOiBPYmplY3QpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlKSB7XHJcbiAgICAgIC8vIG5nT25DaGFuZ2VzIGNhbGxzIHRoaXMgbWV0aG9kIHRvbyBlYXJseSAtIHNvIGp1c3QgaWdub3JlIGl0XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmZvcm1EYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLmZvcm1EYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZm9ybURhdGFba2V5XTtcclxuICAgICAgICBpZiAobmV3VmFsdWUgIT09IHByZXZpb3VzRm9ybURhdGFba2V5XSkge1xyXG4gICAgICAgICAgdGhpcy5zZXRGaWVsZFZhbHVlQW5kVXBkYXRlQW5ub3RhdGlvblN0b3JhZ2Uoa2V5LCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJldmlvdXNGb3JtRGF0YSkge1xyXG4gICAgICBpZiAocHJldmlvdXNGb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZXZpb3VzRm9ybURhdGFba2V5XSkge1xyXG4gICAgICAgIGxldCBoYXNQcmV2aW91c1ZhbHVlID0gdGhpcy5mb3JtRGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpO1xyXG4gICAgICAgIGlmICghaGFzUHJldmlvdXNWYWx1ZSkge1xyXG4gICAgICAgICAgY29uc3QgZnVsbEtleSA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybURhdGEpLmZpbmQoKGspID0+IGsgPT09IGtleSB8fCBrLmVuZHNXaXRoKCcuJyArIGtleSkpO1xyXG4gICAgICAgICAgaWYgKGZ1bGxLZXkpIHtcclxuICAgICAgICAgICAgaGFzUHJldmlvdXNWYWx1ZSA9IHRoaXMuZm9ybURhdGEuaGFzT3duUHJvcGVydHkoZnVsbEtleSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWhhc1ByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RmllbGRWYWx1ZUFuZFVwZGF0ZUFubm90YXRpb25TdG9yYWdlKGtleSwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldEZpZWxkVmFsdWVBbmRVcGRhdGVBbm5vdGF0aW9uU3RvcmFnZShrZXk6IHN0cmluZywgbmV3VmFsdWU6IGFueSkge1xyXG4gICAgY29uc3QgcmFkaW9zID0gdGhpcy5maW5kUmFkaW9CdXR0b25Hcm91cChrZXkpO1xyXG4gICAgaWYgKHJhZGlvcykge1xyXG4gICAgICByYWRpb3MuZm9yRWFjaCgocikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVZhbHVlID0gci5nZXRBdHRyaWJ1dGUoJ2V4cG9ydFZhbHVlJykgPz8gci5nZXRBdHRyaWJ1dGUoJ3hmYW9uJyk7XHJcbiAgICAgICAgci5jaGVja2VkID0gYWN0aXZlVmFsdWUgPT09IG5ld1ZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgdXBkYXRlRnJvbUFuZ3VsYXIgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZUZyb21Bbmd1bGFyJywge1xyXG4gICAgICAgIGRldGFpbDogbmV3VmFsdWUsXHJcbiAgICAgIH0pO1xyXG4gICAgICByYWRpb3NbMF0uZGlzcGF0Y2hFdmVudCh1cGRhdGVGcm9tQW5ndWxhcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmaWVsZElkID0gdGhpcy5maW5kRm9ybUlkRnJvbUZpZWxkTmFtZShrZXkpO1xyXG4gICAgICBpZiAoZmllbGRJZCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWxGaWVsZCA9IHRoaXMuZm9ybUlkVG9GaWVsZFtmaWVsZElkXTtcclxuXHJcbiAgICAgICAgaWYgKGh0bWxGaWVsZCkge1xyXG4gICAgICAgICAgaWYgKGh0bWxGaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgaHRtbEZpZWxkLnR5cGUgPT09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgbGV0IGFjdGl2ZVZhbHVlID0gaHRtbEZpZWxkLmdldEF0dHJpYnV0ZSgneGZhb24nKSA/PyBodG1sRmllbGQuZ2V0QXR0cmlidXRlKCdleHBvcnR2YWx1ZScpID8/IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSB8fCBuZXdWYWx1ZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICBhY3RpdmVWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaHRtbEZpZWxkLmNoZWNrZWQgPSBhY3RpdmVWYWx1ZSA9PT0gbmV3VmFsdWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGh0bWxGaWVsZCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVTZWxlY3RGaWVsZChodG1sRmllbGQsIG5ld1ZhbHVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRleHRhcmVhcyBhbmQgaW5wdXQgZmllbGRzXHJcbiAgICAgICAgICAgIGh0bWxGaWVsZC52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlRnJvbUFuZ3VsYXIgPSBuZXcgQ3VzdG9tRXZlbnQoJ3VwZGF0ZUZyb21Bbmd1bGFyJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBodG1sRmllbGQuZGlzcGF0Y2hFdmVudCh1cGRhdGVGcm9tQW5ndWxhcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZG4ndCBzZXQgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFwiLCBrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwb3B1bGF0ZVNlbGVjdEZpZWxkKGh0bWxGaWVsZDogSFRNTFNlbGVjdEVsZW1lbnQsIG5ld1ZhbHVlOiBhbnkpIHtcclxuICAgIGlmIChodG1sRmllbGQubXVsdGlwbGUpIHtcclxuICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSBodG1sRmllbGQ7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlQXJyYXkgPSBuZXdWYWx1ZSBhcyBBcnJheTxzdHJpbmc+O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBvcHRpb25zLml0ZW0oaSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gbmV3VmFsdWVBcnJheS5zb21lKChvKSA9PiBvID09PSBvcHRpb24udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaHRtbEZpZWxkLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRGb3JtSWRGcm9tRmllbGROYW1lKGZpZWxkTmFtZTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChPYmplY3QuZW50cmllcyh0aGlzLmZvcm1JZFRvRnVsbEZpZWxkTmFtZSkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIC8vIHNvbWV0aW1lcywgbmdPbkNoYW5nZXMoKSBpcyBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyB0aGUgUERGIGZpbGVcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoaW5nRW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuZm9ybUlkVG9GdWxsRmllbGROYW1lKS5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeVsxXSA9PT0gZmllbGROYW1lIHx8IGVudHJ5WzFdLmVuZHNXaXRoKCcuJyArIGZpZWxkTmFtZSkpO1xyXG4gICAgaWYgKG1hdGNoaW5nRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIGBNb3JlIHRoYW4gb25lIGZpZWxkIG5hbWUgbWF0Y2hlcyB0aGUgZmllbGQgbmFtZSAke2ZpZWxkTmFtZX0uIFBsZWFzZSB1c2UgdGhlIG9uZSBvZiB0aGVzZSBxdWFsaWZpZWQgZmllbGQgbmFtZXM6YCxcclxuICAgICAgICBtYXRjaGluZ0VudHJpZXMubWFwKChmKSA9PiBmWzFdKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIgdXNlcyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmllbGQgKHdoaWNoIG1heSBvciBtYXkgbm90IGJlIHRoZSB0b3Btb3N0IGZpZWxkIG9uIHlvdXIgUERGIGZvcm0pOiAnICsgbWF0Y2hpbmdFbnRyaWVzWzBdWzBdXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKG1hdGNoaW5nRW50cmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDb3VsZG4ndCBmaW5kIHRoZSBmaWVsZCBcIiArIGZpZWxkTmFtZSk7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2hpbmdFbnRyaWVzWzBdWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmaW5kUmFkaW9CdXR0b25Hcm91cChmaWVsZE5hbWU6IHN0cmluZyk6IEFycmF5PEhUTUxJbnB1dEVsZW1lbnQ+IHwgbnVsbCB7XHJcbiAgICBjb25zdCBtYXRjaGluZ0VudHJpZXMgPSBPYmplY3QuZW50cmllcyh0aGlzLnJhZGlvQnV0dG9ucykuZmlsdGVyKChlbnRyeSkgPT4gZW50cnlbMF0uZW5kc1dpdGgoJy4nICsgZmllbGROYW1lKSB8fCBlbnRyeVswXSA9PT0gZmllbGROYW1lKTtcclxuICAgIGlmIChtYXRjaGluZ0VudHJpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG1hdGNoaW5nRW50cmllcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdNb3JlIHRoYW4gb25lIHJhZGlvIGJ1dHRvbiBncm91cCBuYW1lIG1hdGNoZXMgdGhpcyBuYW1lLiBQbGVhc2UgdXNlIHRoZSBxdWFsaWZpZWQgZmllbGQgbmFtZScsXHJcbiAgICAgICAgbWF0Y2hpbmdFbnRyaWVzLm1hcCgocmFkaW8pID0+IHJhZGlvWzBdKVxyXG4gICAgICApO1xyXG4gICAgICBjb25zb2xlLmxvZygnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIgdXNlcyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmllbGQgKHdoaWNoIG1heSBub3QgYmUgdGhlIHRvcG1vc3QgZmllbGQgb24geW91ciBQREYgZm9ybSk6ICcgKyBtYXRjaGluZ0VudHJpZXNbMF1bMF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nRW50cmllc1swXVsxXTtcclxuICB9XHJcbn1cclxuIl19