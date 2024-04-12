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
        args: [{ selector: 'pdf-secondary-toolbar', template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\r\n\r\n<ng-template #defaultSecondaryToolbar>\r\n  <div\r\n    id=\"secondaryToolbar\"\r\n    class=\"secondaryToolbar hidden doorHangerRight\"\r\n    [style.top]=\"secondaryToolbarTop\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'right top'\"\r\n  >\r\n    <div id=\"secondaryToolbarButtonContainer\">\r\n      <button\r\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\r\n        type=\"button\"\r\n        [id]=\"button.id\"\r\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\r\n        [class.toggled]=\"button.toggled\"\r\n        class=\"secondaryToolbarButton\"\r\n        [title]=\"button.title\"\r\n        [attr.data-l10n-id]=\"button.l10nId\"\r\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\r\n        [attr.aria-label]=\"button.title\"\r\n        role=\"button\"\r\n      >\r\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\r\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7OztJQ0k1RSwwQkFBeUk7OztJQUFsQyw4REFBMEI7SUFBaEYsNkNBQWdDOzs7O0lBYm5GLGlDQVlDO0lBSEMsOFBBQVMsd0ZBQXdFLElBQUM7O0lBSWxGLHNHQUF5STtJQUN6SSwrQkFBcUU7SUFBQSxZQUFrQjtJQUFBLGlCQUFPLEVBQUE7OztJQVQ5Riw0Q0FBZ0M7SUFGaEMsaUNBQWdCLHNEQUFBLDBCQUFBO0lBS2hC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THhDLFNBQVM7MkJBQ0UsdUJBQXVCO29HQTZCVSxNQUFNO3NCQUE5QyxNQUFNO3VCQUFDLFdBQVc7b0dBdkJkLHNCQUFzQjtrQkFENUIsS0FBSztZQUlDLG1CQUFtQjtrQkFEekIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLFlBQVk7a0JBRGxCLE1BQU07WUF5REEsUUFBUTtrQkFEZCxZQUFZO21CQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBQZGZTaHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1zZWNvbmRhcnktdG9vbGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGU6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9jYWxpemF0aW9uSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcHJlYWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPCdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCc+KCk7XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlUHJldmlvdXNQYWdlID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGRpc2FibGVOZXh0UGFnZSA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgY2xhc3NNdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHB1YmxpYyBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXHJcbiAgICBwdWJsaWMgcGRmU2h5QnV0dG9uU2VydmljZTogUGRmU2h5QnV0dG9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlOiBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMudXBkYXRlVUlTdGF0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVVJU3RhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXI7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXZpb3VzUGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBpZiAocHJldmlvdXNCdXR0b24pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVQcmV2aW91c1BhZ2UgPSBOdW1iZXIoY3VycmVudFBhZ2UpIDw9IDE7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVQcmV2aW91c1BhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0UGFnZScpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICBpZiAobmV4dEJ1dHRvbikge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZU5leHRQYWdlID0gY3VycmVudFBhZ2UgPT09IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQ7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZU5leHRQYWdlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNwcmVhZENoYW5nZShuZXdTcHJlYWQ6ICdvZmYnIHwgJ29kZCcgfCAnZXZlbicpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQobmV3U3ByZWFkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2hlY2tWaXNpYmlsaXR5KCkpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXHJcbiAgcHVibGljIG9uUmVzaXplKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICBjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9O1xyXG5cclxuICAgICAgdGhpcy5jbGFzc011dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25MaXN0OiBNdXRhdGlvblJlY29yZFtdLCBvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgbXV0YXRpb24gb2YgbXV0YXRpb25MaXN0KSB7XHJcbiAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2F0dHJpYnV0ZXMnKSB7XHJcbiAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5jaGVja1Zpc2liaWxpdHkoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChtdXRhdGlvbi50eXBlID09PSAnY2hpbGRMaXN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5jbGFzc011dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgdGhpcy5jbGFzc011dGF0aW9uT2JzZXJ2ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tWaXNpYmlsaXR5KCk6IHZvaWQge1xyXG4gICAgbGV0IHZpc2libGVCdXR0b25zID0gMDtcclxuICAgIGNvbnN0IGUgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IGYgPSBlLmNoaWxkcmVuLml0ZW0oMCk7XHJcbiAgICBpZiAoZikge1xyXG4gICAgICBjb25zdCBnID0gZi5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgICBpZiAoZyAmJiBnIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB2aXNpYmxlQnV0dG9ucyA9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlLnNlY29uZGFyeU1lbnVJc0VtcHR5ID0gdmlzaWJsZUJ1dHRvbnMgPT09IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUpO1xyXG4gICAgaWYgKHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGUgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xyXG4gICAgICByZXR1cm4gMTtcclxuICAgIH1cclxuICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IGUuY2hpbGRyZW47XHJcbiAgICBpZiAoY2hpbGRyZW4/Lmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aCAmJiBjb3VudCA9PT0gMDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGlmIChjaGlsZCAmJiBjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICBjb3VudCArPSB0aGlzLmNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGh0bWxldmVudDogRXZlbnQsIGFjdGlvbjogdW5kZWZpbmVkIHwgKCgpID0+IHZvaWQpLCBldmVudEJ1c05hbWU/OiBzdHJpbmcsIGNsb3NlT25DbGljaz86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBvcmlnaW4gPSBodG1sZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgb3JpZ2luPy5jbGFzc0xpc3QuYWRkKCd0b2dnbGVkJyk7XHJcbiAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgIGFjdGlvbigpO1xyXG4gICAgICBodG1sZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnRCdXNOYW1lKSB7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKGV2ZW50QnVzTmFtZSk7XHJcbiAgICAgIGh0bWxldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGNsb3NlT25DbGljaykge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zZWNvbmRhcnlUb29sYmFyLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tU2Vjb25kYXJ5VG9vbGJhciA/IGN1c3RvbVNlY29uZGFyeVRvb2xiYXIgOiBkZWZhdWx0U2Vjb25kYXJ5VG9vbGJhclwiPiA8L25nLWNvbnRhaW5lcj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFNlY29uZGFyeVRvb2xiYXI+XHJcbiAgPGRpdlxyXG4gICAgaWQ9XCJzZWNvbmRhcnlUb29sYmFyXCJcclxuICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhciBoaWRkZW4gZG9vckhhbmdlclJpZ2h0XCJcclxuICAgIFtzdHlsZS50b3BdPVwic2Vjb25kYXJ5VG9vbGJhclRvcFwiXHJcbiAgICBbc3R5bGUudHJhbnNmb3JtXT1cIidzY2FsZSgnICsgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgKyAnKSdcIlxyXG4gICAgW3N0eWxlLnRyYW5zZm9ybU9yaWdpbl09XCIncmlnaHQgdG9wJ1wiXHJcbiAgPlxyXG4gICAgPGRpdiBpZD1cInNlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXJcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBidXR0b24gb2YgcGRmU2h5QnV0dG9uU2VydmljZS5idXR0b25zXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbaWRdPVwiYnV0dG9uLmlkXCJcclxuICAgICAgICBbbmdDbGFzc109XCJidXR0b24uY3NzQ2xhc3MgfCBpbnZlcnRGb3JTZWNvbmRhcnlUb29sYmFyXCJcclxuICAgICAgICBbY2xhc3MudG9nZ2xlZF09XCJidXR0b24udG9nZ2xlZFwiXHJcbiAgICAgICAgY2xhc3M9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uXCJcclxuICAgICAgICBbdGl0bGVdPVwiYnV0dG9uLnRpdGxlXCJcclxuICAgICAgICBbYXR0ci5kYXRhLWwxMG4taWRdPVwiYnV0dG9uLmwxMG5JZFwiXHJcbiAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50LCBidXR0b24uYWN0aW9uLCBidXR0b24uZXZlbnRCdXNOYW1lLCBidXR0b24uY2xvc2VPbkNsaWNrKVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJidXR0b24udGl0bGVcIlxyXG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCIgcm9sZT1cImltZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYnV0dG9uLnRpdGxlXCIgKm5nSWY9XCJidXR0b24uaW1hZ2VcIiBbaW5uZXJIVE1MXT1cImJ1dHRvbi5pbWFnZVwiPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2xiYXItY2FwdGlvblwiIFthdHRyLmRhdGEtbDEwbi1pZF09XCJidXR0b24ubDEwbkxhYmVsXCI+e3sgYnV0dG9uLnRpdGxlIH19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=