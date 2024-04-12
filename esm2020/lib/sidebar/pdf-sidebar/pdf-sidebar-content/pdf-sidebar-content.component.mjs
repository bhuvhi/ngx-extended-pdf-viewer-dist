import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
PdfSidebarContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfSidebarContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSidebarContentComponent, selector: "pdf-sidebar-content", inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, viewQueries: [{ propertyName: "thumbnailViewTemplate", first: true, predicate: ["thumbnailViewTemplate"], descendants: true }], ngImport: i0, template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"PAGE_NUMBER\">\r\n      <img class=\"thumbnailImage\" alt=\"miniature of the page\" />\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""], directives: [{ type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-sidebar-content', template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"PAGE_NUMBER\">\r\n      <img class=\"thumbnailImage\" alt=\"miniature of the page\" />\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""] }]
        }], ctorParameters: function () { return []; }, propDecorators: { customThumbnail: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBZSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQWlCdEgsTUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBT3JELE1BQU0sT0FBTywwQkFBMEI7SUE2QnJDO1FBeEJPLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUczQiw0QkFBdUIsR0FBRyxHQUFHLENBQUM7UUFROUIsbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztRQWNqRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNoQyxNQUFjLENBQUMsMEJBQTBCLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEYsTUFBYyxDQUFDLHFCQUFxQixHQUFHLENBQ3RDLGdCQUFrQyxFQUNsQyxXQUFnQixFQUNoQixFQUFVLEVBQ1YsU0FBeUIsRUFDekIscUJBQXNDLEVBQ3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsU0FBUyxF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OzJHQUExQiwwQkFBMEIsd1hDeEJ2Qyx1c0JBa0JBOzJGRE1hLDBCQUEwQjtrQkFMdEMsU0FBUzsrQkFDRSxxQkFBcUI7MEVBTXhCLGVBQWU7c0JBRHJCLEtBQUs7Z0JBSUMsa0JBQWtCO3NCQUR4QixLQUFLO2dCQUlDLHVCQUF1QjtzQkFEN0IsS0FBSztnQkFJQyxxQkFBcUI7c0JBRDNCLFNBQVM7dUJBQUMsdUJBQXVCO2dCQU0zQixjQUFjO3NCQURwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcnVzdGVkVHlwZXNXaW5kb3cgfSBmcm9tICd0cnVzdGVkLXR5cGVzL2xpYic7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmRlY2xhcmUgY2xhc3MgUERGVGh1bWJuYWlsVmlldyB7XHJcbiAgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudDtcclxuICBkaXY6IEhUTUxFbGVtZW50O1xyXG4gIHJpbmc6IEhUTUxFbGVtZW50O1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmRlY2xhcmUgY2xhc3MgUERGTGlua1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XHJcbiAgcHVibGljIHBhZ2VzQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgZ2V0QW5jaG9yVXJsKHRhcmdldFVybDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSCA9IDE7IC8vIG9uZSBwaXhlbFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2lkZWJhci1jb250ZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBoaWRlU2lkZWJhclRvb2xiYXIgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxLjA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RodW1ibmFpbFZpZXdUZW1wbGF0ZScpXHJcbiAgcHVibGljIHRodW1ibmFpbFZpZXdUZW1wbGF0ZTogRWxlbWVudFJlZjtcclxuXHJcbiAgcHJpdmF0ZSBsaW5rU2VydmljZTogUERGTGlua1NlcnZpY2UgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcclxuXHJcbiAgcHVibGljIGdldCB0b3AoKTogc3RyaW5nIHtcclxuICAgIGxldCB0b3AgPSAwO1xyXG4gICAgaWYgKCF0aGlzLmhpZGVTaWRlYmFyVG9vbGJhcikge1xyXG4gICAgICB0b3AgPSAzMiAqIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGU7XHJcbiAgICAgIGlmICh0b3AgPT09IDMyKSB7XHJcbiAgICAgICAgdG9wID0gMzM7IC8vIHByZXZlbnQgdGhlIGJvcmRlciBvZiB0aGUgc2lkZWJhciB0b29sYmFyIGZyb20gYmVpbmcgY3V0IG9mZlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7dG9wfXB4YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KS5wZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSA9ICgpID0+IHRoaXMucGRmVGh1bWJuYWlsR2VuZXJhdG9yUmVhZHkoKTtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvciA9IChcclxuICAgICAgICBwZGZUaHVtYm5haWxWaWV3OiBQREZUaHVtYm5haWxWaWV3LFxyXG4gICAgICAgIGxpbmtTZXJ2aWNlOiBhbnksXHJcbiAgICAgICAgaWQ6IG51bWJlcixcclxuICAgICAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgICAgIHRodW1iUGFnZVRpdGxlUHJvbWlzZTogUHJvbWlzZTxzdHJpbmc+XHJcbiAgICAgICkgPT4gdGhpcy5jcmVhdGVUaHVtYm5haWwocGRmVGh1bWJuYWlsVmlldywgbGlua1NlcnZpY2UsIGlkLCBjb250YWluZXIsIHRodW1iUGFnZVRpdGxlUHJvbWlzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ID0gdGhpcy50aHVtYm5haWxWaWV3VGVtcGxhdGUubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcclxuICAgIHJldHVybiAhIXQgJiYgISF0LmlubmVySFRNTCAmJiB0LmlubmVySFRNTC5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVUaHVtYm5haWwoXHJcbiAgICBwZGZUaHVtYm5haWxWaWV3OiBQREZUaHVtYm5haWxWaWV3LFxyXG4gICAgbGlua1NlcnZpY2U6IFBERkxpbmtTZXJ2aWNlLFxyXG4gICAgaWQ6IG51bWJlcixcclxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICB0aHVtYlBhZ2VUaXRsZVByb21pc2U6IFByb21pc2U8c3RyaW5nPlxyXG4gICk6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgdGhpcy5saW5rU2VydmljZSA9IGxpbmtTZXJ2aWNlO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLnRodW1ibmFpbFZpZXdUZW1wbGF0ZTtcclxuICAgIC8vIGdldCB0aGUgaW5uZXIgSFRNTCB3aXRob3V0IHRoZSBhdHRyaWJ1dGVzIGFuZCBjbGFzc2VzIGFkZGVkIGJ5IEFuZ3VsYXJcclxuICAgIGNvbnN0IGlubmVyID0gdGVtcGxhdGUubmF0aXZlRWxlbWVudC5pbm5lckhUTUxcclxuICAgICAgLnNwbGl0KC9fbmdcXHcrLVxcdystXFx3Kz1cIlwiL2cpXHJcbiAgICAgIC5qb2luKCcnKVxyXG4gICAgICAuc3BsaXQoL25nLVxcdystXFx3Ky9nKVxyXG4gICAgICAuam9pbignJylcclxuICAgICAgLnNwbGl0KC88IS0tW1xcc1xcU10qPy0tPi9nKVxyXG4gICAgICAuam9pbignJyk7XHJcblxyXG4gICAgY29uc3QgYm9yZGVyQWRqdXN0bWVudCA9IDIgKiBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSDtcclxuXHJcbiAgICBjb25zdCB3aWR0aE9mUmluZyA9IGAke3BkZlRodW1ibmFpbFZpZXcuY2FudmFzV2lkdGggKyBib3JkZXJBZGp1c3RtZW50fXB4YDtcclxuICAgIGNvbnN0IGhlaWdodE9mUmluZyA9IGAke3BkZlRodW1ibmFpbFZpZXcuY2FudmFzSGVpZ2h0ICsgYm9yZGVyQWRqdXN0bWVudH1weGA7XHJcblxyXG4gICAgY29uc3QgbmV3SHRtbCA9IGlubmVyLnNwbGl0KCdXSURUSF9PRl9SSU5HJykuam9pbih3aWR0aE9mUmluZykuc3BsaXQoJ0hFSUdIVF9PRl9SSU5HJykuam9pbihoZWlnaHRPZlJpbmcpLnNwbGl0KCdQQUdFX05VTUJFUicpLmpvaW4oaWQpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHRoaXMuY3JlYXRlRWxlbWVudEZyb21IVE1MKG5ld0h0bWwpO1xyXG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwZGYtdmlld2VyLXRlbXBsYXRlJyk7XHJcblxyXG4gICAgY29uc3QgYW5jaG9yID0gbmV3RWxlbWVudCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgIGFuY2hvci5ocmVmID0gbGlua1NlcnZpY2UuZ2V0QW5jaG9yVXJsKGAjcGFnZT0ke2lkfWApO1xyXG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlLnRoZW4oKG1zZykgPT4ge1xyXG4gICAgICBhbmNob3IudGl0bGUgPSBtc2c7XHJcbiAgICB9KTtcclxuICAgIGFuY2hvci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBsaW5rU2VydmljZS5wYWdlID0gaWQ7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICBjb25zdCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcclxuICAgIHBkZlRodW1ibmFpbFZpZXcuZGl2ID0gbmV3RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aHVtYm5haWwnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgdGh1bWJuYWlsRHJhd25FdmVudDogUGRmVGh1bWJuYWlsRHJhd25FdmVudCA9IHtcclxuICAgICAgdGh1bWJuYWlsOiBuZXdFbGVtZW50LFxyXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgcGFnZUlkOiBpZCxcclxuICAgIH07XHJcbiAgICB0aGlzLnRodW1ibmFpbERyYXduLmVtaXQodGh1bWJuYWlsRHJhd25FdmVudCk7XHJcbiAgICByZXR1cm4gaW1nO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRUcnVzdGVkSHRtbChodG1sOiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIFRydXN0ZWRUeXBlc1dpbmRvdztcclxuICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMpIHtcclxuICAgICAgLy8gQ3JlYXRlIGEgcG9saWN5IHRoYXQgY2FuIGNyZWF0ZSBUcnVzdGVkSFRNTCB2YWx1ZXNcclxuICAgICAgLy8gYWZ0ZXIgc2FuaXRpemluZyB0aGUgaW5wdXQgc3RyaW5ncyB3aXRoIERPTVB1cmlmeSBsaWJyYXJ5LlxyXG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdmb28nLCB7XHJcbiAgICAgICAgY3JlYXRlSFRNTDogKGlucHV0KSA9PiBpbnB1dCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gc2FuaXRpemVyLmNyZWF0ZUhUTUwoaHRtbCkgYXMgdW5rbm93biBhcyBhbnk7IC8vIFB1dHMgdGhlIHNhbml0aXplZCB2YWx1ZSBpbnRvIHRoZSBET00uXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudEZyb21IVE1MKGh0bWxTdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRydXN0ZWRIdG1sID0gdGhpcy5nZXRUcnVzdGVkSHRtbChodG1sU3RyaW5nLnRyaW0oKSk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gdHJ1c3RlZEh0bWw7XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoaXMgdG8gZGl2LmNoaWxkTm9kZXMgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b3AtbGV2ZWwgbm9kZXNcclxuICAgIHJldHVybiBkaXYuZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IHRoaXMubGlua1NlcnZpY2UucGFnZXNDb3VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlua1NlcnZpY2UucGFnZSA8IHRoaXMubGlua1NlcnZpY2UucGFnZXNDb3VudCkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcpIHtcclxuICAgICAgaWYgKHRoaXMubGlua1NlcnZpY2UpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlID4gMSkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGlkPVwic2lkZWJhckNvbnRlbnRcIiBbc3R5bGUudG9wXT1cInRvcFwiPlxyXG4gIDxkaXYgI3RodW1ibmFpbFZpZXdUZW1wbGF0ZT5cclxuICAgIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tVGh1bWJuYWlsID8gY3VzdG9tVGh1bWJuYWlsIDogZGVmYXVsdFRodW1ibmFpbFwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBpZD1cInRodW1ibmFpbFZpZXdcIiAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJvdXRsaW5lVmlld1wiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbiAgPGRpdiBpZD1cImF0dGFjaG1lbnRzVmlld1wiIGNsYXNzPVwiaGlkZGVuXCI+PC9kaXY+XHJcbiAgPGRpdiBpZD1cImxheWVyc1ZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRodW1ibmFpbD5cclxuICA8YSBjbGFzcz1cInBkZi12aWV3ZXItdGVtcGxhdGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWxcIiBkYXRhLXBhZ2UtbnVtYmVyPVwiUEFHRV9OVU1CRVJcIj5cclxuICAgICAgPGltZyBjbGFzcz1cInRodW1ibmFpbEltYWdlXCIgYWx0PVwibWluaWF0dXJlIG9mIHRoZSBwYWdlXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvYT5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19