import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-sidebar-toolbar/pdf-sidebar-toolbar.component";
import * as i3 from "./pdf-sidebar-content/pdf-sidebar-content.component";
function PdfSidebarComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
} }
function PdfSidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵelement(2, "pdf-sidebar-toolbar", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "pdf-sidebar-content", 5);
    i0.ɵɵlistener("thumbnailDrawn", function PdfSidebarComponent_ng_template_2_Template_pdf_sidebar_content_thumbnailDrawn_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.thumbnailDrawn.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r2.sidebarPositionTop);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("display", ctx_r2.hideSidebarToolbar ? "none" : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mobileFriendlyZoomScale", ctx_r2.mobileFriendlyZoomScale);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("customThumbnail", ctx_r2.customThumbnail)("hideSidebarToolbar", ctx_r2.hideSidebarToolbar)("mobileFriendlyZoomScale", ctx_r2.mobileFriendlyZoomScale);
} }
const _c0 = ["*"];
export class PdfSidebarComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.sidebarVisible = true;
        this.mobileFriendlyZoomScale = 1;
        this.showSidebarButton = true;
        this.thumbnailDrawn = new EventEmitter();
        this.hideSidebarToolbar = true;
    }
    showToolbarWhenNecessary() {
        const element = this.elementRef.nativeElement;
        const buttons = element.querySelectorAll('button');
        let visible = 0;
        for (let index = 0; index < buttons.length; index++) {
            const b = buttons.item(index);
            if (!b.hidden) {
                visible++;
            }
        }
        this.hideSidebarToolbar = visible <= 1;
        this.ref.markForCheck();
    }
}
/** @nocollapse */ PdfSidebarComponent.ɵfac = function PdfSidebarComponent_Factory(t) { return new (t || PdfSidebarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
/** @nocollapse */ PdfSidebarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarComponent, selectors: [["pdf-sidebar"]], inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[4, "ngTemplateOutlet"], ["defaultSidebar", ""], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer"], [3, "mobileFriendlyZoomScale"], [3, "customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale", "thumbnailDrawn"], ["id", "sidebarResizer", 1, "hidden"]], template: function PdfSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtemplate(1, PdfSidebarComponent_ng_content_1_Template, 1, 0, "ng-content", 0);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, PdfSidebarComponent_ng_template_2_Template, 5, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customSidebar ? ctx.customSidebar : _r1);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfSidebarToolbarComponent, i3.PdfSidebarContentComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-sidebar', template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, { sidebarPositionTop: [{
            type: Input
        }], sidebarVisible: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], customSidebar: [{
            type: Input
        }], customThumbnail: [{
            type: Input
        }], thumbnailDrawn: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQ2pILDhGQUE0Rjs7OztJQUk1Riw4QkFBNEQsYUFBQTtJQUV4RCx5Q0FBK0Y7SUFDakcsaUJBQU07SUFDTiw4Q0FLQztJQUhDLDZNQUFrQixrQ0FBMkIsSUFBQztJQUcvQyxpQkFBc0I7SUFDdkIseUJBQThDO0lBQ2hELGlCQUFNOzs7SUFYcUIsZ0RBQWdDO0lBQ3BCLGVBQWtEO0lBQWxELGtFQUFrRDtJQUNoRSxlQUFtRDtJQUFuRCx3RUFBbUQ7SUFHeEUsZUFBbUM7SUFBbkMsd0RBQW1DLGlEQUFBLDJEQUFBOzs7QUREekMsTUFBTSxPQUFPLG1CQUFtQjtJQXdCOUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQm5FLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3RCLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1QixzQkFBaUIsR0FBeUIsSUFBSSxDQUFDO1FBUy9DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFNUQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0lBRTRDLENBQUM7SUFFdkUsd0JBQXdCO1FBQzdCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBNEIsQ0FBQztRQUM3RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzt5R0F0Q1UsbUJBQW1CO3FHQUFuQixtQkFBbUI7O1FDVGhDLDJCQUFLO1FBQ0gsa0ZBQTRGO1FBQzlGLGlCQUFNO1FBRU4scUhBYWM7OztRQWhCQyxlQUFnRTtRQUFoRSw4RUFBZ0U7O3VGRFFsRSxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxhQUFhOzZGQU1oQixrQkFBa0I7a0JBRHhCLEtBQUs7WUFJQyxjQUFjO2tCQURwQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsYUFBYTtrQkFEbkIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLEtBQUs7WUFJQyxjQUFjO2tCQURwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi4vLi4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1zaWRlYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlNpZGViYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJQb3NpdGlvblRvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NpZGViYXJCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tU2lkZWJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBoaWRlU2lkZWJhclRvb2xiYXIgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cclxuXHJcbiAgcHVibGljIHNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xyXG4gICAgbGV0IHZpc2libGUgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGJ1dHRvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGIgPSBidXR0b25zLml0ZW0oaW5kZXgpO1xyXG4gICAgICBpZiAoIWIuaGlkZGVuKSB7XHJcbiAgICAgICAgdmlzaWJsZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVTaWRlYmFyVG9vbGJhciA9IHZpc2libGUgPD0gMTtcclxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2PlxyXG4gIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tU2lkZWJhciA/IGN1c3RvbVNpZGViYXIgOiBkZWZhdWx0U2lkZWJhclwiPjwvbmctY29udGVudD5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRTaWRlYmFyPlxyXG4gIDxkaXYgaWQ9XCJzaWRlYmFyQ29udGFpbmVyXCIgW3N0eWxlLnRvcF09XCJzaWRlYmFyUG9zaXRpb25Ub3BcIj5cclxuICAgIDxkaXYgaWQ9XCJhZGRpdGlvbmFsU2lkZWJhckNvbnRhaW5lclwiIFtzdHlsZS5kaXNwbGF5XT1cImhpZGVTaWRlYmFyVG9vbGJhciA/ICdub25lJyA6ICcnXCI+XHJcbiAgICAgIDxwZGYtc2lkZWJhci10b29sYmFyIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiPjwvcGRmLXNpZGViYXItdG9vbGJhcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHBkZi1zaWRlYmFyLWNvbnRlbnRcclxuICAgICAgW2N1c3RvbVRodW1ibmFpbF09XCJjdXN0b21UaHVtYm5haWxcIlxyXG4gICAgICAodGh1bWJuYWlsRHJhd24pPVwidGh1bWJuYWlsRHJhd24uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgW2hpZGVTaWRlYmFyVG9vbGJhcl09XCJoaWRlU2lkZWJhclRvb2xiYXJcIlxyXG4gICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgPjwvcGRmLXNpZGViYXItY29udGVudD5cclxuICAgIDxkaXYgaWQ9XCJzaWRlYmFyUmVzaXplclwiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==