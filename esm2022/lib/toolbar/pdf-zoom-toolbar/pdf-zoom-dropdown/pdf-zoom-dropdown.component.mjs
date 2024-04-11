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
    const level_r1 = ctx.$implicit;
    i0.ɵɵproperty("id", level_r1.id);
    i0.ɵɵattribute("value", level_r1.value)("data-l10n-id", level_r1.dataL10nId)("data-l10n-args", level_r1.dataL10nArgs);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", level_r1.displayValue, " ");
} }
export class PdfZoomDropdownComponent {
    element;
    _zoomLevels = [];
    set zoomLevels(levels) {
        this._zoomLevels = levels.map((l) => this.valueToZoomLevel(l));
    }
    sizeSelector;
    constructor(element) {
        this.element = element;
    }
    valueToZoomLevel(value) {
        // const new TranslatePipe().transform('pdfjs-page-scale-percent', '{ $scale } %');
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
                dataL10nId: 'pdfjs-page-scale-' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        const percentage = Math.round(numericalValue * 100);
        const percentageAsString = isNaN(percentage) ? '' : String(percentage);
        return {
            id: `scale_${percentage}`,
            value: String(numericalValue),
            dataL10nId: 'pdfjs-page-scale-percent',
            dataL10nArgs: `{ "scale": ${percentageAsString} }`,
            displayValue: '',
        };
    }
    snakeToCamel(str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
    /** @nocollapse */ static ɵfac = function PdfZoomDropdownComponent_Factory(t) { return new (t || PdfZoomDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfZoomDropdownComponent, selectors: [["pdf-zoom-dropdown"]], viewQuery: function PdfZoomDropdownComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sizeSelector = _t.first);
        } }, inputs: { zoomLevels: "zoomLevels" }, decls: 6, vars: 1, consts: [["sizeSelector", ""], ["id", "scaleSelectContainer"], ["id", "scaleSelect", "title", "Zoom", "data-l10n-id", "pdfjs-zoom-select"], [3, "id", 4, "ngFor", "ngForOf"], ["id", "customScaleOption", "title", "", "value", "custom", "disabled", "disabled", "hidden", "true", "data-l10n-id", "pdfjs-page-scale-percent", "data-l10n-args", "{ \"scale\": 0 }"], [3, "id"]], template: function PdfZoomDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 1)(1, "select", 2, 0);
            i0.ɵɵtemplate(3, PdfZoomDropdownComponent_option_3_Template, 2, 5, "option", 3);
            i0.ɵɵelementStart(4, "option", 4);
            i0.ɵɵtext(5, " 0% ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx._zoomLevels);
        } }, dependencies: [i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption], styles: ["select[_ngcontent-%COMP%]{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption[_ngcontent-%COMP%]{display:none}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfZoomDropdownComponent, [{
        type: Component,
        args: [{ selector: 'pdf-zoom-dropdown', template: "<span id=\"scaleSelectContainer\">\r\n  <select id=\"scaleSelect\" title=\"Zoom\" data-l10n-id=\"pdfjs-zoom-select\" #sizeSelector>\r\n    <option\r\n      *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\"\r\n    >\r\n      {{ level.displayValue }}\r\n    </option>\r\n    <option\r\n      id=\"customScaleOption\"\r\n      title=\"\"\r\n      value=\"custom\"\r\n      disabled=\"disabled\"\r\n      hidden=\"true\"\r\n      data-l10n-id=\"pdfjs-page-scale-percent\"\r\n      data-l10n-args='{ \"scale\": 0 }'\r\n    >\r\n      0%\r\n    </option>\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"] }]
    }], () => [{ type: i0.ElementRef }], { zoomLevels: [{
            type: Input
        }], sizeSelector: [{
            type: ViewChild,
            args: ['sizeSelector']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfZoomDropdownComponent, { className: "PdfZoomDropdownComponent", filePath: "lib\\toolbar\\pdf-zoom-toolbar\\pdf-zoom-dropdown\\pdf-zoom-dropdown.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDRXBFLGlDQU1DO0lBQ0MsWUFDRjtJQUFBLGlCQUFTOzs7SUFOUCxnQ0FBZTs7SUFLZixjQUNGO0lBREUsc0RBQ0Y7O0FESUosTUFBTSxPQUFPLHdCQUF3QjtJQVVmO0lBVGIsV0FBVyxHQUFxQixFQUFFLENBQUM7SUFFMUMsSUFDVyxVQUFVLENBQUMsTUFBOEI7UUFDbEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRTBCLFlBQVksQ0FBTTtJQUU3QyxZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQztJQUVuQyxnQkFBZ0IsQ0FBQyxLQUFzQjtRQUM3QyxtRkFBbUY7UUFFbkYsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3QjtRQUNELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixPQUFPO2dCQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7Z0JBQ3ZDLEtBQUssRUFBRSxDQUFDO2dCQUNSLFVBQVUsRUFBRSxtQkFBbUIsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7Z0JBQ3hELFlBQVksRUFBRSxTQUFTO2dCQUN2QixZQUFZLEVBQUUsQ0FBQzthQUNoQixDQUFDO1NBQ0g7UUFDRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNwRCxNQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsT0FBTztZQUNMLEVBQUUsRUFBRSxTQUFTLFVBQVUsRUFBRTtZQUN6QixLQUFLLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQztZQUM3QixVQUFVLEVBQUUsMEJBQTBCO1lBQ3RDLFlBQVksRUFBRSxjQUFjLGtCQUFrQixJQUFJO1lBQ2xELFlBQVksRUFBRSxFQUFFO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEdBQVc7UUFDOUIsOERBQThEO1FBQzlELE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2RyxDQUFDO3FHQTVDVSx3QkFBd0I7NEZBQXhCLHdCQUF3Qjs7Ozs7O1lDYm5DLEFBREYsK0JBQWdDLG1CQUN1RDtZQUNuRiwrRUFNQztZQUdELGlDQVFDO1lBQ0Msb0JBQ0Y7WUFFSixBQURFLEFBREUsaUJBQVMsRUFDRixFQUNKOztZQXBCaUIsZUFBYztZQUFkLHlDQUFjOzs7aUZEV3pCLHdCQUF3QjtjQUxwQyxTQUFTOzJCQUNFLG1CQUFtQjsyQ0FRbEIsVUFBVTtrQkFEcEIsS0FBSztZQUtxQixZQUFZO2tCQUF0QyxTQUFTO21CQUFDLGNBQWM7O2tGQVJkLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW50ZXJmYWNlIFpvb21MZXZlbCB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBkYXRhTDEwbklkOiBzdHJpbmc7XHJcbiAgZGF0YUwxMG5BcmdzOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgdmFsdWU6IHN0cmluZztcclxuICBkaXNwbGF5VmFsdWU6IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi16b29tLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCB7XHJcbiAgcHVibGljIF96b29tTGV2ZWxzOiBBcnJheTxab29tTGV2ZWw+ID0gW107XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCB6b29tTGV2ZWxzKGxldmVsczogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPikge1xyXG4gICAgdGhpcy5fem9vbUxldmVscyA9IGxldmVscy5tYXAoKGwpID0+IHRoaXMudmFsdWVUb1pvb21MZXZlbChsKSk7XHJcbiAgfVxyXG5cclxuICBAVmlld0NoaWxkKCdzaXplU2VsZWN0b3InKSBzaXplU2VsZWN0b3I6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxyXG5cclxuICBwcml2YXRlIHZhbHVlVG9ab29tTGV2ZWwodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IFpvb21MZXZlbCB7XHJcbiAgICAvLyBjb25zdCBuZXcgVHJhbnNsYXRlUGlwZSgpLnRyYW5zZm9ybSgncGRmanMtcGFnZS1zY2FsZS1wZXJjZW50JywgJ3sgJHNjYWxlIH0gJScpO1xyXG5cclxuICAgIGlmICh2YWx1ZS50b1N0cmluZygpLmVuZHNXaXRoKCclJykpIHtcclxuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoJyUnLCAnJyk7XHJcbiAgICAgIHZhbHVlID0gTnVtYmVyKHZhbHVlKSAvIDEwMDtcclxuICAgIH1cclxuICAgIGNvbnN0IG51bWVyaWNhbFZhbHVlID0gTnVtYmVyKHZhbHVlKTtcclxuICAgIGlmICghbnVtZXJpY2FsVmFsdWUpIHtcclxuICAgICAgY29uc3QgdiA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IHRoaXMuc25ha2VUb0NhbWVsKHZhbHVlICsgJ09wdGlvbicpLFxyXG4gICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgIGRhdGFMMTBuSWQ6ICdwZGZqcy1wYWdlLXNjYWxlLScgKyB2LnJlcGxhY2UoJ3BhZ2UtJywgJycpLFxyXG4gICAgICAgIGRhdGFMMTBuQXJnczogdW5kZWZpbmVkLFxyXG4gICAgICAgIGRpc3BsYXlWYWx1ZTogdixcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLnJvdW5kKG51bWVyaWNhbFZhbHVlICogMTAwKTtcclxuICAgIGNvbnN0IHBlcmNlbnRhZ2VBc1N0cmluZyA9IGlzTmFOKHBlcmNlbnRhZ2UpID8gJycgOiBTdHJpbmcocGVyY2VudGFnZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogYHNjYWxlXyR7cGVyY2VudGFnZX1gLFxyXG4gICAgICB2YWx1ZTogU3RyaW5nKG51bWVyaWNhbFZhbHVlKSxcclxuICAgICAgZGF0YUwxMG5JZDogJ3BkZmpzLXBhZ2Utc2NhbGUtcGVyY2VudCcsXHJcbiAgICAgIGRhdGFMMTBuQXJnczogYHsgXCJzY2FsZVwiOiAke3BlcmNlbnRhZ2VBc1N0cmluZ30gfWAsXHJcbiAgICAgIGRpc3BsYXlWYWx1ZTogJycsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzbmFrZVRvQ2FtZWwoc3RyOiBzdHJpbmcpIHtcclxuICAgIC8vIGlkZWEgZm91bmQgaGVyZTogaHR0cHM6Ly9oaXNrLmlvL2phdmFzY3JpcHQtc25ha2UtdG8tY2FtZWwvXHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLV9dW2Etel0pL2csIChncm91cCkgPT4gZ3JvdXAudG9VcHBlckNhc2UoKS5yZXBsYWNlKCctJywgJycpLnJlcGxhY2UoJ18nLCAnJykpO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBpZD1cInNjYWxlU2VsZWN0Q29udGFpbmVyXCI+XHJcbiAgPHNlbGVjdCBpZD1cInNjYWxlU2VsZWN0XCIgdGl0bGU9XCJab29tXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtem9vbS1zZWxlY3RcIiAjc2l6ZVNlbGVjdG9yPlxyXG4gICAgPG9wdGlvblxyXG4gICAgICAqbmdGb3I9XCJsZXQgbGV2ZWwgb2YgX3pvb21MZXZlbHNcIlxyXG4gICAgICBbaWRdPVwibGV2ZWwuaWRcIlxyXG4gICAgICBbYXR0ci52YWx1ZV09XCJsZXZlbC52YWx1ZVwiXHJcbiAgICAgIFthdHRyLmRhdGEtbDEwbi1pZF09XCJsZXZlbC5kYXRhTDEwbklkXCJcclxuICAgICAgW2F0dHIuZGF0YS1sMTBuLWFyZ3NdPVwibGV2ZWwuZGF0YUwxMG5BcmdzXCJcclxuICAgID5cclxuICAgICAge3sgbGV2ZWwuZGlzcGxheVZhbHVlIH19XHJcbiAgICA8L29wdGlvbj5cclxuICAgIDxvcHRpb25cclxuICAgICAgaWQ9XCJjdXN0b21TY2FsZU9wdGlvblwiXHJcbiAgICAgIHRpdGxlPVwiXCJcclxuICAgICAgdmFsdWU9XCJjdXN0b21cIlxyXG4gICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcclxuICAgICAgaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgIGRhdGEtbDEwbi1pZD1cInBkZmpzLXBhZ2Utc2NhbGUtcGVyY2VudFwiXHJcbiAgICAgIGRhdGEtbDEwbi1hcmdzPSd7IFwic2NhbGVcIjogMCB9J1xyXG4gICAgPlxyXG4gICAgICAwJVxyXG4gICAgPC9vcHRpb24+XHJcbiAgPC9zZWxlY3Q+XHJcbjwvc3Bhbj5cclxuIl19