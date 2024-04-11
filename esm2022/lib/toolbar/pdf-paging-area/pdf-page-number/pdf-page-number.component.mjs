import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../../responsive-visibility";
export class PdfPageNumberComponent {
    showPagingButtons = true;
    /** @nocollapse */ static ɵfac = function PdfPageNumberComponent_Factory(t) { return new (t || PdfPageNumberComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPageNumberComponent, selectors: [["pdf-page-number"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 4, vars: 5, consts: [[1, "loadingInput", "start"], ["type", "number", "id", "pageNumber", "title", "Page", "value", "1", "size", "4", "min", "1", "data-l10n-id", "pdfjs-page-input", "autocomplete", "off", 1, "toolbarField", "pageNumber"], ["id", "numPages", 1, "toolbarLabel"]], template: function PdfPageNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "span", 2);
            i0.ɵɵpipe(3, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassMap(i0.ɵɵpipeBind2(3, 2, ctx.showPagingButtons, "hiddenXLView"));
        } }, dependencies: [i1.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPageNumberComponent, [{
        type: Component,
        args: [{ selector: 'pdf-page-number', template: "<span class=\"loadingInput start\">\r\n  <input\r\n    type=\"number\"\r\n    id=\"pageNumber\"\r\n    class=\"toolbarField pageNumber\"\r\n    title=\"Page\"\r\n    value=\"1\"\r\n    size=\"4\"\r\n    min=\"1\"\r\n    data-l10n-id=\"pdfjs-page-input\"\r\n    autocomplete=\"off\"\r\n  />\r\n</span>\r\n<span [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXLView'\" id=\"numPages\" class=\"toolbarLabel\"></span>\r\n", styles: ["button{padding:0}\n"] }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfPageNumberComponent, { className: "PdfPageNumberComponent", filePath: "lib\\toolbar\\pdf-paging-area\\pdf-page-number\\pdf-page-number.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCO0lBRTFCLGlCQUFpQixHQUFHLElBQUksQ0FBQzttR0FGckIsc0JBQXNCOzRGQUF0QixzQkFBc0I7WUNQbkMsK0JBQWlDO1lBQy9CLDJCQVVFO1lBQ0osaUJBQU87WUFDUCwwQkFBa0g7OztZQUE1RyxlQUFpRTtZQUFqRSwwRUFBaUU7OztpRkROMUQsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsaUJBQWlCO2dCQU1wQixpQkFBaUI7a0JBRHZCLEtBQUs7O2tGQURLLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXBhZ2UtbnVtYmVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUGFnZU51bWJlckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xyXG59XHJcbiIsIjxzcGFuIGNsYXNzPVwibG9hZGluZ0lucHV0IHN0YXJ0XCI+XHJcbiAgPGlucHV0XHJcbiAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgIGlkPVwicGFnZU51bWJlclwiXHJcbiAgICBjbGFzcz1cInRvb2xiYXJGaWVsZCBwYWdlTnVtYmVyXCJcclxuICAgIHRpdGxlPVwiUGFnZVwiXHJcbiAgICB2YWx1ZT1cIjFcIlxyXG4gICAgc2l6ZT1cIjRcIlxyXG4gICAgbWluPVwiMVwiXHJcbiAgICBkYXRhLWwxMG4taWQ9XCJwZGZqcy1wYWdlLWlucHV0XCJcclxuICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgLz5cclxuPC9zcGFuPlxyXG48c3BhbiBbY2xhc3NdPVwic2hvd1BhZ2luZ0J1dHRvbnMgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnaGlkZGVuWExWaWV3J1wiIGlkPVwibnVtUGFnZXNcIiBjbGFzcz1cInRvb2xiYXJMYWJlbFwiPjwvc3Bhbj5cclxuIl19