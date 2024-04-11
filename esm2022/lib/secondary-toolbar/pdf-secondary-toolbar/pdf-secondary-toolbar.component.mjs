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
    const button_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", button_r2.image, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", button_r2.title);
} }
function PdfSecondaryToolbarComponent_ng_template_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵpipe(1, "invertForSecondaryToolbar");
    i0.ɵɵlistener("click", function PdfSecondaryToolbarComponent_ng_template_1_button_2_Template_button_click_0_listener($event) { const button_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onClick($event, button_r2.action, button_r2.eventBusName, button_r2.closeOnClick)); });
    i0.ɵɵtemplate(2, PdfSecondaryToolbarComponent_ng_template_1_button_2_span_2_Template, 1, 2, "span", 6);
    i0.ɵɵelementStart(3, "span", 7);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const button_r2 = ctx.$implicit;
    i0.ɵɵclassProp("toggled", button_r2.toggled);
    i0.ɵɵproperty("id", button_r2.id)("ngClass", i0.ɵɵpipeBind1(1, 10, button_r2.cssClass))("title", button_r2.title);
    i0.ɵɵattribute("data-l10n-id", button_r2.l10nId)("aria-label", button_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", button_r2.image);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-l10n-id", button_r2.l10nLabel);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(button_r2.title);
} }
function PdfSecondaryToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3);
    i0.ɵɵtemplate(2, PdfSecondaryToolbarComponent_ng_template_1_button_2_Template, 5, 12, "button", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r2.secondaryToolbarTop)("transform", "scale(" + ctx_r2.mobileFriendlyZoomScale + ")")("transform-origin", "right top");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r2.pdfShyButtonService.buttons);
} }
export class PdfSecondaryToolbarComponent {
    element;
    notificationService;
    platformId;
    pdfShyButtonService;
    ngxExtendedPdfViewerService;
    customSecondaryToolbar;
    secondaryToolbarTop;
    mobileFriendlyZoomScale;
    localizationInitialized;
    spreadChange = new EventEmitter();
    disablePreviousPage = true;
    disableNextPage = true;
    classMutationObserver;
    constructor(element, notificationService, platformId, pdfShyButtonService, ngxExtendedPdfViewerService) {
        this.element = element;
        this.notificationService = notificationService;
        this.platformId = platformId;
        this.pdfShyButtonService = pdfShyButtonService;
        this.ngxExtendedPdfViewerService = ngxExtendedPdfViewerService;
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
            action(htmlevent, true);
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
    /** @nocollapse */ static ɵfac = function PdfSecondaryToolbarComponent_Factory(t) { return new (t || PdfSecondaryToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i2.PdfShyButtonService), i0.ɵɵdirectiveInject(i3.NgxExtendedPdfViewerService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSecondaryToolbarComponent, selectors: [["pdf-secondary-toolbar"]], hostBindings: function PdfSecondaryToolbarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function PdfSecondaryToolbarComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { customSecondaryToolbar: "customSecondaryToolbar", secondaryToolbarTop: "secondaryToolbarTop", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", localizationInitialized: "localizationInitialized" }, outputs: { spreadChange: "spreadChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 1, consts: [["defaultSecondaryToolbar", ""], [3, "ngTemplateOutlet"], ["id", "secondaryToolbar", 1, "secondaryToolbar", "hidden", "doorHangerRight"], ["id", "secondaryToolbarButtonContainer"], ["type", "button", "class", "secondaryToolbarButton", "role", "button", 3, "id", "ngClass", "toggled", "title", "click", 4, "ngFor", "ngForOf"], ["type", "button", "role", "button", 1, "secondaryToolbarButton", 3, "click", "id", "ngClass", "title"], ["class", "icon", "role", "img", "aria-hidden", "true", 3, "innerHTML", 4, "ngIf"], [1, "toolbar-caption"], ["role", "img", "aria-hidden", "true", 1, "icon", 3, "innerHTML"]], template: function PdfSecondaryToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 1);
            i0.ɵɵtemplate(1, PdfSecondaryToolbarComponent_ng_template_1_Template, 3, 7, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const defaultSecondaryToolbar_r4 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customSecondaryToolbar ? ctx.customSecondaryToolbar : defaultSecondaryToolbar_r4);
        } }, dependencies: [i4.NgClass, i4.NgForOf, i4.NgIf, i4.NgTemplateOutlet, i5.NegativeResponsiveCSSClassPipe], styles: ["svg[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.secondaryToolbarButton[disabled][_ngcontent-%COMP%]{opacity:.5}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}  html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}  html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar[_ngcontent-%COMP%]{height:auto;z-index:3000}  html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}  [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer[_ngcontent-%COMP%]{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption[_ngcontent-%COMP%]{position:relative;top:-3px}.icon[_ngcontent-%COMP%]{width:24px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSecondaryToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-secondary-toolbar', template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\r\n\r\n<ng-template #defaultSecondaryToolbar>\r\n  <div\r\n    id=\"secondaryToolbar\"\r\n    class=\"secondaryToolbar hidden doorHangerRight\"\r\n    [style.top]=\"secondaryToolbarTop\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'right top'\"\r\n  >\r\n    <div id=\"secondaryToolbarButtonContainer\">\r\n      <button\r\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\r\n        type=\"button\"\r\n        [id]=\"button.id\"\r\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\r\n        [class.toggled]=\"button.toggled\"\r\n        class=\"secondaryToolbarButton\"\r\n        [title]=\"button.title\"\r\n        [attr.data-l10n-id]=\"button.l10nId\"\r\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\r\n        [attr.aria-label]=\"button.title\"\r\n        role=\"button\"\r\n      >\r\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\r\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"] }]
    }], () => [{ type: i0.ElementRef }, { type: i1.PDFNotificationService }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i2.PdfShyButtonService }, { type: i3.NgxExtendedPdfViewerService }], { customSecondaryToolbar: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfSecondaryToolbarComponent, { className: "PdfSecondaryToolbarComponent", filePath: "lib\\secondary-toolbar\\pdf-secondary-toolbar\\pdf-secondary-toolbar.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEdBR1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7Ozs7OztJQ0k1RSwwQkFBeUk7OztJQUFsQyw4REFBMEI7Ozs7O0lBYm5JLGlDQVlDOztJQUhDLDRPQUFTLHdGQUF3RSxLQUFDO0lBSWxGLHNHQUFrSTtJQUNsSSwrQkFBcUU7SUFBQSxZQUFrQjtJQUN6RixBQUR5RixpQkFBTyxFQUN2Rjs7O0lBVlAsNENBQWdDO0lBRWhDLEFBSEEsQUFEQSxpQ0FBZ0Isc0RBQ3VDLDBCQUdq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LEVBQUUsQ0FBQztTQUMvQztJQUNILENBQUM7eUdBN0tVLDRCQUE0Qiw2R0F5QjdCLFdBQVc7NEZBekJWLDRCQUE0QjtZQUE1QixtR0FBQSxjQUFVLCtCQUFrQjs7WUMzQnpDLDJCQUE2SDtZQUU3SCw4SEFBc0M7OztZQUZ4Qix1SEFBOEY7OztpRkQyQi9GLDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLHVCQUF1Qjs7c0JBNkI5QixNQUFNO3VCQUFDLFdBQVc7aUdBdkJkLHNCQUFzQjtrQkFENUIsS0FBSztZQUlDLG1CQUFtQjtrQkFEekIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLFlBQVk7a0JBRGxCLE1BQU07WUF5REEsUUFBUTtrQkFEZCxZQUFZO21CQUFDLGVBQWU7O2tGQXJFbEIsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUGRmU2h5QnV0dG9uU2VydmljZSB9IGZyb20gJy4uLy4uL3Rvb2xiYXIvcGRmLXNoeS1idXR0b24vcGRmLXNoeS1idXR0b24tc2VydmljZSc7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4uLy4uL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2Vjb25kYXJ5LXRvb2xiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNlY29uZGFyeVRvb2xiYXJUb3A7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsaXphdGlvbkluaXRpYWxpemVkOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xyXG5cclxuICBwdWJsaWMgZGlzYWJsZVByZXZpb3VzUGFnZSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBkaXNhYmxlTmV4dFBhZ2UgPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIGNsYXNzTXV0YXRpb25PYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxyXG4gICAgcHVibGljIHBkZlNoeUJ1dHRvblNlcnZpY2U6IFBkZlNoeUJ1dHRvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIG5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZTogTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZWNoYW5naW5nJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLnVwZGF0ZVVJU3RhdGUoKTtcclxuICAgIH0pO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VyZW5kZXJlZCcsICgpID0+IHtcclxuICAgICAgdGhpcy51cGRhdGVVSVN0YXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVVSVN0YXRlKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyO1xyXG4gICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2aW91c1BhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgaWYgKHByZXZpb3VzQnV0dG9uKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlUHJldmlvdXNQYWdlID0gTnVtYmVyKGN1cnJlbnRQYWdlKSA8PSAxO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlUHJldmlvdXNQYWdlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dFBhZ2UnKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgaWYgKG5leHRCdXR0b24pIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVOZXh0UGFnZSA9IGN1cnJlbnRQYWdlID09PSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50O1xyXG4gICAgICAgIG5leHRCdXR0b24uZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVOZXh0UGFnZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TcHJlYWRDaGFuZ2UobmV3U3ByZWFkOiAnb2ZmJyB8ICdvZGQnIHwgJ2V2ZW4nKTogdm9pZCB7XHJcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIHB1YmxpYyBvblJlc2l6ZSgpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0Tm9kZSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgY29uc3QgY29uZmlnID0geyBhdHRyaWJ1dGVzOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcclxuXHJcbiAgICAgIHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uTGlzdDogTXV0YXRpb25SZWNvcmRbXSwgb2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9uTGlzdCkge1xyXG4gICAgICAgICAgaWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xyXG4gICAgICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJykge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2hlY2tWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAobXV0YXRpb24udHlwZSA9PT0gJ2NoaWxkTGlzdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1Zpc2liaWxpdHkoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyLm9ic2VydmUodGFyZ2V0Tm9kZSwgY29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICB0aGlzLmNsYXNzTXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHRoaXMuY2xhc3NNdXRhdGlvbk9ic2VydmVyID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrVmlzaWJpbGl0eSgpOiB2b2lkIHtcclxuICAgIGxldCB2aXNpYmxlQnV0dG9ucyA9IDA7XHJcbiAgICBjb25zdCBlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBmID0gZS5jaGlsZHJlbi5pdGVtKDApO1xyXG4gICAgaWYgKGYpIHtcclxuICAgICAgY29uc3QgZyA9IGYuY2hpbGRyZW4uaXRlbSgwKTtcclxuICAgICAgaWYgKGcgJiYgZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdmlzaWJsZUJ1dHRvbnMgPSB0aGlzLmNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZS5zZWNvbmRhcnlNZW51SXNFbXB0eSA9IHZpc2libGVCdXR0b25zID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1Zpc2liaWxpdHlSZWN1cnNpdmVseShlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGlmIChlLmNsYXNzTGlzdC5jb250YWlucygnaW52aXNpYmxlJykpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcclxuICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCBlIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBlLmNoaWxkcmVuO1xyXG4gICAgaWYgKGNoaWxkcmVuPy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGggJiYgY291bnQgPT09IDA7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgY291bnQgKz0gdGhpcy5jaGVja1Zpc2liaWxpdHlSZWN1cnNpdmVseShjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGljayhcclxuICAgIGh0bWxldmVudDogRXZlbnQsXHJcbiAgICBhY3Rpb246IHVuZGVmaW5lZCB8ICgoaHRtbGV2ZW50OiBFdmVudCwgc2Vjb25kYXJ5VG9vbGJhcjogYm9vbGVhbikgPT4gdm9pZCksXHJcbiAgICBldmVudEJ1c05hbWU/OiBzdHJpbmcsXHJcbiAgICBjbG9zZU9uQ2xpY2s/OiBib29sZWFuXHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gaHRtbGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgIG9yaWdpbj8uY2xhc3NMaXN0LmFkZCgndG9nZ2xlZCcpO1xyXG4gICAgaWYgKGFjdGlvbikge1xyXG4gICAgICBhY3Rpb24oaHRtbGV2ZW50LCB0cnVlKTtcclxuICAgICAgaHRtbGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50QnVzTmFtZSkge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaChldmVudEJ1c05hbWUpO1xyXG4gICAgICBodG1sZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGlmIChjbG9zZU9uQ2xpY2spIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc2Vjb25kYXJ5VG9vbGJhci5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVNlY29uZGFyeVRvb2xiYXIgPyBjdXN0b21TZWNvbmRhcnlUb29sYmFyIDogZGVmYXVsdFNlY29uZGFyeVRvb2xiYXJcIj4gPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRTZWNvbmRhcnlUb29sYmFyPlxyXG4gIDxkaXZcclxuICAgIGlkPVwic2Vjb25kYXJ5VG9vbGJhclwiXHJcbiAgICBjbGFzcz1cInNlY29uZGFyeVRvb2xiYXIgaGlkZGVuIGRvb3JIYW5nZXJSaWdodFwiXHJcbiAgICBbc3R5bGUudG9wXT1cInNlY29uZGFyeVRvb2xiYXJUb3BcIlxyXG4gICAgW3N0eWxlLnRyYW5zZm9ybV09XCInc2NhbGUoJyArIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlICsgJyknXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1PcmlnaW5dPVwiJ3JpZ2h0IHRvcCdcIlxyXG4gID5cclxuICAgIDxkaXYgaWQ9XCJzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyXCI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIHBkZlNoeUJ1dHRvblNlcnZpY2UuYnV0dG9uc1wiXHJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgW2lkXT1cImJ1dHRvbi5pZFwiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiYnV0dG9uLmNzc0NsYXNzIHwgaW52ZXJ0Rm9yU2Vjb25kYXJ5VG9vbGJhclwiXHJcbiAgICAgICAgW2NsYXNzLnRvZ2dsZWRdPVwiYnV0dG9uLnRvZ2dsZWRcIlxyXG4gICAgICAgIGNsYXNzPVwic2Vjb25kYXJ5VG9vbGJhckJ1dHRvblwiXHJcbiAgICAgICAgW3RpdGxlXT1cImJ1dHRvbi50aXRsZVwiXHJcbiAgICAgICAgW2F0dHIuZGF0YS1sMTBuLWlkXT1cImJ1dHRvbi5sMTBuSWRcIlxyXG4gICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudCwgYnV0dG9uLmFjdGlvbiwgYnV0dG9uLmV2ZW50QnVzTmFtZSwgYnV0dG9uLmNsb3NlT25DbGljaylcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYnV0dG9uLnRpdGxlXCJcclxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIHJvbGU9XCJpbWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImJ1dHRvbi50aXRsZVwiICpuZ0lmPVwiYnV0dG9uLmltYWdlXCIgW2lubmVySFRNTF09XCJidXR0b24uaW1hZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sYmFyLWNhcHRpb25cIiBbYXR0ci5kYXRhLWwxMG4taWRdPVwiYnV0dG9uLmwxMG5MYWJlbFwiPnt7IGJ1dHRvbi50aXRsZSB9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19