import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-first-page/pdf-first-page.component";
import * as i2 from "./pdf-previous-page/pdf-previous-page.component";
import * as i3 from "./pdf-page-number/pdf-page-number.component";
import * as i4 from "./pdf-next-page/pdf-next-page.component";
import * as i5 from "./pdf-last-page/pdf-last-page.component";
import * as i6 from "../../responsive-visibility";
export class PdfPagingAreaComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
/** @nocollapse */ PdfPagingAreaComponent.ɵfac = function PdfPagingAreaComponent_Factory(t) { return new (t || PdfPagingAreaComponent)(); };
/** @nocollapse */ PdfPagingAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPagingAreaComponent, selectors: [["pdf-paging-area"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 10, vars: 15, consts: [[1, "paging-left"], [2, "margin-right", "-3px"], [2, "margin-left", "-3px"], [1, "paging-right"], [2, "margin-right", "-3px", "margin-left", "-3px"]], template: function PdfPagingAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
        i0.ɵɵelement(2, "pdf-first-page", 1)(3, "pdf-previous-page", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "pdf-page-number");
        i0.ɵɵpipe(5, "responsiveCSSClass");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 3);
        i0.ɵɵpipe(7, "responsiveCSSClass");
        i0.ɵɵelement(8, "pdf-next-page", 4)(9, "pdf-last-page", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap(i0.ɵɵpipeBind2(1, 6, ctx.showPagingButtons, "hiddenTinyView"));
        i0.ɵɵadvance(4);
        i0.ɵɵclassMap(i0.ɵɵpipeBind2(5, 9, ctx.showPagingButtons, "hiddenXXSView"));
        i0.ɵɵadvance(2);
        i0.ɵɵclassMap(i0.ɵɵpipeBind2(7, 12, ctx.showPagingButtons, "hiddenTinyView"));
    } }, directives: [i1.PdfFirstPageComponent, i2.PdfPreviousPageComponent, i3.PdfPageNumberComponent, i4.PdfNextPageComponent, i5.PdfLastPageComponent], pipes: [i6.ResponsiveCSSClassPipe], styles: [".paging-right[_ngcontent-%COMP%]{float:right;display:block}.paging-left[_ngcontent-%COMP%]{float:left;display:block}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPagingAreaComponent, [{
        type: Component,
        args: [{ selector: 'pdf-paging-area', template: "<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-left\">\r\n  <pdf-first-page style=\"margin-right: -3px\"></pdf-first-page>\r\n  <pdf-previous-page style=\"margin-left: -3px\"></pdf-previous-page>\r\n</div>\r\n<pdf-page-number [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXXSView'\"></pdf-page-number>\r\n<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-right\">\r\n  <pdf-next-page style=\"margin-right: -3px; margin-left: -3px\"></pdf-next-page>\r\n  <pdf-last-page style=\"margin-left: -3px\"></pdf-last-page>\r\n</div>\r\n", styles: [".paging-right{float:right;display:block}.paging-left{float:left;display:block}\n"] }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVFqRCxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBT1Msc0JBQWlCLEdBQXlCLElBQUksQ0FBQztLQUN2RDs7K0dBSFksc0JBQXNCO3dHQUF0QixzQkFBc0I7UUNSbkMsOEJBQTZGOztRQUMzRixvQ0FBNEQsMkJBQUE7UUFFOUQsaUJBQU07UUFDTix1Q0FBb0Y7O1FBQUEsaUJBQWtCO1FBQ3RHLDhCQUE4Rjs7UUFDNUYsbUNBQTZFLHVCQUFBO1FBRS9FLGlCQUFNOztRQVJELDRFQUFtRTtRQUl2RCxlQUFrRTtRQUFsRSwyRUFBa0U7UUFDOUUsZUFBbUU7UUFBbkUsNkVBQW1FOzt1RkRHM0Qsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsaUJBQWlCO2dCQU1wQixpQkFBaUI7a0JBRHZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXBhZ2luZy1hcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxufVxyXG4iLCI8ZGl2IFtjbGFzc109XCJzaG93UGFnaW5nQnV0dG9ucyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5UaW55VmlldydcIiBjbGFzcz1cInBhZ2luZy1sZWZ0XCI+XHJcbiAgPHBkZi1maXJzdC1wYWdlIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAtM3B4XCI+PC9wZGYtZmlyc3QtcGFnZT5cclxuICA8cGRmLXByZXZpb3VzLXBhZ2Ugc3R5bGU9XCJtYXJnaW4tbGVmdDogLTNweFwiPjwvcGRmLXByZXZpb3VzLXBhZ2U+XHJcbjwvZGl2PlxyXG48cGRmLXBhZ2UtbnVtYmVyIFtjbGFzc109XCJzaG93UGFnaW5nQnV0dG9ucyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5YWFNWaWV3J1wiPjwvcGRmLXBhZ2UtbnVtYmVyPlxyXG48ZGl2IFtjbGFzc109XCJzaG93UGFnaW5nQnV0dG9ucyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5UaW55VmlldydcIiBjbGFzcz1cInBhZ2luZy1yaWdodFwiPlxyXG4gIDxwZGYtbmV4dC1wYWdlIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAtM3B4OyBtYXJnaW4tbGVmdDogLTNweFwiPjwvcGRmLW5leHQtcGFnZT5cclxuICA8cGRmLWxhc3QtcGFnZSBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtM3B4XCI+PC9wZGYtbGFzdC1wYWdlPlxyXG48L2Rpdj5cclxuIl19