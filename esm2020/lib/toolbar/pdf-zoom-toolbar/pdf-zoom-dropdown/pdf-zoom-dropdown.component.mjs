import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
export class PdfZoomDropdownComponent {
    constructor(element) {
        this.element = element;
        this._zoomLevels = [];
    }
    set zoomLevels(levels) {
        this._zoomLevels = levels.map((l) => this.valueToZoomLevel(l));
    }
    valueToZoomLevel(value) {
        if (value.toString().endsWith('%')) {
            value = value.toString().replace('%', '');
            value = Number(value) / 100;
        }
        const numericalValue = Number(value);
        if (!numericalValue) {
            const v = String(value);
            return {
                id: this.snakeToCamel(value + 'Option'),
                value: v,
                dataL10nId: 'page_scale_' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        const percentage = Math.round(numericalValue * 100);
        return {
            id: `scale_${percentage}`,
            value: String(numericalValue),
            dataL10nId: 'page_scale_percent',
            dataL10nArgs: `{ "scale": ${percentage} }`,
            displayValue: isNaN(percentage) ? '' : String(percentage) + '%',
        };
    }
    snakeToCamel(str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}
PdfZoomDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomDropdownComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PdfZoomDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfZoomDropdownComponent, selector: "pdf-zoom-dropdown", inputs: { zoomLevels: "zoomLevels" }, viewQueries: [{ propertyName: "sizeSelector", first: true, predicate: ["sizeSelector"], descendants: true }], ngImport: i0, template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-zoom-dropdown', template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { zoomLevels: [{
                type: Input
            }], sizeSelector: [{
                type: ViewChild,
                args: ['sizeSelector']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBY3hFLE1BQU0sT0FBTyx3QkFBd0I7SUFVbkMsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVRoQyxnQkFBVyxHQUFxQixFQUFFLENBQUM7SUFTQSxDQUFDO0lBUDNDLElBQ1csVUFBVSxDQUFDLE1BQThCO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQU1PLGdCQUFnQixDQUFDLEtBQXNCO1FBQzdDLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDMUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDN0I7UUFDRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNuQixNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsT0FBTztnQkFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixVQUFVLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztnQkFDbEQsWUFBWSxFQUFFLFNBQVM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDO2FBQ2hCLENBQUM7U0FDSDtRQUNELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELE9BQU87WUFDTCxFQUFFLEVBQUUsU0FBUyxVQUFVLEVBQUU7WUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDN0IsVUFBVSxFQUFFLG9CQUFvQjtZQUNoQyxZQUFZLEVBQUUsY0FBYyxVQUFVLElBQUk7WUFDMUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRztTQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVksQ0FBQyxHQUFXO1FBQzlCLDhEQUE4RDtRQUM5RCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7cUhBekNVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDZNQ2RyQyx1bUJBd0JBOzJGRFZhLHdCQUF3QjtrQkFMcEMsU0FBUzsrQkFDRSxtQkFBbUI7aUdBUWxCLFVBQVU7c0JBRHBCLEtBQUs7Z0JBS3FCLFlBQVk7c0JBQXRDLFNBQVM7dUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW50ZXJmYWNlIFpvb21MZXZlbCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBkYXRhTDEwbklkOiBzdHJpbmc7XHJcbiAgZGF0YUwxMG5BcmdzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBkaXNwbGF5VmFsdWU6IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi16b29tLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCB7XHJcbiAgcHVibGljIF96b29tTGV2ZWxzOiBBcnJheTxab29tTGV2ZWw+ID0gW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCB6b29tTGV2ZWxzKGxldmVsczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPikge1xyXG4gICAgdGhpcy5fem9vbUxldmVscyA9IGxldmVscy5tYXAoKGwpID0+IHRoaXMudmFsdWVUb1pvb21MZXZlbChsKSk7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdzaXplU2VsZWN0b3InKSBzaXplU2VsZWN0b3I6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBwcml2YXRlIHZhbHVlVG9ab29tTGV2ZWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFpvb21MZXZlbCB7XHJcbiAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5lbmRzV2l0aCgnJScpKSB7XHJcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS5yZXBsYWNlKCclJywgJycpO1xyXG4gICAgICB2YWx1ZSA9IE51bWJlcih2YWx1ZSkgLyAxMDA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBudW1lcmljYWxWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICBpZiAoIW51bWVyaWNhbFZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHYgPSBTdHJpbmcodmFsdWUpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlkOiB0aGlzLnNuYWtlVG9DYW1lbCh2YWx1ZSArICdPcHRpb24nKSxcclxuICAgICAgICB2YWx1ZTogdixcclxuICAgICAgICBkYXRhTDEwbklkOiAncGFnZV9zY2FsZV8nICsgdi5yZXBsYWNlKCdwYWdlLScsICcnKSxcclxuICAgICAgICBkYXRhTDEwbkFyZ3M6IHVuZGVmaW5lZCxcclxuICAgICAgICBkaXNwbGF5VmFsdWU6IHYsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZChudW1lcmljYWxWYWx1ZSAqIDEwMCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogYHNjYWxlXyR7cGVyY2VudGFnZX1gLFxyXG4gICAgICB2YWx1ZTogU3RyaW5nKG51bWVyaWNhbFZhbHVlKSxcclxuICAgICAgZGF0YUwxMG5JZDogJ3BhZ2Vfc2NhbGVfcGVyY2VudCcsXHJcbiAgICAgIGRhdGFMMTBuQXJnczogYHsgXCJzY2FsZVwiOiAke3BlcmNlbnRhZ2V9IH1gLFxyXG4gICAgICBkaXNwbGF5VmFsdWU6IGlzTmFOKHBlcmNlbnRhZ2UpID8gJycgOiBTdHJpbmcocGVyY2VudGFnZSkgKyAnJScsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzbmFrZVRvQ2FtZWwoc3RyOiBzdHJpbmcpIHtcclxuICAgIC8vIGlkZWEgZm91bmQgaGVyZTogaHR0cHM6Ly9oaXNrLmlvL2phdmFzY3JpcHQtc25ha2UtdG8tY2FtZWwvXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLV9dW2Etel0pL2csIChncm91cCkgPT4gZ3JvdXAudG9VcHBlckNhc2UoKS5yZXBsYWNlKCctJywgJycpLnJlcGxhY2UoJ18nLCAnJykpO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBpZD1cInNjYWxlU2VsZWN0Q29udGFpbmVyXCI+XHJcbiAgPHNlbGVjdFxyXG4gICAgaWQ9XCJzY2FsZVNlbGVjdFwiXHJcbiAgICB0aXRsZT1cIlpvb21cIlxyXG4gICAgZGF0YS1sMTBuLWlkPVwiem9vbVwiXHJcbiAgICAjc2l6ZVNlbGVjdG9yXHJcbiAgPlxyXG4gICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgX3pvb21MZXZlbHNcIlxyXG4gICAgICBbaWRdPVwibGV2ZWwuaWRcIlxyXG4gICAgICBbYXR0ci52YWx1ZV09XCJsZXZlbC52YWx1ZVwiXHJcbiAgICAgIFthdHRyLmRhdGEtbDEwbi1pZF09XCJsZXZlbC5kYXRhTDEwbklkXCJcclxuICAgICAgW2F0dHIuZGF0YS1sMTBuLWFyZ3NdPVwibGV2ZWwuZGF0YUwxMG5BcmdzXCI+XHJcbiAgICAgIHt7bGV2ZWwuZGlzcGxheVZhbHVlfX1cclxuICAgIDwvb3B0aW9uPlxyXG4gICAgPG9wdGlvblxyXG4gICAgaWQ9XCJjdXN0b21TY2FsZU9wdGlvblwiXHJcbiAgICB0aXRsZT1cIlwiXHJcbiAgICB2YWx1ZT1cImN1c3RvbVwiXHJcbiAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgIGhpZGRlbj1cInRydWVcIlxyXG4gID48L29wdGlvbj5cclxuXHJcbiAgPC9zZWxlY3Q+XHJcbjwvc3Bhbj5cclxuIl19