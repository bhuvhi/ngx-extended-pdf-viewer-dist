import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-sidebar-content/pdf-sidebar-content.component";
import * as i3 from "./pdf-sidebar-toolbar/pdf-sidebar-toolbar.component";
const _c0 = ["*"];
function PdfSidebarComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customSidebar ? customSidebar : defaultSidebar"]);
} }
function PdfSidebarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵelement(2, "pdf-sidebar-toolbar", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "pdf-sidebar-content", 5);
    i0.ɵɵlistener("thumbnailDrawn", function PdfSidebarComponent_ng_template_2_Template_pdf_sidebar_content_thumbnailDrawn_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.thumbnailDrawn.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r1.sidebarPositionTop);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", ctx_r1.hideSidebarToolbar);
    i0.ɵɵadvance();
    i0.ɵɵproperty("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale);
    i0.ɵɵadvance();
    i0.ɵɵproperty("customThumbnail", ctx_r1.customThumbnail)("hideSidebarToolbar", ctx_r1.hideSidebarToolbar)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale);
} }
export class PdfSidebarComponent {
    elementRef;
    ref;
    sidebarPositionTop;
    sidebarVisible = true;
    mobileFriendlyZoomScale = 1;
    showSidebarButton = true;
    customSidebar;
    customThumbnail;
    thumbnailDrawn = new EventEmitter();
    hideSidebarToolbar = true;
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
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
    /** @nocollapse */ static ɵfac = function PdfSidebarComponent_Factory(t) { return new (t || PdfSidebarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarComponent, selectors: [["pdf-sidebar"]], inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [["defaultSidebar", ""], [4, "ngTemplateOutlet"], ["id", "sidebarContainer"], ["id", "additionalSidebarContainer", 1, "hidden"], [3, "mobileFriendlyZoomScale"], [3, "thumbnailDrawn", "customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale"], ["id", "sidebarResizer", 1, "hidden"]], template: function PdfSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, PdfSidebarComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, PdfSidebarComponent_ng_template_2_Template, 5, 8, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const defaultSidebar_r3 = i0.ɵɵreference(3);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customSidebar ? ctx.customSidebar : defaultSidebar_r3);
        } }, dependencies: [i1.NgTemplateOutlet, i2.PdfSidebarContentComponent, i3.PdfSidebarToolbarComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-sidebar', template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" class=\"hidden\" [class.hidden]=\"hideSidebarToolbar\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], () => [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }], { sidebarPositionTop: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfSidebarComponent, { className: "PdfSidebarComponent", filePath: "lib\\sidebar\\pdf-sidebar\\pdf-sidebar.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0NqSCw4RkFBNEY7Ozs7SUFLMUYsQUFERiw4QkFBNEQsYUFDOEI7SUFDdEYseUNBQStGO0lBQ2pHLGlCQUFNO0lBQ04sOENBS0M7SUFIQyw0TkFBa0Isa0NBQTJCLEtBQUM7SUFHL0MsaUJBQXNCO0lBQ3ZCLHlCQUE4QztJQUNoRCxpQkFBTTs7O0lBWHFCLGdEQUFnQztJQUNMLGNBQW1DO0lBQW5DLG1EQUFtQztJQUNoRSxjQUFtRDtJQUFuRCx3RUFBbUQ7SUFHeEUsY0FBbUM7SUFHbkMsQUFEQSxBQUZBLHdEQUFtQyxpREFFTSwyREFDVTs7QURKekQsTUFBTSxPQUFPLG1CQUFtQjtJQXdCVjtJQUFnQztJQXRCN0Msa0JBQWtCLENBQXFCO0lBR3ZDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFHdEIsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDO0lBRzVCLGlCQUFpQixHQUF5QixJQUFJLENBQUM7SUFHL0MsYUFBYSxDQUErQjtJQUc1QyxlQUFlLENBQStCO0lBRzlDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQUU1RCxrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFFakMsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7SUFBRyxDQUFDO0lBRXZFLHdCQUF3QjtRQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQTRCLENBQUM7UUFDN0QsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNoQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNuRCxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNiLE9BQU8sRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztnR0F0Q1UsbUJBQW1COzRGQUFuQixtQkFBbUI7O1lDVGhDLDJCQUFLO1lBQ0gsa0ZBQStFO1lBQ2pGLGlCQUFNO1lBRU4scUhBQTZCOzs7WUFIZCxjQUFnRTtZQUFoRSw0RkFBZ0U7OztpRkRRbEUsbUJBQW1CO2NBTC9CLFNBQVM7MkJBQ0UsYUFBYTsyRUFNaEIsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsY0FBYztrQkFEcEIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUlDLGFBQWE7a0JBRG5CLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsY0FBYztrQkFEcEIsTUFBTTs7a0ZBbkJJLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGRmVGh1bWJuYWlsRHJhd25FdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cy9wZGYtdGh1bWJuYWlsLWRyYXduLWV2ZW50JztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2lkZWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2lkZWJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyUG9zaXRpb25Ub3A6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2lkZWJhclZpc2libGUgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTaWRlYmFyQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgaGlkZVNpZGViYXJUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHB1YmxpYyBzaG93VG9vbGJhcldoZW5OZWNlc3NhcnkoKTogdm9pZCB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBidXR0b25zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcclxuICAgIGxldCB2aXNpYmxlID0gMDtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBidXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBjb25zdCBiID0gYnV0dG9ucy5pdGVtKGluZGV4KTtcclxuICAgICAgaWYgKCFiLmhpZGRlbikge1xyXG4gICAgICAgIHZpc2libGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5oaWRlU2lkZWJhclRvb2xiYXIgPSB2aXNpYmxlIDw9IDE7XHJcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdj5cclxuICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbVNpZGViYXIgPyBjdXN0b21TaWRlYmFyIDogZGVmYXVsdFNpZGViYXJcIj48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0U2lkZWJhcj5cclxuICA8ZGl2IGlkPVwic2lkZWJhckNvbnRhaW5lclwiIFtzdHlsZS50b3BdPVwic2lkZWJhclBvc2l0aW9uVG9wXCI+XHJcbiAgICA8ZGl2IGlkPVwiYWRkaXRpb25hbFNpZGViYXJDb250YWluZXJcIiBjbGFzcz1cImhpZGRlblwiIFtjbGFzcy5oaWRkZW5dPVwiaGlkZVNpZGViYXJUb29sYmFyXCI+XHJcbiAgICAgIDxwZGYtc2lkZWJhci10b29sYmFyIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiPjwvcGRmLXNpZGViYXItdG9vbGJhcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHBkZi1zaWRlYmFyLWNvbnRlbnRcclxuICAgICAgW2N1c3RvbVRodW1ibmFpbF09XCJjdXN0b21UaHVtYm5haWxcIlxyXG4gICAgICAodGh1bWJuYWlsRHJhd24pPVwidGh1bWJuYWlsRHJhd24uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgW2hpZGVTaWRlYmFyVG9vbGJhcl09XCJoaWRlU2lkZWJhclRvb2xiYXJcIlxyXG4gICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgPjwvcGRmLXNpZGViYXItY29udGVudD5cclxuICAgIDxkaXYgaWQ9XCJzaWRlYmFyUmVzaXplclwiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==