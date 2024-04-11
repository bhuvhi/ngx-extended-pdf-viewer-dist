import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ScrollModeType } from '../../options/pdf-viewer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-book-mode/pdf-book-mode.component";
import * as i3 from "../pdf-document-properties/pdf-document-properties.component";
import * as i4 from "../pdf-download/pdf-download.component";
import * as i5 from "../pdf-editor/pdf-editor.component";
import * as i6 from "../pdf-even-spread/pdf-even-spread.component";
import * as i7 from "../pdf-find-button/pdf-find-button.component";
import * as i8 from "../pdf-hand-tool/pdf-hand-tool.component";
import * as i9 from "../pdf-horizontal-scroll/pdf-horizontal-scroll.component";
import * as i10 from "../pdf-infinite-scroll/pdf-infinite-scroll.component";
import * as i11 from "../pdf-no-spread/pdf-no-spread.component";
import * as i12 from "../pdf-odd-spread/pdf-odd-spread.component";
import * as i13 from "../pdf-open-file/pdf-open-file.component";
import * as i14 from "../pdf-paging-area/pdf-paging-area.component";
import * as i15 from "../pdf-presentation-mode/pdf-presentation-mode.component";
import * as i16 from "../pdf-print/pdf-print.component";
import * as i17 from "../pdf-rotate-page-cw/pdf-rotate-page-cw.component";
import * as i18 from "../pdf-rotate-page-ccw/pdf-rotate-page-ccw.component";
import * as i19 from "../pdf-select-tool/pdf-select-tool.component";
import * as i20 from "../pdf-single-page-mode/pdf-single-page-mode.component";
import * as i21 from "../pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component";
import * as i22 from "../pdf-toggle-sidebar/pdf-toggle-sidebar.component";
import * as i23 from "../pdf-vertical-scroll-button/pdf-vertical-scroll-mode.component";
import * as i24 from "../pdf-wrapped-scroll-mode/pdf-wrapped-scroll-mode.component";
import * as i25 from "../pdf-zoom-toolbar/pdf-zoom-toolbar.component";
const _c0 = ["*"];
function PdfToolbarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
} }
function PdfToolbarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "pdf-toggle-sidebar", 9)(3, "pdf-find-button", 10)(4, "pdf-paging-area", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "pdf-zoom-toolbar", 12);
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "pdf-document-properties", 14)(8, "pdf-no-spread", 15)(9, "pdf-odd-spread", 15)(10, "pdf-even-spread", 15);
    i0.ɵɵelementStart(11, "pdf-single-page-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_single_page_mode_pageViewModeChange_11_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePageViewMode($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "pdf-vertical-scroll-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_vertical_scroll_mode_pageViewModeChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePageViewMode($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "pdf-horizontal-scroll", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_horizontal_scroll_pageViewModeChange_13_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePageViewMode($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "pdf-wrapped-scroll-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_wrapped_scroll_mode_pageViewModeChange_14_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePageViewMode($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "pdf-infinite-scroll", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_infinite_scroll_pageViewModeChange_15_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePageViewMode($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "pdf-book-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_book_mode_pageViewModeChange_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePageViewMode($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "pdf-hand-tool", 17)(18, "pdf-select-tool", 18)(19, "pdf-rotate-page-cw", 19)(20, "pdf-rotate-page-ccw", 20)(21, "pdf-presentation-mode", 21)(22, "pdf-open-file", 22)(23, "pdf-print", 23)(24, "pdf-download", 24)(25, "pdf-editor", 25)(26, "pdf-toggle-secondary-toolbar", 26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("show", ctx_r1.showSidebarButton)("sidebarVisible", ctx_r1.sidebarVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showFindButton", ctx_r1.showFindButton)("textLayer", ctx_r1.textLayer)("findbarVisible", ctx_r1.findbarVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showPagingButtons", ctx_r1.showPagingButtons);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showZoomButtons", ctx_r1.showZoomButtons)("zoomLevels", ctx_r1.zoomLevels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("show", ctx_r1.showPropertiesButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("scrollMode", ctx_r1.scrollMode)("show", ctx_r1.showSpreadButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("scrollMode", ctx_r1.scrollMode)("show", ctx_r1.showSpreadButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("scrollMode", ctx_r1.scrollMode)("show", ctx_r1.showSpreadButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r1.showSinglePageModeButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r1.showVerticalScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r1.showHorizontalScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r1.showWrappedScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r1.showInfiniteScrollButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r1.showBookModeButton)("pageViewMode", ctx_r1.pageViewMode)("scrollMode", ctx_r1.scrollMode);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showHandToolButton", ctx_r1.showHandToolButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showSelectToolButton", ctx_r1.showHandToolButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showRotateCwButton", ctx_r1.showRotateCwButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showRotateCcwButton", ctx_r1.showRotateCcwButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showPresentationModeButton", ctx_r1.showPresentationModeButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showOpenFileButton", ctx_r1.showOpenFileButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showPrintButton", ctx_r1.showPrintButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showDownloadButton", ctx_r1.showDownloadButton);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showDrawEditor", ctx_r1.showDrawEditor)("showHighlightEditor", ctx_r1.showHighlightEditor)("showTextEditor", ctx_r1.showTextEditor)("showStampEditor", ctx_r1.showStampEditor);
    i0.ɵɵadvance();
    i0.ɵɵproperty("showSecondaryToolbarButton", ctx_r1.showSecondaryToolbarButton);
} }
export class PdfToolbarComponent {
    elementRef;
    customToolbar;
    mobileFriendlyZoomScale = 1;
    primaryMenuVisible = true;
    showDownloadButton = true;
    showDrawEditor = false;
    showHighlightEditor = true;
    showTextEditor = false;
    showStampEditor = false;
    showFindButton = undefined;
    showHandToolButton = true;
    showOpenFileButton = true;
    showPrintButton = true;
    showPagingButtons = true;
    showPresentationModeButton = false;
    showRotateCwButton = true;
    showRotateCcwButton = true;
    showSecondaryToolbarButton = true;
    showSidebarButton = true;
    sidebarVisible = false;
    showZoomButtons = true;
    textLayer = undefined;
    toolbarMarginTop = '0px';
    toolbarWidth = '100%';
    zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    pageViewMode;
    pageViewModeChange = new EventEmitter();
    spread;
    scrollMode;
    showPropertiesButton = true;
    showSpreadButton = true;
    showSinglePageModeButton = true;
    showVerticalScrollButton = true;
    showHorizontalScrollButton = true;
    showWrappedScrollButton = true;
    showInfiniteScrollButton = true;
    showBookModeButton = true;
    onToolbarLoaded = new EventEmitter();
    findbarVisible = false;
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        this.onToolbarLoaded.emit(this.elementRef.nativeElement.getElementsByClassName('toolbar')[0]);
    }
    updatePageViewMode(pageViewMode) {
        if (pageViewMode) {
            this.pageViewModeChange.emit(pageViewMode);
            this.pageViewMode = pageViewMode;
        }
    }
    /** @nocollapse */ static ɵfac = function PdfToolbarComponent_Factory(t) { return new (t || PdfToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToolbarComponent, selectors: [["pdf-toolbar"]], inputs: { customToolbar: "customToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", primaryMenuVisible: "primaryMenuVisible", showDownloadButton: "showDownloadButton", showDrawEditor: "showDrawEditor", showHighlightEditor: "showHighlightEditor", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor", showFindButton: "showFindButton", showHandToolButton: "showHandToolButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showPagingButtons: "showPagingButtons", showPresentationModeButton: "showPresentationModeButton", showRotateCwButton: "showRotateCwButton", showRotateCcwButton: "showRotateCcwButton", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showZoomButtons: "showZoomButtons", textLayer: "textLayer", toolbarMarginTop: "toolbarMarginTop", toolbarWidth: "toolbarWidth", zoomLevels: "zoomLevels", pageViewMode: "pageViewMode", spread: "spread", scrollMode: "scrollMode", showPropertiesButton: "showPropertiesButton", showSpreadButton: "showSpreadButton", showSinglePageModeButton: "showSinglePageModeButton", showVerticalScrollButton: "showVerticalScrollButton", showHorizontalScrollButton: "showHorizontalScrollButton", showWrappedScrollButton: "showWrappedScrollButton", showInfiniteScrollButton: "showInfiniteScrollButton", showBookModeButton: "showBookModeButton", findbarVisible: "findbarVisible" }, outputs: { pageViewModeChange: "pageViewModeChange", onToolbarLoaded: "onToolbarLoaded" }, ngContentSelectors: _c0, decls: 8, vars: 11, consts: [["defaultToolbar", ""], [1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "show", "sidebarVisible"], [3, "showFindButton", "textLayer", "findbarVisible"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "show"], [3, "scrollMode", "show"], [3, "pageViewModeChange", "show", "pageViewMode", "scrollMode"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateCwButton"], [3, "showRotateCcwButton"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showDrawEditor", "showHighlightEditor", "showTextEditor", "showStampEditor"], [3, "showSecondaryToolbarButton"]], template: function PdfToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
            i0.ɵɵtemplate(2, PdfToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 3);
            i0.ɵɵelementStart(3, "div", 4)(4, "div", 5);
            i0.ɵɵelement(5, "div", 6);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(6, PdfToolbarComponent_ng_template_6_Template, 27, 46, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const defaultToolbar_r3 = i0.ɵɵreference(7);
            i0.ɵɵstyleProp("transform", "scale(" + ctx.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", ctx.toolbarWidth)("margin-top", ctx.toolbarMarginTop);
            i0.ɵɵclassProp("invisible", !ctx.primaryMenuVisible);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customToolbar ? ctx.customToolbar : defaultToolbar_r3);
        } }, dependencies: [i1.NgTemplateOutlet, i2.PdfBookModeComponent, i3.PdfDocumentPropertiesComponent, i4.PdfDownloadComponent, i5.PdfEditorComponent, i6.PdfEvenSpreadComponent, i7.PdfFindButtonComponent, i8.PdfHandToolComponent, i9.PdfHorizontalScrollComponent, i10.PdfInfiniteScrollComponent, i11.PdfNoSpreadComponent, i12.PdfOddSpreadComponent, i13.PdfOpenFileComponent, i14.PdfPagingAreaComponent, i15.PdfPresentationModeComponent, i16.PdfPrintComponent, i17.PdfRotatePageCwComponent, i18.PdfRotatePageCcwComponent, i19.PdfSelectToolComponent, i20.PdfSinglePageModeComponent, i21.PdfToggleSecondaryToolbarComponent, i22.PdfToggleSidebarComponent, i23.PdfVerticalScrollModeComponent, i24.PdfWrappedScrollModeComponent, i25.PdfZoomToolbarComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toolbar', template: "<div\r\n  class=\"toolbar\"\r\n  [class.invisible]=\"!primaryMenuVisible\"\r\n  [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n  [style.transformOrigin]=\"'left center'\"\r\n  [style.width]=\"toolbarWidth\"\r\n  [style.marginTop]=\"toolbarMarginTop\"\r\n>\r\n  <div id=\"toolbarContainer\">\r\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\r\n    <div id=\"loadingBar\">\r\n      <div class=\"progress\">\r\n        <div class=\"glimmer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultToolbar>\r\n  <div id=\"toolbarViewer\">\r\n    <div id=\"toolbarViewerLeft\">\r\n      <pdf-toggle-sidebar [show]=\"showSidebarButton\" [sidebarVisible]=\"sidebarVisible\"></pdf-toggle-sidebar>\r\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\" [findbarVisible]=\"findbarVisible\"></pdf-find-button>\r\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\r\n    </div>\r\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\r\n    <div id=\"toolbarViewerRight\">\r\n      <pdf-document-properties [show]=\"showPropertiesButton\"></pdf-document-properties>\r\n      <pdf-no-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-no-spread>\r\n      <pdf-odd-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-odd-spread>\r\n      <pdf-even-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-even-spread>\r\n      <pdf-single-page-mode\r\n        [show]=\"showSinglePageModeButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-single-page-mode>\r\n      <pdf-vertical-scroll-mode\r\n        [show]=\"showVerticalScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-vertical-scroll-mode>\r\n      <pdf-horizontal-scroll\r\n        [show]=\"showHorizontalScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-horizontal-scroll>\r\n      <pdf-wrapped-scroll-mode\r\n        [show]=\"showWrappedScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-wrapped-scroll-mode>\r\n      <pdf-infinite-scroll\r\n        [show]=\"showInfiniteScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-infinite-scroll>\r\n      <pdf-book-mode\r\n        [show]=\"showBookModeButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-book-mode>\r\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\r\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\r\n      <pdf-rotate-page-cw [showRotateCwButton]=\"showRotateCwButton\"> </pdf-rotate-page-cw>\r\n      <pdf-rotate-page-ccw [showRotateCcwButton]=\"showRotateCcwButton\"> </pdf-rotate-page-ccw>\r\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\r\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\r\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\r\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\r\n\r\n      <pdf-editor\r\n        [showDrawEditor]=\"showDrawEditor\"\r\n        [showHighlightEditor]=\"showHighlightEditor\"\r\n        [showTextEditor]=\"showTextEditor\"\r\n        [showStampEditor]=\"showStampEditor\"\r\n      ></pdf-editor>\r\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"> </pdf-toggle-secondary-toolbar>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], () => [{ type: i0.ElementRef }], { customToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], primaryMenuVisible: [{
            type: Input
        }], showDownloadButton: [{
            type: Input
        }], showDrawEditor: [{
            type: Input
        }], showHighlightEditor: [{
            type: Input
        }], showTextEditor: [{
            type: Input
        }], showStampEditor: [{
            type: Input
        }], showFindButton: [{
            type: Input
        }], showHandToolButton: [{
            type: Input
        }], showOpenFileButton: [{
            type: Input
        }], showPrintButton: [{
            type: Input
        }], showPagingButtons: [{
            type: Input
        }], showPresentationModeButton: [{
            type: Input
        }], showRotateCwButton: [{
            type: Input
        }], showRotateCcwButton: [{
            type: Input
        }], showSecondaryToolbarButton: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], sidebarVisible: [{
            type: Input
        }], showZoomButtons: [{
            type: Input
        }], textLayer: [{
            type: Input
        }], toolbarMarginTop: [{
            type: Input
        }], toolbarWidth: [{
            type: Input
        }], zoomLevels: [{
            type: Input
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }], spread: [{
            type: Input
        }], scrollMode: [{
            type: Input
        }], showPropertiesButton: [{
            type: Input
        }], showSpreadButton: [{
            type: Input
        }], showSinglePageModeButton: [{
            type: Input
        }], showVerticalScrollButton: [{
            type: Input
        }], showHorizontalScrollButton: [{
            type: Input
        }], showWrappedScrollButton: [{
            type: Input
        }], showInfiniteScrollButton: [{
            type: Input
        }], showBookModeButton: [{
            type: Input
        }], onToolbarLoaded: [{
            type: Output
        }], findbarVisible: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfToolbarComponent, { className: "PdfToolbarComponent", filePath: "lib\\toolbar\\pdf-toolbar\\pdf-toolbar.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFvQixjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNReEUsOEZBQTRGOzs7O0lBVzVGLEFBREYsOEJBQXdCLGFBQ007SUFHMUIsQUFEQSxBQURBLHdDQUFzRywwQkFDeUIsMEJBQ3BEO0lBQzdFLGlCQUFNO0lBQ04sdUNBQW1HO0lBQ25HLCtCQUE2QjtJQUkzQixBQURBLEFBREEsQUFEQSw4Q0FBaUYsd0JBQ0UseUJBQ0UsMkJBQ0U7SUFDdkYsaURBS0M7SUFGQyxzT0FBc0IsaUNBQTBCLEtBQUM7SUFFbEQsaUJBQXVCO0lBQ3hCLHFEQUtDO0lBRkMsME9BQXNCLGlDQUEwQixLQUFDO0lBRWxELGlCQUEyQjtJQUM1QixrREFLQztJQUZDLHVPQUFzQixpQ0FBMEIsS0FBQztJQUVsRCxpQkFBd0I7SUFDekIsb0RBS0M7SUFGQyx5T0FBc0IsaUNBQTBCLEtBQUM7SUFFbEQsaUJBQTBCO0lBQzNCLGdEQUtDO0lBRkMscU9BQXNCLGlDQUEwQixLQUFDO0lBRWxELGlCQUFzQjtJQUN2QiwwQ0FLQztJQUZDLCtOQUFzQixpQ0FBMEIs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N0IsS0FBSztZQUlDLHdCQUF3QjtrQkFEOUIsS0FBSztZQUlDLGtCQUFrQjtrQkFEeEIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLE1BQU07WUFJQSxjQUFjO2tCQURwQixLQUFLOztrRkFoSEssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuaW1wb3J0IHsgU3ByZWFkVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvc3ByZWFkLXR5cGUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi10b29sYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi10b29sYmFyLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZlRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RHJhd0VkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hpZ2hsaWdodEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VGV4dEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1N0YW1wRWRpdG9yOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Um90YXRlQ3dCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1JvdGF0ZUNjd0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0b29sYmFyTWFyZ2luVG9wID0gJzBweCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAwLjc1LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlVmlld01vZGU6IFBhZ2VWaWV3TW9kZVR5cGU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlVmlld01vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VWaWV3TW9kZVR5cGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNwcmVhZDogU3ByZWFkVHlwZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTcHJlYWRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dWZXJ0aWNhbFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93V3JhcHBlZFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SW5maW5pdGVTY3JvbGxCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Jvb2tNb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBvblRvb2xiYXJMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEhUTUxFbGVtZW50PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmaW5kYmFyVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub29sYmFyTG9hZGVkLmVtaXQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndG9vbGJhcicpWzBdIGFzIEhUTUxFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGVQYWdlVmlld01vZGUocGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlKTogdm9pZCB7XHJcbiAgICBpZiAocGFnZVZpZXdNb2RlKSB7XHJcbiAgICAgIHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlLmVtaXQocGFnZVZpZXdNb2RlKTtcclxuICAgICAgdGhpcy5wYWdlVmlld01vZGUgPSBwYWdlVmlld01vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXZcclxuICBjbGFzcz1cInRvb2xiYXJcIlxyXG4gIFtjbGFzcy5pbnZpc2libGVdPVwiIXByaW1hcnlNZW51VmlzaWJsZVwiXHJcbiAgW3N0eWxlLnRyYW5zZm9ybV09XCInc2NhbGUoJyArIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlICsgJyknXCJcclxuICBbc3R5bGUudHJhbnNmb3JtT3JpZ2luXT1cIidsZWZ0IGNlbnRlcidcIlxyXG4gIFtzdHlsZS53aWR0aF09XCJ0b29sYmFyV2lkdGhcIlxyXG4gIFtzdHlsZS5tYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiXHJcbj5cclxuICA8ZGl2IGlkPVwidG9vbGJhckNvbnRhaW5lclwiPlxyXG4gICAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21Ub29sYmFyID8gY3VzdG9tVG9vbGJhciA6IGRlZmF1bHRUb29sYmFyXCI+PC9uZy1jb250ZW50PlxyXG4gICAgPGRpdiBpZD1cImxvYWRpbmdCYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImdsaW1tZXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUb29sYmFyPlxyXG4gIDxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyXCI+XHJcbiAgICA8ZGl2IGlkPVwidG9vbGJhclZpZXdlckxlZnRcIj5cclxuICAgICAgPHBkZi10b2dnbGUtc2lkZWJhciBbc2hvd109XCJzaG93U2lkZWJhckJ1dHRvblwiIFtzaWRlYmFyVmlzaWJsZV09XCJzaWRlYmFyVmlzaWJsZVwiPjwvcGRmLXRvZ2dsZS1zaWRlYmFyPlxyXG4gICAgICA8cGRmLWZpbmQtYnV0dG9uIFtzaG93RmluZEJ1dHRvbl09XCJzaG93RmluZEJ1dHRvblwiIFt0ZXh0TGF5ZXJdPVwidGV4dExheWVyXCIgW2ZpbmRiYXJWaXNpYmxlXT1cImZpbmRiYXJWaXNpYmxlXCI+PC9wZGYtZmluZC1idXR0b24+XHJcbiAgICAgIDxwZGYtcGFnaW5nLWFyZWEgW3Nob3dQYWdpbmdCdXR0b25zXT1cInNob3dQYWdpbmdCdXR0b25zXCI+PC9wZGYtcGFnaW5nLWFyZWE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwZGYtem9vbS10b29sYmFyIFtzaG93Wm9vbUJ1dHRvbnNdPVwic2hvd1pvb21CdXR0b25zXCIgW3pvb21MZXZlbHNdPVwiem9vbUxldmVsc1wiPjwvcGRmLXpvb20tdG9vbGJhcj5cclxuICAgIDxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyUmlnaHRcIj5cclxuICAgICAgPHBkZi1kb2N1bWVudC1wcm9wZXJ0aWVzIFtzaG93XT1cInNob3dQcm9wZXJ0aWVzQnV0dG9uXCI+PC9wZGYtZG9jdW1lbnQtcHJvcGVydGllcz5cclxuICAgICAgPHBkZi1uby1zcHJlYWQgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiIFtzaG93XT1cInNob3dTcHJlYWRCdXR0b25cIj48L3BkZi1uby1zcHJlYWQ+XHJcbiAgICAgIDxwZGYtb2RkLXNwcmVhZCBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCIgW3Nob3ddPVwic2hvd1NwcmVhZEJ1dHRvblwiPjwvcGRmLW9kZC1zcHJlYWQ+XHJcbiAgICAgIDxwZGYtZXZlbi1zcHJlYWQgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiIFtzaG93XT1cInNob3dTcHJlYWRCdXR0b25cIj48L3BkZi1ldmVuLXNwcmVhZD5cclxuICAgICAgPHBkZi1zaW5nbGUtcGFnZS1tb2RlXHJcbiAgICAgICAgW3Nob3ddPVwic2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uXCJcclxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXHJcbiAgICAgICAgKHBhZ2VWaWV3TW9kZUNoYW5nZSk9XCJ1cGRhdGVQYWdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiXHJcbiAgICAgID48L3BkZi1zaW5nbGUtcGFnZS1tb2RlPlxyXG4gICAgICA8cGRmLXZlcnRpY2FsLXNjcm9sbC1tb2RlXHJcbiAgICAgICAgW3Nob3ddPVwic2hvd1ZlcnRpY2FsU2Nyb2xsQnV0dG9uXCJcclxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXHJcbiAgICAgICAgKHBhZ2VWaWV3TW9kZUNoYW5nZSk9XCJ1cGRhdGVQYWdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiXHJcbiAgICAgID48L3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZT5cclxuICAgICAgPHBkZi1ob3Jpem9udGFsLXNjcm9sbFxyXG4gICAgICAgIFtzaG93XT1cInNob3dIb3Jpem9udGFsU2Nyb2xsQnV0dG9uXCJcclxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXHJcbiAgICAgICAgKHBhZ2VWaWV3TW9kZUNoYW5nZSk9XCJ1cGRhdGVQYWdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiXHJcbiAgICAgID48L3BkZi1ob3Jpem9udGFsLXNjcm9sbD5cclxuICAgICAgPHBkZi13cmFwcGVkLXNjcm9sbC1tb2RlXHJcbiAgICAgICAgW3Nob3ddPVwic2hvd1dyYXBwZWRTY3JvbGxCdXR0b25cIlxyXG4gICAgICAgIFtwYWdlVmlld01vZGVdPVwicGFnZVZpZXdNb2RlXCJcclxuICAgICAgICAocGFnZVZpZXdNb2RlQ2hhbmdlKT1cInVwZGF0ZVBhZ2VWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCJcclxuICAgICAgPjwvcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGU+XHJcbiAgICAgIDxwZGYtaW5maW5pdGUtc2Nyb2xsXHJcbiAgICAgICAgW3Nob3ddPVwic2hvd0luZmluaXRlU2Nyb2xsQnV0dG9uXCJcclxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXHJcbiAgICAgICAgKHBhZ2VWaWV3TW9kZUNoYW5nZSk9XCJ1cGRhdGVQYWdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiXHJcbiAgICAgID48L3BkZi1pbmZpbml0ZS1zY3JvbGw+XHJcbiAgICAgIDxwZGYtYm9vay1tb2RlXHJcbiAgICAgICAgW3Nob3ddPVwic2hvd0Jvb2tNb2RlQnV0dG9uXCJcclxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXHJcbiAgICAgICAgKHBhZ2VWaWV3TW9kZUNoYW5nZSk9XCJ1cGRhdGVQYWdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiXHJcbiAgICAgID48L3BkZi1ib29rLW1vZGU+XHJcbiAgICAgIDxwZGYtaGFuZC10b29sIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCI+PC9wZGYtaGFuZC10b29sPlxyXG4gICAgICA8cGRmLXNlbGVjdC10b29sIFtzaG93U2VsZWN0VG9vbEJ1dHRvbl09XCJzaG93SGFuZFRvb2xCdXR0b25cIj48L3BkZi1zZWxlY3QtdG9vbD5cclxuICAgICAgPHBkZi1yb3RhdGUtcGFnZS1jdyBbc2hvd1JvdGF0ZUN3QnV0dG9uXT1cInNob3dSb3RhdGVDd0J1dHRvblwiPiA8L3BkZi1yb3RhdGUtcGFnZS1jdz5cclxuICAgICAgPHBkZi1yb3RhdGUtcGFnZS1jY3cgW3Nob3dSb3RhdGVDY3dCdXR0b25dPVwic2hvd1JvdGF0ZUNjd0J1dHRvblwiPiA8L3BkZi1yb3RhdGUtcGFnZS1jY3c+XHJcbiAgICAgIDxwZGYtcHJlc2VudGF0aW9uLW1vZGUgW3Nob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXT1cInNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXCI+PC9wZGYtcHJlc2VudGF0aW9uLW1vZGU+XHJcbiAgICAgIDxwZGYtb3Blbi1maWxlIFtzaG93T3BlbkZpbGVCdXR0b25dPVwic2hvd09wZW5GaWxlQnV0dG9uXCI+PC9wZGYtb3Blbi1maWxlPlxyXG4gICAgICA8cGRmLXByaW50IFtzaG93UHJpbnRCdXR0b25dPVwic2hvd1ByaW50QnV0dG9uXCI+PC9wZGYtcHJpbnQ+XHJcbiAgICAgIDxwZGYtZG93bmxvYWQgW3Nob3dEb3dubG9hZEJ1dHRvbl09XCJzaG93RG93bmxvYWRCdXR0b25cIj48L3BkZi1kb3dubG9hZD5cclxuXHJcbiAgICAgIDxwZGYtZWRpdG9yXHJcbiAgICAgICAgW3Nob3dEcmF3RWRpdG9yXT1cInNob3dEcmF3RWRpdG9yXCJcclxuICAgICAgICBbc2hvd0hpZ2hsaWdodEVkaXRvcl09XCJzaG93SGlnaGxpZ2h0RWRpdG9yXCJcclxuICAgICAgICBbc2hvd1RleHRFZGl0b3JdPVwic2hvd1RleHRFZGl0b3JcIlxyXG4gICAgICAgIFtzaG93U3RhbXBFZGl0b3JdPVwic2hvd1N0YW1wRWRpdG9yXCJcclxuICAgICAgPjwvcGRmLWVkaXRvcj5cclxuICAgICAgPHBkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIgW3Nob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uXT1cInNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uXCI+IDwvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhcj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=