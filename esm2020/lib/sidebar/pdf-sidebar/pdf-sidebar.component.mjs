import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-sidebar-toolbar/pdf-sidebar-toolbar.component";
import * as i2 from "./pdf-sidebar-content/pdf-sidebar-content.component";
import * as i3 from "@angular/common";
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
PdfSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSidebarComponent, selector: "pdf-sidebar", inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngImport: i0, template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""], components: [{ type: i1.PdfSidebarToolbarComponent, selector: "pdf-sidebar-toolbar", inputs: ["mobileFriendlyZoomScale"] }, { type: i2.PdfSidebarContentComponent, selector: "pdf-sidebar-content", inputs: ["customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale"], outputs: ["thumbnailDrawn"] }], directives: [{ type: i3.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-sidebar', template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { sidebarPositionTop: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTbkgsTUFBTSxPQUFPLG1CQUFtQjtJQXdCOUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFuQm5FLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBR3RCLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1QixzQkFBaUIsR0FBeUIsSUFBSSxDQUFDO1FBUy9DLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7UUFFNUQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO0lBRTRDLENBQUM7SUFFdkUsd0JBQXdCO1FBQzdCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBNEIsQ0FBQztRQUM3RCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnSEF0Q1UsbUJBQW1CO29HQUFuQixtQkFBbUIsMFZDVGhDLGl6QkFrQkE7MkZEVGEsbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7aUlBTWhCLGtCQUFrQjtzQkFEeEIsS0FBSztnQkFJQyxjQUFjO3NCQURwQixLQUFLO2dCQUlDLHVCQUF1QjtzQkFEN0IsS0FBSztnQkFJQyxpQkFBaUI7c0JBRHZCLEtBQUs7Z0JBSUMsYUFBYTtzQkFEbkIsS0FBSztnQkFJQyxlQUFlO3NCQURyQixLQUFLO2dCQUlDLGNBQWM7c0JBRHBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNpZGViYXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2lkZWJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2lkZWJhclBvc2l0aW9uVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TaWRlYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21UaHVtYm5haWw6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcclxuXHJcbiAgcHVibGljIGhpZGVTaWRlYmFyVG9vbGJhciA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBwdWJsaWMgc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk6IHZvaWQge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYnV0dG9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XHJcbiAgICBsZXQgdmlzaWJsZSA9IDA7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYnV0dG9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgYiA9IGJ1dHRvbnMuaXRlbShpbmRleCk7XHJcbiAgICAgIGlmICghYi5oaWRkZW4pIHtcclxuICAgICAgICB2aXNpYmxlKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuaGlkZVNpZGViYXJUb29sYmFyID0gdmlzaWJsZSA8PSAxO1xyXG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXY+XHJcbiAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21TaWRlYmFyID8gY3VzdG9tU2lkZWJhciA6IGRlZmF1bHRTaWRlYmFyXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNpZGViYXI+XHJcbiAgPGRpdiBpZD1cInNpZGViYXJDb250YWluZXJcIiBbc3R5bGUudG9wXT1cInNpZGViYXJQb3NpdGlvblRvcFwiPlxyXG4gICAgPGRpdiBpZD1cImFkZGl0aW9uYWxTaWRlYmFyQ29udGFpbmVyXCIgW3N0eWxlLmRpc3BsYXldPVwiaGlkZVNpZGViYXJUb29sYmFyID8gJ25vbmUnIDogJydcIj5cclxuICAgICAgPHBkZi1zaWRlYmFyLXRvb2xiYXIgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCI+PC9wZGYtc2lkZWJhci10b29sYmFyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cGRmLXNpZGViYXItY29udGVudFxyXG4gICAgICBbY3VzdG9tVGh1bWJuYWlsXT1cImN1c3RvbVRodW1ibmFpbFwiXHJcbiAgICAgICh0aHVtYm5haWxEcmF3bik9XCJ0aHVtYm5haWxEcmF3bi5lbWl0KCRldmVudClcIlxyXG4gICAgICBbaGlkZVNpZGViYXJUb29sYmFyXT1cImhpZGVTaWRlYmFyVG9vbGJhclwiXHJcbiAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICA+PC9wZGYtc2lkZWJhci1jb250ZW50PlxyXG4gICAgPGRpdiBpZD1cInNpZGViYXJSZXNpemVyXCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19