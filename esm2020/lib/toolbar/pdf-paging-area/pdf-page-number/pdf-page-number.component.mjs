import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../responsive-visibility";
export class PdfPageNumberComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
/** @nocollapse */ PdfPageNumberComponent.ɵfac = function PdfPageNumberComponent_Factory(t) { return new (t || PdfPageNumberComponent)(); };
/** @nocollapse */ PdfPageNumberComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPageNumberComponent, selectors: [["pdf-page-number"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 3, vars: 5, consts: [["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "page", "autocomplete", "off", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel"]], template: function PdfPageNumberComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0);
        i0.ɵɵelementStart(1, "span", 1);
        i0.ɵɵpipe(2, "responsiveCSSClass");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(i0.ɵɵpipeBind2(2, 2, ctx.showPagingButtons, "hiddenXLView"));
    } }, pipes: [i1.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPageNumberComponent, [{
        type: Component,
        args: [{ selector: 'pdf-page-number', template: "<input type=\"number\" id=\"pageNumber\" class=\"toolbarField pageNumber\" title=\"Page\" value=\"1\" size=\"4\" min=\"1\" data-l10n-id=\"page\" autocomplete=\"off\" />\r\n<span [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXLView'\" id=\"numPages\" class=\"toolbarLabel\"></span>\r\n", styles: ["button{padding:0}\n"] }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBT1Msc0JBQWlCLEdBQUcsSUFBSSxDQUFDO0tBQ2pDOzsrR0FIWSxzQkFBc0I7d0dBQXRCLHNCQUFzQjtRQ1BuQywyQkFBc0o7UUFDdEosK0JBQTJHOztRQUFBLGlCQUFPOztRQUE1RyxlQUFpRTtRQUFqRSwwRUFBaUU7O3VGRE0xRCxzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUI7Z0JBTXBCLGlCQUFpQjtrQkFEdkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXBhZ2UtbnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUGFnZU51bWJlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xyXG59XHJcbiIsIjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwYWdlTnVtYmVyXCIgY2xhc3M9XCJ0b29sYmFyRmllbGQgcGFnZU51bWJlclwiIHRpdGxlPVwiUGFnZVwiIHZhbHVlPVwiMVwiIHNpemU9XCI0XCIgbWluPVwiMVwiIGRhdGEtbDEwbi1pZD1cInBhZ2VcIiBhdXRvY29tcGxldGU9XCJvZmZcIiAvPlxyXG48c3BhbiBbY2xhc3NdPVwic2hvd1BhZ2luZ0J1dHRvbnMgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnaGlkZGVuWExWaWV3J1wiIGlkPVwibnVtUGFnZXNcIiBjbGFzcz1cInRvb2xiYXJMYWJlbFwiPjwvc3Bhbj5cclxuIl19