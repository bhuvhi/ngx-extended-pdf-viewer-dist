import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { addTrustedHTML } from '../sanitized-css-injector';
import { css } from './pdf-acroform-default-colors-css';
import * as i0 from "@angular/core";
export class PdfAcroformDefaultThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-acroform-css';
        addTrustedHTML(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-acroform-css');
        styles?.parentElement?.removeChild(styles);
    }
}
/** @nocollapse */ PdfAcroformDefaultThemeComponent.ɵfac = function PdfAcroformDefaultThemeComponent_Factory(t) { return new (t || PdfAcroformDefaultThemeComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
/** @nocollapse */ PdfAcroformDefaultThemeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfAcroformDefaultThemeComponent, selectors: [["pdf-acroform-default-theme"]], decls: 0, vars: 0, template: function PdfAcroformDefaultThemeComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfAcroformDefaultThemeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-acroform-default-theme', template: '', styles: [] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90aGVtZS9hY3JvZm9ybS1kZWZhdWx0LXRoZW1lL3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQXFCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQWF4RCxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLFlBQW9CLFFBQW1CLEVBQTRCLFFBQWE7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUE0QixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQztJQUU3RSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztRQUN4RSxNQUFNLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBQy9CLGNBQWMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFdBQVc7UUFDaEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQWdCLENBQUM7UUFDL0UsTUFBTSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7bUlBakJVLGdDQUFnQywyREFDTSxRQUFRO2tIQUQ5QyxnQ0FBZ0M7dUZBQWhDLGdDQUFnQztjQVg1QyxTQUFTOzJCQUNFLDRCQUE0QixZQUM1QixFQUFFOztzQkFVOEIsTUFBTTt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFkZFRydXN0ZWRIVE1MIH0gZnJvbSAnLi4vc2FuaXRpemVkLWNzcy1pbmplY3Rvcic7XG5pbXBvcnQgeyBjc3MgfSBmcm9tICcuL3BkZi1hY3JvZm9ybS1kZWZhdWx0LWNvbG9ycy1jc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbXG4gICAgLy8gICAgJy4vcGRmLWFjcm9mb3JtLWRlZmF1bHQtY29sb3JzLnNjc3MnLFxuICAgIC8vICAgICcuLi9jb21tb24vYW5ub3RhdGlvbi1sYXllci1idWlsZGVyLnNjc3MnLFxuICAgIC8vICAgICcuLi9jb21tb24veGZhX2xheWVyX2J1aWxkZXIuc2NzcycsXG4gICAgLy8gICAgJy4uL2NvbW1vbi9hbm5vdGF0aW9uX2VkaXRvcl9sYXllcl9idWlsZGVyLmNzcycsXG4gIF0sXG4gIC8vICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZBY3JvZm9ybURlZmF1bHRUaGVtZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XG4gICAgc3R5bGVzLmlkID0gJ3BkZi1hY3JvZm9ybS1jc3MnO1xuICAgIGFkZFRydXN0ZWRIVE1MKHN0eWxlcywgY3NzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc3R5bGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtYWNyb2Zvcm0tY3NzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgc3R5bGVzPy5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChzdHlsZXMpO1xuICB9XG59XG4iXX0=