import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
const _c0 = ["sizeSelector"];
function PdfZoomDropdownComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r2 = ctx.$implicit;
    i0.ɵɵproperty("id", level_r2.id);
    i0.ɵɵattribute("value", level_r2.value)("data-l10n-id", level_r2.dataL10nId)("data-l10n-args", level_r2.dataL10nArgs);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", level_r2.displayValue, " ");
} }
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
/** @nocollapse */ PdfZoomDropdownComponent.ɵfac = function PdfZoomDropdownComponent_Factory(t) { return new (t || PdfZoomDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ PdfZoomDropdownComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomDropdownComponent, selectors: [["pdf-zoom-dropdown"]], viewQuery: function PdfZoomDropdownComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sizeSelector = _t.first);
    } }, inputs: { zoomLevels: "zoomLevels" }, decls: 5, vars: 1, consts: [["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "zoom"], ["sizeSelector", ""], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true"], [3, "id"]], template: function PdfZoomDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0)(1, "select", 1, 2);
        i0.ɵɵtemplate(3, PdfZoomDropdownComponent_option_3_Template, 2, 5, "option", 3);
        i0.ɵɵelement(4, "option", 4);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx._zoomLevels);
    } }, directives: [i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption], styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption[_ngcontent-%COMP%]{display:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomDropdownComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-dropdown', template: "<span id=\"scaleSelectContainer\">\n  <select\n    id=\"scaleSelect\"\n    title=\"Zoom\"\n    data-l10n-id=\"zoom\"\n    #sizeSelector\n  >\n    <option *ngFor=\"let level of _zoomLevels\"\n      [id]=\"level.id\"\n      [attr.value]=\"level.value\"\n      [attr.data-l10n-id]=\"level.dataL10nId\"\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\n      {{level.displayValue}}\n    </option>\n    <option\n    id=\"customScaleOption\"\n    title=\"\"\n    value=\"custom\"\n    disabled=\"disabled\"\n    hidden=\"true\"\n  ></option>\n\n  </select>\n</span>\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { zoomLevels: [{
            type: Input
        }], sizeSelector: [{
            type: ViewChild,
            args: ['sizeSelector']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDT3BFLGlDQUk2QztJQUMzQyxZQUNGO0lBQUEsaUJBQVM7OztJQUxQLGdDQUFlO0lBQ2YsdUNBQTBCLHFDQUFBLHlDQUFBO0lBRzFCLGVBQ0Y7SUFERSxzREFDRjs7QURDSixNQUFNLE9BQU8sd0JBQXdCO0lBVW5DLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFUaEMsZ0JBQVcsR0FBcUIsRUFBRSxDQUFDO0lBU0EsQ0FBQztJQVAzQyxJQUNXLFVBQVUsQ0FBQyxNQUE4QjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFNTyxnQkFBZ0IsQ0FBQyxLQUFzQjtRQUM3QyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzdCO1FBQ0QsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDdkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsVUFBVSxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQ2xELFlBQVksRUFBRSxTQUFTO2dCQUN2QixZQUFZLEVBQUUsQ0FBQzthQUNoQixDQUFDO1NBQ0g7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwRCxPQUFPO1lBQ0wsRUFBRSxFQUFFLFNBQVMsVUFBVSxFQUFFO1lBQ3pCLEtBQUssRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDO1lBQzdCLFVBQVUsRUFBRSxvQkFBb0I7WUFDaEMsWUFBWSxFQUFFLGNBQWMsVUFBVSxJQUFJO1lBQzFDLFlBQVksRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUc7U0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFTyxZQUFZLENBQUMsR0FBVztRQUM5Qiw4REFBOEQ7UUFDOUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZHLENBQUM7O21IQXpDVSx3QkFBd0I7MEdBQXhCLHdCQUF3Qjs7Ozs7O1FDZHJDLCtCQUFnQyxtQkFBQTtRQU81QiwrRUFNUztRQUNULDRCQU1RO1FBRVYsaUJBQVMsRUFBQTs7UUFmbUIsZUFBYztRQUFkLHlDQUFjOzt1RkRPL0Isd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0UsbUJBQW1COzZEQVFsQixVQUFVO2tCQURwQixLQUFLO1lBS3FCLFlBQVk7a0JBQXRDLFNBQVM7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgWm9vbUxldmVsIHtcbiAgaWQ6IHN0cmluZztcbiAgZGF0YUwxMG5JZDogc3RyaW5nO1xuICBkYXRhTDEwbkFyZ3M6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgdmFsdWU6IHN0cmluZztcbiAgZGlzcGxheVZhbHVlOiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtem9vbS1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IHtcbiAgcHVibGljIF96b29tTGV2ZWxzOiBBcnJheTxab29tTGV2ZWw+ID0gW107XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB6b29tTGV2ZWxzKGxldmVsczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPikge1xuICAgIHRoaXMuX3pvb21MZXZlbHMgPSBsZXZlbHMubWFwKChsKSA9PiB0aGlzLnZhbHVlVG9ab29tTGV2ZWwobCkpO1xuICB9XG5cbiAgQFZpZXdDaGlsZCgnc2l6ZVNlbGVjdG9yJykgc2l6ZVNlbGVjdG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIHByaXZhdGUgdmFsdWVUb1pvb21MZXZlbCh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogWm9vbUxldmVsIHtcbiAgICBpZiAodmFsdWUudG9TdHJpbmcoKS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgnJScsICcnKTtcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSAvIDEwMDtcbiAgICB9XG4gICAgY29uc3QgbnVtZXJpY2FsVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmICghbnVtZXJpY2FsVmFsdWUpIHtcbiAgICAgIGNvbnN0IHYgPSBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IHRoaXMuc25ha2VUb0NhbWVsKHZhbHVlICsgJ09wdGlvbicpLFxuICAgICAgICB2YWx1ZTogdixcbiAgICAgICAgZGF0YUwxMG5JZDogJ3BhZ2Vfc2NhbGVfJyArIHYucmVwbGFjZSgncGFnZS0nLCAnJyksXG4gICAgICAgIGRhdGFMMTBuQXJnczogdW5kZWZpbmVkLFxuICAgICAgICBkaXNwbGF5VmFsdWU6IHYsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5yb3VuZChudW1lcmljYWxWYWx1ZSAqIDEwMCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBgc2NhbGVfJHtwZXJjZW50YWdlfWAsXG4gICAgICB2YWx1ZTogU3RyaW5nKG51bWVyaWNhbFZhbHVlKSxcbiAgICAgIGRhdGFMMTBuSWQ6ICdwYWdlX3NjYWxlX3BlcmNlbnQnLFxuICAgICAgZGF0YUwxMG5BcmdzOiBgeyBcInNjYWxlXCI6ICR7cGVyY2VudGFnZX0gfWAsXG4gICAgICBkaXNwbGF5VmFsdWU6IGlzTmFOKHBlcmNlbnRhZ2UpID8gJycgOiBTdHJpbmcocGVyY2VudGFnZSkgKyAnJScsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc25ha2VUb0NhbWVsKHN0cjogc3RyaW5nKSB7XG4gICAgLy8gaWRlYSBmb3VuZCBoZXJlOiBodHRwczovL2hpc2suaW8vamF2YXNjcmlwdC1zbmFrZS10by1jYW1lbC9cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLV9dW2Etel0pL2csIChncm91cCkgPT4gZ3JvdXAudG9VcHBlckNhc2UoKS5yZXBsYWNlKCctJywgJycpLnJlcGxhY2UoJ18nLCAnJykpO1xuICB9XG59XG4iLCI8c3BhbiBpZD1cInNjYWxlU2VsZWN0Q29udGFpbmVyXCI+XG4gIDxzZWxlY3RcbiAgICBpZD1cInNjYWxlU2VsZWN0XCJcbiAgICB0aXRsZT1cIlpvb21cIlxuICAgIGRhdGEtbDEwbi1pZD1cInpvb21cIlxuICAgICNzaXplU2VsZWN0b3JcbiAgPlxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGxldmVsIG9mIF96b29tTGV2ZWxzXCJcbiAgICAgIFtpZF09XCJsZXZlbC5pZFwiXG4gICAgICBbYXR0ci52YWx1ZV09XCJsZXZlbC52YWx1ZVwiXG4gICAgICBbYXR0ci5kYXRhLWwxMG4taWRdPVwibGV2ZWwuZGF0YUwxMG5JZFwiXG4gICAgICBbYXR0ci5kYXRhLWwxMG4tYXJnc109XCJsZXZlbC5kYXRhTDEwbkFyZ3NcIj5cbiAgICAgIHt7bGV2ZWwuZGlzcGxheVZhbHVlfX1cbiAgICA8L29wdGlvbj5cbiAgICA8b3B0aW9uXG4gICAgaWQ9XCJjdXN0b21TY2FsZU9wdGlvblwiXG4gICAgdGl0bGU9XCJcIlxuICAgIHZhbHVlPVwiY3VzdG9tXCJcbiAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICBoaWRkZW49XCJ0cnVlXCJcbiAgPjwvb3B0aW9uPlxuXG4gIDwvc2VsZWN0PlxuPC9zcGFuPlxuIl19