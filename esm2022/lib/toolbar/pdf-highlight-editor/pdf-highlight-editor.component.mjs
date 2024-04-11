import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
import * as i0 from "@angular/core";
import * as i1 from "../../pdf-notification-service";
import * as i2 from "../pdf-shy-button/pdf-shy-button.component";
import * as i3 from "../../responsive-visibility";
export class PdfHighlightEditorComponent {
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
                this.isSelected = mode === 9;
                this.cdr.detectChanges();
            });
        });
    }
    onClick() {
        document.getElementById('editorFreeText')?.click();
    }
    /** @nocollapse */ static ɵfac = function PdfHighlightEditorComponent_Factory(t) { return new (t || PdfHighlightEditorComponent)(i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfHighlightEditorComponent, selectors: [["pdf-highlight-editor"]], inputs: { show: "show" }, decls: 2, vars: 8, consts: [["title", "Highlight", "primaryToolbarId", "editorHighlight", "l10nId", "pdfjs-editor-highlight-button", "l10nLabel", "pdfjs-editor-highlight-button-label", "image", "<svg width='20px' height='20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16' /></svg>", 3, "cssClass", "order", "action", "toggled", "closeOnClick"]], template: function PdfHighlightEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "pdf-shy-button", 0);
            i0.ɵɵpipe(1, "responsiveCSSClass");
        } if (rf & 2) {
            i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 5, ctx.show, "hiddenTinyView"))("order", 4000)("action", ctx.onClick)("toggled", ctx.isSelected)("closeOnClick", true);
        } }, dependencies: [i2.PdfShyButtonComponent, i3.ResponsiveCSSClassPipe], styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfHighlightEditorComponent, [{
        type: Component,
        args: [{ selector: 'pdf-highlight-editor', template: "<pdf-shy-button\r\n  title=\"Highlight\"\r\n  primaryToolbarId=\"editorHighlight\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"pdfjs-editor-highlight-button\"\r\n  l10nLabel=\"pdfjs-editor-highlight-button-label\"\r\n  [order]=\"4000\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg width='20px' height='20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,1.15C17.97,1.15 17.46,1.34 17.07,1.73L11.26,7.55L16.91,13.2L22.73,7.39C23.5,6.61 23.5,5.35 22.73,4.56L19.89,1.73C19.5,1.34 19,1.15 18.5,1.15M10.3,8.5L4.34,14.46C3.56,15.24 3.56,16.5 4.36,17.31C3.14,18.54 1.9,19.77 0.67,21H6.33L7.19,20.14C7.97,20.9 9.22,20.89 10,20.12L15.95,14.16' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"] }]
    }], () => [{ type: i1.PDFNotificationService }, { type: i0.ChangeDetectorRef }], { show: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfHighlightEditorComponent, { className: "PdfHighlightEditorComponent", filePath: "lib\\toolbar\\pdf-highlight-editor\\pdf-highlight-editor.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWhpZ2hsaWdodC1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1oaWdobGlnaHQtZWRpdG9yL3BkZi1oaWdobGlnaHQtZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtaGlnaGxpZ2h0LWVkaXRvci9wZGYtaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdwRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7QUFReEUsTUFBTSxPQUFPLDJCQUEyQjtJQU1sQjtJQUFxRDtJQUpsRSxJQUFJLEdBQXlCLElBQUksQ0FBQztJQUVsQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTFCLFlBQW9CLG1CQUEyQyxFQUFVLEdBQXNCO1FBQTNFLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUM3RixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQTBDLEVBQUUsRUFBRTtZQUNuSCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE9BQU87UUFDWixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDckQsQ0FBQzt3R0F6QlUsMkJBQTJCOzRGQUEzQiwyQkFBMkI7WUNYeEMsb0NBWWlCOzs7WUFIZixBQURBLEFBREEsQUFEQSxBQUhBLDJFQUF5RCxlQUczQyx1QkFDSSwyQkFDSSxzQkFDRDs7O2lGREVWLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLHNCQUFzQjt1RkFNekIsSUFBSTtrQkFEVixLQUFLOztrRkFESywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yRWRpdG9yTW9kZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1tb2RlLWNoYW5nZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtaGlnaGxpZ2h0LWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1oaWdobGlnaHQtZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtaGlnaGxpZ2h0LWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZIaWdobGlnaHRFZGl0b3JDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3c6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGlzU2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uUGRmSnNJbml0KCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9uZWRpdG9ybW9kZWNoYW5nZWQnLCAoeyBtb2RlIH06IEFubm90YXRpb25FZGl0b3JFZGl0b3JNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RlZCA9IG1vZGUgPT09IDk7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yRnJlZVRleHQnKT8uY2xpY2soKTtcclxuICB9XHJcbn1cclxuIiwiPHBkZi1zaHktYnV0dG9uXHJcbiAgdGl0bGU9XCJIaWdobGlnaHRcIlxyXG4gIHByaW1hcnlUb29sYmFySWQ9XCJlZGl0b3JIaWdobGlnaHRcIlxyXG4gIFtjc3NDbGFzc109XCJzaG93IHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlblRpbnlWaWV3J1wiXHJcbiAgbDEwbklkPVwicGRmanMtZWRpdG9yLWhpZ2hsaWdodC1idXR0b25cIlxyXG4gIGwxMG5MYWJlbD1cInBkZmpzLWVkaXRvci1oaWdobGlnaHQtYnV0dG9uLWxhYmVsXCJcclxuICBbb3JkZXJdPVwiNDAwMFwiXHJcbiAgW2FjdGlvbl09XCJvbkNsaWNrXCJcclxuICBbdG9nZ2xlZF09XCJpc1NlbGVjdGVkXCJcclxuICBbY2xvc2VPbkNsaWNrXT1cInRydWVcIlxyXG4gIGltYWdlPVwiPHN2ZyB3aWR0aD0nMjBweCcgaGVpZ2h0PScyMHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPiA8cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00xOC41LDEuMTVDMTcuOTcsMS4xNSAxNy40NiwxLjM0IDE3LjA3LDEuNzNMMTEuMjYsNy41NUwxNi45MSwxMy4yTDIyLjczLDcuMzlDMjMuNSw2LjYxIDIzLjUsNS4zNSAyMi43Myw0LjU2TDE5Ljg5LDEuNzNDMTkuNSwxLjM0IDE5LDEuMTUgMTguNSwxLjE1TTEwLjMsOC41TDQuMzQsMTQuNDZDMy41NiwxNS4yNCAzLjU2LDE2LjUgNC4zNiwxNy4zMUMzLjE0LDE4LjU0IDEuOSwxOS43NyAwLjY3LDIxSDYuMzNMNy4xOSwyMC4xNEM3Ljk3LDIwLjkgOS4yMiwyMC44OSAxMCwyMC4xMkwxNS45NSwxNC4xNicgLz48L3N2Zz5cIlxyXG4+XHJcbjwvcGRmLXNoeS1idXR0b24+XHJcbiJdfQ==