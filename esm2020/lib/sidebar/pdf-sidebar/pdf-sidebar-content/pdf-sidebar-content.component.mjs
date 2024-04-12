import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["thumbnailViewTemplate"];
function PdfSidebarContentComponent_ng_content_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customThumbnail ? customThumbnail : defaultThumbnail"]);
} }
function PdfSidebarContentComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8)(1, "div", 9);
    i0.ɵɵelement(2, "img", 10);
    i0.ɵɵelementEnd()();
} }
const _c1 = ["*"];
const THUMBNAIL_CANVAS_BORDER_WIDTH = 1; // one pixel
export class PdfSidebarContentComponent {
    constructor() {
        this.hideSidebarToolbar = false;
        this.mobileFriendlyZoomScale = 1.0;
        this.thumbnailDrawn = new EventEmitter();
        if (typeof window !== 'undefined') {
            window.pdfThumbnailGeneratorReady = () => this.pdfThumbnailGeneratorReady();
            window.pdfThumbnailGenerator = (pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) => this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise);
        }
    }
    get top() {
        let top = 0;
        if (!this.hideSidebarToolbar) {
            top = 32 * this.mobileFriendlyZoomScale;
            if (top === 32) {
                top = 33; // prevent the border of the sidebar toolbar from being cut off
            }
        }
        return `${top}px`;
    }
    ngOnDestroy() {
        this.linkService = undefined;
    }
    pdfThumbnailGeneratorReady() {
        if (!this.thumbnailViewTemplate) {
            return false;
        }
        const t = this.thumbnailViewTemplate.nativeElement;
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    }
    createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromise) {
        this.linkService = linkService;
        const template = this.thumbnailViewTemplate;
        // get the inner HTML without the attributes and classes added by Angular
        const inner = template.nativeElement.innerHTML
            .split(/_ng\w+-\w+-\w+=""/g)
            .join('')
            .split(/ng-\w+-\w+/g)
            .join('')
            .split(/<!--[\s\S]*?-->/g)
            .join('');
        const borderAdjustment = 2 * THUMBNAIL_CANVAS_BORDER_WIDTH;
        const widthOfRing = `${pdfThumbnailView.canvasWidth + borderAdjustment}px`;
        const heightOfRing = `${pdfThumbnailView.canvasHeight + borderAdjustment}px`;
        const newHtml = inner.split('WIDTH_OF_RING').join(widthOfRing).split('HEIGHT_OF_RING').join(heightOfRing).split('PAGE_NUMBER').join(id);
        const newElement = this.createElementFromHTML(newHtml);
        newElement.classList.remove('pdf-viewer-template');
        const anchor = newElement;
        anchor.href = linkService.getAnchorUrl(`#page=${id}`);
        thumbPageTitlePromise.then((msg) => {
            anchor.title = msg;
        });
        anchor.onclick = () => {
            linkService.page = id;
            return false;
        };
        pdfThumbnailView.anchor = anchor;
        const img = newElement.getElementsByTagName('img')[0];
        pdfThumbnailView.div = newElement.getElementsByClassName('thumbnail')[0];
        container.appendChild(newElement);
        const thumbnailDrawnEvent = {
            thumbnail: newElement,
            container: container,
            pageId: id,
        };
        this.thumbnailDrawn.emit(thumbnailDrawnEvent);
        return img;
    }
    getTrustedHtml(html) {
        if (typeof window === 'undefined') {
            // server-side rendering
            return html;
        }
        const ttWindow = window;
        if (ttWindow.trustedTypes) {
            // Create a policy that can create TrustedHTML values
            // after sanitizing the input strings with DOMPurify library.
            const sanitizer = ttWindow.trustedTypes.createPolicy('foo', {
                createHTML: (input) => input,
            });
            return sanitizer.createHTML(html); // Puts the sanitized value into the DOM.
        }
        else {
            return html;
        }
    }
    createElementFromHTML(htmlString) {
        const div = document.createElement('div');
        const trustedHtml = this.getTrustedHtml(htmlString.trim());
        div.innerHTML = trustedHtml;
        // Change this to div.childNodes to support multiple top-level nodes
        return div.firstChild;
    }
    onKeyDown(event) {
        if (event.code === 'ArrowDown') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = this.linkService.pagesCount;
                }
                else if (this.linkService.page < this.linkService.pagesCount) {
                    this.linkService.page = this.linkService.page + 1;
                }
                event.preventDefault();
            }
        }
        else if (event.code === 'ArrowUp') {
            if (this.linkService) {
                if (event.ctrlKey || event.metaKey) {
                    this.linkService.page = 1;
                }
                else if (this.linkService.page > 1) {
                    this.linkService.page = this.linkService.page - 1;
                }
                event.preventDefault();
            }
        }
    }
}
/** @nocollapse */ PdfSidebarContentComponent.ɵfac = function PdfSidebarContentComponent_Factory(t) { return new (t || PdfSidebarContentComponent)(); };
/** @nocollapse */ PdfSidebarContentComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarContentComponent, selectors: [["pdf-sidebar-content"]], viewQuery: function PdfSidebarContentComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.thumbnailViewTemplate = _t.first);
    } }, inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngContentSelectors: _c1, decls: 10, vars: 3, consts: [["id", "sidebarContent"], ["thumbnailViewTemplate", ""], [4, "ngTemplateOutlet"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], ["defaultThumbnail", ""], [1, "pdf-viewer-template"], ["data-page-number", "PAGE_NUMBER", 1, "thumbnail"], ["alt", "miniature of the page", 1, "thumbnailImage"]], template: function PdfSidebarContentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", null, 1);
        i0.ɵɵtemplate(3, PdfSidebarContentComponent_ng_content_3_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 3);
        i0.ɵɵlistener("keydown", function PdfSidebarContentComponent_Template_div_keydown_4_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4)(6, "div", 5)(7, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, PdfSidebarContentComponent_ng_template_8_Template, 3, 0, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(9);
        i0.ɵɵstyleProp("top", ctx.top);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customThumbnail ? ctx.customThumbnail : _r2);
    } }, directives: [i1.NgTemplateOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarContentComponent, [{
        type: Component,
        args: [{ selector: 'pdf-sidebar-content', template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"PAGE_NUMBER\">\r\n      <img class=\"thumbnailImage\" alt=\"miniature of the page\" />\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""] }]
    }], function () { return []; }, { customThumbnail: [{
            type: Input
        }], hideSidebarToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], thumbnailViewTemplate: [{
            type: ViewChild,
            args: ['thumbnailViewTemplate']
        }], thumbnailDrawn: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0VsSCxvR0FBa0c7OztJQVVwRyw0QkFBK0IsYUFBQTtJQUUzQiwwQkFBMEQ7SUFDNUQsaUJBQU0sRUFBQTs7O0FERVYsTUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBT3JELE1BQU0sT0FBTywwQkFBMEI7SUE2QnJDO1FBeEJPLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUczQiw0QkFBdUIsR0FBRyxHQUFHLENBQUM7UUFROUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQWNqRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNoQyxNQUFjLENBQUMsMEJBQTBCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEYsTUFBYyxDQUFDLHFCQUFxQixHQUFHLENBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1YsU0FBeUIsRUFDekIscUJBQXND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QztpQkFDbkQ7Z0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzt1SEExSlUsMEJBQTBCOzRHQUExQiwwQkFBMEI7Ozs7Ozs7UUN4QnZDLDhCQUEyQyxtQkFBQTtRQUV2Qyx5RkFBa0c7UUFDcEcsaUJBQU07UUFFTiw4QkFBc0Q7UUFBOUIsOEdBQVcscUJBQWlCLElBQUM7UUFBQyxpQkFBTTtRQUM1RCx5QkFBMkMsYUFBQSxhQUFBO1FBRzdDLGlCQUFNO1FBRU4sNEhBTWM7OztRQWpCVyw4QkFBaUI7UUFFekIsZUFBc0U7UUFBdEUsa0ZBQXNFOzt1RkRzQjFFLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNFLHFCQUFxQjtzQ0FNeEIsZUFBZTtrQkFEckIsS0FBSztZQUlDLGtCQUFrQjtrQkFEeEIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLHFCQUFxQjtrQkFEM0IsU0FBUzttQkFBQyx1QkFBdUI7WUFNM0IsY0FBYztrQkFEcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJ1c3RlZFR5cGVzV2luZG93IH0gZnJvbSAndHJ1c3RlZC10eXBlcy9saWInO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xyXG5kZWNsYXJlIGNsYXNzIFBERlRodW1ibmFpbFZpZXcge1xyXG4gIGFuY2hvcjogSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgZGl2OiBIVE1MRWxlbWVudDtcclxuICByaW5nOiBIVE1MRWxlbWVudDtcclxuICBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG4gIGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5kZWNsYXJlIGNsYXNzIFBERkxpbmtTZXJ2aWNlIHtcclxuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBwYWdlc0NvdW50OiBudW1iZXI7XHJcbiAgcHVibGljIGdldEFuY2hvclVybCh0YXJnZXRVcmw6IHN0cmluZyk6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgVEhVTUJOQUlMX0NBTlZBU19CT1JERVJfV0lEVEggPSAxOyAvLyBvbmUgcGl4ZWxcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXNpZGViYXItY29udGVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaGlkZVNpZGViYXJUb29sYmFyID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMS4wO1xyXG5cclxuICBAVmlld0NoaWxkKCd0aHVtYm5haWxWaWV3VGVtcGxhdGUnKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxWaWV3VGVtcGxhdGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHByaXZhdGUgbGlua1NlcnZpY2U6IFBERkxpbmtTZXJ2aWNlIHwgdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBnZXQgdG9wKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdG9wID0gMDtcclxuICAgIGlmICghdGhpcy5oaWRlU2lkZWJhclRvb2xiYXIpIHtcclxuICAgICAgdG9wID0gMzIgKiB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlO1xyXG4gICAgICBpZiAodG9wID09PSAzMikge1xyXG4gICAgICAgIHRvcCA9IDMzOyAvLyBwcmV2ZW50IHRoZSBib3JkZXIgb2YgdGhlIHNpZGViYXIgdG9vbGJhciBmcm9tIGJlaW5nIGN1dCBvZmZcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGAke3RvcH1weGA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAod2luZG93IGFzIGFueSkucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkgPSAoKSA9PiB0aGlzLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5wZGZUaHVtYm5haWxHZW5lcmF0b3IgPSAoXHJcbiAgICAgICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgICAgICBsaW5rU2VydmljZTogYW55LFxyXG4gICAgICAgIGlkOiBudW1iZXIsXHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcclxuICAgICAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxyXG4gICAgICApID0+IHRoaXMuY3JlYXRlVGh1bWJuYWlsKHBkZlRodW1ibmFpbFZpZXcsIGxpbmtTZXJ2aWNlLCBpZCwgY29udGFpbmVyLCB0aHVtYlBhZ2VUaXRsZVByb21pc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5saW5rU2VydmljZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGUpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdCA9IHRoaXMudGh1bWJuYWlsVmlld1RlbXBsYXRlLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gISF0ICYmICEhdC5pbm5lckhUTUwgJiYgdC5pbm5lckhUTUwubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJuYWlsKFxyXG4gICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSxcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlOiBQcm9taXNlPHN0cmluZz5cclxuICApOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkIHtcclxuICAgIHRoaXMubGlua1NlcnZpY2UgPSBsaW5rU2VydmljZTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGU7XHJcbiAgICAvLyBnZXQgdGhlIGlubmVyIEhUTUwgd2l0aG91dCB0aGUgYXR0cmlidXRlcyBhbmQgY2xhc3NlcyBhZGRlZCBieSBBbmd1bGFyXHJcbiAgICBjb25zdCBpbm5lciA9IHRlbXBsYXRlLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXHJcbiAgICAgIC5zcGxpdCgvX25nXFx3Ky1cXHcrLVxcdys9XCJcIi9nKVxyXG4gICAgICAuam9pbignJylcclxuICAgICAgLnNwbGl0KC9uZy1cXHcrLVxcdysvZylcclxuICAgICAgLmpvaW4oJycpXHJcbiAgICAgIC5zcGxpdCgvPCEtLVtcXHNcXFNdKj8tLT4vZylcclxuICAgICAgLmpvaW4oJycpO1xyXG5cclxuICAgIGNvbnN0IGJvcmRlckFkanVzdG1lbnQgPSAyICogVEhVTUJOQUlMX0NBTlZBU19CT1JERVJfV0lEVEg7XHJcblxyXG4gICAgY29uc3Qgd2lkdGhPZlJpbmcgPSBgJHtwZGZUaHVtYm5haWxWaWV3LmNhbnZhc1dpZHRoICsgYm9yZGVyQWRqdXN0bWVudH1weGA7XHJcbiAgICBjb25zdCBoZWlnaHRPZlJpbmcgPSBgJHtwZGZUaHVtYm5haWxWaWV3LmNhbnZhc0hlaWdodCArIGJvcmRlckFkanVzdG1lbnR9cHhgO1xyXG5cclxuICAgIGNvbnN0IG5ld0h0bWwgPSBpbm5lci5zcGxpdCgnV0lEVEhfT0ZfUklORycpLmpvaW4od2lkdGhPZlJpbmcpLnNwbGl0KCdIRUlHSFRfT0ZfUklORycpLmpvaW4oaGVpZ2h0T2ZSaW5nKS5zcGxpdCgnUEFHRV9OVU1CRVInKS5qb2luKGlkKTtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTChuZXdIdG1sKTtcclxuICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGRmLXZpZXdlci10ZW1wbGF0ZScpO1xyXG5cclxuICAgIGNvbnN0IGFuY2hvciA9IG5ld0VsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XHJcbiAgICBhbmNob3IuaHJlZiA9IGxpbmtTZXJ2aWNlLmdldEFuY2hvclVybChgI3BhZ2U9JHtpZH1gKTtcclxuICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZS50aGVuKChtc2cpID0+IHtcclxuICAgICAgYW5jaG9yLnRpdGxlID0gbXNnO1xyXG4gICAgfSk7XHJcbiAgICBhbmNob3Iub25jbGljayA9ICgpID0+IHtcclxuICAgICAgbGlua1NlcnZpY2UucGFnZSA9IGlkO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgcGRmVGh1bWJuYWlsVmlldy5hbmNob3IgPSBhbmNob3I7XHJcblxyXG4gICAgY29uc3QgaW1nOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkID0gbmV3RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW1nJylbMF07XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LmRpdiA9IG5ld0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGh1bWJuYWlsJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgIGNvbnN0IHRodW1ibmFpbERyYXduRXZlbnQ6IFBkZlRodW1ibmFpbERyYXduRXZlbnQgPSB7XHJcbiAgICAgIHRodW1ibmFpbDogbmV3RWxlbWVudCxcclxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXHJcbiAgICAgIHBhZ2VJZDogaWQsXHJcbiAgICB9O1xyXG4gICAgdGhpcy50aHVtYm5haWxEcmF3bi5lbWl0KHRodW1ibmFpbERyYXduRXZlbnQpO1xyXG4gICAgcmV0dXJuIGltZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VHJ1c3RlZEh0bWwoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHRXaW5kb3cgPSB3aW5kb3cgYXMgdW5rbm93biBhcyBUcnVzdGVkVHlwZXNXaW5kb3c7XHJcbiAgICBpZiAodHRXaW5kb3cudHJ1c3RlZFR5cGVzKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBhIHBvbGljeSB0aGF0IGNhbiBjcmVhdGUgVHJ1c3RlZEhUTUwgdmFsdWVzXHJcbiAgICAgIC8vIGFmdGVyIHNhbml0aXppbmcgdGhlIGlucHV0IHN0cmluZ3Mgd2l0aCBET01QdXJpZnkgbGlicmFyeS5cclxuICAgICAgY29uc3Qgc2FuaXRpemVyID0gdHRXaW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnZm9vJywge1xyXG4gICAgICAgIGNyZWF0ZUhUTUw6IChpbnB1dCkgPT4gaW5wdXQsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHNhbml0aXplci5jcmVhdGVIVE1MKGh0bWwpIGFzIHVua25vd24gYXMgYW55OyAvLyBQdXRzIHRoZSBzYW5pdGl6ZWQgdmFsdWUgaW50byB0aGUgRE9NLlxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnRGcm9tSFRNTChodG1sU3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0cnVzdGVkSHRtbCA9IHRoaXMuZ2V0VHJ1c3RlZEh0bWwoaHRtbFN0cmluZy50cmltKCkpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IHRydXN0ZWRIdG1sO1xyXG5cclxuICAgIC8vIENoYW5nZSB0aGlzIHRvIGRpdi5jaGlsZE5vZGVzIHRvIHN1cHBvcnQgbXVsdGlwbGUgdG9wLWxldmVsIG5vZGVzXHJcbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcclxuICAgICAgaWYgKHRoaXMubGlua1NlcnZpY2UpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2VzQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPCB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2VzQ291bnQpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbmtTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlua1NlcnZpY2UucGFnZSA+IDEpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZSAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBpZD1cInNpZGViYXJDb250ZW50XCIgW3N0eWxlLnRvcF09XCJ0b3BcIj5cclxuICA8ZGl2ICN0aHVtYm5haWxWaWV3VGVtcGxhdGU+XHJcbiAgICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbVRodW1ibmFpbCA/IGN1c3RvbVRodW1ibmFpbCA6IGRlZmF1bHRUaHVtYm5haWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgaWQ9XCJ0aHVtYm5haWxWaWV3XCIgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIj48L2Rpdj5cclxuICA8ZGl2IGlkPVwib3V0bGluZVZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJhdHRhY2htZW50c1ZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJsYXllcnNWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUaHVtYm5haWw+XHJcbiAgPGEgY2xhc3M9XCJwZGYtdmlld2VyLXRlbXBsYXRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCIgZGF0YS1wYWdlLW51bWJlcj1cIlBBR0VfTlVNQkVSXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxJbWFnZVwiIGFsdD1cIm1pbmlhdHVyZSBvZiB0aGUgcGFnZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==