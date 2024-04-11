import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ScrollModeType } from '../../options/pdf-viewer';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-toggle-sidebar/pdf-toggle-sidebar.component";
import * as i3 from "../pdf-find-button/pdf-find-button.component";
import * as i4 from "../pdf-paging-area/pdf-paging-area.component";
import * as i5 from "../pdf-zoom-toolbar/pdf-zoom-toolbar.component";
import * as i6 from "../pdf-document-properties/pdf-document-properties.component";
import * as i7 from "../pdf-no-spread/pdf-no-spread.component";
import * as i8 from "../pdf-odd-spread/pdf-odd-spread.component";
import * as i9 from "../pdf-even-spread/pdf-even-spread.component";
import * as i10 from "../pdf-single-page-mode/pdf-single-page-mode.component";
import * as i11 from "../pdf-vertical-scroll-button/pdf-vertical-scroll-mode.component";
import * as i12 from "../pdf-horizontal-scroll/pdf-horizontal-scroll.component";
import * as i13 from "../pdf-wrapped-scroll-mode/pdf-wrapped-scroll-mode.component";
import * as i14 from "../pdf-infinite-scroll/pdf-infinite-scroll.component";
import * as i15 from "../pdf-book-mode/pdf-book-mode.component";
import * as i16 from "../pdf-hand-tool/pdf-hand-tool.component";
import * as i17 from "../pdf-select-tool/pdf-select-tool.component";
import * as i18 from "../pdf-rotate-page/pdf-rotate-page.component";
import * as i19 from "../pdf-presentation-mode/pdf-presentation-mode.component";
import * as i20 from "../pdf-open-file/pdf-open-file.component";
import * as i21 from "../pdf-print/pdf-print.component";
import * as i22 from "../pdf-download/pdf-download.component";
import * as i23 from "../pdf-editor/pdf-editor.component";
import * as i24 from "../pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component";
function PdfToolbarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customToolbar ? customToolbar : defaultToolbar"]);
} }
function PdfToolbarComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵelement(2, "pdf-toggle-sidebar", 9)(3, "pdf-find-button", 10)(4, "pdf-paging-area", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "pdf-zoom-toolbar", 12);
    i0.ɵɵelementStart(6, "div", 13);
    i0.ɵɵelement(7, "pdf-document-properties", 14)(8, "pdf-no-spread", 15)(9, "pdf-odd-spread", 15)(10, "pdf-even-spread", 15);
    i0.ɵɵelementStart(11, "pdf-single-page-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_single_page_mode_pageViewModeChange_11_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.updatePageViewMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "pdf-vertical-scroll-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_vertical_scroll_mode_pageViewModeChange_12_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.updatePageViewMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "pdf-horizontal-scroll", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_horizontal_scroll_pageViewModeChange_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.updatePageViewMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "pdf-wrapped-scroll-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_wrapped_scroll_mode_pageViewModeChange_14_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.updatePageViewMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "pdf-infinite-scroll", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_infinite_scroll_pageViewModeChange_15_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.updatePageViewMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "pdf-book-mode", 16);
    i0.ɵɵlistener("pageViewModeChange", function PdfToolbarComponent_ng_template_6_Template_pdf_book_mode_pageViewModeChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.updatePageViewMode($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "pdf-hand-tool", 17)(18, "pdf-select-tool", 18)(19, "pdf-rotate-page", 19)(20, "pdf-rotate-page", 19)(21, "pdf-presentation-mode", 20)(22, "pdf-open-file", 21)(23, "pdf-print", 22)(24, "pdf-download", 23)(25, "pdf-editor", 24)(26, "pdf-toggle-secondary-toolbar", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("show", ctx_r2.showSidebarButton)("sidebarVisible", ctx_r2.sidebarVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showFindButton", ctx_r2.showFindButton)("textLayer", ctx_r2.textLayer)("findbarVisible", ctx_r2.findbarVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPagingButtons", ctx_r2.showPagingButtons);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showZoomButtons", ctx_r2.showZoomButtons)("zoomLevels", ctx_r2.zoomLevels);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("show", ctx_r2.showPropertiesButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollMode", ctx_r2.scrollMode)("show", ctx_r2.showSpreadButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollMode", ctx_r2.scrollMode)("show", ctx_r2.showSpreadButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("scrollMode", ctx_r2.scrollMode)("show", ctx_r2.showSpreadButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r2.showSinglePageModeButton)("pageViewMode", ctx_r2.pageViewMode)("scrollMode", ctx_r2.scrollMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r2.showVerticalScrollButton)("pageViewMode", ctx_r2.pageViewMode)("scrollMode", ctx_r2.scrollMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r2.showHorizontalScrollButton)("pageViewMode", ctx_r2.pageViewMode)("scrollMode", ctx_r2.scrollMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r2.showWrappedScrollButton)("pageViewMode", ctx_r2.pageViewMode)("scrollMode", ctx_r2.scrollMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r2.showInfiniteScrollButton)("pageViewMode", ctx_r2.pageViewMode)("scrollMode", ctx_r2.scrollMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r2.showBookModeButton)("pageViewMode", ctx_r2.pageViewMode)("scrollMode", ctx_r2.scrollMode);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showHandToolButton", ctx_r2.showHandToolButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSelectToolButton", ctx_r2.showHandToolButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", true)("counterClockwise", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showRotateButton", ctx_r2.showRotateButton)("clockwise", false)("counterClockwise", true);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPresentationModeButton", ctx_r2.showPresentationModeButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showOpenFileButton", ctx_r2.showOpenFileButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showPrintButton", ctx_r2.showPrintButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showDownloadButton", ctx_r2.showDownloadButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showDrawEditor", ctx_r2.showDrawEditor)("showTextEditor", ctx_r2.showTextEditor)("showStampEditor", ctx_r2.showStampEditor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("showSecondaryToolbarButton", ctx_r2.showSecondaryToolbarButton);
} }
const _c0 = ["*"];
export class PdfToolbarComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.mobileFriendlyZoomScale = 1;
        this.primaryMenuVisible = true;
        this.showDownloadButton = true;
        this.showDrawEditor = false;
        this.showTextEditor = false;
        this.showStampEditor = false;
        this.showFindButton = undefined;
        this.showHandToolButton = true;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showPagingButtons = true;
        this.showPresentationModeButton = false;
        this.showRotateButton = true;
        this.showSecondaryToolbarButton = true;
        this.showSidebarButton = true;
        this.sidebarVisible = false;
        this.showZoomButtons = true;
        this.textLayer = undefined;
        this.toolbarMarginTop = '0px';
        this.toolbarWidth = '100%';
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
        this.pageViewModeChange = new EventEmitter();
        this.showPropertiesButton = true;
        this.showSpreadButton = true;
        this.showSinglePageModeButton = true;
        this.showVerticalScrollButton = true;
        this.showHorizontalScrollButton = true;
        this.showWrappedScrollButton = true;
        this.showInfiniteScrollButton = true;
        this.showBookModeButton = true;
        this.onToolbarLoaded = new EventEmitter();
        this.findbarVisible = false;
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
}
/** @nocollapse */ PdfToolbarComponent.ɵfac = function PdfToolbarComponent_Factory(t) { return new (t || PdfToolbarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ PdfToolbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfToolbarComponent, selectors: [["pdf-toolbar"]], inputs: { customToolbar: "customToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", primaryMenuVisible: "primaryMenuVisible", showDownloadButton: "showDownloadButton", showDrawEditor: "showDrawEditor", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor", showFindButton: "showFindButton", showHandToolButton: "showHandToolButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showPagingButtons: "showPagingButtons", showPresentationModeButton: "showPresentationModeButton", showRotateButton: "showRotateButton", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showZoomButtons: "showZoomButtons", textLayer: "textLayer", toolbarMarginTop: "toolbarMarginTop", toolbarWidth: "toolbarWidth", zoomLevels: "zoomLevels", pageViewMode: "pageViewMode", spread: "spread", scrollMode: "scrollMode", showPropertiesButton: "showPropertiesButton", showSpreadButton: "showSpreadButton", showSinglePageModeButton: "showSinglePageModeButton", showVerticalScrollButton: "showVerticalScrollButton", showHorizontalScrollButton: "showHorizontalScrollButton", showWrappedScrollButton: "showWrappedScrollButton", showInfiniteScrollButton: "showInfiniteScrollButton", showBookModeButton: "showBookModeButton", findbarVisible: "findbarVisible" }, outputs: { pageViewModeChange: "pageViewModeChange", onToolbarLoaded: "onToolbarLoaded" }, ngContentSelectors: _c0, decls: 8, vars: 11, consts: [[1, "toolbar"], ["id", "toolbarContainer"], [4, "ngTemplateOutlet"], ["id", "loadingBar"], [1, "progress"], [1, "glimmer"], ["defaultToolbar", ""], ["id", "toolbarViewer"], ["id", "toolbarViewerLeft"], [3, "show", "sidebarVisible"], [3, "showFindButton", "textLayer", "findbarVisible"], [3, "showPagingButtons"], [3, "showZoomButtons", "zoomLevels"], ["id", "toolbarViewerRight"], [3, "show"], [3, "scrollMode", "show"], [3, "show", "pageViewMode", "scrollMode", "pageViewModeChange"], [3, "showHandToolButton"], [3, "showSelectToolButton"], [3, "showRotateButton", "clockwise", "counterClockwise"], [3, "showPresentationModeButton"], [3, "showOpenFileButton"], [3, "showPrintButton"], [3, "showDownloadButton"], [3, "showDrawEditor", "showTextEditor", "showStampEditor"], [3, "showSecondaryToolbarButton"]], template: function PdfToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵtemplate(2, PdfToolbarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
        i0.ɵɵelement(5, "div", 5);
        i0.ɵɵelementEnd()()()();
        i0.ɵɵtemplate(6, PdfToolbarComponent_ng_template_6_Template, 27, 49, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(7);
        i0.ɵɵstyleProp("transform", "scale(" + ctx.mobileFriendlyZoomScale + ")")("transform-origin", "left center")("width", ctx.toolbarWidth)("margin-top", ctx.toolbarMarginTop);
        i0.ɵɵclassProp("invisible", !ctx.primaryMenuVisible);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customToolbar ? ctx.customToolbar : _r1);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfToggleSidebarComponent, i3.PdfFindButtonComponent, i4.PdfPagingAreaComponent, i5.PdfZoomToolbarComponent, i6.PdfDocumentPropertiesComponent, i7.PdfNoSpreadComponent, i8.PdfOddSpreadComponent, i9.PdfEvenSpreadComponent, i10.PdfSinglePageModeComponent, i11.PdfVerticalScrollModeComponent, i12.PdfHorizontalScrollComponent, i13.PdfWrappedScrollModeComponent, i14.PdfInfiniteScrollComponent, i15.PdfBookModeComponent, i16.PdfHandToolComponent, i17.PdfSelectToolComponent, i18.PdfRotatePageComponent, i19.PdfPresentationModeComponent, i20.PdfOpenFileComponent, i21.PdfPrintComponent, i22.PdfDownloadComponent, i23.PdfEditorComponent, i24.PdfToggleSecondaryToolbarComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfToolbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-toolbar', template: "<div\n  class=\"toolbar\"\n  [class.invisible]=\"!primaryMenuVisible\"\n  [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n  [style.transformOrigin]=\"'left center'\"\n  [style.width]=\"toolbarWidth\"\n  [style.marginTop]=\"toolbarMarginTop\"\n>\n  <div id=\"toolbarContainer\">\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\n    <div id=\"loadingBar\">\n      <div class=\"progress\">\n        <div class=\"glimmer\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultToolbar>\n  <div id=\"toolbarViewer\">\n    <div id=\"toolbarViewerLeft\">\n      <pdf-toggle-sidebar [show]=\"showSidebarButton\" [sidebarVisible]=\"sidebarVisible\"></pdf-toggle-sidebar>\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\" [findbarVisible]=\"findbarVisible\"></pdf-find-button>\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\n    </div>\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\n    <div id=\"toolbarViewerRight\">\n      <pdf-document-properties [show]=\"showPropertiesButton\"></pdf-document-properties>\n      <pdf-no-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-no-spread>\n      <pdf-odd-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-odd-spread>\n      <pdf-even-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-even-spread>\n      <pdf-single-page-mode\n        [show]=\"showSinglePageModeButton\"\n        [pageViewMode]=\"pageViewMode\"\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\n        [scrollMode]=\"scrollMode\"\n      ></pdf-single-page-mode>\n      <pdf-vertical-scroll-mode\n        [show]=\"showVerticalScrollButton\"\n        [pageViewMode]=\"pageViewMode\"\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\n        [scrollMode]=\"scrollMode\"\n      ></pdf-vertical-scroll-mode>\n      <pdf-horizontal-scroll\n        [show]=\"showHorizontalScrollButton\"\n        [pageViewMode]=\"pageViewMode\"\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\n        [scrollMode]=\"scrollMode\"\n      ></pdf-horizontal-scroll>\n      <pdf-wrapped-scroll-mode\n        [show]=\"showWrappedScrollButton\"\n        [pageViewMode]=\"pageViewMode\"\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\n        [scrollMode]=\"scrollMode\"\n      ></pdf-wrapped-scroll-mode>\n      <pdf-infinite-scroll\n        [show]=\"showInfiniteScrollButton\"\n        [pageViewMode]=\"pageViewMode\"\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\n        [scrollMode]=\"scrollMode\"\n      ></pdf-infinite-scroll>\n      <pdf-book-mode\n        [show]=\"showBookModeButton\"\n        [pageViewMode]=\"pageViewMode\"\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\n        [scrollMode]=\"scrollMode\"\n      ></pdf-book-mode>\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"true\" [counterClockwise]=\"false\"> </pdf-rotate-page>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"false\" [counterClockwise]=\"true\"> </pdf-rotate-page>\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\n\n      <pdf-editor [showDrawEditor]=\"showDrawEditor\" [showTextEditor]=\"showTextEditor\" [showStampEditor]=\"showStampEditor\"></pdf-editor>\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"> </pdf-toggle-secondary-toolbar>\n    </div>\n  </div>\n</ng-template>\n", styles: [""] }]
    }], function () { return [{ type: i0.ElementRef }]; }, { customToolbar: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], primaryMenuVisible: [{
            type: Input
        }], showDownloadButton: [{
            type: Input
        }], showDrawEditor: [{
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
        }], showRotateButton: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxFQUFvQixjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUXhFLDhGQUE0Rjs7OztJQVU5Riw4QkFBd0IsYUFBQTtJQUVwQix3Q0FBc0csMEJBQUEsMEJBQUE7SUFHeEcsaUJBQU07SUFDTix1Q0FBbUc7SUFDbkcsK0JBQTZCO0lBQzNCLDhDQUFpRix3QkFBQSx5QkFBQSwyQkFBQTtJQUlqRixpREFLQztJQUZDLHVOQUFzQixpQ0FBMEIsSUFBQztJQUVsRCxpQkFBdUI7SUFDeEIscURBS0M7SUFGQywyTkFBc0IsaUNBQTBCLElBQUM7SUFFbEQsaUJBQTJCO0lBQzVCLGtEQUtDO0lBRkMsd05BQXNCLGlDQUEwQixJQUFDO0lBRWxELGlCQUF3QjtJQUN6QixvREFLQztJQUZDLDBOQUFzQixpQ0FBMEIsSUFBQztJQUVsRCxpQkFBMEI7SUFDM0IsZ0RBS0M7SUFGQyxzTkFBc0IsaUNBQTBCLElBQUM7SUFFbEQsaUJBQXNCO0lBQ3ZCLDBDQUtDO0lBRkMsZ05BQXNCLGlDQUEwQixJQUFDO0lBRWxELGlCQUFnQjtJQUNqQixxQ0FBeUUsMkJB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O1lBSUMsZUFBZTtrQkFEckIsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsS0FBSztZQUlDLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyxlQUFlO2tCQURyQixLQUFLO1lBSUMsU0FBUztrQkFEZixLQUFLO1lBSUMsZ0JBQWdCO2tCQUR0QixLQUFLO1lBSUMsWUFBWTtrQkFEbEIsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxZQUFZO2tCQURsQixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixNQUFNO1lBSUEsTUFBTTtrQkFEWixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsS0FBSztZQUlDLG9CQUFvQjtrQkFEMUIsS0FBSztZQUlDLGdCQUFnQjtrQkFEdEIsS0FBSztZQUlDLHdCQUF3QjtrQkFEOUIsS0FBSztZQUlDLHdCQUF3QjtrQkFEOUIsS0FBSztZQUlDLDBCQUEwQjtrQkFEaEMsS0FBSztZQUlDLHVCQUF1QjtrQkFEN0IsS0FBSztZQUlDLHdCQUF3QjtrQkFEOUIsS0FBSztZQUlDLGtCQUFrQjtrQkFEeEIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLE1BQU07WUFJQSxjQUFjO2tCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlVmlld01vZGVUeXBlLCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlcic7XG5pbXBvcnQgeyBTcHJlYWRUeXBlIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9zcHJlYWQtdHlwZSc7XG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXRvb2xiYXIuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZUb29sYmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RHJhd0VkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1RleHRFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTdGFtcEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9uczogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1JvdGF0ZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0b29sYmFyTWFyZ2luVG9wID0gJzBweCc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAwLjc1LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYWdlVmlld01vZGU6IFBhZ2VWaWV3TW9kZVR5cGU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlVmlld01vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VWaWV3TW9kZVR5cGU+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNwcmVhZDogU3ByZWFkVHlwZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTcHJlYWRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dWZXJ0aWNhbFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93V3JhcHBlZFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SW5maW5pdGVTY3JvbGxCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Jvb2tNb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblRvb2xiYXJMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEhUTUxFbGVtZW50PigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaW5kYmFyVmlzaWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblRvb2xiYXJMb2FkZWQuZW1pdCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0b29sYmFyJylbMF0gYXMgSFRNTEVsZW1lbnQpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVBhZ2VWaWV3TW9kZShwYWdlVmlld01vZGU6IFBhZ2VWaWV3TW9kZVR5cGUpOiB2b2lkIHtcbiAgICBpZiAocGFnZVZpZXdNb2RlKSB7XG4gICAgICB0aGlzLnBhZ2VWaWV3TW9kZUNoYW5nZS5lbWl0KHBhZ2VWaWV3TW9kZSk7XG4gICAgICB0aGlzLnBhZ2VWaWV3TW9kZSA9IHBhZ2VWaWV3TW9kZTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJ0b29sYmFyXCJcbiAgW2NsYXNzLmludmlzaWJsZV09XCIhcHJpbWFyeU1lbnVWaXNpYmxlXCJcbiAgW3N0eWxlLnRyYW5zZm9ybV09XCInc2NhbGUoJyArIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlICsgJyknXCJcbiAgW3N0eWxlLnRyYW5zZm9ybU9yaWdpbl09XCInbGVmdCBjZW50ZXInXCJcbiAgW3N0eWxlLndpZHRoXT1cInRvb2xiYXJXaWR0aFwiXG4gIFtzdHlsZS5tYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiXG4+XG4gIDxkaXYgaWQ9XCJ0b29sYmFyQ29udGFpbmVyXCI+XG4gICAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21Ub29sYmFyID8gY3VzdG9tVG9vbGJhciA6IGRlZmF1bHRUb29sYmFyXCI+PC9uZy1jb250ZW50PlxuICAgIDxkaXYgaWQ9XCJsb2FkaW5nQmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdsaW1tZXJcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRUb29sYmFyPlxuICA8ZGl2IGlkPVwidG9vbGJhclZpZXdlclwiPlxuICAgIDxkaXYgaWQ9XCJ0b29sYmFyVmlld2VyTGVmdFwiPlxuICAgICAgPHBkZi10b2dnbGUtc2lkZWJhciBbc2hvd109XCJzaG93U2lkZWJhckJ1dHRvblwiIFtzaWRlYmFyVmlzaWJsZV09XCJzaWRlYmFyVmlzaWJsZVwiPjwvcGRmLXRvZ2dsZS1zaWRlYmFyPlxuICAgICAgPHBkZi1maW5kLWJ1dHRvbiBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b25cIiBbdGV4dExheWVyXT1cInRleHRMYXllclwiIFtmaW5kYmFyVmlzaWJsZV09XCJmaW5kYmFyVmlzaWJsZVwiPjwvcGRmLWZpbmQtYnV0dG9uPlxuICAgICAgPHBkZi1wYWdpbmctYXJlYSBbc2hvd1BhZ2luZ0J1dHRvbnNdPVwic2hvd1BhZ2luZ0J1dHRvbnNcIj48L3BkZi1wYWdpbmctYXJlYT5cbiAgICA8L2Rpdj5cbiAgICA8cGRmLXpvb20tdG9vbGJhciBbc2hvd1pvb21CdXR0b25zXT1cInNob3dab29tQnV0dG9uc1wiIFt6b29tTGV2ZWxzXT1cInpvb21MZXZlbHNcIj48L3BkZi16b29tLXRvb2xiYXI+XG4gICAgPGRpdiBpZD1cInRvb2xiYXJWaWV3ZXJSaWdodFwiPlxuICAgICAgPHBkZi1kb2N1bWVudC1wcm9wZXJ0aWVzIFtzaG93XT1cInNob3dQcm9wZXJ0aWVzQnV0dG9uXCI+PC9wZGYtZG9jdW1lbnQtcHJvcGVydGllcz5cbiAgICAgIDxwZGYtbm8tc3ByZWFkIFtzY3JvbGxNb2RlXT1cInNjcm9sbE1vZGVcIiBbc2hvd109XCJzaG93U3ByZWFkQnV0dG9uXCI+PC9wZGYtbm8tc3ByZWFkPlxuICAgICAgPHBkZi1vZGQtc3ByZWFkIFtzY3JvbGxNb2RlXT1cInNjcm9sbE1vZGVcIiBbc2hvd109XCJzaG93U3ByZWFkQnV0dG9uXCI+PC9wZGYtb2RkLXNwcmVhZD5cbiAgICAgIDxwZGYtZXZlbi1zcHJlYWQgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZVwiIFtzaG93XT1cInNob3dTcHJlYWRCdXR0b25cIj48L3BkZi1ldmVuLXNwcmVhZD5cbiAgICAgIDxwZGYtc2luZ2xlLXBhZ2UtbW9kZVxuICAgICAgICBbc2hvd109XCJzaG93U2luZ2xlUGFnZU1vZGVCdXR0b25cIlxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXG4gICAgICAgIChwYWdlVmlld01vZGVDaGFuZ2UpPVwidXBkYXRlUGFnZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCJcbiAgICAgID48L3BkZi1zaW5nbGUtcGFnZS1tb2RlPlxuICAgICAgPHBkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZVxuICAgICAgICBbc2hvd109XCJzaG93VmVydGljYWxTY3JvbGxCdXR0b25cIlxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXG4gICAgICAgIChwYWdlVmlld01vZGVDaGFuZ2UpPVwidXBkYXRlUGFnZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCJcbiAgICAgID48L3BkZi12ZXJ0aWNhbC1zY3JvbGwtbW9kZT5cbiAgICAgIDxwZGYtaG9yaXpvbnRhbC1zY3JvbGxcbiAgICAgICAgW3Nob3ddPVwic2hvd0hvcml6b250YWxTY3JvbGxCdXR0b25cIlxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXG4gICAgICAgIChwYWdlVmlld01vZGVDaGFuZ2UpPVwidXBkYXRlUGFnZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCJcbiAgICAgID48L3BkZi1ob3Jpem9udGFsLXNjcm9sbD5cbiAgICAgIDxwZGYtd3JhcHBlZC1zY3JvbGwtbW9kZVxuICAgICAgICBbc2hvd109XCJzaG93V3JhcHBlZFNjcm9sbEJ1dHRvblwiXG4gICAgICAgIFtwYWdlVmlld01vZGVdPVwicGFnZVZpZXdNb2RlXCJcbiAgICAgICAgKHBhZ2VWaWV3TW9kZUNoYW5nZSk9XCJ1cGRhdGVQYWdlVmlld01vZGUoJGV2ZW50KVwiXG4gICAgICAgIFtzY3JvbGxNb2RlXT1cInNjcm9sbE1vZGVcIlxuICAgICAgPjwvcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGU+XG4gICAgICA8cGRmLWluZmluaXRlLXNjcm9sbFxuICAgICAgICBbc2hvd109XCJzaG93SW5maW5pdGVTY3JvbGxCdXR0b25cIlxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXG4gICAgICAgIChwYWdlVmlld01vZGVDaGFuZ2UpPVwidXBkYXRlUGFnZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCJcbiAgICAgID48L3BkZi1pbmZpbml0ZS1zY3JvbGw+XG4gICAgICA8cGRmLWJvb2stbW9kZVxuICAgICAgICBbc2hvd109XCJzaG93Qm9va01vZGVCdXR0b25cIlxuICAgICAgICBbcGFnZVZpZXdNb2RlXT1cInBhZ2VWaWV3TW9kZVwiXG4gICAgICAgIChwYWdlVmlld01vZGVDaGFuZ2UpPVwidXBkYXRlUGFnZVZpZXdNb2RlKCRldmVudClcIlxuICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlXCJcbiAgICAgID48L3BkZi1ib29rLW1vZGU+XG4gICAgICA8cGRmLWhhbmQtdG9vbCBbc2hvd0hhbmRUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiPjwvcGRmLWhhbmQtdG9vbD5cbiAgICAgIDxwZGYtc2VsZWN0LXRvb2wgW3Nob3dTZWxlY3RUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiPjwvcGRmLXNlbGVjdC10b29sPlxuICAgICAgPHBkZi1yb3RhdGUtcGFnZSBbc2hvd1JvdGF0ZUJ1dHRvbl09XCJzaG93Um90YXRlQnV0dG9uXCIgW2Nsb2Nrd2lzZV09XCJ0cnVlXCIgW2NvdW50ZXJDbG9ja3dpc2VdPVwiZmFsc2VcIj4gPC9wZGYtcm90YXRlLXBhZ2U+XG4gICAgICA8cGRmLXJvdGF0ZS1wYWdlIFtzaG93Um90YXRlQnV0dG9uXT1cInNob3dSb3RhdGVCdXR0b25cIiBbY2xvY2t3aXNlXT1cImZhbHNlXCIgW2NvdW50ZXJDbG9ja3dpc2VdPVwidHJ1ZVwiPiA8L3BkZi1yb3RhdGUtcGFnZT5cbiAgICAgIDxwZGYtcHJlc2VudGF0aW9uLW1vZGUgW3Nob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXT1cInNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXCI+PC9wZGYtcHJlc2VudGF0aW9uLW1vZGU+XG4gICAgICA8cGRmLW9wZW4tZmlsZSBbc2hvd09wZW5GaWxlQnV0dG9uXT1cInNob3dPcGVuRmlsZUJ1dHRvblwiPjwvcGRmLW9wZW4tZmlsZT5cbiAgICAgIDxwZGYtcHJpbnQgW3Nob3dQcmludEJ1dHRvbl09XCJzaG93UHJpbnRCdXR0b25cIj48L3BkZi1wcmludD5cbiAgICAgIDxwZGYtZG93bmxvYWQgW3Nob3dEb3dubG9hZEJ1dHRvbl09XCJzaG93RG93bmxvYWRCdXR0b25cIj48L3BkZi1kb3dubG9hZD5cblxuICAgICAgPHBkZi1lZGl0b3IgW3Nob3dEcmF3RWRpdG9yXT1cInNob3dEcmF3RWRpdG9yXCIgW3Nob3dUZXh0RWRpdG9yXT1cInNob3dUZXh0RWRpdG9yXCIgW3Nob3dTdGFtcEVkaXRvcl09XCJzaG93U3RhbXBFZGl0b3JcIj48L3BkZi1lZGl0b3I+XG4gICAgICA8cGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhciBbc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25dPVwic2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25cIj4gPC9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=