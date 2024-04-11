import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfTextEditorComponent {
    notificationService;
    cdr;
    show = true;
    isSelected = false;
    constructor(notificationService, cdr) {
        this.notificationService = notificationService;
        this.cdr = cdr;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('annotationeditormodechanged', ({ mode }) => {
            setTimeout(() => {
                this.isSelected = mode === 3;
                this.cdr.detectChanges();
            });
        });
    }
    onClick() {
        document.getElementById('editorFreeText')?.click();
    }
    /** @nocollapse */ static ɵfac = function PdfTextEditorComponent_Factory(t) { return new (t || PdfTextEditorComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfTextEditorComponent, selectors: [["pdf-text-editor"]], inputs: { show: "show" }, decls: 2, vars: 8, consts: [["title", "Draw", "primaryToolbarId", "primaryEditorFreeText", "l10nId", "pdfjs-editor-free-text-button", "l10nLabel", "pdfjs-editor-free-text-button-label", "image", "<svg width='20px' height='20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z' /> </svg>", 3, "cssClass", "order", "action", "toggled", "closeOnClick"]], template: function PdfTextEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "hiddenTinyView"))("order", 4100)("action", ctx.onClick)("toggled", ctx.isSelected)("closeOnClick", true);
        } }, dependencies: [i2.PdfShyButtonComponent, i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfTextEditorComponent, [{
        type: Component,
        args: [{ selector: 'pdf-text-editor', template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorFreeText\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"pdfjs-editor-free-text-button\"\r\n  l10nLabel=\"pdfjs-editor-free-text-button-label\"\r\n  [order]=\"4100\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg width='20px' height='20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"] }]
    }], () => [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }], { show: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfTextEditorComponent, { className: "PdfTextEditorComponent", filePath: "lib\\toolbar\\pdf-text-editor\\pdf-text-editor.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdGV4dC1lZGl0b3IvcGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdGV4dC1lZGl0b3IvcGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3BFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQVF4RSxNQUFNLE9BQU8sc0JBQXNCO0lBTWI7SUFBcUQ7SUFKbEUsSUFBSSxHQUF5QixJQUFJLENBQUM7SUFFbEMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUUxQixZQUFvQixtQkFBMkMsRUFBVSxHQUFzQjtRQUEzRSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDN0YsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVztRQUNqQixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUEwQyxFQUFFLEVBQUU7WUFDbkgsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxPQUFPO1FBQ1osUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3JELENBQUM7bUdBekJVLHNCQUFzQjs0RkFBdEIsc0JBQXNCO1lDWG5DLG9DQVlpQjs7O1lBSGYsQUFEQSxBQURBLEFBREEsQUFIQSwyRUFBeUQsZUFHM0MsdUJBQ0ksMkJBQ0ksc0JBQ0Q7OztpRkRFVixzQkFBc0I7Y0FMbEMsU0FBUzsyQkFDRSxpQkFBaUI7dUZBTXBCLElBQUk7a0JBRFYsS0FBSzs7a0ZBREssc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudHMvYW5ub3RhdGlvbi1lZGl0b3ItbW9kZS1jaGFuZ2VkLWV2ZW50JztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXRleHQtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtdGV4dC1lZGl0b3IuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmVGV4dEVkaXRvckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcclxuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25QZGZKc0luaXQoKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Fubm90YXRpb25lZGl0b3Jtb2RlY2hhbmdlZCcsICh7IG1vZGUgfTogQW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gbW9kZSA9PT0gMztcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3JGcmVlVGV4dCcpPy5jbGljaygpO1xyXG4gIH1cclxufVxyXG4iLCI8cGRmLXNoeS1idXR0b25cclxuICB0aXRsZT1cIkRyYXdcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJwcmltYXJ5RWRpdG9yRnJlZVRleHRcIlxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlblRpbnlWaWV3J1wiXHJcbiAgbDEwbklkPVwicGRmanMtZWRpdG9yLWZyZWUtdGV4dC1idXR0b25cIlxyXG4gIGwxMG5MYWJlbD1cInBkZmpzLWVkaXRvci1mcmVlLXRleHQtYnV0dG9uLWxhYmVsXCJcclxuICBbb3JkZXJdPVwiNDEwMFwiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBbdG9nZ2xlZF09XCJpc1NlbGVjdGVkXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cInRydWVcIlxyXG4gIGltYWdlPVwiPHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00xOC41LDRMMTkuNjYsOC4zNUwxOC43LDguNjFDMTguMjUsNy43NCAxNy43OSw2Ljg3IDE3LjI2LDYuNDNDMTYuNzMsNiAxNi4xMSw2IDE1LjUsNkgxM1YxNi41QzEzLDE3IDEzLDE3LjUgMTMuMzMsMTcuNzVDMTMuNjcsMTggMTQuMzMsMTggMTUsMThWMTlIOVYxOEM5LjY3LDE4IDEwLjMzLDE4IDEwLjY3LDE3Ljc1QzExLDE3LjUgMTEsMTcgMTEsMTYuNVY2SDguNUM3Ljg5LDYgNy4yNyw2IDYuNzQsNi40M0M2LjIxLDYuODcgNS43NSw3Ljc0IDUuMyw4LjYxTDQuMzQsOC4zNUw1LjUsNEgxOC41WicgLz4gPC9zdmc+XCJcclxuPlxyXG48L3BkZi1zaHktYnV0dG9uPlxyXG4iXX0=