import { isPlatformBrowser, Location, PlatformLocation } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Inject, Input, NgZone, Output, PLATFORM_ID, Renderer2, ViewChild, } from '@angular/core';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { PdfCursorTools } from './options/pdf-cursor-tools';
import { assetsUrl, getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import { ScrollModeType } from './options/pdf-viewer';
import { VerbosityLevel } from './options/verbosity-level';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { PDFNotificationService } from './pdf-notification-service';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { UnitToPx } from './unit-to-px';
import { NgxFormSupport } from './ngx-form-support';
import { PdfSidebarView } from './options/pdf-sidebar-views';
import { PdfCspPolicyService } from './pdf-csp-policy.service';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-notification-service";
import * as i2 from "@angular/common";
import * as i3 from "./ngx-extended-pdf-viewer.service";
import * as i4 from "./pdf-csp-policy.service";
import * as i5 from "./dynamic-css/dynamic-css.component";
import * as i6 from "./theme/acroform-default-theme/pdf-acroform-default-theme.component";
import * as i7 from "./toolbar/pdf-context-menu/pdf-context-menu.component";
import * as i8 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i9 from "./pdf-dialog/pdf-alt-text-dialog/pdf-alt-text-dialog.component";
import * as i10 from "./pdf-dialog/pdf-document-properties-dialog/pdf-document-properties-dialog.component";
import * as i11 from "./pdf-dummy-components/pdf-dummy-components.component";
import * as i12 from "./pdf-dialog/pdf-error-message/pdf-error-message.component";
import * as i13 from "./toolbar/pdf-findbar/pdf-findbar.component";
import * as i14 from "./theme/pdf-light-theme/pdf-light-theme.component";
import * as i15 from "./pdf-dialog/pdf-password-dialog/pdf-password-dialog.component";
import * as i16 from "./pdf-dialog/pdf-prepare-printing-dialog/pdf-prepare-printing-dialog.component";
import * as i17 from "./secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component";
import * as i18 from "./sidebar/pdf-sidebar/pdf-sidebar.component";
import * as i19 from "./toolbar/pdf-toolbar/pdf-toolbar.component";
import * as i20 from "./translate.pipe";
const _c0 = ["root"];
const _c1 = ["pdfSecondaryToolbarComponent"];
const _c2 = ["pdfsidebar"];
const _c3 = ["*", "*"];
function NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-dark-theme");
} }
function NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-light-theme");
} }
function NgxExtendedPdfViewerComponent_ng_content_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngTemplateOutlet", "customPdfViewer ? customPdfViewer : defaultPdfViewer"]);
} }
function NgxExtendedPdfViewerComponent_ng_template_5_div_5_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 1, ["*ngTemplateOutlet", "customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar"]);
} }
function NgxExtendedPdfViewerComponent_ng_template_5_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_ng_template_5_div_5_ng_content_1_Template, 1, 0, "ng-content", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    const defaultFreeFloatingBar_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customFreeFloatingBar ? ctx_r1.customFreeFloatingBar : defaultFreeFloatingBar_r3);
} }
function NgxExtendedPdfViewerComponent_ng_template_5_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44)(1, "label", 45);
    i0.ɵɵtext(2, "Thickness");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 46);
    i0.ɵɵelement(4, "input", 47);
    i0.ɵɵelementEnd()();
} }
function NgxExtendedPdfViewerComponent_ng_template_5_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelement(1, "div", 49);
    i0.ɵɵelementStart(2, "div", 50)(3, "label", 51);
    i0.ɵɵtext(4, "Show all");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "button", 52);
    i0.ɵɵelementEnd()();
} }
function NgxExtendedPdfViewerComponent_ng_template_5_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 4, i0.ɵɵpipeBind2(2, 1, "unverified-signature-warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
} }
function NgxExtendedPdfViewerComponent_ng_template_5_input_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("server-side-rendering", ctx_r1.serverSideRendering);
} }
function NgxExtendedPdfViewerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8, 2)(2, "div", 9)(3, "div")(4, "div", 10);
    i0.ɵɵlistener("resize", function NgxExtendedPdfViewerComponent_ng_template_5_Template_div_resize_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow);
    i0.ɵɵtemplate(5, NgxExtendedPdfViewerComponent_ng_template_5_div_5_Template, 2, 1, "div", 11);
    i0.ɵɵelementStart(6, "pdf-sidebar", 12, 3);
    i0.ɵɵlistener("thumbnailDrawn", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_sidebar_thumbnailDrawn_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.thumbnailDrawn.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 13);
    i0.ɵɵelement(9, "pdf-dummy-components");
    i0.ɵɵelementStart(10, "pdf-toolbar", 14);
    i0.ɵɵlistener("onToolbarLoaded", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_toolbar_onToolbarLoaded_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onToolbarLoaded($event)); });
    i0.ɵɵtwoWayListener("pageViewModeChange", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_toolbar_pageViewModeChange_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.pageViewMode, $event) || (ctx_r1.pageViewMode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 15)(12, "div", 16)(13, "div", 17)(14, "span", 18);
    i0.ɵɵtext(15, "Highlight color");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, NgxExtendedPdfViewerComponent_ng_template_5_div_16_Template, 5, 0, "div", 19)(17, NgxExtendedPdfViewerComponent_ng_template_5_div_17_Template, 6, 0, "div", 20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 21)(19, "div", 22)(20, "div", 23)(21, "label", 24);
    i0.ɵɵtext(22, "Font Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 23)(25, "label", 26);
    i0.ɵɵtext(26, "Font Size");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 28)(29, "div", 22)(30, "div", 23)(31, "label", 29);
    i0.ɵɵtext(32, "Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(33, "input", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "div", 23)(35, "label", 31);
    i0.ɵɵtext(36, "Thickness");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "input", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 23)(39, "label", 33);
    i0.ɵɵtext(40, "Opacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(41, "input", 34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "pdf-secondary-toolbar", 35, 4);
    i0.ɵɵlistener("spreadChange", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_secondary_toolbar_spreadChange_42_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSpreadChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(44, "pdf-findbar", 36)(45, "pdf-context-menu");
    i0.ɵɵelementStart(46, "div", 37);
    i0.ɵɵtemplate(47, NgxExtendedPdfViewerComponent_ng_template_5_div_47_Template, 4, 6, "div", 38);
    i0.ɵɵelementStart(48, "div", 39);
    i0.ɵɵlistener("dblclick", function NgxExtendedPdfViewerComponent_ng_template_5_Template_div_dblclick_48_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.zoomToPageWidth($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(49, "pdf-error-message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "div", 40);
    i0.ɵɵelement(51, "pdf-password-dialog")(52, "pdf-document-properties-dialog")(53, "pdf-alt-text-dialog")(54, "pdf-prepare-printing-dialog");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(55, NgxExtendedPdfViewerComponent_ng_template_5_input_55_Template, 1, 2, "input", 41);
    i0.ɵɵelement(56, "div", 42);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_23_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("height", ctx_r1.minHeight ? ctx_r1.minHeight : ctx_r1.height);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("body pdf-js-version-", ctx_r1.majorMinorPdfJsVersion, "");
    i0.ɵɵstyleProp("background-color", ctx_r1.backgroundColor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.showFreeFloatingBar);
    i0.ɵɵadvance();
    i0.ɵɵproperty("sidebarVisible", ctx_r1.sidebarVisible || false)("showSidebarButton", ctx_r1.showSidebarButton)("customSidebar", ctx_r1.customSidebar)("customThumbnail", ctx_r1.customThumbnail)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale)("sidebarPositionTop", ctx_r1.sidebarPositionTop);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("toolbar-hidden", !ctx_r1.primaryMenuVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("server-side-rendering", ctx_r1.serverSideRendering);
    i0.ɵɵproperty("sidebarVisible", ctx_r1.sidebarVisible)("customToolbar", ctx_r1.customToolbar)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale);
    i0.ɵɵtwoWayProperty("pageViewMode", ctx_r1.pageViewMode);
    i0.ɵɵproperty("primaryMenuVisible", ctx_r1.primaryMenuVisible)("scrollMode", (tmp_23_0 = ctx_r1.scrollMode) !== null && tmp_23_0 !== undefined ? tmp_23_0 : 0)("showPropertiesButton", ctx_r1.showPropertiesButton)("showBookModeButton", ctx_r1.showBookModeButton)("showDownloadButton", ctx_r1.showDownloadButton)("showDrawEditor", ctx_r1.showDrawEditor)("showHighlightEditor", ctx_r1.showHighlightEditor)("showFindButton", ctx_r1.showFindButton)("showHandToolButton", ctx_r1.showHandToolButton)("showHorizontalScrollButton", ctx_r1.showHorizontalScrollButton)("showInfiniteScrollButton", ctx_r1.showInfiniteScrollButton)("showOpenFileButton", ctx_r1.showOpenFileButton)("showPagingButtons", ctx_r1.showPagingButtons)("showPresentationModeButton", ctx_r1.showPresentationModeButton && ctx_r1.pageViewMode !== "book")("showPrintButton", ctx_r1.showPrintButton && ctx_r1.enablePrint)("showRotateCwButton", ctx_r1.showRotateCwButton)("showRotateCcwButton", ctx_r1.showRotateCcwButton)("showSecondaryToolbarButton", ctx_r1.showSecondaryToolbarButton && !ctx_r1.service.secondaryMenuIsEmpty)("showSidebarButton", ctx_r1.showSidebarButton)("showSinglePageModeButton", ctx_r1.showSinglePageModeButton)("showSpreadButton", ctx_r1.showSpreadButton)("showStampEditor", ctx_r1.showStampEditor)("showTextEditor", ctx_r1.showTextEditor)("showVerticalScrollButton", ctx_r1.showVerticalScrollButton)("showWrappedScrollButton", ctx_r1.showWrappedScrollButton)("showZoomButtons", ctx_r1.showZoomButtons && ctx_r1.pageViewMode !== "book")("spread", ctx_r1.spread)("textLayer", ctx_r1.textLayer)("toolbarMarginTop", ctx_r1.toolbarMarginTop)("toolbarWidth", ctx_r1.toolbarWidth)("zoomLevels", ctx_r1.zoomLevels)("findbarVisible", ctx_r1.findbarVisible);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfJsVersion >= "4.1");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.pdfJsVersion >= "4.1");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("server-side-rendering", ctx_r1.serverSideRendering);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("server-side-rendering", ctx_r1.serverSideRendering);
    i0.ɵɵadvance(14);
    i0.ɵɵclassProp("server-side-rendering", ctx_r1.serverSideRendering);
    i0.ɵɵproperty("customSecondaryToolbar", ctx_r1.customSecondaryToolbar)("secondaryToolbarTop", ctx_r1.secondaryToolbarTop)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale)("localizationInitialized", ctx_r1.localizationInitialized);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("server-side-rendering", ctx_r1.serverSideRendering);
    i0.ɵɵproperty("findbarLeft", ctx_r1.findbarLeft)("findbarTop", ctx_r1.findbarTop)("mobileFriendlyZoomScale", ctx_r1.mobileFriendlyZoomScale)("showFindButton", ctx_r1.showFindButton || false)("customFindbarInputArea", ctx_r1.customFindbarInputArea)("customFindbarButtons", ctx_r1.customFindbarButtons)("showFindCurrentPageOnly", ctx_r1.showFindCurrentPageOnly)("showFindEntirePhrase", ctx_r1.showFindEntirePhrase)("showFindEntireWord", ctx_r1.showFindEntireWord)("showFindFuzzySearch", ctx_r1.showFindFuzzySearch)("showFindHighlightAll", ctx_r1.showFindHighlightAll)("showFindMatchDiacritics", ctx_r1.showFindMatchDiacritics)("showFindMatchCase", ctx_r1.showFindMatchCase)("showFindMessages", ctx_r1.showFindMessages)("showFindPageRange", ctx_r1.showFindPageRange)("showFindResultsCount", ctx_r1.showFindResultsCount);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("top", ctx_r1.viewerPositionTop)("background-color", ctx_r1.backgroundColor);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasSignature && ctx_r1.showUnverifiedSignatures);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngIf", ctx_r1.pdfJsVersion < "4.1");
} }
function NgxExtendedPdfViewerComponent_ng_template_7_Template(rf, ctx) { }
function isIOS() {
    if (typeof window === 'undefined') {
        // server-side rendering
        return false;
    }
    return (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document));
}
export class NgxExtendedPdfViewerComponent {
    ngZone;
    platformId;
    notificationService;
    location;
    elementRef;
    platformLocation;
    cdr;
    service;
    renderer;
    pdfCspPolicyService;
    static originalPrint = typeof window !== 'undefined' ? window.print : undefined;
    ngxExtendedPdfViewerIncompletelyInitialized = true;
    formSupport = new NgxFormSupport();
    /**
     * The dummy components are inserted automatically when the user customizes the toolbar
     * without adding every original toolbar item. Without the dummy components, the
     * initialization code of pdf.js crashes because it assume that every standard widget is there.
     */
    dummyComponents;
    root;
    annotationEditorEvent = new EventEmitter();
    /* UI templates */
    customFindbarInputArea;
    customToolbar;
    customFindbar;
    customFindbarButtons;
    customPdfViewer;
    customSecondaryToolbar;
    customSidebar;
    customThumbnail;
    customFreeFloatingBar;
    showFreeFloatingBar = true;
    enableDragAndDrop = true;
    localizationInitialized = false;
    set formData(formData) {
        this.formSupport.formData = formData;
    }
    disableForms = false;
    get formDataChange() {
        return this.formSupport.formDataChange;
    }
    _pageViewMode = 'multiple';
    baseHref;
    /** This flag prevents trying to load a file twice if the user uploads it using the file upload dialog or via drag'n'drop */
    srcChangeTriggeredByUser = false;
    get pageViewMode() {
        return this._pageViewMode;
    }
    set pageViewMode(viewMode) {
        if (isPlatformBrowser(this.platformId)) {
            const hasChanged = this._pageViewMode !== viewMode;
            if (hasChanged) {
                const mustRedraw = !this.ngxExtendedPdfViewerIncompletelyInitialized && (this._pageViewMode === 'book' || viewMode === 'book');
                this._pageViewMode = viewMode;
                this.pageViewModeChange.emit(this._pageViewMode);
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions?.set('pageViewMode', this.pageViewMode);
                const PDFViewerApplication = window.PDFViewerApplication;
                if (PDFViewerApplication) {
                    PDFViewerApplication.pdfViewer.pageViewMode = this._pageViewMode;
                    PDFViewerApplication.findController.pageViewMode = this._pageViewMode;
                }
                if (viewMode === 'infinite-scroll') {
                    if (this.scrollMode === ScrollModeType.page || this.scrollMode === ScrollModeType.horizontal) {
                        this.scrollMode = ScrollModeType.vertical;
                        PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: Number(this.scrollMode) });
                    }
                    this.removeScrollbarInInfiniteScrollMode(false);
                }
                else if (viewMode !== 'multiple') {
                    this.scrollMode = ScrollModeType.vertical;
                }
                else {
                    if (this.scrollMode === ScrollModeType.page) {
                        this.scrollMode = ScrollModeType.vertical;
                    }
                    this.removeScrollbarInInfiniteScrollMode(true);
                }
                if (viewMode === 'single') {
                    // since pdf.js, our custom single-page-mode has been replaced by the standard scrollMode="page"
                    this.scrollMode = ScrollModeType.page;
                    this._pageViewMode = viewMode;
                }
                if (viewMode === 'book') {
                    this.showBorders = false;
                    if (this.scrollMode !== ScrollModeType.vertical) {
                        this.scrollMode = ScrollModeType.vertical;
                    }
                }
                if (mustRedraw) {
                    if (viewMode !== 'book') {
                        const ngx = this.elementRef.nativeElement;
                        const viewerContainer = ngx.querySelector('#viewerContainer');
                        viewerContainer.style.width = '';
                        viewerContainer.style.overflow = '';
                        viewerContainer.style.marginRight = '';
                        viewerContainer.style.marginLeft = '';
                        const viewer = ngx.querySelector('#viewer');
                        viewer.style.maxWidth = '';
                        viewer.style.minWidth = '';
                    }
                    this.openPDF2();
                }
            }
        }
    }
    pageViewModeChange = new EventEmitter();
    progress = new EventEmitter();
    secondaryToolbarComponent;
    sidebarComponent;
    /* regular attributes */
    _src;
    srcChange = new EventEmitter();
    _scrollMode = ScrollModeType.vertical;
    get scrollMode() {
        return this._scrollMode;
    }
    set scrollMode(value) {
        if (this._scrollMode !== value) {
            const PDFViewerApplication = window.PDFViewerApplication;
            if (PDFViewerApplication?.pdfViewer) {
                if (PDFViewerApplication.pdfViewer.scrollMode !== Number(this.scrollMode)) {
                    PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: Number(this.scrollMode) });
                }
            }
            this._scrollMode = value;
            if (this._scrollMode === ScrollModeType.page) {
                if (this.pageViewMode !== 'single') {
                    this._pageViewMode = 'single';
                    this.pageViewModeChange.emit(this.pageViewMode);
                }
            }
            else if (this.pageViewMode === 'single' || this._scrollMode === ScrollModeType.horizontal) {
                this._pageViewMode = 'multiple';
                this.pageViewModeChange.emit(this.pageViewMode);
            }
        }
    }
    scrollModeChange = new EventEmitter();
    authorization = undefined;
    httpHeaders = undefined;
    contextMenuAllowed = true;
    afterPrint = new EventEmitter();
    beforePrint = new EventEmitter();
    currentZoomFactor = new EventEmitter();
    /** This field stores the previous zoom level if the page is enlarged with a double-tap or double-click */
    previousZoom;
    enablePrint = true;
    /**
     * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
     * Most users can let this parameter safely at it's default value of zero.
     * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
     * after the PDF files, so they are not available when the PDF viewer is initialized).
     */
    delayFirstView = 0;
    showTextEditor = true;
    showStampEditor = true;
    showDrawEditor = true;
    showHighlightEditor = true;
    /** store the timeout id so it can be canceled if user leaves the page before the PDF is shown */
    initTimeout;
    /** How many log messages should be printed?
     * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
    logLevel = VerbosityLevel.WARNINGS;
    relativeCoordsOptions = {};
    /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
    _minifiedJSLibraries = true;
    get minifiedJSLibraries() {
        return this._minifiedJSLibraries;
    }
    set minifiedJSLibraries(value) {
        this._minifiedJSLibraries = value;
        if (value) {
            pdfDefaultOptions._internalFilenameSuffix = '.min';
        }
        else {
            pdfDefaultOptions._internalFilenameSuffix = '';
        }
    }
    primaryMenuVisible = true;
    /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
     * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
    printResolution = null;
    rotation;
    rotationChange = new EventEmitter();
    annotationLayerRendered = new EventEmitter();
    annotationEditorLayerRendered = new EventEmitter();
    xfaLayerRendered = new EventEmitter();
    outlineLoaded = new EventEmitter();
    attachmentsloaded = new EventEmitter();
    layersloaded = new EventEmitter();
    hasSignature;
    set src(url) {
        if (url instanceof Uint8Array) {
            this._src = url.buffer;
        }
        else if (url instanceof URL) {
            this._src = url.toString();
        }
        else if (typeof Blob !== 'undefined' && url instanceof Blob) {
            // additional check introduced to support server side rendering
            const reader = new FileReader();
            reader.onloadend = () => {
                setTimeout(() => {
                    this.src = new Uint8Array(reader.result);
                    if (this.service.ngxExtendedPdfViewerInitialized) {
                        if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                            this.openPDF();
                        }
                        else {
                            (async () => this.openPDF2())();
                        }
                        // else openPDF is called later, so we do nothing to prevent loading the PDF file twice
                    }
                });
            };
            reader.readAsArrayBuffer(url);
        }
        else if (typeof url === 'string') {
            this._src = url;
            if (url.length > 980) {
                // minimal length of a base64 encoded PDF
                if (url.length % 4 === 0) {
                    if (/^[a-zA-Z\d/+]+={0,2}$/.test(url)) {
                        console.error('The URL looks like a base64 encoded string. If so, please use the attribute [base64Src] instead of [src]');
                    }
                }
            }
        }
        else {
            this._src = url;
        }
    }
    set base64Src(base64) {
        if (base64) {
            if (typeof window === 'undefined') {
                // server-side rendering
                return;
            }
            const binary_string = atob(base64);
            const len = binary_string.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            this.src = bytes.buffer;
        }
        else {
            this._src = undefined;
        }
    }
    /**
     * The combination of height, minHeight, and autoHeight ensures the PDF height of the PDF viewer is calculated correctly when the height is a percentage.
     * By default, many CSS frameworks make a div with 100% have a height or zero pixels. checkHeigth() fixes this.
     */
    autoHeight = false;
    minHeight = undefined;
    _height = '100%';
    set height(h) {
        this.minHeight = undefined;
        this.autoHeight = false;
        if (h) {
            if (h === 'auto') {
                this.autoHeight = true;
                this._height = undefined;
            }
            else {
                this._height = h;
            }
        }
        else {
            this.height = '100%';
        }
        setTimeout(() => {
            this.checkHeight();
        });
    }
    get height() {
        return this._height;
    }
    forceUsingLegacyES5 = false;
    backgroundColor = '#e8e8eb';
    /** Allows the user to define the name of the file after clicking "download" */
    filenameForDownload = undefined;
    /** Allows the user to disable the keyboard bindings completely */
    ignoreKeyboard = false;
    /** Allows the user to disable a list of key bindings. */
    ignoreKeys = [];
    /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
    acceptKeys = [];
    /** Allows the user to put the viewer's svg images into an arbitrary folder */
    imageResourcesPath = assetsUrl(pdfDefaultOptions.assetsFolder) + '/images/';
    /** Allows the user to put their locale folder into an arbitrary folder */
    localeFolderPath = assetsUrl(pdfDefaultOptions.assetsFolder) + '/locale';
    /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
     */
    language = undefined;
    /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
    listenToURL = false;
    /** Navigate to a certain "named destination" */
    nameddest = undefined;
    /** allows you to pass a password to read password-protected files */
    password = undefined;
    replaceBrowserPrint = true;
    _showSidebarButton = true;
    viewerPositionTop = '32px';
    /** pdf.js can show signatures, but fails to verify them. So they are switched off by default.
     * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
     */
    showUnverifiedSignatures = false;
    startTabindex;
    get showSidebarButton() {
        return this._showSidebarButton;
    }
    set showSidebarButton(show) {
        if (typeof window === 'undefined') {
            // server-side rendering
            this._showSidebarButton = false;
            return;
        }
        this._showSidebarButton = show;
        if (this._showSidebarButton) {
            const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
            let factor = 1;
            if (isIE) {
                factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
            }
            this.findbarLeft = (68 * factor).toString() + 'px';
            return;
        }
        this.findbarLeft = '0px';
    }
    _sidebarVisible = undefined;
    get sidebarVisible() {
        return this._sidebarVisible;
    }
    set sidebarVisible(value) {
        if (value !== this._sidebarVisible) {
            this.sidebarVisibleChange.emit(value);
        }
        this._sidebarVisible = value;
        const PDFViewerApplication = window.PDFViewerApplication;
        if (PDFViewerApplication?.pdfSidebar) {
            if (this.sidebarVisible) {
                PDFViewerApplication.pdfSidebar.open();
                const view = Number(this.activeSidebarView);
                if (view === 1 || view === 2 || view === 3 || view === 4) {
                    PDFViewerApplication.pdfSidebar.switchView(view, true);
                }
                else {
                    console.error('[activeSidebarView] must be an integer value between 1 and 4');
                }
            }
            else {
                PDFViewerApplication.pdfSidebar.close();
            }
        }
    }
    sidebarVisibleChange = new EventEmitter();
    activeSidebarView = PdfSidebarView.OUTLINE;
    activeSidebarViewChange = new EventEmitter();
    findbarVisible = false;
    findbarVisibleChange = new EventEmitter();
    propertiesDialogVisible = false;
    propertiesDialogVisibleChange = new EventEmitter();
    showFindButton = undefined;
    showFindHighlightAll = true;
    showFindMatchCase = true;
    showFindCurrentPageOnly = true;
    showFindPageRange = true;
    showFindEntireWord = true;
    showFindEntirePhrase = true;
    showFindMatchDiacritics = true;
    showFindFuzzySearch = true;
    showFindResultsCount = true;
    showFindMessages = true;
    showPagingButtons = true;
    showZoomButtons = true;
    showPresentationModeButton = false;
    showOpenFileButton = true;
    showPrintButton = true;
    showDownloadButton = true;
    theme = 'light';
    showToolbar = true;
    showSecondaryToolbarButton = true;
    showSinglePageModeButton = true;
    showVerticalScrollButton = true;
    showHorizontalScrollButton = true;
    showWrappedScrollButton = true;
    showInfiniteScrollButton = true;
    showBookModeButton = true;
    set showRotateButton(visibility) {
        this.showRotateCwButton = visibility;
        this.showRotateCcwButton = visibility;
    }
    showRotateCwButton = true;
    showRotateCcwButton = true;
    _handTool = !isIOS();
    set handTool(handTool) {
        if (isIOS() && handTool) {
            console.log("On iOS, the handtool doesn't work reliably. Plus, you don't need it because touch gestures allow you to distinguish easily between swiping and selecting text. Therefore, the library ignores your setting.");
            return;
        }
        this._handTool = handTool;
    }
    get handTool() {
        return this._handTool;
    }
    handToolChange = new EventEmitter();
    showHandToolButton = false;
    _showScrollingButton = true;
    get showScrollingButton() {
        if (this.pageViewMode === 'multiple') {
            return this._showScrollingButton;
        }
        return false;
    }
    set showScrollingButton(val) {
        this._showScrollingButton = val;
    }
    showSpreadButton = true;
    showPropertiesButton = true;
    showBorders = true;
    spread;
    spreadChange = new EventEmitter();
    thumbnailDrawn = new EventEmitter();
    _page = undefined;
    get page() {
        return this._page;
    }
    set page(p) {
        if (p) {
            // silently cope with strings
            this._page = Number(p);
        }
        else {
            this._page = undefined;
        }
    }
    pageChange = new EventEmitter();
    pageLabel = undefined;
    pageLabelChange = new EventEmitter();
    pagesLoaded = new EventEmitter();
    pageRender = new EventEmitter();
    pageRendered = new EventEmitter();
    pdfDownloaded = new EventEmitter();
    pdfLoaded = new EventEmitter();
    pdfLoadingStarts = new EventEmitter();
    pdfLoadingFailed = new EventEmitter();
    textLayer = undefined;
    textLayerRendered = new EventEmitter();
    annotationEditorModeChanged = new EventEmitter();
    updateFindMatchesCount = new EventEmitter();
    updateFindState = new EventEmitter();
    /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
    zoom = undefined;
    zoomChange = new EventEmitter();
    zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
    maxZoom = 10;
    minZoom = 0.1;
    /** This attribute allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    _mobileFriendlyZoom = '100%';
    mobileFriendlyZoomScale = 1;
    toolbarMarginTop = '0px';
    toolbarWidth = '100%';
    toolbar = undefined;
    onToolbarLoaded(toolbarElement) {
        this.toolbar = toolbarElement;
    }
    toolbarWidthInPixels = 3.14159265359; // magic number indicating the toolbar size hasn't been determined yet
    secondaryToolbarTop = undefined;
    sidebarPositionTop = undefined;
    // dirty IE11 hack - temporary solution
    findbarTop = undefined;
    // dirty IE11 hack - temporary solution
    findbarLeft = undefined;
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    get pdfJsVersion() {
        return getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
    get majorMinorPdfJsVersion() {
        const fullVersion = this.pdfJsVersion;
        const pos = fullVersion.lastIndexOf('.');
        return fullVersion.substring(0, pos).replace('.', '-');
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     */
    set mobileFriendlyZoom(zoom) {
        // tslint:disable-next-line:triple-equals - the type conversion is intended
        if (zoom == 'true') {
            zoom = '150%';
            // tslint:disable-next-line:triple-equals - the type conversion is intended
        }
        else if (zoom == 'false' || zoom === undefined || zoom === null) {
            zoom = '100%';
        }
        this._mobileFriendlyZoom = zoom;
        let factor = 1;
        if (!String(zoom).includes('%')) {
            zoom = 100 * Number(zoom) + '%';
        }
        factor = Number((zoom || '100').replace('%', '')) / 100;
        this.mobileFriendlyZoomScale = factor;
        this.toolbarWidth = (100 / factor).toString() + '%';
        this.toolbarMarginTop = (factor - 1) * 16 + 'px';
        setTimeout(() => this.calcViewerPositionTop());
    }
    shuttingDown = false;
    serverSideRendering = true;
    calcViewerPositionTop() {
        if (this.toolbar === undefined) {
            this.sidebarPositionTop = '0';
            return;
        }
        let top = this.toolbar.getBoundingClientRect().height;
        if (top < 33) {
            this.viewerPositionTop = '33px';
        }
        else {
            this.viewerPositionTop = top + 'px';
        }
        const factor = top / 33;
        if (this.primaryMenuVisible) {
            this.sidebarPositionTop = (33 + 33 * (factor - 1)).toString() + 'px';
        }
        else {
            this.sidebarPositionTop = '0';
        }
        this.secondaryToolbarTop = (33 + 38 * (factor - 1)).toString() + 'px';
        this.findbarTop = (33 + 38 * (factor - 1)).toString() + 'px';
        const findButton = document.getElementById('primaryViewFind');
        if (findButton) {
            const containerPositionLeft = this.toolbar.getBoundingClientRect().left;
            const findButtonPosition = findButton.getBoundingClientRect();
            const left = Math.max(0, findButtonPosition.left - containerPositionLeft);
            this.findbarLeft = left + 'px';
        }
        else if (this.showSidebarButton) {
            this.findbarLeft = 34 + (32 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0';
        }
    }
    constructor(ngZone, platformId, notificationService, location, elementRef, platformLocation, cdr, service, renderer, pdfCspPolicyService) {
        this.ngZone = ngZone;
        this.platformId = platformId;
        this.notificationService = notificationService;
        this.location = location;
        this.elementRef = elementRef;
        this.platformLocation = platformLocation;
        this.cdr = cdr;
        this.service = service;
        this.renderer = renderer;
        this.pdfCspPolicyService = pdfCspPolicyService;
        this.baseHref = this.platformLocation.getBaseHrefFromDOM();
        this.service.recalculateSize$.subscribe(() => this.onResize());
        if (isPlatformBrowser(this.platformId)) {
            this.serverSideRendering = false;
            this.toolbarWidth = String(document.body.clientWidth);
        }
    }
    iOSVersionRequiresES5() {
        if (typeof window === 'undefined') {
            // server-side rendering
            return false;
        }
        const match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (match !== undefined && match !== null) {
            return parseInt(match[1], 10) < 14;
        }
        return false;
    }
    async needsES5() {
        if (typeof window === 'undefined') {
            // server-side rendering
            return false;
        }
        const isIE = !!window.MSInputMethodContext && !!document.documentMode;
        const isEdge = /Edge\/\d./i.test(navigator.userAgent);
        const isIOs13OrBelow = this.iOSVersionRequiresES5();
        let needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
        if (needsES5 || isIE || isEdge || isIOs13OrBelow || this.forceUsingLegacyES5) {
            return true;
        }
        return !(await this.supportsOptionalChaining());
    }
    supportsOptionalChaining() {
        return new Promise((resolve) => {
            const support = window.supportsOptionalChaining;
            support !== undefined ? resolve(support) : resolve(this.addScriptOpChainingSupport());
        });
    }
    addScriptOpChainingSupport() {
        return new Promise((resolve) => {
            const script = this.createScriptElement(pdfDefaultOptions.assetsFolder + '/op-chaining-support.js');
            script.onload = () => {
                script.remove();
                resolve(window.supportsOptionalChaining);
            };
            script.onerror = () => {
                script.remove();
                window.supportsOptionalChaining = false;
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    createScriptElement(sourcePath) {
        const script = document.createElement('script');
        script.async = true;
        script.type = sourcePath.endsWith('.mjs') ? 'module' : 'text/javascript';
        this.pdfCspPolicyService.addTrustedJavaScript(script, sourcePath);
        return script;
    }
    getPdfJsPath(artifact, needsES5) {
        let suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
        const assets = pdfDefaultOptions.assetsFolder;
        const versionSuffix = getVersionSuffix(assets);
        if (versionSuffix.startsWith('4')) {
            suffix = suffix.replace('.js', '.mjs');
        }
        const artifactPath = `/${artifact}-`;
        const es5 = needsES5 ? '-es5' : '';
        return assets + artifactPath + versionSuffix + es5 + suffix;
    }
    loadViewer() {
        globalThis['ngxZone'] = this.ngZone;
        this.ngZone.runOutsideAngular(() => {
            this.needsES5().then((needsES5) => {
                const viewerPath = this.getPdfJsPath('viewer', needsES5);
                const script = this.createScriptElement(viewerPath);
                document.getElementsByTagName('head')[0].appendChild(script);
            });
        });
    }
    addFeatures() {
        return new Promise((resolve) => {
            const script = this.createScriptElement(pdfDefaultOptions.assetsFolder + '/additional-features.js');
            script.onload = () => {
                script.remove();
            };
            script.onerror = () => {
                script.remove();
                resolve();
            };
            document.body.appendChild(script);
        });
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            globalThis['setNgxExtendedPdfViewerSource'] = (url) => {
                this._src = url;
                this.srcChangeTriggeredByUser = true;
                this.srcChange.emit(url);
            };
            this.addTranslationsUnlessProvidedByTheUser();
            this.formSupport.registerFormSupportWithPdfjs(this.ngZone);
            this.loadPdfJs();
            this.hideToolbarIfItIsEmpty();
        }
    }
    loadPdfJs() {
        globalThis['ngxZone'] = this.ngZone;
        this.ngZone.runOutsideAngular(() => {
            if (!globalThis['pdfjs-dist/build/pdf']) {
                this.needsES5().then((needsES5) => {
                    if (needsES5) {
                        if (!pdfDefaultOptions.needsES5) {
                            console.log("If you see the error message \"expected expression, got '='\" above: you can safely ignore it as long as you know what you're doing. It means your browser is out-of-date. Please update your browser to benefit from the latest security updates and to enjoy a faster PDF viewer.");
                        }
                        pdfDefaultOptions.needsES5 = true;
                        console.log('Using the ES5 version of the PDF viewer. Your PDF files show faster if you update your browser.');
                    }
                    if (this.minifiedJSLibraries) {
                        if (!pdfDefaultOptions.workerSrc().endsWith('.min.mjs')) {
                            const src = pdfDefaultOptions.workerSrc();
                            pdfDefaultOptions.workerSrc = () => src.replace('.mjs', '.min.mjs');
                        }
                    }
                    const pdfJsPath = this.getPdfJsPath('pdf', needsES5);
                    if (pdfJsPath.endsWith('.mjs')) {
                        const src = pdfDefaultOptions.workerSrc();
                        pdfDefaultOptions.workerSrc = () => src.replace('.js', '.mjs');
                    }
                    const script = this.createScriptElement(pdfJsPath);
                    script.onload = () => {
                        if (!globalThis.webViewerLoad) {
                            this.loadViewer();
                        }
                    };
                    document.getElementsByTagName('head')[0].appendChild(script);
                });
            }
            else if (!globalThis.webViewerLoad) {
                this.loadViewer();
            }
        });
    }
    ngAfterViewInit() {
        if (typeof window !== 'undefined') {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                if (globalThis.webViewerLoad) {
                    this.ngZone.runOutsideAngular(() => this.doInitPDFViewer());
                }
                else {
                    setTimeout(() => this.ngAfterViewInit(), 50);
                }
            }
        }
    }
    assignTabindexes() {
        if (this.startTabindex) {
            const r = this.root.nativeElement.cloneNode(true);
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            const elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            const topRightGreaterThanBottomLeftComparator = (a, b) => {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            };
            const sorted = [...elements].sort(topRightGreaterThanBottomLeftComparator);
            for (let i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    }
    showElementsRecursively(root) {
        root.classList.remove('hidden');
        root.classList.remove('invisible');
        root.classList.remove('hiddenXXLView');
        root.classList.remove('hiddenXLView');
        root.classList.remove('hiddenLargeView');
        root.classList.remove('hiddenMediumView');
        root.classList.remove('hiddenSmallView');
        root.classList.remove('hiddenTinyView');
        root.classList.remove('visibleXXLView');
        root.classList.remove('visibleXLView');
        root.classList.remove('visibleLargeView');
        root.classList.remove('visibleMediumView');
        root.classList.remove('visibleSmallView');
        root.classList.remove('visibleTinyView');
        if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
            return;
        }
        else if (root.childElementCount > 0) {
            for (let i = 0; i < root.childElementCount; i++) {
                const c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    }
    collectElementPositions(copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            const rect = copy.getBoundingClientRect();
            const elementAndPos = {
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            };
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (let i = 0; i < copy.childElementCount; i++) {
                const c = copy.children.item(i);
                const o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    }
    doInitPDFViewer() {
        if (typeof window === 'undefined') {
            // server-side rendering
            return;
        }
        const initializeViewerAndOpenPdf = () => {
            this.localizationInitialized = true;
            this.initTimeout = setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    this.calcViewerPositionTop();
                    this.afterLibraryInit();
                    this.openPDF();
                    this.assignTabindexes();
                    if (this.replaceBrowserPrint) {
                        window.print = window.printPDF;
                    }
                }
            }, this.delayFirstView);
        };
        window.addEventListener('afterprint', () => {
            this.afterPrint.emit();
        });
        window.addEventListener('beforeprint', () => {
            this.beforePrint.emit();
        });
        if (this.service.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        const onLoaded = () => {
            this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
            initializeViewerAndOpenPdf();
        };
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout(() => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
                this.onResize();
                this.hideToolbarIfItIsEmpty();
                this.dummyComponents.addMissingStandardWidgets();
                this.ngZone.runOutsideAngular(() => globalThis.webViewerLoad());
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
                if (this.filenameForDownload) {
                    PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
                }
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
                let language = this.language === '' ? undefined : this.language;
                if (!language) {
                    if (typeof window === 'undefined') {
                        // server-side rendering
                        language = 'en';
                    }
                    else {
                        language = navigator.language;
                    }
                }
                PDFViewerApplicationOptions.set('locale', language);
                PDFViewerApplicationOptions.set('imageResourcesPath', this.imageResourcesPath);
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
                PDFViewerApplicationOptions.set('pageViewMode', this.pageViewMode);
                PDFViewerApplicationOptions.set('verbosity', this.logLevel);
                PDFViewerApplicationOptions.set('initialZoom', this.zoom);
                PDFViewerApplication.isViewerEmbedded = true;
                if (PDFViewerApplication.printKeyDownListener) {
                    window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
                }
                const body = document.getElementsByTagName('body');
                if (body[0]) {
                    const topLevelElements = body[0].children;
                    for (let i = topLevelElements.length - 1; i >= 0; i--) {
                        const e = topLevelElements.item(i);
                        if (e && e.id === 'printContainer') {
                            body[0].removeChild(e);
                        }
                    }
                }
                const pc = document.getElementById('printContainer');
                if (pc) {
                    document.getElementsByTagName('body')[0].appendChild(pc);
                }
            }
        }, 0);
    }
    addTranslationsUnlessProvidedByTheUser() {
        const link = this.renderer.createElement('link');
        link.rel = 'resource';
        link.type = 'application/l10n';
        link.href = this.localeFolderPath + '/locale.json';
        link.setAttribute('origin', 'ngx-extended-pdf-viewer');
        this.renderer.appendChild(this.elementRef.nativeElement, link);
    }
    hideToolbarIfItIsEmpty() {
        this.primaryMenuVisible = this.showToolbar;
        if (!this.showSecondaryToolbarButton || this.service.secondaryMenuIsEmpty) {
            if (!this.isPrimaryMenuVisible()) {
                this.primaryMenuVisible = false;
            }
        }
    }
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    afterLibraryInit() {
        this.notificationService.onPDFJSInit.next();
    }
    checkHeight() {
        if (this._height) {
            if (isNaN(Number(this._height.replace('%', '')))) {
                // The height is defined with one of the units vh, vw, em, rem, etc.
                // So the height check isn't necessary.
                return;
            }
        }
        if (document.querySelector('[data-pdfjsprinting]')) {
            // #1702 workaround to a Firefox bug: when printing, container.clientHeight is temporarily 0,
            // causing ngx-extended-pdf-viewer to default to 100 pixels height. So it's better
            // to do nothing.
            return;
        }
        if (typeof document !== 'undefined') {
            const container = document.getElementsByClassName('zoom')[0];
            if (container) {
                if (container.clientHeight === 0) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS && !this.autoHeight) {
                        console.warn("The height of the PDF viewer widget is zero pixels. Please check the height attribute. Is there a syntax error? Or are you using a percentage with a CSS framework that doesn't support this? The height is adjusted automatedly.");
                    }
                    this.autoHeight = true;
                }
                if (this.autoHeight) {
                    const available = window.innerHeight;
                    const rect = container.getBoundingClientRect();
                    const top = rect.top;
                    let maximumHeight = available - top;
                    // take the margins and paddings of the parent containers into account
                    const padding = this.calculateBorderMargin(container);
                    maximumHeight -= padding;
                    if (maximumHeight > 100) {
                        this.minHeight = `${maximumHeight}px`;
                    }
                    else {
                        this.minHeight = '100px';
                    }
                    this.cdr.markForCheck();
                }
            }
        }
    }
    calculateBorderMargin(container) {
        if (container) {
            const computedStyle = window.getComputedStyle(container);
            const padding = UnitToPx.toPx(computedStyle.paddingBottom);
            const margin = UnitToPx.toPx(computedStyle.marginBottom);
            if (container.style.zIndex) {
                return padding + margin;
            }
            return padding + margin + this.calculateBorderMargin(container.parentElement);
        }
        return 0;
    }
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    activateTextlayerIfNecessary(options) {
        if (this.textLayer === undefined) {
            if (!this.handTool) {
                if (options) {
                    options.set('textLayerMode', pdfDefaultOptions.textLayerMode);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout(() => {
                        // todo remove this hack:
                        const viewFind = document.getElementById('viewFind');
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        const findbar = document.getElementById('findbar');
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    });
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', this.showHandToolButton ? pdfDefaultOptions.textLayerMode : 0);
                }
                if (!this.showHandToolButton) {
                    if (this.showFindButton || this.showFindButton === undefined) {
                        this.ngZone.run(() => {
                            this.showFindButton = false;
                        });
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                            this.showHandToolButton = false;
                        }
                    }
                }
            }
        }
        else {
            if (this.textLayer) {
                // todo: is this a redundant check?
                if (options) {
                    options.set('textLayerMode', pdfDefaultOptions.textLayerMode);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout(() => {
                        // todo remove this hack:
                        const viewFind = document.getElementById('viewFind');
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        const findbar = document.getElementById('findbar');
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    });
                }
            }
            else {
                // todo: is the else branch dead code?
                if (options) {
                    options.set('textLayerMode', 0);
                }
                this.textLayer = false;
                if (this.showFindButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        // tslint:disable-next-line:max-line-length
                        console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        this.ngZone.run(() => {
                            this.showFindButton = false;
                        });
                    }
                }
                if (this.showHandToolButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        console.warn(
                        // tslint:disable-next-line:max-line-length
                        'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                        this.showHandToolButton = false;
                    }
                }
            }
        }
    }
    async overrideDefaultSettings() {
        if (typeof window === 'undefined') {
            return; // server side rendering
        }
        const options = window.PDFViewerApplicationOptions;
        // tslint:disable-next-line:forin
        for (const key in pdfDefaultOptions) {
            options.set(key, pdfDefaultOptions[key]);
        }
        options.set('disablePreferences', true);
        await this.setZoom();
        options.set('ignoreKeyboard', this.ignoreKeyboard);
        options.set('ignoreKeys', this.ignoreKeys);
        options.set('acceptKeys', this.acceptKeys);
        this.activateTextlayerIfNecessary(options);
        if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
            options.set('scrollModeOnLoad', this.scrollMode);
        }
        const sidebarVisible = this.sidebarVisible;
        const PDFViewerApplication = window.PDFViewerApplication;
        if (sidebarVisible !== undefined) {
            PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            if (PDFViewerApplication.appConfig) {
                PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? this.activeSidebarView : PdfSidebarView.NONE;
            }
            options.set('sidebarViewOnLoad', this.sidebarVisible ? this.activeSidebarView : 0);
        }
        if (this.spread === 'even') {
            options.set('spreadModeOnLoad', 2);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 2;
            }
            this.onSpreadChange('even');
        }
        else if (this.spread === 'odd') {
            options.set('spreadModeOnLoad', 1);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 1;
            }
            this.onSpreadChange('odd');
        }
        else {
            options.set('spreadModeOnLoad', 0);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 0;
            }
            this.onSpreadChange('off');
        }
        if (this.printResolution) {
            options.set('printResolution', this.printResolution);
        }
        if (this.showBorders === false) {
            options.set('removePageBorders', !this.showBorders);
        }
    }
    openPDF() {
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.enablePrint = this.enablePrint;
        this.service.ngxExtendedPdfViewerInitialized = true;
        this.registerEventListeners(PDFViewerApplication);
        this.selectCursorTool();
        if (!this.listenToURL) {
            PDFViewerApplication.pdfLinkService.setHash = function () { };
        }
        if (this._src) {
            this.ngxExtendedPdfViewerIncompletelyInitialized = false;
            this.initTimeout = null;
            setTimeout(async () => this.checkHeight(), 100);
            // open a file in the viewer
            if (!!this._src) {
                const options = {
                    password: this.password,
                    verbosity: this.logLevel,
                };
                if (this._src['range']) {
                    options.range = this._src['range'];
                }
                if (this.httpHeaders) {
                    options.httpHeaders = this.httpHeaders;
                }
                if (this.authorization) {
                    options.withCredentials = true;
                    if (typeof this.authorization != 'boolean') {
                        if (!options.httpHeaders)
                            options.httpHeaders = {};
                        options.httpHeaders.Authorization = this.authorization;
                    }
                }
                options.baseHref = this.baseHref;
                PDFViewerApplication.onError = (error) => this.pdfLoadingFailed.emit(error);
                this.ngZone.runOutsideAngular(async () => {
                    if (typeof this._src === 'string') {
                        options.url = this._src;
                    }
                    else if (this._src instanceof ArrayBuffer) {
                        options.data = this._src;
                    }
                    else if (this._src instanceof Uint8Array) {
                        options.data = this._src;
                    }
                    options.rangeChunkSize = pdfDefaultOptions.rangeChunkSize;
                    await PDFViewerApplication.open(options);
                    this.pdfLoadingStarts.emit({});
                    setTimeout(async () => this.setZoom());
                });
            }
            setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (this.page) {
                        PDFViewerApplication.page = Number(this.page);
                    }
                }
            }, 100);
        }
    }
    registerEventListeners(PDFViewerApplication) {
        PDFViewerApplication.eventBus.on('annotation-editor-event', (x) => {
            this.ngZone.run(() => {
                this.annotationEditorEvent.emit(x);
            });
        });
        PDFViewerApplication.eventBus.on('toggleSidebar', (x) => {
            this.ngZone.run(() => {
                this.sidebarVisible = x.visible;
                this.sidebarVisibleChange.emit(x.visible);
            });
        });
        PDFViewerApplication.eventBus.on('textlayerrendered', (x) => {
            this.ngZone.run(() => this.textLayerRendered.emit(x));
        });
        PDFViewerApplication.eventBus.on('annotationeditormodechanged', (x) => {
            // we're using a timeout here to make sure the editor is already visible
            // when the event is caught. Pdf.js fires it a bit early.
            setTimeout(() => this.annotationEditorModeChanged.emit(x));
            if (x.mode === 0) {
                document.body.classList.remove('ngx-extended-pdf-viewer-prevent-touch-move');
            }
            else {
                document.body.classList.add('ngx-extended-pdf-viewer-prevent-touch-move');
            }
        });
        PDFViewerApplication.eventBus.on('scrollmodechanged', (x) => {
            this.ngZone.run(() => {
                this._scrollMode = x.mode;
                this.scrollModeChange.emit(x.mode);
                if (x.mode === ScrollModeType.page) {
                    if (this.pageViewMode !== 'single') {
                        this.pageViewModeChange.emit('single');
                        this._pageViewMode = 'single';
                    }
                }
            });
        });
        PDFViewerApplication.eventBus.on('progress', (x) => {
            this.ngZone.run(() => this.progress.emit(x));
        });
        PDFViewerApplication.eventBus.on('findbarclose', () => {
            this.ngZone.run(() => {
                this.findbarVisible = false;
                this.findbarVisibleChange.emit(false);
                this.cdr.markForCheck();
            });
        });
        PDFViewerApplication.eventBus.on('findbaropen', () => {
            this.ngZone.run(() => {
                this.findbarVisible = true;
                this.findbarVisibleChange.emit(true);
                this.cdr.markForCheck();
            });
        });
        PDFViewerApplication.eventBus.on('propertiesdialogclose', () => {
            this.propertiesDialogVisible = false;
            this.ngZone.run(() => this.propertiesDialogVisibleChange.emit(false));
        });
        PDFViewerApplication.eventBus.on('propertiesdialogopen', () => {
            this.propertiesDialogVisible = true;
            this.ngZone.run(() => this.propertiesDialogVisibleChange.emit(true));
        });
        PDFViewerApplication.eventBus.on('pagesloaded', (x) => {
            this.ngZone.run(() => this.pagesLoaded.emit(x));
            this.removeScrollbarInInfiniteScrollMode(false);
            if (this.rotation !== undefined && this.rotation !== null) {
                const r = Number(this.rotation);
                if (r === 0 || r === 90 || r === 180 || r === 270) {
                    PDFViewerApplication.pdfViewer.pagesRotation = r;
                }
            }
            setTimeout(() => {
                if (!this.shuttingDown) {
                    // hurried users sometimes reload the PDF before it has finished initializing
                    if (this.nameddest) {
                        PDFViewerApplication.pdfLinkService.goToDestination(this.nameddest);
                    }
                    else if (this.page) {
                        PDFViewerApplication.page = Number(this.page);
                    }
                    else if (this.pageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                    }
                }
            });
            this.setZoom();
        });
        PDFViewerApplication.eventBus.on('pagerendered', (x) => {
            this.ngZone.run(() => {
                this.pageRendered.emit(x);
                this.removeScrollbarInInfiniteScrollMode(false);
            });
        });
        PDFViewerApplication.eventBus.on('pagerender', (x) => {
            this.ngZone.run(() => {
                this.pageRender.emit(x);
            });
        });
        PDFViewerApplication.eventBus.on('download', (x) => {
            this.ngZone.run(() => {
                this.pdfDownloaded.emit(x);
            });
        });
        PDFViewerApplication.eventBus.on('scalechanging', (x) => {
            setTimeout(() => {
                this.currentZoomFactor.emit(x.scale);
                this.cdr.markForCheck();
            });
            if (x.presetValue !== 'auto' && x.presetValue !== 'page-fit' && x.presetValue !== 'page-actual' && x.presetValue !== 'page-width') {
                // ignore rounding differences
                if (Math.abs(x.previousScale - x.scale) > 0.000001) {
                    this.zoom = x.scale * 100;
                    this.zoomChange.emit(x.scale * 100);
                }
            }
            else if (x.previousPresetValue !== x.presetValue) {
                // called when the user selects one of the text values of the zoom select dropdown
                this.zoomChange.emit(x.presetValue);
            }
        });
        PDFViewerApplication.eventBus.on('rotationchanging', (x) => {
            this.ngZone.run(() => {
                this.rotationChange.emit(x.pagesRotation);
            });
        });
        PDFViewerApplication.eventBus.on('fileinputchange', (x) => {
            this.ngZone.run(() => {
                if (x.fileInput.files && x.fileInput.files.length >= 1) {
                    // drag and drop
                    this.srcChange.emit(x.fileInput.files[0].name);
                }
                else {
                    // regular file open dialog
                    const path = x.fileInput?.value?.replace('C:\\fakepath\\', '');
                    this.srcChange.emit(path);
                }
            });
        });
        PDFViewerApplication.eventBus.on('cursortoolchanged', (x) => {
            this.ngZone.run(() => {
                this.handTool = x.tool === PdfCursorTools.HAND;
                this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
            });
        });
        PDFViewerApplication.eventBus.on('sidebarviewchanged', (x) => {
            this.ngZone.run(() => {
                this.sidebarVisibleChange.emit(x.view > 0);
                if (x.view > 0) {
                    this.activeSidebarViewChange.emit(x.view);
                }
                if (this.sidebarComponent) {
                    this.sidebarComponent.showToolbarWhenNecessary();
                }
            });
        });
        PDFViewerApplication.eventBus.on('documentloaded', (pdfLoadedEvent) => {
            this.ngZone.run(() => {
                const pages = pdfLoadedEvent.source.pagesCount;
                this.pageLabel = undefined;
                if (this.page && this.page >= pages) {
                    this.page = pages;
                }
                this.scrollSignatureWarningIntoView(pdfLoadedEvent.source.pdfDocument);
                this.pdfLoaded.emit({ pagesCount: pdfLoadedEvent.source.pdfDocument?.numPages });
                if (this.findbarVisible) {
                    PDFViewerApplication.findBar.open();
                }
                if (this.propertiesDialogVisible) {
                    PDFViewerApplication.pdfDocumentProperties.open();
                }
            });
        });
        PDFViewerApplication.eventBus.on('spreadmodechanged', (event) => {
            this.ngZone.run(() => {
                const modes = ['off', 'odd', 'even'];
                this.spread = modes[event.mode];
                this.spreadChange.emit(this.spread);
            });
        });
        const hideSidebarToolbar = () => {
            this.ngZone.run(() => {
                if (this.sidebarComponent) {
                    this.sidebarComponent.showToolbarWhenNecessary();
                }
            });
        };
        PDFViewerApplication.eventBus.on('outlineloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('attachmentsloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('layersloaded', hideSidebarToolbar);
        PDFViewerApplication.eventBus.on('annotationlayerrendered', (event) => {
            const div = event.source.div;
            this.ngZone.run(() => {
                this.annotationLayerRendered.emit(event);
                this.enableOrDisableForms(div, true);
            });
        });
        PDFViewerApplication.eventBus.on('annotationeditorlayerrendered', (event) => this.ngZone.run(() => this.annotationEditorLayerRendered.emit(event)));
        PDFViewerApplication.eventBus.on('xfalayerrendered', (event) => this.ngZone.run(() => this.xfaLayerRendered.emit(event)));
        PDFViewerApplication.eventBus.on('outlineloaded', (event) => this.ngZone.run(() => this.outlineLoaded.emit(event)));
        PDFViewerApplication.eventBus.on('attachmentsloaded', (event) => this.ngZone.run(() => this.attachmentsloaded.emit(event)));
        PDFViewerApplication.eventBus.on('layersloaded', (event) => this.ngZone.run(() => this.layersloaded.emit(event)));
        PDFViewerApplication.eventBus.on('presentationmodechanged', (event) => {
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication?.pdfViewer?.destroyBookMode();
        });
        PDFViewerApplication.eventBus.on('updatefindcontrolstate', (x) => {
            this.ngZone.run(() => {
                let type = PDFViewerApplication.findController.state.type || 'find';
                if (type === 'again') {
                    type = 'findagain';
                }
                const result = {
                    caseSensitive: PDFViewerApplication.findController.state.caseSensitive,
                    entireWord: PDFViewerApplication.findController.state.entireWord,
                    findPrevious: PDFViewerApplication.findController.state.findPrevious,
                    highlightAll: PDFViewerApplication.findController.state.highlightAll,
                    matchDiacritics: PDFViewerApplication.findController.state.matchDiacritics,
                    query: PDFViewerApplication.findController.state.query,
                    type,
                };
                this.updateFindMatchesCount.emit({
                    ...result,
                    current: x.matchesCount.current,
                    total: x.matchesCount.total,
                    matches: PDFViewerApplication.findController._pageMatches,
                    matchesLength: PDFViewerApplication.findController._pageMatchesLength,
                });
                if (this.updateFindState) {
                    this.updateFindState.emit(x.state);
                }
            });
        });
        PDFViewerApplication.eventBus.on('updatefindmatchescount', (x) => {
            x.matchesCount.matches = PDFViewerApplication.findController._pageMatches;
            x.matchesCount.matchesLength = PDFViewerApplication.findController._pageMatchesLength;
            this.ngZone.run(() => this.updateFindMatchesCount.emit({
                caseSensitive: PDFViewerApplication.findController.state.caseSensitive,
                entireWord: PDFViewerApplication.findController.state.entireWord,
                findPrevious: PDFViewerApplication.findController.state.findPrevious,
                highlightAll: PDFViewerApplication.findController.state.highlightAll,
                matchDiacritics: PDFViewerApplication.findController.state.matchDiacritics,
                query: PDFViewerApplication.findController.state.query,
                type: PDFViewerApplication.findController.state.type,
                current: x.matchesCount.current,
                total: x.matchesCount.total,
                matches: x.matchesCount.matches,
                matchesLength: x.matchesCount.matchesLength,
            }));
        });
        PDFViewerApplication.eventBus.on('pagechanging', (x) => {
            if (!this.shuttingDown) {
                // hurried users sometimes reload the PDF before it has finished initializing
                this.ngZone.run(() => {
                    const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                    const currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                    if (currentPage !== this.page) {
                        this.pageChange.emit(currentPage);
                    }
                    if (currentPageLabel !== this.pageLabel) {
                        this.pageLabelChange.emit(currentPageLabel);
                    }
                });
            }
        });
    }
    removeScrollbarInInfiniteScrollMode(restoreHeight) {
        if (this.pageViewMode === 'infinite-scroll' || restoreHeight) {
            const viewer = document.getElementById('viewer');
            const zoom = document.getElementsByClassName('zoom')[0];
            if (viewer) {
                setTimeout(() => {
                    if (this.pageViewMode === 'infinite-scroll') {
                        const height = viewer.clientHeight + 17;
                        if (this.primaryMenuVisible) {
                            this.height = height + 35 + 'px';
                        }
                        else if (height > 17) {
                            this.height = height + 'px';
                        }
                        else if (this.height === undefined) {
                            this.height = '100%';
                        }
                        if (zoom) {
                            zoom.style.height = this.height;
                        }
                    }
                    else if (restoreHeight) {
                        this.autoHeight = true;
                        this._height = undefined;
                        this.checkHeight();
                    }
                });
            }
        }
    }
    async openPDF2() {
        this.overrideDefaultSettings();
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.destroyBookMode();
        PDFViewerApplication.pdfViewer.stopRendering();
        PDFViewerApplication.pdfThumbnailViewer.stopRendering();
        // #802 clear the form data; otherwise the "download" dialogs opens
        PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
        await PDFViewerApplication.close();
        this.formSupport.reset();
        const options = {
            password: this.password,
            verbosity: this.logLevel,
        };
        if (this._src?.['range']) {
            options.range = this._src['range'];
        }
        if (this.httpHeaders) {
            options.httpHeaders = this.httpHeaders;
        }
        if (this.authorization) {
            options.withCredentials = true;
            if (typeof this.authorization != 'boolean') {
                if (!options.httpHeaders)
                    options.httpHeaders = {};
                options.httpHeaders.Authorization = this.authorization;
            }
        }
        options.baseHref = this.baseHref;
        try {
            if (typeof this._src === 'string') {
                options.url = this._src;
            }
            else if (this._src instanceof ArrayBuffer) {
                options.data = this._src;
                if (this._src.byteLength === 0) {
                    // sometimes ngOnInit() calls openPdf2 too early
                    // so let's ignore empty arrays
                    return;
                }
            }
            else if (this._src instanceof Uint8Array) {
                options.data = this._src;
                if (this._src.length === 0) {
                    // sometimes ngOnInit() calls openPdf2 too early
                    // so let's ignore empty arrays
                    return;
                }
            }
            options.rangeChunkSize = pdfDefaultOptions.rangeChunkSize;
            await PDFViewerApplication.open(options);
        }
        catch (error) {
            this.pdfLoadingFailed.emit(error);
        }
    }
    selectCursorTool() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    }
    async ngOnDestroy() {
        if (typeof window === 'undefined') {
            return; // fast escape for server side rendering
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication?.pdfViewer?.destroyBookMode();
        PDFViewerApplication?.pdfViewer?.stopRendering();
        PDFViewerApplication?.pdfThumbnailViewer?.stopRendering();
        const originalPrint = NgxExtendedPdfViewerComponent.originalPrint;
        if (window && originalPrint && !originalPrint.toString().includes('printPdf')) {
            window.print = originalPrint;
        }
        const printContainer = document.querySelector('#printContainer');
        if (printContainer) {
            printContainer.parentElement?.removeChild(printContainer);
        }
        window.getFormValueFromAngular = undefined;
        window.registerAcroformAnnotations = undefined;
        this.shuttingDown = true;
        this.service.ngxExtendedPdfViewerInitialized = false;
        if (this.initTimeout) {
            clearTimeout(this.initTimeout);
            this.initTimeout = undefined;
        }
        if (PDFViewerApplication) {
            // #802 clear the form data; otherwise the "download" dialogs opens
            PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
            this.formSupport.reset();
            PDFViewerApplication._cleanup();
            try {
                await PDFViewerApplication.close();
            }
            catch (error) {
                // just ignore it
                // for example, the secondary toolbar may have not been initialized yet, so
                // trying to destroy it result in errors
            }
            if (PDFViewerApplication.printKeyDownListener) {
                removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            if (PDFViewerApplication._boundEvents) {
                PDFViewerApplication.unbindWindowEvents();
            }
            const bus = PDFViewerApplication.eventBus;
            if (bus) {
                PDFViewerApplication.unbindEvents();
                for (const key in bus._listeners) {
                    if (bus._listeners[key]) {
                        const list = bus._listeners[key];
                        // not sure if the for loop is necessary - but
                        // it might improve garbage collection if the "listeners"
                        // array is stored somewhere else
                        for (let i = 0; i < list.length; i++) {
                            list[i] = undefined;
                        }
                        bus._listeners[key] = undefined;
                    }
                }
            }
            PDFViewerApplication.eventBus = null;
        }
    }
    isPrimaryMenuVisible() {
        if (this.showToolbar) {
            const visible = this.showDownloadButton ||
                this.showDrawEditor ||
                this.showHighlightEditor ||
                this.showTextEditor ||
                this.showFindButton ||
                this.showOpenFileButton ||
                this.showPagingButtons ||
                this.showPresentationModeButton ||
                this.showPrintButton ||
                this.showPropertiesButton ||
                this.showRotateCwButton ||
                this.showRotateCcwButton ||
                this.showHandToolButton ||
                this.showScrollingButton ||
                this.showSpreadButton ||
                this.showSidebarButton ||
                this.showZoomButtons;
            if (visible) {
                return true;
            }
        }
        return false;
    }
    async ngOnChanges(changes) {
        if (typeof window === 'undefined') {
            return; // server side rendering
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
        if (this.service.ngxExtendedPdfViewerInitialized) {
            if ('src' in changes || 'base64Src' in changes) {
                if (this.srcChangeTriggeredByUser) {
                    this.srcChangeTriggeredByUser = false;
                }
                else {
                    if (this.pageViewMode === 'book') {
                        const PDFViewerApplication = window.PDFViewerApplication;
                        PDFViewerApplication?.pdfViewer?.destroyBookMode();
                        PDFViewerApplication?.pdfViewer?.stopRendering();
                        PDFViewerApplication?.pdfThumbnailViewer?.stopRendering();
                    }
                    if (!!this._src) {
                        if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                            this.openPDF();
                        }
                        else {
                            await this.openPDF2();
                        }
                    }
                    else {
                        // #802 clear the form data; otherwise the "download" dialogs opens
                        PDFViewerApplication.pdfDocument?.annotationStorage?.resetModified();
                        this.formSupport.reset();
                        let inputField = PDFViewerApplication.appConfig?.openFileInput;
                        if (!inputField) {
                            inputField = document.querySelector('#fileInput');
                        }
                        if (inputField) {
                            inputField.value = '';
                        }
                        await PDFViewerApplication.close();
                    }
                }
            }
            if ('enableDragAndDrop' in changes) {
                PDFViewerApplicationOptions.set('enableDragAndDrop', this.enableDragAndDrop);
            }
            if ('findbarVisible' in changes) {
                if (changes['findbarVisible'].currentValue) {
                    PDFViewerApplication.findBar.open();
                }
                else {
                    PDFViewerApplication.findBar.close();
                }
            }
            if ('propertiesDialogVisible' in changes) {
                if (this.propertiesDialogVisible) {
                    PDFViewerApplication.pdfDocumentProperties.open();
                }
                else {
                    PDFViewerApplication.pdfDocumentProperties.close();
                }
            }
            if ('zoom' in changes) {
                await this.setZoom();
            }
            if ('maxZoom' in changes) {
                PDFViewerApplicationOptions.set('maxZoom', this.maxZoom);
            }
            if ('minZoom' in changes) {
                PDFViewerApplicationOptions.set('minZoom', this.minZoom);
            }
            if ('handTool' in changes) {
                this.selectCursorTool();
            }
            if ('page' in changes) {
                if (this.page) {
                    // tslint:disable-next-line: triple-equals
                    if (this.page != PDFViewerApplication.page) {
                        PDFViewerApplication.page = this.page;
                    }
                }
            }
            if ('pageLabel' in changes) {
                if (this.pageLabel) {
                    if (this.pageLabel !== PDFViewerApplication.pdfViewer.currentPageLabel) {
                        PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                    }
                }
            }
            if ('rotation' in changes) {
                if (this.rotation) {
                    const r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                else {
                    PDFViewerApplication.pdfViewer.pagesRotation = 0;
                }
            }
            if ('scrollMode' in changes) {
                if (this.scrollMode || this.scrollMode === ScrollModeType.vertical) {
                    if (PDFViewerApplication.pdfViewer.scrollMode !== Number(this.scrollMode)) {
                        PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: Number(this.scrollMode) });
                    }
                }
            }
            if ('activeSidebarView' in changes) {
                if (this.sidebarVisible) {
                    PDFViewerApplication.pdfSidebar.open();
                    const view = Number(this.activeSidebarView);
                    if (view === 1 || view === 2 || view === 3 || view === 4) {
                        PDFViewerApplication.pdfSidebar.switchView(view, true);
                    }
                    else {
                        console.error('[activeSidebarView] must be an integer value between 1 and 4');
                    }
                }
                else {
                    PDFViewerApplication.pdfSidebar.close();
                }
            }
            if ('filenameForDownload' in changes) {
                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
            }
            if ('nameddest' in changes) {
                if (this.nameddest) {
                    PDFViewerApplication.pdfLinkService.goToDestination(this.nameddest);
                }
            }
            if ('spread' in changes) {
                if (this.spread === 'even') {
                    PDFViewerApplication.spreadModeOnLoad = 2;
                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                    this.onSpreadChange('even');
                }
                else if (this.spread === 'odd') {
                    PDFViewerApplication.spreadModeOnLoad = 1;
                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                    this.onSpreadChange('odd');
                }
                else {
                    PDFViewerApplication.spreadModeOnLoad = 0;
                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                    this.onSpreadChange('off');
                }
            }
            this.hideToolbarIfItIsEmpty();
            setTimeout(() => this.calcViewerPositionTop());
        } // end of if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized)
        if ('printResolution' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    const viewer = document.getElementById('viewer');
                    if (this.showBorders) {
                        viewer.classList.remove('removePageBorders');
                    }
                    else {
                        viewer.classList.add('removePageBorders');
                    }
                    if (PDFViewerApplication.pdfViewer) {
                        PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                    }
                    const zoomEvent = {
                        source: viewer,
                        // tslint:disable-next-line:no-bitwise
                        scale: (Number(this.zoom) | 100) / 100,
                        presetValue: this.zoom,
                    };
                    PDFViewerApplication.eventBus.dispatch('scalechanging', zoomEvent);
                }
            }
        }
        if ('showUnverifiedSignatures' in changes) {
            if (PDFViewerApplication?.pdfDocument) {
                PDFViewerApplication.pdfDocument._transport.messageHandler.send('showUnverifiedSignatures', this.showUnverifiedSignatures);
            }
        }
        if ('formData' in changes) {
            if (!changes['formData'].isFirstChange()) {
                this.formSupport.updateFormFieldsInPdfCalledByNgOnChanges(changes['formData'].previousValue);
            }
        }
        if ('enablePrint' in changes) {
            if (!changes['enablePrint'].isFirstChange()) {
                PDFViewerApplication.enablePrint = this.enablePrint;
            }
        }
        if (('customFindbar' in changes && !changes['customFindbar'].isFirstChange()) ||
            ('customFindbarButtons' in changes && !changes['customFindbarButtons'].isFirstChange()) ||
            ('customFindbarInputArea' in changes && !changes['customFindbarInputArea'].isFirstChange()) ||
            ('customToolbar' in changes && !changes['customToolbar'].isFirstChange())) {
            if (this.dummyComponents) {
                this.dummyComponents.addMissingStandardWidgets();
            }
        }
        if ('pageViewMode' in changes && !changes['pageViewMode'].isFirstChange()) {
            this.pageViewMode = changes['pageViewMode'].currentValue;
        }
        if ('replaceBrowserPrint' in changes && typeof window !== 'undefined') {
            if (this.replaceBrowserPrint) {
                if (window.printPDF) {
                    window.print = window.printPDF;
                }
            }
            else {
                const originalPrint = NgxExtendedPdfViewerComponent.originalPrint;
                if (originalPrint && !originalPrint.toString().includes('printPdf')) {
                    window.print = originalPrint;
                }
            }
        }
        if ('disableForms' in changes) {
            this.enableOrDisableForms(this.elementRef.nativeElement, false);
        }
        setTimeout(() => this.calcViewerPositionTop());
    }
    async setZoom() {
        if (typeof window === 'undefined') {
            return; // server side rendering
        }
        // sometimes ngOnChanges calls this method before the page is initialized,
        // so let's check if this.root is already defined
        if (this.root) {
            const PDFViewerApplication = window.PDFViewerApplication;
            let zoomAsNumber = this.zoom;
            if (String(zoomAsNumber).endsWith('%')) {
                zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
            }
            else if (!isNaN(Number(zoomAsNumber))) {
                zoomAsNumber = Number(zoomAsNumber) / 100;
            }
            if (!zoomAsNumber) {
                if (!PDFViewerApplication.store) {
                    // It's difficult to prevent calling this method to early, so we need this check.
                    // setZoom() is called later again, when the PDF document has been loaded and its
                    // fingerprint has been calculated.
                }
                else {
                    const userSetting = await PDFViewerApplication.store.get('zoom');
                    if (userSetting) {
                        if (!isNaN(Number(userSetting))) {
                            zoomAsNumber = Number(userSetting) / 100;
                        }
                        else {
                            zoomAsNumber = userSetting;
                        }
                    }
                    else {
                        zoomAsNumber = 'auto';
                    }
                }
            }
            if (PDFViewerApplication) {
                const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
                PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
            }
            const scaleDropdownField = this.root.nativeElement.querySelector('#scaleSelect');
            if (scaleDropdownField) {
                if (this.zoom === 'auto' || this.zoom === 'page-fit' || this.zoom === 'page-actual' || this.zoom === 'page-width') {
                    scaleDropdownField.value = this.zoom;
                }
                else {
                    scaleDropdownField.value = 'custom';
                    if (scaleDropdownField.options) {
                        for (const option of scaleDropdownField.options) {
                            if (option.value === 'custom') {
                                option.textContent = `${Math.round(Number(zoomAsNumber) * 100000) / 1000}%`;
                            }
                        }
                    }
                }
            }
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber ?? 'auto';
            }
        }
    }
    onResize() {
        const pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            const container = document.getElementById('outerContainer');
            if (container) {
                const width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
            this.checkHeight();
        }
        try {
            const observer = new ResizeObserver(() => this.removeScrollbarInInfiniteScrollMode(false));
            const viewer = document.getElementById('viewer');
            if (viewer) {
                observer.observe(viewer);
            }
        }
        catch (exception) {
            console.log('ResizeObserver is not supported by your browser');
        }
    }
    onContextMenu() {
        return this.contextMenuAllowed;
    }
    async scrollSignatureWarningIntoView(pdf) {
        /** This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox! */
        this.hasSignature = false;
        for (let i = 1; i <= pdf?.numPages; i++) {
            // track the current page
            const page = await pdf.getPage(i);
            const annotations = await page.getAnnotations();
            // Check if there is at least one 'Sig' fieldType in annotations
            this.hasSignature = annotations.some((a) => a.fieldType === 'Sig');
            if (this.hasSignature) {
                this.ngZone.run(() => {
                    // Defer scrolling to ensure it happens after any other UI updates
                    setTimeout(() => {
                        const viewerContainer = document.querySelector('#viewerContainer');
                        viewerContainer?.scrollBy(0, -32); // Adjust the scroll position
                    });
                });
                break; // stop looping through the pages as soon as we find a signature
            }
        }
    }
    async zoomToPageWidth(event) {
        if (this.handTool) {
            if (!pdfDefaultOptions.doubleTapZoomsInHandMode) {
                return;
            }
        }
        else {
            if (!pdfDefaultOptions.doubleTapZoomsInTextSelectionMode) {
                return;
            }
        }
        if (this.pageViewMode === 'book') {
            // scaling doesn't work in book mode
            return;
        }
        const PDFViewerApplication = window.PDFViewerApplication;
        const desiredCenterY = event.clientY;
        const previousScale = PDFViewerApplication.pdfViewer.currentScale;
        if (this.zoom !== pdfDefaultOptions.doubleTapZoomFactor && this.zoom + '%' !== pdfDefaultOptions.doubleTapZoomFactor) {
            this.previousZoom = this.zoom;
            this.zoom = pdfDefaultOptions.doubleTapZoomFactor; // by default: 'page-width';
            await this.setZoom();
        }
        else if (pdfDefaultOptions.doubleTapResetsZoomOnSecondDoubleTap) {
            if (this.previousZoom) {
                this.zoom = this.previousZoom;
            }
            else {
                this.zoom = 'page-width';
            }
            await this.setZoom();
        }
        else {
            return;
        }
        const currentScale = PDFViewerApplication.pdfViewer.currentScale;
        const scaleCorrectionFactor = currentScale / previousScale - 1;
        const rect = PDFViewerApplication.pdfViewer.container.getBoundingClientRect();
        const dy = desiredCenterY - rect.top;
        PDFViewerApplication.pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
    }
    enableOrDisableForms(div, doNotEnable) {
        if (!this.disableForms && doNotEnable) {
            return;
        }
        const xfaLayers = Array.from(div.querySelectorAll('.xfaLayer'));
        const acroFormLayers = Array.from(div.querySelectorAll('.annotationLayer'));
        const layers = xfaLayers.concat(...acroFormLayers);
        layers.forEach((layer) => layer.querySelectorAll('input').forEach((x) => (x.disabled = this.disableForms)));
        layers.forEach((layer) => layer.querySelectorAll('select').forEach((x) => (x.disabled = this.disableForms)));
        layers.forEach((layer) => layer.querySelectorAll('textarea').forEach((x) => (x.disabled = this.disableForms)));
    }
    /** @nocollapse */ static ɵfac = function NgxExtendedPdfViewerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i2.Location), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.PlatformLocation), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NgxExtendedPdfViewerService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i4.PdfCspPolicyService)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxExtendedPdfViewerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(PdfDummyComponentsComponent, 5);
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dummyComponents = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.root = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.secondaryToolbarComponent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidebarComponent = _t.first);
        } }, hostBindings: function NgxExtendedPdfViewerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("contextmenu", function NgxExtendedPdfViewerComponent_contextmenu_HostBindingHandler() { return ctx.onContextMenu(); });
        } }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", disableForms: "disableForms", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor", showDrawEditor: "showDrawEditor", showHighlightEditor: "showHighlightEditor", logLevel: "logLevel", relativeCoordsOptions: "relativeCoordsOptions", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", findbarVisible: "findbarVisible", propertiesDialogVisible: "propertiesDialogVisible", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSinglePageModeButton: "showSinglePageModeButton", showVerticalScrollButton: "showVerticalScrollButton", showHorizontalScrollButton: "showHorizontalScrollButton", showWrappedScrollButton: "showWrappedScrollButton", showInfiniteScrollButton: "showInfiniteScrollButton", showBookModeButton: "showBookModeButton", showRotateButton: "showRotateButton", showRotateCwButton: "showRotateCwButton", showRotateCcwButton: "showRotateCcwButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { annotationEditorEvent: "annotationEditorEvent", formDataChange: "formDataChange", pageViewModeChange: "pageViewModeChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", findbarVisibleChange: "findbarVisibleChange", propertiesDialogVisibleChange: "propertiesDialogVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", annotationEditorModeChanged: "annotationEditorModeChanged", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 5, consts: [["defaultPdfViewer", ""], ["defaultFreeFloatingBar", ""], ["root", ""], ["pdfsidebar", ""], ["pdfSecondaryToolbarComponent", ""], [4, "ngIf"], [3, "zoom", "width"], [4, "ngTemplateOutlet"], [1, "zoom"], [1, "html"], ["id", "outerContainer", 3, "resize"], ["class", "free-floating-bar", 4, "ngIf"], [3, "thumbnailDrawn", "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "mobileFriendlyZoomScale", "sidebarPositionTop"], ["id", "mainContainer"], [3, "onToolbarLoaded", "pageViewModeChange", "sidebarVisible", "customToolbar", "mobileFriendlyZoomScale", "pageViewMode", "primaryMenuVisible", "scrollMode", "showPropertiesButton", "showBookModeButton", "showDownloadButton", "showDrawEditor", "showHighlightEditor", "showFindButton", "showHandToolButton", "showHorizontalScrollButton", "showInfiniteScrollButton", "showOpenFileButton", "showPagingButtons", "showPresentationModeButton", "showPrintButton", "showRotateCwButton", "showRotateCcwButton", "showSecondaryToolbarButton", "showSidebarButton", "showSinglePageModeButton", "showSpreadButton", "showStampEditor", "showTextEditor", "showVerticalScrollButton", "showWrappedScrollButton", "showZoomButtons", "spread", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels", "findbarVisible"], ["id", "editorHighlightParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], ["id", "highlightParamsToolbarContainer", 1, "editorParamsToolbarContainer"], ["id", "editorHighlightColorPicker", 1, "colorPicker"], ["id", "highlightColorPickerLabel", "data-l10n-id", "pdfjs-editor-highlight-colorpicker-label", 1, "editorParamsLabel"], ["id", "editorHighlightThickness", 4, "ngIf"], ["id", "editorHighlightVisibility", 4, "ngIf"], ["id", "editorFreeTextParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], [1, "editorParamsToolbarContainer"], [1, "editorParamsSetter"], ["for", "editorFreeTextColor", "data-l10n-id", "pdfjs-editor-free-text-color-input", 1, "editorParamsLabel"], ["type", "color", "id", "editorFreeTextColor", "tabindex", "100", 1, "editorParamsColor"], ["for", "editorFreeTextFontSize", "data-l10n-id", "pdfjs-editor-free-text-size-input", 1, "editorParamsLabel"], ["type", "range", "id", "editorFreeTextFontSize", "value", "10", "min", "5", "max", "100", "step", "1", "tabindex", "101", 1, "editorParamsSlider"], ["id", "editorInkParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], ["for", "editorInkColor", "data-l10n-id", "pdfjs-editor-ink-color-input", 1, "editorParamsLabel"], ["type", "color", "id", "editorInkColor", "tabindex", "102", 1, "editorParamsColor"], ["for", "editorInkThickness", "data-l10n-id", "pdfjs-editor-ink-thickness-input", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkThickness", "value", "1", "min", "1", "max", "20", "step", "1", "tabindex", "103", 1, "editorParamsSlider"], ["for", "editorInkOpacity", "data-l10n-id", "pdfjs-editor-ink-opacity-input", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkOpacity", "value", "100", "min", "1", "max", "100", "step", "1", "tabindex", "104", 1, "editorParamsSlider"], [3, "spreadChange", "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "localizationInitialized"], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons", "showFindCurrentPageOnly", "showFindEntirePhrase", "showFindEntireWord", "showFindFuzzySearch", "showFindHighlightAll", "showFindMatchDiacritics", "showFindMatchCase", "showFindMessages", "showFindPageRange", "showFindResultsCount"], ["id", "viewerContainer", "tabindex", "0", "role", "document"], ["class", "unverified-signature-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "dialogContainer"], ["type", "file", "id", "fileInput", "accept", ".pdf,application/pdf", "class", "hidden", 3, "server-side-rendering", 4, "ngIf"], ["id", "printContainer"], [1, "free-floating-bar"], ["id", "editorHighlightThickness"], ["for", "editorFreeHighlightThickness", "data-l10n-id", "pdfjs-editor-free-highlight-thickness-input", 1, "editorParamsLabel"], [1, "thicknessPicker"], ["type", "range", "id", "editorFreeHighlightThickness", "data-l10n-id", "pdfjs-editor-free-highlight-thickness-title", "value", "12", "min", "8", "max", "24", "step", "1", "tabindex", "101", 1, "editorParamsSlider"], ["id", "editorHighlightVisibility"], [1, "divider"], [1, "toggler"], ["for", "editorHighlightShowAll", "data-l10n-id", "pdfjs-editor-highlight-show-all-button-label", 1, "editorParamsLabel"], ["id", "editorHighlightShowAll", "data-l10n-id", "pdfjs-editor-highlight-show-all-button", "aria-pressed", "true", "tabindex", "102", 1, "toggle-button"], [1, "unverified-signature-warning"], ["type", "file", "id", "fileInput", "accept", ".pdf,application/pdf", 1, "hidden"]], template: function NgxExtendedPdfViewerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c3);
            i0.ɵɵtemplate(0, NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template, 1, 0, "pdf-dark-theme", 5)(1, NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template, 1, 0, "pdf-light-theme", 5);
            i0.ɵɵelement(2, "pdf-acroform-default-theme")(3, "pdf-dynamic-css", 6);
            i0.ɵɵtemplate(4, NgxExtendedPdfViewerComponent_ng_content_4_Template, 1, 0, "ng-content", 7)(5, NgxExtendedPdfViewerComponent_ng_template_5_Template, 57, 90, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(7, NgxExtendedPdfViewerComponent_ng_template_7_Template, 0, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const defaultPdfViewer_r4 = i0.ɵɵreference(6);
            i0.ɵɵproperty("ngIf", ctx.theme === "dark");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.theme === "light");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customPdfViewer ? ctx.customPdfViewer : defaultPdfViewer_r4);
        } }, dependencies: [i2.NgIf, i2.NgTemplateOutlet, i5.DynamicCssComponent, i6.PdfAcroformDefaultThemeComponent, i7.PdfContextMenuComponent, i8.PdfDarkThemeComponent, i9.PdfAltTextDialogComponent, i10.PdfDocumentPropertiesDialogComponent, i11.PdfDummyComponentsComponent, i12.PdfErrorMessageComponent, i13.PdfFindbarComponent, i14.PdfLightThemeComponent, i15.PdfPasswordDialogComponent, i16.PdfPreparePrintingDialogComponent, i17.PdfSecondaryToolbarComponent, i18.PdfSidebarComponent, i19.PdfToolbarComponent, i2.AsyncPipe, i20.TranslatePipe], styles: ["#mainContainer.toolbar-hidden[_ngcontent-%COMP%]{margin-top:-30px}.server-side-rendering[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerComponent, [{
        type: Component,
        args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-default-theme></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body pdf-js-version-{{ majorMinorPdfJsVersion }}\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"> </ng-content>\r\n          </div>\r\n          <pdf-sidebar\r\n            #pdfsidebar\r\n            [sidebarVisible]=\"sidebarVisible || false\"\r\n            [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\"\r\n            [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\"\r\n          >\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\"\r\n              [sidebarVisible]=\"sidebarVisible\"\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customToolbar]=\"customToolbar\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [(pageViewMode)]=\"pageViewMode\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [scrollMode]=\"scrollMode ?? 0\"\r\n              [showPropertiesButton]=\"showPropertiesButton\"\r\n              [showBookModeButton]=\"showBookModeButton\"\r\n              [showDownloadButton]=\"showDownloadButton\"\r\n              [showDrawEditor]=\"showDrawEditor\"\r\n              [showHighlightEditor]=\"showHighlightEditor\"\r\n              [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\"\r\n              [showHorizontalScrollButton]=\"showHorizontalScrollButton\"\r\n              [showInfiniteScrollButton]=\"showInfiniteScrollButton\"\r\n              [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton && pageViewMode !== 'book'\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\"\r\n              [showRotateCwButton]=\"showRotateCwButton\"\r\n              [showRotateCcwButton]=\"showRotateCcwButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !service.secondaryMenuIsEmpty\"\r\n              [showSidebarButton]=\"showSidebarButton\"\r\n              [showSinglePageModeButton]=\"showSinglePageModeButton\"\r\n              [showSpreadButton]=\"showSpreadButton\"\r\n              [showStampEditor]=\"showStampEditor\"\r\n              [showTextEditor]=\"showTextEditor\"\r\n              [showVerticalScrollButton]=\"showVerticalScrollButton\"\r\n              [showWrappedScrollButton]=\"showWrappedScrollButton\"\r\n              [showZoomButtons]=\"showZoomButtons && pageViewMode !== 'book'\"\r\n              [spread]=\"spread\"\r\n              [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\"\r\n              [toolbarWidth]=\"toolbarWidth\"\r\n              [zoomLevels]=\"zoomLevels\"\r\n              [findbarVisible]=\"findbarVisible\"\r\n            ></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorHighlightParamsToolbar\">\r\n              <div id=\"highlightParamsToolbarContainer\" class=\"editorParamsToolbarContainer\">\r\n                <div id=\"editorHighlightColorPicker\" class=\"colorPicker\">\r\n                  <span id=\"highlightColorPickerLabel\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-highlight-colorpicker-label\">Highlight color</span>\r\n                </div>\r\n                <div id=\"editorHighlightThickness\" *ngIf=\"pdfJsVersion >= '4.1'\">\r\n                  <label for=\"editorFreeHighlightThickness\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-free-highlight-thickness-input\"\r\n                    >Thickness</label\r\n                  >\r\n                  <div class=\"thicknessPicker\">\r\n                    <input\r\n                      type=\"range\"\r\n                      id=\"editorFreeHighlightThickness\"\r\n                      class=\"editorParamsSlider\"\r\n                      data-l10n-id=\"pdfjs-editor-free-highlight-thickness-title\"\r\n                      value=\"12\"\r\n                      min=\"8\"\r\n                      max=\"24\"\r\n                      step=\"1\"\r\n                      tabindex=\"101\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div id=\"editorHighlightVisibility\" *ngIf=\"pdfJsVersion >= '4.1'\">\r\n                  <div class=\"divider\"></div>\r\n                  <div class=\"toggler\">\r\n                    <label for=\"editorHighlightShowAll\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-highlight-show-all-button-label\">Show all</label>\r\n                    <button\r\n                      id=\"editorHighlightShowAll\"\r\n                      class=\"toggle-button\"\r\n                      data-l10n-id=\"pdfjs-editor-highlight-show-all-button\"\r\n                      aria-pressed=\"true\"\r\n                      tabindex=\"102\"\r\n                    ></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-free-text-color-input\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-free-text-size-input\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\" max=\"100\" step=\"1\" tabindex=\"101\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-ink-color-input\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-ink-thickness-input\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\" step=\"1\" tabindex=\"103\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\" data-l10n-id=\"pdfjs-editor-ink-opacity-input\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\" step=\"1\" tabindex=\"104\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <pdf-secondary-toolbar\r\n              #pdfSecondaryToolbarComponent\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              (spreadChange)=\"onSpreadChange($event)\"\r\n              [localizationInitialized]=\"localizationInitialized\"\r\n            >\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [findbarLeft]=\"findbarLeft\"\r\n              [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\"\r\n              [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\"\r\n              [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\"\r\n              [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\"\r\n              [showFindMatchDiacritics]=\"showFindMatchDiacritics\"\r\n              [showFindMatchCase]=\"showFindMatchCase\"\r\n              [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\"\r\n              [showFindResultsCount]=\"showFindResultsCount\"\r\n            >\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\" tabindex=\"0\" role=\"document\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                  'unverified-signature-warning'\r\n                    | translate\r\n                      : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                    | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-alt-text-dialog></pdf-alt-text-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input\r\n          type=\"file\"\r\n          id=\"fileInput\"\r\n          accept=\".pdf,application/pdf\"\r\n          class=\"hidden\"\r\n          [class.server-side-rendering]=\"serverSideRendering\"\r\n          *ngIf=\"pdfJsVersion < '4.1'\"\r\n        />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}.server-side-rendering,.hidden{display:none}\n"] }]
    }], () => [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PDFNotificationService }, { type: i2.Location }, { type: i0.ElementRef }, { type: i2.PlatformLocation }, { type: i0.ChangeDetectorRef }, { type: i3.NgxExtendedPdfViewerService }, { type: i0.Renderer2 }, { type: i4.PdfCspPolicyService }], { dummyComponents: [{
            type: ViewChild,
            args: [PdfDummyComponentsComponent]
        }], root: [{
            type: ViewChild,
            args: ['root']
        }], annotationEditorEvent: [{
            type: Output
        }], customFindbarInputArea: [{
            type: Input
        }], customToolbar: [{
            type: Input
        }], customFindbar: [{
            type: Input
        }], customFindbarButtons: [{
            type: Input
        }], customPdfViewer: [{
            type: Input
        }], customSecondaryToolbar: [{
            type: Input
        }], customSidebar: [{
            type: Input
        }], customThumbnail: [{
            type: Input
        }], customFreeFloatingBar: [{
            type: Input
        }], showFreeFloatingBar: [{
            type: Input
        }], enableDragAndDrop: [{
            type: Input
        }], formData: [{
            type: Input
        }], disableForms: [{
            type: Input
        }], formDataChange: [{
            type: Output
        }], pageViewMode: [{
            type: Input
        }], pageViewModeChange: [{
            type: Output
        }], progress: [{
            type: Output
        }], secondaryToolbarComponent: [{
            type: ViewChild,
            args: ['pdfSecondaryToolbarComponent']
        }], sidebarComponent: [{
            type: ViewChild,
            args: ['pdfsidebar']
        }], srcChange: [{
            type: Output
        }], scrollMode: [{
            type: Input
        }], scrollModeChange: [{
            type: Output
        }], authorization: [{
            type: Input
        }], httpHeaders: [{
            type: Input
        }], contextMenuAllowed: [{
            type: Input
        }], afterPrint: [{
            type: Output
        }], beforePrint: [{
            type: Output
        }], currentZoomFactor: [{
            type: Output
        }], enablePrint: [{
            type: Input
        }], delayFirstView: [{
            type: Input
        }], showTextEditor: [{
            type: Input
        }], showStampEditor: [{
            type: Input
        }], showDrawEditor: [{
            type: Input
        }], showHighlightEditor: [{
            type: Input
        }], logLevel: [{
            type: Input
        }], relativeCoordsOptions: [{
            type: Input
        }], minifiedJSLibraries: [{
            type: Input
        }], printResolution: [{
            type: Input
        }], rotation: [{
            type: Input
        }], rotationChange: [{
            type: Output
        }], annotationLayerRendered: [{
            type: Output
        }], annotationEditorLayerRendered: [{
            type: Output
        }], xfaLayerRendered: [{
            type: Output
        }], outlineLoaded: [{
            type: Output
        }], attachmentsloaded: [{
            type: Output
        }], layersloaded: [{
            type: Output
        }], src: [{
            type: Input
        }], base64Src: [{
            type: Input
        }], minHeight: [{
            type: Input
        }], height: [{
            type: Input
        }], forceUsingLegacyES5: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], filenameForDownload: [{
            type: Input
        }], ignoreKeyboard: [{
            type: Input
        }], ignoreKeys: [{
            type: Input
        }], acceptKeys: [{
            type: Input
        }], imageResourcesPath: [{
            type: Input
        }], localeFolderPath: [{
            type: Input
        }], language: [{
            type: Input
        }], listenToURL: [{
            type: Input
        }], nameddest: [{
            type: Input
        }], password: [{
            type: Input
        }], replaceBrowserPrint: [{
            type: Input
        }], showUnverifiedSignatures: [{
            type: Input
        }], startTabindex: [{
            type: Input
        }], showSidebarButton: [{
            type: Input
        }], sidebarVisible: [{
            type: Input
        }], sidebarVisibleChange: [{
            type: Output
        }], activeSidebarView: [{
            type: Input
        }], activeSidebarViewChange: [{
            type: Output
        }], findbarVisible: [{
            type: Input
        }], findbarVisibleChange: [{
            type: Output
        }], propertiesDialogVisible: [{
            type: Input
        }], propertiesDialogVisibleChange: [{
            type: Output
        }], showFindButton: [{
            type: Input
        }], showFindHighlightAll: [{
            type: Input
        }], showFindMatchCase: [{
            type: Input
        }], showFindCurrentPageOnly: [{
            type: Input
        }], showFindPageRange: [{
            type: Input
        }], showFindEntireWord: [{
            type: Input
        }], showFindEntirePhrase: [{
            type: Input
        }], showFindMatchDiacritics: [{
            type: Input
        }], showFindFuzzySearch: [{
            type: Input
        }], showFindResultsCount: [{
            type: Input
        }], showFindMessages: [{
            type: Input
        }], showPagingButtons: [{
            type: Input
        }], showZoomButtons: [{
            type: Input
        }], showPresentationModeButton: [{
            type: Input
        }], showOpenFileButton: [{
            type: Input
        }], showPrintButton: [{
            type: Input
        }], showDownloadButton: [{
            type: Input
        }], theme: [{
            type: Input
        }], showToolbar: [{
            type: Input
        }], showSecondaryToolbarButton: [{
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
        }], showRotateButton: [{
            type: Input
        }], showRotateCwButton: [{
            type: Input
        }], showRotateCcwButton: [{
            type: Input
        }], handTool: [{
            type: Input
        }], handToolChange: [{
            type: Output
        }], showHandToolButton: [{
            type: Input
        }], showScrollingButton: [{
            type: Input
        }], showSpreadButton: [{
            type: Input
        }], showPropertiesButton: [{
            type: Input
        }], showBorders: [{
            type: Input
        }], spread: [{
            type: Input
        }], spreadChange: [{
            type: Output
        }], thumbnailDrawn: [{
            type: Output
        }], page: [{
            type: Input
        }], pageChange: [{
            type: Output
        }], pageLabel: [{
            type: Input
        }], pageLabelChange: [{
            type: Output
        }], pagesLoaded: [{
            type: Output
        }], pageRender: [{
            type: Output
        }], pageRendered: [{
            type: Output
        }], pdfDownloaded: [{
            type: Output
        }], pdfLoaded: [{
            type: Output
        }], pdfLoadingStarts: [{
            type: Output
        }], pdfLoadingFailed: [{
            type: Output
        }], textLayer: [{
            type: Input
        }], textLayerRendered: [{
            type: Output
        }], annotationEditorModeChanged: [{
            type: Output
        }], updateFindMatchesCount: [{
            type: Output
        }], updateFindState: [{
            type: Output
        }], zoom: [{
            type: Input
        }], zoomChange: [{
            type: Output
        }], zoomLevels: [{
            type: Input
        }], maxZoom: [{
            type: Input
        }], minZoom: [{
            type: Input
        }], mobileFriendlyZoom: [{
            type: Input
        }], onContextMenu: [{
            type: HostListener,
            args: ['contextmenu']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NgxExtendedPdfViewerComponent, { className: "NgxExtendedPdfViewerComponent", filePath: "lib\\ngx-extended-pdf-viewer.component.ts", lineNumber: 103 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBR1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBa0J2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9GLE9BQU8sRUFBNEMsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEy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QUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQW1ESyxrQkFBa0I7a0JBRDVCLEtBQUs7WUEyL0NDLGFBQWE7a0JBRG5CLFlBQVk7bUJBQUMsYUFBYTs7a0ZBL3dFaEIsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIExvY2F0aW9uLCBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE5nWm9uZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZGZEb2N1bWVudExvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvZG9jdW1lbnQtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgRmlsZUlucHV0Q2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2ZpbGUtaW5wdXQtY2hhbmdlZCc7XHJcbmltcG9ydCB7IEZpbmRSZXN1bHQsIEZpbmRSZXN1bHRNYXRjaGVzQ291bnQsIEZpbmRTdGF0ZSB9IGZyb20gJy4vZXZlbnRzL2ZpbmQtcmVzdWx0JztcclxuaW1wb3J0IHsgSGFuZHRvb2xDaGFuZ2VkIH0gZnJvbSAnLi9ldmVudHMvaGFuZHRvb2wtY2hhbmdlZCc7XHJcbmltcG9ydCB7IFBhZ2VOdW1iZXJDaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9wYWdlLW51bWJlci1jaGFuZ2UnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlci1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZS1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlc1JvdGF0aW9uRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1yb3RhdGlvbi1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkRvd25sb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1kb3dubG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmTG9hZGluZ1N0YXJ0c0V2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRpbmctc3RhcnRzLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmVGh1bWJuYWlsRHJhd25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi10aHVtYm5haWwtZHJhd24tZXZlbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0JhckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcHJvZ3Jlc3MtYmFyLWV2ZW50JztcclxuaW1wb3J0IHsgU2NhbGVDaGFuZ2luZ0V2ZW50IH0gZnJvbSAnLi9ldmVudHMvc2NhbGUtY2hhbmdpbmctZXZlbnQnO1xyXG5pbXBvcnQgeyBTaWRlYmFydmlld0NoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3NpZGViYXJ2aWV3LWNoYW5nZWQnO1xyXG5pbXBvcnQgeyBUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvdGV4dGxheWVyLXJlbmRlcmVkJztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGRmQ3Vyc29yVG9vbHMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWN1cnNvci10b29scyc7XHJcbmltcG9ydCB7IGFzc2V0c1VybCwgZ2V0VmVyc2lvblN1ZmZpeCwgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBhZ2VWaWV3TW9kZVR5cGUsIFNjcm9sbE1vZGVDaGFuZ2VkRXZlbnQsIFNjcm9sbE1vZGVUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXInO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24sIFBERkRvY3VtZW50UHJveHkgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgU2VydmljZVdvcmtlck9wdGlvbnNUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3NlcnZpY2Utd29ya2VyLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xyXG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XHJcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVbml0VG9QeCB9IGZyb20gJy4vdW5pdC10by1weCc7XHJcblxyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1sYXllci1ldmVudCc7XHJcbmltcG9ydCB7IEFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IEFubm90YXRpb25FZGl0b3JFZGl0b3JNb2RlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYW5ub3RhdGlvbi1lZGl0b3ItbW9kZS1jaGFuZ2VkLWV2ZW50JztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Fubm90YXRpb24tbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBBdHRhY2htZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hdHRhY2htZW50LWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IExheWVyc0xvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvbGF5ZXJzLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IE91dGxpbmVMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL291dGxpbmUtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgVG9nZ2xlU2lkZWJhckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvdG9nZ2xlLXNpZGViYXItZXZlbnQnO1xyXG5pbXBvcnQgeyBYZmFMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy94ZmEtbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBOZ3hGb3JtU3VwcG9ydCB9IGZyb20gJy4vbmd4LWZvcm0tc3VwcG9ydCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJWaWV3IH0gZnJvbSAnLi9vcHRpb25zL3BkZi1zaWRlYmFyLXZpZXdzJztcclxuaW1wb3J0IHsgU3ByZWFkVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9zcHJlYWQtdHlwZSc7XHJcbmltcG9ydCB7IFBkZkNzcFBvbGljeVNlcnZpY2UgfSBmcm9tICcuL3BkZi1jc3AtcG9saWN5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbmRlY2xhcmUgY29uc3QgU2VydmljZVdvcmtlck9wdGlvbnM6IFNlcnZpY2VXb3JrZXJPcHRpb25zVHlwZTsgLy8gZGVmaW5lZCBpbiB2aWV3ZXIuanNcclxuZGVjbGFyZSBjbGFzcyBSZXNpemVPYnNlcnZlciB7XHJcbiAgY29uc3RydWN0b3IocGFyYW06ICgpID0+IHZvaWQpO1xyXG4gIHB1YmxpYyBvYnNlcnZlKGRpdjogSFRNTEVsZW1lbnQpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRWxlbWVudEFuZFBvc2l0aW9uIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1EYXRhVHlwZSB7XHJcbiAgW2ZpZWxkTmFtZTogc3RyaW5nXTogbnVsbCB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJT1MoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIFsnaVBhZCBTaW11bGF0b3InLCAnaVBob25lIFNpbXVsYXRvcicsICdpUG9kIFNpbXVsYXRvcicsICdpUGFkJywgJ2lQaG9uZScsICdpUG9kJ10uaW5jbHVkZXMobmF2aWdhdG9yLnBsYXRmb3JtKSB8fFxyXG4gICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXHJcbiAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnTWFjJykgJiYgJ29udG91Y2hlbmQnIGluIGRvY3VtZW50KVxyXG4gICk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN0YXRpYyBvcmlnaW5hbFByaW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cucHJpbnQgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluY29tcGxldGVseUluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtU3VwcG9ydCA9IG5ldyBOZ3hGb3JtU3VwcG9ydCgpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHVtbXkgY29tcG9uZW50cyBhcmUgaW5zZXJ0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB1c2VyIGN1c3RvbWl6ZXMgdGhlIHRvb2xiYXJcclxuICAgKiB3aXRob3V0IGFkZGluZyBldmVyeSBvcmlnaW5hbCB0b29sYmFyIGl0ZW0uIFdpdGhvdXQgdGhlIGR1bW15IGNvbXBvbmVudHMsIHRoZVxyXG4gICAqIGluaXRpYWxpemF0aW9uIGNvZGUgb2YgcGRmLmpzIGNyYXNoZXMgYmVjYXVzZSBpdCBhc3N1bWUgdGhhdCBldmVyeSBzdGFuZGFyZCB3aWRnZXQgaXMgdGhlcmUuXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZChQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQpXHJcbiAgcHVibGljIGR1bW15Q29tcG9uZW50czogUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdyb290JylcclxuICBwdWJsaWMgcm9vdDogRWxlbWVudFJlZjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25FZGl0b3JFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkVkaXRvckV2ZW50PigpO1xyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21QZGZWaWV3ZXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRnJlZUZsb2F0aW5nQmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RnJlZUZsb2F0aW5nQmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgbG9jYWxpemF0aW9uSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGZvcm1EYXRhKGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUpIHtcclxuICAgIHRoaXMuZm9ybVN1cHBvcnQuZm9ybURhdGEgPSBmb3JtRGF0YTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRpc2FibGVGb3JtcyA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZ2V0IGZvcm1EYXRhQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybVN1cHBvcnQuZm9ybURhdGFDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgX3BhZ2VWaWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSA9ICdtdWx0aXBsZSc7XHJcblxyXG4gIHB1YmxpYyBiYXNlSHJlZjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhpcyBmbGFnIHByZXZlbnRzIHRyeWluZyB0byBsb2FkIGEgZmlsZSB0d2ljZSBpZiB0aGUgdXNlciB1cGxvYWRzIGl0IHVzaW5nIHRoZSBmaWxlIHVwbG9hZCBkaWFsb2cgb3IgdmlhIGRyYWcnbidkcm9wICovXHJcbiAgcHJpdmF0ZSBzcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlVmlld01vZGUoKTogUGFnZVZpZXdNb2RlVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZVZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHBhZ2VWaWV3TW9kZSh2aWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgY29uc3QgaGFzQ2hhbmdlZCA9IHRoaXMuX3BhZ2VWaWV3TW9kZSAhPT0gdmlld01vZGU7XHJcbiAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgY29uc3QgbXVzdFJlZHJhdyA9ICF0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgJiYgKHRoaXMuX3BhZ2VWaWV3TW9kZSA9PT0gJ2Jvb2snIHx8IHZpZXdNb2RlID09PSAnYm9vaycpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VWaWV3TW9kZSA9IHZpZXdNb2RlO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZVZpZXdNb2RlKTtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucz8uc2V0KCdwYWdlVmlld01vZGUnLCB0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlVmlld01vZGUgPSB0aGlzLl9wYWdlVmlld01vZGU7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5wYWdlVmlld01vZGUgPSB0aGlzLl9wYWdlVmlld01vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnBhZ2UgfHwgdGhpcy5zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlICE9PSAnbXVsdGlwbGUnKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgIC8vIHNpbmNlIHBkZi5qcywgb3VyIGN1c3RvbSBzaW5nbGUtcGFnZS1tb2RlIGhhcyBiZWVuIHJlcGxhY2VkIGJ5IHRoZSBzdGFuZGFyZCBzY3JvbGxNb2RlPVwicGFnZVwiXHJcbiAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS5wYWdlO1xyXG4gICAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ2Jvb2snKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dCb3JkZXJzID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlICE9PSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG11c3RSZWRyYXcpIHtcclxuICAgICAgICAgIGlmICh2aWV3TW9kZSAhPT0gJ2Jvb2snKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5neCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBuZ3gucXVlcnlTZWxlY3RvcignI3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUud2lkdGggPSAnJztcclxuICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zdHlsZS5tYXJnaW5SaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ZXIgPSBuZ3gucXVlcnlTZWxlY3RvcignI3ZpZXdlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICB2aWV3ZXIuc3R5bGUubWF4V2lkdGggPSAnJztcclxuICAgICAgICAgICAgdmlld2VyLnN0eWxlLm1pbldpZHRoID0gJyc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5vcGVuUERGMigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVZpZXdNb2RlVHlwZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0JhckV2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50JylcclxuICBwcml2YXRlIHNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ6IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BkZnNpZGViYXInKVxyXG4gIHByaXZhdGUgc2lkZWJhckNvbXBvbmVudDogUGRmU2lkZWJhckNvbXBvbmVudDtcclxuXHJcbiAgLyogcmVndWxhciBhdHRyaWJ1dGVzICovXHJcblxyXG4gIHByaXZhdGUgX3NyYzogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBVaW50OEFycmF5IHwgeyByYW5nZTogYW55IH0gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcmNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuXHJcbiAgcHVibGljIGdldCBzY3JvbGxNb2RlKCk6IFNjcm9sbE1vZGVUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zY3JvbGxNb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNjcm9sbE1vZGUodmFsdWU6IFNjcm9sbE1vZGVUeXBlKSB7XHJcbiAgICBpZiAodGhpcy5fc2Nyb2xsTW9kZSAhPT0gdmFsdWUpIHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNjcm9sbE1vZGUgIT09IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3Njcm9sbE1vZGUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMuX3Njcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICB0aGlzLl9wYWdlVmlld01vZGUgPSAnc2luZ2xlJztcclxuICAgICAgICAgIHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYWdlVmlld01vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ3NpbmdsZScgfHwgdGhpcy5fc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUuaG9yaXpvbnRhbCkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2VWaWV3TW9kZSA9ICdtdWx0aXBsZSc7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTY3JvbGxNb2RlVHlwZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYXV0aG9yaXphdGlvbjogT2JqZWN0IHwgYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaHR0cEhlYWRlcnM6IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBUaGlzIGZpZWxkIHN0b3JlcyB0aGUgcHJldmlvdXMgem9vbSBsZXZlbCBpZiB0aGUgcGFnZSBpcyBlbmxhcmdlZCB3aXRoIGEgZG91YmxlLXRhcCBvciBkb3VibGUtY2xpY2sgKi9cclxuICBwcml2YXRlIHByZXZpb3VzWm9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXHJcbiAgICogTW9zdCB1c2VycyBjYW4gbGV0IHRoaXMgcGFyYW1ldGVyIHNhZmVseSBhdCBpdCdzIGRlZmF1bHQgdmFsdWUgb2YgemVyby5cclxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xyXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VGV4dEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U3RhbXBFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0RyYXdFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hpZ2hsaWdodEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICAvKiogc3RvcmUgdGhlIHRpbWVvdXQgaWQgc28gaXQgY2FuIGJlIGNhbmNlbGVkIGlmIHVzZXIgbGVhdmVzIHRoZSBwYWdlIGJlZm9yZSB0aGUgUERGIGlzIHNob3duICovXHJcbiAgcHJpdmF0ZSBpbml0VGltZW91dDogYW55O1xyXG5cclxuICAvKiogSG93IG1hbnkgbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBwcmludGVkP1xyXG4gICAqIExlZ2FsIHZhbHVlczogVmVyYm9zaXR5TGV2ZWwuSU5GT1MgKD0gNSksIFZlcmJvc2l0eUxldmVsLldBUk5JTkdTICg9IDEpLCBWZXJib3NpdHlMZXZlbC5FUlJPUlMgKD0gMCkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2dMZXZlbCA9IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyByZWxhdGl2ZUNvb3Jkc09wdGlvbnM6IE9iamVjdCA9IHt9O1xyXG5cclxuICAvKiogVXNlIHRoZSBtaW5pZmllZCAobWluaWZpZWRKU0xpYnJhcmllcz1cInRydWVcIiwgd2hpY2ggaXMgdGhlIGRlZmF1bHQpIG9yIHRoZSB1c2VyLXJlYWRhYmxlIHBkZi5qcyBsaWJyYXJ5IChtaW5pZmllZEpTTGlicmFyaWVzPVwiZmFsc2VcIikgKi9cclxuICBwcml2YXRlIF9taW5pZmllZEpTTGlicmFyaWVzID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGdldCBtaW5pZmllZEpTTGlicmFyaWVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21pbmlmaWVkSlNMaWJyYXJpZXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbWluaWZpZWRKU0xpYnJhcmllcyh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbWluaWZpZWRKU0xpYnJhcmllcyA9IHZhbHVlO1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHBkZkRlZmF1bHRPcHRpb25zLl9pbnRlcm5hbEZpbGVuYW1lU3VmZml4ID0gJy5taW4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcGRmRGVmYXVsdE9wdGlvbnMuX2ludGVybmFsRmlsZW5hbWVTdWZmaXggPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcclxuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgeGZhTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8WGZhTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgb3V0bGluZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3V0bGluZUxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYXR0YWNobWVudHNsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEF0dGFjaG1lbnRMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGxheWVyc2xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TGF5ZXJzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBoYXNTaWduYXR1cmU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBVaW50OEFycmF5IHwgVVJMIHwgeyByYW5nZTogYW55IH0pIHtcclxuICAgIGlmICh1cmwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgIHRoaXMuX3NyYyA9IHVybC5idWZmZXI7XHJcbiAgICB9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmwudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHVybCBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgLy8gYWRkaXRpb25hbCBjaGVjayBpbnRyb2R1Y2VkIHRvIHN1cHBvcnQgc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNyYyA9IG5ldyBVaW50OEFycmF5KHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4gdGhpcy5vcGVuUERGMigpKSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2Ugb3BlblBERiBpcyBjYWxsZWQgbGF0ZXIsIHNvIHdlIGRvIG5vdGhpbmcgdG8gcHJldmVudCBsb2FkaW5nIHRoZSBQREYgZmlsZSB0d2ljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsO1xyXG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xyXG4gICAgICAgIC8vIG1pbmltYWwgbGVuZ3RoIG9mIGEgYmFzZTY0IGVuY29kZWQgUERGXHJcbiAgICAgICAgaWYgKHVybC5sZW5ndGggJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkLytdKz17MCwyfSQvLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVVJMIGxvb2tzIGxpa2UgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIElmIHNvLCBwbGVhc2UgdXNlIHRoZSBhdHRyaWJ1dGUgW2Jhc2U2NFNyY10gaW5zdGVhZCBvZiBbc3JjXScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKHRoaXMuX3NyYyBhcyBhbnkpID0gdXJsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGJhc2U2NFNyYyhiYXNlNjQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmIChiYXNlNjQpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJpbmFyeV9zdHJpbmcgPSBhdG9iKGJhc2U2NCk7XHJcbiAgICAgIGNvbnN0IGxlbiA9IGJpbmFyeV9zdHJpbmcubGVuZ3RoO1xyXG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeV9zdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNyYyA9IGJ5dGVzLmJ1ZmZlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NyYyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21iaW5hdGlvbiBvZiBoZWlnaHQsIG1pbkhlaWdodCwgYW5kIGF1dG9IZWlnaHQgZW5zdXJlcyB0aGUgUERGIGhlaWdodCBvZiB0aGUgUERGIHZpZXdlciBpcyBjYWxjdWxhdGVkIGNvcnJlY3RseSB3aGVuIHRoZSBoZWlnaHQgaXMgYSBwZXJjZW50YWdlLlxyXG4gICAqIEJ5IGRlZmF1bHQsIG1hbnkgQ1NTIGZyYW1ld29ya3MgbWFrZSBhIGRpdiB3aXRoIDEwMCUgaGF2ZSBhIGhlaWdodCBvciB6ZXJvIHBpeGVscy4gY2hlY2tIZWlndGgoKSBmaXhlcyB0aGlzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXV0b0hlaWdodCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnMTAwJSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoZWlnaHQoaCkge1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmF1dG9IZWlnaHQgPSBmYWxzZTtcclxuICAgIGlmIChoKSB7XHJcbiAgICAgIGlmIChoID09PSAnYXV0bycpIHtcclxuICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZvcmNlVXNpbmdMZWdhY3lFUzUgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYmFja2dyb3VuZENvbG9yID0gJyNlOGU4ZWInO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhZnRlciBjbGlja2luZyBcImRvd25sb2FkXCIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmaWxlbmFtZUZvckRvd25sb2FkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGlzYWJsZSB0aGUga2V5Ym9hcmQgYmluZGluZ3MgY29tcGxldGVseSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGlnbm9yZUtleWJvYXJkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGlzYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGlnbm9yZUtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncyBleHBsaWNpdGx5LiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgZXZlcnkgb3RoZXIga2V5IGJpbmRpbmcgaXMgaWdub3JlZC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZSB2aWV3ZXIncyBzdmcgaW1hZ2VzIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGltYWdlUmVzb3VyY2VzUGF0aCA9IGFzc2V0c1VybChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpICsgJy9pbWFnZXMvJztcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlaXIgbG9jYWxlIGZvbGRlciBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2NhbGVGb2xkZXJQYXRoID0gYXNzZXRzVXJsKHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcikgKyAnL2xvY2FsZSc7XHJcblxyXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBsb2NhbGUuIFRoaXMgbXVzdCBiZSB0aGUgY29tcGxldGUgbG9jYWxlIG5hbWUsIHN1Y2ggYXMgXCJlcy1FU1wiLiBUaGUgc3RyaW5nIGlzIGFsbG93ZWQgdG8gYmUgYWxsIGxvd2VyY2FzZS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogQnkgZGVmYXVsdCwgbGlzdGVuaW5nIHRvIHRoZSBVUkwgaXMgZGVhY3RpdmF0ZWQgYmVjYXVzZSBvZnRlbiB0aGUgYW5jaG9yIHRhZyBpcyB1c2VkIGZvciB0aGUgQW5ndWxhciByb3V0ZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsaXN0ZW5Ub1VSTCA9IGZhbHNlO1xyXG5cclxuICAvKiogTmF2aWdhdGUgdG8gYSBjZXJ0YWluIFwibmFtZWQgZGVzdGluYXRpb25cIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG5hbWVkZGVzdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogYWxsb3dzIHlvdSB0byBwYXNzIGEgcGFzc3dvcmQgdG8gcmVhZCBwYXNzd29yZC1wcm90ZWN0ZWQgZmlsZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyByZXBsYWNlQnJvd3NlclByaW50ID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIF9zaG93U2lkZWJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgdmlld2VyUG9zaXRpb25Ub3AgPSAnMzJweCc7XHJcblxyXG4gIC8qKiBwZGYuanMgY2FuIHNob3cgc2lnbmF0dXJlcywgYnV0IGZhaWxzIHRvIHZlcmlmeSB0aGVtLiBTbyB0aGV5IGFyZSBzd2l0Y2hlZCBvZmYgYnkgZGVmYXVsdC5cclxuICAgKiBTZXQgXCJbc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzXVwiPVwidHJ1ZVwiIHRvIGRpc3BsYXkgZS1zaWduYXR1cmVzIG5vbmV0aGVsZXNzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzdGFydFRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgc2hvd1NpZGViYXJCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpZGViYXJCdXR0b247XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzaG93U2lkZWJhckJ1dHRvbihzaG93OiBSZXNwb25zaXZlVmlzaWJpbGl0eSkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG4gICAgICB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbiA9IHNob3c7XHJcbiAgICBpZiAodGhpcy5fc2hvd1NpZGViYXJCdXR0b24pIHtcclxuICAgICAgY29uc3QgaXNJRSA9IC9tc2llXFxzfHRyaWRlbnRcXC8vaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgbGV0IGZhY3RvciA9IDE7XHJcbiAgICAgIGlmIChpc0lFKSB7XHJcbiAgICAgICAgZmFjdG9yID0gTnVtYmVyKCh0aGlzLl9tb2JpbGVGcmllbmRseVpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gKDY4ICogZmFjdG9yKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5maW5kYmFyTGVmdCA9ICcwcHgnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfc2lkZWJhclZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHVibGljIGdldCBzaWRlYmFyVmlzaWJsZSgpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9zaWRlYmFyVmlzaWJsZTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNpZGViYXJWaXNpYmxlKHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3NpZGViYXJWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhclZpc2libGVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zaWRlYmFyVmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmU2lkZWJhcikge1xyXG4gICAgICBpZiAodGhpcy5zaWRlYmFyVmlzaWJsZSkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIub3BlbigpO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBOdW1iZXIodGhpcy5hY3RpdmVTaWRlYmFyVmlldyk7XHJcbiAgICAgICAgaWYgKHZpZXcgPT09IDEgfHwgdmlldyA9PT0gMiB8fCB2aWV3ID09PSAzIHx8IHZpZXcgPT09IDQpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuc3dpdGNoVmlldyh2aWV3LCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignW2FjdGl2ZVNpZGViYXJWaWV3XSBtdXN0IGJlIGFuIGludGVnZXIgdmFsdWUgYmV0d2VlbiAxIGFuZCA0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhY3RpdmVTaWRlYmFyVmlldzogUGRmU2lkZWJhclZpZXcgPSBQZGZTaWRlYmFyVmlldy5PVVRMSU5FO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlNpZGViYXJWaWV3PigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmaW5kYmFyVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZmluZGJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHByb3BlcnRpZXNEaWFsb2dWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEhpZ2hsaWdodEFsbCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWF0Y2hDYXNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRDdXJyZW50UGFnZU9ubHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZFBhZ2VSYW5nZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRW50aXJlV29yZCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRW50aXJlUGhyYXNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaERpYWNyaXRpY3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEZ1enp5U2VhcmNoID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRSZXN1bHRzQ291bnQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1lc3NhZ2VzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyB8ICdjdXN0b20nIHwgc3RyaW5nID0gJ2xpZ2h0JztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Rvb2xiYXIgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U2luZ2xlUGFnZU1vZGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ZlcnRpY2FsU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dIb3Jpem9udGFsU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dXcmFwcGVkU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dJbmZpbml0ZVNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Qm9va01vZGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dSb3RhdGVCdXR0b24odmlzaWJpbGl0eTogUmVzcG9uc2l2ZVZpc2liaWxpdHkpIHtcclxuICAgIHRoaXMuc2hvd1JvdGF0ZUN3QnV0dG9uID0gdmlzaWJpbGl0eTtcclxuICAgIHRoaXMuc2hvd1JvdGF0ZUNjd0J1dHRvbiA9IHZpc2liaWxpdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Um90YXRlQ3dCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1JvdGF0ZUNjd0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBwcml2YXRlIF9oYW5kVG9vbCA9ICFpc0lPUygpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgaGFuZFRvb2woaGFuZFRvb2w6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc0lPUygpICYmIGhhbmRUb29sKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgIFwiT24gaU9TLCB0aGUgaGFuZHRvb2wgZG9lc24ndCB3b3JrIHJlbGlhYmx5LiBQbHVzLCB5b3UgZG9uJ3QgbmVlZCBpdCBiZWNhdXNlIHRvdWNoIGdlc3R1cmVzIGFsbG93IHlvdSB0byBkaXN0aW5ndWlzaCBlYXNpbHkgYmV0d2VlbiBzd2lwaW5nIGFuZCBzZWxlY3RpbmcgdGV4dC4gVGhlcmVmb3JlLCB0aGUgbGlicmFyeSBpZ25vcmVzIHlvdXIgc2V0dGluZy5cIlxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oYW5kVG9vbCA9IGhhbmRUb29sO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoYW5kVG9vbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYW5kVG9vbDtcclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBoYW5kVG9vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9zaG93U2Nyb2xsaW5nQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBnZXQgc2hvd1Njcm9sbGluZ0J1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ211bHRpcGxlJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2hvd1Njcm9sbGluZ0J1dHRvbjtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzaG93U2Nyb2xsaW5nQnV0dG9uKHZhbDogUmVzcG9uc2l2ZVZpc2liaWxpdHkpIHtcclxuICAgIHRoaXMuX3Nob3dTY3JvbGxpbmdCdXR0b24gPSB2YWw7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U3ByZWFkQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb3JkZXJzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3ByZWFkOiBTcHJlYWRUeXBlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc3ByZWFkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwnb2ZmJyB8ICdldmVuJyB8ICdvZGQnPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGh1bWJuYWlsRHJhd24gPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlRodW1ibmFpbERyYXduRXZlbnQ+KCk7XHJcblxyXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBwYWdlKHA6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHApIHtcclxuICAgICAgLy8gc2lsZW50bHkgY29wZSB3aXRoIHN0cmluZ3NcclxuICAgICAgdGhpcy5fcGFnZSA9IE51bWJlcihwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VMYWJlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZXNMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmRG93bmxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmRG93bmxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdTdGFydHMgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRpbmdTdGFydHNFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRpbmdGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0ZXh0TGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGV4dExheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25FZGl0b3JNb2RlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kTWF0Y2hlc0NvdW50ID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kUmVzdWx0TWF0Y2hlc0NvdW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdXBkYXRlRmluZFN0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxGaW5kU3RhdGU+KCk7XHJcblxyXG4gIC8qKiBMZWdhbCB2YWx1ZXM6IHVuZGVmaW5lZCwgJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIG9yICc1MCcgKG9yIGFueSBvdGhlciBwZXJjZW50YWdlKSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb206IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHpvb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtYXhab29tID0gMTA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pblpvb20gPSAwLjE7XHJcblxyXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZSBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cclxuICAgKi9cclxuICBwdWJsaWMgX21vYmlsZUZyaWVuZGx5Wm9vbTogc3RyaW5nID0gJzEwMCUnO1xyXG5cclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xyXG5cclxuICBwdWJsaWMgdG9vbGJhck1hcmdpblRvcCA9ICcwcHgnO1xyXG5cclxuICBwdWJsaWMgdG9vbGJhcldpZHRoID0gJzEwMCUnO1xyXG5cclxuICBwcml2YXRlIHRvb2xiYXI6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgb25Ub29sYmFyTG9hZGVkKHRvb2xiYXJFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy50b29sYmFyID0gdG9vbGJhckVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9vbGJhcldpZHRoSW5QaXhlbHMgPSAzLjE0MTU5MjY1MzU5OyAvLyBtYWdpYyBudW1iZXIgaW5kaWNhdGluZyB0aGUgdG9vbGJhciBzaXplIGhhc24ndCBiZWVuIGRldGVybWluZWQgeWV0XHJcblxyXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBzaWRlYmFyUG9zaXRpb25Ub3A6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgcHVibGljIGZpbmRiYXJUb3A6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXHJcbiAgcHVibGljIGZpbmRiYXJMZWZ0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgbW9iaWxlRnJpZW5kbHlab29tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgcGRmSnNWZXJzaW9uKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0VmVyc2lvblN1ZmZpeChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBtYWpvck1pbm9yUGRmSnNWZXJzaW9uKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmdWxsVmVyc2lvbiA9IHRoaXMucGRmSnNWZXJzaW9uO1xyXG4gICAgY29uc3QgcG9zID0gZnVsbFZlcnNpb24ubGFzdEluZGV4T2YoJy4nKTtcclxuICAgIHJldHVybiBmdWxsVmVyc2lvbi5zdWJzdHJpbmcoMCwgcG9zKS5yZXBsYWNlKCcuJywgJy0nKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgYXR0cmlidXRlcyBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxyXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgbW9iaWxlRnJpZW5kbHlab29tKHpvb206IHN0cmluZykge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICBpZiAoem9vbSA9PSAndHJ1ZScpIHtcclxuICAgICAgem9vbSA9ICcxNTAlJztcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXHJcbiAgICB9IGVsc2UgaWYgKHpvb20gPT0gJ2ZhbHNlJyB8fCB6b29tID09PSB1bmRlZmluZWQgfHwgem9vbSA9PT0gbnVsbCkge1xyXG4gICAgICB6b29tID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tID0gem9vbTtcclxuICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xyXG4gICAgICB6b29tID0gMTAwICogTnVtYmVyKHpvb20pICsgJyUnO1xyXG4gICAgfVxyXG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSBmYWN0b3I7XHJcbiAgICB0aGlzLnRvb2xiYXJXaWR0aCA9ICgxMDAgLyBmYWN0b3IpLnRvU3RyaW5nKCkgKyAnJSc7XHJcbiAgICB0aGlzLnRvb2xiYXJNYXJnaW5Ub3AgPSAoZmFjdG9yIC0gMSkgKiAxNiArICdweCc7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2h1dHRpbmdEb3duID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBzZXJ2ZXJTaWRlUmVuZGVyaW5nID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRvb2xiYXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICcwJztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHRvcCA9IHRoaXMudG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XHJcbiAgICBpZiAodG9wIDwgMzMpIHtcclxuICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9ICczM3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSB0b3AgKyAncHgnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZhY3RvciA9IHRvcCAvIDMzO1xyXG5cclxuICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICgzMyArIDMzICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhclBvc2l0aW9uVG9wID0gJzAnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyVG9wID0gKDMzICsgMzggKiAoZmFjdG9yIC0gMSkpLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgdGhpcy5maW5kYmFyVG9wID0gKDMzICsgMzggKiAoZmFjdG9yIC0gMSkpLnRvU3RyaW5nKCkgKyAncHgnO1xyXG5cclxuICAgIGNvbnN0IGZpbmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbWFyeVZpZXdGaW5kJyk7XHJcbiAgICBpZiAoZmluZEJ1dHRvbikge1xyXG4gICAgICBjb25zdCBjb250YWluZXJQb3NpdGlvbkxlZnQgPSB0aGlzLnRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgY29uc3QgZmluZEJ1dHRvblBvc2l0aW9uID0gZmluZEJ1dHRvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgbGVmdCA9IE1hdGgubWF4KDAsIGZpbmRCdXR0b25Qb3NpdGlvbi5sZWZ0IC0gY29udGFpbmVyUG9zaXRpb25MZWZ0KTtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IGxlZnQgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNob3dTaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAzNCArICgzMiAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzAnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkLFxyXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtTG9jYXRpb246IFBsYXRmb3JtTG9jYXRpb24sXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwdWJsaWMgc2VydmljZTogTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBwZGZDc3BQb2xpY3lTZXJ2aWNlOiBQZGZDc3BQb2xpY3lTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmJhc2VIcmVmID0gdGhpcy5wbGF0Zm9ybUxvY2F0aW9uLmdldEJhc2VIcmVmRnJvbURPTSgpO1xyXG4gICAgdGhpcy5zZXJ2aWNlLnJlY2FsY3VsYXRlU2l6ZSQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25SZXNpemUoKSk7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLnNlcnZlclNpZGVSZW5kZXJpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy50b29sYmFyV2lkdGggPSBTdHJpbmcoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbWF0Y2ggPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5tYXRjaCgvT1MgKFxcZCspXyhcXGQrKV8/KFxcZCspPy8pO1xyXG4gICAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQgJiYgbWF0Y2ggIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoWzFdLCAxMCkgPCAxNDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG5lZWRzRVM1KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBpc0lFID0gISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcclxuICAgIGNvbnN0IGlzRWRnZSA9IC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICBjb25zdCBpc0lPczEzT3JCZWxvdyA9IHRoaXMuaU9TVmVyc2lvblJlcXVpcmVzRVM1KCk7XHJcbiAgICBsZXQgbmVlZHNFUzUgPSB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBQcm9taXNlWydhbGxTZXR0bGVkJ10gPT09ICd1bmRlZmluZWQnO1xyXG4gICAgaWYgKG5lZWRzRVM1IHx8IGlzSUUgfHwgaXNFZGdlIHx8IGlzSU9zMTNPckJlbG93IHx8IHRoaXMuZm9yY2VVc2luZ0xlZ2FjeUVTNSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhKGF3YWl0IHRoaXMuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3Qgc3VwcG9ydCA9ICg8YW55PndpbmRvdykuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nO1xyXG4gICAgICBzdXBwb3J0ICE9PSB1bmRlZmluZWQgPyByZXNvbHZlKHN1cHBvcnQpIDogcmVzb2x2ZSh0aGlzLmFkZFNjcmlwdE9wQ2hhaW5pbmdTdXBwb3J0KCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFNjcmlwdE9wQ2hhaW5pbmdTdXBwb3J0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL29wLWNoYWluaW5nLXN1cHBvcnQuanMnKTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVzb2x2ZSgoPGFueT53aW5kb3cpLnN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZyBhcyBib29sZWFuKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICAgICg8YW55PndpbmRvdykuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nID0gZmFsc2U7XHJcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlU2NyaXB0RWxlbWVudChzb3VyY2VQYXRoOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCB7XHJcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICBzY3JpcHQudHlwZSA9IHNvdXJjZVBhdGguZW5kc1dpdGgoJy5tanMnKSA/ICdtb2R1bGUnIDogJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICB0aGlzLnBkZkNzcFBvbGljeVNlcnZpY2UuYWRkVHJ1c3RlZEphdmFTY3JpcHQoc2NyaXB0LCBzb3VyY2VQYXRoKTtcclxuICAgIHJldHVybiBzY3JpcHQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBkZkpzUGF0aChhcnRpZmFjdDogJ3BkZicgfCAndmlld2VyJywgbmVlZHNFUzU6IGJvb2xlYW4pIHtcclxuICAgIGxldCBzdWZmaXggPSB0aGlzLm1pbmlmaWVkSlNMaWJyYXJpZXMgPyAnLm1pbi5qcycgOiAnLmpzJztcclxuICAgIGNvbnN0IGFzc2V0cyA9IHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcjtcclxuICAgIGNvbnN0IHZlcnNpb25TdWZmaXggPSBnZXRWZXJzaW9uU3VmZml4KGFzc2V0cyk7XHJcbiAgICBpZiAodmVyc2lvblN1ZmZpeC5zdGFydHNXaXRoKCc0JykpIHtcclxuICAgICAgc3VmZml4ID0gc3VmZml4LnJlcGxhY2UoJy5qcycsICcubWpzJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhcnRpZmFjdFBhdGggPSBgLyR7YXJ0aWZhY3R9LWA7XHJcbiAgICBjb25zdCBlczUgPSBuZWVkc0VTNSA/ICctZXM1JyA6ICcnO1xyXG5cclxuICAgIHJldHVybiBhc3NldHMgKyBhcnRpZmFjdFBhdGggKyB2ZXJzaW9uU3VmZml4ICsgZXM1ICsgc3VmZml4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkVmlld2VyKCk6IHZvaWQge1xyXG4gICAgZ2xvYmFsVGhpc1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZpZXdlclBhdGggPSB0aGlzLmdldFBkZkpzUGF0aCgndmlld2VyJywgbmVlZHNFUzUpO1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudCh2aWV3ZXJQYXRoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEZlYXR1cmVzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2FkZGl0aW9uYWwtZmVhdHVyZXMuanMnKTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgZ2xvYmFsVGhpc1snc2V0Tmd4RXh0ZW5kZWRQZGZWaWV3ZXJTb3VyY2UnXSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NyYyA9IHVybDtcclxuICAgICAgICB0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdCh1cmwpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5hZGRUcmFuc2xhdGlvbnNVbmxlc3NQcm92aWRlZEJ5VGhlVXNlcigpO1xyXG4gICAgICB0aGlzLmZvcm1TdXBwb3J0LnJlZ2lzdGVyRm9ybVN1cHBvcnRXaXRoUGRmanModGhpcy5uZ1pvbmUpO1xyXG4gICAgICB0aGlzLmxvYWRQZGZKcygpO1xyXG4gICAgICB0aGlzLmhpZGVUb29sYmFySWZJdElzRW1wdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFBkZkpzKCkge1xyXG4gICAgZ2xvYmFsVGhpc1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICghZ2xvYmFsVGhpc1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xyXG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5lZWRzRVM1KSB7XHJcbiAgICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMubmVlZHNFUzUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIFwiSWYgeW91IHNlZSB0aGUgZXJyb3IgbWVzc2FnZSBcXFwiZXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290ICc9J1xcXCIgYWJvdmU6IHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCBhcyBsb25nIGFzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLiBJdCBtZWFucyB5b3VyIGJyb3dzZXIgaXMgb3V0LW9mLWRhdGUuIFBsZWFzZSB1cGRhdGUgeW91ciBicm93c2VyIHRvIGJlbmVmaXQgZnJvbSB0aGUgbGF0ZXN0IHNlY3VyaXR5IHVwZGF0ZXMgYW5kIHRvIGVuam95IGEgZmFzdGVyIFBERiB2aWV3ZXIuXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBkZkRlZmF1bHRPcHRpb25zLm5lZWRzRVM1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHRoZSBFUzUgdmVyc2lvbiBvZiB0aGUgUERGIHZpZXdlci4gWW91ciBQREYgZmlsZXMgc2hvdyBmYXN0ZXIgaWYgeW91IHVwZGF0ZSB5b3VyIGJyb3dzZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5taW5pZmllZEpTTGlicmFyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjKCkuZW5kc1dpdGgoJy5taW4ubWpzJykpIHtcclxuICAgICAgICAgICAgICBjb25zdCBzcmMgPSBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKTtcclxuICAgICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMgPSAoKSA9PiBzcmMucmVwbGFjZSgnLm1qcycsICcubWluLm1qcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBwZGZKc1BhdGggPSB0aGlzLmdldFBkZkpzUGF0aCgncGRmJywgbmVlZHNFUzUpO1xyXG4gICAgICAgICAgaWYgKHBkZkpzUGF0aC5lbmRzV2l0aCgnLm1qcycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpO1xyXG4gICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMgPSAoKSA9PiBzcmMucmVwbGFjZSgnLmpzJywgJy5tanMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChwZGZKc1BhdGgpO1xyXG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICghKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xyXG4gICAgICAgIGlmICgoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuZG9Jbml0UERGVmlld2VyKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdBZnRlclZpZXdJbml0KCksIDUwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXNzaWduVGFiaW5kZXhlcygpIHtcclxuICAgIGlmICh0aGlzLnN0YXJ0VGFiaW5kZXgpIHtcclxuICAgICAgY29uc3QgciA9IHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgci5jbGFzc0xpc3QuYWRkKCdvZmZzY3JlZW4nKTtcclxuICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShyKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyKTtcclxuICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RFbGVtZW50UG9zaXRpb25zKHIsIHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LCBbXSk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocik7XHJcbiAgICAgIGNvbnN0IHRvcFJpZ2h0R3JlYXRlclRoYW5Cb3R0b21MZWZ0Q29tcGFyYXRvciA9IChhLCBiKSA9PiB7XHJcbiAgICAgICAgaWYgKGEueSAtIGIueSA+IDE1KSB7XHJcbiAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGIueSAtIGEueSA+IDE1KSB7XHJcbiAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhLnggLSBiLng7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5lbGVtZW50c10uc29ydCh0b3BSaWdodEdyZWF0ZXJUaGFuQm90dG9tTGVmdENvbXBhcmF0b3IpO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNvcnRlZFtpXS5lbGVtZW50LnRhYkluZGV4ID0gdGhpcy5zdGFydFRhYmluZGV4ICsgaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RWxlbWVudHNSZWN1cnNpdmVseShyb290OiBFbGVtZW50KTogdm9pZCB7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWFhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5YTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTGFyZ2VWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbk1lZGl1bVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuU21hbGxWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblRpbnlWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZUxhcmdlVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTWVkaXVtVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlU21hbGxWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVUaW55VmlldycpO1xyXG5cclxuICAgIGlmIChyb290IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKHJvb3QuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHJvb3QuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoY29weTogRWxlbWVudCwgb3JpZ2luYWw6IEVsZW1lbnQsIGVsZW1lbnRzOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+KTogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPiB7XHJcbiAgICBpZiAoY29weSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgcmVjdCA9IGNvcHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRBbmRQb3MgPSB7XHJcbiAgICAgICAgZWxlbWVudDogb3JpZ2luYWwsXHJcbiAgICAgICAgeDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxyXG4gICAgICAgIHk6IE1hdGgucm91bmQocmVjdC50b3ApLFxyXG4gICAgICB9IGFzIEVsZW1lbnRBbmRQb3NpdGlvbjtcclxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50QW5kUG9zKTtcclxuICAgIH0gZWxzZSBpZiAoY29weS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjID0gY29weS5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGNvbnN0IG8gPSBvcmlnaW5hbC5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGlmIChjICYmIG8pIHtcclxuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjLCBvLCBlbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvSW5pdFBERlZpZXdlcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdGlhbGl6ZVZpZXdlckFuZE9wZW5QZGYgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxpemF0aW9uSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XHJcbiAgICAgICAgICB0aGlzLmFmdGVyTGlicmFyeUluaXQoKTtcclxuICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuZGVsYXlGaXJzdFZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVQcmludC5lbWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIHRyeWluZyB0byBvcGVuIHR3byBpbnN0YW5jZXMgb2YgdGhlIFBERiB2aWV3ZXIuIE1vc3QgbGlrZWx5LCB0aGlzIHdpbGwgcmVzdWx0IGluIGVycm9ycy5cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvYWRlZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XHJcbiAgICAgIGluaXRpYWxpemVWaWV3ZXJBbmRPcGVuUGRmKCk7XHJcbiAgICB9O1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xyXG5cclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShudWxsKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgLy8gVGhpcyBpbml0aWFsaXplcyB0aGUgd2Vidmlld2VyLCB0aGUgZmlsZSBtYXkgYmUgcGFzc2VkIGluIHRvIGl0IHRvIGluaXRpYWxpemUgdGhlIHZpZXdlciB3aXRoIGEgcGRmIGRpcmVjdGx5XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiBnbG9iYWxUaGlzLndlYlZpZXdlckxvYWQoKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmRlZmF1bHRVcmwgPSAnJzsgLy8gSUUgYnVnZml4XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZSA9PT0gJycgPyB1bmRlZmluZWQgOiB0aGlzLmxhbmd1YWdlO1xyXG4gICAgICAgIGlmICghbGFuZ3VhZ2UpIHtcclxuICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSAnZW4nO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2xvY2FsZScsIGxhbmd1YWdlKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdpbWFnZVJlc291cmNlc1BhdGgnLCB0aGlzLmltYWdlUmVzb3VyY2VzUGF0aCk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWluWm9vbScsIHRoaXMubWluWm9vbSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWF4Wm9vbScsIHRoaXMubWF4Wm9vbSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgncGFnZVZpZXdNb2RlJywgdGhpcy5wYWdlVmlld01vZGUpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3ZlcmJvc2l0eScsIHRoaXMubG9nTGV2ZWwpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2luaXRpYWxab29tJywgdGhpcy56b29tKTtcclxuXHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uaXNWaWV3ZXJFbWJlZGRlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xyXG4gICAgICAgIGlmIChib2R5WzBdKSB7XHJcbiAgICAgICAgICBjb25zdCB0b3BMZXZlbEVsZW1lbnRzID0gYm9keVswXS5jaGlsZHJlbjtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSB0b3BMZXZlbEVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGUgPSB0b3BMZXZlbEVsZW1lbnRzLml0ZW0oaSk7XHJcbiAgICAgICAgICAgIGlmIChlICYmIGUuaWQgPT09ICdwcmludENvbnRhaW5lcicpIHtcclxuICAgICAgICAgICAgICBib2R5WzBdLnJlbW92ZUNoaWxkKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW50Q29udGFpbmVyJyk7XHJcbiAgICAgICAgaWYgKHBjKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKHBjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRUcmFuc2xhdGlvbnNVbmxlc3NQcm92aWRlZEJ5VGhlVXNlcigpIHtcclxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGxpbmsucmVsID0gJ3Jlc291cmNlJztcclxuICAgIGxpbmsudHlwZSA9ICdhcHBsaWNhdGlvbi9sMTBuJztcclxuICAgIGxpbmsuaHJlZiA9IHRoaXMubG9jYWxlRm9sZGVyUGF0aCArICcvbG9jYWxlLmpzb24nO1xyXG5cclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdvcmlnaW4nLCAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGxpbmspO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlVG9vbGJhcklmSXRJc0VtcHR5KCkge1xyXG4gICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSB0aGlzLnNob3dUb29sYmFyO1xyXG4gICAgaWYgKCF0aGlzLnNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uIHx8IHRoaXMuc2VydmljZS5zZWNvbmRhcnlNZW51SXNFbXB0eSkge1xyXG4gICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xyXG4gICAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBOb3RpZmllcyBldmVyeSB3aWRnZXQgdGhhdCBpbXBsZW1lbnRzIG9uTGlicmFyeUluaXQoKSB0aGF0IHRoZSBQREYgdmlld2VyIG9iamVjdHMgYXJlIGF2YWlsYWJsZSAqL1xyXG4gIHByaXZhdGUgYWZ0ZXJMaWJyYXJ5SW5pdCgpIHtcclxuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hlY2tIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5faGVpZ2h0KSB7XHJcbiAgICAgIGlmIChpc05hTihOdW1iZXIodGhpcy5faGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpKSkge1xyXG4gICAgICAgIC8vIFRoZSBoZWlnaHQgaXMgZGVmaW5lZCB3aXRoIG9uZSBvZiB0aGUgdW5pdHMgdmgsIHZ3LCBlbSwgcmVtLCBldGMuXHJcbiAgICAgICAgLy8gU28gdGhlIGhlaWdodCBjaGVjayBpc24ndCBuZWNlc3NhcnkuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcGRmanNwcmludGluZ10nKSkge1xyXG4gICAgICAvLyAjMTcwMiB3b3JrYXJvdW5kIHRvIGEgRmlyZWZveCBidWc6IHdoZW4gcHJpbnRpbmcsIGNvbnRhaW5lci5jbGllbnRIZWlnaHQgaXMgdGVtcG9yYXJpbHkgMCxcclxuICAgICAgLy8gY2F1c2luZyBuZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlciB0byBkZWZhdWx0IHRvIDEwMCBwaXhlbHMgaGVpZ2h0LiBTbyBpdCdzIGJldHRlclxyXG4gICAgICAvLyB0byBkbyBub3RoaW5nLlxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6b29tJylbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmNsaWVudEhlaWdodCA9PT0gMCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MgJiYgIXRoaXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgXCJUaGUgaGVpZ2h0IG9mIHRoZSBQREYgdmlld2VyIHdpZGdldCBpcyB6ZXJvIHBpeGVscy4gUGxlYXNlIGNoZWNrIHRoZSBoZWlnaHQgYXR0cmlidXRlLiBJcyB0aGVyZSBhIHN5bnRheCBlcnJvcj8gT3IgYXJlIHlvdSB1c2luZyBhIHBlcmNlbnRhZ2Ugd2l0aCBhIENTUyBmcmFtZXdvcmsgdGhhdCBkb2Vzbid0IHN1cHBvcnQgdGhpcz8gVGhlIGhlaWdodCBpcyBhZGp1c3RlZCBhdXRvbWF0ZWRseS5cIlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5hdXRvSGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0hlaWdodCkge1xyXG4gICAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgICAgY29uc3QgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wO1xyXG4gICAgICAgICAgbGV0IG1heGltdW1IZWlnaHQgPSBhdmFpbGFibGUgLSB0b3A7XHJcbiAgICAgICAgICAvLyB0YWtlIHRoZSBtYXJnaW5zIGFuZCBwYWRkaW5ncyBvZiB0aGUgcGFyZW50IGNvbnRhaW5lcnMgaW50byBhY2NvdW50XHJcbiAgICAgICAgICBjb25zdCBwYWRkaW5nID0gdGhpcy5jYWxjdWxhdGVCb3JkZXJNYXJnaW4oY29udGFpbmVyKTtcclxuICAgICAgICAgIG1heGltdW1IZWlnaHQgLT0gcGFkZGluZztcclxuICAgICAgICAgIGlmIChtYXhpbXVtSGVpZ2h0ID4gMTAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gYCR7bWF4aW11bUhlaWdodH1weGA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICcxMDBweCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQm9yZGVyTWFyZ2luKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBwYWRkaW5nID0gVW5pdFRvUHgudG9QeChjb21wdXRlZFN0eWxlLnBhZGRpbmdCb3R0b20pO1xyXG4gICAgICBjb25zdCBtYXJnaW4gPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tKTtcclxuICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gcGFkZGluZyArIG1hcmdpbjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFkZGluZyArIG1hcmdpbiArIHRoaXMuY2FsY3VsYXRlQm9yZGVyTWFyZ2luKGNvbnRhaW5lci5wYXJlbnRFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHJldHVybiAwO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uU3ByZWFkQ2hhbmdlKG5ld1NwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJyk6IHZvaWQge1xyXG4gICAgdGhpcy5zcHJlYWRDaGFuZ2UuZW1pdChuZXdTcHJlYWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGV4dExheWVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKCF0aGlzLmhhbmRUb29sKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgcGRmRGVmYXVsdE9wdGlvbnMudGV4dExheWVyTW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dExheWVyID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh2aWV3RmluZCkge1xyXG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZGJhcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xyXG4gICAgICAgICAgICAgIGZpbmRiYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA/IHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUgOiAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gfHwgdGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy50ZXh0TGF5ZXIpIHtcclxuICAgICAgICAvLyB0b2RvOiBpcyB0aGlzIGEgcmVkdW5kYW50IGNoZWNrP1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxyXG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcclxuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcclxuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdG9kbzogaXMgdGhlIGVsc2UgYnJhbmNoIGRlYWQgY29kZT9cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJyk7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBvdmVycmlkZURlZmF1bHRTZXR0aW5ncygpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcGRmRGVmYXVsdE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoa2V5LCBwZGZEZWZhdWx0T3B0aW9uc1trZXldKTtcclxuICAgIH1cclxuICAgIG9wdGlvbnMuc2V0KCdkaXNhYmxlUHJlZmVyZW5jZXMnLCB0cnVlKTtcclxuICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG5cclxuICAgIG9wdGlvbnMuc2V0KCdpZ25vcmVLZXlib2FyZCcsIHRoaXMuaWdub3JlS2V5Ym9hcmQpO1xyXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleXMnLCB0aGlzLmlnbm9yZUtleXMpO1xyXG4gICAgb3B0aW9ucy5zZXQoJ2FjY2VwdEtleXMnLCB0aGlzLmFjY2VwdEtleXMpO1xyXG4gICAgdGhpcy5hY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG9wdGlvbnMpO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgfHwgdGhpcy5zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbCkge1xyXG4gICAgICBvcHRpb25zLnNldCgnc2Nyb2xsTW9kZU9uTG9hZCcsIHRoaXMuc2Nyb2xsTW9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2lkZWJhclZpc2libGUgPSB0aGlzLnNpZGViYXJWaXNpYmxlO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBpZiAoc2lkZWJhclZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IHRoaXMuYWN0aXZlU2lkZWJhclZpZXcgOiBQZGZTaWRlYmFyVmlldy5OT05FO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzaWRlYmFyVmlld09uTG9hZCcsIHRoaXMuc2lkZWJhclZpc2libGUgPyB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3IDogMCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDIpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ2V2ZW4nKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMSk7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDApO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJpbnRSZXNvbHV0aW9uKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaG93Qm9yZGVycyA9PT0gZmFsc2UpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3JlbW92ZVBhZ2VCb3JkZXJzJywgIXRoaXMuc2hvd0JvcmRlcnMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvcGVuUERGKCkge1xyXG4gICAgU2VydmljZVdvcmtlck9wdGlvbnMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXM7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xyXG4gICAgdGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50TGlzdGVuZXJzKFBERlZpZXdlckFwcGxpY2F0aW9uKTtcclxuICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xyXG4gICAgaWYgKCF0aGlzLmxpc3RlblRvVVJMKSB7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLnNldEhhc2ggPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc3JjKSB7XHJcbiAgICAgIHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gdGhpcy5jaGVja0hlaWdodCgpLCAxMDApO1xyXG4gICAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXHJcbiAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGhvcml6YXRpb24gIT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5odHRwSGVhZGVycykgb3B0aW9ucy5odHRwSGVhZGVycyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmJhc2VIcmVmID0gdGhpcy5iYXNlSHJlZjtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vbkVycm9yID0gKGVycm9yOiBFcnJvcikgPT4gdGhpcy5wZGZMb2FkaW5nRmFpbGVkLmVtaXQoZXJyb3IpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLnVybCA9IHRoaXMuX3NyYztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3JjIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHRoaXMuX3NyYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9wdGlvbnMucmFuZ2VDaHVua1NpemUgPSBwZGZEZWZhdWx0T3B0aW9ucy5yYW5nZUNodW5rU2l6ZTtcclxuICAgICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4ob3B0aW9ucyk7XHJcbiAgICAgICAgICB0aGlzLnBkZkxvYWRpbmdTdGFydHMuZW1pdCh7fSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHRoaXMuc2V0Wm9vbSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWdpc3RlckV2ZW50TGlzdGVuZXJzKFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9uLWVkaXRvci1ldmVudCcsICh4OiBBbm5vdGF0aW9uRWRpdG9yRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmFubm90YXRpb25FZGl0b3JFdmVudC5lbWl0KHgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd0b2dnbGVTaWRlYmFyJywgKHg6IFRvZ2dsZVNpZGViYXJFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2lkZWJhclZpc2libGUgPSB4LnZpc2libGU7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyVmlzaWJsZUNoYW5nZS5lbWl0KHgudmlzaWJsZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3RleHRsYXllcnJlbmRlcmVkJywgKHg6IFRleHRMYXllclJlbmRlcmVkRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMudGV4dExheWVyUmVuZGVyZWQuZW1pdCh4KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmVkaXRvcm1vZGVjaGFuZ2VkJywgKHg6IEFubm90YXRpb25FZGl0b3JFZGl0b3JNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XHJcbiAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgdGltZW91dCBoZXJlIHRvIG1ha2Ugc3VyZSB0aGUgZWRpdG9yIGlzIGFscmVhZHkgdmlzaWJsZVxyXG4gICAgICAvLyB3aGVuIHRoZSBldmVudCBpcyBjYXVnaHQuIFBkZi5qcyBmaXJlcyBpdCBhIGJpdCBlYXJseS5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFubm90YXRpb25FZGl0b3JNb2RlQ2hhbmdlZC5lbWl0KHgpKTtcclxuICAgICAgaWYgKHgubW9kZSA9PT0gMCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItcHJldmVudC10b3VjaC1tb3ZlJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci1wcmV2ZW50LXRvdWNoLW1vdmUnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Njcm9sbG1vZGVjaGFuZ2VkJywgKHg6IFNjcm9sbE1vZGVDaGFuZ2VkRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zY3JvbGxNb2RlID0geC5tb2RlO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsTW9kZUNoYW5nZS5lbWl0KHgubW9kZSk7XHJcbiAgICAgICAgaWYgKHgubW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlICE9PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VWaWV3TW9kZUNoYW5nZS5lbWl0KCdzaW5nbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ3NpbmdsZSc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Byb2dyZXNzJywgKHg6IFByb2dyZXNzQmFyRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucHJvZ3Jlc3MuZW1pdCh4KSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaW5kYmFyY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maW5kYmFyVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZmluZGJhclZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZmluZGJhcm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5maW5kYmFyVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5maW5kYmFyVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Byb3BlcnRpZXNkaWFsb2djbG9zZScsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcm9wZXJ0aWVzZGlhbG9nb3BlbicsICgpID0+IHtcclxuICAgICAgdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnByb3BlcnRpZXNEaWFsb2dWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VzbG9hZGVkJywgKHg6IFBhZ2VzTG9hZGVkRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucGFnZXNMb2FkZWQuZW1pdCh4KSk7XHJcbiAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUoZmFsc2UpO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucm90YXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5nb1RvRGVzdGluYXRpb24odGhpcy5uYW1lZGRlc3QpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IE51bWJlcih0aGlzLnBhZ2UpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgfSk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKHg6IFBhZ2VSZW5kZXJlZEV2ZW50KSA9PiB7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyZWQuZW1pdCh4KTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyJywgKHg6IFBhZ2VSZW5kZXJFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFnZVJlbmRlci5lbWl0KHgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb3dubG9hZCcsICh4OiBQZGZEb3dubG9hZGVkRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnBkZkRvd25sb2FkZWQuZW1pdCh4KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY2FsZWNoYW5naW5nJywgKHg6IFNjYWxlQ2hhbmdpbmdFdmVudCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRab29tRmFjdG9yLmVtaXQoeC5zY2FsZSk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHgucHJlc2V0VmFsdWUgIT09ICdhdXRvJyAmJiB4LnByZXNldFZhbHVlICE9PSAncGFnZS1maXQnICYmIHgucHJlc2V0VmFsdWUgIT09ICdwYWdlLWFjdHVhbCcgJiYgeC5wcmVzZXRWYWx1ZSAhPT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgLy8gaWdub3JlIHJvdW5kaW5nIGRpZmZlcmVuY2VzXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHgucHJldmlvdXNTY2FsZSAtIHguc2NhbGUpID4gMC4wMDAwMDEpIHtcclxuICAgICAgICAgIHRoaXMuem9vbSA9IHguc2NhbGUgKiAxMDA7XHJcbiAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnNjYWxlICogMTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoeC5wcmV2aW91c1ByZXNldFZhbHVlICE9PSB4LnByZXNldFZhbHVlKSB7XHJcbiAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBvbmUgb2YgdGhlIHRleHQgdmFsdWVzIG9mIHRoZSB6b29tIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHgucHJlc2V0VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncm90YXRpb25jaGFuZ2luZycsICh4OiBQYWdlc1JvdGF0aW9uRXZlbnQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQoeC5wYWdlc1JvdGF0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaWxlaW5wdXRjaGFuZ2UnLCAoeDogRmlsZUlucHV0Q2hhbmdlZCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGlmICh4LmZpbGVJbnB1dC5maWxlcyAmJiB4LmZpbGVJbnB1dC5maWxlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgLy8gZHJhZyBhbmQgZHJvcFxyXG4gICAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdCh4LmZpbGVJbnB1dC5maWxlc1swXS5uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gcmVndWxhciBmaWxlIG9wZW4gZGlhbG9nXHJcbiAgICAgICAgICBjb25zdCBwYXRoID0geC5maWxlSW5wdXQ/LnZhbHVlPy5yZXBsYWNlKCdDOlxcXFxmYWtlcGF0aFxcXFwnLCAnJyk7XHJcbiAgICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdjdXJzb3J0b29sY2hhbmdlZCcsICh4OiBIYW5kdG9vbENoYW5nZWQpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmRUb29sID0geC50b29sID09PSBQZGZDdXJzb3JUb29scy5IQU5EO1xyXG4gICAgICAgIHRoaXMuaGFuZFRvb2xDaGFuZ2UuZW1pdCh4LnRvb2wgPT09IFBkZkN1cnNvclRvb2xzLkhBTkQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzaWRlYmFydmlld2NoYW5nZWQnLCAoeDogU2lkZWJhcnZpZXdDaGFuZ2UpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XHJcbiAgICAgICAgaWYgKHgudmlldyA+IDApIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UuZW1pdCh4LnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb2N1bWVudGxvYWRlZCcsIChwZGZMb2FkZWRFdmVudDogUGRmRG9jdW1lbnRMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VzID0gcGRmTG9hZGVkRXZlbnQuc291cmNlLnBhZ2VzQ291bnQ7XHJcbiAgICAgICAgdGhpcy5wYWdlTGFiZWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UgPj0gcGFnZXMpIHtcclxuICAgICAgICAgIHRoaXMucGFnZSA9IHBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbFNpZ25hdHVyZVdhcm5pbmdJbnRvVmlldyhwZGZMb2FkZWRFdmVudC5zb3VyY2UucGRmRG9jdW1lbnQpO1xyXG4gICAgICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBwZGZMb2FkZWRFdmVudC5zb3VyY2UucGRmRG9jdW1lbnQ/Lm51bVBhZ2VzIH0gYXMgUGRmTG9hZGVkRXZlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmRiYXJWaXNpYmxlKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzcHJlYWRtb2RlY2hhbmdlZCcsIChldmVudCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZGVzID0gWydvZmYnLCAnb2RkJywgJ2V2ZW4nXSBhcyBBcnJheTxTcHJlYWRUeXBlPjtcclxuICAgICAgICB0aGlzLnNwcmVhZCA9IG1vZGVzW2V2ZW50Lm1vZGVdO1xyXG4gICAgICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQodGhpcy5zcHJlYWQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhpZGVTaWRlYmFyVG9vbGJhciA9ICgpID0+IHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xyXG5cclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhdHRhY2htZW50c2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Fubm90YXRpb25sYXllcnJlbmRlcmVkJywgKGV2ZW50OiBBbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZEV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGRpdiA9IGV2ZW50LnNvdXJjZS5kaXY7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZC5lbWl0KGV2ZW50KTtcclxuICAgICAgICB0aGlzLmVuYWJsZU9yRGlzYWJsZUZvcm1zKGRpdiwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmVkaXRvcmxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpKSk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigneGZhbGF5ZXJyZW5kZXJlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMueGZhTGF5ZXJSZW5kZXJlZC5lbWl0KGV2ZW50KSkpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm91dGxpbmVMb2FkZWQuZW1pdChldmVudCkpKTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhdHRhY2htZW50c2xvYWRlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuYXR0YWNobWVudHNsb2FkZWQuZW1pdChldmVudCkpKTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdsYXllcnNsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmxheWVyc2xvYWRlZC5lbWl0KGV2ZW50KSkpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3ByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LmRlc3Ryb3lCb29rTW9kZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRjb250cm9sc3RhdGUnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgIGxldCB0eXBlID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUudHlwZSB8fCAnZmluZCc7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdhZ2FpbicpIHtcclxuICAgICAgICAgIHR5cGUgPSAnZmluZGFnYWluJztcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgY2FzZVNlbnNpdGl2ZTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuY2FzZVNlbnNpdGl2ZSxcclxuICAgICAgICAgIGVudGlyZVdvcmQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmVudGlyZVdvcmQsXHJcbiAgICAgICAgICBmaW5kUHJldmlvdXM6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmZpbmRQcmV2aW91cyxcclxuICAgICAgICAgIGhpZ2hsaWdodEFsbDogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuaGlnaGxpZ2h0QWxsLFxyXG4gICAgICAgICAgbWF0Y2hEaWFjcml0aWNzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5tYXRjaERpYWNyaXRpY3MsXHJcbiAgICAgICAgICBxdWVyeTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUucXVlcnksXHJcbiAgICAgICAgICB0eXBlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoe1xyXG4gICAgICAgICAgLi4ucmVzdWx0LFxyXG4gICAgICAgICAgY3VycmVudDogeC5tYXRjaGVzQ291bnQuY3VycmVudCxcclxuICAgICAgICAgIHRvdGFsOiB4Lm1hdGNoZXNDb3VudC50b3RhbCxcclxuICAgICAgICAgIG1hdGNoZXM6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlcyxcclxuICAgICAgICAgIG1hdGNoZXNMZW5ndGg6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlRmluZFN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRTdGF0ZS5lbWl0KHguc3RhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGVmaW5kbWF0Y2hlc2NvdW50JywgKHg6IEZpbmRSZXN1bHQpID0+IHtcclxuICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlcyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlcztcclxuICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0xlbmd0aCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aDtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoe1xyXG4gICAgICAgICAgY2FzZVNlbnNpdGl2ZTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuY2FzZVNlbnNpdGl2ZSxcclxuICAgICAgICAgIGVudGlyZVdvcmQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmVudGlyZVdvcmQsXHJcbiAgICAgICAgICBmaW5kUHJldmlvdXM6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmZpbmRQcmV2aW91cyxcclxuICAgICAgICAgIGhpZ2hsaWdodEFsbDogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuaGlnaGxpZ2h0QWxsLFxyXG4gICAgICAgICAgbWF0Y2hEaWFjcml0aWNzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5tYXRjaERpYWNyaXRpY3MsXHJcbiAgICAgICAgICBxdWVyeTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUucXVlcnksXHJcbiAgICAgICAgICB0eXBlOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS50eXBlLFxyXG4gICAgICAgICAgY3VycmVudDogeC5tYXRjaGVzQ291bnQuY3VycmVudCxcclxuICAgICAgICAgIHRvdGFsOiB4Lm1hdGNoZXNDb3VudC50b3RhbCxcclxuICAgICAgICAgIG1hdGNoZXM6IHgubWF0Y2hlc0NvdW50Lm1hdGNoZXMsXHJcbiAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzTGVuZ3RoLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZWNoYW5naW5nJywgKHg6IFBhZ2VOdW1iZXJDaGFuZ2UpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyO1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VMYWJlbCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsO1xyXG5cclxuICAgICAgICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdGhpcy5wYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50UGFnZUxhYmVsICE9PSB0aGlzLnBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VMYWJlbENoYW5nZS5lbWl0KGN1cnJlbnRQYWdlTGFiZWwpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUocmVzdG9yZUhlaWdodDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJyB8fCByZXN0b3JlSGVpZ2h0KSB7XHJcbiAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKTtcclxuICAgICAgY29uc3Qgem9vbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3pvb20nKVswXTtcclxuICAgICAgaWYgKHZpZXdlcikge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJykge1xyXG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB2aWV3ZXIuY2xpZW50SGVpZ2h0ICsgMTc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByaW1hcnlNZW51VmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgMzUgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDE3KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoem9vbSkge1xyXG4gICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+em9vbSkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzdG9yZUhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9oZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG9wZW5QREYyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5kZXN0cm95Qm9va01vZGUoKTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zdG9wUmVuZGVyaW5nKCk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZUaHVtYm5haWxWaWV3ZXIuc3RvcFJlbmRlcmluZygpO1xyXG5cclxuICAgIC8vICM4MDIgY2xlYXIgdGhlIGZvcm0gZGF0YTsgb3RoZXJ3aXNlIHRoZSBcImRvd25sb2FkXCIgZGlhbG9ncyBvcGVuc1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlPy5yZXNldE1vZGlmaWVkKCk7XHJcblxyXG4gICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuICAgIHRoaXMuZm9ybVN1cHBvcnQucmVzZXQoKTtcclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XHJcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICB2ZXJib3NpdHk6IHRoaXMubG9nTGV2ZWwsXHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuX3NyYz8uWydyYW5nZSddKSB7XHJcbiAgICAgIG9wdGlvbnMucmFuZ2UgPSB0aGlzLl9zcmNbJ3JhbmdlJ107XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5odHRwSGVhZGVycykge1xyXG4gICAgICBvcHRpb25zLmh0dHBIZWFkZXJzID0gdGhpcy5odHRwSGVhZGVycztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmF1dGhvcml6YXRpb24pIHtcclxuICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGhvcml6YXRpb24gIT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzKSBvcHRpb25zLmh0dHBIZWFkZXJzID0ge307XHJcblxyXG4gICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuYXV0aG9yaXphdGlvbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb3B0aW9ucy5iYXNlSHJlZiA9IHRoaXMuYmFzZUhyZWY7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX3NyYyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBvcHRpb25zLnVybCA9IHRoaXMuX3NyYztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IHRoaXMuX3NyYztcclxuICAgICAgICBpZiAodGhpcy5fc3JjLmJ5dGVMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIC8vIHNvbWV0aW1lcyBuZ09uSW5pdCgpIGNhbGxzIG9wZW5QZGYyIHRvbyBlYXJseVxyXG4gICAgICAgICAgLy8gc28gbGV0J3MgaWdub3JlIGVtcHR5IGFycmF5c1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgIGlmICh0aGlzLl9zcmMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBzb21ldGltZXMgbmdPbkluaXQoKSBjYWxscyBvcGVuUGRmMiB0b28gZWFybHlcclxuICAgICAgICAgIC8vIHNvIGxldCdzIGlnbm9yZSBlbXB0eSBhcnJheXNcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9ucy5yYW5nZUNodW5rU2l6ZSA9IHBkZkRlZmF1bHRPcHRpb25zLnJhbmdlQ2h1bmtTaXplO1xyXG4gICAgICBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vcGVuKG9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5wZGZMb2FkaW5nRmFpbGVkLmVtaXQoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RDdXJzb3JUb29sKCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hjdXJzb3J0b29sJywgeyB0b29sOiB0aGlzLmhhbmRUb29sID8gMSA6IDAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbmdPbkRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuOyAvLyBmYXN0IGVzY2FwZSBmb3Igc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LmRlc3Ryb3lCb29rTW9kZSgpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlRodW1ibmFpbFZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsUHJpbnQgPSBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5vcmlnaW5hbFByaW50O1xyXG4gICAgaWYgKHdpbmRvdyAmJiBvcmlnaW5hbFByaW50ICYmICFvcmlnaW5hbFByaW50LnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3ByaW50UGRmJykpIHtcclxuICAgICAgd2luZG93LnByaW50ID0gb3JpZ2luYWxQcmludDtcclxuICAgIH1cclxuICAgIGNvbnN0IHByaW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50Q29udGFpbmVyJyk7XHJcbiAgICBpZiAocHJpbnRDb250YWluZXIpIHtcclxuICAgICAgcHJpbnRDb250YWluZXIucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQocHJpbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWVGcm9tQW5ndWxhciA9IHVuZGVmaW5lZDtcclxuICAgICh3aW5kb3cgYXMgYW55KS5yZWdpc3RlckFjcm9mb3JtQW5ub3RhdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNodXR0aW5nRG93biA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmluaXRUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmluaXRUaW1lb3V0KTtcclxuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlPy5yZXNldE1vZGlmaWVkKCk7XHJcbiAgICAgIHRoaXMuZm9ybVN1cHBvcnQucmVzZXQoKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8ganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAvLyBmb3IgZXhhbXBsZSwgdGhlIHNlY29uZGFyeSB0b29sYmFyIG1heSBoYXZlIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldCwgc29cclxuICAgICAgICAvLyB0cnlpbmcgdG8gZGVzdHJveSBpdCByZXN1bHQgaW4gZXJyb3JzXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2JvdW5kRXZlbnRzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24udW5iaW5kV2luZG93RXZlbnRzKCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYnVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXM7XHJcbiAgICAgIGlmIChidXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRFdmVudHMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBidXMuX2xpc3RlbmVycykge1xyXG4gICAgICAgICAgaWYgKGJ1cy5fbGlzdGVuZXJzW2tleV0pIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdCA9IGJ1cy5fbGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIHRoZSBmb3IgbG9vcCBpcyBuZWNlc3NhcnkgLSBidXRcclxuICAgICAgICAgICAgLy8gaXQgbWlnaHQgaW1wcm92ZSBnYXJiYWdlIGNvbGxlY3Rpb24gaWYgdGhlIFwibGlzdGVuZXJzXCJcclxuICAgICAgICAgICAgLy8gYXJyYXkgaXMgc3RvcmVkIHNvbWV3aGVyZSBlbHNlXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgIGxpc3RbaV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnVzLl9saXN0ZW5lcnNba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgKFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzIGFzIGFueSkgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ByaW1hcnlNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNob3dUb29sYmFyKSB7XHJcbiAgICAgIGNvbnN0IHZpc2libGUgPVxyXG4gICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93RHJhd0VkaXRvciB8fFxyXG4gICAgICAgIHRoaXMuc2hvd0hpZ2hsaWdodEVkaXRvciB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1RleHRFZGl0b3IgfHxcclxuICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93T3BlbkZpbGVCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dQYWdpbmdCdXR0b25zIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1ByaW50QnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJvcGVydGllc0J1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1JvdGF0ZUN3QnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93Um90YXRlQ2N3QnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dTY3JvbGxpbmdCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dTcHJlYWRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dTaWRlYmFyQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93Wm9vbUJ1dHRvbnM7XHJcblxyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjsgLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICB9XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgaWYgKCdzcmMnIGluIGNoYW5nZXMgfHwgJ2Jhc2U2NFNyYycgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlcikge1xyXG4gICAgICAgICAgdGhpcy5zcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnYm9vaycpIHtcclxuICAgICAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uZGVzdHJveUJvb2tNb2RlKCk7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LnN0b3BSZW5kZXJpbmcoKTtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlRodW1ibmFpbFZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9wZW5QREYyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICM4MDIgY2xlYXIgdGhlIGZvcm0gZGF0YTsgb3RoZXJ3aXNlIHRoZSBcImRvd25sb2FkXCIgZGlhbG9ncyBvcGVuc1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtU3VwcG9ydC5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWc/Lm9wZW5GaWxlSW5wdXQ7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdlbmFibGVEcmFnQW5kRHJvcCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnZmluZGJhclZpc2libGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlc1snZmluZGJhclZpc2libGUnXS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRCYXIub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3Byb3BlcnRpZXNEaWFsb2dWaXNpYmxlJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCd6b29tJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnbWF4Wm9vbScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ21pblpvb20nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtaW5ab29tJywgdGhpcy5taW5ab29tKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdoYW5kVG9vbCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgncGFnZScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSAhPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgncGFnZUxhYmVsJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlTGFiZWwgIT09IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3JvdGF0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24pIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3Njcm9sbE1vZGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcclxuICAgICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc2Nyb2xsTW9kZSAhPT0gTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ2FjdGl2ZVNpZGViYXJWaWV3JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclZpc2libGUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIub3BlbigpO1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IE51bWJlcih0aGlzLmFjdGl2ZVNpZGViYXJWaWV3KTtcclxuICAgICAgICAgIGlmICh2aWV3ID09PSAxIHx8IHZpZXcgPT09IDIgfHwgdmlldyA9PT0gMyB8fCB2aWV3ID09PSA0KSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuc3dpdGNoVmlldyh2aWV3LCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1thY3RpdmVTaWRlYmFyVmlld10gbXVzdCBiZSBhbiBpbnRlZ2VyIHZhbHVlIGJldHdlZW4gMSBhbmQgNCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnZmlsZW5hbWVGb3JEb3dubG9hZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgnbmFtZWRkZXN0JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5nb1RvRGVzdGluYXRpb24odGhpcy5uYW1lZGRlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdzcHJlYWQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDI7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XHJcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAxO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAwO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmhpZGVUb29sYmFySWZJdElzRW1wdHkoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICAgIH0gLy8gZW5kIG9mIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKVxyXG5cclxuICAgIGlmICgncHJpbnRSZXNvbHV0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdpZ25vcmVLZXlib2FyZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdpZ25vcmVLZXlzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2FjY2VwdEtleXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnc2hvd0JvcmRlcnMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzWydzaG93Qm9yZGVycyddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3dCb3JkZXJzKSB7XHJcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVQYWdlQm9yZGVycycpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgPSAhdGhpcy5zaG93Qm9yZGVycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHpvb21FdmVudCA9IHtcclxuICAgICAgICAgICAgc291cmNlOiB2aWV3ZXIsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICAgICAgICAgIHNjYWxlOiAoTnVtYmVyKHRoaXMuem9vbSkgfCAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgICBwcmVzZXRWYWx1ZTogdGhpcy56b29tLFxyXG4gICAgICAgICAgfSBhcyBTY2FsZUNoYW5naW5nRXZlbnQ7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc2NhbGVjaGFuZ2luZycsIHpvb21FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZEb2N1bWVudCkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll90cmFuc3BvcnQubWVzc2FnZUhhbmRsZXIuc2VuZCgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJywgdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdmb3JtRGF0YScgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoIWNoYW5nZXNbJ2Zvcm1EYXRhJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtU3VwcG9ydC51cGRhdGVGb3JtRmllbGRzSW5QZGZDYWxsZWRCeU5nT25DaGFuZ2VzKGNoYW5nZXNbJ2Zvcm1EYXRhJ10ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ2VuYWJsZVByaW50JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmICghY2hhbmdlc1snZW5hYmxlUHJpbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5lbmFibGVQcmludCA9IHRoaXMuZW5hYmxlUHJpbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgKCdjdXN0b21GaW5kYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbUZpbmRiYXJCdXR0b25zJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyQnV0dG9ucyddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21GaW5kYmFySW5wdXRBcmVhJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFySW5wdXRBcmVhJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbVRvb2xiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbVRvb2xiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuZHVtbXlDb21wb25lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdwYWdlVmlld01vZGUnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ3BhZ2VWaWV3TW9kZSddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnBhZ2VWaWV3TW9kZSA9IGNoYW5nZXNbJ3BhZ2VWaWV3TW9kZSddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuICAgIGlmICgncmVwbGFjZUJyb3dzZXJQcmludCcgaW4gY2hhbmdlcyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5wcmludFBERikge1xyXG4gICAgICAgICAgd2luZG93LnByaW50ID0gKHdpbmRvdyBhcyBhbnkpLnByaW50UERGO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFByaW50ID0gTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQub3JpZ2luYWxQcmludDtcclxuICAgICAgICBpZiAob3JpZ2luYWxQcmludCAmJiAhb3JpZ2luYWxQcmludC50b1N0cmluZygpLmluY2x1ZGVzKCdwcmludFBkZicpKSB7XHJcbiAgICAgICAgICB3aW5kb3cucHJpbnQgPSBvcmlnaW5hbFByaW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdkaXNhYmxlRm9ybXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5lbmFibGVPckRpc2FibGVGb3Jtcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2V0Wm9vbSgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG4gICAgLy8gc29tZXRpbWVzIG5nT25DaGFuZ2VzIGNhbGxzIHRoaXMgbWV0aG9kIGJlZm9yZSB0aGUgcGFnZSBpcyBpbml0aWFsaXplZCxcclxuICAgIC8vIHNvIGxldCdzIGNoZWNrIGlmIHRoaXMucm9vdCBpcyBhbHJlYWR5IGRlZmluZWRcclxuICAgIGlmICh0aGlzLnJvb3QpIHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICAgIGxldCB6b29tQXNOdW1iZXIgPSB0aGlzLnpvb207XHJcbiAgICAgIGlmIChTdHJpbmcoem9vbUFzTnVtYmVyKS5lbmRzV2l0aCgnJScpKSB7XHJcbiAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKFN0cmluZyh6b29tQXNOdW1iZXIpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG4gICAgICB9IGVsc2UgaWYgKCFpc05hTihOdW1iZXIoem9vbUFzTnVtYmVyKSkpIHtcclxuICAgICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIoem9vbUFzTnVtYmVyKSAvIDEwMDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXpvb21Bc051bWJlcikge1xyXG4gICAgICAgIGlmICghUERGVmlld2VyQXBwbGljYXRpb24uc3RvcmUpIHtcclxuICAgICAgICAgIC8vIEl0J3MgZGlmZmljdWx0IHRvIHByZXZlbnQgY2FsbGluZyB0aGlzIG1ldGhvZCB0byBlYXJseSwgc28gd2UgbmVlZCB0aGlzIGNoZWNrLlxyXG4gICAgICAgICAgLy8gc2V0Wm9vbSgpIGlzIGNhbGxlZCBsYXRlciBhZ2Fpbiwgd2hlbiB0aGUgUERGIGRvY3VtZW50IGhhcyBiZWVuIGxvYWRlZCBhbmQgaXRzXHJcbiAgICAgICAgICAvLyBmaW5nZXJwcmludCBoYXMgYmVlbiBjYWxjdWxhdGVkLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyU2V0dGluZyA9IGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLnN0b3JlLmdldCgnem9vbScpO1xyXG4gICAgICAgICAgaWYgKHVzZXJTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHVzZXJTZXR0aW5nKSkpIHtcclxuICAgICAgICAgICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIodXNlclNldHRpbmcpIC8gMTAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHpvb21Bc051bWJlciA9IHVzZXJTZXR0aW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB6b29tQXNOdW1iZXIgPSAnYXV0byc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2RlZmF1bHRab29tVmFsdWUnLCB6b29tQXNOdW1iZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzY2FsZURyb3Bkb3duRmllbGQgPSAodGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJyNzY2FsZVNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgICBpZiAoc2NhbGVEcm9wZG93bkZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbSA9PT0gJ2F1dG8nIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2UtZml0JyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLWFjdHVhbCcgfHwgdGhpcy56b29tID09PSAncGFnZS13aWR0aCcpIHtcclxuICAgICAgICAgIHNjYWxlRHJvcGRvd25GaWVsZC52YWx1ZSA9IHRoaXMuem9vbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2NhbGVEcm9wZG93bkZpZWxkLnZhbHVlID0gJ2N1c3RvbSc7XHJcbiAgICAgICAgICBpZiAoc2NhbGVEcm9wZG93bkZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygc2NhbGVEcm9wZG93bkZpZWxkLm9wdGlvbnMgYXMgYW55KSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoTnVtYmVyKHpvb21Bc051bWJlcikgKiAxMDBfMDAwKSAvIDEwMDB9JWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZVZhbHVlID0gem9vbUFzTnVtYmVyID8/ICdhdXRvJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHRtbCcpO1xyXG4gICAgaWYgKHBkZlZpZXdlciAmJiBwZGZWaWV3ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0ZXJDb250YWluZXInKTtcclxuICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIHRoaXMudG9vbGJhcldpZHRoSW5QaXhlbHMgPSB3aWR0aDtcclxuICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQuY2hlY2tWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUoZmFsc2UpKTtcclxuICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpO1xyXG4gICAgICBpZiAodmlld2VyKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh2aWV3ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ1Jlc2l6ZU9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScpXHJcbiAgcHVibGljIG9uQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudUFsbG93ZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgc2Nyb2xsU2lnbmF0dXJlV2FybmluZ0ludG9WaWV3KHBkZjogUERGRG9jdW1lbnRQcm94eSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLyoqIFRoaXMgbWV0aG9kIGhhcyBiZWVuIGluc3BpcmVkIGJ5IGh0dHBzOi8vbWVkaXVtLmNvbS9mYWN0b3J5LW1pbmQvYW5ndWxhci1wZGYtZm9ybXMtZmE3MmIxNWMzZmJkLiBUaGFua3MsIEpvbm55IEZveCEgKi9cclxuICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGRmPy5udW1QYWdlczsgaSsrKSB7XHJcbiAgICAgIC8vIHRyYWNrIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgICAgY29uc3QgcGFnZSA9IGF3YWl0IHBkZi5nZXRQYWdlKGkpO1xyXG4gICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGF3YWl0IHBhZ2UuZ2V0QW5ub3RhdGlvbnMoKTtcclxuXHJcbiAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSAnU2lnJyBmaWVsZFR5cGUgaW4gYW5ub3RhdGlvbnNcclxuICAgICAgdGhpcy5oYXNTaWduYXR1cmUgPSBhbm5vdGF0aW9ucy5zb21lKChhKSA9PiBhLmZpZWxkVHlwZSA9PT0gJ1NpZycpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaGFzU2lnbmF0dXJlKSB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIC8vIERlZmVyIHNjcm9sbGluZyB0byBlbnN1cmUgaXQgaGFwcGVucyBhZnRlciBhbnkgb3RoZXIgVUkgdXBkYXRlc1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3ZXJDb250YWluZXInKTtcclxuICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyPy5zY3JvbGxCeSgwLCAtMzIpOyAvLyBBZGp1c3QgdGhlIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnJlYWs7IC8vIHN0b3AgbG9vcGluZyB0aHJvdWdoIHRoZSBwYWdlcyBhcyBzb29uIGFzIHdlIGZpbmQgYSBzaWduYXR1cmVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHpvb21Ub1BhZ2VXaWR0aChldmVudDogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMuaGFuZFRvb2wpIHtcclxuICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tc0luSGFuZE1vZGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbXNJblRleHRTZWxlY3Rpb25Nb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdib29rJykge1xyXG4gICAgICAvLyBzY2FsaW5nIGRvZXNuJ3Qgd29yayBpbiBib29rIG1vZGVcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IGRlc2lyZWRDZW50ZXJZID0gZXZlbnQuY2xpZW50WTtcclxuICAgIGNvbnN0IHByZXZpb3VzU2NhbGUgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY3VycmVudFNjYWxlO1xyXG5cclxuICAgIGlmICh0aGlzLnpvb20gIT09IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3IgJiYgdGhpcy56b29tICsgJyUnICE9PSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNab29tID0gdGhpcy56b29tO1xyXG4gICAgICB0aGlzLnpvb20gPSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yOyAvLyBieSBkZWZhdWx0OiAncGFnZS13aWR0aCc7XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgfSBlbHNlIGlmIChwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBSZXNldHNab29tT25TZWNvbmREb3VibGVUYXApIHtcclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNab29tKSB7XHJcbiAgICAgICAgdGhpcy56b29tID0gdGhpcy5wcmV2aW91c1pvb207XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy56b29tID0gJ3BhZ2Utd2lkdGgnO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jdXJyZW50U2NhbGU7XHJcbiAgICBjb25zdCBzY2FsZUNvcnJlY3Rpb25GYWN0b3IgPSBjdXJyZW50U2NhbGUgLyBwcmV2aW91c1NjYWxlIC0gMTtcclxuICAgIGNvbnN0IHJlY3QgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3QgZHkgPSBkZXNpcmVkQ2VudGVyWSAtIHJlY3QudG9wO1xyXG4gICAgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmNvbnRhaW5lci5zY3JvbGxUb3AgKz0gZHkgKiBzY2FsZUNvcnJlY3Rpb25GYWN0b3I7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVuYWJsZU9yRGlzYWJsZUZvcm1zKGRpdjogSFRNTEVsZW1lbnQsIGRvTm90RW5hYmxlOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUZvcm1zICYmIGRvTm90RW5hYmxlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHhmYUxheWVycyA9IEFycmF5LmZyb20oZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy54ZmFMYXllcicpKTtcclxuICAgIGNvbnN0IGFjcm9Gb3JtTGF5ZXJzID0gQXJyYXkuZnJvbShkaXYucXVlcnlTZWxlY3RvckFsbCgnLmFubm90YXRpb25MYXllcicpKTtcclxuICAgIGNvbnN0IGxheWVycyA9IHhmYUxheWVycy5jb25jYXQoLi4uYWNyb0Zvcm1MYXllcnMpO1xyXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKHgpID0+ICh4LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlRm9ybXMpKSk7XHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IGxheWVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpLmZvckVhY2goKHgpID0+ICh4LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlRm9ybXMpKSk7XHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IGxheWVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJykuZm9yRWFjaCgoeCkgPT4gKHguZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVGb3JtcykpKTtcclxuICB9XHJcbn1cclxuIiwiPHBkZi1kYXJrLXRoZW1lICpuZ0lmPVwidGhlbWUgPT09ICdkYXJrJ1wiPjwvcGRmLWRhcmstdGhlbWU+XHJcbjxwZGYtbGlnaHQtdGhlbWUgKm5nSWY9XCJ0aGVtZSA9PT0gJ2xpZ2h0J1wiPjwvcGRmLWxpZ2h0LXRoZW1lPlxyXG48cGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWU+PC9wZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZT5cclxuXHJcbjxwZGYtZHluYW1pYy1jc3MgW3pvb21dPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIiBbd2lkdGhdPVwidG9vbGJhcldpZHRoSW5QaXhlbHNcIj48L3BkZi1keW5hbWljLWNzcz5cclxuPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21QZGZWaWV3ZXIgPyBjdXN0b21QZGZWaWV3ZXIgOiBkZWZhdWx0UGRmVmlld2VyXCI+PC9uZy1jb250ZW50PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0UGRmVmlld2VyPlxyXG4gIDxkaXYgY2xhc3M9XCJ6b29tXCIgW3N0eWxlLmhlaWdodF09XCJtaW5IZWlnaHQgPyBtaW5IZWlnaHQgOiBoZWlnaHRcIiAjcm9vdD5cclxuICAgIDxkaXYgY2xhc3M9XCJodG1sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJib2R5IHBkZi1qcy12ZXJzaW9uLXt7IG1ham9yTWlub3JQZGZKc1ZlcnNpb24gfX1cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJvdXRlckNvbnRhaW5lclwiICh3aW5kb3c6cmVzaXplKT1cIm9uUmVzaXplKClcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcmVlLWZsb2F0aW5nLWJhclwiICpuZ0lmPVwic2hvd0ZyZWVGbG9hdGluZ0JhclwiPlxyXG4gICAgICAgICAgICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbUZyZWVGbG9hdGluZ0JhciA/IGN1c3RvbUZyZWVGbG9hdGluZ0JhciA6IGRlZmF1bHRGcmVlRmxvYXRpbmdCYXJcIj4gPC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cGRmLXNpZGViYXJcclxuICAgICAgICAgICAgI3BkZnNpZGViYXJcclxuICAgICAgICAgICAgW3NpZGViYXJWaXNpYmxlXT1cInNpZGViYXJWaXNpYmxlIHx8IGZhbHNlXCJcclxuICAgICAgICAgICAgW3Nob3dTaWRlYmFyQnV0dG9uXT1cInNob3dTaWRlYmFyQnV0dG9uXCJcclxuICAgICAgICAgICAgW2N1c3RvbVNpZGViYXJdPVwiY3VzdG9tU2lkZWJhclwiXHJcbiAgICAgICAgICAgIFtjdXN0b21UaHVtYm5haWxdPVwiY3VzdG9tVGh1bWJuYWlsXCJcclxuICAgICAgICAgICAgKHRodW1ibmFpbERyYXduKT1cInRodW1ibmFpbERyYXduLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICAgICAgICAgIFtzaWRlYmFyUG9zaXRpb25Ub3BdPVwic2lkZWJhclBvc2l0aW9uVG9wXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvcGRmLXNpZGViYXI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFpbkNvbnRhaW5lclwiIFtjbGFzcy50b29sYmFyLWhpZGRlbl09XCIhcHJpbWFyeU1lbnVWaXNpYmxlXCI+XHJcbiAgICAgICAgICAgIDxwZGYtZHVtbXktY29tcG9uZW50cz48L3BkZi1kdW1teS1jb21wb25lbnRzPlxyXG5cclxuICAgICAgICAgICAgPHBkZi10b29sYmFyXHJcbiAgICAgICAgICAgICAgKG9uVG9vbGJhckxvYWRlZCk9XCJvblRvb2xiYXJMb2FkZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW3NpZGViYXJWaXNpYmxlXT1cInNpZGViYXJWaXNpYmxlXCJcclxuICAgICAgICAgICAgICBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21Ub29sYmFyXT1cImN1c3RvbVRvb2xiYXJcIlxyXG4gICAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXHJcbiAgICAgICAgICAgICAgWyhwYWdlVmlld01vZGUpXT1cInBhZ2VWaWV3TW9kZVwiXHJcbiAgICAgICAgICAgICAgW3ByaW1hcnlNZW51VmlzaWJsZV09XCJwcmltYXJ5TWVudVZpc2libGVcIlxyXG4gICAgICAgICAgICAgIFtzY3JvbGxNb2RlXT1cInNjcm9sbE1vZGUgPz8gMFwiXHJcbiAgICAgICAgICAgICAgW3Nob3dQcm9wZXJ0aWVzQnV0dG9uXT1cInNob3dQcm9wZXJ0aWVzQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0Jvb2tNb2RlQnV0dG9uXT1cInNob3dCb29rTW9kZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dEb3dubG9hZEJ1dHRvbl09XCJzaG93RG93bmxvYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93RHJhd0VkaXRvcl09XCJzaG93RHJhd0VkaXRvclwiXHJcbiAgICAgICAgICAgICAgW3Nob3dIaWdobGlnaHRFZGl0b3JdPVwic2hvd0hpZ2hsaWdodEVkaXRvclwiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kQnV0dG9uXT1cInNob3dGaW5kQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0hhbmRUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dIb3Jpem9udGFsU2Nyb2xsQnV0dG9uXT1cInNob3dIb3Jpem9udGFsU2Nyb2xsQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0luZmluaXRlU2Nyb2xsQnV0dG9uXT1cInNob3dJbmZpbml0ZVNjcm9sbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93UGFnaW5nQnV0dG9uc109XCJzaG93UGFnaW5nQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uXT1cInNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uICYmIHBhZ2VWaWV3TW9kZSAhPT0gJ2Jvb2snXCJcclxuICAgICAgICAgICAgICBbc2hvd1ByaW50QnV0dG9uXT1cInNob3dQcmludEJ1dHRvbiAmJiBlbmFibGVQcmludFwiXHJcbiAgICAgICAgICAgICAgW3Nob3dSb3RhdGVDd0J1dHRvbl09XCJzaG93Um90YXRlQ3dCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93Um90YXRlQ2N3QnV0dG9uXT1cInNob3dSb3RhdGVDY3dCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbl09XCJzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiAmJiAhc2VydmljZS5zZWNvbmRhcnlNZW51SXNFbXB0eVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTaWRlYmFyQnV0dG9uXT1cInNob3dTaWRlYmFyQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uXT1cInNob3dTaW5nbGVQYWdlTW9kZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTcHJlYWRCdXR0b25dPVwic2hvd1NwcmVhZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdGFtcEVkaXRvcl09XCJzaG93U3RhbXBFZGl0b3JcIlxyXG4gICAgICAgICAgICAgIFtzaG93VGV4dEVkaXRvcl09XCJzaG93VGV4dEVkaXRvclwiXHJcbiAgICAgICAgICAgICAgW3Nob3dWZXJ0aWNhbFNjcm9sbEJ1dHRvbl09XCJzaG93VmVydGljYWxTY3JvbGxCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93V3JhcHBlZFNjcm9sbEJ1dHRvbl09XCJzaG93V3JhcHBlZFNjcm9sbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dab29tQnV0dG9uc109XCJzaG93Wm9vbUJ1dHRvbnMgJiYgcGFnZVZpZXdNb2RlICE9PSAnYm9vaydcIlxyXG4gICAgICAgICAgICAgIFtzcHJlYWRdPVwic3ByZWFkXCJcclxuICAgICAgICAgICAgICBbdGV4dExheWVyXT1cInRleHRMYXllclwiXHJcbiAgICAgICAgICAgICAgW3Rvb2xiYXJNYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiXHJcbiAgICAgICAgICAgICAgW3Rvb2xiYXJXaWR0aF09XCJ0b29sYmFyV2lkdGhcIlxyXG4gICAgICAgICAgICAgIFt6b29tTGV2ZWxzXT1cInpvb21MZXZlbHNcIlxyXG4gICAgICAgICAgICAgIFtmaW5kYmFyVmlzaWJsZV09XCJmaW5kYmFyVmlzaWJsZVwiXHJcbiAgICAgICAgICAgID48L3BkZi10b29sYmFyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXIgaGlkZGVuIGRvb3JIYW5nZXJSaWdodFwiIGlkPVwiZWRpdG9ySGlnaGxpZ2h0UGFyYW1zVG9vbGJhclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJoaWdobGlnaHRQYXJhbXNUb29sYmFyQ29udGFpbmVyXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZWRpdG9ySGlnaGxpZ2h0Q29sb3JQaWNrZXJcIiBjbGFzcz1cImNvbG9yUGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiaGlnaGxpZ2h0Q29sb3JQaWNrZXJMYWJlbFwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIiBkYXRhLWwxMG4taWQ9XCJwZGZqcy1lZGl0b3ItaGlnaGxpZ2h0LWNvbG9ycGlja2VyLWxhYmVsXCI+SGlnaGxpZ2h0IGNvbG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZWRpdG9ySGlnaGxpZ2h0VGhpY2tuZXNzXCIgKm5nSWY9XCJwZGZKc1ZlcnNpb24gPj0gJzQuMSdcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVIaWdobGlnaHRUaGlja25lc3NcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWZyZWUtaGlnaGxpZ2h0LXRoaWNrbmVzcy1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlRoaWNrbmVzczwvbGFiZWxcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpY2tuZXNzUGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlZGl0b3JGcmVlSGlnaGxpZ2h0VGhpY2tuZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZWRpdG9yUGFyYW1zU2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cInBkZmpzLWVkaXRvci1mcmVlLWhpZ2hsaWdodC10aGlja25lc3MtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49XCI4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG1heD1cIjI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMTAxXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImVkaXRvckhpZ2hsaWdodFZpc2liaWxpdHlcIiAqbmdJZj1cInBkZkpzVmVyc2lvbiA+PSAnNC4xJ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9nZ2xlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JIaWdobGlnaHRTaG93QWxsXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cInBkZmpzLWVkaXRvci1oaWdobGlnaHQtc2hvdy1hbGwtYnV0dG9uLWxhYmVsXCI+U2hvdyBhbGw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZWRpdG9ySGlnaGxpZ2h0U2hvd0FsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWhpZ2hsaWdodC1zaG93LWFsbC1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjEwMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvckZyZWVUZXh0UGFyYW1zVG9vbGJhclwiIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JGcmVlVGV4dENvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cInBkZmpzLWVkaXRvci1mcmVlLXRleHQtY29sb3ItaW5wdXRcIj5Gb250IENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiZWRpdG9yRnJlZVRleHRDb2xvclwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zQ29sb3JcIiB0YWJpbmRleD1cIjEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVUZXh0Rm9udFNpemVcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWZyZWUtdGV4dC1zaXplLWlucHV0XCI+Rm9udCBTaXplPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwiZWRpdG9yRnJlZVRleHRGb250U2l6ZVwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zU2xpZGVyXCIgdmFsdWU9XCIxMFwiIG1pbj1cIjVcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHRhYmluZGV4PVwiMTAxXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvcklua1BhcmFtc1Rvb2xiYXJcIiBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zVG9vbGJhckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWluay1jb2xvci1pbnB1dFwiPkNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0NvbG9yXCIgdGFiaW5kZXg9XCIxMDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JJbmtUaGlja25lc3NcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWluay10aGlja25lc3MtaW5wdXRcIj5UaGlja25lc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtUaGlja25lc3NcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCIyMFwiIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cInBkZmpzLWVkaXRvci1pbmstb3BhY2l0eS1pbnB1dFwiPk9wYWNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNTbGlkZXJcIiB2YWx1ZT1cIjEwMFwiIG1pbj1cIjFcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHRhYmluZGV4PVwiMTA0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtc2Vjb25kYXJ5LXRvb2xiYXJcclxuICAgICAgICAgICAgICAjcGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiXHJcbiAgICAgICAgICAgICAgW2N1c3RvbVNlY29uZGFyeVRvb2xiYXJdPVwiY3VzdG9tU2Vjb25kYXJ5VG9vbGJhclwiXHJcbiAgICAgICAgICAgICAgW3NlY29uZGFyeVRvb2xiYXJUb3BdPVwic2Vjb25kYXJ5VG9vbGJhclRvcFwiXHJcbiAgICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgICAoc3ByZWFkQ2hhbmdlKT1cIm9uU3ByZWFkQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIFtsb2NhbGl6YXRpb25Jbml0aWFsaXplZF09XCJsb2NhbGl6YXRpb25Jbml0aWFsaXplZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wZGYtc2Vjb25kYXJ5LXRvb2xiYXI+XHJcblxyXG4gICAgICAgICAgICA8cGRmLWZpbmRiYXJcclxuICAgICAgICAgICAgICBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIlxyXG4gICAgICAgICAgICAgIFtmaW5kYmFyTGVmdF09XCJmaW5kYmFyTGVmdFwiXHJcbiAgICAgICAgICAgICAgW2ZpbmRiYXJUb3BdPVwiZmluZGJhclRvcFwiXHJcbiAgICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b24gfHwgZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21GaW5kYmFySW5wdXRBcmVhXT1cImN1c3RvbUZpbmRiYXJJbnB1dEFyZWFcIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21GaW5kYmFyQnV0dG9uc109XCJjdXN0b21GaW5kYmFyQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kQ3VycmVudFBhZ2VPbmx5XT1cInNob3dGaW5kQ3VycmVudFBhZ2VPbmx5XCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRFbnRpcmVQaHJhc2VdPVwic2hvd0ZpbmRFbnRpcmVQaHJhc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEVudGlyZVdvcmRdPVwic2hvd0ZpbmRFbnRpcmVXb3JkXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRGdXp6eVNlYXJjaF09XCJzaG93RmluZEZ1enp5U2VhcmNoXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRIaWdobGlnaHRBbGxdPVwic2hvd0ZpbmRIaWdobGlnaHRBbGxcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZE1hdGNoRGlhY3JpdGljc109XCJzaG93RmluZE1hdGNoRGlhY3JpdGljc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWF0Y2hDYXNlXT1cInNob3dGaW5kTWF0Y2hDYXNlXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRNZXNzYWdlc109XCJzaG93RmluZE1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRQYWdlUmFuZ2VdPVwic2hvd0ZpbmRQYWdlUmFuZ2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZFJlc3VsdHNDb3VudF09XCJzaG93RmluZFJlc3VsdHNDb3VudFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wZGYtZmluZGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtY29udGV4dC1tZW51PjwvcGRmLWNvbnRleHQtbWVudT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWV3ZXJDb250YWluZXJcIiBbc3R5bGUudG9wXT1cInZpZXdlclBvc2l0aW9uVG9wXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW52ZXJpZmllZC1zaWduYXR1cmUtd2FybmluZ1wiICpuZ0lmPVwiaGFzU2lnbmF0dXJlICYmIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICAgJ3VudmVyaWZpZWQtc2lnbmF0dXJlLXdhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfCB0cmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJUaGlzIFBERiBmaWxlIGNvbnRhaW5zIGEgZGlnaXRhbCBzaWduYXR1cmUuIFRoZSBQREYgdmlld2VyIGNhbid0IHZlcmlmeSBpZiB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGRvd25sb2FkIHRoZSBmaWxlIGFuZCBvcGVuIGl0IGluIEFjcm9iYXQgUmVhZGVyIHRvIHZlcmlmeSB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfCBhc3luY1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidmlld2VyXCIgY2xhc3M9XCJwZGZWaWV3ZXJcIiAoZGJsY2xpY2spPVwiem9vbVRvUGFnZVdpZHRoKCRldmVudClcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwZGYtZXJyb3ItbWVzc2FnZT48L3BkZi1lcnJvci1tZXNzYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIG1haW5Db250YWluZXIgLS0+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImRpYWxvZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cGRmLXBhc3N3b3JkLWRpYWxvZz48L3BkZi1wYXNzd29yZC1kaWFsb2c+XHJcbiAgICAgICAgICAgIDxwZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+PC9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+XHJcbiAgICAgICAgICAgIDxwZGYtYWx0LXRleHQtZGlhbG9nPjwvcGRmLWFsdC10ZXh0LWRpYWxvZz5cclxuICAgICAgICAgICAgPHBkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZz48L3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBkaWFsb2dDb250YWluZXIgLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBvdXRlckNvbnRhaW5lciAtLT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIGlkPVwiZmlsZUlucHV0XCJcclxuICAgICAgICAgIGFjY2VwdD1cIi5wZGYsYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICAgIGNsYXNzPVwiaGlkZGVuXCJcclxuICAgICAgICAgIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiXHJcbiAgICAgICAgICAqbmdJZj1cInBkZkpzVmVyc2lvbiA8ICc0LjEnXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmludENvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RnJlZUZsb2F0aW5nQmFyPiA8L25nLXRlbXBsYXRlPlxyXG4iXX0=