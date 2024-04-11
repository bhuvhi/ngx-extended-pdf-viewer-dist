import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["defaultThumbnail"];
function PdfSidebarContentComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6)(1, "div", 7);
    i0.ɵɵelement(2, "img", 8);
    i0.ɵɵelementEnd()();
} }
const THUMBNAIL_CANVAS_BORDER_WIDTH = 1; // one pixel
export class PdfSidebarContentComponent {
    customThumbnail;
    hideSidebarToolbar = false;
    mobileFriendlyZoomScale = 1.0;
    defaultThumbnail;
    linkService;
    thumbnailDrawn = new EventEmitter();
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
    constructor() {
        if (typeof window !== 'undefined') {
            window.pdfThumbnailGeneratorReady = () => this.pdfThumbnailGeneratorReady();
            window.pdfThumbnailGenerator = (pdfThumbnailView, linkService, id, container, thumbPageTitlePromiseOrPageL10nArgs) => this.createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromiseOrPageL10nArgs);
        }
    }
    ngOnDestroy() {
        this.linkService = undefined;
    }
    pdfThumbnailGeneratorReady() {
        if (!this.defaultThumbnail) {
            return false;
        }
        const t = this.defaultThumbnail.elementRef.nativeElement;
        return !!t && !!t.innerHTML && t.innerHTML.length > 0;
    }
    createThumbnail(pdfThumbnailView, linkService, id, container, thumbPageTitlePromiseOrPageL10nArgs) {
        this.linkService = linkService;
        const template = this.customThumbnail ?? this.defaultThumbnail;
        const view = template.createEmbeddedView(null);
        const newElement = view.rootNodes[0];
        newElement.classList.remove('pdf-viewer-template');
        const anchor = newElement;
        anchor.href = linkService.getAnchorUrl(`#page=${id}`);
        anchor.setAttribute('data-l10n-id', 'pdfjs-thumb-page-title');
        anchor.setAttribute('data-l10n-args', thumbPageTitlePromiseOrPageL10nArgs);
        this.replacePageNuberEverywhere(newElement, id.toString());
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
    replacePageNuberEverywhere(element, pageNumber) {
        if (element.attributes) {
            Array.from(element.attributes).forEach((attr) => {
                if (attr.value.includes('PAGE_NUMBER')) {
                    attr.value = attr.value.replace('PAGE_NUMBER', pageNumber);
                }
            });
        }
        element.childNodes.forEach((child) => {
            if (child.nodeType === Node.ELEMENT_NODE) {
                this.replacePageNuberEverywhere(child, pageNumber);
            }
            else if (child.nodeType === Node.TEXT_NODE) {
                if (child.nodeValue?.includes('PAGE_NUMBER')) {
                    child.nodeValue = child.nodeValue.replace('PAGE_NUMBER', pageNumber);
                }
            }
        });
    }
    /** @nocollapse */ static ɵfac = function PdfSidebarContentComponent_Factory(t) { return new (t || PdfSidebarContentComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfSidebarContentComponent, selectors: [["pdf-sidebar-content"]], viewQuery: function PdfSidebarContentComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5, TemplateRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.defaultThumbnail = _t.first);
        } }, inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, decls: 7, vars: 2, consts: [["defaultThumbnail", ""], ["id", "sidebarContent"], ["id", "thumbnailView", 3, "keydown"], ["id", "outlineView", 1, "hidden"], ["id", "attachmentsView", 1, "hidden"], ["id", "layersView", 1, "hidden"], [1, "pdf-viewer-template"], ["data-page-number", "PAGE_NUMBER", 1, "thumbnail"], ["alt", "miniature of the page", 1, "thumbnailImage"]], template: function PdfSidebarContentComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵlistener("keydown", function PdfSidebarContentComponent_Template_div_keydown_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onKeyDown($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "div", 3)(3, "div", 4)(4, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, PdfSidebarContentComponent_ng_template_5_Template, 3, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵstyleProp("top", ctx.top);
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfSidebarContentComponent, [{
        type: Component,
        args: [{ selector: 'pdf-sidebar-content', template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"PAGE_NUMBER\">\r\n      <img class=\"thumbnailImage\" alt=\"miniature of the page\" />\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n" }]
    }], () => [], { customThumbnail: [{
            type: Input
        }], hideSidebarToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], defaultThumbnail: [{
            type: ViewChild,
            args: ['defaultThumbnail', { read: TemplateRef }]
        }], thumbnailDrawn: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfSidebarContentComponent, { className: "PdfSidebarContentComponent", filePath: "lib\\sidebar\\pdf-sidebar\\pdf-sidebar-content\\pdf-sidebar-content.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0lDU3RHLEFBREYsNEJBQStCLGFBQ3lCO0lBQ3BELHlCQUEwRDtJQUU5RCxBQURFLGlCQUFNLEVBQ0o7O0FESU4sTUFBTSw2QkFBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO0FBT3JELE1BQU0sT0FBTywwQkFBMEI7SUFFOUIsZUFBZSxDQUErQjtJQUc5QyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFHM0IsdUJBQXVCLEdBQUcsR0FBRyxDQUFDO0lBRzlCLGdCQUFnQixDQUFvQjtJQUVuQyxXQUFXLENBQTZCO0lBR3pDLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBMEIsQ0FBQztJQUVuRSxJQUFXLEdBQUc7UUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQ3hDLElBQUksR0FBRyxLQUFLLEVB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QUR4QixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsZ0JBQWdCO2tCQUR0QixTQUFTO21CQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtZQU03QyxjQUFjO2tCQURwQixNQUFNOztrRkFmSSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmRlY2xhcmUgY2xhc3MgUERGVGh1bWJuYWlsVmlldyB7XHJcbiAgYW5jaG9yOiBIVE1MQW5jaG9yRWxlbWVudDtcclxuICBkaXY6IEhUTUxFbGVtZW50O1xyXG4gIHJpbmc6IEhUTUxFbGVtZW50O1xyXG4gIGNhbnZhc1dpZHRoOiBudW1iZXI7XHJcbiAgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmRlY2xhcmUgY2xhc3MgUERGTGlua1NlcnZpY2Uge1xyXG4gIHB1YmxpYyBwYWdlOiBudW1iZXI7XHJcbiAgcHVibGljIHBhZ2VzQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgZ2V0QW5jaG9yVXJsKHRhcmdldFVybDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUSFVNQk5BSUxfQ0FOVkFTX0JPUkRFUl9XSURUSCA9IDE7IC8vIG9uZSBwaXhlbFxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtc2lkZWJhci1jb250ZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBoaWRlU2lkZWJhclRvb2xiYXIgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxLjA7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RlZmF1bHRUaHVtYm5haWwnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgcHVibGljIGRlZmF1bHRUaHVtYm5haWwhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBwcml2YXRlIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xyXG5cclxuICBwdWJsaWMgZ2V0IHRvcCgpOiBzdHJpbmcge1xyXG4gICAgbGV0IHRvcCA9IDA7XHJcbiAgICBpZiAoIXRoaXMuaGlkZVNpZGViYXJUb29sYmFyKSB7XHJcbiAgICAgIHRvcCA9IDMyICogdGhpcy5tb2JpbGVGcmllbmRseVpvb21TY2FsZTtcclxuICAgICAgaWYgKHRvcCA9PT0gMzIpIHtcclxuICAgICAgICB0b3AgPSAzMzsgLy8gcHJldmVudCB0aGUgYm9yZGVyIG9mIHRoZSBzaWRlYmFyIHRvb2xiYXIgZnJvbSBiZWluZyBjdXQgb2ZmXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBgJHt0b3B9cHhgO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLnBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5ID0gKCkgPT4gdGhpcy5wZGZUaHVtYm5haWxHZW5lcmF0b3JSZWFkeSgpO1xyXG4gICAgICAod2luZG93IGFzIGFueSkucGRmVGh1bWJuYWlsR2VuZXJhdG9yID0gKFxyXG4gICAgICAgIHBkZlRodW1ibmFpbFZpZXc6IFBERlRodW1ibmFpbFZpZXcsXHJcbiAgICAgICAgbGlua1NlcnZpY2U6IGFueSxcclxuICAgICAgICBpZDogbnVtYmVyLFxyXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXHJcbiAgICAgICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlT3JQYWdlTDEwbkFyZ3M6IHN0cmluZ1xyXG4gICAgICApID0+IHRoaXMuY3JlYXRlVGh1bWJuYWlsKHBkZlRodW1ibmFpbFZpZXcsIGxpbmtTZXJ2aWNlLCBpZCwgY29udGFpbmVyLCB0aHVtYlBhZ2VUaXRsZVByb21pc2VPclBhZ2VMMTBuQXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpbmtTZXJ2aWNlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHBkZlRodW1ibmFpbEdlbmVyYXRvclJlYWR5KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmRlZmF1bHRUaHVtYm5haWwpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdCA9IHRoaXMuZGVmYXVsdFRodW1ibmFpbC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICByZXR1cm4gISF0ICYmICEhdC5pbm5lckhUTUwgJiYgdC5pbm5lckhUTUwubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJuYWlsKFxyXG4gICAgcGRmVGh1bWJuYWlsVmlldzogUERGVGh1bWJuYWlsVmlldyxcclxuICAgIGxpbmtTZXJ2aWNlOiBQREZMaW5rU2VydmljZSxcclxuICAgIGlkOiBudW1iZXIsXHJcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxyXG4gICAgdGh1bWJQYWdlVGl0bGVQcm9taXNlT3JQYWdlTDEwbkFyZ3M6IHN0cmluZ1xyXG4gICk6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQge1xyXG4gICAgdGhpcy5saW5rU2VydmljZSA9IGxpbmtTZXJ2aWNlO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmN1c3RvbVRodW1ibmFpbCA/PyB0aGlzLmRlZmF1bHRUaHVtYm5haWw7XHJcbiAgICBjb25zdCB2aWV3ID0gdGVtcGxhdGUuY3JlYXRlRW1iZWRkZWRWaWV3KG51bGwpO1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IHZpZXcucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgbmV3RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwZGYtdmlld2VyLXRlbXBsYXRlJyk7XHJcblxyXG4gICAgY29uc3QgYW5jaG9yID0gbmV3RWxlbWVudCBhcyBIVE1MQW5jaG9yRWxlbWVudDtcclxuICAgIGFuY2hvci5ocmVmID0gbGlua1NlcnZpY2UuZ2V0QW5jaG9yVXJsKGAjcGFnZT0ke2lkfWApO1xyXG5cclxuICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoJ2RhdGEtbDEwbi1pZCcsICdwZGZqcy10aHVtYi1wYWdlLXRpdGxlJyk7XHJcbiAgICBhbmNob3Iuc2V0QXR0cmlidXRlKCdkYXRhLWwxMG4tYXJncycsIHRodW1iUGFnZVRpdGxlUHJvbWlzZU9yUGFnZUwxMG5BcmdzKTtcclxuXHJcbiAgICB0aGlzLnJlcGxhY2VQYWdlTnViZXJFdmVyeXdoZXJlKG5ld0VsZW1lbnQsIGlkLnRvU3RyaW5nKCkpO1xyXG5cclxuICAgIGFuY2hvci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBsaW5rU2VydmljZS5wYWdlID0gaWQ7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBwZGZUaHVtYm5haWxWaWV3LmFuY2hvciA9IGFuY2hvcjtcclxuXHJcbiAgICBjb25zdCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBuZXdFbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcclxuICAgIHBkZlRodW1ibmFpbFZpZXcuZGl2ID0gbmV3RWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aHVtYm5haWwnKVswXSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgdGh1bWJuYWlsRHJhd25FdmVudDogUGRmVGh1bWJuYWlsRHJhd25FdmVudCA9IHtcclxuICAgICAgdGh1bWJuYWlsOiBuZXdFbGVtZW50LFxyXG4gICAgICBjb250YWluZXI6IGNvbnRhaW5lcixcclxuICAgICAgcGFnZUlkOiBpZCxcclxuICAgIH07XHJcbiAgICB0aGlzLnRodW1ibmFpbERyYXduLmVtaXQodGh1bWJuYWlsRHJhd25FdmVudCk7XHJcbiAgICByZXR1cm4gaW1nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpbmtTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQubWV0YUtleSkge1xyXG4gICAgICAgICAgdGhpcy5saW5rU2VydmljZS5wYWdlID0gdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5rU2VydmljZS5wYWdlIDwgdGhpcy5saW5rU2VydmljZS5wYWdlc0NvdW50KSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgKyAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xyXG4gICAgICBpZiAodGhpcy5saW5rU2VydmljZSkge1xyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkpIHtcclxuICAgICAgICAgIHRoaXMubGlua1NlcnZpY2UucGFnZSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgPSB0aGlzLmxpbmtTZXJ2aWNlLnBhZ2UgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcGxhY2VQYWdlTnViZXJFdmVyeXdoZXJlKGVsZW1lbnQ6IEVsZW1lbnQsIHBhZ2VOdW1iZXI6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKGVsZW1lbnQuYXR0cmlidXRlcykge1xyXG4gICAgICBBcnJheS5mcm9tKGVsZW1lbnQuYXR0cmlidXRlcykuZm9yRWFjaCgoYXR0cikgPT4ge1xyXG4gICAgICAgIGlmIChhdHRyLnZhbHVlLmluY2x1ZGVzKCdQQUdFX05VTUJFUicpKSB7XHJcbiAgICAgICAgICBhdHRyLnZhbHVlID0gYXR0ci52YWx1ZS5yZXBsYWNlKCdQQUdFX05VTUJFUicsIHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgIGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcclxuICAgICAgICB0aGlzLnJlcGxhY2VQYWdlTnViZXJFdmVyeXdoZXJlKGNoaWxkIGFzIEVsZW1lbnQsIHBhZ2VOdW1iZXIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgIGlmIChjaGlsZC5ub2RlVmFsdWU/LmluY2x1ZGVzKCdQQUdFX05VTUJFUicpKSB7XHJcbiAgICAgICAgICBjaGlsZC5ub2RlVmFsdWUgPSBjaGlsZC5ub2RlVmFsdWUucmVwbGFjZSgnUEFHRV9OVU1CRVInLCBwYWdlTnVtYmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGlkPVwic2lkZWJhckNvbnRlbnRcIiBbc3R5bGUudG9wXT1cInRvcFwiPlxyXG4gIDxkaXYgaWQ9XCJ0aHVtYm5haWxWaWV3XCIgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIj48L2Rpdj5cclxuICA8ZGl2IGlkPVwib3V0bGluZVZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJhdHRhY2htZW50c1ZpZXdcIiBjbGFzcz1cImhpZGRlblwiPjwvZGl2PlxyXG4gIDxkaXYgaWQ9XCJsYXllcnNWaWV3XCIgY2xhc3M9XCJoaWRkZW5cIj48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUaHVtYm5haWw+XHJcbiAgPGEgY2xhc3M9XCJwZGYtdmlld2VyLXRlbXBsYXRlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGh1bWJuYWlsXCIgZGF0YS1wYWdlLW51bWJlcj1cIlBBR0VfTlVNQkVSXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJ0aHVtYm5haWxJbWFnZVwiIGFsdD1cIm1pbmlhdHVyZSBvZiB0aGUgcGFnZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2E+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==