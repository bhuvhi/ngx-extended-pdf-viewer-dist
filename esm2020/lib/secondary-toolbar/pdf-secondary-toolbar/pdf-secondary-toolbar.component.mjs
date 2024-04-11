import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, } from '@angular/core';
import { take } from 'rxjs/operators';
import { PdfShyButtonService } from '../../toolbar/pdf-shy-button/pdf-shy-button-service';
import { PDFNotificationService } from './../../pdf-notification-service';
import { NgxExtendedPdfViewerService } from '../../ngx-extended-pdf-viewer.service';
import * as i0 from "@angular/core";
import * as i1 from "./../../pdf-notification-service";
import * as i2 from "../../toolbar/pdf-shy-button/pdf-shy-button-service";
import * as i3 from "../../ngx-extended-pdf-viewer.service";
import * as i4 from "@angular/common";
import * as i5 from "../../responsive-visibility";
function PdfSecondaryToolbarComponent_ng_template_1_button_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const button_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", button_r3.image, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", button_r3.title);
} }
function PdfSecondaryToolbarComponent_ng_template_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_button_2_Template_button_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r7); const button_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.onClick($event, button_r3.action, button_r3.eventBusName, button_r3.closeOnClick); });
    i0.ɵɵpipe(1, "invertForSecondaryToolbar");
    i0.ɵɵtemplate(2, PdfSecondaryToolbarComponent_ng_template_1_button_2_span_2_Template, 1, 2, "span", 6);
    i0.ɵɵelementStart(3, "span", 7);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const button_r3 = ctx.$implicit;
    i0.ɵɵclassProp("toggled", button_r3.toggled);
    i0.ɵɵproperty("id", button_r3.id)("ngClass", i0.ɵɵpipeBind1(1, 10, button_r3.cssClass))("title", button_r3.title);
    i0.ɵɵattribute("data-l10n-id", button_r3.l10nId)("aria-label", button_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", button_r3.image);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-l10n-id", button_r3.l10nLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(button_r3.title);
} }
function PdfSecondaryToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, PdfSecondaryToolbarComponent_ng_template_1_button_2_Template, 5, 12, "button", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r1.secondaryToolbarTop)("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "right top");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.pdfShyButtonService.buttons);
} }
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
/** @nocollapse */ PdfSecondaryToolbarComponent.ɵfac = function PdfSecondaryToolbarComponent_Factory(t) { return new (t || PdfSecondaryToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i2.PdfShyButtonService), i0.ɵɵdirectiveInject(i3.NgxExtendedPdfViewerService)); };
/** @nocollapse */ PdfSecondaryToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSecondaryToolbarComponent, selectors: [["pdf-secondary-toolbar"]], hostBindings: function PdfSecondaryToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("resize", function PdfSecondaryToolbarComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
    } }, inputs: { customSecondaryToolbar: "customSecondaryToolbar", secondaryToolbarTop: "secondaryToolbarTop", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", localizationInitialized: "localizationInitialized" }, outputs: { spreadChange: "spreadChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultSecondaryToolbar", ""], ["id", "secondaryToolbar", 1, "secondaryToolbar", "hidden", "doorHangerRight"], ["id", "secondaryToolbarButtonContainer"], ["type", "button", "class", "secondaryToolbarButton", "role", "button", 3, "id", "ngClass", "toggled", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", "role", "button", 1, "secondaryToolbarButton", 3, "id", "ngClass", "title", "click"], ["class", "icon", "role", "img", "aria-hidden", "true", 3, "innerHTML", 4, "ngIf"], [1, "toolbar-caption"], ["role", "img", "aria-hidden", "true", 1, "icon", 3, "innerHTML"]], template: function PdfSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
        i0.ɵɵtemplate(1, PdfSecondaryToolbarComponent_ng_template_1_Template, 3, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customSecondaryToolbar ? ctx.customSecondaryToolbar : _r0);
    } }, directives: [i4.NgTemplateOutlet, i4.NgForOf, i4.NgClass, i4.NgIf], pipes: [i5.NegativeResponsiveCSSClassPipe], styles: ["svg[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.secondaryToolbarButton[disabled][_ngcontent-%COMP%]{opacity:.5}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}  html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}  html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar[_ngcontent-%COMP%]{height:auto;z-index:3000}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}  [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer[_ngcontent-%COMP%]{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption[_ngcontent-%COMP%]{position:relative;top:-3px}.icon[_ngcontent-%COMP%]{width:24px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSecondaryToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-secondary-toolbar', template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\n\n<ng-template #defaultSecondaryToolbar>\n  <div\n    id=\"secondaryToolbar\"\n    class=\"secondaryToolbar hidden doorHangerRight\"\n    [style.top]=\"secondaryToolbarTop\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'right top'\"\n  >\n    <div id=\"secondaryToolbarButtonContainer\">\n      <button\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\n        type=\"button\"\n        [id]=\"button.id\"\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\n        [class.toggled]=\"button.toggled\"\n        class=\"secondaryToolbarButton\"\n        [title]=\"button.title\"\n        [attr.data-l10n-id]=\"button.l10nId\"\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\n        [attr.aria-label]=\"button.title\"\n        role=\"button\"\n      >\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\n      </button>\n    </div>\n  </div>\n</ng-template>\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"] }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.PDFNotificationService }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i2.PdfShyButtonService }, { type: i3.NgxExtendedPdfViewerService }]; }, { customSecondaryToolbar: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7OztJQ0k1RSwwQkFBeUk7OztJQUFsQyw4REFBMEI7SUFBaEYsNkNBQWdDOzs7O0lBYm5GLGlDQVlDO0lBSEMsOFBBQVMsd0ZBQXdFLElBQUM7O0lBSWxGLHNHQUF5STtJQUN6SSwrQkFBcUU7SUFBQSxZQUFrQjtJQUFBLGlCQUFPLEVBQUE7OztJQVQ5Riw0Q0FBZ0M7SUFGaEMsaUNBQWdCLHNEQUFBLDBCQUFBO0lBS2hC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THhDLFNBQVM7MkJBQ0UsdUJBQXVCO29HQTZCVSxNQUFNO3NCQUE5QyxNQUFNO3VCQUFDLFdBQVc7b0dBdkJkLHNCQUFzQjtrQkFENUIsS0FBSztZQUlDLG1CQUFtQjtrQkFEekIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLFlBQVk7a0JBRGxCLE1BQU07WUF5REEsUUFBUTtrQkFEZCxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBQZGZTaHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlJztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXNlY29uZGFyeS10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2NhbGl6YXRpb25Jbml0aWFsaXplZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcblxuICBwdWJsaWMgZGlzYWJsZVByZXZpb3VzUGFnZSA9IHRydWU7XG5cbiAgcHVibGljIGRpc2FibGVOZXh0UGFnZSA9IHRydWU7XG5cbiAgcHJpdmF0ZSBjbGFzc011dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHB1YmxpYyBwZGZTaHlCdXR0b25TZXJ2aWNlOiBQZGZTaHlCdXR0b25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlOiBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVVJU3RhdGUoKTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVVSVN0YXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZSgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcbiAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzUGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgICAgaWYgKHByZXZpb3VzQnV0dG9uKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZVByZXZpb3VzUGFnZSA9IE51bWJlcihjdXJyZW50UGFnZSkgPD0gMTtcbiAgICAgICAgcHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVQcmV2aW91c1BhZ2U7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHRQYWdlJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgICBpZiAobmV4dEJ1dHRvbikge1xuICAgICAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IGN1cnJlbnRQYWdlID09PSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50O1xuICAgICAgICBuZXh0QnV0dG9uLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlTmV4dFBhZ2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgb25TcHJlYWRDaGFuZ2UobmV3U3ByZWFkOiAnb2ZmJyB8ICdvZGQnIHwgJ2V2ZW4nKTogdm9pZCB7XG4gICAgdGhpcy5zcHJlYWRDaGFuZ2UuZW1pdChuZXdTcHJlYWQpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tWaXNpYmlsaXR5KCkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIHB1YmxpYyBvblJlc2l6ZSgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tWaXNpYmlsaXR5KCkpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xuXG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbkxpc3Q6IE11dGF0aW9uUmVjb3JkW10sIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGVja1Zpc2liaWxpdHkoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgdGhpcy5jaGVja1Zpc2liaWxpdHkoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2hlY2tWaXNpYmlsaXR5KCk6IHZvaWQge1xuICAgIGxldCB2aXNpYmxlQnV0dG9ucyA9IDA7XG4gICAgY29uc3QgZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGYgPSBlLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgaWYgKGYpIHtcbiAgICAgIGNvbnN0IGcgPSBmLmNoaWxkcmVuLml0ZW0oMCk7XG4gICAgICBpZiAoZyAmJiBnIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdmlzaWJsZUJ1dHRvbnMgPSB0aGlzLmNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGcpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZS5zZWNvbmRhcnlNZW51SXNFbXB0eSA9IHZpc2libGVCdXR0b25zID09PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja1Zpc2liaWxpdHlSZWN1cnNpdmVseShlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcbiAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGUgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbj8ubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aCAmJiBjb3VudCA9PT0gMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgaWYgKGNoaWxkICYmIGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICBjb3VudCArPSB0aGlzLmNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgb25DbGljayhodG1sZXZlbnQ6IEV2ZW50LCBhY3Rpb246IHVuZGVmaW5lZCB8ICgoKSA9PiB2b2lkKSwgZXZlbnRCdXNOYW1lPzogc3RyaW5nLCBjbG9zZU9uQ2xpY2s/OiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBodG1sZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIG9yaWdpbj8uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGFjdGlvbigpO1xuICAgICAgaHRtbGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChldmVudEJ1c05hbWUpIHtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKGV2ZW50QnVzTmFtZSk7XG4gICAgICBodG1sZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKGNsb3NlT25DbGljaykge1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc2Vjb25kYXJ5VG9vbGJhci5jbG9zZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21TZWNvbmRhcnlUb29sYmFyID8gY3VzdG9tU2Vjb25kYXJ5VG9vbGJhciA6IGRlZmF1bHRTZWNvbmRhcnlUb29sYmFyXCI+IDwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRTZWNvbmRhcnlUb29sYmFyPlxuICA8ZGl2XG4gICAgaWQ9XCJzZWNvbmRhcnlUb29sYmFyXCJcbiAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXIgaGlkZGVuIGRvb3JIYW5nZXJSaWdodFwiXG4gICAgW3N0eWxlLnRvcF09XCJzZWNvbmRhcnlUb29sYmFyVG9wXCJcbiAgICBbc3R5bGUudHJhbnNmb3JtXT1cIidzY2FsZSgnICsgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgKyAnKSdcIlxuICAgIFtzdHlsZS50cmFuc2Zvcm1PcmlnaW5dPVwiJ3JpZ2h0IHRvcCdcIlxuICA+XG4gICAgPGRpdiBpZD1cInNlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKm5nRm9yPVwibGV0IGJ1dHRvbiBvZiBwZGZTaHlCdXR0b25TZXJ2aWNlLmJ1dHRvbnNcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgW2lkXT1cImJ1dHRvbi5pZFwiXG4gICAgICAgIFtuZ0NsYXNzXT1cImJ1dHRvbi5jc3NDbGFzcyB8IGludmVydEZvclNlY29uZGFyeVRvb2xiYXJcIlxuICAgICAgICBbY2xhc3MudG9nZ2xlZF09XCJidXR0b24udG9nZ2xlZFwiXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvblwiXG4gICAgICAgIFt0aXRsZV09XCJidXR0b24udGl0bGVcIlxuICAgICAgICBbYXR0ci5kYXRhLWwxMG4taWRdPVwiYnV0dG9uLmwxMG5JZFwiXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudCwgYnV0dG9uLmFjdGlvbiwgYnV0dG9uLmV2ZW50QnVzTmFtZSwgYnV0dG9uLmNsb3NlT25DbGljaylcIlxuICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImJ1dHRvbi50aXRsZVwiXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIiByb2xlPVwiaW1nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJidXR0b24udGl0bGVcIiAqbmdJZj1cImJ1dHRvbi5pbWFnZVwiIFtpbm5lckhUTUxdPVwiYnV0dG9uLmltYWdlXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2xiYXItY2FwdGlvblwiIFthdHRyLmRhdGEtbDEwbi1pZF09XCJidXR0b24ubDEwbkxhYmVsXCI+e3sgYnV0dG9uLnRpdGxlIH19PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==