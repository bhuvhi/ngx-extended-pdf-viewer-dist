import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-first-page/pdf-first-page.component";
import * as i2 from "./pdf-last-page/pdf-last-page.component";
import * as i3 from "./pdf-next-page/pdf-next-page.component";
import * as i4 from "./pdf-page-number/pdf-page-number.component";
import * as i5 from "./pdf-previous-page/pdf-previous-page.component";
import * as i6 from "../../responsive-visibility";
export class PdfPagingAreaComponent {
    showPagingButtons = true;
    /** @nocollapse */ static ɵfac = function PdfPagingAreaComponent_Factory(t) { return new (t || PdfPagingAreaComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPagingAreaComponent, selectors: [["pdf-paging-area"]], inputs: { showPagingButtons: "showPagingButtons" }, decls: 10, vars: 15, consts: [[1, "paging-left"], [1, "margin-right-correct"], [1, "margin-left-correct"], [1, "paging-right"], [1, "margin-right-correct", "margin-left-correct"]], template: function PdfPagingAreaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
            i0.ɵɵelement(2, "pdf-first-page", 1)(3, "pdf-previous-page", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "pdf-page-number");
            i0.ɵɵpipe(5, "responsiveCSSClass");
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
        } }, dependencies: [i1.PdfFirstPageComponent, i2.PdfLastPageComponent, i3.PdfNextPageComponent, i4.PdfPageNumberComponent, i5.PdfPreviousPageComponent, i6.ResponsiveCSSClassPipe], styles: [".paging-right[_ngcontent-%COMP%]{float:right;display:block}.paging-left[_ngcontent-%COMP%]{float:left;display:block}.margin-left-correct[_ngcontent-%COMP%]{margin-left:-3px}.margin-right-correct[_ngcontent-%COMP%]{margin-right:-3px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPagingAreaComponent, [{
        type: Component,
        args: [{ selector: 'pdf-paging-area', template: "<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-left\">\r\n  <pdf-first-page class=\"margin-right-correct\"></pdf-first-page>\r\n  <pdf-previous-page class=\"margin-left-correct\"></pdf-previous-page>\r\n</div>\r\n<pdf-page-number [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXXSView'\"></pdf-page-number>\r\n<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-right\">\r\n  <pdf-next-page class=\"margin-right-correct margin-left-correct\"></pdf-next-page>\r\n  <pdf-last-page class=\"margin-left-correct\"></pdf-last-page>\r\n</div>\r\n", styles: [".paging-right{float:right;display:block}.paging-left{float:left;display:block}.margin-left-correct{margin-left:-3px}.margin-right-correct{margin-right:-3px}\n"] }]
    }], null, { showPagingButtons: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfPagingAreaComponent, { className: "PdfPagingAreaComponent", filePath: "lib\\toolbar\\pdf-paging-area\\pdf-paging-area.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVFqRCxNQUFNLE9BQU8sc0JBQXNCO0lBRTFCLGlCQUFpQixHQUF5QixJQUFJLENBQUM7bUdBRjNDLHNCQUFzQjs0RkFBdEIsc0JBQXNCO1lDUm5DLDhCQUE2Rjs7WUFFM0YsQUFEQSxvQ0FBOEQsMkJBQ0s7WUFDckUsaUJBQU07WUFDTixrQ0FBc0c7O1lBQ3RHLDhCQUE4Rjs7WUFFNUYsQUFEQSxtQ0FBZ0YsdUJBQ3JCO1lBQzdELGlCQUFNOztZQVJELDRFQUFtRTtZQUl2RCxlQUFrRTtZQUFsRSwyRUFBa0U7WUFDOUUsZUFBbUU7WUFBbkUsNkVBQW1FOzs7aUZERzNELHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNFLGlCQUFpQjtnQkFNcEIsaUJBQWlCO2tCQUR2QixLQUFLOztrRkFESyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXBhZ2luZy1hcmVhJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxufVxyXG4iLCI8ZGl2IFtjbGFzc109XCJzaG93UGFnaW5nQnV0dG9ucyB8IHJlc3BvbnNpdmVDU1NDbGFzcyA6ICdoaWRkZW5UaW55VmlldydcIiBjbGFzcz1cInBhZ2luZy1sZWZ0XCI+XHJcbiAgPHBkZi1maXJzdC1wYWdlIGNsYXNzPVwibWFyZ2luLXJpZ2h0LWNvcnJlY3RcIj48L3BkZi1maXJzdC1wYWdlPlxyXG4gIDxwZGYtcHJldmlvdXMtcGFnZSBjbGFzcz1cIm1hcmdpbi1sZWZ0LWNvcnJlY3RcIj48L3BkZi1wcmV2aW91cy1wYWdlPlxyXG48L2Rpdj5cclxuPHBkZi1wYWdlLW51bWJlciBbY2xhc3NdPVwic2hvd1BhZ2luZ0J1dHRvbnMgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnaGlkZGVuWFhTVmlldydcIj48L3BkZi1wYWdlLW51bWJlcj5cclxuPGRpdiBbY2xhc3NdPVwic2hvd1BhZ2luZ0J1dHRvbnMgfCByZXNwb25zaXZlQ1NTQ2xhc3MgOiAnaGlkZGVuVGlueVZpZXcnXCIgY2xhc3M9XCJwYWdpbmctcmlnaHRcIj5cclxuICA8cGRmLW5leHQtcGFnZSBjbGFzcz1cIm1hcmdpbi1yaWdodC1jb3JyZWN0IG1hcmdpbi1sZWZ0LWNvcnJlY3RcIj48L3BkZi1uZXh0LXBhZ2U+XHJcbiAgPHBkZi1sYXN0LXBhZ2UgY2xhc3M9XCJtYXJnaW4tbGVmdC1jb3JyZWN0XCI+PC9wZGYtbGFzdC1wYWdlPlxyXG48L2Rpdj5cclxuIl19