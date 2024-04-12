import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-shy-button-service";
import * as i2 from "@angular/platform-browser";
import * as i3 from "@angular/common";
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
PdfShyButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonComponent, deps: [{ token: i1.PdfShyButtonService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
PdfShyButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: { primaryToolbarId: "primaryToolbarId", secondaryMenuId: "secondaryMenuId", cssClass: "cssClass", eventBusName: "eventBusName", l10nId: "l10nId", l10nLabel: "l10nLabel", title: "title", toggled: "toggled", disabled: "disabled", order: "order", action: "action", closeOnClick: "closeOnClick", onlySecondaryMenu: "onlySecondaryMenu", image: "image" }, usesOnChanges: true, ngImport: i0, template: "<button\r\n  *ngIf=\"!onlySecondaryMenu\"\r\n  type=\"button\"\r\n  [id]=\"primaryToolbarId\"\r\n  class=\"toolbarButton\"\r\n  [class]=\"cssClass\"\r\n  [title]=\"title\"\r\n  [attr.data-l10n-id]=\"l10nId\"\r\n  [class.toggled]=\"toggled\"\r\n  [disabled]=\"disabled\"\r\n  [innerHTML]=\"imageHtml\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.aria-label]=\"title\"\r\n  role=\"button\"\r\n>\r\n  <ng-content *ngIf=\"!image\" role=\"img\" aria-hidden=\"true\"></ng-content>\r\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\r\n</button>\r\n", directives: [{ type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-shy-button', template: "<button\r\n  *ngIf=\"!onlySecondaryMenu\"\r\n  type=\"button\"\r\n  [id]=\"primaryToolbarId\"\r\n  class=\"toolbarButton\"\r\n  [class]=\"cssClass\"\r\n  [title]=\"title\"\r\n  [attr.data-l10n-id]=\"l10nId\"\r\n  [class.toggled]=\"toggled\"\r\n  [disabled]=\"disabled\"\r\n  [innerHTML]=\"imageHtml\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.aria-label]=\"title\"\r\n  role=\"button\"\r\n>\r\n  <ng-content *ngIf=\"!image\" role=\"img\" aria-hidden=\"true\"></ng-content>\r\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\r\n</button>\r\n" }]
        }], ctorParameters: function () { return [{ type: i1.PdfShyButtonService }, { type: i2.DomSanitizer }]; }, propDecorators: { primaryToolbarId: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1zaHktYnV0dG9uL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBVXBFLE1BQU0sT0FBTyxxQkFBcUI7SUFpSWhDLFlBQW9CLDBCQUErQyxFQUFVLFNBQXVCO1FBQWhGLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBcUI7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBdEg3RixpQkFBWSxHQUF1QixTQUFTLENBQUM7UUFxQjdDLFdBQU0sR0FBNkIsU0FBUyxDQUFDO1FBRzdDLGlCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztJQTJGNkQsQ0FBQztJQXZGeEcsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDVyxLQUFLLENBQUMsS0FBYTtRQUM1QixNQUFNLE9BQU8sR0FBRztZQUNkLHNCQUFzQjtZQUN0QixTQUFTO1lBQ1QsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixPQUFPO1lBQ1AsUUFBUTtZQUNSLFFBQVE7WUFDUixVQUFVO1lBQ1YsTUFBTTtZQUNOLE1BQU07WUFDTixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxlQUFlO1lBQ2YscUJBQXFCO1lBQ3JCLGFBQWE7WUFDYixrQkFB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QkFJQyxNQUFNO3NCQURaLEtBQUs7Z0JBSUMsU0FBUztzQkFEZixLQUFLO2dCQUlDLEtBQUs7c0JBRFgsS0FBSztnQkFJQyxPQUFPO3NCQURiLEtBQUs7Z0JBSUMsUUFBUTtzQkFEZCxLQUFLO2dCQUlDLEtBQUs7c0JBRFgsS0FBSztnQkFJQyxNQUFNO3NCQURaLEtBQUs7Z0JBSUMsWUFBWTtzQkFEbEIsS0FBSztnQkFJQyxpQkFBaUI7c0JBRHZCLEtBQUs7Z0JBVUssS0FBSztzQkFEZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlQ1NTQ2xhc3MgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5pbXBvcnQgeyBQZGZTaHlCdXR0b25TZXJ2aWNlIH0gZnJvbSAnLi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNoeS1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaHlCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJpbWFyeVRvb2xiYXJJZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZWNvbmRhcnlNZW51SWQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3NzQ2xhc3M6IFJlc3BvbnNpdmVDU1NDbGFzcztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZXZlbnRCdXNOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGwxMG5JZDogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsMTBuTGFiZWw6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdG9nZ2xlZDogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG9yZGVyOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjdGlvbjogKCgpID0+IHZvaWQpIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjbG9zZU9uQ2xpY2s6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBvbmx5U2Vjb25kYXJ5TWVudTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9pbWFnZUh0bWw6IFNhZmVIdG1sO1xyXG5cclxuICBwdWJsaWMgZ2V0IGltYWdlSHRtbCgpOiBTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5faW1hZ2VIdG1sO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGltYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHN2Z1RhZ3MgPSBbXHJcbiAgICAgIC8vICdhJyBpcyBub3QgYWxsb3dlZCFcclxuICAgICAgJ2FuaW1hdGUnLFxyXG4gICAgICAnYW5pbWF0ZU1vdGlvbicsXHJcbiAgICAgICdhbmltYXRlVHJhbnNmb3JtJyxcclxuICAgICAgJ2F1ZGlvJyxcclxuICAgICAgJ2NhbnZhcycsXHJcbiAgICAgICdjaXJjbGUnLFxyXG4gICAgICAnY2xpcFBhdGgnLFxyXG4gICAgICAnZGVmcycsXHJcbiAgICAgICdkZXNjJyxcclxuICAgICAgJ2Rpc2NhcmQnLFxyXG4gICAgICAnZWxsaXBzZScsXHJcbiAgICAgICdmZUJsZW5kJyxcclxuICAgICAgJ2ZlQ29sb3JNYXRyaXgnLFxyXG4gICAgICAnZmVDb21wb25lbnRUcmFuc2ZlcicsXHJcbiAgICAgICdmZUNvbXBvc2l0ZScsXHJcbiAgICAgICdmZUNvbnZvbHZlTWF0cml4JyxcclxuICAgICAgJ2ZlRGlmZnVzZUxpZ2h0aW5nJyxcclxuICAgICAgJ2ZlRGlzcGxhY2VtZW50TWFwJyxcclxuICAgICAgJ2ZlRGlzdGFudExpZ2h0JyxcclxuICAgICAgJ2ZlRHJvcFNoYWRvdycsXHJcbiAgICAgICdmZUZsb29kJyxcclxuICAgICAgJ2ZlRnVuY0EnLFxyXG4gICAgICAnZmVGdW5jQicsXHJcbiAgICAgICdmZUZ1bmNHJyxcclxuICAgICAgJ2ZlRnVuY1InLFxyXG4gICAgICAnZmVHYXVzc2lhbkJsdXInLFxyXG4gICAgICAnZmVJbWFnZScsXHJcbiAgICAgICdmZU1lcmdlJyxcclxuICAgICAgJ2ZlTWVyZ2VOb2RlJyxcclxuICAgICAgJ2ZlTW9ycGhvbG9neScsXHJcbiAgICAgICdmZU9mZnNldCcsXHJcbiAgICAgICdmZVBvaW50TGlnaHQnLFxyXG4gICAgICAnZmVTcGVjdWxhckxpZ2h0aW5nJyxcclxuICAgICAgJ2ZlU3BvdExpZ2h0JyxcclxuICAgICAgJ2ZlVGlsZScsXHJcbiAgICAgICdmZVR1cmJ1bGVuY2UnLFxyXG4gICAgICAnZmlsdGVyJyxcclxuICAgICAgJ2ZvcmVpZ25PYmplY3QnLFxyXG4gICAgICAnZycsXHJcbiAgICAgICdpZnJhbWUnLFxyXG4gICAgICAnaW1hZ2UnLFxyXG4gICAgICAnbGluZScsXHJcbiAgICAgICdsaW5lYXJHcmFkaWVudCcsXHJcbiAgICAgICdtYXJrZXInLFxyXG4gICAgICAnbWFzaycsXHJcbiAgICAgICdtZXRhZGF0YScsXHJcbiAgICAgICdtcGF0aCcsXHJcbiAgICAgICdwYXRoJyxcclxuICAgICAgJ3BhdHRlcm4nLFxyXG4gICAgICAncG9seWdvbicsXHJcbiAgICAgICdwb2x5bGluZScsXHJcbiAgICAgICdyYWRpYWxHcmFkaWVudCcsXHJcbiAgICAgICdyZWN0JyxcclxuICAgICAgJ3NjcmlwdCcsXHJcbiAgICAgICdzZXQnLFxyXG4gICAgICAnc3RvcCcsXHJcbiAgICAgICdzdHlsZScsXHJcbiAgICAgICdzdmcnLFxyXG4gICAgICAnc3dpdGNoJyxcclxuICAgICAgJ3N5bWJvbCcsXHJcbiAgICAgICd0ZXh0JyxcclxuICAgICAgJ3RleHRQYXRoJyxcclxuICAgICAgJ3RpdGxlJyxcclxuICAgICAgJ3RzcGFuJyxcclxuICAgICAgJ3Vua25vd24nLFxyXG4gICAgICAndXNlJyxcclxuICAgICAgJ3ZpZGVvJyxcclxuICAgICAgJ3ZpZXcnLFxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBvbmx5IDxzdmc+IGFuZCBTVkcgdGFncyBhcmUgYWxsb3dlZFxyXG4gICAgY29uc3QgdGFncyA9IHZhbHVlLnNwbGl0KCc8JykuZmlsdGVyKCh0YWcpID0+IHRhZy5sZW5ndGggPiAwKTtcclxuICAgIGNvbnN0IGxlZ2FsID0gdGFncy5ldmVyeSgodGFnKSA9PiB0YWcuc3RhcnRzV2l0aCgnc3ZnJykgfHwgdGFnLnN0YXJ0c1dpdGgoJy8nKSB8fCBzdmdUYWdzLmluY2x1ZGVzKHRhZy5zcGxpdCgvXFxzfD4vKVswXSkpO1xyXG4gICAgaWYgKCFsZWdhbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgaW1hZ2UgZm9yIFBERlNoeUJ1dHRvbi4gT25seSBTVkcgaW1hZ2VzIGFyZSBhbGxvd2VkLiBQbGVhc2UgdXNlIG9ubHkgdGhlIHRhZ3MgPHN2Zz4gYW5kIDxwYXRoPi4gJyArIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2ltYWdlSHRtbCA9IHRoaXMuc2FuaXRpemVIdG1sKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGRmU2h5QnV0dG9uU2VydmljZVNlcnZpY2U6IFBkZlNoeUJ1dHRvblNlcnZpY2UsIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucGRmU2h5QnV0dG9uU2VydmljZVNlcnZpY2UuYWRkKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5wZGZTaHlCdXR0b25TZXJ2aWNlU2VydmljZS51cGRhdGUodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNhbml0aXplSHRtbChodG1sOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaHRtbCk7IC8vIE5PU09OQVJcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZXZlbnRCdXNOYW1lKSB7XHJcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKHRoaXMuZXZlbnRCdXNOYW1lKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGJ1dHRvblxyXG4gICpuZ0lmPVwiIW9ubHlTZWNvbmRhcnlNZW51XCJcclxuICB0eXBlPVwiYnV0dG9uXCJcclxuICBbaWRdPVwicHJpbWFyeVRvb2xiYXJJZFwiXHJcbiAgY2xhc3M9XCJ0b29sYmFyQnV0dG9uXCJcclxuICBbY2xhc3NdPVwiY3NzQ2xhc3NcIlxyXG4gIFt0aXRsZV09XCJ0aXRsZVwiXHJcbiAgW2F0dHIuZGF0YS1sMTBuLWlkXT1cImwxMG5JZFwiXHJcbiAgW2NsYXNzLnRvZ2dsZWRdPVwidG9nZ2xlZFwiXHJcbiAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbaW5uZXJIVE1MXT1cImltYWdlSHRtbFwiXHJcbiAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXHJcbiAgW2F0dHIuYXJpYS1sYWJlbF09XCJ0aXRsZVwiXHJcbiAgcm9sZT1cImJ1dHRvblwiXHJcbj5cclxuICA8bmctY29udGVudCAqbmdJZj1cIiFpbWFnZVwiIHJvbGU9XCJpbWdcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L25nLWNvbnRlbnQ+XHJcbiAgPHNwYW4gW2F0dHIuZGF0YS1sMTBuLWlkXT1cImwxMG5MYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxyXG48L2J1dHRvbj5cclxuIl19