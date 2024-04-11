import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfContextMenuComponent {
    /** @nocollapse */ static ɵfac = function PdfContextMenuComponent_Factory(t) { return new (t || PdfContextMenuComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfContextMenuComponent, selectors: [["pdf-context-menu"]], decls: 5, vars: 0, consts: [["type", "context", "id", "viewerContextMenu", 1, "hidden"], ["id", "contextFirstPage", 1, "hidden"], ["id", "contextLastPage", 1, "hidden"], ["id", "contextPageRotateCw", 1, "hidden"], ["id", "contextPageRotateCcw", 1, "hidden"]], template: function PdfContextMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵelementEnd();
        } }, styles: ["[_nghost-%COMP%]{margin-top:4px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfContextMenuComponent, [{
        type: Component,
        args: [{ selector: 'pdf-context-menu', template: "<!-- the context menu is deactivated because only Firefox supports it -->\r\n<div class=\"hidden\" type=\"context\" id=\"viewerContextMenu\">\r\n  <div class=\"hidden\" id=\"contextFirstPage\"></div>\r\n  <div class=\"hidden\" id=\"contextLastPage\"></div>\r\n  <div class=\"hidden\" id=\"contextPageRotateCw\"></div>\r\n  <div class=\"hidden\" id=\"contextPageRotateCcw\"></div>\r\n</div>\r\n", styles: [":host{margin-top:4px}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfContextMenuComponent, { className: "PdfContextMenuComponent", filePath: "lib\\toolbar\\pdf-context-menu\\pdf-context-menu.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWNvbnRleHQtbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtY29udGV4dC1tZW51L3BkZi1jb250ZXh0LW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPMUMsTUFBTSxPQUFPLHVCQUF1QjtvR0FBdkIsdUJBQXVCOzRGQUF2Qix1QkFBdUI7WUNOcEMsOEJBQTBEO1lBSXhELEFBREEsQUFEQSxBQURBLHlCQUFnRCxhQUNELGFBQ0ksYUFDQztZQUN0RCxpQkFBTTs7O2lGRENPLHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLGtCQUFrQjs7a0ZBSWpCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtY29udGV4dC1tZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWNvbnRleHQtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWNvbnRleHQtbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZDb250ZXh0TWVudUNvbXBvbmVudCB7fVxyXG4iLCI8IS0tIHRoZSBjb250ZXh0IG1lbnUgaXMgZGVhY3RpdmF0ZWQgYmVjYXVzZSBvbmx5IEZpcmVmb3ggc3VwcG9ydHMgaXQgLS0+XHJcbjxkaXYgY2xhc3M9XCJoaWRkZW5cIiB0eXBlPVwiY29udGV4dFwiIGlkPVwidmlld2VyQ29udGV4dE1lbnVcIj5cclxuICA8ZGl2IGNsYXNzPVwiaGlkZGVuXCIgaWQ9XCJjb250ZXh0Rmlyc3RQYWdlXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImhpZGRlblwiIGlkPVwiY29udGV4dExhc3RQYWdlXCI+PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImhpZGRlblwiIGlkPVwiY29udGV4dFBhZ2VSb3RhdGVDd1wiPjwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJoaWRkZW5cIiBpZD1cImNvbnRleHRQYWdlUm90YXRlQ2N3XCI+PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=