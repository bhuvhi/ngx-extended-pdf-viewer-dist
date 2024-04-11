import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfShyButtonService } from './pdf-shy-button-service';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-shy-button-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
const _c0 = ["buttonRef"];
function PdfShyButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2, 0);
    i0.ɵɵlistener("click", function PdfShyButtonComponent_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onClick($event)); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.cssClass);
    i0.ɵɵclassProp("toggled", ctx_r1.toggled);
    i0.ɵɵproperty("id", ctx_r1.primaryToolbarId)("title", ctx_r1.title)("disabled", ctx_r1.disabled);
    i0.ɵɵattribute("data-l10n-id", ctx_r1.l10nId)("aria-label", ctx_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-l10n-id", ctx_r1.l10nLabel);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.title);
} }
export class PdfShyButtonComponent {
    pdfShyButtonServiceService;
    sanitizer;
    renderer;
    primaryToolbarId;
    secondaryMenuId;
    cssClass;
    eventBusName = undefined;
    l10nId;
    l10nLabel;
    title;
    toggled;
    disabled;
    order;
    action = undefined;
    closeOnClick = true;
    onlySecondaryMenu = false;
    buttonRef;
    _imageHtml;
    get imageHtml() {
        return this._imageHtml;
    }
    set image(value) {
        const svgTags = [
            // 'a' is not allowed!
            'animate',
            'animateMotion',
            'animateTransform',
            'audio',
            'canvas',
            'circle',
            'clipPath',
            'defs',
            'desc',
            'discard',
            'ellipse',
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feDropShadow',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
            'filter',
            'foreignObject',
            'g',
            'iframe',
            'image',
            'line',
            'linearGradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'script',
            'set',
            'stop',
            'style',
            'svg',
            'switch',
            'symbol',
            'text',
            'textPath',
            'title',
            'tspan',
            'unknown',
            'use',
            'video',
            'view',
        ];
        // only <svg> and SVG tags are allowed
        const tags = value.split('<').filter((tag) => tag.length > 0);
        const legal = tags.every((tag) => tag.startsWith('svg') || tag.startsWith('/') || svgTags.includes(tag.split(/\s|>/)[0]));
        if (!legal) {
            throw new Error('Illegal image for PDFShyButton. Only SVG images are allowed. Please use only the tags <svg> and <path>. ' + value);
        }
        this._imageHtml = this.sanitizeHtml(value);
    }
    constructor(pdfShyButtonServiceService, sanitizer, renderer) {
        this.pdfShyButtonServiceService = pdfShyButtonServiceService;
        this.sanitizer = sanitizer;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        this.updateButtonImage();
    }
    ngOnInit() {
        this.pdfShyButtonServiceService.add(this);
    }
    ngOnChanges(changes) {
        this.pdfShyButtonServiceService.update(this);
    }
    sanitizeHtml(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html); // NOSONAR
    }
    onClick(htmlEvent) {
        if (this.action) {
            this.action(htmlEvent, false);
            htmlEvent.preventDefault();
        }
        else if (this.eventBusName) {
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch(this.eventBusName);
            htmlEvent.preventDefault();
        }
    }
    updateButtonImage() {
        if (this.buttonRef) {
            const el = this.buttonRef.nativeElement;
            if (this._imageHtml) {
                const temp = this.renderer.createElement('div');
                temp.innerHTML = this._imageHtml;
                const image = temp.children[0];
                if (!el.innerHTML.includes(image.innerHTML)) {
                    // if using SSR, the HTML code may already be there
                    this.renderer.appendChild(el, image);
                }
            }
            else {
                const childNodes = el.childNodes;
                for (let child of childNodes) {
                    this.renderer.removeChild(el, child);
                }
            }
        }
    }
    /** @nocollapse */ static ɵfac = function PdfShyButtonComponent_Factory(t) { return new (t || PdfShyButtonComponent)(i0.ɵɵdirectiveInject(i1.PdfShyButtonService), i0.ɵɵdirectiveInject(i2.DomSanitizer), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfShyButtonComponent, selectors: [["pdf-shy-button"]], viewQuery: function PdfShyButtonComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.buttonRef = _t.first);
        } }, inputs: { primaryToolbarId: "primaryToolbarId", secondaryMenuId: "secondaryMenuId", cssClass: "cssClass", eventBusName: "eventBusName", l10nId: "l10nId", l10nLabel: "l10nLabel", title: "title", toggled: "toggled", disabled: "disabled", order: "order", action: "action", closeOnClick: "closeOnClick", onlySecondaryMenu: "onlySecondaryMenu", image: "image" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["buttonRef", ""], ["type", "button", "class", "toolbarButton", "role", "button", 3, "id", "class", "title", "toggled", "disabled", "click", 4, "ngIf"], ["type", "button", "role", "button", 1, "toolbarButton", 3, "click", "id", "title", "disabled"]], template: function PdfShyButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PdfShyButtonComponent_button_0_Template, 4, 11, "button", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.onlySecondaryMenu);
        } }, dependencies: [i3.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfShyButtonComponent, [{
        type: Component,
        args: [{ selector: 'pdf-shy-button', template: "<button\r\n  *ngIf=\"!onlySecondaryMenu\"\r\n  type=\"button\"\r\n  [id]=\"primaryToolbarId\"\r\n  class=\"toolbarButton\"\r\n  [class]=\"cssClass\"\r\n  [title]=\"title\"\r\n  [attr.data-l10n-id]=\"l10nId\"\r\n  [class.toggled]=\"toggled\"\r\n  [disabled]=\"disabled\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.aria-label]=\"title\"\r\n  role=\"button\"\r\n  #buttonRef\r\n>\r\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\r\n</button>\r\n" }]
    }], () => [{ type: i1.PdfShyButtonService }, { type: i2.DomSanitizer }, { type: i0.Renderer2 }], { primaryToolbarId: [{
            type: Input
        }], secondaryMenuId: [{
            type: Input
        }], cssClass: [{
            type: Input
        }], eventBusName: [{
            type: Input
        }], l10nId: [{
            type: Input
        }], l10nLabel: [{
            type: Input
        }], title: [{
            type: Input
        }], toggled: [{
            type: Input
        }], disabled: [{
            type: Input
        }], order: [{
            type: Input
        }], action: [{
            type: Input
        }], closeOnClick: [{
            type: Input
        }], onlySecondaryMenu: [{
            type: Input
        }], buttonRef: [{
            type: ViewChild,
            args: ['buttonRef', { static: false }]
        }], image: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfShyButtonComponent, { className: "PdfShyButtonComponent", filePath: "lib\\toolbar\\pdf-shy-button\\pdf-shy-button.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1zaHktYnV0dG9uL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUduRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7SUNKL0Qsb0NBY0M7SUFKQywwTEFBUyxzQkFBZSxLQUFDO0lBS3pCLDRCQUFzQztJQUFBLFlBQVc7SUFDbkQsQUFEbUQsaUJBQU8sRUFDakQ7OztJQVhQLDhCQUFrQjtJQUdsQix5Q0FBeUI7SUFDekIsQUFIQSxBQUhBLDRDQUF1Qix1QkFHUiw2QkFHTTs7SUFNZixlQUErQjs7SUFBQyxjQUFXO0lBQVgsa0NBQVc7O0FETG5ELE1BQU0sT0FBTyxxQkFBcUI7SUFtSVo7SUFBeUQ7SUFBaUM7SUFqSXZHLGdCQUFnQixDQUFTO0lBR3pCLGVBQWUsQ0FBUztJQUd4QixRQUFRLENBQXFCO0lBRzdCLFlBQVksR0FBdUIsU0FBUyxDQUFDO0lBRzdDLE1BQU0sQ0FBUztJQUdmLFNBQVMsQ0FBUztJQUdsQixLQUFLLENBQVM7SUFHZCxPQUFPLENBQVU7SUFHakIsUUFBUSxDQUFVO0lBR2xCLEtBQUssQ0FBUztJQUdk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QUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ2pDLEtBQUssSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO29CQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3RDO2FBQ0Y7U0FDRjtJQUNILENBQUM7a0dBbExVLHFCQUFxQjs0RkFBckIscUJBQXFCOzs7Ozs7WUNWbEMsNkVBY0M7O1lBYkUsNkNBQXdCOzs7aUZEU2QscUJBQXFCO2NBSmpDLFNBQVM7MkJBQ0UsZ0JBQWdCO3VHQUtuQixnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsUUFBUTtrQkFEZCxLQUFLO1lBSUMsWUFBWTtrQkFEbEIsS0FBSztZQUlDLE1BQU07a0JBRFosS0FBSztZQUlDLFNBQVM7a0JBRGYsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLFFBQVE7a0JBRGQsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSztZQUlDLE1BQU07a0JBRFosS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJQyxpQkFBaUI7a0JBRHZCLEtBQUs7WUFHcUMsU0FBUztrQkFBbkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBUzlCLEtBQUs7a0JBRGYsS0FBSzs7a0ZBaERLLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVDU1NDbGFzcyB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcbmltcG9ydCB7IFBkZlNoeUJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1zaHktYnV0dG9uLXNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2h5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlNoeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcmltYXJ5VG9vbGJhcklkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNlY29uZGFyeU1lbnVJZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjc3NDbGFzczogUmVzcG9uc2l2ZUNTU0NsYXNzO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBldmVudEJ1c05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbDEwbklkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGwxMG5MYWJlbDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0b2dnbGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgb3JkZXI6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYWN0aW9uOiAoKGh0bWxFdmVudD86IEV2ZW50LCBpc1NlY29uZGFyeU1lbnVlPzogYm9vbGVhbikgPT4gdm9pZCkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNsb3NlT25DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG9ubHlTZWNvbmRhcnlNZW51OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvblJlZicsIHsgc3RhdGljOiBmYWxzZSB9KSBidXR0b25SZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgX2ltYWdlSHRtbDogU2FmZUh0bWw7XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2VIdG1sKCk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZUh0bWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaW1hZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3ZnVGFncyA9IFtcclxuICAgICAgLy8gJ2EnIGlzIG5vdCBhbGxvd2VkIVxyXG4gICAgICAnYW5pbWF0ZScsXHJcbiAgICAgICdhbmltYXRlTW90aW9uJyxcclxuICAgICAgJ2FuaW1hdGVUcmFuc2Zvcm0nLFxyXG4gICAgICAnYXVkaW8nLFxyXG4gICAgICAnY2FudmFzJyxcclxuICAgICAgJ2NpcmNsZScsXHJcbiAgICAgICdjbGlwUGF0aCcsXHJcbiAgICAgICdkZWZzJyxcclxuICAgICAgJ2Rlc2MnLFxyXG4gICAgICAnZGlzY2FyZCcsXHJcbiAgICAgICdlbGxpcHNlJyxcclxuICAgICAgJ2ZlQmxlbmQnLFxyXG4gICAgICAnZmVDb2xvck1hdHJpeCcsXHJcbiAgICAgICdmZUNvbXBvbmVudFRyYW5zZmVyJyxcclxuICAgICAgJ2ZlQ29tcG9zaXRlJyxcclxuICAgICAgJ2ZlQ29udm9sdmVNYXRyaXgnLFxyXG4gICAgICAnZmVEaWZmdXNlTGlnaHRpbmcnLFxyXG4gICAgICAnZmVEaXNwbGFjZW1lbnRNYXAnLFxyXG4gICAgICAnZmVEaXN0YW50TGlnaHQnLFxyXG4gICAgICAnZmVEcm9wU2hhZG93JyxcclxuICAgICAgJ2ZlRmxvb2QnLFxyXG4gICAgICAnZmVGdW5jQScsXHJcbiAgICAgICdmZUZ1bmNCJyxcclxuICAgICAgJ2ZlRnVuY0cnLFxyXG4gICAgICAnZmVGdW5jUicsXHJcbiAgICAgICdmZUdhdXNzaWFuQmx1cicsXHJcbiAgICAgICdmZUltYWdlJyxcclxuICAgICAgJ2ZlTWVyZ2UnLFxyXG4gICAgICAnZmVNZXJnZU5vZGUnLFxyXG4gICAgICAnZmVNb3JwaG9sb2d5JyxcclxuICAgICAgJ2ZlT2Zmc2V0JyxcclxuICAgICAgJ2ZlUG9pbnRMaWdodCcsXHJcbiAgICAgICdmZVNwZWN1bGFyTGlnaHRpbmcnLFxyXG4gICAgICAnZmVTcG90TGlnaHQnLFxyXG4gICAgICAnZmVUaWxlJyxcclxuICAgICAgJ2ZlVHVyYnVsZW5jZScsXHJcbiAgICAgICdmaWx0ZXInLFxyXG4gICAgICAnZm9yZWlnbk9iamVjdCcsXHJcbiAgICAgICdnJyxcclxuICAgICAgJ2lmcmFtZScsXHJcbiAgICAgICdpbWFnZScsXHJcbiAgICAgICdsaW5lJyxcclxuICAgICAgJ2xpbmVhckdyYWRpZW50JyxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdtYXNrJyxcclxuICAgICAgJ21ldGFkYXRhJyxcclxuICAgICAgJ21wYXRoJyxcclxuICAgICAgJ3BhdGgnLFxyXG4gICAgICAncGF0dGVybicsXHJcbiAgICAgICdwb2x5Z29uJyxcclxuICAgICAgJ3BvbHlsaW5lJyxcclxuICAgICAgJ3JhZGlhbEdyYWRpZW50JyxcclxuICAgICAgJ3JlY3QnLFxyXG4gICAgICAnc2NyaXB0JyxcclxuICAgICAgJ3NldCcsXHJcbiAgICAgICdzdG9wJyxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ3N2ZycsXHJcbiAgICAgICdzd2l0Y2gnLFxyXG4gICAgICAnc3ltYm9sJyxcclxuICAgICAgJ3RleHQnLFxyXG4gICAgICAndGV4dFBhdGgnLFxyXG4gICAgICAndGl0bGUnLFxyXG4gICAgICAndHNwYW4nLFxyXG4gICAgICAndW5rbm93bicsXHJcbiAgICAgICd1c2UnLFxyXG4gICAgICAndmlkZW8nLFxyXG4gICAgICAndmlldycsXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIG9ubHkgPHN2Zz4gYW5kIFNWRyB0YWdzIGFyZSBhbGxvd2VkXHJcbiAgICBjb25zdCB0YWdzID0gdmFsdWUuc3BsaXQoJzwnKS5maWx0ZXIoKHRhZykgPT4gdGFnLmxlbmd0aCA+IDApO1xyXG4gICAgY29uc3QgbGVnYWwgPSB0YWdzLmV2ZXJ5KCh0YWcpID0+IHRhZy5zdGFydHNXaXRoKCdzdmcnKSB8fCB0YWcuc3RhcnRzV2l0aCgnLycpIHx8IHN2Z1RhZ3MuaW5jbHVkZXModGFnLnNwbGl0KC9cXHN8Pi8pWzBdKSk7XHJcbiAgICBpZiAoIWxlZ2FsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBpbWFnZSBmb3IgUERGU2h5QnV0dG9uLiBPbmx5IFNWRyBpbWFnZXMgYXJlIGFsbG93ZWQuIFBsZWFzZSB1c2Ugb25seSB0aGUgdGFncyA8c3ZnPiBhbmQgPHBhdGg+LiAnICsgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faW1hZ2VIdG1sID0gdGhpcy5zYW5pdGl6ZUh0bWwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZGZTaHlCdXR0b25TZXJ2aWNlU2VydmljZTogUGRmU2h5QnV0dG9uU2VydmljZSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxyXG5cclxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVCdXR0b25JbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wZGZTaHlCdXR0b25TZXJ2aWNlU2VydmljZS5hZGQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnBkZlNoeUJ1dHRvblNlcnZpY2VTZXJ2aWNlLnVwZGF0ZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2FuaXRpemVIdG1sKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTsgLy8gTk9TT05BUlxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soaHRtbEV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uKGh0bWxFdmVudCwgZmFsc2UpO1xyXG4gICAgICBodG1sRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVudEJ1c05hbWUpIHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2godGhpcy5ldmVudEJ1c05hbWUpO1xyXG4gICAgICBodG1sRXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVCdXR0b25JbWFnZSgpIHtcclxuICAgIGlmICh0aGlzLmJ1dHRvblJlZikge1xyXG4gICAgICBjb25zdCBlbCA9IHRoaXMuYnV0dG9uUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgIGlmICh0aGlzLl9pbWFnZUh0bWwpIHtcclxuICAgICAgICBjb25zdCB0ZW1wID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZW1wLmlubmVySFRNTCA9IHRoaXMuX2ltYWdlSHRtbDtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IHRlbXAuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgaWYgKCFlbC5pbm5lckhUTUwuaW5jbHVkZXMoaW1hZ2UuaW5uZXJIVE1MKSkge1xyXG4gICAgICAgICAgLy8gaWYgdXNpbmcgU1NSLCB0aGUgSFRNTCBjb2RlIG1heSBhbHJlYWR5IGJlIHRoZXJlXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGVsLCBpbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBlbC5jaGlsZE5vZGVzO1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoZWwsIGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICpuZ0lmPVwiIW9ubHlTZWNvbmRhcnlNZW51XCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbaWRdPVwicHJpbWFyeVRvb2xiYXJJZFwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCJcclxuICBbY2xhc3NdPVwiY3NzQ2xhc3NcIlxyXG4gIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgW2F0dHIuZGF0YS1sMTBuLWlkXT1cImwxMG5JZFwiXHJcbiAgW2NsYXNzLnRvZ2dsZWRdPVwidG9nZ2xlZFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICBbYXR0ci5hcmlhLWxhYmVsXT1cInRpdGxlXCJcclxuICByb2xlPVwiYnV0dG9uXCJcclxuICAjYnV0dG9uUmVmXHJcbj5cclxuICA8c3BhbiBbYXR0ci5kYXRhLWwxMG4taWRdPVwibDEwbkxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=