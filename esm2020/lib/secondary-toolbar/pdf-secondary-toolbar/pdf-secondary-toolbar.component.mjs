import { isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./../../pdf-notification-service";
import * as i2 from "../../toolbar/pdf-shy-button/pdf-shy-button-service";
import * as i3 from "../../ngx-extended-pdf-viewer.service";
import * as i4 from "@angular/common";
import * as i5 from "../../responsive-visibility";
export class PdfSecondaryToolbarComponent {
    constructor(element, notificationService, platformId, pdfShyButtonService, ngxExtendedPdfViewerService) {
        this.element = element;
        this.notificationService = notificationService;
        this.platformId = platformId;
        this.pdfShyButtonService = pdfShyButtonService;
        this.ngxExtendedPdfViewerService = ngxExtendedPdfViewerService;
        this.spreadChange = new EventEmitter();
        this.disablePreviousPage = true;
        this.disableNextPage = true;
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('pagechanging', () => {
            this.updateUIState();
        });
        PDFViewerApplication.eventBus.on('pagerendered', () => {
            this.updateUIState();
        });
    }
    updateUIState() {
        setTimeout(() => {
            const PDFViewerApplication = window.PDFViewerApplication;
            const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
            const previousButton = document.getElementById('previousPage');
            if (previousButton) {
                this.disablePreviousPage = Number(currentPage) <= 1;
                previousButton.disabled = this.disablePreviousPage;
            }
            const nextButton = document.getElementById('nextPage');
            if (nextButton) {
                this.disableNextPage = currentPage === PDFViewerApplication.pagesCount;
                nextButton.disabled = this.disableNextPage;
            }
        });
    }
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    ngOnChanges(changes) {
        setTimeout(() => this.checkVisibility());
    }
    onResize() {
        setTimeout(() => this.checkVisibility());
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            const targetNode = this.element.nativeElement;
            const config = { attributes: true, childList: true, subtree: true };
            this.classMutationObserver = new MutationObserver((mutationList, observer) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'attributes') {
                        if (mutation.attributeName === 'class') {
                            this.checkVisibility();
                            break;
                        }
                    }
                    else if (mutation.type === 'childList') {
                        this.checkVisibility();
                        break;
                    }
                }
            });
            this.classMutationObserver.observe(targetNode, config);
        }
    }
    ngOnDestroy() {
        if (this.classMutationObserver) {
            this.classMutationObserver.disconnect();
            this.classMutationObserver = undefined;
        }
    }
    checkVisibility() {
        let visibleButtons = 0;
        const e = this.element.nativeElement;
        const f = e.children.item(0);
        if (f) {
            const g = f.children.item(0);
            if (g && g instanceof HTMLElement) {
                visibleButtons = this.checkVisibilityRecursively(g);
            }
        }
        this.ngxExtendedPdfViewerService.secondaryMenuIsEmpty = visibleButtons === 0;
    }
    checkVisibilityRecursively(e) {
        if (typeof window === 'undefined') {
            // server-side rendering
            return 0;
        }
        if (e.style.display === 'none') {
            return 0;
        }
        if (e.classList.contains('hidden')) {
            return 0;
        }
        if (e.classList.contains('invisible')) {
            return 0;
        }
        const style = window.getComputedStyle(e);
        if (style.display === 'none') {
            return 0;
        }
        if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
            return 1;
        }
        let count = 0;
        const children = e.children;
        if (children?.length) {
            for (let i = 0; i < children.length && count === 0; i++) {
                const child = children.item(i);
                if (child && child instanceof HTMLElement) {
                    count += this.checkVisibilityRecursively(child);
                }
            }
        }
        return count;
    }
    onClick(htmlevent, action, eventBusName, closeOnClick) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const origin = htmlevent.target;
        origin?.classList.add('toggled');
        if (action) {
            action();
            htmlevent.preventDefault();
        }
        else if (eventBusName) {
            PDFViewerApplication.eventBus.dispatch(eventBusName);
            htmlevent.preventDefault();
        }
        if (closeOnClick) {
            PDFViewerApplication.secondaryToolbar.close();
        }
    }
}
PdfSecondaryToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSecondaryToolbarComponent, deps: [{ token: i0.ElementRef }, { token: i1.PDFNotificationService }, { token: PLATFORM_ID }, { token: i2.PdfShyButtonService }, { token: i3.NgxExtendedPdfViewerService }], target: i0.ɵɵFactoryTarget.Component });
PdfSecondaryToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSecondaryToolbarComponent, selector: "pdf-secondary-toolbar", inputs: { customSecondaryToolbar: "customSecondaryToolbar", secondaryToolbarTop: "secondaryToolbarTop", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", localizationInitialized: "localizationInitialized" }, outputs: { spreadChange: "spreadChange" }, host: { listeners: { "window:resize": "onResize()" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\r\n\r\n<ng-template #defaultSecondaryToolbar>\r\n  <div\r\n    id=\"secondaryToolbar\"\r\n    class=\"secondaryToolbar hidden doorHangerRight\"\r\n    [style.top]=\"secondaryToolbarTop\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'right top'\"\r\n  >\r\n    <div id=\"secondaryToolbarButtonContainer\">\r\n      <button\r\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\r\n        type=\"button\"\r\n        [id]=\"button.id\"\r\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\r\n        [class.toggled]=\"button.toggled\"\r\n        class=\"secondaryToolbarButton\"\r\n        [title]=\"button.title\"\r\n        [attr.data-l10n-id]=\"button.l10nId\"\r\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\r\n        [attr.aria-label]=\"button.title\"\r\n        role=\"button\"\r\n      >\r\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\r\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"], directives: [{ type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "invertForSecondaryToolbar": i5.NegativeResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSecondaryToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-secondary-toolbar', template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\r\n\r\n<ng-template #defaultSecondaryToolbar>\r\n  <div\r\n    id=\"secondaryToolbar\"\r\n    class=\"secondaryToolbar hidden doorHangerRight\"\r\n    [style.top]=\"secondaryToolbarTop\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'right top'\"\r\n  >\r\n    <div id=\"secondaryToolbarButtonContainer\">\r\n      <button\r\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\r\n        type=\"button\"\r\n        [id]=\"button.id\"\r\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\r\n        [class.toggled]=\"button.toggled\"\r\n        class=\"secondaryToolbarButton\"\r\n        [title]=\"button.title\"\r\n        [attr.data-l10n-id]=\"button.l10nId\"\r\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\r\n        [attr.aria-label]=\"button.title\"\r\n        role=\"button\"\r\n      >\r\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\r\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.PDFNotificationService }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i2.PdfShyButtonService }, { type: i3.NgxExtendedPdfViewerService }]; }, propDecorators: { customSecondaryToolbar: [{
                type: Input
            }], secondaryToolbarTop: [{
                type: Input
            }], mobileFriendlyZoomScale: [{
                type: Input
            }], localizationInitialized: [{
                type: Input
            }], spreadChange: [{
                type: Output
            }], onResize: [{
                type: HostListener,
                args: ['window:resize']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBR0wsTUFBTSxFQUNOLFdBQVcsR0FHWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFXdEMsTUFBTSxPQUFPLDRCQUE0QjtJQXNCdkMsWUFDVSxPQUFtQixFQUNwQixtQkFBMkMsRUFDckIsVUFBa0IsRUFDeEMsbUJBQXdDLEVBQ3ZDLDJCQUF3RDtRQUp4RCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ3BCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFDckIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3ZDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7UUFiM0QsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQUUxRCx3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFFM0Isb0JBQWUsR0FBRyxJ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LENBQUM7UUFDakMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLEVBQUUsQ0FBQztZQUNULFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUM1QjthQUFNLElBQUksWUFBWSxFQUFFO1lBQ3ZCLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckQsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDL0M7SUFDSCxDQUFDOzt5SEF4S1UsNEJBQTRCLGtGQXlCN0IsV0FBVzs2R0F6QlYsNEJBQTRCLHVZQzNCekMsZzNDQThCQTsyRkRIYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UsdUJBQXVCO3dIQTZCVSxNQUFNOzBCQUE5QyxNQUFNOzJCQUFDLFdBQVc7d0hBdkJkLHNCQUFzQjtzQkFENUIsS0FBSztnQkFJQyxtQkFBbUI7c0JBRHpCLEtBQUs7Z0JBSUMsdUJBQXVCO3NCQUQ3QixLQUFLO2dCQUlDLHVCQUF1QjtzQkFEN0IsS0FBSztnQkFJQyxZQUFZO3NCQURsQixNQUFNO2dCQXlEQSxRQUFRO3NCQURkLFlBQVk7dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFBkZlNoeUJ1dHRvblNlcnZpY2UgfSBmcm9tICcuLi8uLi90b29sYmFyL3BkZi1zaHktYnV0dG9uL3BkZi1zaHktYnV0dG9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNlY29uZGFyeS10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2NhbGl6YXRpb25Jbml0aWFsaXplZDogYm9vbGVhbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVQcmV2aW91c1BhZ2UgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZU5leHRQYWdlID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBjbGFzc011dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcclxuICAgIHB1YmxpYyBwZGZTaHlCdXR0b25TZXJ2aWNlOiBQZGZTaHlCdXR0b25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBuZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2U6IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25QZGZKc0luaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VjaGFuZ2luZycsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVVSVN0YXRlKCk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyZWQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlVUlTdGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcclxuICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldmlvdXNQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChwcmV2aW91c0J1dHRvbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZSA9IE51bWJlcihjdXJyZW50UGFnZSkgPD0gMTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgIGlmIChuZXh0QnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlTmV4dFBhZ2UgPSBjdXJyZW50UGFnZSA9PT0gUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudDtcclxuICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlTmV4dFBhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU3ByZWFkQ2hhbmdlKG5ld1NwcmVhZDogJ29mZicgfCAnb2RkJyB8ICdldmVuJyk6IHZvaWQge1xyXG4gICAgdGhpcy5zcHJlYWRDaGFuZ2UuZW1pdChuZXdTcHJlYWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBwdWJsaWMgb25SZXNpemUoKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tWaXNpYmlsaXR5KCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIGNvbnN0IHRhcmdldE5vZGUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH07XHJcblxyXG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10sIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtdXRhdGlvbiBvZiBtdXRhdGlvbkxpc3QpIHtcclxuICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcclxuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgICAgICAgICAgICB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdjaGlsZExpc3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jbGFzc011dGF0aW9uT2JzZXJ2ZXIpIHtcclxuICAgICAgdGhpcy5jbGFzc011dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlciA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja1Zpc2liaWxpdHkoKTogdm9pZCB7XHJcbiAgICBsZXQgdmlzaWJsZUJ1dHRvbnMgPSAwO1xyXG4gICAgY29uc3QgZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgZiA9IGUuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgIGlmIChmKSB7XHJcbiAgICAgIGNvbnN0IGcgPSBmLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICAgIGlmIChnICYmIGcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZpc2libGVCdXR0b25zID0gdGhpcy5jaGVja1Zpc2liaWxpdHlSZWN1cnNpdmVseShnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2Uuc2Vjb25kYXJ5TWVudUlzRW1wdHkgPSB2aXNpYmxlQnV0dG9ucyA9PT0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChlLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ludmlzaWJsZScpKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZSk7XHJcbiAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgZSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gZS5jaGlsZHJlbjtcclxuICAgIGlmIChjaGlsZHJlbj8ubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoICYmIGNvdW50ID09PSAwOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICAgIGNvdW50ICs9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soaHRtbGV2ZW50OiBFdmVudCwgYWN0aW9uOiB1bmRlZmluZWQgfCAoKCkgPT4gdm9pZCksIGV2ZW50QnVzTmFtZT86IHN0cmluZywgY2xvc2VPbkNsaWNrPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IG9yaWdpbiA9IGh0bWxldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBvcmlnaW4/LmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZWQnKTtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgYWN0aW9uKCk7XHJcbiAgICAgIGh0bWxldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSBlbHNlIGlmIChldmVudEJ1c05hbWUpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goZXZlbnRCdXNOYW1lKTtcclxuICAgICAgaHRtbGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY2xvc2VPbkNsaWNrKSB7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNlY29uZGFyeVRvb2xiYXIuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21TZWNvbmRhcnlUb29sYmFyID8gY3VzdG9tU2Vjb25kYXJ5VG9vbGJhciA6IGRlZmF1bHRTZWNvbmRhcnlUb29sYmFyXCI+IDwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0U2Vjb25kYXJ5VG9vbGJhcj5cclxuICA8ZGl2XHJcbiAgICBpZD1cInNlY29uZGFyeVRvb2xiYXJcIlxyXG4gICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIlxyXG4gICAgW3N0eWxlLnRvcF09XCJzZWNvbmRhcnlUb29sYmFyVG9wXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlKCcgKyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSArICcpJ1wiXHJcbiAgICBbc3R5bGUudHJhbnNmb3JtT3JpZ2luXT1cIidyaWdodCB0b3AnXCJcclxuICA+XHJcbiAgICA8ZGl2IGlkPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lclwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBwZGZTaHlCdXR0b25TZXJ2aWNlLmJ1dHRvbnNcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIFtpZF09XCJidXR0b24uaWRcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cImJ1dHRvbi5jc3NDbGFzcyB8IGludmVydEZvclNlY29uZGFyeVRvb2xiYXJcIlxyXG4gICAgICAgIFtjbGFzcy50b2dnbGVkXT1cImJ1dHRvbi50b2dnbGVkXCJcclxuICAgICAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXJCdXR0b25cIlxyXG4gICAgICAgIFt0aXRsZV09XCJidXR0b24udGl0bGVcIlxyXG4gICAgICAgIFthdHRyLmRhdGEtbDEwbi1pZF09XCJidXR0b24ubDEwbklkXCJcclxuICAgICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQsIGJ1dHRvbi5hY3Rpb24sIGJ1dHRvbi5ldmVudEJ1c05hbWUsIGJ1dHRvbi5jbG9zZU9uQ2xpY2spXCJcclxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImJ1dHRvbi50aXRsZVwiXHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiByb2xlPVwiaW1nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJidXR0b24udGl0bGVcIiAqbmdJZj1cImJ1dHRvbi5pbWFnZVwiIFtpbm5lckhUTUxdPVwiYnV0dG9uLmltYWdlXCI+PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbGJhci1jYXB0aW9uXCIgW2F0dHIuZGF0YS1sMTBuLWlkXT1cImJ1dHRvbi5sMTBuTGFiZWxcIj57eyBidXR0b24udGl0bGUgfX08L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==