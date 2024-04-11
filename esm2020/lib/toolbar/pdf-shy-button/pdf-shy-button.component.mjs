import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PdfShyButtonService } from './pdf-shy-button-service';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-shy-button-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
function PdfShyButtonComponent_button_0_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!image", "role", "img", "aria-hidden", "true"]);
} }
function PdfShyButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 1);
    i0.ɵɵlistener("click", function PdfShyButtonComponent_button_0_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.onClick($event); });
    i0.ɵɵtemplate(1, PdfShyButtonComponent_button_0_ng_content_1_Template, 1, 0, "ng-content", 2);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.cssClass);
    i0.ɵɵclassProp("toggled", ctx_r0.toggled);
    i0.ɵɵproperty("id", ctx_r0.primaryToolbarId)("title", ctx_r0.title)("disabled", ctx_r0.disabled)("innerHTML", ctx_r0.imageHtml, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("data-l10n-id", ctx_r0.l10nId)("aria-label", ctx_r0.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.image);
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("data-l10n-id", ctx_r0.l10nLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0 = ["*"];
export class PdfShyButtonComponent {
    constructor(pdfShyButtonServiceService, sanitizer) {
        this.pdfShyButtonServiceService = pdfShyButtonServiceService;
        this.sanitizer = sanitizer;
        this.eventBusName = undefined;
        this.action = undefined;
        this.closeOnClick = true;
        this.onlySecondaryMenu = false;
    }
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
    ngOnInit() {
        this.pdfShyButtonServiceService.add(this);
    }
    ngOnChanges(changes) {
        this.pdfShyButtonServiceService.update(this);
    }
    sanitizeHtml(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html); // NOSONAR
    }
    onClick(event) {
        if (this.action) {
            this.action();
            event.preventDefault();
        }
        else if (this.eventBusName) {
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch(this.eventBusName);
            event.preventDefault();
        }
    }
}
/** @nocollapse */ PdfShyButtonComponent.ɵfac = function PdfShyButtonComponent_Factory(t) { return new (t || PdfShyButtonComponent)(i0.ɵɵdirectiveInject(i1.PdfShyButtonService), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
/** @nocollapse */ PdfShyButtonComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfShyButtonComponent, selectors: [["pdf-shy-button"]], inputs: { primaryToolbarId: "primaryToolbarId", secondaryMenuId: "secondaryMenuId", cssClass: "cssClass", eventBusName: "eventBusName", l10nId: "l10nId", l10nLabel: "l10nLabel", title: "title", toggled: "toggled", disabled: "disabled", order: "order", action: "action", closeOnClick: "closeOnClick", onlySecondaryMenu: "onlySecondaryMenu", image: "image" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["type", "button", "class", "toolbarButton", "role", "button", 3, "id", "class", "title", "toggled", "disabled", "innerHTML", "click", 4, "ngIf"], ["type", "button", "role", "button", 1, "toolbarButton", 3, "id", "title", "disabled", "innerHTML", "click"], [4, "ngIf"]], template: function PdfShyButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, PdfShyButtonComponent_button_0_Template, 4, 13, "button", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.onlySecondaryMenu);
    } }, directives: [i3.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfShyButtonComponent, [{
        type: Component,
        args: [{ selector: 'pdf-shy-button', template: "<button\r\n  *ngIf=\"!onlySecondaryMenu\"\r\n  type=\"button\"\r\n  [id]=\"primaryToolbarId\"\r\n  class=\"toolbarButton\"\r\n  [class]=\"cssClass\"\r\n  [title]=\"title\"\r\n  [attr.data-l10n-id]=\"l10nId\"\r\n  [class.toggled]=\"toggled\"\r\n  [disabled]=\"disabled\"\r\n  [innerHTML]=\"imageHtml\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.aria-label]=\"title\"\r\n  role=\"button\"\r\n>\r\n  <ng-content *ngIf=\"!image\" role=\"img\" aria-hidden=\"true\"></ng-content>\r\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\r\n</button>\r\n" }]
    }], function () { return [{ type: i1.PdfShyButtonService }, { type: i2.DomSanitizer }]; }, { primaryToolbarId: [{
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
        }], image: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1zaHktYnV0dG9uL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBR25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUNXN0QsZ0ZBQXNFOzs7O0lBZnhFLGlDQWNDO0lBSEMsMktBQVMsc0JBQWUsSUFBQztJQUl6Qiw2RkFBc0U7SUFDdEUsNEJBQXNDO0lBQUEsWUFBVztJQUFBLGlCQUFPLEVBQUE7OztJQVh4RCw4QkFBa0I7SUFHbEIseUNBQXlCO0lBTHpCLDRDQUF1Qix1QkFBQSw2QkFBQSxrREFBQTtJQUl2Qiw2Q0FBNEIsNEJBQUE7SUFRZixlQUFZO0lBQVosb0NBQVk7SUFDbkIsZUFBK0I7SUFBL0IsZ0RBQStCO0lBQUMsZUFBVztJQUFYLGtDQUFXOzs7QURObkQsTUFBTSxPQUFPLHFCQUFxQjtJQWlJaEMsWUFBb0IsMEJBQStDLEVBQVUsU0FBdUI7UUFBaEYsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFxQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUF0SDdGLGlCQUFZLEdBQXVCLFNBQVMsQ0FBQztRQXFCN0MsV0FBTSxHQUE2QixTQUFTLENBQUM7UUFHN0MsaUJBQVks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RUFBRTtZQUM1QixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7WUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7NkdBeEpVLHFCQUFxQjt1R0FBckIscUJBQXFCOztRQ1ZsQyw2RUFpQlM7O1FBaEJOLDZDQUF3Qjs7dUZEU2QscUJBQXFCO2NBSmpDLFNBQVM7MkJBQ0UsZ0JBQWdCO2lHQUtuQixnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsUUFBUTtrQkFEZCxLQUFLO1lBSUMsWUFBWTtrQkFEbEIsS0FBSztZQUlDLE1BQU07a0JBRFosS0FBSztZQUlDLFNBQVM7a0JBRGYsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLFFBQVE7a0JBRGQsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSztZQUlDLE1BQU07a0JBRFosS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJQyxpQkFBaUI7a0JBRHZCLEtBQUs7WUFVSyxLQUFLO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVDU1NDbGFzcyB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcbmltcG9ydCB7IFBkZlNoeUJ1dHRvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1zaHktYnV0dG9uLXNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2h5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlNoeUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcmltYXJ5VG9vbGJhcklkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNlY29uZGFyeU1lbnVJZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjc3NDbGFzczogUmVzcG9uc2l2ZUNTU0NsYXNzO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBldmVudEJ1c05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbDEwbklkOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGwxMG5MYWJlbDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0b2dnbGVkOiBib29sZWFuO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgb3JkZXI6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYWN0aW9uOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGNsb3NlT25DbGljazogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG9ubHlTZWNvbmRhcnlNZW51OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX2ltYWdlSHRtbDogU2FmZUh0bWw7XHJcblxyXG4gIHB1YmxpYyBnZXQgaW1hZ2VIdG1sKCk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLl9pbWFnZUh0bWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaW1hZ2UodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc3Qgc3ZnVGFncyA9IFtcclxuICAgICAgLy8gJ2EnIGlzIG5vdCBhbGxvd2VkIVxyXG4gICAgICAnYW5pbWF0ZScsXHJcbiAgICAgICdhbmltYXRlTW90aW9uJyxcclxuICAgICAgJ2FuaW1hdGVUcmFuc2Zvcm0nLFxyXG4gICAgICAnYXVkaW8nLFxyXG4gICAgICAnY2FudmFzJyxcclxuICAgICAgJ2NpcmNsZScsXHJcbiAgICAgICdjbGlwUGF0aCcsXHJcbiAgICAgICdkZWZzJyxcclxuICAgICAgJ2Rlc2MnLFxyXG4gICAgICAnZGlzY2FyZCcsXHJcbiAgICAgICdlbGxpcHNlJyxcclxuICAgICAgJ2ZlQmxlbmQnLFxyXG4gICAgICAnZmVDb2xvck1hdHJpeCcsXHJcbiAgICAgICdmZUNvbXBvbmVudFRyYW5zZmVyJyxcclxuICAgICAgJ2ZlQ29tcG9zaXRlJyxcclxuICAgICAgJ2ZlQ29udm9sdmVNYXRyaXgnLFxyXG4gICAgICAnZmVEaWZmdXNlTGlnaHRpbmcnLFxyXG4gICAgICAnZmVEaXNwbGFjZW1lbnRNYXAnLFxyXG4gICAgICAnZmVEaXN0YW50TGlnaHQnLFxyXG4gICAgICAnZmVEcm9wU2hhZG93JyxcclxuICAgICAgJ2ZlRmxvb2QnLFxyXG4gICAgICAnZmVGdW5jQScsXHJcbiAgICAgICdmZUZ1bmNCJyxcclxuICAgICAgJ2ZlRnVuY0cnLFxyXG4gICAgICAnZmVGdW5jUicsXHJcbiAgICAgICdmZUdhdXNzaWFuQmx1cicsXHJcbiAgICAgICdmZUltYWdlJyxcclxuICAgICAgJ2ZlTWVyZ2UnLFxyXG4gICAgICAnZmVNZXJnZU5vZGUnLFxyXG4gICAgICAnZmVNb3JwaG9sb2d5JyxcclxuICAgICAgJ2ZlT2Zmc2V0JyxcclxuICAgICAgJ2ZlUG9pbnRMaWdodCcsXHJcbiAgICAgICdmZVNwZWN1bGFyTGlnaHRpbmcnLFxyXG4gICAgICAnZmVTcG90TGlnaHQnLFxyXG4gICAgICAnZmVUaWxlJyxcclxuICAgICAgJ2ZlVHVyYnVsZW5jZScsXHJcbiAgICAgICdmaWx0ZXInLFxyXG4gICAgICAnZm9yZWlnbk9iamVjdCcsXHJcbiAgICAgICdnJyxcclxuICAgICAgJ2lmcmFtZScsXHJcbiAgICAgICdpbWFnZScsXHJcbiAgICAgICdsaW5lJyxcclxuICAgICAgJ2xpbmVhckdyYWRpZW50JyxcclxuICAgICAgJ21hcmtlcicsXHJcbiAgICAgICdtYXNrJyxcclxuICAgICAgJ21ldGFkYXRhJyxcclxuICAgICAgJ21wYXRoJyxcclxuICAgICAgJ3BhdGgnLFxyXG4gICAgICAncGF0dGVybicsXHJcbiAgICAgICdwb2x5Z29uJyxcclxuICAgICAgJ3BvbHlsaW5lJyxcclxuICAgICAgJ3JhZGlhbEdyYWRpZW50JyxcclxuICAgICAgJ3JlY3QnLFxyXG4gICAgICAnc2NyaXB0JyxcclxuICAgICAgJ3NldCcsXHJcbiAgICAgICdzdG9wJyxcclxuICAgICAgJ3N0eWxlJyxcclxuICAgICAgJ3N2ZycsXHJcbiAgICAgICdzd2l0Y2gnLFxyXG4gICAgICAnc3ltYm9sJyxcclxuICAgICAgJ3RleHQnLFxyXG4gICAgICAndGV4dFBhdGgnLFxyXG4gICAgICAndGl0bGUnLFxyXG4gICAgICAndHNwYW4nLFxyXG4gICAgICAndW5rbm93bicsXHJcbiAgICAgICd1c2UnLFxyXG4gICAgICAndmlkZW8nLFxyXG4gICAgICAndmlldycsXHJcbiAgICBdO1xyXG5cclxuICAgIC8vIG9ubHkgPHN2Zz4gYW5kIFNWRyB0YWdzIGFyZSBhbGxvd2VkXHJcbiAgICBjb25zdCB0YWdzID0gdmFsdWUuc3BsaXQoJzwnKS5maWx0ZXIoKHRhZykgPT4gdGFnLmxlbmd0aCA+IDApO1xyXG4gICAgY29uc3QgbGVnYWwgPSB0YWdzLmV2ZXJ5KCh0YWcpID0+IHRhZy5zdGFydHNXaXRoKCdzdmcnKSB8fCB0YWcuc3RhcnRzV2l0aCgnLycpIHx8IHN2Z1RhZ3MuaW5jbHVkZXModGFnLnNwbGl0KC9cXHN8Pi8pWzBdKSk7XHJcbiAgICBpZiAoIWxlZ2FsKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBpbWFnZSBmb3IgUERGU2h5QnV0dG9uLiBPbmx5IFNWRyBpbWFnZXMgYXJlIGFsbG93ZWQuIFBsZWFzZSB1c2Ugb25seSB0aGUgdGFncyA8c3ZnPiBhbmQgPHBhdGg+LiAnICsgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faW1hZ2VIdG1sID0gdGhpcy5zYW5pdGl6ZUh0bWwodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZGZTaHlCdXR0b25TZXJ2aWNlU2VydmljZTogUGRmU2h5QnV0dG9uU2VydmljZSwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wZGZTaHlCdXR0b25TZXJ2aWNlU2VydmljZS5hZGQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnBkZlNoeUJ1dHRvblNlcnZpY2VTZXJ2aWNlLnVwZGF0ZSh0aGlzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2FuaXRpemVIdG1sKGh0bWw6IHN0cmluZyk6IFNhZmVIdG1sIHtcclxuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTsgLy8gTk9TT05BUlxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24oKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5ldmVudEJ1c05hbWUpIHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2godGhpcy5ldmVudEJ1c05hbWUpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8YnV0dG9uXHJcbiAgKm5nSWY9XCIhb25seVNlY29uZGFyeU1lbnVcIlxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIFtpZF09XCJwcmltYXJ5VG9vbGJhcklkXCJcclxuICBjbGFzcz1cInRvb2xiYXJCdXR0b25cIlxyXG4gIFtjbGFzc109XCJjc3NDbGFzc1wiXHJcbiAgW3RpdGxlXT1cInRpdGxlXCJcclxuICBbYXR0ci5kYXRhLWwxMG4taWRdPVwibDEwbklkXCJcclxuICBbY2xhc3MudG9nZ2xlZF09XCJ0b2dnbGVkXCJcclxuICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gIFtpbm5lckhUTUxdPVwiaW1hZ2VIdG1sXCJcclxuICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcclxuICBbYXR0ci5hcmlhLWxhYmVsXT1cInRpdGxlXCJcclxuICByb2xlPVwiYnV0dG9uXCJcclxuPlxyXG4gIDxuZy1jb250ZW50ICpuZ0lmPVwiIWltYWdlXCIgcm9sZT1cImltZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvbmctY29udGVudD5cclxuICA8c3BhbiBbYXR0ci5kYXRhLWwxMG4taWRdPVwibDEwbkxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XHJcbjwvYnV0dG9uPlxyXG4iXX0=