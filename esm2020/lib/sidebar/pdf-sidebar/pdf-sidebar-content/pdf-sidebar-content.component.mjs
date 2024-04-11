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
        args: [{ selector: 'pdf-sidebar-content', template: "<div id=\"sidebarContent\" [style.top]=\"top\">\n  <div #thumbnailViewTemplate>\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\n  </div>\n\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\n  <div id=\"outlineView\" class=\"hidden\"></div>\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\n  <div id=\"layersView\" class=\"hidden\"></div>\n</div>\n\n<ng-template #defaultThumbnail>\n  <a class=\"pdf-viewer-template\">\n    <div class=\"thumbnail\" data-page-number=\"PAGE_NUMBER\">\n      <img class=\"thumbnailImage\" alt=\"miniature of the page\" />\n    </div>\n  </a>\n</ng-template>\n", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0VsSCxvR0FBa0c7OztJQVVwRyw0QkFBK0IsYUFBQTtJQUUzQiwwQkFBMEQ7SUFDNUQsaUJBQU0sRUFBQTs7O0FERVYsTUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBT3JELE1BQU0sT0FBTywwQkFBMEI7SUE2QnJDO1FBeEJPLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUczQiw0QkFBdUIsR0FBRyxHQUFHLENBQUM7UUFROUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQWNqRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNoQyxNQUFjLENBQUMsMEJBQTBCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEYsTUFBYyxDQUFDLHFCQUFxQixHQUFHLENBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1YsU0FBeUIsRUFDekIscUJBQXND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QztpQkFDbkQ7Z0JBQ0QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzt1SEExSlUsMEJBQTBCOzRHQUExQiwwQkFBMEI7Ozs7Ozs7UUN4QnZDLDhCQUEyQyxtQkFBQTtRQUV2Qyx5RkFBa0c7UUFDcEcsaUJBQU07UUFFTiw4QkFBc0Q7UUFBOUIsOEdBQVcscUJBQWlCLElBQUM7UUFBQyxpQkFBTTtRQUM1RCx5QkFBMkMsYUFBQSxhQUFBO1FBRzdDLGlCQUFNO1FBRU4sNEhBTWM7OztRQWpCVyw4QkFBaUI7UUFFekIsZUFBc0U7UUFBdEUsa0ZBQXNFOzt1RkRzQjFFLDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNFLHFCQUFxQjtzQ0FNeEIsZUFBZTtrQkFEckIsS0FBSztZQUlDLGtCQUFrQjtrQkFEeEIsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLHFCQUFxQjtrQkFEM0IsU0FBUzttQkFBQyx1QkFBdUI7WUFNM0IsY0FBYztrQkFEcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRydXN0ZWRUeXBlc1dpbmRvdyB9IGZyb20gJ3RydXN0ZWQtdHlwZXMvbGliJztcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XG5kZWNsYXJlIGNsYXNzIFBERlRodW1ibmFpbFZpZXcge1xuICBhbmNob3I6IEhUTUxBbmNob3JFbGVtZW50O1xuICBkaXY6IEhUTUxFbGVtZW50O1xuICByaW5nOiBIVE1MRWxlbWVudDtcbiAgY2FudmFzV2lkdGg6IG51bWJlcjtcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XG59XG5cbmRlY2xhcmUgY2xhc3MgUERGTGlua1NlcnZpY2Uge1xuICBwdWJsaWMgcGFnZTogbnVtYmVyO1xuICBwdWJsaWMgcGFnZXNDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgZ2V0QW5jaG9yVXJsKHRhcmdldFVybDogc3RyaW5nKTogc3RyaW5nO1xufVxuXG5jb25zdCBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSCA9IDE7IC8vIG9uZSBwaXhlbFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtc2lkZWJhci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoaWRlU2lkZWJhclRvb2xiYXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxLjA7XG5cbiAgQFZpZXdDaGlsZCgndGh1bWJuYWlsVmlld1RlbXBsYXRlJylcbiAgcHVibGljIHRodW1ibmFpbFZpZXdUZW1wbGF0ZTogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSB8IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xuXG4gIHB1YmxpYyBnZXQgdG9wKCk6IHN0cmluZyB7XG4gICAgbGV0IHRvcCA9IDA7XG4gICAgaWYgKCF0aGlzLmhpZGVTaWRlYmFyVG9vbGJhcikge1xuICAgICAgdG9wID0gMzIgKiB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlO1xuICAgICAgaWYgKHRvcCA9PT0gMzIpIHtcbiAgICAgICAgdG9wID0gMzM7IC8vIHByZXZlbnQgdGhlIGJvcmRlciBvZiB0aGUgc2lkZWJhciB0b29sYmFyIGZyb20gYmVpbmcgY3V0IG9mZlxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7dG9wfXB4YDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5ID0gKCkgPT4gdGhpcy5wZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpO1xuICAgICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvciA9IChcbiAgICAgICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcbiAgICAgICAgbGlua1NlcnZpY2U6IGFueSxcbiAgICAgICAgaWQ6IG51bWJlcixcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlOiBQcm9taXNlPHN0cmluZz5cbiAgICAgICkgPT4gdGhpcy5jcmVhdGVUaHVtYm5haWwocGRmVGh1bWJuYWlsVmlldywgbGlua1NlcnZpY2UsIGlkLCBjb250YWluZXIsIHRodW1iUGFnZVRpdGxlUHJvbWlzZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubGlua1NlcnZpY2UgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgcGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB0ID0gdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICByZXR1cm4gISF0ICYmICEhdC5pbm5lckhUTUwgJiYgdC5pbm5lckhUTUwubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJuYWlsKFxuICAgIHBkZlRodW1ibmFpbFZpZXc6IFBERlRodW1ibmFpbFZpZXcsXG4gICAgbGlua1NlcnZpY2U6IFBERkxpbmtTZXJ2aWNlLFxuICAgIGlkOiBudW1iZXIsXG4gICAgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxuICApOiBIVE1MSW1hZ2VFbGVtZW50IHwgdW5kZWZpbmVkIHtcbiAgICB0aGlzLmxpbmtTZXJ2aWNlID0gbGlua1NlcnZpY2U7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZTtcbiAgICAvLyBnZXQgdGhlIGlubmVyIEhUTUwgd2l0aG91dCB0aGUgYXR0cmlidXRlcyBhbmQgY2xhc3NlcyBhZGRlZCBieSBBbmd1bGFyXG4gICAgY29uc3QgaW5uZXIgPSB0ZW1wbGF0ZS5uYXRpdmVFbGVtZW50LmlubmVySFRNTFxuICAgICAgLnNwbGl0KC9fbmdcXHcrLVxcdystXFx3Kz1cIlwiL2cpXG4gICAgICAuam9pbignJylcbiAgICAgIC5zcGxpdCgvbmctXFx3Ky1cXHcrL2cpXG4gICAgICAuam9pbignJylcbiAgICAgIC5zcGxpdCgvPCEtLVtcXHNcXFNdKj8tLT4vZylcbiAgICAgIC5qb2luKCcnKTtcblxuICAgIGNvbnN0IGJvcmRlckFkanVzdG1lbnQgPSAyICogVEhVTUJOQUlMX0NBTlZBU19CT1JERVJfV0lEVEg7XG5cbiAgICBjb25zdCB3aWR0aE9mUmluZyA9IGAke3BkZlRodW1ibmFpbFZpZXcuY2FudmFzV2lkdGggKyBib3JkZXJBZGp1c3RtZW50fXB4YDtcbiAgICBjb25zdCBoZWlnaHRPZlJpbmcgPSBgJHtwZGZUaHVtYm5haWxWaWV3LmNhbnZhc0hlaWdodCArIGJvcmRlckFkanVzdG1lbnR9cHhgO1xuXG4gICAgY29uc3QgbmV3SHRtbCA9IGlubmVyLnNwbGl0KCdXSURUSF9PRl9SSU5HJykuam9pbih3aWR0aE9mUmluZykuc3BsaXQoJ0hFSUdIVF9PRl9SSU5HJykuam9pbihoZWlnaHRPZlJpbmcpLnNwbGl0KCdQQUdFX05VTUJFUicpLmpvaW4oaWQpO1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnRGcm9tSFRNTChuZXdIdG1sKTtcbiAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BkZi12aWV3ZXItdGVtcGxhdGUnKTtcblxuICAgIGNvbnN0IGFuY2hvciA9IG5ld0VsZW1lbnQgYXMgSFRNTEFuY2hvckVsZW1lbnQ7XG4gICAgYW5jaG9yLmhyZWYgPSBsaW5rU2VydmljZS5nZXRBbmNob3JVcmwoYCNwYWdlPSR7aWR9YCk7XG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlLnRoZW4oKG1zZykgPT4ge1xuICAgICAgYW5jaG9yLnRpdGxlID0gbXNnO1xuICAgIH0pO1xuICAgIGFuY2hvci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbGlua1NlcnZpY2UucGFnZSA9IGlkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgcGRmVGh1bWJuYWlsVmlldy5hbmNob3IgPSBhbmNob3I7XG5cbiAgICBjb25zdCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcbiAgICBwZGZUaHVtYm5haWxWaWV3LmRpdiA9IG5ld0VsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGh1bWJuYWlsJylbMF0gYXMgSFRNTEVsZW1lbnQ7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XG5cbiAgICBjb25zdCB0aHVtYm5haWxEcmF3bkV2ZW50OiBQZGZUaHVtYm5haWxEcmF3bkV2ZW50ID0ge1xuICAgICAgdGh1bWJuYWlsOiBuZXdFbGVtZW50LFxuICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICBwYWdlSWQ6IGlkLFxuICAgIH07XG4gICAgdGhpcy50aHVtYm5haWxEcmF3bi5lbWl0KHRodW1ibmFpbERyYXduRXZlbnQpO1xuICAgIHJldHVybiBpbWc7XG4gIH1cblxuICBwcml2YXRlIGdldFRydXN0ZWRIdG1sKGh0bWw6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgY29uc3QgdHRXaW5kb3cgPSB3aW5kb3cgYXMgdW5rbm93biBhcyBUcnVzdGVkVHlwZXNXaW5kb3c7XG4gICAgaWYgKHR0V2luZG93LnRydXN0ZWRUeXBlcykge1xuICAgICAgLy8gQ3JlYXRlIGEgcG9saWN5IHRoYXQgY2FuIGNyZWF0ZSBUcnVzdGVkSFRNTCB2YWx1ZXNcbiAgICAgIC8vIGFmdGVyIHNhbml0aXppbmcgdGhlIGlucHV0IHN0cmluZ3Mgd2l0aCBET01QdXJpZnkgbGlicmFyeS5cbiAgICAgIGNvbnN0IHNhbml0aXplciA9IHR0V2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ2ZvbycsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogKGlucHV0KSA9PiBpbnB1dCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc2FuaXRpemVyLmNyZWF0ZUhUTUwoaHRtbCkgYXMgdW5rbm93biBhcyBhbnk7IC8vIFB1dHMgdGhlIHNhbml0aXplZCB2YWx1ZSBpbnRvIHRoZSBET00uXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudEZyb21IVE1MKGh0bWxTdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdHJ1c3RlZEh0bWwgPSB0aGlzLmdldFRydXN0ZWRIdG1sKGh0bWxTdHJpbmcudHJpbSgpKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gdHJ1c3RlZEh0bWw7XG5cbiAgICAvLyBDaGFuZ2UgdGhpcyB0byBkaXYuY2hpbGROb2RlcyB0byBzdXBwb3J0IG11bHRpcGxlIHRvcC1sZXZlbCBub2Rlc1xuICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcbiAgfVxuXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGlmICh0aGlzLmxpbmtTZXJ2aWNlKSB7XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2VzQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlIDwgdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50KSB7XG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlICsgMTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gMTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPiAxKSB7XG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBpZD1cInNpZGViYXJDb250ZW50XCIgW3N0eWxlLnRvcF09XCJ0b3BcIj5cbiAgPGRpdiAjdGh1bWJuYWlsVmlld1RlbXBsYXRlPlxuICAgIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tVGh1bWJuYWlsID8gY3VzdG9tVGh1bWJuYWlsIDogZGVmYXVsdFRodW1ibmFpbFwiPjwvbmctY29udGVudD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBpZD1cInRodW1ibmFpbFZpZXdcIiAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiPjwvZGl2PlxuICA8ZGl2IGlkPVwib3V0bGluZVZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuICA8ZGl2IGlkPVwiYXR0YWNobWVudHNWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cbiAgPGRpdiBpZD1cImxheWVyc1ZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRodW1ibmFpbD5cbiAgPGEgY2xhc3M9XCJwZGYtdmlld2VyLXRlbXBsYXRlXCI+XG4gICAgPGRpdiBjbGFzcz1cInRodW1ibmFpbFwiIGRhdGEtcGFnZS1udW1iZXI9XCJQQUdFX05VTUJFUlwiPlxuICAgICAgPGltZyBjbGFzcz1cInRodW1ibmFpbEltYWdlXCIgYWx0PVwibWluaWF0dXJlIG9mIHRoZSBwYWdlXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9hPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==