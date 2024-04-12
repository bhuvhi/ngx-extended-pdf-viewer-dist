import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfDrawEditorComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.show = true;
        this.isSelected = false;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('annotationeditormodechanged', ({ mode }) => (this.isSelected = mode === 15));
    }
    onClick() {
        document.getElementById('editorInk')?.click();
        // const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
        // PDFViewerApplication.eventBus.dispatch('annotationeditormodechanged', { mode: 15 });
    }
}
PdfDrawEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDrawEditorComponent, deps: [{ token: i1.PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfDrawEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDrawEditorComponent, selector: "pdf-draw-editor", inputs: { show: "show" }, ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorInk\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_ink2\"\r\n  l10nLabel=\"editor_ink2_label\"\r\n  [order]=\"4000\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 16 16' > <g> <g transform='scale(0.03125)'>  <path  d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'  /> </g> </g> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"], components: [{ type: i2.PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": i3.ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDrawEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-draw-editor', template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorInk\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_ink2\"\r\n  l10nLabel=\"editor_ink2_label\"\r\n  [order]=\"4000\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 16 16' > <g> <g transform='scale(0.03125)'>  <path  d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'  /> </g> </g> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.PDFNotificationService }]; }, propDecorators: { show: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWRyYXctZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZHJhdy1lZGl0b3IvcGRmLWRyYXctZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZHJhdy1lZGl0b3IvcGRmLWRyYXctZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQVdqRCxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDLFlBQW9CLG1CQUEyQztRQUEzQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBSnhELFNBQUksR0FBeUIsSUFBSSxDQUFDO1FBRWxDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHeEIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUEwQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekosQ0FBQztJQUVNLE9BQU87UUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzlDLDRGQUE0RjtRQUM1Rix1RkFBdUY7SUFDekYsQ0FBQzs7bUhBdEJVLHNCQUFzQjt1R0FBdEIsc0JBQXNCLGlGQ1huQyxrZ0NBYUE7MkZERmEsc0JBQXNCO2tCQUxsQyxTQUFTOytCQUNFLGlCQUFpQjs2R0FNcEIsSUFBSTtzQkFEVixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yRWRpdG9yTW9kZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1tb2RlLWNoYW5nZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZHJhdy1lZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZHJhdy1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1kcmF3LWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZEcmF3RWRpdG9yQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93OiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBpc1NlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSkge1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25QZGZKc0luaXQoKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Fubm90YXRpb25lZGl0b3Jtb2RlY2hhbmdlZCcsICh7IG1vZGUgfTogQW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQpID0+ICh0aGlzLmlzU2VsZWN0ZWQgPSBtb2RlID09PSAxNSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9ySW5rJyk/LmNsaWNrKCk7XHJcbiAgICAvLyBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgLy8gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ2Fubm90YXRpb25lZGl0b3Jtb2RlY2hhbmdlZCcsIHsgbW9kZTogMTUgfSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtc2h5LWJ1dHRvblxyXG4gIHRpdGxlPVwiRHJhd1wiXHJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInByaW1hcnlFZGl0b3JJbmtcIlxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlblRpbnlWaWV3J1wiXHJcbiAgbDEwbklkPVwiZWRpdG9yX2luazJcIlxyXG4gIGwxMG5MYWJlbD1cImVkaXRvcl9pbmsyX2xhYmVsXCJcclxuICBbb3JkZXJdPVwiNDAwMFwiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBbdG9nZ2xlZF09XCJpc1NlbGVjdGVkXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cInRydWVcIlxyXG4gIGltYWdlPVwiPHN2ZyBzdHlsZT0nd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweCcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIGVuYWJsZS1iYWNrZ3JvdW5kPSduZXcgMCAwIDE2IDE2JyA+IDxnPiA8ZyB0cmFuc2Zvcm09J3NjYWxlKDAuMDMxMjUpJz4gIDxwYXRoICBkPSdtNDU1LjEsMTM3LjlsLTMyLjQsMzIuNC04MS04MS4xIDMyLjQtMzIuNGM2LjYtNi42IDE4LjEtNi42IDI0LjcsMGw1Ni4zLDU2LjRjNi44LDYuOCA2LjgsMTcuOSAwLDI0Ljd6bS0yNzAuNywyNzFsLTgxLTgxLjEgMjA5LjQtMjA5LjcgODEsODEuMS0yMDkuNCwyMDkuN3ptLTk5LjctNDJsNjAuNiw2MC43LTg0LjQsMjMuOCAyMy44LTg0LjV6bTM5OS4zLTI4Mi42bC01Ni4zLTU2LjRjLTExLTExLTUwLjctMzEuOC04Mi40LDBsLTI4NS4zLDI4NS41Yy0yLjUsMi41LTQuMyw1LjUtNS4yLDguOWwtNDMsMTUzLjFjLTIsNy4xIDAuMSwxNC43IDUuMiwyMCA1LjIsNS4zIDE1LjYsNi4yIDIwLDUuMmwxNTMtNDMuMWMzLjQtMC45IDYuNC0yLjcgOC45LTUuMmwyODUuMS0yODUuNWMyMi43LTIyLjcgMjIuNy01OS43IDAtODIuNXonICAvPiA8L2c+IDwvZz4gPC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=