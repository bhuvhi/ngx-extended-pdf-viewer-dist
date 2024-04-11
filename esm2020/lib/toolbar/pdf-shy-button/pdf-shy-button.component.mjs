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
        args: [{ selector: 'pdf-shy-button', template: "<button\n  *ngIf=\"!onlySecondaryMenu\"\n  type=\"button\"\n  [id]=\"primaryToolbarId\"\n  class=\"toolbarButton\"\n  [class]=\"cssClass\"\n  [title]=\"title\"\n  [attr.data-l10n-id]=\"l10nId\"\n  [class.toggled]=\"toggled\"\n  [disabled]=\"disabled\"\n  [innerHTML]=\"imageHtml\"\n  (click)=\"onClick($event)\"\n  [attr.aria-label]=\"title\"\n  role=\"button\"\n>\n  <ng-content *ngIf=\"!image\" role=\"img\" aria-hidden=\"true\"></ng-content>\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\n</button>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1zaHktYnV0dG9uL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBR25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUNXN0QsZ0ZBQXNFOzs7O0lBZnhFLGlDQWNDO0lBSEMsMktBQVMsc0JBQWUsSUFBQztJQUl6Qiw2RkFBc0U7SUFDdEUsNEJBQXNDO0lBQUEsWUFBVztJQUFBLGlCQUFPLEVBQUE7OztJQVh4RCw4QkFBa0I7SUFHbEIseUNBQXlCO0lBTHpCLDRDQUF1Qix1QkFBQSw2QkFBQSxrREFBQTtJQUl2Qiw2Q0FBNEIsNEJBQUE7SUFRZixlQUFZO0lBQVosb0NBQVk7SUFDbkIsZUFBK0I7SUFBL0IsZ0RBQStCO0lBQUMsZUFBVztJQUFYLGtDQUFXOzs7QURObkQsTUFBTSxPQUFPLHFCQUFxQjtJQWlJaEMsWUFBb0IsMEJBQStDLEVBQVUsU0FBdUI7UUFBaEYsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFxQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWM7UUF0SDdGLGlCQUFZLEdBQXVCLFNBQVMsQ0FBQztRQXFCN0MsV0FBTSxHQUE2QixTQUFTLENBQUM7UUFHN0MsaUJBQVks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RUFBRTtZQUM1QixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7WUFDekYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQzs7NkdBeEpVLHFCQUFxQjt1R0FBckIscUJBQXFCOztRQ1ZsQyw2RUFpQlM7O1FBaEJOLDZDQUF3Qjs7dUZEU2QscUJBQXFCO2NBSmpDLFNBQVM7MkJBQ0UsZ0JBQWdCO2lHQUtuQixnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsUUFBUTtrQkFEZCxLQUFLO1lBSUMsWUFBWTtrQkFEbEIsS0FBSztZQUlDLE1BQU07a0JBRFosS0FBSztZQUlDLFNBQVM7a0JBRGYsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLFFBQVE7a0JBRGQsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSztZQUlDLE1BQU07a0JBRFosS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJQyxpQkFBaUI7a0JBRHZCLEtBQUs7WUFVSyxLQUFLO2tCQURmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFJlc3BvbnNpdmVDU1NDbGFzcyB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XG5pbXBvcnQgeyBQZGZTaHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXNoeS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNoeS1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTaHlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwcmltYXJ5VG9vbGJhcklkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlY29uZGFyeU1lbnVJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjc3NDbGFzczogUmVzcG9uc2l2ZUNTU0NsYXNzO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBldmVudEJ1c05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbDEwbklkOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGwxMG5MYWJlbDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0b2dnbGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgb3JkZXI6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYWN0aW9uOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNsb3NlT25DbGljazogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIG9ubHlTZWNvbmRhcnlNZW51OiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfaW1hZ2VIdG1sOiBTYWZlSHRtbDtcblxuICBwdWJsaWMgZ2V0IGltYWdlSHRtbCgpOiBTYWZlSHRtbCB7XG4gICAgcmV0dXJuIHRoaXMuX2ltYWdlSHRtbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaW1hZ2UodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHN2Z1RhZ3MgPSBbXG4gICAgICAvLyAnYScgaXMgbm90IGFsbG93ZWQhXG4gICAgICAnYW5pbWF0ZScsXG4gICAgICAnYW5pbWF0ZU1vdGlvbicsXG4gICAgICAnYW5pbWF0ZVRyYW5zZm9ybScsXG4gICAgICAnYXVkaW8nLFxuICAgICAgJ2NhbnZhcycsXG4gICAgICAnY2lyY2xlJyxcbiAgICAgICdjbGlwUGF0aCcsXG4gICAgICAnZGVmcycsXG4gICAgICAnZGVzYycsXG4gICAgICAnZGlzY2FyZCcsXG4gICAgICAnZWxsaXBzZScsXG4gICAgICAnZmVCbGVuZCcsXG4gICAgICAnZmVDb2xvck1hdHJpeCcsXG4gICAgICAnZmVDb21wb25lbnRUcmFuc2ZlcicsXG4gICAgICAnZmVDb21wb3NpdGUnLFxuICAgICAgJ2ZlQ29udm9sdmVNYXRyaXgnLFxuICAgICAgJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcbiAgICAgICdmZURpc3BsYWNlbWVudE1hcCcsXG4gICAgICAnZmVEaXN0YW50TGlnaHQnLFxuICAgICAgJ2ZlRHJvcFNoYWRvdycsXG4gICAgICAnZmVGbG9vZCcsXG4gICAgICAnZmVGdW5jQScsXG4gICAgICAnZmVGdW5jQicsXG4gICAgICAnZmVGdW5jRycsXG4gICAgICAnZmVGdW5jUicsXG4gICAgICAnZmVHYXVzc2lhbkJsdXInLFxuICAgICAgJ2ZlSW1hZ2UnLFxuICAgICAgJ2ZlTWVyZ2UnLFxuICAgICAgJ2ZlTWVyZ2VOb2RlJyxcbiAgICAgICdmZU1vcnBob2xvZ3knLFxuICAgICAgJ2ZlT2Zmc2V0JyxcbiAgICAgICdmZVBvaW50TGlnaHQnLFxuICAgICAgJ2ZlU3BlY3VsYXJMaWdodGluZycsXG4gICAgICAnZmVTcG90TGlnaHQnLFxuICAgICAgJ2ZlVGlsZScsXG4gICAgICAnZmVUdXJidWxlbmNlJyxcbiAgICAgICdmaWx0ZXInLFxuICAgICAgJ2ZvcmVpZ25PYmplY3QnLFxuICAgICAgJ2cnLFxuICAgICAgJ2lmcmFtZScsXG4gICAgICAnaW1hZ2UnLFxuICAgICAgJ2xpbmUnLFxuICAgICAgJ2xpbmVhckdyYWRpZW50JyxcbiAgICAgICdtYXJrZXInLFxuICAgICAgJ21hc2snLFxuICAgICAgJ21ldGFkYXRhJyxcbiAgICAgICdtcGF0aCcsXG4gICAgICAncGF0aCcsXG4gICAgICAncGF0dGVybicsXG4gICAgICAncG9seWdvbicsXG4gICAgICAncG9seWxpbmUnLFxuICAgICAgJ3JhZGlhbEdyYWRpZW50JyxcbiAgICAgICdyZWN0JyxcbiAgICAgICdzY3JpcHQnLFxuICAgICAgJ3NldCcsXG4gICAgICAnc3RvcCcsXG4gICAgICAnc3R5bGUnLFxuICAgICAgJ3N2ZycsXG4gICAgICAnc3dpdGNoJyxcbiAgICAgICdzeW1ib2wnLFxuICAgICAgJ3RleHQnLFxuICAgICAgJ3RleHRQYXRoJyxcbiAgICAgICd0aXRsZScsXG4gICAgICAndHNwYW4nLFxuICAgICAgJ3Vua25vd24nLFxuICAgICAgJ3VzZScsXG4gICAgICAndmlkZW8nLFxuICAgICAgJ3ZpZXcnLFxuICAgIF07XG5cbiAgICAvLyBvbmx5IDxzdmc+IGFuZCBTVkcgdGFncyBhcmUgYWxsb3dlZFxuICAgIGNvbnN0IHRhZ3MgPSB2YWx1ZS5zcGxpdCgnPCcpLmZpbHRlcigodGFnKSA9PiB0YWcubGVuZ3RoID4gMCk7XG4gICAgY29uc3QgbGVnYWwgPSB0YWdzLmV2ZXJ5KCh0YWcpID0+IHRhZy5zdGFydHNXaXRoKCdzdmcnKSB8fCB0YWcuc3RhcnRzV2l0aCgnLycpIHx8IHN2Z1RhZ3MuaW5jbHVkZXModGFnLnNwbGl0KC9cXHN8Pi8pWzBdKSk7XG4gICAgaWYgKCFsZWdhbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGltYWdlIGZvciBQREZTaHlCdXR0b24uIE9ubHkgU1ZHIGltYWdlcyBhcmUgYWxsb3dlZC4gUGxlYXNlIHVzZSBvbmx5IHRoZSB0YWdzIDxzdmc+IGFuZCA8cGF0aD4uICcgKyB2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX2ltYWdlSHRtbCA9IHRoaXMuc2FuaXRpemVIdG1sKHZhbHVlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGRmU2h5QnV0dG9uU2VydmljZVNlcnZpY2U6IFBkZlNoeUJ1dHRvblNlcnZpY2UsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGRmU2h5QnV0dG9uU2VydmljZVNlcnZpY2UuYWRkKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMucGRmU2h5QnV0dG9uU2VydmljZVNlcnZpY2UudXBkYXRlKHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzYW5pdGl6ZUh0bWwoaHRtbDogc3RyaW5nKTogU2FmZUh0bWwge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTsgLy8gTk9TT05BUlxuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aW9uKSB7XG4gICAgICB0aGlzLmFjdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlbnRCdXNOYW1lKSB7XG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2godGhpcy5ldmVudEJ1c05hbWUpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxidXR0b25cbiAgKm5nSWY9XCIhb25seVNlY29uZGFyeU1lbnVcIlxuICB0eXBlPVwiYnV0dG9uXCJcbiAgW2lkXT1cInByaW1hcnlUb29sYmFySWRcIlxuICBjbGFzcz1cInRvb2xiYXJCdXR0b25cIlxuICBbY2xhc3NdPVwiY3NzQ2xhc3NcIlxuICBbdGl0bGVdPVwidGl0bGVcIlxuICBbYXR0ci5kYXRhLWwxMG4taWRdPVwibDEwbklkXCJcbiAgW2NsYXNzLnRvZ2dsZWRdPVwidG9nZ2xlZFwiXG4gIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gIFtpbm5lckhUTUxdPVwiaW1hZ2VIdG1sXCJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwidGl0bGVcIlxuICByb2xlPVwiYnV0dG9uXCJcbj5cbiAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhaW1hZ2VcIiByb2xlPVwiaW1nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9uZy1jb250ZW50PlxuICA8c3BhbiBbYXR0ci5kYXRhLWwxMG4taWRdPVwibDEwbkxhYmVsXCI+e3sgdGl0bGUgfX08L3NwYW4+XG48L2J1dHRvbj5cbiJdfQ==