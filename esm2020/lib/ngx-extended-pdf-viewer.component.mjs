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
import * as i0 from "@angular/core";
import * as i1 from "./pdf-notification-service";
import * as i2 from "@angular/common";
import * as i3 from "./ngx-extended-pdf-viewer.service";
import * as i4 from "./theme/pdf-dark-theme/pdf-dark-theme.component";
import * as i5 from "./theme/pdf-light-theme/pdf-light-theme.component";
import * as i6 from "./theme/acroform-default-theme/pdf-acroform-default-theme.component";
import * as i7 from "./dynamic-css/dynamic-css.component";
import * as i8 from "./sidebar/pdf-sidebar/pdf-sidebar.component";
import * as i9 from "./pdf-dummy-components/pdf-dummy-components.component";
import * as i10 from "./toolbar/pdf-toolbar/pdf-toolbar.component";
import * as i11 from "./secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component";
import * as i12 from "./toolbar/pdf-findbar/pdf-findbar.component";
import * as i13 from "./toolbar/pdf-context-menu/pdf-context-menu.component";
import * as i14 from "./pdf-dialog/pdf-error-message/pdf-error-message.component";
import * as i15 from "./pdf-dialog/pdf-password-dialog/pdf-password-dialog.component";
import * as i16 from "./pdf-dialog/pdf-document-properties-dialog/pdf-document-properties-dialog.component";
import * as i17 from "./pdf-dialog/pdf-prepare-printing-dialog/pdf-prepare-printing-dialog.component";
import * as i18 from "./translate.pipe";
const _c0 = ["root"];
const _c1 = ["pdfSecondaryToolbarComponent"];
const _c2 = ["pdfsidebar"];
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
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_ng_template_5_div_5_ng_content_1_Template, 1, 0, "ng-content", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const _r5 = i0.ɵɵreference(8);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r8.customFreeFloatingBar ? ctx_r8.customFreeFloatingBar : _r5);
} }
function NgxExtendedPdfViewerComponent_ng_template_5_div_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, i0.ɵɵpipeBind2(3, 3, "unverified_signature_warning", "This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid. Please download the file and open it in Acrobat Reader to verify the signature is valid.")), " ");
} }
function NgxExtendedPdfViewerComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5, 6)(2, "div", 7)(3, "div")(4, "div", 8);
    i0.ɵɵlistener("resize", function NgxExtendedPdfViewerComponent_ng_template_5_Template_div_resize_4_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onResize(); }, false, i0.ɵɵresolveWindow);
    i0.ɵɵtemplate(5, NgxExtendedPdfViewerComponent_ng_template_5_div_5_Template, 2, 1, "div", 9);
    i0.ɵɵelementStart(6, "pdf-sidebar", 10, 11);
    i0.ɵɵlistener("thumbnailDrawn", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_sidebar_thumbnailDrawn_6_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.thumbnailDrawn.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵelement(9, "pdf-dummy-components");
    i0.ɵɵelementStart(10, "pdf-toolbar", 13);
    i0.ɵɵlistener("onToolbarLoaded", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_toolbar_onToolbarLoaded_10_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.onToolbarLoaded($event); })("pageViewModeChange", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_toolbar_pageViewModeChange_10_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.pageViewMode = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 14)(12, "div", 15)(13, "div", 16)(14, "label", 17);
    i0.ɵɵtext(15, "Font Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 16)(18, "label", 19);
    i0.ɵɵtext(19, "Font Size");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 20);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "div", 21)(22, "div", 15)(23, "div", 16)(24, "label", 22);
    i0.ɵɵtext(25, "Color");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 16)(28, "label", 24);
    i0.ɵɵtext(29, "Thickness");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div", 16)(32, "label", 26);
    i0.ɵɵtext(33, "Opacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "input", 27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "pdf-secondary-toolbar", 28, 29);
    i0.ɵɵlistener("spreadChange", function NgxExtendedPdfViewerComponent_ng_template_5_Template_pdf_secondary_toolbar_spreadChange_35_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.onSpreadChange($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "pdf-findbar", 30)(38, "pdf-context-menu");
    i0.ɵɵelementStart(39, "div", 31);
    i0.ɵɵtemplate(40, NgxExtendedPdfViewerComponent_ng_template_5_div_40_Template, 4, 6, "div", 32);
    i0.ɵɵelementStart(41, "div", 33);
    i0.ɵɵlistener("dblclick", function NgxExtendedPdfViewerComponent_ng_template_5_Template_div_dblclick_41_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.zoomToPageWidth($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(42, "pdf-error-message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "div", 34);
    i0.ɵɵelement(44, "pdf-password-dialog")(45, "pdf-document-properties-dialog")(46, "pdf-prepare-printing-dialog");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(47, "input", 35)(48, "div", 36);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    let tmp_17_0;
    i0.ɵɵstyleProp("height", ctx_r4.minHeight ? ctx_r4.minHeight : ctx_r4.height);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("body pdf-js-version-", ctx_r4.majorMinorPdfJsVersion, "");
    i0.ɵɵstyleProp("background-color", ctx_r4.backgroundColor);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.showFreeFloatingBar);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("sidebarVisible", ctx_r4.sidebarVisible || false)("showSidebarButton", ctx_r4.showSidebarButton)("customSidebar", ctx_r4.customSidebar)("customThumbnail", ctx_r4.customThumbnail)("mobileFriendlyZoomScale", ctx_r4.mobileFriendlyZoomScale)("sidebarPositionTop", ctx_r4.sidebarPositionTop);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("toolbar-hidden", !ctx_r4.primaryMenuVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("server-side-rendering", ctx_r4.serverSideRendering);
    i0.ɵɵproperty("sidebarVisible", ctx_r4.sidebarVisible)("customToolbar", ctx_r4.customToolbar)("mobileFriendlyZoomScale", ctx_r4.mobileFriendlyZoomScale)("pageViewMode", ctx_r4.pageViewMode)("primaryMenuVisible", ctx_r4.primaryMenuVisible)("scrollMode", (tmp_17_0 = ctx_r4.scrollMode) !== null && tmp_17_0 !== undefined ? tmp_17_0 : 0)("showPropertiesButton", ctx_r4.showPropertiesButton)("showBookModeButton", ctx_r4.showBookModeButton)("showDownloadButton", ctx_r4.showDownloadButton)("showDrawEditor", ctx_r4.showDrawEditor)("showFindButton", ctx_r4.showFindButton)("showHandToolButton", ctx_r4.showHandToolButton)("showHorizontalScrollButton", ctx_r4.showHorizontalScrollButton)("showInfiniteScrollButton", ctx_r4.showInfiniteScrollButton)("showOpenFileButton", ctx_r4.showOpenFileButton)("showPagingButtons", ctx_r4.showPagingButtons)("showPresentationModeButton", ctx_r4.showPresentationModeButton && ctx_r4.pageViewMode !== "book")("showPrintButton", ctx_r4.showPrintButton && ctx_r4.enablePrint)("showRotateButton", ctx_r4.showRotateButton)("showSecondaryToolbarButton", ctx_r4.showSecondaryToolbarButton && !ctx_r4.service.secondaryMenuIsEmpty)("showSidebarButton", ctx_r4.showSidebarButton)("showSinglePageModeButton", ctx_r4.showSinglePageModeButton)("showSpreadButton", ctx_r4.showSpreadButton)("showStampEditor", ctx_r4.showStampEditor)("showTextEditor", ctx_r4.showTextEditor)("showVerticalScrollButton", ctx_r4.showVerticalScrollButton)("showWrappedScrollButton", ctx_r4.showWrappedScrollButton)("showZoomButtons", ctx_r4.showZoomButtons && ctx_r4.pageViewMode !== "book")("spread", ctx_r4.spread)("textLayer", ctx_r4.textLayer)("toolbarMarginTop", ctx_r4.toolbarMarginTop)("toolbarWidth", ctx_r4.toolbarWidth)("zoomLevels", ctx_r4.zoomLevels)("findbarVisible", ctx_r4.findbarVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("server-side-rendering", ctx_r4.serverSideRendering);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("server-side-rendering", ctx_r4.serverSideRendering);
    i0.ɵɵadvance(14);
    i0.ɵɵclassProp("server-side-rendering", ctx_r4.serverSideRendering);
    i0.ɵɵproperty("customSecondaryToolbar", ctx_r4.customSecondaryToolbar)("secondaryToolbarTop", ctx_r4.secondaryToolbarTop)("mobileFriendlyZoomScale", ctx_r4.mobileFriendlyZoomScale)("localizationInitialized", ctx_r4.localizationInitialized);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("server-side-rendering", ctx_r4.serverSideRendering);
    i0.ɵɵproperty("findbarLeft", ctx_r4.findbarLeft)("findbarTop", ctx_r4.findbarTop)("mobileFriendlyZoomScale", ctx_r4.mobileFriendlyZoomScale)("showFindButton", ctx_r4.showFindButton || false)("customFindbarInputArea", ctx_r4.customFindbarInputArea)("customFindbarButtons", ctx_r4.customFindbarButtons)("showFindCurrentPageOnly", ctx_r4.showFindCurrentPageOnly)("showFindEntirePhrase", ctx_r4.showFindEntirePhrase)("showFindEntireWord", ctx_r4.showFindEntireWord)("showFindFuzzySearch", ctx_r4.showFindFuzzySearch)("showFindHighlightAll", ctx_r4.showFindHighlightAll)("showFindMatchDiacritics", ctx_r4.showFindMatchDiacritics)("showFindMatchCase", ctx_r4.showFindMatchCase)("showFindMessages", ctx_r4.showFindMessages)("showFindPageRange", ctx_r4.showFindPageRange)("showFindResultsCount", ctx_r4.showFindResultsCount);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("top", ctx_r4.viewerPositionTop)("background-color", ctx_r4.backgroundColor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.hasSignature && ctx_r4.showUnverifiedSignatures);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("server-side-rendering", ctx_r4.serverSideRendering);
} }
function NgxExtendedPdfViewerComponent_ng_template_7_Template(rf, ctx) { }
const _c3 = ["*", "*"];
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
    constructor(ngZone, platformId, notificationService, location, elementRef, platformLocation, cdr, service, renderer) {
        this.ngZone = ngZone;
        this.platformId = platformId;
        this.notificationService = notificationService;
        this.location = location;
        this.elementRef = elementRef;
        this.platformLocation = platformLocation;
        this.cdr = cdr;
        this.service = service;
        this.renderer = renderer;
        this.ngxExtendedPdfViewerIncompletelyInitialized = true;
        this.formSupport = new NgxFormSupport();
        this.showFreeFloatingBar = true;
        this.enableDragAndDrop = true;
        this.localizationInitialized = false;
        this.disableForms = false;
        this._pageViewMode = 'multiple';
        /** This flag prevents trying to load a file twice if the user uploads it using the file upload dialog or via drag'n'drop */
        this.srcChangeTriggeredByUser = false;
        this.pageViewModeChange = new EventEmitter();
        this.progress = new EventEmitter();
        this.srcChange = new EventEmitter();
        this._scrollMode = ScrollModeType.vertical;
        this.scrollModeChange = new EventEmitter();
        this.authorization = undefined;
        this.httpHeaders = undefined;
        this.contextMenuAllowed = true;
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.currentZoomFactor = new EventEmitter();
        this.enablePrint = true;
        /**
         * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
         * Most users can let this parameter safely at it's default value of zero.
         * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
         * after the PDF files, so they are not available when the PDF viewer is initialized).
         */
        this.delayFirstView = 0;
        this.showTextEditor = true;
        this.showStampEditor = true;
        this.showDrawEditor = true;
        /** How many log messages should be printed?
         * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0) */
        this.logLevel = VerbosityLevel.WARNINGS;
        this.relativeCoordsOptions = {};
        /** Use the minified (minifiedJSLibraries="true", which is the default) or the user-readable pdf.js library (minifiedJSLibraries="false") */
        this.minifiedJSLibraries = true;
        this.primaryMenuVisible = true;
        /** option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
         * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash. */
        this.printResolution = null;
        this.rotationChange = new EventEmitter();
        this.annotationLayerRendered = new EventEmitter();
        this.annotationEditorLayerRendered = new EventEmitter();
        this.xfaLayerRendered = new EventEmitter();
        this.outlineLoaded = new EventEmitter();
        this.attachmentsloaded = new EventEmitter();
        this.layersloaded = new EventEmitter();
        /**
         * The combination of height, minHeight, and autoHeight ensures the PDF height of the PDF viewer is calculated correctly when the height is a percentage.
         * By default, many CSS frameworks make a div with 100% have a height or zero pixels. checkHeigth() fixes this.
         */
        this.autoHeight = false;
        this.minHeight = undefined;
        this._height = '100%';
        this._useBrowserLocale = undefined;
        this.forceUsingLegacyES5 = false;
        this.backgroundColor = '#e8e8eb';
        /** Allows the user to define the name of the file after clicking "download" */
        this.filenameForDownload = undefined;
        /** Allows the user to disable the keyboard bindings completely */
        this.ignoreKeyboard = false;
        /** Allows the user to disable a list of key bindings. */
        this.ignoreKeys = [];
        /** Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored. */
        this.acceptKeys = [];
        /** Allows the user to put the viewer's svg images into an arbitrary folder */
        this.imageResourcesPath = assetsUrl(pdfDefaultOptions.assetsFolder) + '/images/';
        /** Allows the user to put their locale folder into an arbitrary folder */
        this.localeFolderPath = assetsUrl(pdfDefaultOptions.assetsFolder) + '/locale';
        /** Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
         */
        this.language = undefined;
        /** By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router */
        this.listenToURL = false;
        /** Navigate to a certain "named destination" */
        this.nameddest = undefined;
        /** allows you to pass a password to read password-protected files */
        this.password = undefined;
        this.replaceBrowserPrint = true;
        this._showSidebarButton = true;
        this.viewerPositionTop = '32px';
        /** pdf.js can show signatures, but fails to verify them. So they are switched off by default.
         * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
         */
        this.showUnverifiedSignatures = false;
        this._sidebarVisible = undefined;
        this.sidebarVisibleChange = new EventEmitter();
        this.activeSidebarView = PdfSidebarView.OUTLINE;
        this.activeSidebarViewChange = new EventEmitter();
        this.findbarVisible = false;
        this.findbarVisibleChange = new EventEmitter();
        this.propertiesDialogVisible = false;
        this.propertiesDialogVisibleChange = new EventEmitter();
        this.showFindButton = undefined;
        this.showFindHighlightAll = true;
        this.showFindMatchCase = true;
        this.showFindCurrentPageOnly = true;
        this.showFindPageRange = true;
        this.showFindEntireWord = true;
        this.showFindEntirePhrase = true;
        this.showFindMatchDiacritics = true;
        this.showFindFuzzySearch = true;
        this.showFindResultsCount = true;
        this.showFindMessages = true;
        this.showPagingButtons = true;
        this.showZoomButtons = true;
        this.showPresentationModeButton = false;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.theme = 'light';
        this.showToolbar = true;
        this.showSecondaryToolbarButton = true;
        this.showSinglePageModeButton = true;
        this.showVerticalScrollButton = true;
        this.showHorizontalScrollButton = true;
        this.showWrappedScrollButton = true;
        this.showInfiniteScrollButton = true;
        this.showBookModeButton = true;
        this.showRotateButton = true;
        this._handTool = !isIOS();
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this._showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.showBorders = true;
        this.spreadChange = new EventEmitter();
        this.thumbnailDrawn = new EventEmitter();
        this._page = undefined;
        this.pageChange = new EventEmitter();
        this.pageLabel = undefined;
        this.pageLabelChange = new EventEmitter();
        this.pagesLoaded = new EventEmitter();
        this.pageRender = new EventEmitter();
        this.pageRendered = new EventEmitter();
        this.pdfDownloaded = new EventEmitter();
        this.pdfLoaded = new EventEmitter();
        this.pdfLoadingStarts = new EventEmitter();
        this.pdfLoadingFailed = new EventEmitter();
        this.textLayer = undefined;
        this.textLayerRendered = new EventEmitter();
        this.annotationEditorModeChanged = new EventEmitter();
        this.updateFindMatchesCount = new EventEmitter();
        this.updateFindState = new EventEmitter();
        /** Legal values: undefined, 'auto', 'page-actual', 'page-fit', 'page-width', or '50' (or any other percentage) */
        this.zoom = undefined;
        this.zoomChange = new EventEmitter();
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 1, 1.25, 1.5, 2, 3, 4];
        this.maxZoom = 10;
        this.minZoom = 0.1;
        /** This attribute allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        this._mobileFriendlyZoom = '100%';
        this.mobileFriendlyZoomScale = 1;
        this.toolbarMarginTop = '0px';
        this.toolbarWidth = '100%';
        this.toolbar = undefined;
        this.toolbarWidthInPixels = 3.14159265359; // magic number indicating the toolbar size hasn't been determined yet
        this.secondaryToolbarTop = undefined;
        this.sidebarPositionTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarLeft = undefined;
        this.shuttingDown = false;
        this.serverSideRendering = true;
        this.baseHref = this.platformLocation.getBaseHrefFromDOM();
        this.service.recalculateSize$.subscribe(() => this.onResize());
        if (isPlatformBrowser(this.platformId)) {
            this.serverSideRendering = false;
            this.toolbarWidth = String(document.body.clientWidth);
        }
    }
    set formData(formData) {
        this.formSupport.formData = formData;
    }
    get formDataChange() {
        return this.formSupport.formDataChange;
    }
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
    get useBrowserLocale() {
        return !!this._useBrowserLocale;
    }
    /**
     * If this flag is true, this components adds a link to the locale assets. The pdf viewer
     * sees this link and uses it to load the locale files automatically.
     * @param useBrowserLocale boolean
     */
    set useBrowserLocale(value) {
        this._useBrowserLocale = value;
    }
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
    get showScrollingButton() {
        if (this.pageViewMode === 'multiple') {
            return this._showScrollingButton;
        }
        return false;
    }
    set showScrollingButton(val) {
        this._showScrollingButton = val;
    }
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
    onToolbarLoaded(toolbarElement) {
        this.toolbar = toolbarElement;
    }
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
            if (pdfDefaultOptions.assetsFolder === 'bleeding-edge') {
                pdfDefaultOptions.assetsFolder = "assets";
            }
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
        script.type = 'text/javascript';
        const ttWindow = window;
        if (ttWindow.trustedTypes) {
            const sanitizer = ttWindow.trustedTypes.createPolicy('foo', {
                createScriptURL: (input) => input,
            });
            script.src = sanitizer.createScriptURL(this.location.normalize(sourcePath));
        }
        else {
            script.src = this.location.normalize(sourcePath);
        }
        return script;
    }
    getPdfJsPath(artifact, needsES5) {
        const suffix = this.minifiedJSLibraries ? '.min.js' : '.js';
        const assets = pdfDefaultOptions.assetsFolder;
        const versionSuffix = getVersionSuffix(assets);
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
                        if (!pdfDefaultOptions.workerSrc().endsWith('.min.js')) {
                            const src = pdfDefaultOptions.workerSrc();
                            pdfDefaultOptions.workerSrc = () => src.replace('.js', '.min.js');
                        }
                    }
                    const pdfJsPath = this.getPdfJsPath('pdf', needsES5);
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
        const callback = () => {
            document.removeEventListener('localized', callback);
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
        document.addEventListener('localized', callback);
        if (this.service.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        const onLoaded = () => {
            this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
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
        const langLinks = document.querySelectorAll('link[type="application/l10n"]');
        const langCount = langLinks.length;
        const dict = document.querySelector('script[type="application/l10n"]');
        const userProvidesTranslations = langCount > 0 || !!dict;
        if (this._useBrowserLocale === undefined) {
            this.useBrowserLocale = !userProvidesTranslations;
        }
        if (!userProvidesTranslations) {
            if (!this.useBrowserLocale) {
                console.error("If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
                console.error('The easiest way to do this is to add them to the index.html.');
                console.error('The PDF viewer ignores your setting and loads the default translations.');
            }
            const link = this.renderer.createElement('link');
            link.rel = 'resource';
            link.type = 'application/l10n';
            link.href = this.localeFolderPath + '/locale.properties';
            link.setAttribute('origin', 'ngx-extended-pdf-viewer');
            this.renderer.appendChild(this.elementRef.nativeElement, link);
        }
        else if (this.useBrowserLocale && langCount > 0) {
            const o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error("Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
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
        if (this._src) {
            this.ngxExtendedPdfViewerIncompletelyInitialized = false;
            if (!this.listenToURL) {
                PDFViewerApplication.pdfLinkService.setHash = function () { };
            }
            this.initTimeout = null;
            this.selectCursorTool();
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
                this.ngZone.run(() => {
                    this.annotationLayerRendered.emit(event);
                    this.enableOrDisableForms(event.source.div, true);
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
            this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
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
            setTimeout(() => {
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
            });
        }
    }
    isPrimaryMenuVisible() {
        if (this.showToolbar) {
            const visible = this.showDownloadButton ||
                this.showDrawEditor ||
                this.showTextEditor ||
                this.showFindButton ||
                this.showOpenFileButton ||
                this.showPagingButtons ||
                this.showPresentationModeButton ||
                this.showPrintButton ||
                this.showPropertiesButton ||
                this.showRotateButton ||
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
            annotations.forEach((a) => {
                if (a.fieldType === 'Sig') {
                    this.ngZone.run(() => {
                        this.hasSignature = true;
                        setTimeout(() => {
                            const viewerContainer = document.querySelector('#viewerContainer');
                            viewerContainer.scrollBy(0, -32);
                        });
                    });
                }
            });
        }
        this.pdfLoaded.emit({ pagesCount: pdf?.numPages });
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
}
NgxExtendedPdfViewerComponent.originalPrint = typeof window !== 'undefined' ? window.print : undefined;
/** @nocollapse */ NgxExtendedPdfViewerComponent.ɵfac = function NgxExtendedPdfViewerComponent_Factory(t) { return new (t || NgxExtendedPdfViewerComponent)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PDFNotificationService), i0.ɵɵdirectiveInject(i2.Location), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.PlatformLocation), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i3.NgxExtendedPdfViewerService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
/** @nocollapse */ NgxExtendedPdfViewerComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgxExtendedPdfViewerComponent, selectors: [["ngx-extended-pdf-viewer"]], viewQuery: function NgxExtendedPdfViewerComponent_Query(rf, ctx) { if (rf & 1) {
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
    } }, inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", disableForms: "disableForms", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor", showDrawEditor: "showDrawEditor", logLevel: "logLevel", relativeCoordsOptions: "relativeCoordsOptions", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", useBrowserLocale: "useBrowserLocale", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", findbarVisible: "findbarVisible", propertiesDialogVisible: "propertiesDialogVisible", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSinglePageModeButton: "showSinglePageModeButton", showVerticalScrollButton: "showVerticalScrollButton", showHorizontalScrollButton: "showHorizontalScrollButton", showWrappedScrollButton: "showWrappedScrollButton", showInfiniteScrollButton: "showInfiniteScrollButton", showBookModeButton: "showBookModeButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", pageViewModeChange: "pageViewModeChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", findbarVisibleChange: "findbarVisibleChange", propertiesDialogVisibleChange: "propertiesDialogVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", annotationEditorModeChanged: "annotationEditorModeChanged", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c3, decls: 9, vars: 5, consts: [[4, "ngIf"], [3, "zoom", "width"], [4, "ngTemplateOutlet"], ["defaultPdfViewer", ""], ["defaultFreeFloatingBar", ""], [1, "zoom"], ["root", ""], [1, "html"], ["id", "outerContainer", 3, "resize"], ["class", "free-floating-bar", 4, "ngIf"], [3, "sidebarVisible", "showSidebarButton", "customSidebar", "customThumbnail", "mobileFriendlyZoomScale", "sidebarPositionTop", "thumbnailDrawn"], ["pdfsidebar", ""], ["id", "mainContainer"], [3, "sidebarVisible", "customToolbar", "mobileFriendlyZoomScale", "pageViewMode", "primaryMenuVisible", "scrollMode", "showPropertiesButton", "showBookModeButton", "showDownloadButton", "showDrawEditor", "showFindButton", "showHandToolButton", "showHorizontalScrollButton", "showInfiniteScrollButton", "showOpenFileButton", "showPagingButtons", "showPresentationModeButton", "showPrintButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "showSinglePageModeButton", "showSpreadButton", "showStampEditor", "showTextEditor", "showVerticalScrollButton", "showWrappedScrollButton", "showZoomButtons", "spread", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels", "findbarVisible", "onToolbarLoaded", "pageViewModeChange"], ["id", "editorFreeTextParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], [1, "editorParamsToolbarContainer"], [1, "editorParamsSetter"], ["for", "editorFreeTextColor", "data-l10n-id", "editor_free_text_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorFreeTextColor", "tabindex", "100", 1, "editorParamsColor"], ["for", "editorFreeTextFontSize", "data-l10n-id", "editor_free_text_size", 1, "editorParamsLabel"], ["type", "range", "id", "editorFreeTextFontSize", "value", "10", "min", "5", "max", "100", "step", "1", "tabindex", "101", 1, "editorParamsSlider"], ["id", "editorInkParamsToolbar", 1, "editorParamsToolbar", "hidden", "doorHangerRight"], ["for", "editorInkColor", "data-l10n-id", "editor_ink_color", 1, "editorParamsLabel"], ["type", "color", "id", "editorInkColor", "tabindex", "102", 1, "editorParamsColor"], ["for", "editorInkThickness", "data-l10n-id", "editor_ink_thickness", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkThickness", "value", "1", "min", "1", "max", "20", "step", "1", "tabindex", "103", 1, "editorParamsSlider"], ["for", "editorInkOpacity", "data-l10n-id", "editor_ink_opacity", 1, "editorParamsLabel"], ["type", "range", "id", "editorInkOpacity", "value", "100", "min", "1", "max", "100", "step", "1", "tabindex", "104", 1, "editorParamsSlider"], [3, "customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "localizationInitialized", "spreadChange"], ["pdfSecondaryToolbarComponent", ""], [3, "findbarLeft", "findbarTop", "mobileFriendlyZoomScale", "showFindButton", "customFindbarInputArea", "customFindbarButtons", "showFindCurrentPageOnly", "showFindEntirePhrase", "showFindEntireWord", "showFindFuzzySearch", "showFindHighlightAll", "showFindMatchDiacritics", "showFindMatchCase", "showFindMessages", "showFindPageRange", "showFindResultsCount"], ["id", "viewerContainer", "tabindex", "0", "role", "document"], ["class", "unverified-signature-warning", 4, "ngIf"], ["id", "viewer", 1, "pdfViewer", 3, "dblclick"], ["id", "dialogContainer"], ["type", "file", "id", "fileInput", 1, "hidden"], ["id", "printContainer"], [1, "free-floating-bar"], [1, "unverified-signature-warning"]], template: function NgxExtendedPdfViewerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c3);
        i0.ɵɵtemplate(0, NgxExtendedPdfViewerComponent_pdf_dark_theme_0_Template, 1, 0, "pdf-dark-theme", 0);
        i0.ɵɵtemplate(1, NgxExtendedPdfViewerComponent_pdf_light_theme_1_Template, 1, 0, "pdf-light-theme", 0);
        i0.ɵɵelement(2, "pdf-acroform-default-theme")(3, "pdf-dynamic-css", 1);
        i0.ɵɵtemplate(4, NgxExtendedPdfViewerComponent_ng_content_4_Template, 1, 0, "ng-content", 2);
        i0.ɵɵtemplate(5, NgxExtendedPdfViewerComponent_ng_template_5_Template, 49, 87, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(7, NgxExtendedPdfViewerComponent_ng_template_7_Template, 0, 0, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(6);
        i0.ɵɵproperty("ngIf", ctx.theme === "dark");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.theme === "light");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("zoom", ctx.mobileFriendlyZoomScale)("width", ctx.toolbarWidthInPixels);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customPdfViewer ? ctx.customPdfViewer : _r3);
    } }, directives: [i2.NgIf, i4.PdfDarkThemeComponent, i5.PdfLightThemeComponent, i6.PdfAcroformDefaultThemeComponent, i7.DynamicCssComponent, i2.NgTemplateOutlet, i8.PdfSidebarComponent, i9.PdfDummyComponentsComponent, i10.PdfToolbarComponent, i11.PdfSecondaryToolbarComponent, i12.PdfFindbarComponent, i13.PdfContextMenuComponent, i14.PdfErrorMessageComponent, i15.PdfPasswordDialogComponent, i16.PdfDocumentPropertiesDialogComponent, i17.PdfPreparePrintingDialogComponent], pipes: [i2.AsyncPipe, i18.TranslatePipe], styles: ["#mainContainer.toolbar-hidden[_ngcontent-%COMP%]{margin-top:-30px}.server-side-rendering[_ngcontent-%COMP%], .hidden[_ngcontent-%COMP%]{display:none}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerComponent, [{
        type: Component,
        args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\n<pdf-acroform-default-theme></pdf-acroform-default-theme>\n\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\n\n<ng-template #defaultPdfViewer>\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\n    <div class=\"html\">\n      <div class=\"body pdf-js-version-{{ majorMinorPdfJsVersion }}\" [style.backgroundColor]=\"backgroundColor\">\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"> </ng-content>\n          </div>\n          <pdf-sidebar\n            #pdfsidebar\n            [sidebarVisible]=\"sidebarVisible || false\"\n            [showSidebarButton]=\"showSidebarButton\"\n            [customSidebar]=\"customSidebar\"\n            [customThumbnail]=\"customThumbnail\"\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [sidebarPositionTop]=\"sidebarPositionTop\"\n          >\n          </pdf-sidebar>\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\n            <pdf-dummy-components></pdf-dummy-components>\n\n            <pdf-toolbar\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\"\n              [sidebarVisible]=\"sidebarVisible\"\n              [class.server-side-rendering]=\"serverSideRendering\"\n              [customToolbar]=\"customToolbar\"\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n              [(pageViewMode)]=\"pageViewMode\"\n              [primaryMenuVisible]=\"primaryMenuVisible\"\n              [scrollMode]=\"scrollMode ?? 0\"\n              [showPropertiesButton]=\"showPropertiesButton\"\n              [showBookModeButton]=\"showBookModeButton\"\n              [showDownloadButton]=\"showDownloadButton\"\n              [showDrawEditor]=\"showDrawEditor\"\n              [showFindButton]=\"showFindButton\"\n              [showHandToolButton]=\"showHandToolButton\"\n              [showHorizontalScrollButton]=\"showHorizontalScrollButton\"\n              [showInfiniteScrollButton]=\"showInfiniteScrollButton\"\n              [showOpenFileButton]=\"showOpenFileButton\"\n              [showPagingButtons]=\"showPagingButtons\"\n              [showPresentationModeButton]=\"showPresentationModeButton && pageViewMode !== 'book'\"\n              [showPrintButton]=\"showPrintButton && enablePrint\"\n              [showRotateButton]=\"showRotateButton\"\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !service.secondaryMenuIsEmpty\"\n              [showSidebarButton]=\"showSidebarButton\"\n              [showSinglePageModeButton]=\"showSinglePageModeButton\"\n              [showSpreadButton]=\"showSpreadButton\"\n              [showStampEditor]=\"showStampEditor\"\n              [showTextEditor]=\"showTextEditor\"\n              [showVerticalScrollButton]=\"showVerticalScrollButton\"\n              [showWrappedScrollButton]=\"showWrappedScrollButton\"\n              [showZoomButtons]=\"showZoomButtons && pageViewMode !== 'book'\"\n              [spread]=\"spread\"\n              [textLayer]=\"textLayer\"\n              [toolbarMarginTop]=\"toolbarMarginTop\"\n              [toolbarWidth]=\"toolbarWidth\"\n              [zoomLevels]=\"zoomLevels\"\n              [findbarVisible]=\"findbarVisible\"\n            ></pdf-toolbar>\n\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\n              <div class=\"editorParamsToolbarContainer\">\n                <div class=\"editorParamsSetter\">\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_color\">Font Color</label>\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\" />\n                </div>\n                <div class=\"editorParamsSetter\">\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_size\">Font Size</label>\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\" max=\"100\" step=\"1\" tabindex=\"101\" />\n                </div>\n              </div>\n            </div>\n\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\n              <div class=\"editorParamsToolbarContainer\">\n                <div class=\"editorParamsSetter\">\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\" />\n                </div>\n                <div class=\"editorParamsSetter\">\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_thickness\">Thickness</label>\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\" step=\"1\" tabindex=\"103\" />\n                </div>\n                <div class=\"editorParamsSetter\">\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_opacity\">Opacity</label>\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\" step=\"1\" tabindex=\"104\" />\n                </div>\n              </div>\n            </div>\n\n            <pdf-secondary-toolbar\n              #pdfSecondaryToolbarComponent\n              [class.server-side-rendering]=\"serverSideRendering\"\n              [customSecondaryToolbar]=\"customSecondaryToolbar\"\n              [secondaryToolbarTop]=\"secondaryToolbarTop\"\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n              (spreadChange)=\"onSpreadChange($event)\"\n              [localizationInitialized]=\"localizationInitialized\"\n            >\n            </pdf-secondary-toolbar>\n\n            <pdf-findbar\n              [class.server-side-rendering]=\"serverSideRendering\"\n              [findbarLeft]=\"findbarLeft\"\n              [findbarTop]=\"findbarTop\"\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n              [showFindButton]=\"showFindButton || false\"\n              [customFindbarInputArea]=\"customFindbarInputArea\"\n              [customFindbarButtons]=\"customFindbarButtons\"\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\"\n              [showFindEntirePhrase]=\"showFindEntirePhrase\"\n              [showFindEntireWord]=\"showFindEntireWord\"\n              [showFindFuzzySearch]=\"showFindFuzzySearch\"\n              [showFindHighlightAll]=\"showFindHighlightAll\"\n              [showFindMatchDiacritics]=\"showFindMatchDiacritics\"\n              [showFindMatchCase]=\"showFindMatchCase\"\n              [showFindMessages]=\"showFindMessages\"\n              [showFindPageRange]=\"showFindPageRange\"\n              [showFindResultsCount]=\"showFindResultsCount\"\n            >\n            </pdf-findbar>\n\n            <pdf-context-menu></pdf-context-menu>\n\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\" tabindex=\"0\" role=\"document\">\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\n                {{\n                  'unverified_signature_warning'\n                    | translate\n                      : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\n                    | async\n                }}\n              </div>\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\n            </div>\n            <pdf-error-message></pdf-error-message>\n          </div>\n          <!-- mainContainer -->\n\n          <div id=\"dialogContainer\">\n            <pdf-password-dialog></pdf-password-dialog>\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\n          </div>\n          <!-- dialogContainer -->\n        </div>\n        <!-- outerContainer -->\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" [class.server-side-rendering]=\"serverSideRendering\" />\n        <div id=\"printContainer\"></div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #defaultFreeFloatingBar> </ng-template>\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}.server-side-rendering,.hidden{display:none}\n"] }]
    }], function () { return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PDFNotificationService }, { type: i2.Location }, { type: i0.ElementRef }, { type: i2.PlatformLocation }, { type: i0.ChangeDetectorRef }, { type: i3.NgxExtendedPdfViewerService }, { type: i0.Renderer2 }]; }, { dummyComponents: [{
            type: ViewChild,
            args: [PdfDummyComponentsComponent]
        }], root: [{
            type: ViewChild,
            args: ['root']
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
        }], useBrowserLocale: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBR1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBa0J2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9GLE9BQU8sRUFBNEMsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEy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QUFvQjtrQkFEMUIsS0FBSztZQUlDLFdBQVc7a0JBRGpCLEtBQUs7WUFJQyxNQUFNO2tCQURaLEtBQUs7WUFJQyxZQUFZO2tCQURsQixNQUFNO1lBSUEsY0FBYztrQkFEcEIsTUFBTTtZQVVJLElBQUk7a0JBRGQsS0FBSztZQVdDLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxTQUFTO2tCQURmLEtBQUs7WUFJQyxlQUFlO2tCQURyQixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxZQUFZO2tCQURsQixNQUFNO1lBSUEsYUFBYTtrQkFEbkIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsTUFBTTtZQUlBLDJCQUEyQjtrQkFEakMsTUFBTTtZQUlBLHNCQUFzQjtrQkFENUIsTUFBTTtZQUlBLGVBQWU7a0JBRHJCLE1BQU07WUFLQSxJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQW1ESyxrQkFBa0I7a0JBRDVCLEtBQUs7WUF3Z0RDLGFBQWE7a0JBRG5CLFlBQVk7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBMb2NhdGlvbiwgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kb2N1bWVudC1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgRmlsZUlucHV0Q2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2ZpbGUtaW5wdXQtY2hhbmdlZCc7XG5pbXBvcnQgeyBGaW5kUmVzdWx0LCBGaW5kUmVzdWx0TWF0Y2hlc0NvdW50LCBGaW5kU3RhdGUgfSBmcm9tICcuL2V2ZW50cy9maW5kLXJlc3VsdCc7XG5pbXBvcnQgeyBIYW5kdG9vbENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9oYW5kdG9vbC1jaGFuZ2VkJztcbmltcG9ydCB7IFBhZ2VOdW1iZXJDaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9wYWdlLW51bWJlci1jaGFuZ2UnO1xuaW1wb3J0IHsgUGFnZVJlbmRlckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZS1yZW5kZXItZXZlbnQnO1xuaW1wb3J0IHsgUGFnZVJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlcmVkLWV2ZW50JztcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNSb3RhdGlvbkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtcm90YXRpb24tZXZlbnQnO1xuaW1wb3J0IHsgUGRmRG93bmxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWRvd25sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgUGRmTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IFBkZkxvYWRpbmdTdGFydHNFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkaW5nLXN0YXJ0cy1ldmVudCc7XG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XG5pbXBvcnQgeyBQcm9ncmVzc0JhckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcHJvZ3Jlc3MtYmFyLWV2ZW50JztcbmltcG9ydCB7IFNjYWxlQ2hhbmdpbmdFdmVudCB9IGZyb20gJy4vZXZlbnRzL3NjYWxlLWNoYW5naW5nLWV2ZW50JztcbmltcG9ydCB7IFNpZGViYXJ2aWV3Q2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvc2lkZWJhcnZpZXctY2hhbmdlZCc7XG5pbXBvcnQgeyBUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvdGV4dGxheWVyLXJlbmRlcmVkJztcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQZGZDdXJzb3JUb29scyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtY3Vyc29yLXRvb2xzJztcbmltcG9ydCB7IGFzc2V0c1VybCwgZ2V0VmVyc2lvblN1ZmZpeCwgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucyc7XG5pbXBvcnQgeyBQYWdlVmlld01vZGVUeXBlLCBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50LCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiwgUERGRG9jdW1lbnRQcm94eSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcbmltcG9ydCB7IFNlcnZpY2VXb3JrZXJPcHRpb25zVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9zZXJ2aWNlLXdvcmtlci1vcHRpb25zJztcbmltcG9ydCB7IFZlcmJvc2l0eUxldmVsIH0gZnJvbSAnLi9vcHRpb25zL3ZlcmJvc2l0eS1sZXZlbCc7XG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVW5pdFRvUHggfSBmcm9tICcuL3VuaXQtdG8tcHgnO1xuXG5pbXBvcnQgeyBUcnVzdGVkVHlwZXNXaW5kb3cgfSBmcm9tICd0cnVzdGVkLXR5cGVzL2xpYic7XG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYW5ub3RhdGlvbi1lZGl0b3ItbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1tb2RlLWNoYW5nZWQtZXZlbnQnO1xuaW1wb3J0IHsgQW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Fubm90YXRpb24tbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xuaW1wb3J0IHsgQXR0YWNobWVudExvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYXR0YWNobWVudC1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgTGF5ZXJzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9sYXllcnMtbG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IE91dGxpbmVMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL291dGxpbmUtbG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IFRvZ2dsZVNpZGViYXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3RvZ2dsZS1zaWRlYmFyLWV2ZW50JztcbmltcG9ydCB7IFhmYUxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3hmYS1sYXllci1yZW5kZXJlZC1ldmVudCc7XG5pbXBvcnQgeyBOZ3hGb3JtU3VwcG9ydCB9IGZyb20gJy4vbmd4LWZvcm0tc3VwcG9ydCc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyVmlldyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtc2lkZWJhci12aWV3cyc7XG5pbXBvcnQgeyBTcHJlYWRUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3NwcmVhZC10eXBlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuXG5kZWNsYXJlIGNvbnN0IFNlcnZpY2VXb3JrZXJPcHRpb25zOiBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGU7IC8vIGRlZmluZWQgaW4gdmlld2VyLmpzXG5kZWNsYXJlIGNsYXNzIFJlc2l6ZU9ic2VydmVyIHtcbiAgY29uc3RydWN0b3IocGFyYW06ICgpID0+IHZvaWQpO1xuICBwdWJsaWMgb2JzZXJ2ZShkaXY6IEhUTUxFbGVtZW50KTtcbn1cblxuaW50ZXJmYWNlIEVsZW1lbnRBbmRQb3NpdGlvbiB7XG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb3JtRGF0YVR5cGUge1xuICBbZmllbGROYW1lOiBzdHJpbmddOiBudWxsIHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZ1tdO1xufVxuXG5mdW5jdGlvbiBpc0lPUygpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgWydpUGFkIFNpbXVsYXRvcicsICdpUGhvbmUgU2ltdWxhdG9yJywgJ2lQb2QgU2ltdWxhdG9yJywgJ2lQYWQnLCAnaVBob25lJywgJ2lQb2QnXS5pbmNsdWRlcyhuYXZpZ2F0b3IucGxhdGZvcm0pIHx8XG4gICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXG4gICAgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01hYycpICYmICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudClcbiAgKTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN0YXRpYyBvcmlnaW5hbFByaW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cucHJpbnQgOiB1bmRlZmluZWQ7XG5cbiAgcHVibGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gIHByaXZhdGUgZm9ybVN1cHBvcnQgPSBuZXcgTmd4Rm9ybVN1cHBvcnQoKTtcblxuICAvKipcbiAgICogVGhlIGR1bW15IGNvbXBvbmVudHMgYXJlIGluc2VydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBjdXN0b21pemVzIHRoZSB0b29sYmFyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXG4gICAqIGluaXRpYWxpemF0aW9uIGNvZGUgb2YgcGRmLmpzIGNyYXNoZXMgYmVjYXVzZSBpdCBhc3N1bWUgdGhhdCBldmVyeSBzdGFuZGFyZCB3aWRnZXQgaXMgdGhlcmUuXG4gICAqL1xuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcbiAgcHVibGljIGR1bW15Q29tcG9uZW50czogUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxuICBwdWJsaWMgcm9vdDogRWxlbWVudFJlZjtcblxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21QZGZWaWV3ZXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tRnJlZUZsb2F0aW5nQmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RnJlZUZsb2F0aW5nQmFyID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xuXG4gIHB1YmxpYyBsb2NhbGl6YXRpb25Jbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgZm9ybURhdGEoZm9ybURhdGE6IEZvcm1EYXRhVHlwZSkge1xuICAgIHRoaXMuZm9ybVN1cHBvcnQuZm9ybURhdGEgPSBmb3JtRGF0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkaXNhYmxlRm9ybXMgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGdldCBmb3JtRGF0YUNoYW5nZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtU3VwcG9ydC5mb3JtRGF0YUNoYW5nZTtcbiAgfVxuXG4gIHB1YmxpYyBfcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlID0gJ211bHRpcGxlJztcblxuICBwdWJsaWMgYmFzZUhyZWY6IHN0cmluZztcblxuICAvKiogVGhpcyBmbGFnIHByZXZlbnRzIHRyeWluZyB0byBsb2FkIGEgZmlsZSB0d2ljZSBpZiB0aGUgdXNlciB1cGxvYWRzIGl0IHVzaW5nIHRoZSBmaWxlIHVwbG9hZCBkaWFsb2cgb3IgdmlhIGRyYWcnbidkcm9wICovXG4gIHByaXZhdGUgc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHVibGljIGdldCBwYWdlVmlld01vZGUoKTogUGFnZVZpZXdNb2RlVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VWaWV3TW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFnZVZpZXdNb2RlKHZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IGhhc0NoYW5nZWQgPSB0aGlzLl9wYWdlVmlld01vZGUgIT09IHZpZXdNb2RlO1xuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcbiAgICAgICAgY29uc3QgbXVzdFJlZHJhdyA9ICF0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgJiYgKHRoaXMuX3BhZ2VWaWV3TW9kZSA9PT0gJ2Jvb2snIHx8IHZpZXdNb2RlID09PSAnYm9vaycpO1xuICAgICAgICB0aGlzLl9wYWdlVmlld01vZGUgPSB2aWV3TW9kZTtcbiAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLl9wYWdlVmlld01vZGUpO1xuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM/LnNldCgncGFnZVZpZXdNb2RlJywgdGhpcy5wYWdlVmlld01vZGUpO1xuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZVZpZXdNb2RlID0gdGhpcy5fcGFnZVZpZXdNb2RlO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnBhZ2VWaWV3TW9kZSA9IHRoaXMuX3BhZ2VWaWV3TW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmlld01vZGUgPT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSB8fCB0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3TW9kZSAhPT0gJ211bHRpcGxlJykge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAvLyBzaW5jZSBwZGYuanMsIG91ciBjdXN0b20gc2luZ2xlLXBhZ2UtbW9kZSBoYXMgYmVlbiByZXBsYWNlZCBieSB0aGUgc3RhbmRhcmQgc2Nyb2xsTW9kZT1cInBhZ2VcIlxuICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnBhZ2U7XG4gICAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gdmlld01vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnYm9vaycpIHtcbiAgICAgICAgICB0aGlzLnNob3dCb3JkZXJzID0gZmFsc2U7XG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSAhPT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobXVzdFJlZHJhdykge1xuICAgICAgICAgIGlmICh2aWV3TW9kZSAhPT0gJ2Jvb2snKSB7XG4gICAgICAgICAgICBjb25zdCBuZ3ggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IG5neC5xdWVyeVNlbGVjdG9yKCcjdmlld2VyQ29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9ICcnO1xuICAgICAgICAgICAgY29uc3Qgdmlld2VyID0gbmd4LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3ZXInKSBhcyBIVE1MRGl2RWxlbWVudDtcbiAgICAgICAgICAgIHZpZXdlci5zdHlsZS5tYXhXaWR0aCA9ICcnO1xuICAgICAgICAgICAgdmlld2VyLnN0eWxlLm1pbldpZHRoID0gJyc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5vcGVuUERGMigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlVmlld01vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VWaWV3TW9kZVR5cGU+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8UHJvZ3Jlc3NCYXJFdmVudD4oKTtcblxuICBAVmlld0NoaWxkKCdwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50JylcbiAgcHJpdmF0ZSBzZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50OiBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ3BkZnNpZGViYXInKVxuICBwcml2YXRlIHNpZGViYXJDb21wb25lbnQ6IFBkZlNpZGViYXJDb21wb25lbnQ7XG5cbiAgLyogcmVndWxhciBhdHRyaWJ1dGVzICovXG5cbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IFVpbnQ4QXJyYXkgfCB7IHJhbmdlOiBhbnkgfSB8IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNyY0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIHByaXZhdGUgX3Njcm9sbE1vZGU6IFNjcm9sbE1vZGVUeXBlID0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWw7XG5cbiAgcHVibGljIGdldCBzY3JvbGxNb2RlKCk6IFNjcm9sbE1vZGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsTW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2Nyb2xsTW9kZSh2YWx1ZTogU2Nyb2xsTW9kZVR5cGUpIHtcbiAgICBpZiAodGhpcy5fc2Nyb2xsTW9kZSAhPT0gdmFsdWUpIHtcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcikge1xuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNjcm9sbE1vZGUgIT09IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9zY3JvbGxNb2RlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5fc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSkge1xuICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdzaW5nbGUnKSB7XG4gICAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ3NpbmdsZSc7XG4gICAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhZ2VWaWV3TW9kZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdzaW5nbGUnIHx8IHRoaXMuX3Njcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLmhvcml6b250YWwpIHtcbiAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ211bHRpcGxlJztcbiAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhZ2VWaWV3TW9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzY3JvbGxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTY3JvbGxNb2RlVHlwZT4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgYXV0aG9yaXphdGlvbjogT2JqZWN0IHwgYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgaHR0cEhlYWRlcnM6IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgLyoqIFRoaXMgZmllbGQgc3RvcmVzIHRoZSBwcmV2aW91cyB6b29tIGxldmVsIGlmIHRoZSBwYWdlIGlzIGVubGFyZ2VkIHdpdGggYSBkb3VibGUtdGFwIG9yIGRvdWJsZS1jbGljayAqL1xuICBwcml2YXRlIHByZXZpb3VzWm9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXG4gICAqIE1vc3QgdXNlcnMgY2FuIGxldCB0aGlzIHBhcmFtZXRlciBzYWZlbHkgYXQgaXQncyBkZWZhdWx0IHZhbHVlIG9mIHplcm8uXG4gICAqIFNldCB0aGlzIHRvIDEwMDAgb3IgaGlnaGVyIGlmIHlvdSBydW4gaW50byB0aW1pbmcgcHJvYmxlbXMgKHR5cGljYWxseSBjYXVzZWQgYnkgbG9hZGluZyB0aGUgbG9jYWxlIGZpbGVzXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93VGV4dEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U3RhbXBFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0RyYXdFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICAvKiogc3RvcmUgdGhlIHRpbWVvdXQgaWQgc28gaXQgY2FuIGJlIGNhbmNlbGVkIGlmIHVzZXIgbGVhdmVzIHRoZSBwYWdlIGJlZm9yZSB0aGUgUERGIGlzIHNob3duICovXG4gIHByaXZhdGUgaW5pdFRpbWVvdXQ6IGFueTtcblxuICAvKiogSG93IG1hbnkgbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBwcmludGVkP1xuICAgKiBMZWdhbCB2YWx1ZXM6IFZlcmJvc2l0eUxldmVsLklORk9TICg9IDUpLCBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAoPSAxKSwgVmVyYm9zaXR5TGV2ZWwuRVJST1JTICg9IDApICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2dMZXZlbCA9IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZWxhdGl2ZUNvb3Jkc09wdGlvbnM6IE9iamVjdCA9IHt9O1xuXG4gIC8qKiBVc2UgdGhlIG1pbmlmaWVkIChtaW5pZmllZEpTTGlicmFyaWVzPVwidHJ1ZVwiLCB3aGljaCBpcyB0aGUgZGVmYXVsdCkgb3IgdGhlIHVzZXItcmVhZGFibGUgcGRmLmpzIGxpYnJhcnkgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJmYWxzZVwiKSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbWluaWZpZWRKU0xpYnJhcmllcyA9IHRydWU7XG5cbiAgcHVibGljIHByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XG5cbiAgLyoqIG9wdGlvbiB0byBpbmNyZWFzZSAob3IgcmVkdWNlKSBwcmludCByZXNvbHV0aW9uLiBEZWZhdWx0IGlzIDE1MCAoZHBpKS4gU2Vuc2libGUgdmFsdWVzXG4gICAqIGFyZSAzMDAsIDYwMCwgYW5kIDEyMDAuIE5vdGUgdGhlIGluY3JlYXNlIG1lbW9yeSBjb25zdW1wdGlvbiwgd2hpY2ggbWF5IGV2ZW4gcmVzdWx0IGluIGEgYnJvd3NlciBjcmFzaC4gKi9cbiAgQElucHV0KClcbiAgcHVibGljIHByaW50UmVzb2x1dGlvbiA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHJvdGF0aW9uOiAwIHwgOTAgfCAxODAgfCAyNzA7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyByb3RhdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8MCB8IDkwIHwgMTgwIHwgMjcwPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYW5ub3RhdGlvbkxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBhbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHhmYUxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFhmYUxheWVyUmVuZGVyZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG91dGxpbmVMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE91dGxpbmVMb2FkZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGF0dGFjaG1lbnRzbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxBdHRhY2htZW50TG9hZGVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBsYXllcnNsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPExheWVyc0xvYWRlZEV2ZW50PigpO1xuXG4gIHB1YmxpYyBoYXNTaWduYXR1cmU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBVaW50OEFycmF5IHwgVVJMIHwgeyByYW5nZTogYW55IH0pIHtcbiAgICBpZiAodXJsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgdGhpcy5fc3JjID0gdXJsLmJ1ZmZlcjtcbiAgICB9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkge1xuICAgICAgdGhpcy5fc3JjID0gdXJsLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdXJsIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgLy8gYWRkaXRpb25hbCBjaGVjayBpbnRyb2R1Y2VkIHRvIHN1cHBvcnQgc2VydmVyIHNpZGUgcmVuZGVyaW5nXG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zcmMgPSBuZXcgVWludDhBcnJheShyZWFkZXIucmVzdWx0IGFzIEFycmF5QnVmZmVyKTtcbiAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5vcGVuUERGKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4gdGhpcy5vcGVuUERGMigpKSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBvcGVuUERGIGlzIGNhbGxlZCBsYXRlciwgc28gd2UgZG8gbm90aGluZyB0byBwcmV2ZW50IGxvYWRpbmcgdGhlIFBERiBmaWxlIHR3aWNlXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodXJsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xuICAgICAgICAvLyBtaW5pbWFsIGxlbmd0aCBvZiBhIGJhc2U2NCBlbmNvZGVkIFBERlxuICAgICAgICBpZiAodXJsLmxlbmd0aCAlIDQgPT09IDApIHtcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkLytdKz17MCwyfSQvLnRlc3QodXJsKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFVSTCBsb29rcyBsaWtlIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nLiBJZiBzbywgcGxlYXNlIHVzZSB0aGUgYXR0cmlidXRlIFtiYXNlNjRTcmNdIGluc3RlYWQgb2YgW3NyY10nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKHRoaXMuX3NyYyBhcyBhbnkpID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFzZTY0U3JjKGJhc2U2NDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChiYXNlNjQpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgYmluYXJ5X3N0cmluZyA9IGF0b2IoYmFzZTY0KTtcbiAgICAgIGNvbnN0IGxlbiA9IGJpbmFyeV9zdHJpbmcubGVuZ3RoO1xuICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeV9zdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3JjID0gYnl0ZXMuYnVmZmVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zcmMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBjb21iaW5hdGlvbiBvZiBoZWlnaHQsIG1pbkhlaWdodCwgYW5kIGF1dG9IZWlnaHQgZW5zdXJlcyB0aGUgUERGIGhlaWdodCBvZiB0aGUgUERGIHZpZXdlciBpcyBjYWxjdWxhdGVkIGNvcnJlY3RseSB3aGVuIHRoZSBoZWlnaHQgaXMgYSBwZXJjZW50YWdlLlxuICAgKiBCeSBkZWZhdWx0LCBtYW55IENTUyBmcmFtZXdvcmtzIG1ha2UgYSBkaXYgd2l0aCAxMDAlIGhhdmUgYSBoZWlnaHQgb3IgemVybyBwaXhlbHMuIGNoZWNrSGVpZ3RoKCkgZml4ZXMgdGhpcy5cbiAgICovXG4gIHByaXZhdGUgYXV0b0hlaWdodCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF9oZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcxMDAlJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGhlaWdodChoKSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hdXRvSGVpZ2h0ID0gZmFsc2U7XG4gICAgaWYgKGgpIHtcbiAgICAgIGlmIChoID09PSAnYXV0bycpIHtcbiAgICAgICAgdGhpcy5hdXRvSGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHByaXZhdGUgX3VzZUJyb3dzZXJMb2NhbGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGdldCB1c2VCcm93c2VyTG9jYWxlKCkge1xuICAgIHJldHVybiAhIXRoaXMuX3VzZUJyb3dzZXJMb2NhbGU7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoaXMgY29tcG9uZW50cyBhZGRzIGEgbGluayB0byB0aGUgbG9jYWxlIGFzc2V0cy4gVGhlIHBkZiB2aWV3ZXJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEBwYXJhbSB1c2VCcm93c2VyTG9jYWxlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgdXNlQnJvd3NlckxvY2FsZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3VzZUJyb3dzZXJMb2NhbGUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmb3JjZVVzaW5nTGVnYWN5RVM1ID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhZnRlciBjbGlja2luZyBcImRvd25sb2FkXCIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgdGhlIGtleWJvYXJkIGJpbmRpbmdzIGNvbXBsZXRlbHkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGlnbm9yZUtleWJvYXJkID0gZmFsc2U7XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncyBleHBsaWNpdGx5LiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgZXZlcnkgb3RoZXIga2V5IGJpbmRpbmcgaXMgaWdub3JlZC4gKi9cbiAgQElucHV0KClcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGUgdmlld2VyJ3Mgc3ZnIGltYWdlcyBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGltYWdlUmVzb3VyY2VzUGF0aCA9IGFzc2V0c1VybChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpICsgJy9pbWFnZXMvJztcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGVpciBsb2NhbGUgZm9sZGVyIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbG9jYWxlRm9sZGVyUGF0aCA9IGFzc2V0c1VybChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpICsgJy9sb2NhbGUnO1xuXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBsb2NhbGUuIFRoaXMgbXVzdCBiZSB0aGUgY29tcGxldGUgbG9jYWxlIG5hbWUsIHN1Y2ggYXMgXCJlcy1FU1wiLiBUaGUgc3RyaW5nIGlzIGFsbG93ZWQgdG8gYmUgYWxsIGxvd2VyY2FzZS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBCeSBkZWZhdWx0LCBsaXN0ZW5pbmcgdG8gdGhlIFVSTCBpcyBkZWFjdGl2YXRlZCBiZWNhdXNlIG9mdGVuIHRoZSBhbmNob3IgdGFnIGlzIHVzZWQgZm9yIHRoZSBBbmd1bGFyIHJvdXRlciAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbGlzdGVuVG9VUkwgPSBmYWxzZTtcblxuICAvKiogTmF2aWdhdGUgdG8gYSBjZXJ0YWluIFwibmFtZWQgZGVzdGluYXRpb25cIiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbmFtZWRkZXN0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqIGFsbG93cyB5b3UgdG8gcGFzcyBhIHBhc3N3b3JkIHRvIHJlYWQgcGFzc3dvcmQtcHJvdGVjdGVkIGZpbGVzICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByZXBsYWNlQnJvd3NlclByaW50ID0gdHJ1ZTtcblxuICBwdWJsaWMgX3Nob3dTaWRlYmFyQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgcHVibGljIHZpZXdlclBvc2l0aW9uVG9wID0gJzMycHgnO1xuXG4gIC8qKiBwZGYuanMgY2FuIHNob3cgc2lnbmF0dXJlcywgYnV0IGZhaWxzIHRvIHZlcmlmeSB0aGVtLiBTbyB0aGV5IGFyZSBzd2l0Y2hlZCBvZmYgYnkgZGVmYXVsdC5cbiAgICogU2V0IFwiW3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlc11cIj1cInRydWVcIiB0byBkaXNwbGF5IGUtc2lnbmF0dXJlcyBub25ldGhlbGVzcy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3RhcnRUYWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBnZXQgc2hvd1NpZGViYXJCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd1NpZGViYXJCdXR0b24oc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICAgICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBzaG93O1xuICAgIGlmICh0aGlzLl9zaG93U2lkZWJhckJ1dHRvbikge1xuICAgICAgY29uc3QgaXNJRSA9IC9tc2llXFxzfHRyaWRlbnRcXC8vaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xuICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgZmFjdG9yID0gTnVtYmVyKCh0aGlzLl9tb2JpbGVGcmllbmRseVpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gKDY4ICogZmFjdG9yKS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5maW5kYmFyTGVmdCA9ICcwcHgnO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZWJhclZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHB1YmxpYyBnZXQgc2lkZWJhclZpc2libGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGViYXJWaXNpYmxlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2lkZWJhclZpc2libGUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3NpZGViYXJWaXNpYmxlKSB7XG4gICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLl9zaWRlYmFyVmlzaWJsZSA9IHZhbHVlO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZTaWRlYmFyKSB7XG4gICAgICBpZiAodGhpcy5zaWRlYmFyVmlzaWJsZSkge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLm9wZW4oKTtcbiAgICAgICAgY29uc3QgdmlldyA9IE51bWJlcih0aGlzLmFjdGl2ZVNpZGViYXJWaWV3KTtcbiAgICAgICAgaWYgKHZpZXcgPT09IDEgfHwgdmlldyA9PT0gMiB8fCB2aWV3ID09PSAzIHx8IHZpZXcgPT09IDQpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLnN3aXRjaFZpZXcodmlldywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignW2FjdGl2ZVNpZGViYXJWaWV3XSBtdXN0IGJlIGFuIGludGVnZXIgdmFsdWUgYmV0d2VlbiAxIGFuZCA0Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhY3RpdmVTaWRlYmFyVmlldzogUGRmU2lkZWJhclZpZXcgPSBQZGZTaWRlYmFyVmlldy5PVVRMSU5FO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZlNpZGViYXJWaWV3PigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaW5kYmFyVmlzaWJsZSA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgZmluZGJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHByb3BlcnRpZXNEaWFsb2dWaXNpYmxlID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZEhpZ2hsaWdodEFsbCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kTWF0Y2hDYXNlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRDdXJyZW50UGFnZU9ubHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZFBhZ2VSYW5nZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kRW50aXJlV29yZCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kRW50aXJlUGhyYXNlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaERpYWNyaXRpY3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZEZ1enp5U2VhcmNoID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRSZXN1bHRzQ291bnQgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZE1lc3NhZ2VzID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyB8ICdjdXN0b20nIHwgc3RyaW5nID0gJ2xpZ2h0JztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1Rvb2xiYXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2luZ2xlUGFnZU1vZGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ZlcnRpY2FsU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dIb3Jpem9udGFsU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dXcmFwcGVkU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dJbmZpbml0ZVNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9va01vZGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1JvdGF0ZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIHByaXZhdGUgX2hhbmRUb29sID0gIWlzSU9TKCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBoYW5kVG9vbChoYW5kVG9vbDogYm9vbGVhbikge1xuICAgIGlmIChpc0lPUygpICYmIGhhbmRUb29sKSB7XG4gICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgXCJPbiBpT1MsIHRoZSBoYW5kdG9vbCBkb2Vzbid0IHdvcmsgcmVsaWFibHkuIFBsdXMsIHlvdSBkb24ndCBuZWVkIGl0IGJlY2F1c2UgdG91Y2ggZ2VzdHVyZXMgYWxsb3cgeW91IHRvIGRpc3Rpbmd1aXNoIGVhc2lseSBiZXR3ZWVuIHN3aXBpbmcgYW5kIHNlbGVjdGluZyB0ZXh0LiBUaGVyZWZvcmUsIHRoZSBsaWJyYXJ5IGlnbm9yZXMgeW91ciBzZXR0aW5nLlwiXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9oYW5kVG9vbCA9IGhhbmRUb29sO1xuICB9XG5cbiAgcHVibGljIGdldCBoYW5kVG9vbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFuZFRvb2w7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcHVibGljIGhhbmRUb29sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfc2hvd1Njcm9sbGluZ0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIHB1YmxpYyBnZXQgc2hvd1Njcm9sbGluZ0J1dHRvbigpIHtcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaG93U2Nyb2xsaW5nQnV0dG9uO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNob3dTY3JvbGxpbmdCdXR0b24odmFsOiBSZXNwb25zaXZlVmlzaWJpbGl0eSkge1xuICAgIHRoaXMuX3Nob3dTY3JvbGxpbmdCdXR0b24gPSB2YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9yZGVycyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNwcmVhZDogU3ByZWFkVHlwZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xuXG4gIHByaXZhdGUgX3BhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgZ2V0IHBhZ2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgcGFnZShwOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAocCkge1xuICAgICAgLy8gc2lsZW50bHkgY29wZSB3aXRoIHN0cmluZ3NcbiAgICAgIHRoaXMuX3BhZ2UgPSBOdW1iZXIocCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3BhZ2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhZ2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZUxhYmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlc0xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZXNMb2FkZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVJlbmRlcmVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwZGZEb3dubG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZEb3dubG9hZGVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwZGZMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGRmTG9hZGluZ1N0YXJ0cyA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGluZ1N0YXJ0c0V2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGRmTG9hZGluZ0ZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRleHRMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYW5ub3RhdGlvbkVkaXRvck1vZGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uRWRpdG9yRWRpdG9yTW9kZUNoYW5nZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHVwZGF0ZUZpbmRNYXRjaGVzQ291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRSZXN1bHRNYXRjaGVzQ291bnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB1cGRhdGVGaW5kU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRTdGF0ZT4oKTtcblxuICAvKiogTGVnYWwgdmFsdWVzOiB1bmRlZmluZWQsICdhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCBvciAnNTAnIChvciBhbnkgb3RoZXIgcGVyY2VudGFnZSkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHpvb206IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHpvb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgem9vbUxldmVscyA9IFsnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgMC41LCAxLCAxLjI1LCAxLjUsIDIsIDMsIDRdO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtYXhab29tID0gMTA7XG5cbiAgQElucHV0KClcbiAgcHVibGljIG1pblpvb20gPSAwLjE7XG5cbiAgLyoqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cbiAgICovXG4gIHB1YmxpYyBfbW9iaWxlRnJpZW5kbHlab29tOiBzdHJpbmcgPSAnMTAwJSc7XG5cbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcblxuICBwdWJsaWMgdG9vbGJhck1hcmdpblRvcCA9ICcwcHgnO1xuXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XG5cbiAgcHJpdmF0ZSB0b29sYmFyOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgb25Ub29sYmFyTG9hZGVkKHRvb2xiYXJFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMudG9vbGJhciA9IHRvb2xiYXJFbGVtZW50O1xuICB9XG5cbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMy4xNDE1OTI2NTM1OTsgLy8gbWFnaWMgbnVtYmVyIGluZGljYXRpbmcgdGhlIHRvb2xiYXIgc2l6ZSBoYXNuJ3QgYmVlbiBkZXRlcm1pbmVkIHlldFxuXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIHNpZGViYXJQb3NpdGlvblRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tO1xuICB9XG5cbiAgcHVibGljIGdldCBwZGZKc1ZlcnNpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0VmVyc2lvblN1ZmZpeChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpO1xuICB9XG5cbiAgcHVibGljIGdldCBtYWpvck1pbm9yUGRmSnNWZXJzaW9uKCk6IHN0cmluZyB7XG4gICAgY29uc3QgZnVsbFZlcnNpb24gPSB0aGlzLnBkZkpzVmVyc2lvbjtcbiAgICBjb25zdCBwb3MgPSBmdWxsVmVyc2lvbi5sYXN0SW5kZXhPZignLicpO1xuICAgIHJldHVybiBmdWxsVmVyc2lvbi5zdWJzdHJpbmcoMCwgcG9zKS5yZXBsYWNlKCcuJywgJy0nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtb2JpbGVGcmllbmRseVpvb20oem9vbTogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXG4gICAgaWYgKHpvb20gPT0gJ3RydWUnKSB7XG4gICAgICB6b29tID0gJzE1MCUnO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXG4gICAgfSBlbHNlIGlmICh6b29tID09ICdmYWxzZScgfHwgem9vbSA9PT0gdW5kZWZpbmVkIHx8IHpvb20gPT09IG51bGwpIHtcbiAgICAgIHpvb20gPSAnMTAwJSc7XG4gICAgfVxuICAgIHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbSA9IHpvb207XG4gICAgbGV0IGZhY3RvciA9IDE7XG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgem9vbSA9IDEwMCAqIE51bWJlcih6b29tKSArICclJztcbiAgICB9XG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gZmFjdG9yO1xuICAgIHRoaXMudG9vbGJhcldpZHRoID0gKDEwMCAvIGZhY3RvcikudG9TdHJpbmcoKSArICclJztcbiAgICB0aGlzLnRvb2xiYXJNYXJnaW5Ub3AgPSAoZmFjdG9yIC0gMSkgKiAxNiArICdweCc7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaHV0dGluZ0Rvd24gPSBmYWxzZTtcblxuICBwdWJsaWMgc2VydmVyU2lkZVJlbmRlcmluZyA9IHRydWU7XG5cbiAgcHVibGljIGNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sYmFyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2lkZWJhclBvc2l0aW9uVG9wID0gJzAnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdG9wID0gdGhpcy50b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICBpZiAodG9wIDwgMzMpIHtcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMzNweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSB0b3AgKyAncHgnO1xuICAgIH1cblxuICAgIGNvbnN0IGZhY3RvciA9IHRvcCAvIDMzO1xuXG4gICAgaWYgKHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlKSB7XG4gICAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICgzMyArIDMzICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWRlYmFyUG9zaXRpb25Ub3AgPSAnMCc7XG4gICAgfVxuICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhclRvcCA9ICgzMyArIDM4ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB0aGlzLmZpbmRiYXJUb3AgPSAoMzMgKyAzOCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XG5cbiAgICBjb25zdCBmaW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW1hcnlWaWV3RmluZCcpO1xuICAgIGlmIChmaW5kQnV0dG9uKSB7XG4gICAgICBjb25zdCBjb250YWluZXJQb3NpdGlvbkxlZnQgPSB0aGlzLnRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGNvbnN0IGZpbmRCdXR0b25Qb3NpdGlvbiA9IGZpbmRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgoMCwgZmluZEJ1dHRvblBvc2l0aW9uLmxlZnQgLSBjb250YWluZXJQb3NpdGlvbkxlZnQpO1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IGxlZnQgKyAncHgnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zaG93U2lkZWJhckJ1dHRvbikge1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IDM0ICsgKDMyICogZmFjdG9yKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICcwJztcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZCxcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIHNlcnZpY2U6IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5iYXNlSHJlZiA9IHRoaXMucGxhdGZvcm1Mb2NhdGlvbi5nZXRCYXNlSHJlZkZyb21ET00oKTtcbiAgICB0aGlzLnNlcnZpY2UucmVjYWxjdWxhdGVTaXplJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblJlc2l6ZSgpKTtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5zZXJ2ZXJTaWRlUmVuZGVyaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnRvb2xiYXJXaWR0aCA9IFN0cmluZyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpOiBib29sZWFuIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaCA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XG4gICAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQgJiYgbWF0Y2ggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApIDwgMTQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBuZWVkc0VTNSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBpc0lFID0gISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcbiAgICBjb25zdCBpc0VkZ2UgPSAvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IGlzSU9zMTNPckJlbG93ID0gdGhpcy5pT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTtcbiAgICBsZXQgbmVlZHNFUzUgPSB0eXBlb2YgUmVhZGFibGVTdHJlYW0gPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBQcm9taXNlWydhbGxTZXR0bGVkJ10gPT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChuZWVkc0VTNSB8fCBpc0lFIHx8IGlzRWRnZSB8fCBpc0lPczEzT3JCZWxvdyB8fCB0aGlzLmZvcmNlVXNpbmdMZWdhY3lFUzUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIShhd2FpdCB0aGlzLnN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VwcG9ydHNPcHRpb25hbENoYWluaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9ydCA9ICg8YW55PndpbmRvdykuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nO1xuICAgICAgc3VwcG9ydCAhPT0gdW5kZWZpbmVkID8gcmVzb2x2ZShzdXBwb3J0KSA6IHJlc29sdmUodGhpcy5hZGRTY3JpcHRPcENoYWluaW5nU3VwcG9ydCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyID09PSAnYmxlZWRpbmctZWRnZScpIHtcbiAgICAgICAgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyPVwiYXNzZXRzXCI7XG4gICAgICB9XG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9vcC1jaGFpbmluZy1zdXBwb3J0LmpzJyk7XG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgICAgIHJlc29sdmUoKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcgYXMgYm9vbGVhbik7XG4gICAgICB9O1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICAgICAgKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcgPSBmYWxzZTtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVNjcmlwdEVsZW1lbnQoc291cmNlUGF0aDogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIFRydXN0ZWRUeXBlc1dpbmRvdztcbiAgICBpZiAodHRXaW5kb3cudHJ1c3RlZFR5cGVzKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdmb28nLCB7XG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogKGlucHV0KSA9PiBpbnB1dCxcbiAgICAgIH0pO1xuICAgICAgc2NyaXB0LnNyYyA9IHNhbml0aXplci5jcmVhdGVTY3JpcHRVUkwodGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoc291cmNlUGF0aCkpIGFzIGFueTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0LnNyYyA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKHNvdXJjZVBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiBzY3JpcHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFBkZkpzUGF0aChhcnRpZmFjdDogJ3BkZicgfCAndmlld2VyJywgbmVlZHNFUzU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLm1pbmlmaWVkSlNMaWJyYXJpZXMgPyAnLm1pbi5qcycgOiAnLmpzJztcbiAgICBjb25zdCBhc3NldHMgPSBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI7XG4gICAgY29uc3QgdmVyc2lvblN1ZmZpeCA9IGdldFZlcnNpb25TdWZmaXgoYXNzZXRzKTtcbiAgICBjb25zdCBhcnRpZmFjdFBhdGggPSBgLyR7YXJ0aWZhY3R9LWA7XG4gICAgY29uc3QgZXM1ID0gbmVlZHNFUzUgPyAnLWVzNScgOiAnJztcblxuICAgIHJldHVybiBhc3NldHMgKyBhcnRpZmFjdFBhdGggKyB2ZXJzaW9uU3VmZml4ICsgZXM1ICsgc3VmZml4O1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVmlld2VyKCk6IHZvaWQge1xuICAgIGdsb2JhbFRoaXNbJ25neFpvbmUnXSA9IHRoaXMubmdab25lO1xuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xuICAgICAgICBjb25zdCB2aWV3ZXJQYXRoID0gdGhpcy5nZXRQZGZKc1BhdGgoJ3ZpZXdlcicsIG5lZWRzRVM1KTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHZpZXdlclBhdGgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkRmVhdHVyZXMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9hZGRpdGlvbmFsLWZlYXR1cmVzLmpzJyk7XG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGdsb2JhbFRoaXNbJ3NldE5neEV4dGVuZGVkUGRmVmlld2VyU291cmNlJ10gPSAodXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5fc3JjID0gdXJsO1xuICAgICAgICB0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlciA9IHRydWU7XG4gICAgICAgIHRoaXMuc3JjQ2hhbmdlLmVtaXQodXJsKTtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYWRkVHJhbnNsYXRpb25zVW5sZXNzUHJvdmlkZWRCeVRoZVVzZXIoKTtcbiAgICAgIHRoaXMuZm9ybVN1cHBvcnQucmVnaXN0ZXJGb3JtU3VwcG9ydFdpdGhQZGZqcyh0aGlzLm5nWm9uZSk7XG4gICAgICB0aGlzLmxvYWRQZGZKcygpO1xuICAgICAgdGhpcy5oaWRlVG9vbGJhcklmSXRJc0VtcHR5KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkUGRmSnMoKSB7XG4gICAgZ2xvYmFsVGhpc1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKCFnbG9iYWxUaGlzWydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xuICAgICAgICAgIGlmIChuZWVkc0VTNSkge1xuICAgICAgICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy5uZWVkc0VTNSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICBcIklmIHlvdSBzZWUgdGhlIGVycm9yIG1lc3NhZ2UgXFxcImV4cGVjdGVkIGV4cHJlc3Npb24sIGdvdCAnPSdcXFwiIGFib3ZlOiB5b3UgY2FuIHNhZmVseSBpZ25vcmUgaXQgYXMgbG9uZyBhcyB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZy4gSXQgbWVhbnMgeW91ciBicm93c2VyIGlzIG91dC1vZi1kYXRlLiBQbGVhc2UgdXBkYXRlIHlvdXIgYnJvd3NlciB0byBiZW5lZml0IGZyb20gdGhlIGxhdGVzdCBzZWN1cml0eSB1cGRhdGVzIGFuZCB0byBlbmpveSBhIGZhc3RlciBQREYgdmlld2VyLlwiXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy5uZWVkc0VTNSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgdGhlIEVTNSB2ZXJzaW9uIG9mIHRoZSBQREYgdmlld2VyLiBZb3VyIFBERiBmaWxlcyBzaG93IGZhc3RlciBpZiB5b3UgdXBkYXRlIHlvdXIgYnJvd3Nlci4nKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMubWluaWZpZWRKU0xpYnJhcmllcykge1xuICAgICAgICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKS5lbmRzV2l0aCgnLm1pbi5qcycpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpO1xuICAgICAgICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMgPSAoKSA9PiBzcmMucmVwbGFjZSgnLmpzJywgJy5taW4uanMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcGRmSnNQYXRoID0gdGhpcy5nZXRQZGZKc1BhdGgoJ3BkZicsIG5lZWRzRVM1KTtcbiAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmSnNQYXRoKTtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XG4gICAgICAgIHRoaXMubG9hZFZpZXdlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xuICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICBpZiAoKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5kb0luaXRQREZWaWV3ZXIoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpLCA1MCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzc2lnblRhYmluZGV4ZXMoKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRUYWJpbmRleCkge1xuICAgICAgY29uc3QgciA9IHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHIuY2xhc3NMaXN0LmFkZCgnb2Zmc2NyZWVuJyk7XG4gICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KHIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhyLCB0aGlzLnJvb3QubmF0aXZlRWxlbWVudCwgW10pO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyKTtcbiAgICAgIGNvbnN0IHRvcFJpZ2h0R3JlYXRlclRoYW5Cb3R0b21MZWZ0Q29tcGFyYXRvciA9IChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLnkgLSBiLnkgPiAxNSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnkgLSBhLnkgPiAxNSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS54IC0gYi54O1xuICAgICAgfTtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5lbGVtZW50c10uc29ydCh0b3BSaWdodEdyZWF0ZXJUaGFuQm90dG9tTGVmdENvbXBhcmF0b3IpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc29ydGVkW2ldLmVsZW1lbnQudGFiSW5kZXggPSB0aGlzLnN0YXJ0VGFiaW5kZXggKyBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocm9vdDogRWxlbWVudCk6IHZvaWQge1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhYTFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTGFyZ2VWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5NZWRpdW1WaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5TbWFsbFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblRpbnlWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWFhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZUxhcmdlVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZU1lZGl1bVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVTbWFsbFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVUaW55VmlldycpO1xuXG4gICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChyb290LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYyA9IHJvb3QuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjb3B5OiBFbGVtZW50LCBvcmlnaW5hbDogRWxlbWVudCwgZWxlbWVudHM6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4pOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+IHtcbiAgICBpZiAoY29weSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSBjb3B5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgZWxlbWVudEFuZFBvcyA9IHtcbiAgICAgICAgZWxlbWVudDogb3JpZ2luYWwsXG4gICAgICAgIHg6IE1hdGgucm91bmQocmVjdC5sZWZ0KSxcbiAgICAgICAgeTogTWF0aC5yb3VuZChyZWN0LnRvcCksXG4gICAgICB9IGFzIEVsZW1lbnRBbmRQb3NpdGlvbjtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudEFuZFBvcyk7XG4gICAgfSBlbHNlIGlmIChjb3B5LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3B5LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYyA9IGNvcHkuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgY29uc3QgbyA9IG9yaWdpbmFsLmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgIGlmIChjICYmIG8pIHtcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoYywgbywgZWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfVxuXG4gIHByaXZhdGUgZG9Jbml0UERGVmlld2VyKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xuICAgICAgdGhpcy5sb2NhbGl6YXRpb25Jbml0aWFsaXplZCA9IHRydWU7XG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XG4gICAgICAgICAgdGhpcy5hZnRlckxpYnJhcnlJbml0KCk7XG4gICAgICAgICAgdGhpcy5vcGVuUERGKCk7XG4gICAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XG4gICAgICAgICAgaWYgKHRoaXMucmVwbGFjZUJyb3dzZXJQcmludCkge1xuICAgICAgICAgICAgd2luZG93LnByaW50ID0gKHdpbmRvdyBhcyBhbnkpLnByaW50UERGO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgdGhpcy5kZWxheUZpcnN0Vmlldyk7XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhZnRlcnByaW50JywgKCkgPT4ge1xuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcbiAgICAgIHRoaXMuYmVmb3JlUHJpbnQuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xuXG4gICAgaWYgKHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXG4gICAgICBjb25zb2xlLmVycm9yKFwiWW91J3JlIHRyeWluZyB0byBvcGVuIHR3byBpbnN0YW5jZXMgb2YgdGhlIFBERiB2aWV3ZXIuIE1vc3QgbGlrZWx5LCB0aGlzIHdpbGwgcmVzdWx0IGluIGVycm9ycy5cIik7XG4gICAgfVxuICAgIGNvbnN0IG9uTG9hZGVkID0gKCkgPT4ge1xuICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xuXG4gICAgdGhpcy5hY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG51bGwpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXG4gICAgICAgIC8vIFRoaXMgaW5pdGlhbGl6ZXMgdGhlIHdlYnZpZXdlciwgdGhlIGZpbGUgbWF5IGJlIHBhc3NlZCBpbiB0byBpdCB0byBpbml0aWFsaXplIHRoZSB2aWV3ZXIgd2l0aCBhIHBkZiBkaXJlY3RseVxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IGdsb2JhbFRoaXMud2ViVmlld2VyTG9hZCgpKTtcblxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZGVmYXVsdFVybCA9ICcnOyAvLyBJRSBidWdmaXhcbiAgICAgICAgaWYgKHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZCkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnZW5hYmxlRHJhZ0FuZERyb3AnLCB0aGlzLmVuYWJsZURyYWdBbmREcm9wKTtcbiAgICAgICAgbGV0IGxhbmd1YWdlID0gdGhpcy5sYW5ndWFnZSA9PT0gJycgPyB1bmRlZmluZWQgOiB0aGlzLmxhbmd1YWdlO1xuICAgICAgICBpZiAoIWxhbmd1YWdlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcbiAgICAgICAgICAgIGxhbmd1YWdlID0gJ2VuJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPSBuYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2xvY2FsZScsIGxhbmd1YWdlKTtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW1hZ2VSZXNvdXJjZXNQYXRoJywgdGhpcy5pbWFnZVJlc291cmNlc1BhdGgpO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtaW5ab29tJywgdGhpcy5taW5ab29tKTtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWF4Wm9vbScsIHRoaXMubWF4Wm9vbSk7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3BhZ2VWaWV3TW9kZScsIHRoaXMucGFnZVZpZXdNb2RlKTtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgndmVyYm9zaXR5JywgdGhpcy5sb2dMZXZlbCk7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2luaXRpYWxab29tJywgdGhpcy56b29tKTtcblxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5pc1ZpZXdlckVtYmVkZGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICAgICAgaWYgKGJvZHlbMF0pIHtcbiAgICAgICAgICBjb25zdCB0b3BMZXZlbEVsZW1lbnRzID0gYm9keVswXS5jaGlsZHJlbjtcbiAgICAgICAgICBmb3IgKGxldCBpID0gdG9wTGV2ZWxFbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgZSA9IHRvcExldmVsRWxlbWVudHMuaXRlbShpKTtcbiAgICAgICAgICAgIGlmIChlICYmIGUuaWQgPT09ICdwcmludENvbnRhaW5lcicpIHtcbiAgICAgICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRDb250YWluZXInKTtcbiAgICAgICAgaWYgKHBjKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChwYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkVHJhbnNsYXRpb25zVW5sZXNzUHJvdmlkZWRCeVRoZVVzZXIoKSB7XG4gICAgY29uc3QgbGFuZ0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1t0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xuICAgIGNvbnN0IGxhbmdDb3VudCA9IGxhbmdMaW5rcy5sZW5ndGg7XG4gICAgY29uc3QgZGljdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xuICAgIGNvbnN0IHVzZXJQcm92aWRlc1RyYW5zbGF0aW9ucyA9IGxhbmdDb3VudCA+IDAgfHwgISFkaWN0O1xuICAgIGlmICh0aGlzLl91c2VCcm93c2VyTG9jYWxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudXNlQnJvd3NlckxvY2FsZSA9ICF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnMpIHtcbiAgICAgIGlmICghdGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJZiB5b3Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlLCB5b3UgbXVzdCBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCIpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byBhZGQgdGhlbSB0byB0aGUgaW5kZXguaHRtbC4nKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFBERiB2aWV3ZXIgaWdub3JlcyB5b3VyIHNldHRpbmcgYW5kIGxvYWRzIHRoZSBkZWZhdWx0IHRyYW5zbGF0aW9ucy4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgIGxpbmsucmVsID0gJ3Jlc291cmNlJztcbiAgICAgIGxpbmsudHlwZSA9ICdhcHBsaWNhdGlvbi9sMTBuJztcbiAgICAgIGxpbmsuaHJlZiA9IHRoaXMubG9jYWxlRm9sZGVyUGF0aCArICcvbG9jYWxlLnByb3BlcnRpZXMnO1xuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ29yaWdpbicsICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgbGluayk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUgJiYgbGFuZ0NvdW50ID4gMCkge1xuICAgICAgY29uc3QgbyA9IGxhbmdMaW5rc1swXS5hdHRyaWJ1dGVzWydvcmlnaW4nXTtcbiAgICAgIGlmIChvICYmIG8udmFsdWUgIT09ICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlVG9vbGJhcklmSXRJc0VtcHR5KCkge1xuICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdGhpcy5zaG93VG9vbGJhcjtcbiAgICBpZiAoIXRoaXMuc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gfHwgdGhpcy5zZXJ2aWNlLnNlY29uZGFyeU1lbnVJc0VtcHR5KSB7XG4gICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xuICAgICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBOb3RpZmllcyBldmVyeSB3aWRnZXQgdGhhdCBpbXBsZW1lbnRzIG9uTGlicmFyeUluaXQoKSB0aGF0IHRoZSBQREYgdmlld2VyIG9iamVjdHMgYXJlIGF2YWlsYWJsZSAqL1xuICBwcml2YXRlIGFmdGVyTGlicmFyeUluaXQoKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0Lm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0hlaWdodCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faGVpZ2h0KSB7XG4gICAgICBpZiAoaXNOYU4oTnVtYmVyKHRoaXMuX2hlaWdodC5yZXBsYWNlKCclJywgJycpKSkpIHtcbiAgICAgICAgLy8gVGhlIGhlaWdodCBpcyBkZWZpbmVkIHdpdGggb25lIG9mIHRoZSB1bml0cyB2aCwgdncsIGVtLCByZW0sIGV0Yy5cbiAgICAgICAgLy8gU28gdGhlIGhlaWdodCBjaGVjayBpc24ndCBuZWNlc3NhcnkuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBkZmpzcHJpbnRpbmddJykpIHtcbiAgICAgIC8vICMxNzAyIHdvcmthcm91bmQgdG8gYSBGaXJlZm94IGJ1Zzogd2hlbiBwcmludGluZywgY29udGFpbmVyLmNsaWVudEhlaWdodCBpcyB0ZW1wb3JhcmlseSAwLFxuICAgICAgLy8gY2F1c2luZyBuZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlciB0byBkZWZhdWx0IHRvIDEwMCBwaXhlbHMgaGVpZ2h0LiBTbyBpdCdzIGJldHRlclxuICAgICAgLy8gdG8gZG8gbm90aGluZy5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3pvb20nKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGllbnRIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAmJiAhdGhpcy5hdXRvSGVpZ2h0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIFwiVGhlIGhlaWdodCBvZiB0aGUgUERGIHZpZXdlciB3aWRnZXQgaXMgemVybyBwaXhlbHMuIFBsZWFzZSBjaGVjayB0aGUgaGVpZ2h0IGF0dHJpYnV0ZS4gSXMgdGhlcmUgYSBzeW50YXggZXJyb3I/IE9yIGFyZSB5b3UgdXNpbmcgYSBwZXJjZW50YWdlIHdpdGggYSBDU1MgZnJhbWV3b3JrIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoaXM/IFRoZSBoZWlnaHQgaXMgYWRqdXN0ZWQgYXV0b21hdGVkbHkuXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b0hlaWdodCkge1xuICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wO1xuICAgICAgICAgIGxldCBtYXhpbXVtSGVpZ2h0ID0gYXZhaWxhYmxlIC0gdG9wO1xuICAgICAgICAgIC8vIHRha2UgdGhlIG1hcmdpbnMgYW5kIHBhZGRpbmdzIG9mIHRoZSBwYXJlbnQgY29udGFpbmVycyBpbnRvIGFjY291bnRcbiAgICAgICAgICBjb25zdCBwYWRkaW5nID0gdGhpcy5jYWxjdWxhdGVCb3JkZXJNYXJnaW4oY29udGFpbmVyKTtcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0IC09IHBhZGRpbmc7XG4gICAgICAgICAgaWYgKG1heGltdW1IZWlnaHQgPiAxMDApIHtcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gYCR7bWF4aW11bUhlaWdodH1weGA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJzEwMHB4JztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUJvcmRlck1hcmdpbihjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCk6IG51bWJlciB7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XG5cbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgICBjb25zdCBtYXJnaW4gPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tKTtcbiAgICAgIGlmIChjb250YWluZXIuc3R5bGUuekluZGV4KSB7XG4gICAgICAgIHJldHVybiBwYWRkaW5nICsgbWFyZ2luO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBhZGRpbmcgKyBtYXJnaW4gKyB0aGlzLmNhbGN1bGF0ZUJvcmRlck1hcmdpbihjb250YWluZXIucGFyZW50RWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcHVibGljIG9uU3ByZWFkQ2hhbmdlKG5ld1NwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJyk6IHZvaWQge1xuICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQobmV3U3ByZWFkKTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50ZXh0TGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRUb29sKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcbiAgICAgICAgICAgIGNvbnN0IHZpZXdGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XG4gICAgICAgICAgICAgIGZpbmRiYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA/IHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gfHwgdGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnRleHRMYXllcikge1xuICAgICAgICAvLyB0b2RvOiBpcyB0aGlzIGEgcmVkdW5kYW50IGNoZWNrP1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgcGRmRGVmYXVsdE9wdGlvbnMudGV4dExheWVyTW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0b2RvOiBpcyB0aGUgZWxzZSBicmFuY2ggZGVhZCBjb2RlP1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24pIHtcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLicpO1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuOyAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwZGZEZWZhdWx0T3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5zZXQoa2V5LCBwZGZEZWZhdWx0T3B0aW9uc1trZXldKTtcbiAgICB9XG4gICAgb3B0aW9ucy5zZXQoJ2Rpc2FibGVQcmVmZXJlbmNlcycsIHRydWUpO1xuICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xuXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleWJvYXJkJywgdGhpcy5pZ25vcmVLZXlib2FyZCk7XG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleXMnLCB0aGlzLmlnbm9yZUtleXMpO1xuICAgIG9wdGlvbnMuc2V0KCdhY2NlcHRLZXlzJywgdGhpcy5hY2NlcHRLZXlzKTtcbiAgICB0aGlzLmFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3Nhcnkob3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdzY3JvbGxNb2RlT25Mb2FkJywgdGhpcy5zY3JvbGxNb2RlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyVmlzaWJsZSA9IHRoaXMuc2lkZWJhclZpc2libGU7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcblxuICAgIGlmIChzaWRlYmFyVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gdGhpcy5hY3RpdmVTaWRlYmFyVmlldyA6IFBkZlNpZGViYXJWaWV3Lk5PTkU7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnNldCgnc2lkZWJhclZpZXdPbkxvYWQnLCB0aGlzLnNpZGViYXJWaXNpYmxlID8gdGhpcy5hY3RpdmVTaWRlYmFyVmlldyA6IDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAyKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDEpO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZGQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAwKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByaW50UmVzb2x1dGlvbikge1xuICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMgPT09IGZhbHNlKSB7XG4gICAgICBvcHRpb25zLnNldCgncmVtb3ZlUGFnZUJvcmRlcnMnLCAhdGhpcy5zaG93Qm9yZGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUERGKCkge1xuICAgIFNlcnZpY2VXb3JrZXJPcHRpb25zLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xuICAgIHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5fc3JjKSB7XG4gICAgICB0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgIGlmICghdGhpcy5saXN0ZW5Ub1VSTCkge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5zZXRIYXNoID0gZnVuY3Rpb24gKCkge307XG4gICAgICB9XG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcbiAgICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndG9nZ2xlU2lkZWJhcicsICh4OiBUb2dnbGVTaWRlYmFyRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlID0geC52aXNpYmxlO1xuICAgICAgICAgIHRoaXMuc2lkZWJhclZpc2libGVDaGFuZ2UuZW1pdCh4LnZpc2libGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy50ZXh0TGF5ZXJSZW5kZXJlZC5lbWl0KHgpKTtcbiAgICAgIH0pO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmVkaXRvcm1vZGVjaGFuZ2VkJywgKHg6IEFubm90YXRpb25FZGl0b3JFZGl0b3JNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgdGltZW91dCBoZXJlIHRvIG1ha2Ugc3VyZSB0aGUgZWRpdG9yIGlzIGFscmVhZHkgdmlzaWJsZVxuICAgICAgICAvLyB3aGVuIHRoZSBldmVudCBpcyBjYXVnaHQuIFBkZi5qcyBmaXJlcyBpdCBhIGJpdCBlYXJseS5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFubm90YXRpb25FZGl0b3JNb2RlQ2hhbmdlZC5lbWl0KHgpKTtcbiAgICAgICAgaWYgKHgubW9kZSA9PT0gMCkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItcHJldmVudC10b3VjaC1tb3ZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci1wcmV2ZW50LXRvdWNoLW1vdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY3JvbGxtb2RlY2hhbmdlZCcsICh4OiBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2Nyb2xsTW9kZSA9IHgubW9kZTtcbiAgICAgICAgICB0aGlzLnNjcm9sbE1vZGVDaGFuZ2UuZW1pdCh4Lm1vZGUpO1xuICAgICAgICAgIGlmICh4Lm1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnBhZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ3NpbmdsZScpIHtcbiAgICAgICAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCgnc2luZ2xlJyk7XG4gICAgICAgICAgICAgIHRoaXMuX3BhZ2VWaWV3TW9kZSA9ICdzaW5nbGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcm9ncmVzcycsICh4OiBQcm9ncmVzc0JhckV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnByb2dyZXNzLmVtaXQoeCkpO1xuICAgICAgfSk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZmluZGJhcmNsb3NlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluZGJhclZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmZpbmRiYXJWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbmRiYXJvcGVuJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZmluZGJhclZpc2libGUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuZmluZGJhclZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcm9wZXJ0aWVzZGlhbG9nY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGVDaGFuZ2UuZW1pdChmYWxzZSkpO1xuICAgICAgfSk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncHJvcGVydGllc2RpYWxvZ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpKTtcbiAgICAgIH0pO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXNsb2FkZWQnLCAoeDogUGFnZXNMb2FkZWRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wYWdlc0xvYWRlZC5lbWl0KHgpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxiYXJJbkluZmluaXRlU2Nyb2xsTW9kZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3RhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgaWYgKHIgPT09IDAgfHwgciA9PT0gOTAgfHwgciA9PT0gMTgwIHx8IHIgPT09IDI3MCkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLmdvVG9EZXN0aW5hdGlvbih0aGlzLm5hbWVkZGVzdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUxhYmVsKSB7XG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRab29tKCk7XG4gICAgICB9KTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyZWQnLCAoeDogUGFnZVJlbmRlcmVkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXJlZC5lbWl0KHgpO1xuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VyZW5kZXInLCAoeDogUGFnZVJlbmRlckV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wYWdlUmVuZGVyLmVtaXQoeCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb3dubG9hZCcsICh4OiBQZGZEb3dubG9hZGVkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnBkZkRvd25sb2FkZWQuZW1pdCh4KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY2FsZWNoYW5naW5nJywgKHg6IFNjYWxlQ2hhbmdpbmdFdmVudCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRab29tRmFjdG9yLmVtaXQoeC5zY2FsZSk7XG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh4LnByZXNldFZhbHVlICE9PSAnYXV0bycgJiYgeC5wcmVzZXRWYWx1ZSAhPT0gJ3BhZ2UtZml0JyAmJiB4LnByZXNldFZhbHVlICE9PSAncGFnZS1hY3R1YWwnICYmIHgucHJlc2V0VmFsdWUgIT09ICdwYWdlLXdpZHRoJykge1xuICAgICAgICAgIC8vIGlnbm9yZSByb3VuZGluZyBkaWZmZXJlbmNlc1xuICAgICAgICAgIGlmIChNYXRoLmFicyh4LnByZXZpb3VzU2NhbGUgLSB4LnNjYWxlKSA+IDAuMDAwMDAxKSB7XG4gICAgICAgICAgICB0aGlzLnpvb20gPSB4LnNjYWxlICogMTAwO1xuICAgICAgICAgICAgdGhpcy56b29tQ2hhbmdlLmVtaXQoeC5zY2FsZSAqIDEwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHgucHJldmlvdXNQcmVzZXRWYWx1ZSAhPT0geC5wcmVzZXRWYWx1ZSkge1xuICAgICAgICAgIC8vIGNhbGxlZCB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgb25lIG9mIHRoZSB0ZXh0IHZhbHVlcyBvZiB0aGUgem9vbSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnByZXNldFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdyb3RhdGlvbmNoYW5naW5nJywgKHg6IFBhZ2VzUm90YXRpb25FdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm90YXRpb25DaGFuZ2UuZW1pdCh4LnBhZ2VzUm90YXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbGVpbnB1dGNoYW5nZScsICh4OiBGaWxlSW5wdXRDaGFuZ2VkKSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgaWYgKHguZmlsZUlucHV0LmZpbGVzICYmIHguZmlsZUlucHV0LmZpbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICAvLyBkcmFnIGFuZCBkcm9wXG4gICAgICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHguZmlsZUlucHV0LmZpbGVzWzBdLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZWd1bGFyIGZpbGUgb3BlbiBkaWFsb2dcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSB4LmZpbGVJbnB1dD8udmFsdWU/LnJlcGxhY2UoJ0M6XFxcXGZha2VwYXRoXFxcXCcsICcnKTtcbiAgICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlLmVtaXQocGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJywgKHg6IEhhbmR0b29sQ2hhbmdlZCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZFRvb2wgPSB4LnRvb2wgPT09IFBkZkN1cnNvclRvb2xzLkhBTkQ7XG4gICAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzaWRlYmFydmlld2NoYW5nZWQnLCAoeDogU2lkZWJhcnZpZXdDaGFuZ2UpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XG4gICAgICAgICAgaWYgKHgudmlldyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2lkZWJhclZpZXdDaGFuZ2UuZW1pdCh4LnZpZXcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG9jdW1lbnRsb2FkZWQnLCAocGRmTG9hZGVkRXZlbnQ6IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBwYWdlcyA9IHBkZkxvYWRlZEV2ZW50LnNvdXJjZS5wYWdlc0NvdW50O1xuICAgICAgICAgIHRoaXMucGFnZUxhYmVsID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlID49IHBhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zY3JvbGxTaWduYXR1cmVXYXJuaW5nSW50b1ZpZXcocGRmTG9hZGVkRXZlbnQuc291cmNlLnBkZkRvY3VtZW50KTtcbiAgICAgICAgICBpZiAodGhpcy5maW5kYmFyVmlzaWJsZSkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5vcGVuKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNEaWFsb2dWaXNpYmxlKSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudFByb3BlcnRpZXMub3BlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NwcmVhZG1vZGVjaGFuZ2VkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbW9kZXMgPSBbJ29mZicsICdvZGQnLCAnZXZlbiddIGFzIEFycmF5PFNwcmVhZFR5cGU+O1xuICAgICAgICAgIHRoaXMuc3ByZWFkID0gbW9kZXNbZXZlbnQubW9kZV07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGhpZGVTaWRlYmFyVG9vbGJhciA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdvdXRsaW5lbG9hZGVkJywgaGlkZVNpZGViYXJUb29sYmFyKTtcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2F0dGFjaG1lbnRzbG9hZGVkJywgaGlkZVNpZGViYXJUb29sYmFyKTtcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9ubGF5ZXJyZW5kZXJlZCcsIChldmVudDogQW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYW5ub3RhdGlvbkxheWVyUmVuZGVyZWQuZW1pdChldmVudCk7XG4gICAgICAgICAgdGhpcy5lbmFibGVPckRpc2FibGVGb3JtcyhldmVudC5zb3VyY2UuZGl2LCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9uZWRpdG9ybGF5ZXJyZW5kZXJlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuYW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpKTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd4ZmFsYXllcnJlbmRlcmVkJywgKGV2ZW50KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy54ZmFMYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpKSk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignb3V0bGluZWxvYWRlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMub3V0bGluZUxvYWRlZC5lbWl0KGV2ZW50KSkpO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2F0dGFjaG1lbnRzbG9hZGVkJywgKGV2ZW50KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5hdHRhY2htZW50c2xvYWRlZC5lbWl0KGV2ZW50KSkpO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMubGF5ZXJzbG9hZGVkLmVtaXQoZXZlbnQpKSk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncHJlc2VudGF0aW9ubW9kZWNoYW5nZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uZGVzdHJveUJvb2tNb2RlKCk7XG4gICAgICB9KTtcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRjb250cm9sc3RhdGUnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIGxldCB0eXBlID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUudHlwZSB8fCAnZmluZCc7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdhZ2FpbicpIHtcbiAgICAgICAgICAgIHR5cGUgPSAnZmluZGFnYWluJztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuY2FzZVNlbnNpdGl2ZSxcbiAgICAgICAgICAgIGVudGlyZVdvcmQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmVudGlyZVdvcmQsXG4gICAgICAgICAgICBmaW5kUHJldmlvdXM6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmZpbmRQcmV2aW91cyxcbiAgICAgICAgICAgIGhpZ2hsaWdodEFsbDogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuaGlnaGxpZ2h0QWxsLFxuICAgICAgICAgICAgbWF0Y2hEaWFjcml0aWNzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5tYXRjaERpYWNyaXRpY3MsXG4gICAgICAgICAgICBxdWVyeTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUucXVlcnksXG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoe1xuICAgICAgICAgICAgLi4ucmVzdWx0LFxuICAgICAgICAgICAgY3VycmVudDogeC5tYXRjaGVzQ291bnQuY3VycmVudCxcbiAgICAgICAgICAgIHRvdGFsOiB4Lm1hdGNoZXNDb3VudC50b3RhbCxcbiAgICAgICAgICAgIG1hdGNoZXM6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlcyxcbiAgICAgICAgICAgIG1hdGNoZXNMZW5ndGg6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aCxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUZpbmRTdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVGaW5kU3RhdGUuZW1pdCh4LnN0YXRlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRlZmluZG1hdGNoZXNjb3VudCcsICh4OiBGaW5kUmVzdWx0KSA9PiB7XG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXM7XG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNMZW5ndGggPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXNMZW5ndGg7XG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PlxuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHtcbiAgICAgICAgICAgIGNhc2VTZW5zaXRpdmU6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmNhc2VTZW5zaXRpdmUsXG4gICAgICAgICAgICBlbnRpcmVXb3JkOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5lbnRpcmVXb3JkLFxuICAgICAgICAgICAgZmluZFByZXZpb3VzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5maW5kUHJldmlvdXMsXG4gICAgICAgICAgICBoaWdobGlnaHRBbGw6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmhpZ2hsaWdodEFsbCxcbiAgICAgICAgICAgIG1hdGNoRGlhY3JpdGljczogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUubWF0Y2hEaWFjcml0aWNzLFxuICAgICAgICAgICAgcXVlcnk6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLnF1ZXJ5LFxuICAgICAgICAgICAgdHlwZTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUudHlwZSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IHgubWF0Y2hlc0NvdW50LmN1cnJlbnQsXG4gICAgICAgICAgICB0b3RhbDogeC5tYXRjaGVzQ291bnQudG90YWwsXG4gICAgICAgICAgICBtYXRjaGVzOiB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzLFxuICAgICAgICAgICAgbWF0Y2hlc0xlbmd0aDogeC5tYXRjaGVzQ291bnQubWF0Y2hlc0xlbmd0aCxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoeDogUGFnZU51bWJlckNoYW5nZSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXI7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZUxhYmVsID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWw7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSAhPT0gdGhpcy5wYWdlKSB7XG4gICAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KGN1cnJlbnRQYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZUxhYmVsICE9PSB0aGlzLnBhZ2VMYWJlbCkge1xuICAgICAgICAgICAgICB0aGlzLnBhZ2VMYWJlbENoYW5nZS5lbWl0KGN1cnJlbnRQYWdlTGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB0aGlzLmNoZWNrSGVpZ2h0KCksIDEwMCk7XG4gICAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXG4gICAgICBpZiAoISF0aGlzLl9zcmMpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgIHZlcmJvc2l0eTogdGhpcy5sb2dMZXZlbCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xuICAgICAgICAgIG9wdGlvbnMucmFuZ2UgPSB0aGlzLl9zcmNbJ3JhbmdlJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcbiAgICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzID0gdGhpcy5odHRwSGVhZGVycztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XG4gICAgICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGhvcml6YXRpb24gIT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuaHR0cEhlYWRlcnMpIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB7fTtcblxuICAgICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmJhc2VIcmVmID0gdGhpcy5iYXNlSHJlZjtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ub25FcnJvciA9IChlcnJvcjogRXJyb3IpID0+IHRoaXMucGRmTG9hZGluZ0ZhaWxlZC5lbWl0KGVycm9yKTtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3JjID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLl9zcmM7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3JjIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zLnJhbmdlQ2h1bmtTaXplID0gcGRmRGVmYXVsdE9wdGlvbnMucmFuZ2VDaHVua1NpemU7XG4gICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcbiAgICAgICAgICB0aGlzLnBkZkxvYWRpbmdTdGFydHMuZW1pdCh7fSk7XG4gICAgICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB0aGlzLnNldFpvb20oKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcbiAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xuICAgICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSBOdW1iZXIodGhpcy5wYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxiYXJJbkluZmluaXRlU2Nyb2xsTW9kZShyZXN0b3JlSGVpZ2h0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJyB8fCByZXN0b3JlSGVpZ2h0KSB7XG4gICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJyk7XG4gICAgICBjb25zdCB6b29tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpWzBdO1xuICAgICAgaWYgKHZpZXdlcikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSB2aWV3ZXIuY2xpZW50SGVpZ2h0ICsgMTc7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmltYXJ5TWVudVZpc2libGUpIHtcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKyAzNSArICdweCc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhlaWdodCA+IDE3KSB7XG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh6b29tKSB7XG4gICAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+em9vbSkuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN0b3JlSGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzeW5jIG9wZW5QREYyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5kZXN0cm95Qm9va01vZGUoKTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3RvcFJlbmRlcmluZygpO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlRodW1ibmFpbFZpZXdlci5zdG9wUmVuZGVyaW5nKCk7XG5cbiAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcblxuICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XG4gICAgdGhpcy5mb3JtU3VwcG9ydC5yZXNldCgpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICB2ZXJib3NpdHk6IHRoaXMubG9nTGV2ZWwsXG4gICAgfTtcbiAgICBpZiAodGhpcy5fc3JjPy5bJ3JhbmdlJ10pIHtcbiAgICAgIG9wdGlvbnMucmFuZ2UgPSB0aGlzLl9zcmNbJ3JhbmdlJ107XG4gICAgfVxuICAgIGlmICh0aGlzLmh0dHBIZWFkZXJzKSB7XG4gICAgICBvcHRpb25zLmh0dHBIZWFkZXJzID0gdGhpcy5odHRwSGVhZGVycztcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0aG9yaXphdGlvbikge1xuICAgICAgb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aG9yaXphdGlvbiAhPSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzKSBvcHRpb25zLmh0dHBIZWFkZXJzID0ge307XG5cbiAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICBvcHRpb25zLmJhc2VIcmVmID0gdGhpcy5iYXNlSHJlZjtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcmMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5fc3JjO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XG4gICAgICAgIGlmICh0aGlzLl9zcmMuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIC8vIHNvbWV0aW1lcyBuZ09uSW5pdCgpIGNhbGxzIG9wZW5QZGYyIHRvbyBlYXJseVxuICAgICAgICAgIC8vIHNvIGxldCdzIGlnbm9yZSBlbXB0eSBhcnJheXNcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3JjIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XG4gICAgICAgIGlmICh0aGlzLl9zcmMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgLy8gc29tZXRpbWVzIG5nT25Jbml0KCkgY2FsbHMgb3BlblBkZjIgdG9vIGVhcmx5XG4gICAgICAgICAgLy8gc28gbGV0J3MgaWdub3JlIGVtcHR5IGFycmF5c1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb3B0aW9ucy5yYW5nZUNodW5rU2l6ZSA9IHBkZkRlZmF1bHRPcHRpb25zLnJhbmdlQ2h1bmtTaXplO1xuICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcbiAgICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50IH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RDdXJzb3JUb29sKCkge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IHRoaXMuaGFuZFRvb2wgPyAxIDogMCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBuZ09uRGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjsgLy8gZmFzdCBlc2NhcGUgZm9yIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuICAgIH1cblxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uZGVzdHJveUJvb2tNb2RlKCk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZUaHVtYm5haWxWaWV3ZXI/LnN0b3BSZW5kZXJpbmcoKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsUHJpbnQgPSBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5vcmlnaW5hbFByaW50O1xuICAgIGlmICh3aW5kb3cgJiYgb3JpZ2luYWxQcmludCAmJiAhb3JpZ2luYWxQcmludC50b1N0cmluZygpLmluY2x1ZGVzKCdwcmludFBkZicpKSB7XG4gICAgICB3aW5kb3cucHJpbnQgPSBvcmlnaW5hbFByaW50O1xuICAgIH1cbiAgICBjb25zdCBwcmludENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmludENvbnRhaW5lcicpO1xuICAgIGlmIChwcmludENvbnRhaW5lcikge1xuICAgICAgcHJpbnRDb250YWluZXIucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQocHJpbnRDb250YWluZXIpO1xuICAgIH1cblxuICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWVGcm9tQW5ndWxhciA9IHVuZGVmaW5lZDtcbiAgICAod2luZG93IGFzIGFueSkucmVnaXN0ZXJBY3JvZm9ybUFubm90YXRpb25zID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2h1dHRpbmdEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5pdFRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmluaXRUaW1lb3V0KTtcbiAgICAgIHRoaXMuaW5pdFRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xuICAgICAgLy8gIzgwMiBjbGVhciB0aGUgZm9ybSBkYXRhOyBvdGhlcndpc2UgdGhlIFwiZG93bmxvYWRcIiBkaWFsb2dzIG9wZW5zXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcbiAgICAgIHRoaXMuZm9ybVN1cHBvcnQucmVzZXQoKTtcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uX2NsZWFudXAoKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIGp1c3QgaWdub3JlIGl0XG4gICAgICAgIC8vIGZvciBleGFtcGxlLCB0aGUgc2Vjb25kYXJ5IHRvb2xiYXIgbWF5IGhhdmUgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LCBzb1xuICAgICAgICAvLyB0cnlpbmcgdG8gZGVzdHJveSBpdCByZXN1bHQgaW4gZXJyb3JzXG4gICAgICB9XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2JvdW5kRXZlbnRzKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24udW5iaW5kV2luZG93RXZlbnRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYnVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXM7XG4gICAgICAgIGlmIChidXMpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBidXMuX2xpc3RlbmVycykge1xuICAgICAgICAgICAgaWYgKGJ1cy5fbGlzdGVuZXJzW2tleV0pIHtcbiAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGJ1cy5fbGlzdGVuZXJzW2tleV07XG4gICAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIHRoZSBmb3IgbG9vcCBpcyBuZWNlc3NhcnkgLSBidXRcbiAgICAgICAgICAgICAgLy8gaXQgbWlnaHQgaW1wcm92ZSBnYXJiYWdlIGNvbGxlY3Rpb24gaWYgdGhlIFwibGlzdGVuZXJzXCJcbiAgICAgICAgICAgICAgLy8gYXJyYXkgaXMgc3RvcmVkIHNvbWV3aGVyZSBlbHNlXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxpc3RbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnVzLl9saXN0ZW5lcnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzIGFzIGFueSkgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1ByaW1hcnlNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zaG93VG9vbGJhcikge1xuICAgICAgY29uc3QgdmlzaWJsZSA9XG4gICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd0RyYXdFZGl0b3IgfHxcbiAgICAgICAgdGhpcy5zaG93VGV4dEVkaXRvciB8fFxuICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd09wZW5GaWxlQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd1BhZ2luZ0J1dHRvbnMgfHxcbiAgICAgICAgdGhpcy5zaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dQcmludEJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dQcm9wZXJ0aWVzQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd1JvdGF0ZUJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiB8fFxuICAgICAgICB0aGlzLnNob3dTY3JvbGxpbmdCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93U3ByZWFkQnV0dG9uIHx8XG4gICAgICAgIHRoaXMuc2hvd1NpZGViYXJCdXR0b24gfHxcbiAgICAgICAgdGhpcy5zaG93Wm9vbUJ1dHRvbnM7XG5cbiAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuOyAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcbiAgICB9XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XG4gICAgICBpZiAoJ3NyYycgaW4gY2hhbmdlcyB8fCAnYmFzZTY0U3JjJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlcikge1xuICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnYm9vaycpIHtcbiAgICAgICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyPy5kZXN0cm95Qm9va01vZGUoKTtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LnN0b3BSZW5kZXJpbmcoKTtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZUaHVtYm5haWxWaWV3ZXI/LnN0b3BSZW5kZXJpbmcoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlckluY29tcGxldGVseUluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgIHRoaXMub3BlblBERigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vcGVuUERGMigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Py5hbm5vdGF0aW9uU3RvcmFnZT8ucmVzZXRNb2RpZmllZCgpO1xuICAgICAgICAgICAgdGhpcy5mb3JtU3VwcG9ydC5yZXNldCgpO1xuXG4gICAgICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZz8ub3BlbkZpbGVJbnB1dDtcbiAgICAgICAgICAgIGlmICghaW5wdXRGaWVsZCkge1xuICAgICAgICAgICAgICBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZCkge1xuICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ2VuYWJsZURyYWdBbmREcm9wJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnZmluZGJhclZpc2libGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ZpbmRiYXJWaXNpYmxlJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgncHJvcGVydGllc0RpYWxvZ1Zpc2libGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudFByb3BlcnRpZXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnem9vbScgaW4gY2hhbmdlcykge1xuICAgICAgICBhd2FpdCB0aGlzLnNldFpvb20oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdtYXhab29tJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ21pblpvb20nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWluWm9vbScsIHRoaXMubWluWm9vbSk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnaGFuZFRvb2wnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XG4gICAgICB9XG4gICAgICBpZiAoJ3BhZ2UnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xuICAgICAgICAgIGlmICh0aGlzLnBhZ2UgIT0gUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IHRoaXMucGFnZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgncGFnZUxhYmVsJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xuICAgICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCAhPT0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgncm90YXRpb24nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24pIHtcbiAgICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xuICAgICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ3Njcm9sbE1vZGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSB8fCB0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsKSB7XG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zY3JvbGxNb2RlICE9PSBOdW1iZXIodGhpcy5zY3JvbGxNb2RlKSkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCdhY3RpdmVTaWRlYmFyVmlldycgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5zaWRlYmFyVmlzaWJsZSkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIub3BlbigpO1xuICAgICAgICAgIGNvbnN0IHZpZXcgPSBOdW1iZXIodGhpcy5hY3RpdmVTaWRlYmFyVmlldyk7XG4gICAgICAgICAgaWYgKHZpZXcgPT09IDEgfHwgdmlldyA9PT0gMiB8fCB2aWV3ID09PSAzIHx8IHZpZXcgPT09IDQpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuc3dpdGNoVmlldyh2aWV3LCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignW2FjdGl2ZVNpZGViYXJWaWV3XSBtdXN0IGJlIGFuIGludGVnZXIgdmFsdWUgYmV0d2VlbiAxIGFuZCA0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCdmaWxlbmFtZUZvckRvd25sb2FkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xuICAgICAgfVxuICAgICAgaWYgKCduYW1lZGRlc3QnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UuZ29Ub0Rlc3RpbmF0aW9uKHRoaXMubmFtZWRkZXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3NwcmVhZCcgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAyO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMjtcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDE7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAwO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZmYnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGVUb29sYmFySWZJdElzRW1wdHkoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XG4gICAgfSAvLyBlbmQgb2YgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpXG5cbiAgICBpZiAoJ3ByaW50UmVzb2x1dGlvbicgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnaWdub3JlS2V5Ym9hcmQnIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnaWdub3JlS2V5cycgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdhY2NlcHRLZXlzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3Nob3dCb3JkZXJzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoIWNoYW5nZXNbJ3Nob3dCb3JkZXJzJ10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICBpZiAodGhpcy5zaG93Qm9yZGVycykge1xuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQYWdlQm9yZGVycycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5yZW1vdmVQYWdlQm9yZGVycyA9ICF0aGlzLnNob3dCb3JkZXJzO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB6b29tRXZlbnQgPSB7XG4gICAgICAgICAgICBzb3VyY2U6IHZpZXdlcixcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgICAgICBzY2FsZTogKE51bWJlcih0aGlzLnpvb20pIHwgMTAwKSAvIDEwMCxcbiAgICAgICAgICAgIHByZXNldFZhbHVlOiB0aGlzLnpvb20sXG4gICAgICAgICAgfSBhcyBTY2FsZUNoYW5naW5nRXZlbnQ7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3NjYWxlY2hhbmdpbmcnLCB6b29tRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmRG9jdW1lbnQpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuX3RyYW5zcG9ydC5tZXNzYWdlSGFuZGxlci5zZW5kKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnLCB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCdmb3JtRGF0YScgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKCFjaGFuZ2VzWydmb3JtRGF0YSddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICB0aGlzLmZvcm1TdXBwb3J0LnVwZGF0ZUZvcm1GaWVsZHNJblBkZkNhbGxlZEJ5TmdPbkNoYW5nZXMoY2hhbmdlc1snZm9ybURhdGEnXS5wcmV2aW91c1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJ2VuYWJsZVByaW50JyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoIWNoYW5nZXNbJ2VuYWJsZVByaW50J10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgKCdjdXN0b21GaW5kYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxuICAgICAgKCdjdXN0b21GaW5kYmFyQnV0dG9ucycgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhckJ1dHRvbnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAoJ2N1c3RvbUZpbmRiYXJJbnB1dEFyZWEnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXJJbnB1dEFyZWEnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAoJ2N1c3RvbVRvb2xiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbVRvb2xiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy5kdW1teUNvbXBvbmVudHMpIHtcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgncGFnZVZpZXdNb2RlJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydwYWdlVmlld01vZGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMucGFnZVZpZXdNb2RlID0gY2hhbmdlc1sncGFnZVZpZXdNb2RlJ10uY3VycmVudFZhbHVlO1xuICAgIH1cbiAgICBpZiAoJ3JlcGxhY2VCcm93c2VyUHJpbnQnIGluIGNoYW5nZXMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh0aGlzLnJlcGxhY2VCcm93c2VyUHJpbnQpIHtcbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5wcmludFBERikge1xuICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQcmludCA9IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm9yaWdpbmFsUHJpbnQ7XG4gICAgICAgIGlmIChvcmlnaW5hbFByaW50ICYmICFvcmlnaW5hbFByaW50LnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3ByaW50UGRmJykpIHtcbiAgICAgICAgICB3aW5kb3cucHJpbnQgPSBvcmlnaW5hbFByaW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnZGlzYWJsZUZvcm1zJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLmVuYWJsZU9yRGlzYWJsZUZvcm1zKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNldFpvb20oKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xuICAgIH1cbiAgICAvLyBzb21ldGltZXMgbmdPbkNoYW5nZXMgY2FsbHMgdGhpcyBtZXRob2QgYmVmb3JlIHRoZSBwYWdlIGlzIGluaXRpYWxpemVkLFxuICAgIC8vIHNvIGxldCdzIGNoZWNrIGlmIHRoaXMucm9vdCBpcyBhbHJlYWR5IGRlZmluZWRcbiAgICBpZiAodGhpcy5yb290KSB7XG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgICBsZXQgem9vbUFzTnVtYmVyID0gdGhpcy56b29tO1xuICAgICAgaWYgKFN0cmluZyh6b29tQXNOdW1iZXIpLmVuZHNXaXRoKCclJykpIHtcbiAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKFN0cmluZyh6b29tQXNOdW1iZXIpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgICAgfSBlbHNlIGlmICghaXNOYU4oTnVtYmVyKHpvb21Bc051bWJlcikpKSB7XG4gICAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcih6b29tQXNOdW1iZXIpIC8gMTAwO1xuICAgICAgfVxuICAgICAgaWYgKCF6b29tQXNOdW1iZXIpIHtcbiAgICAgICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZSkge1xuICAgICAgICAgIC8vIEl0J3MgZGlmZmljdWx0IHRvIHByZXZlbnQgY2FsbGluZyB0aGlzIG1ldGhvZCB0byBlYXJseSwgc28gd2UgbmVlZCB0aGlzIGNoZWNrLlxuICAgICAgICAgIC8vIHNldFpvb20oKSBpcyBjYWxsZWQgbGF0ZXIgYWdhaW4sIHdoZW4gdGhlIFBERiBkb2N1bWVudCBoYXMgYmVlbiBsb2FkZWQgYW5kIGl0c1xuICAgICAgICAgIC8vIGZpbmdlcnByaW50IGhhcyBiZWVuIGNhbGN1bGF0ZWQuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgdXNlclNldHRpbmcgPSBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZS5nZXQoJ3pvb20nKTtcbiAgICAgICAgICBpZiAodXNlclNldHRpbmcpIHtcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHVzZXJTZXR0aW5nKSkpIHtcbiAgICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHVzZXJTZXR0aW5nKSAvIDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHpvb21Bc051bWJlciA9IHVzZXJTZXR0aW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB6b29tQXNOdW1iZXIgPSAnYXV0byc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdkZWZhdWx0Wm9vbVZhbHVlJywgem9vbUFzTnVtYmVyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NhbGVEcm9wZG93bkZpZWxkID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcjc2NhbGVTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcbiAgICAgIGlmIChzY2FsZURyb3Bkb3duRmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuem9vbSA9PT0gJ2F1dG8nIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2UtZml0JyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLWFjdHVhbCcgfHwgdGhpcy56b29tID09PSAncGFnZS13aWR0aCcpIHtcbiAgICAgICAgICBzY2FsZURyb3Bkb3duRmllbGQudmFsdWUgPSB0aGlzLnpvb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2NhbGVEcm9wZG93bkZpZWxkLnZhbHVlID0gJ2N1c3RvbSc7XG4gICAgICAgICAgaWYgKHNjYWxlRHJvcGRvd25GaWVsZC5vcHRpb25zKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG9wdGlvbiBvZiBzY2FsZURyb3Bkb3duRmllbGQub3B0aW9ucyBhcyBhbnkpIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKE51bWJlcih6b29tQXNOdW1iZXIpICogMTAwXzAwMCkgLyAxMDAwfSVgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZVZhbHVlID0gem9vbUFzTnVtYmVyID8/ICdhdXRvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XG4gICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHRtbCcpO1xuICAgIGlmIChwZGZWaWV3ZXIgJiYgcGRmVmlld2VyLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRlckNvbnRhaW5lcicpO1xuICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy50b29sYmFyV2lkdGhJblBpeGVscyA9IHdpZHRoO1xuICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50KSB7XG4gICAgICAgICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LmNoZWNrVmlzaWJpbGl0eSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKSk7XG4gICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJyk7XG4gICAgICBpZiAodmlld2VyKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodmlld2VyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNpemVPYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JylcbiAgcHVibGljIG9uQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVBbGxvd2VkO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNjcm9sbFNpZ25hdHVyZVdhcm5pbmdJbnRvVmlldyhwZGY6IFBERkRvY3VtZW50UHJveHkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvKiogVGhpcyBtZXRob2QgaGFzIGJlZW4gaW5zcGlyZWQgYnkgaHR0cHM6Ly9tZWRpdW0uY29tL2ZhY3RvcnktbWluZC9hbmd1bGFyLXBkZi1mb3Jtcy1mYTcyYjE1YzNmYmQuIFRoYW5rcywgSm9ubnkgRm94ISAqL1xuICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZGY/Lm51bVBhZ2VzOyBpKyspIHtcbiAgICAgIC8vIHRyYWNrIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGYuZ2V0UGFnZShpKTtcbiAgICAgIGNvbnN0IGFubm90YXRpb25zID0gYXdhaXQgcGFnZS5nZXRBbm5vdGF0aW9ucygpO1xuXG4gICAgICBhbm5vdGF0aW9ucy5mb3JFYWNoKChhKSA9PiB7XG4gICAgICAgIGlmIChhLmZpZWxkVHlwZSA9PT0gJ1NpZycpIHtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYXNTaWduYXR1cmUgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3ZXJDb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnNjcm9sbEJ5KDAsIC0zMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBwZGY/Lm51bVBhZ2VzIH0gYXMgUGRmTG9hZGVkRXZlbnQpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHpvb21Ub1BhZ2VXaWR0aChldmVudDogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICh0aGlzLmhhbmRUb29sKSB7XG4gICAgICBpZiAoIXBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21zSW5IYW5kTW9kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbXNJblRleHRTZWxlY3Rpb25Nb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBjb25zdCBkZXNpcmVkQ2VudGVyWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgY29uc3QgcHJldmlvdXNTY2FsZSA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jdXJyZW50U2NhbGU7XG5cbiAgICBpZiAodGhpcy56b29tICE9PSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yICYmIHRoaXMuem9vbSArICclJyAhPT0gcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbUZhY3Rvcikge1xuICAgICAgdGhpcy5wcmV2aW91c1pvb20gPSB0aGlzLnpvb207XG4gICAgICB0aGlzLnpvb20gPSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yOyAvLyBieSBkZWZhdWx0OiAncGFnZS13aWR0aCc7XG4gICAgICBhd2FpdCB0aGlzLnNldFpvb20oKTtcbiAgICB9IGVsc2UgaWYgKHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFJlc2V0c1pvb21PblNlY29uZERvdWJsZVRhcCkge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNab29tKSB7XG4gICAgICAgIHRoaXMuem9vbSA9IHRoaXMucHJldmlvdXNab29tO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy56b29tID0gJ3BhZ2Utd2lkdGgnO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U2NhbGUgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY3VycmVudFNjYWxlO1xuICAgIGNvbnN0IHNjYWxlQ29ycmVjdGlvbkZhY3RvciA9IGN1cnJlbnRTY2FsZSAvIHByZXZpb3VzU2NhbGUgLSAxO1xuICAgIGNvbnN0IHJlY3QgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGR5ID0gZGVzaXJlZENlbnRlclkgLSByZWN0LnRvcDtcbiAgICAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLnNjcm9sbFRvcCArPSBkeSAqIHNjYWxlQ29ycmVjdGlvbkZhY3RvcjtcbiAgfVxuXG4gIHByaXZhdGUgZW5hYmxlT3JEaXNhYmxlRm9ybXMoZGl2OiBIVE1MRWxlbWVudCwgZG9Ob3RFbmFibGU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZUZvcm1zICYmIGRvTm90RW5hYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHhmYUxheWVycyA9IEFycmF5LmZyb20oZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy54ZmFMYXllcicpKTtcbiAgICBjb25zdCBhY3JvRm9ybUxheWVycyA9IEFycmF5LmZyb20oZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbm5vdGF0aW9uTGF5ZXInKSk7XG4gICAgY29uc3QgbGF5ZXJzID0geGZhTGF5ZXJzLmNvbmNhdCguLi5hY3JvRm9ybUxheWVycyk7XG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLmZvckVhY2goKHgpID0+ICh4LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlRm9ybXMpKSk7XG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKCh4KSA9PiAoeC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZvcm1zKSkpO1xuICAgIGxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKS5mb3JFYWNoKCh4KSA9PiAoeC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZvcm1zKSkpO1xuICB9XG59XG4iLCI8cGRmLWRhcmstdGhlbWUgKm5nSWY9XCJ0aGVtZSA9PT0gJ2RhcmsnXCI+PC9wZGYtZGFyay10aGVtZT5cbjxwZGYtbGlnaHQtdGhlbWUgKm5nSWY9XCJ0aGVtZSA9PT0gJ2xpZ2h0J1wiPjwvcGRmLWxpZ2h0LXRoZW1lPlxuPHBkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lPjwvcGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWU+XG5cbjxwZGYtZHluYW1pYy1jc3MgW3pvb21dPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIiBbd2lkdGhdPVwidG9vbGJhcldpZHRoSW5QaXhlbHNcIj48L3BkZi1keW5hbWljLWNzcz5cbjxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tUGRmVmlld2VyID8gY3VzdG9tUGRmVmlld2VyIDogZGVmYXVsdFBkZlZpZXdlclwiPjwvbmctY29udGVudD5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0UGRmVmlld2VyPlxuICA8ZGl2IGNsYXNzPVwiem9vbVwiIFtzdHlsZS5oZWlnaHRdPVwibWluSGVpZ2h0ID8gbWluSGVpZ2h0IDogaGVpZ2h0XCIgI3Jvb3Q+XG4gICAgPGRpdiBjbGFzcz1cImh0bWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib2R5IHBkZi1qcy12ZXJzaW9uLXt7IG1ham9yTWlub3JQZGZKc1ZlcnNpb24gfX1cIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiPlxuICAgICAgICA8ZGl2IGlkPVwib3V0ZXJDb250YWluZXJcIiAod2luZG93OnJlc2l6ZSk9XCJvblJlc2l6ZSgpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZyZWUtZmxvYXRpbmctYmFyXCIgKm5nSWY9XCJzaG93RnJlZUZsb2F0aW5nQmFyXCI+XG4gICAgICAgICAgICA8bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbUZyZWVGbG9hdGluZ0JhciA/IGN1c3RvbUZyZWVGbG9hdGluZ0JhciA6IGRlZmF1bHRGcmVlRmxvYXRpbmdCYXJcIj4gPC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwZGYtc2lkZWJhclxuICAgICAgICAgICAgI3BkZnNpZGViYXJcbiAgICAgICAgICAgIFtzaWRlYmFyVmlzaWJsZV09XCJzaWRlYmFyVmlzaWJsZSB8fCBmYWxzZVwiXG4gICAgICAgICAgICBbc2hvd1NpZGViYXJCdXR0b25dPVwic2hvd1NpZGViYXJCdXR0b25cIlxuICAgICAgICAgICAgW2N1c3RvbVNpZGViYXJdPVwiY3VzdG9tU2lkZWJhclwiXG4gICAgICAgICAgICBbY3VzdG9tVGh1bWJuYWlsXT1cImN1c3RvbVRodW1ibmFpbFwiXG4gICAgICAgICAgICAodGh1bWJuYWlsRHJhd24pPVwidGh1bWJuYWlsRHJhd24uZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXG4gICAgICAgICAgICBbc2lkZWJhclBvc2l0aW9uVG9wXT1cInNpZGViYXJQb3NpdGlvblRvcFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvcGRmLXNpZGViYXI+XG4gICAgICAgICAgPGRpdiBpZD1cIm1haW5Db250YWluZXJcIiBbY2xhc3MudG9vbGJhci1oaWRkZW5dPVwiIXByaW1hcnlNZW51VmlzaWJsZVwiPlxuICAgICAgICAgICAgPHBkZi1kdW1teS1jb21wb25lbnRzPjwvcGRmLWR1bW15LWNvbXBvbmVudHM+XG5cbiAgICAgICAgICAgIDxwZGYtdG9vbGJhclxuICAgICAgICAgICAgICAob25Ub29sYmFyTG9hZGVkKT1cIm9uVG9vbGJhckxvYWRlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW3NpZGViYXJWaXNpYmxlXT1cInNpZGViYXJWaXNpYmxlXCJcbiAgICAgICAgICAgICAgW2NsYXNzLnNlcnZlci1zaWRlLXJlbmRlcmluZ109XCJzZXJ2ZXJTaWRlUmVuZGVyaW5nXCJcbiAgICAgICAgICAgICAgW2N1c3RvbVRvb2xiYXJdPVwiY3VzdG9tVG9vbGJhclwiXG4gICAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXG4gICAgICAgICAgICAgIFsocGFnZVZpZXdNb2RlKV09XCJwYWdlVmlld01vZGVcIlxuICAgICAgICAgICAgICBbcHJpbWFyeU1lbnVWaXNpYmxlXT1cInByaW1hcnlNZW51VmlzaWJsZVwiXG4gICAgICAgICAgICAgIFtzY3JvbGxNb2RlXT1cInNjcm9sbE1vZGUgPz8gMFwiXG4gICAgICAgICAgICAgIFtzaG93UHJvcGVydGllc0J1dHRvbl09XCJzaG93UHJvcGVydGllc0J1dHRvblwiXG4gICAgICAgICAgICAgIFtzaG93Qm9va01vZGVCdXR0b25dPVwic2hvd0Jvb2tNb2RlQnV0dG9uXCJcbiAgICAgICAgICAgICAgW3Nob3dEb3dubG9hZEJ1dHRvbl09XCJzaG93RG93bmxvYWRCdXR0b25cIlxuICAgICAgICAgICAgICBbc2hvd0RyYXdFZGl0b3JdPVwic2hvd0RyYXdFZGl0b3JcIlxuICAgICAgICAgICAgICBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b25cIlxuICAgICAgICAgICAgICBbc2hvd0hhbmRUb29sQnV0dG9uXT1cInNob3dIYW5kVG9vbEJ1dHRvblwiXG4gICAgICAgICAgICAgIFtzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvbl09XCJzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvblwiXG4gICAgICAgICAgICAgIFtzaG93SW5maW5pdGVTY3JvbGxCdXR0b25dPVwic2hvd0luZmluaXRlU2Nyb2xsQnV0dG9uXCJcbiAgICAgICAgICAgICAgW3Nob3dPcGVuRmlsZUJ1dHRvbl09XCJzaG93T3BlbkZpbGVCdXR0b25cIlxuICAgICAgICAgICAgICBbc2hvd1BhZ2luZ0J1dHRvbnNdPVwic2hvd1BhZ2luZ0J1dHRvbnNcIlxuICAgICAgICAgICAgICBbc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25dPVwic2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gJiYgcGFnZVZpZXdNb2RlICE9PSAnYm9vaydcIlxuICAgICAgICAgICAgICBbc2hvd1ByaW50QnV0dG9uXT1cInNob3dQcmludEJ1dHRvbiAmJiBlbmFibGVQcmludFwiXG4gICAgICAgICAgICAgIFtzaG93Um90YXRlQnV0dG9uXT1cInNob3dSb3RhdGVCdXR0b25cIlxuICAgICAgICAgICAgICBbc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25dPVwic2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gJiYgIXNlcnZpY2Uuc2Vjb25kYXJ5TWVudUlzRW1wdHlcIlxuICAgICAgICAgICAgICBbc2hvd1NpZGViYXJCdXR0b25dPVwic2hvd1NpZGViYXJCdXR0b25cIlxuICAgICAgICAgICAgICBbc2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uXT1cInNob3dTaW5nbGVQYWdlTW9kZUJ1dHRvblwiXG4gICAgICAgICAgICAgIFtzaG93U3ByZWFkQnV0dG9uXT1cInNob3dTcHJlYWRCdXR0b25cIlxuICAgICAgICAgICAgICBbc2hvd1N0YW1wRWRpdG9yXT1cInNob3dTdGFtcEVkaXRvclwiXG4gICAgICAgICAgICAgIFtzaG93VGV4dEVkaXRvcl09XCJzaG93VGV4dEVkaXRvclwiXG4gICAgICAgICAgICAgIFtzaG93VmVydGljYWxTY3JvbGxCdXR0b25dPVwic2hvd1ZlcnRpY2FsU2Nyb2xsQnV0dG9uXCJcbiAgICAgICAgICAgICAgW3Nob3dXcmFwcGVkU2Nyb2xsQnV0dG9uXT1cInNob3dXcmFwcGVkU2Nyb2xsQnV0dG9uXCJcbiAgICAgICAgICAgICAgW3Nob3dab29tQnV0dG9uc109XCJzaG93Wm9vbUJ1dHRvbnMgJiYgcGFnZVZpZXdNb2RlICE9PSAnYm9vaydcIlxuICAgICAgICAgICAgICBbc3ByZWFkXT1cInNwcmVhZFwiXG4gICAgICAgICAgICAgIFt0ZXh0TGF5ZXJdPVwidGV4dExheWVyXCJcbiAgICAgICAgICAgICAgW3Rvb2xiYXJNYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiXG4gICAgICAgICAgICAgIFt0b29sYmFyV2lkdGhdPVwidG9vbGJhcldpZHRoXCJcbiAgICAgICAgICAgICAgW3pvb21MZXZlbHNdPVwiem9vbUxldmVsc1wiXG4gICAgICAgICAgICAgIFtmaW5kYmFyVmlzaWJsZV09XCJmaW5kYmFyVmlzaWJsZVwiXG4gICAgICAgICAgICA+PC9wZGYtdG9vbGJhcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXIgaGlkZGVuIGRvb3JIYW5nZXJSaWdodFwiIGlkPVwiZWRpdG9yRnJlZVRleHRQYXJhbXNUb29sYmFyXCIgW2NsYXNzLnNlcnZlci1zaWRlLXJlbmRlcmluZ109XCJzZXJ2ZXJTaWRlUmVuZGVyaW5nXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVUZXh0Q29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2ZyZWVfdGV4dF9jb2xvclwiPkZvbnQgQ29sb3I8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiZWRpdG9yRnJlZVRleHRDb2xvclwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zQ29sb3JcIiB0YWJpbmRleD1cIjEwMFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVUZXh0Rm9udFNpemVcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2ZyZWVfdGV4dF9zaXplXCI+Rm9udCBTaXplPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXRvckZyZWVUZXh0Rm9udFNpemVcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMTBcIiBtaW49XCI1XCIgbWF4PVwiMTAwXCIgc3RlcD1cIjFcIiB0YWJpbmRleD1cIjEwMVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvcklua1BhcmFtc1Rvb2xiYXJcIiBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua19jb2xvclwiPkNvbG9yPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBpZD1cImVkaXRvcklua0NvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNDb2xvclwiIHRhYmluZGV4PVwiMTAyXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rVGhpY2tuZXNzXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9pbmtfdGhpY2tuZXNzXCI+VGhpY2tuZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXRvcklua1RoaWNrbmVzc1wiIGNsYXNzPVwiZWRpdG9yUGFyYW1zU2xpZGVyXCIgdmFsdWU9XCIxXCIgbWluPVwiMVwiIG1heD1cIjIwXCIgc3RlcD1cIjFcIiB0YWJpbmRleD1cIjEwM1wiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvcklua09wYWNpdHlcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua19vcGFjaXR5XCI+T3BhY2l0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNTbGlkZXJcIiB2YWx1ZT1cIjEwMFwiIG1pbj1cIjFcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHRhYmluZGV4PVwiMTA0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHBkZi1zZWNvbmRhcnktdG9vbGJhclxuICAgICAgICAgICAgICAjcGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudFxuICAgICAgICAgICAgICBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIlxuICAgICAgICAgICAgICBbY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcl09XCJjdXN0b21TZWNvbmRhcnlUb29sYmFyXCJcbiAgICAgICAgICAgICAgW3NlY29uZGFyeVRvb2xiYXJUb3BdPVwic2Vjb25kYXJ5VG9vbGJhclRvcFwiXG4gICAgICAgICAgICAgIFttb2JpbGVGcmllbmRseVpvb21TY2FsZV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiXG4gICAgICAgICAgICAgIChzcHJlYWRDaGFuZ2UpPVwib25TcHJlYWRDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtsb2NhbGl6YXRpb25Jbml0aWFsaXplZF09XCJsb2NhbGl6YXRpb25Jbml0aWFsaXplZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3BkZi1zZWNvbmRhcnktdG9vbGJhcj5cblxuICAgICAgICAgICAgPHBkZi1maW5kYmFyXG4gICAgICAgICAgICAgIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiXG4gICAgICAgICAgICAgIFtmaW5kYmFyTGVmdF09XCJmaW5kYmFyTGVmdFwiXG4gICAgICAgICAgICAgIFtmaW5kYmFyVG9wXT1cImZpbmRiYXJUb3BcIlxuICAgICAgICAgICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxuICAgICAgICAgICAgICBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b24gfHwgZmFsc2VcIlxuICAgICAgICAgICAgICBbY3VzdG9tRmluZGJhcklucHV0QXJlYV09XCJjdXN0b21GaW5kYmFySW5wdXRBcmVhXCJcbiAgICAgICAgICAgICAgW2N1c3RvbUZpbmRiYXJCdXR0b25zXT1cImN1c3RvbUZpbmRiYXJCdXR0b25zXCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kQ3VycmVudFBhZ2VPbmx5XT1cInNob3dGaW5kQ3VycmVudFBhZ2VPbmx5XCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kRW50aXJlUGhyYXNlXT1cInNob3dGaW5kRW50aXJlUGhyYXNlXCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kRW50aXJlV29yZF09XCJzaG93RmluZEVudGlyZVdvcmRcIlxuICAgICAgICAgICAgICBbc2hvd0ZpbmRGdXp6eVNlYXJjaF09XCJzaG93RmluZEZ1enp5U2VhcmNoXCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kSGlnaGxpZ2h0QWxsXT1cInNob3dGaW5kSGlnaGxpZ2h0QWxsXCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWF0Y2hEaWFjcml0aWNzXT1cInNob3dGaW5kTWF0Y2hEaWFjcml0aWNzXCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWF0Y2hDYXNlXT1cInNob3dGaW5kTWF0Y2hDYXNlXCJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWVzc2FnZXNdPVwic2hvd0ZpbmRNZXNzYWdlc1wiXG4gICAgICAgICAgICAgIFtzaG93RmluZFBhZ2VSYW5nZV09XCJzaG93RmluZFBhZ2VSYW5nZVwiXG4gICAgICAgICAgICAgIFtzaG93RmluZFJlc3VsdHNDb3VudF09XCJzaG93RmluZFJlc3VsdHNDb3VudFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3BkZi1maW5kYmFyPlxuXG4gICAgICAgICAgICA8cGRmLWNvbnRleHQtbWVudT48L3BkZi1jb250ZXh0LW1lbnU+XG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWV3ZXJDb250YWluZXJcIiBbc3R5bGUudG9wXT1cInZpZXdlclBvc2l0aW9uVG9wXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVudmVyaWZpZWQtc2lnbmF0dXJlLXdhcm5pbmdcIiAqbmdJZj1cImhhc1NpZ25hdHVyZSAmJiBzaG93VW52ZXJpZmllZFNpZ25hdHVyZXNcIj5cbiAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgJ3VudmVyaWZpZWRfc2lnbmF0dXJlX3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlRoaXMgUERGIGZpbGUgY29udGFpbnMgYSBkaWdpdGFsIHNpZ25hdHVyZS4gVGhlIFBERiB2aWV3ZXIgY2FuJ3QgdmVyaWZ5IGlmIHRoZSBzaWduYXR1cmUgaXMgdmFsaWQuXG4gICAgICAgICAgICAgICAgUGxlYXNlIGRvd25sb2FkIHRoZSBmaWxlIGFuZCBvcGVuIGl0IGluIEFjcm9iYXQgUmVhZGVyIHRvIHZlcmlmeSB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlwiXG4gICAgICAgICAgICAgICAgICAgIHwgYXN5bmNcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInZpZXdlclwiIGNsYXNzPVwicGRmVmlld2VyXCIgKGRibGNsaWNrKT1cInpvb21Ub1BhZ2VXaWR0aCgkZXZlbnQpXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwZGYtZXJyb3ItbWVzc2FnZT48L3BkZi1lcnJvci1tZXNzYWdlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gbWFpbkNvbnRhaW5lciAtLT5cblxuICAgICAgICAgIDxkaXYgaWQ9XCJkaWFsb2dDb250YWluZXJcIj5cbiAgICAgICAgICAgIDxwZGYtcGFzc3dvcmQtZGlhbG9nPjwvcGRmLXBhc3N3b3JkLWRpYWxvZz5cbiAgICAgICAgICAgIDxwZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+PC9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+XG4gICAgICAgICAgICA8cGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nPjwvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS0gZGlhbG9nQ29udGFpbmVyIC0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBvdXRlckNvbnRhaW5lciAtLT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlSW5wdXRcIiBjbGFzcz1cImhpZGRlblwiIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJwcmludENvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RnJlZUZsb2F0aW5nQmFyPiA8L25nLXRlbXBsYXRlPlxuIl19