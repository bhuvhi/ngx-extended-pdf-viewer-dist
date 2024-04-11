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
        args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-default-theme></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body pdf-js-version-{{ majorMinorPdfJsVersion }}\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"> </ng-content>\r\n          </div>\r\n          <pdf-sidebar\r\n            #pdfsidebar\r\n            [sidebarVisible]=\"sidebarVisible || false\"\r\n            [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\"\r\n            [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\"\r\n          >\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\"\r\n              [sidebarVisible]=\"sidebarVisible\"\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customToolbar]=\"customToolbar\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [(pageViewMode)]=\"pageViewMode\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [scrollMode]=\"scrollMode ?? 0\"\r\n              [showPropertiesButton]=\"showPropertiesButton\"\r\n              [showBookModeButton]=\"showBookModeButton\"\r\n              [showDownloadButton]=\"showDownloadButton\"\r\n              [showDrawEditor]=\"showDrawEditor\"\r\n              [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\"\r\n              [showHorizontalScrollButton]=\"showHorizontalScrollButton\"\r\n              [showInfiniteScrollButton]=\"showInfiniteScrollButton\"\r\n              [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton && pageViewMode !== 'book'\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\"\r\n              [showRotateButton]=\"showRotateButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !service.secondaryMenuIsEmpty\"\r\n              [showSidebarButton]=\"showSidebarButton\"\r\n              [showSinglePageModeButton]=\"showSinglePageModeButton\"\r\n              [showSpreadButton]=\"showSpreadButton\"\r\n              [showStampEditor]=\"showStampEditor\"\r\n              [showTextEditor]=\"showTextEditor\"\r\n              [showVerticalScrollButton]=\"showVerticalScrollButton\"\r\n              [showWrappedScrollButton]=\"showWrappedScrollButton\"\r\n              [showZoomButtons]=\"showZoomButtons && pageViewMode !== 'book'\"\r\n              [spread]=\"spread\"\r\n              [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\"\r\n              [toolbarWidth]=\"toolbarWidth\"\r\n              [zoomLevels]=\"zoomLevels\"\r\n              [findbarVisible]=\"findbarVisible\"\r\n            ></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_color\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_size\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\" max=\"100\" step=\"1\" tabindex=\"101\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_thickness\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\" step=\"1\" tabindex=\"103\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_opacity\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\" step=\"1\" tabindex=\"104\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <pdf-secondary-toolbar\r\n              #pdfSecondaryToolbarComponent\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              (spreadChange)=\"onSpreadChange($event)\"\r\n              [localizationInitialized]=\"localizationInitialized\"\r\n            >\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [findbarLeft]=\"findbarLeft\"\r\n              [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\"\r\n              [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\"\r\n              [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\"\r\n              [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\"\r\n              [showFindMatchDiacritics]=\"showFindMatchDiacritics\"\r\n              [showFindMatchCase]=\"showFindMatchCase\"\r\n              [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\"\r\n              [showFindResultsCount]=\"showFindResultsCount\"\r\n            >\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\" tabindex=\"0\" role=\"document\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                  'unverified_signature_warning'\r\n                    | translate\r\n                      : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                    | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" [class.server-side-rendering]=\"serverSideRendering\" />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}.server-side-rendering,.hidden{display:none}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBR1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBa0J2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9GLE9BQU8sRUFBNEMsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEy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QUFvQjtrQkFEMUIsS0FBSztZQUlDLFdBQVc7a0JBRGpCLEtBQUs7WUFJQyxNQUFNO2tCQURaLEtBQUs7WUFJQyxZQUFZO2tCQURsQixNQUFNO1lBSUEsY0FBYztrQkFEcEIsTUFBTTtZQVVJLElBQUk7a0JBRGQsS0FBSztZQVdDLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxTQUFTO2tCQURmLEtBQUs7WUFJQyxlQUFlO2tCQURyQixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxZQUFZO2tCQURsQixNQUFNO1lBSUEsYUFBYTtrQkFEbkIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLGdCQUFnQjtrQkFEdEIsTUFBTTtZQUlBLFNBQVM7a0JBRGYsS0FBSztZQUlDLGlCQUFpQjtrQkFEdkIsTUFBTTtZQUlBLDJCQUEyQjtrQkFEakMsTUFBTTtZQUlBLHNCQUFzQjtrQkFENUIsTUFBTTtZQUlBLGVBQWU7a0JBRHJCLE1BQU07WUFLQSxJQUFJO2tCQURWLEtBQUs7WUFJQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsVUFBVTtrQkFEaEIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQUlDLE9BQU87a0JBRGIsS0FBSztZQW1ESyxrQkFBa0I7a0JBRDVCLEtBQUs7WUF3Z0RDLGFBQWE7a0JBRG5CLFlBQVk7bUJBQUMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBMb2NhdGlvbiwgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGRmRG9jdW1lbnRMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2RvY3VtZW50LWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IEZpbGVJbnB1dENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9maWxlLWlucHV0LWNoYW5nZWQnO1xyXG5pbXBvcnQgeyBGaW5kUmVzdWx0LCBGaW5kUmVzdWx0TWF0Y2hlc0NvdW50LCBGaW5kU3RhdGUgfSBmcm9tICcuL2V2ZW50cy9maW5kLXJlc3VsdCc7XHJcbmltcG9ydCB7IEhhbmR0b29sQ2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2hhbmR0b29sLWNoYW5nZWQnO1xyXG5pbXBvcnQgeyBQYWdlTnVtYmVyQ2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvcGFnZS1udW1iZXItY2hhbmdlJztcclxuaW1wb3J0IHsgUGFnZVJlbmRlckV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZS1yZW5kZXItZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQYWdlc0xvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZXNSb3RhdGlvbkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtcm90YXRpb24tZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZEb3dubG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtZG93bmxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBkZkxvYWRpbmdTdGFydHNFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkaW5nLXN0YXJ0cy1ldmVudCc7XHJcbmltcG9ydCB7IFBkZlRodW1ibmFpbERyYXduRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtdGh1bWJuYWlsLWRyYXduLWV2ZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3Byb2dyZXNzLWJhci1ldmVudCc7XHJcbmltcG9ydCB7IFNjYWxlQ2hhbmdpbmdFdmVudCB9IGZyb20gJy4vZXZlbnRzL3NjYWxlLWNoYW5naW5nLWV2ZW50JztcclxuaW1wb3J0IHsgU2lkZWJhcnZpZXdDaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9zaWRlYmFydmlldy1jaGFuZ2VkJztcclxuaW1wb3J0IHsgVGV4dExheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3RleHRsYXllci1yZW5kZXJlZCc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBkZkN1cnNvclRvb2xzIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1jdXJzb3ItdG9vbHMnO1xyXG5pbXBvcnQgeyBhc3NldHNVcmwsIGdldFZlcnNpb25TdWZmaXgsIHBkZkRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1kZWZhdWx0LW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBQYWdlVmlld01vZGVUeXBlLCBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50LCBTY3JvbGxNb2RlVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uLCBQREZEb2N1bWVudFByb3h5IH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IFNlcnZpY2VXb3JrZXJPcHRpb25zVHlwZSB9IGZyb20gJy4vb3B0aW9ucy9zZXJ2aWNlLXdvcmtlci1vcHRpb25zJztcclxuaW1wb3J0IHsgVmVyYm9zaXR5TGV2ZWwgfSBmcm9tICcuL29wdGlvbnMvdmVyYm9zaXR5LWxldmVsJztcclxuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVW5pdFRvUHggfSBmcm9tICcuL3VuaXQtdG8tcHgnO1xyXG5cclxuaW1wb3J0IHsgVHJ1c3RlZFR5cGVzV2luZG93IH0gZnJvbSAndHJ1c3RlZC10eXBlcy9saWInO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYW5ub3RhdGlvbi1lZGl0b3ItbGF5ZXItcmVuZGVyZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yRWRpdG9yTW9kZUNoYW5nZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Fubm90YXRpb24tZWRpdG9yLW1vZGUtY2hhbmdlZC1ldmVudCc7XHJcbmltcG9ydCB7IEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgQXR0YWNobWVudExvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYXR0YWNobWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBMYXllcnNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2xheWVycy1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBPdXRsaW5lTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9vdXRsaW5lLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFRvZ2dsZVNpZGViYXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3RvZ2dsZS1zaWRlYmFyLWV2ZW50JztcclxuaW1wb3J0IHsgWGZhTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMveGZhLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgTmd4Rm9ybVN1cHBvcnQgfSBmcm9tICcuL25neC1mb3JtLXN1cHBvcnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyVmlldyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtc2lkZWJhci12aWV3cyc7XHJcbmltcG9ydCB7IFNwcmVhZFR5cGUgfSBmcm9tICcuL29wdGlvbnMvc3ByZWFkLXR5cGUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbmRlY2xhcmUgY29uc3QgU2VydmljZVdvcmtlck9wdGlvbnM6IFNlcnZpY2VXb3JrZXJPcHRpb25zVHlwZTsgLy8gZGVmaW5lZCBpbiB2aWV3ZXIuanNcclxuZGVjbGFyZSBjbGFzcyBSZXNpemVPYnNlcnZlciB7XHJcbiAgY29uc3RydWN0b3IocGFyYW06ICgpID0+IHZvaWQpO1xyXG4gIHB1YmxpYyBvYnNlcnZlKGRpdjogSFRNTEVsZW1lbnQpO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRWxlbWVudEFuZFBvc2l0aW9uIHtcclxuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1EYXRhVHlwZSB7XHJcbiAgW2ZpZWxkTmFtZTogc3RyaW5nXTogbnVsbCB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNJT1MoKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIFsnaVBhZCBTaW11bGF0b3InLCAnaVBob25lIFNpbXVsYXRvcicsICdpUG9kIFNpbXVsYXRvcicsICdpUGFkJywgJ2lQaG9uZScsICdpUG9kJ10uaW5jbHVkZXMobmF2aWdhdG9yLnBsYXRmb3JtKSB8fFxyXG4gICAgLy8gaVBhZCBvbiBpT1MgMTMgZGV0ZWN0aW9uXHJcbiAgICAobmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnTWFjJykgJiYgJ29udG91Y2hlbmQnIGluIGRvY3VtZW50KVxyXG4gICk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBwcml2YXRlIHN0YXRpYyBvcmlnaW5hbFByaW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cucHJpbnQgOiB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluY29tcGxldGVseUluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtU3VwcG9ydCA9IG5ldyBOZ3hGb3JtU3VwcG9ydCgpO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZHVtbXkgY29tcG9uZW50cyBhcmUgaW5zZXJ0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSB1c2VyIGN1c3RvbWl6ZXMgdGhlIHRvb2xiYXJcclxuICAgKiB3aXRob3V0IGFkZGluZyBldmVyeSBvcmlnaW5hbCB0b29sYmFyIGl0ZW0uIFdpdGhvdXQgdGhlIGR1bW15IGNvbXBvbmVudHMsIHRoZVxyXG4gICAqIGluaXRpYWxpemF0aW9uIGNvZGUgb2YgcGRmLmpzIGNyYXNoZXMgYmVjYXVzZSBpdCBhc3N1bWUgdGhhdCBldmVyeSBzdGFuZGFyZCB3aWRnZXQgaXMgdGhlcmUuXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZChQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQpXHJcbiAgcHVibGljIGR1bW15Q29tcG9uZW50czogUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50O1xyXG5cclxuICBAVmlld0NoaWxkKCdyb290JylcclxuICBwdWJsaWMgcm9vdDogRWxlbWVudFJlZjtcclxuXHJcbiAgLyogVUkgdGVtcGxhdGVzICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRmluZGJhcklucHV0QXJlYTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRmluZGJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRmluZGJhckJ1dHRvbnM6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVBkZlZpZXdlcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tU2lkZWJhcjogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tVGh1bWJuYWlsOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GcmVlRmxvYXRpbmdCYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGcmVlRmxvYXRpbmdCYXIgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBlbmFibGVEcmFnQW5kRHJvcCA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBsb2NhbGl6YXRpb25Jbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgZm9ybURhdGEoZm9ybURhdGE6IEZvcm1EYXRhVHlwZSkge1xyXG4gICAgdGhpcy5mb3JtU3VwcG9ydC5mb3JtRGF0YSA9IGZvcm1EYXRhO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGlzYWJsZUZvcm1zID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBnZXQgZm9ybURhdGFDaGFuZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtU3VwcG9ydC5mb3JtRGF0YUNoYW5nZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfcGFnZVZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlID0gJ211bHRpcGxlJztcclxuXHJcbiAgcHVibGljIGJhc2VIcmVmOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGlzIGZsYWcgcHJldmVudHMgdHJ5aW5nIHRvIGxvYWQgYSBmaWxlIHR3aWNlIGlmIHRoZSB1c2VyIHVwbG9hZHMgaXQgdXNpbmcgdGhlIGZpbGUgdXBsb2FkIGRpYWxvZyBvciB2aWEgZHJhZyduJ2Ryb3AgKi9cclxuICBwcml2YXRlIHNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHBhZ2VWaWV3TW9kZSgpOiBQYWdlVmlld01vZGVUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlVmlld01vZGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcGFnZVZpZXdNb2RlKHZpZXdNb2RlOiBQYWdlVmlld01vZGVUeXBlKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBjb25zdCBoYXNDaGFuZ2VkID0gdGhpcy5fcGFnZVZpZXdNb2RlICE9PSB2aWV3TW9kZTtcclxuICAgICAgaWYgKGhhc0NoYW5nZWQpIHtcclxuICAgICAgICBjb25zdCBtdXN0UmVkcmF3ID0gIXRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCAmJiAodGhpcy5fcGFnZVZpZXdNb2RlID09PSAnYm9vaycgfHwgdmlld01vZGUgPT09ICdib29rJyk7XHJcbiAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLl9wYWdlVmlld01vZGUpO1xyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zPy5zZXQoJ3BhZ2VWaWV3TW9kZScsIHRoaXMucGFnZVZpZXdNb2RlKTtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VWaWV3TW9kZSA9IHRoaXMuX3BhZ2VWaWV3TW9kZTtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnBhZ2VWaWV3TW9kZSA9IHRoaXMuX3BhZ2VWaWV3TW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnaW5maW5pdGUtc2Nyb2xsJykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSB8fCB0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLmhvcml6b250YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxNb2RlID0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWw7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBOdW1iZXIodGhpcy5zY3JvbGxNb2RlKSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUoZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmlld01vZGUgIT09ICdtdWx0aXBsZScpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS5wYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxiYXJJbkluZmluaXRlU2Nyb2xsTW9kZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnc2luZ2xlJykge1xyXG4gICAgICAgICAgLy8gc2luY2UgcGRmLmpzLCBvdXIgY3VzdG9tIHNpbmdsZS1wYWdlLW1vZGUgaGFzIGJlZW4gcmVwbGFjZWQgYnkgdGhlIHN0YW5kYXJkIHNjcm9sbE1vZGU9XCJwYWdlXCJcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnBhZ2U7XHJcbiAgICAgICAgICB0aGlzLl9wYWdlVmlld01vZGUgPSB2aWV3TW9kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpZXdNb2RlID09PSAnYm9vaycpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0JvcmRlcnMgPSBmYWxzZTtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgIT09IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobXVzdFJlZHJhdykge1xyXG4gICAgICAgICAgaWYgKHZpZXdNb2RlICE9PSAnYm9vaycpIHtcclxuICAgICAgICAgICAgY29uc3Qgbmd4ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IG5neC5xdWVyeVNlbGVjdG9yKCcjdmlld2VyQ29udGFpbmVyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcnO1xyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnN0eWxlLm1hcmdpblJpZ2h0ID0gJyc7XHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zdHlsZS5tYXJnaW5MZWZ0ID0gJyc7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdlciA9IG5neC5xdWVyeVNlbGVjdG9yKCcjdmlld2VyJykgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZpZXdlci5zdHlsZS5tYXhXaWR0aCA9ICcnO1xyXG4gICAgICAgICAgICB2aWV3ZXIuc3R5bGUubWluV2lkdGggPSAnJztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLm9wZW5QREYyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVZpZXdNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlVmlld01vZGVUeXBlPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJvZ3Jlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPFByb2dyZXNzQmFyRXZlbnQ+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQnKVxyXG4gIHByaXZhdGUgc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudDogUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudDtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGRmc2lkZWJhcicpXHJcbiAgcHJpdmF0ZSBzaWRlYmFyQ29tcG9uZW50OiBQZGZTaWRlYmFyQ29tcG9uZW50O1xyXG5cclxuICAvKiByZWd1bGFyIGF0dHJpYnV0ZXMgKi9cclxuXHJcbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IFVpbnQ4QXJyYXkgfCB7IHJhbmdlOiBhbnkgfSB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNyY0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG5cclxuICBwcml2YXRlIF9zY3JvbGxNb2RlOiBTY3JvbGxNb2RlVHlwZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNjcm9sbE1vZGUoKTogU2Nyb2xsTW9kZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbE1vZGU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2Nyb2xsTW9kZSh2YWx1ZTogU2Nyb2xsTW9kZVR5cGUpIHtcclxuICAgIGlmICh0aGlzLl9zY3JvbGxNb2RlICE9PSB2YWx1ZSkge1xyXG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcikge1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc2Nyb2xsTW9kZSAhPT0gTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBOdW1iZXIodGhpcy5zY3JvbGxNb2RlKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc2Nyb2xsTW9kZSA9IHZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5fc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgIHRoaXMuX3BhZ2VWaWV3TW9kZSA9ICdzaW5nbGUnO1xyXG4gICAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnc2luZ2xlJyB8fCB0aGlzLl9zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ211bHRpcGxlJztcclxuICAgICAgICB0aGlzLnBhZ2VWaWV3TW9kZUNoYW5nZS5lbWl0KHRoaXMucGFnZVZpZXdNb2RlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNjcm9sbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNjcm9sbE1vZGVUeXBlPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBhdXRob3JpemF0aW9uOiBPYmplY3QgfCBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBodHRwSGVhZGVyczogT2JqZWN0IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjb250ZXh0TWVudUFsbG93ZWQgPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY3VycmVudFpvb21GYWN0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgLyoqIFRoaXMgZmllbGQgc3RvcmVzIHRoZSBwcmV2aW91cyB6b29tIGxldmVsIGlmIHRoZSBwYWdlIGlzIGVubGFyZ2VkIHdpdGggYSBkb3VibGUtdGFwIG9yIGRvdWJsZS1jbGljayAqL1xyXG4gIHByaXZhdGUgcHJldmlvdXNab29tOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGVuYWJsZVByaW50ID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJldHdlZW4gaW5pdGlhbGl6aW5nIHRoZSBQREYgdmlld2VyIGFuZCBsb2FkaW5nIHRoZSBQREYgZmlsZS5cclxuICAgKiBNb3N0IHVzZXJzIGNhbiBsZXQgdGhpcyBwYXJhbWV0ZXIgc2FmZWx5IGF0IGl0J3MgZGVmYXVsdCB2YWx1ZSBvZiB6ZXJvLlxyXG4gICAqIFNldCB0aGlzIHRvIDEwMDAgb3IgaGlnaGVyIGlmIHlvdSBydW4gaW50byB0aW1pbmcgcHJvYmxlbXMgKHR5cGljYWxseSBjYXVzZWQgYnkgbG9hZGluZyB0aGUgbG9jYWxlIGZpbGVzXHJcbiAgICogYWZ0ZXIgdGhlIFBERiBmaWxlcywgc28gdGhleSBhcmUgbm90IGF2YWlsYWJsZSB3aGVuIHRoZSBQREYgdmlld2VyIGlzIGluaXRpYWxpemVkKS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBkZWxheUZpcnN0VmlldyA9IDA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUZXh0RWRpdG9yOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTdGFtcEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RHJhd0VkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICAvKiogc3RvcmUgdGhlIHRpbWVvdXQgaWQgc28gaXQgY2FuIGJlIGNhbmNlbGVkIGlmIHVzZXIgbGVhdmVzIHRoZSBwYWdlIGJlZm9yZSB0aGUgUERGIGlzIHNob3duICovXHJcbiAgcHJpdmF0ZSBpbml0VGltZW91dDogYW55O1xyXG5cclxuICAvKiogSG93IG1hbnkgbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBwcmludGVkP1xyXG4gICAqIExlZ2FsIHZhbHVlczogVmVyYm9zaXR5TGV2ZWwuSU5GT1MgKD0gNSksIFZlcmJvc2l0eUxldmVsLldBUk5JTkdTICg9IDEpLCBWZXJib3NpdHlMZXZlbC5FUlJPUlMgKD0gMCkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBsb2dMZXZlbCA9IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyByZWxhdGl2ZUNvb3Jkc09wdGlvbnM6IE9iamVjdCA9IHt9O1xyXG5cclxuICAvKiogVXNlIHRoZSBtaW5pZmllZCAobWluaWZpZWRKU0xpYnJhcmllcz1cInRydWVcIiwgd2hpY2ggaXMgdGhlIGRlZmF1bHQpIG9yIHRoZSB1c2VyLXJlYWRhYmxlIHBkZi5qcyBsaWJyYXJ5IChtaW5pZmllZEpTTGlicmFyaWVzPVwiZmFsc2VcIikgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5pZmllZEpTTGlicmFyaWVzID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XHJcblxyXG4gIC8qKiBvcHRpb24gdG8gaW5jcmVhc2UgKG9yIHJlZHVjZSkgcHJpbnQgcmVzb2x1dGlvbi4gRGVmYXVsdCBpcyAxNTAgKGRwaSkuIFNlbnNpYmxlIHZhbHVlc1xyXG4gICAqIGFyZSAzMDAsIDYwMCwgYW5kIDEyMDAuIE5vdGUgdGhlIGluY3JlYXNlIG1lbW9yeSBjb25zdW1wdGlvbiwgd2hpY2ggbWF5IGV2ZW4gcmVzdWx0IGluIGEgYnJvd3NlciBjcmFzaC4gKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcmludFJlc29sdXRpb24gPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyByb3RhdGlvbjogMCB8IDkwIHwgMTgwIHwgMjcwO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcm90YXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPDAgfCA5MCB8IDE4MCB8IDI3MD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25MYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB4ZmFMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxYZmFMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBvdXRsaW5lTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxPdXRsaW5lTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhdHRhY2htZW50c2xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXR0YWNobWVudExvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgbGF5ZXJzbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxMYXllcnNMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgcHVibGljIGhhc1NpZ25hdHVyZTogYm9vbGVhbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNyYyh1cmw6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgQmxvYiB8IFVpbnQ4QXJyYXkgfCBVUkwgfCB7IHJhbmdlOiBhbnkgfSkge1xyXG4gICAgaWYgKHVybCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsLmJ1ZmZlcjtcclxuICAgIH0gZWxzZSBpZiAodXJsIGluc3RhbmNlb2YgVVJMKSB7XHJcbiAgICAgIHRoaXMuX3NyYyA9IHVybC50b1N0cmluZygpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdXJsIGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICAvLyBhZGRpdGlvbmFsIGNoZWNrIGludHJvZHVjZWQgdG8gc3VwcG9ydCBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc3JjID0gbmV3IFVpbnQ4QXJyYXkocmVhZGVyLnJlc3VsdCBhcyBBcnJheUJ1ZmZlcik7XHJcbiAgICAgICAgICBpZiAodGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIChhc3luYyAoKSA9PiB0aGlzLm9wZW5QREYyKCkpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZWxzZSBvcGVuUERGIGlzIGNhbGxlZCBsYXRlciwgc28gd2UgZG8gbm90aGluZyB0byBwcmV2ZW50IGxvYWRpbmcgdGhlIFBERiBmaWxlIHR3aWNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih1cmwpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XHJcbiAgICAgIGlmICh1cmwubGVuZ3RoID4gOTgwKSB7XHJcbiAgICAgICAgLy8gbWluaW1hbCBsZW5ndGggb2YgYSBiYXNlNjQgZW5jb2RlZCBQREZcclxuICAgICAgICBpZiAodXJsLmxlbmd0aCAlIDQgPT09IDApIHtcclxuICAgICAgICAgIGlmICgvXlthLXpBLVpcXGQvK10rPXswLDJ9JC8udGVzdCh1cmwpKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBVUkwgbG9va3MgbGlrZSBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gSWYgc28sIHBsZWFzZSB1c2UgdGhlIGF0dHJpYnV0ZSBbYmFzZTY0U3JjXSBpbnN0ZWFkIG9mIFtzcmNdJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAodGhpcy5fc3JjIGFzIGFueSkgPSB1cmw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgYmFzZTY0U3JjKGJhc2U2NDogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKGJhc2U2NCkge1xyXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgYmluYXJ5X3N0cmluZyA9IGF0b2IoYmFzZTY0KTtcclxuICAgICAgY29uc3QgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5X3N0cmluZy5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3JjID0gYnl0ZXMuYnVmZmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc3JjID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNvbWJpbmF0aW9uIG9mIGhlaWdodCwgbWluSGVpZ2h0LCBhbmQgYXV0b0hlaWdodCBlbnN1cmVzIHRoZSBQREYgaGVpZ2h0IG9mIHRoZSBQREYgdmlld2VyIGlzIGNhbGN1bGF0ZWQgY29ycmVjdGx5IHdoZW4gdGhlIGhlaWdodCBpcyBhIHBlcmNlbnRhZ2UuXHJcbiAgICogQnkgZGVmYXVsdCwgbWFueSBDU1MgZnJhbWV3b3JrcyBtYWtlIGEgZGl2IHdpdGggMTAwJSBoYXZlIGEgaGVpZ2h0IG9yIHplcm8gcGl4ZWxzLiBjaGVja0hlaWd0aCgpIGZpeGVzIHRoaXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBhdXRvSGVpZ2h0ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1pbkhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwcml2YXRlIF9oZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICcxMDAlJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGhlaWdodChoKSB7XHJcbiAgICB0aGlzLm1pbkhlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYXV0b0hlaWdodCA9IGZhbHNlO1xyXG4gICAgaWYgKGgpIHtcclxuICAgICAgaWYgKGggPT09ICdhdXRvJykge1xyXG4gICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdW5kZWZpbmVkO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGg7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBoZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXNlQnJvd3NlckxvY2FsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCB1c2VCcm93c2VyTG9jYWxlKCkge1xyXG4gICAgcmV0dXJuICEhdGhpcy5fdXNlQnJvd3NlckxvY2FsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGlzIGNvbXBvbmVudHMgYWRkcyBhIGxpbmsgdG8gdGhlIGxvY2FsZSBhc3NldHMuIFRoZSBwZGYgdmlld2VyXHJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXHJcbiAgICogQHBhcmFtIHVzZUJyb3dzZXJMb2NhbGUgYm9vbGVhblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCB1c2VCcm93c2VyTG9jYWxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl91c2VCcm93c2VyTG9jYWxlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmb3JjZVVzaW5nTGVnYWN5RVM1ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGZpbGUgYWZ0ZXIgY2xpY2tpbmcgXCJkb3dubG9hZFwiICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmlsZW5hbWVGb3JEb3dubG9hZDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgdGhlIGtleWJvYXJkIGJpbmRpbmdzIGNvbXBsZXRlbHkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpZ25vcmVLZXlib2FyZCA9IGZhbHNlO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncy4gKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW5hYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MgZXhwbGljaXRseS4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBzZXQsIGV2ZXJ5IG90aGVyIGtleSBiaW5kaW5nIGlzIGlnbm9yZWQuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYWNjZXB0S2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGUgdmlld2VyJ3Mgc3ZnIGltYWdlcyBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBpbWFnZVJlc291cmNlc1BhdGggPSBhc3NldHNVcmwocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKSArICcvaW1hZ2VzLyc7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gcHV0IHRoZWlyIGxvY2FsZSBmb2xkZXIgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9jYWxlRm9sZGVyUGF0aCA9IGFzc2V0c1VybChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpICsgJy9sb2NhbGUnO1xyXG5cclxuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgbG9jYWxlLiBUaGlzIG11c3QgYmUgdGhlIGNvbXBsZXRlIGxvY2FsZSBuYW1lLCBzdWNoIGFzIFwiZXMtRVNcIi4gVGhlIHN0cmluZyBpcyBhbGxvd2VkIHRvIGJlIGFsbCBsb3dlcmNhc2UuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIEJ5IGRlZmF1bHQsIGxpc3RlbmluZyB0byB0aGUgVVJMIGlzIGRlYWN0aXZhdGVkIGJlY2F1c2Ugb2Z0ZW4gdGhlIGFuY2hvciB0YWcgaXMgdXNlZCBmb3IgdGhlIEFuZ3VsYXIgcm91dGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbGlzdGVuVG9VUkwgPSBmYWxzZTtcclxuXHJcbiAgLyoqIE5hdmlnYXRlIHRvIGEgY2VydGFpbiBcIm5hbWVkIGRlc3RpbmF0aW9uXCIgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBuYW1lZGRlc3Q6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIGFsbG93cyB5b3UgdG8gcGFzcyBhIHBhc3N3b3JkIHRvIHJlYWQgcGFzc3dvcmQtcHJvdGVjdGVkIGZpbGVzICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcmVwbGFjZUJyb3dzZXJQcmludCA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBfc2hvd1NpZGViYXJCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIHZpZXdlclBvc2l0aW9uVG9wID0gJzMycHgnO1xyXG5cclxuICAvKiogcGRmLmpzIGNhbiBzaG93IHNpZ25hdHVyZXMsIGJ1dCBmYWlscyB0byB2ZXJpZnkgdGhlbS4gU28gdGhleSBhcmUgc3dpdGNoZWQgb2ZmIGJ5IGRlZmF1bHQuXHJcbiAgICogU2V0IFwiW3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlc11cIj1cInRydWVcIiB0byBkaXNwbGF5IGUtc2lnbmF0dXJlcyBub25ldGhlbGVzcy5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc3RhcnRUYWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTaWRlYmFyQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1NpZGViYXJCdXR0b24oc2hvdzogUmVzcG9uc2l2ZVZpc2liaWxpdHkpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBzaG93O1xyXG4gICAgaWYgKHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uKSB7XHJcbiAgICAgIGNvbnN0IGlzSUUgPSAvbXNpZVxcc3x0cmlkZW50XFwvL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICAgIGxldCBmYWN0b3IgPSAxO1xyXG4gICAgICBpZiAoaXNJRSkge1xyXG4gICAgICAgIGZhY3RvciA9IE51bWJlcigodGhpcy5fbW9iaWxlRnJpZW5kbHlab29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICg2OCAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuZmluZGJhckxlZnQgPSAnMHB4JztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NpZGViYXJWaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIHB1YmxpYyBnZXQgc2lkZWJhclZpc2libGUoKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2lkZWJhclZpc2libGU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzaWRlYmFyVmlzaWJsZSh2YWx1ZTogYm9vbGVhbiB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9zaWRlYmFyVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2lkZWJhclZpc2libGUgPSB2YWx1ZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlNpZGViYXIpIHtcclxuICAgICAgaWYgKHRoaXMuc2lkZWJhclZpc2libGUpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLm9wZW4oKTtcclxuICAgICAgICBjb25zdCB2aWV3ID0gTnVtYmVyKHRoaXMuYWN0aXZlU2lkZWJhclZpZXcpO1xyXG4gICAgICAgIGlmICh2aWV3ID09PSAxIHx8IHZpZXcgPT09IDIgfHwgdmlldyA9PT0gMyB8fCB2aWV3ID09PSA0KSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLnN3aXRjaFZpZXcodmlldywgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1thY3RpdmVTaWRlYmFyVmlld10gbXVzdCBiZSBhbiBpbnRlZ2VyIHZhbHVlIGJldHdlZW4gMSBhbmQgNCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYWN0aXZlU2lkZWJhclZpZXc6IFBkZlNpZGViYXJWaWV3ID0gUGRmU2lkZWJhclZpZXcuT1VUTElORTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFjdGl2ZVNpZGViYXJWaWV3Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZTaWRlYmFyVmlldz4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGZpbmRiYXJWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBwcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcHJvcGVydGllc0RpYWxvZ1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRIaWdobGlnaHRBbGwgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoQ2FzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQ3VycmVudFBhZ2VPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRQYWdlUmFuZ2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVdvcmQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVBocmFzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWF0Y2hEaWFjcml0aWNzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRGdXp6eVNlYXJjaCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kUmVzdWx0c0NvdW50ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNZXNzYWdlcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dab29tQnV0dG9uczogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dQcmludEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGhlbWU6ICdkYXJrJyB8ICdsaWdodCcgfCAnY3VzdG9tJyB8IHN0cmluZyA9ICdsaWdodCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUb29sYmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dWZXJ0aWNhbFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93V3JhcHBlZFNjcm9sbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SW5maW5pdGVTY3JvbGxCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Jvb2tNb2RlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBfaGFuZFRvb2wgPSAhaXNJT1MoKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGhhbmRUb29sKGhhbmRUb29sOiBib29sZWFuKSB7XHJcbiAgICBpZiAoaXNJT1MoKSAmJiBoYW5kVG9vbCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICBcIk9uIGlPUywgdGhlIGhhbmR0b29sIGRvZXNuJ3Qgd29yayByZWxpYWJseS4gUGx1cywgeW91IGRvbid0IG5lZWQgaXQgYmVjYXVzZSB0b3VjaCBnZXN0dXJlcyBhbGxvdyB5b3UgdG8gZGlzdGluZ3Vpc2ggZWFzaWx5IGJldHdlZW4gc3dpcGluZyBhbmQgc2VsZWN0aW5nIHRleHQuIFRoZXJlZm9yZSwgdGhlIGxpYnJhcnkgaWdub3JlcyB5b3VyIHNldHRpbmcuXCJcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faGFuZFRvb2wgPSBoYW5kVG9vbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGFuZFRvb2woKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFuZFRvb2w7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgaGFuZFRvb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1Njcm9sbGluZ0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgZ2V0IHNob3dTY3JvbGxpbmdCdXR0b24oKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdtdWx0aXBsZScpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Nob3dTY3JvbGxpbmdCdXR0b247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2hvd1Njcm9sbGluZ0J1dHRvbih2YWw6IFJlc3BvbnNpdmVWaXNpYmlsaXR5KSB7XHJcbiAgICB0aGlzLl9zaG93U2Nyb2xsaW5nQnV0dG9uID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Qm9yZGVycyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNwcmVhZDogU3ByZWFkVHlwZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRodW1ibmFpbERyYXduID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZUaHVtYm5haWxEcmF3bkV2ZW50PigpO1xyXG5cclxuICBwcml2YXRlIF9wYWdlOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgcGFnZSgpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgcGFnZShwOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmIChwKSB7XHJcbiAgICAgIC8vIHNpbGVudGx5IGNvcGUgd2l0aCBzdHJpbmdzXHJcbiAgICAgIHRoaXMuX3BhZ2UgPSBOdW1iZXIocCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9wYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcGFnZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlTGFiZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VzTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlc0xvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVJlbmRlciA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVJlbmRlckV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZVJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkRvd25sb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkRvd25sb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBkZkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkaW5nU3RhcnRzID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkaW5nU3RhcnRzRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkaW5nRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdGV4dExheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRleHRMYXllclJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhbm5vdGF0aW9uRWRpdG9yTW9kZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEFubm90YXRpb25FZGl0b3JFZGl0b3JNb2RlQ2hhbmdlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgdXBkYXRlRmluZE1hdGNoZXNDb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFJlc3VsdE1hdGNoZXNDb3VudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHVwZGF0ZUZpbmRTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFN0YXRlPigpO1xyXG5cclxuICAvKiogTGVnYWwgdmFsdWVzOiB1bmRlZmluZWQsICdhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCBvciAnNTAnIChvciBhbnkgb3RoZXIgcGVyY2VudGFnZSkgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tOiBzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB6b29tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb21MZXZlbHMgPSBbJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZS1maXQnLCAncGFnZS13aWR0aCcsIDAuNSwgMSwgMS4yNSwgMS41LCAyLCAzLCA0XTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWF4Wm9vbSA9IDEwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5ab29tID0gMC4xO1xyXG5cclxuICAvKiogVGhpcyBhdHRyaWJ1dGUgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXHJcbiAgICovXHJcbiAgcHVibGljIF9tb2JpbGVGcmllbmRseVpvb206IHN0cmluZyA9ICcxMDAlJztcclxuXHJcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcclxuXHJcbiAgcHVibGljIHRvb2xiYXJNYXJnaW5Ub3AgPSAnMHB4JztcclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aCA9ICcxMDAlJztcclxuXHJcbiAgcHJpdmF0ZSB0b29sYmFyOiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIG9uVG9vbGJhckxvYWRlZCh0b29sYmFyRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudG9vbGJhciA9IHRvb2xiYXJFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMy4xNDE1OTI2NTM1OTsgLy8gbWFnaWMgbnVtYmVyIGluZGljYXRpbmcgdGhlIHRvb2xiYXIgc2l6ZSBoYXNuJ3QgYmVlbiBkZXRlcm1pbmVkIHlldFxyXG5cclxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgc2lkZWJhclBvc2l0aW9uVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxyXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2JpbGVGcmllbmRseVpvb207XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHBkZkpzVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFZlcnNpb25TdWZmaXgocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgbWFqb3JNaW5vclBkZkpzVmVyc2lvbigpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZnVsbFZlcnNpb24gPSB0aGlzLnBkZkpzVmVyc2lvbjtcclxuICAgIGNvbnN0IHBvcyA9IGZ1bGxWZXJzaW9uLmxhc3RJbmRleE9mKCcuJyk7XHJcbiAgICByZXR1cm4gZnVsbFZlcnNpb24uc3Vic3RyaW5nKDAsIHBvcykucmVwbGFjZSgnLicsICctJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cclxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSh6b29tOiBzdHJpbmcpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzIC0gdGhlIHR5cGUgY29udmVyc2lvbiBpcyBpbnRlbmRlZFxyXG4gICAgaWYgKHpvb20gPT0gJ3RydWUnKSB7XHJcbiAgICAgIHpvb20gPSAnMTUwJSc7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0cmlwbGUtZXF1YWxzIC0gdGhlIHR5cGUgY29udmVyc2lvbiBpcyBpbnRlbmRlZFxyXG4gICAgfSBlbHNlIGlmICh6b29tID09ICdmYWxzZScgfHwgem9vbSA9PT0gdW5kZWZpbmVkIHx8IHpvb20gPT09IG51bGwpIHtcclxuICAgICAgem9vbSA9ICcxMDAlJztcclxuICAgIH1cclxuICAgIHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbSA9IHpvb207XHJcbiAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgIGlmICghU3RyaW5nKHpvb20pLmluY2x1ZGVzKCclJykpIHtcclxuICAgICAgem9vbSA9IDEwMCAqIE51bWJlcih6b29tKSArICclJztcclxuICAgIH1cclxuICAgIGZhY3RvciA9IE51bWJlcigoem9vbSB8fCAnMTAwJykucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XHJcbiAgICB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gZmFjdG9yO1xyXG4gICAgdGhpcy50b29sYmFyV2lkdGggPSAoMTAwIC8gZmFjdG9yKS50b1N0cmluZygpICsgJyUnO1xyXG4gICAgdGhpcy50b29sYmFyTWFyZ2luVG9wID0gKGZhY3RvciAtIDEpICogMTYgKyAncHgnO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNodXR0aW5nRG93biA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgc2VydmVyU2lkZVJlbmRlcmluZyA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBjYWxjVmlld2VyUG9zaXRpb25Ub3AoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50b29sYmFyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zaWRlYmFyUG9zaXRpb25Ub3AgPSAnMCc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCB0b3AgPSB0aGlzLnRvb2xiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgaWYgKHRvcCA8IDMzKSB7XHJcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMzNweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gdG9wICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmYWN0b3IgPSB0b3AgLyAzMztcclxuXHJcbiAgICBpZiAodGhpcy5wcmltYXJ5TWVudVZpc2libGUpIHtcclxuICAgICAgdGhpcy5zaWRlYmFyUG9zaXRpb25Ub3AgPSAoMzMgKyAzMyAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZGViYXJQb3NpdGlvblRvcCA9ICcwJztcclxuICAgIH1cclxuICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhclRvcCA9ICgzMyArIDM4ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIHRoaXMuZmluZGJhclRvcCA9ICgzMyArIDM4ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcclxuXHJcbiAgICBjb25zdCBmaW5kQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW1hcnlWaWV3RmluZCcpO1xyXG4gICAgaWYgKGZpbmRCdXR0b24pIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyUG9zaXRpb25MZWZ0ID0gdGhpcy50b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIGNvbnN0IGZpbmRCdXR0b25Qb3NpdGlvbiA9IGZpbmRCdXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxlZnQgPSBNYXRoLm1heCgwLCBmaW5kQnV0dG9uUG9zaXRpb24ubGVmdCAtIGNvbnRhaW5lclBvc2l0aW9uTGVmdCk7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSBsZWZ0ICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zaG93U2lkZWJhckJ1dHRvbikge1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gMzQgKyAoMzIgKiBmYWN0b3IpLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICcwJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZCxcclxuICAgIHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHVibGljIHNlcnZpY2U6IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgdGhpcy5iYXNlSHJlZiA9IHRoaXMucGxhdGZvcm1Mb2NhdGlvbi5nZXRCYXNlSHJlZkZyb21ET00oKTtcclxuICAgIHRoaXMuc2VydmljZS5yZWNhbGN1bGF0ZVNpemUkLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUmVzaXplKCkpO1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgdGhpcy5zZXJ2ZXJTaWRlUmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudG9vbGJhcldpZHRoID0gU3RyaW5nKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IG1hdGNoID0gbmF2aWdhdG9yLmFwcFZlcnNpb24ubWF0Y2goL09TIChcXGQrKV8oXFxkKylfPyhcXGQrKT8vKTtcclxuICAgIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkICYmIG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBwYXJzZUludChtYXRjaFsxXSwgMTApIDwgMTQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBuZWVkc0VTNSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaXNJRSA9ICEhKDxhbnk+d2luZG93KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhISg8YW55PmRvY3VtZW50KS5kb2N1bWVudE1vZGU7XHJcbiAgICBjb25zdCBpc0VkZ2UgPSAvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgY29uc3QgaXNJT3MxM09yQmVsb3cgPSB0aGlzLmlPU1ZlcnNpb25SZXF1aXJlc0VTNSgpO1xyXG4gICAgbGV0IG5lZWRzRVM1ID0gdHlwZW9mIFJlYWRhYmxlU3RyZWFtID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgUHJvbWlzZVsnYWxsU2V0dGxlZCddID09PSAndW5kZWZpbmVkJztcclxuICAgIGlmIChuZWVkc0VTNSB8fCBpc0lFIHx8IGlzRWRnZSB8fCBpc0lPczEzT3JCZWxvdyB8fCB0aGlzLmZvcmNlVXNpbmdMZWdhY3lFUzUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIShhd2FpdCB0aGlzLnN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZygpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3VwcG9ydHNPcHRpb25hbENoYWluaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHN1cHBvcnQgPSAoPGFueT53aW5kb3cpLnN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZztcclxuICAgICAgc3VwcG9ydCAhPT0gdW5kZWZpbmVkID8gcmVzb2x2ZShzdXBwb3J0KSA6IHJlc29sdmUodGhpcy5hZGRTY3JpcHRPcENoYWluaW5nU3VwcG9ydCgpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhZGRTY3JpcHRPcENoYWluaW5nU3VwcG9ydCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBpZiAocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyID09PSAnYmxlZWRpbmctZWRnZScpIHtcclxuICAgICAgICBwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXI9XCJhc3NldHNcIjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyICsgJy9vcC1jaGFpbmluZy1zdXBwb3J0LmpzJyk7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICAgIHJlc29sdmUoKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcgYXMgYm9vbGVhbik7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICAoPGFueT53aW5kb3cpLnN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNjcmlwdEVsZW1lbnQoc291cmNlUGF0aDogc3RyaW5nKTogSFRNTFNjcmlwdEVsZW1lbnQge1xyXG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICAgIGNvbnN0IHR0V2luZG93ID0gd2luZG93IGFzIHVua25vd24gYXMgVHJ1c3RlZFR5cGVzV2luZG93O1xyXG4gICAgaWYgKHR0V2luZG93LnRydXN0ZWRUeXBlcykge1xyXG4gICAgICBjb25zdCBzYW5pdGl6ZXIgPSB0dFdpbmRvdy50cnVzdGVkVHlwZXMuY3JlYXRlUG9saWN5KCdmb28nLCB7XHJcbiAgICAgICAgY3JlYXRlU2NyaXB0VVJMOiAoaW5wdXQpID0+IGlucHV0LFxyXG4gICAgICB9KTtcclxuICAgICAgc2NyaXB0LnNyYyA9IHNhbml0aXplci5jcmVhdGVTY3JpcHRVUkwodGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoc291cmNlUGF0aCkpIGFzIGFueTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShzb3VyY2VQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2NyaXB0O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRQZGZKc1BhdGgoYXJ0aWZhY3Q6ICdwZGYnIHwgJ3ZpZXdlcicsIG5lZWRzRVM1OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBzdWZmaXggPSB0aGlzLm1pbmlmaWVkSlNMaWJyYXJpZXMgPyAnLm1pbi5qcycgOiAnLmpzJztcclxuICAgIGNvbnN0IGFzc2V0cyA9IHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcjtcclxuICAgIGNvbnN0IHZlcnNpb25TdWZmaXggPSBnZXRWZXJzaW9uU3VmZml4KGFzc2V0cyk7XHJcbiAgICBjb25zdCBhcnRpZmFjdFBhdGggPSBgLyR7YXJ0aWZhY3R9LWA7XHJcbiAgICBjb25zdCBlczUgPSBuZWVkc0VTNSA/ICctZXM1JyA6ICcnO1xyXG5cclxuICAgIHJldHVybiBhc3NldHMgKyBhcnRpZmFjdFBhdGggKyB2ZXJzaW9uU3VmZml4ICsgZXM1ICsgc3VmZml4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkVmlld2VyKCk6IHZvaWQge1xyXG4gICAgZ2xvYmFsVGhpc1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHZpZXdlclBhdGggPSB0aGlzLmdldFBkZkpzUGF0aCgndmlld2VyJywgbmVlZHNFUzUpO1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudCh2aWV3ZXJQYXRoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZEZlYXR1cmVzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuY3JlYXRlU2NyaXB0RWxlbWVudChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIgKyAnL2FkZGl0aW9uYWwtZmVhdHVyZXMuanMnKTtcclxuICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgZ2xvYmFsVGhpc1snc2V0Tmd4RXh0ZW5kZWRQZGZWaWV3ZXJTb3VyY2UnXSA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NyYyA9IHVybDtcclxuICAgICAgICB0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdCh1cmwpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5hZGRUcmFuc2xhdGlvbnNVbmxlc3NQcm92aWRlZEJ5VGhlVXNlcigpO1xyXG4gICAgICB0aGlzLmZvcm1TdXBwb3J0LnJlZ2lzdGVyRm9ybVN1cHBvcnRXaXRoUGRmanModGhpcy5uZ1pvbmUpO1xyXG4gICAgICB0aGlzLmxvYWRQZGZKcygpO1xyXG4gICAgICB0aGlzLmhpZGVUb29sYmFySWZJdElzRW1wdHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZFBkZkpzKCkge1xyXG4gICAgZ2xvYmFsVGhpc1snbmd4Wm9uZSddID0gdGhpcy5uZ1pvbmU7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmICghZ2xvYmFsVGhpc1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xyXG4gICAgICAgIHRoaXMubmVlZHNFUzUoKS50aGVuKChuZWVkc0VTNSkgPT4ge1xyXG4gICAgICAgICAgaWYgKG5lZWRzRVM1KSB7XHJcbiAgICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMubmVlZHNFUzUpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICAgIFwiSWYgeW91IHNlZSB0aGUgZXJyb3IgbWVzc2FnZSBcXFwiZXhwZWN0ZWQgZXhwcmVzc2lvbiwgZ290ICc9J1xcXCIgYWJvdmU6IHlvdSBjYW4gc2FmZWx5IGlnbm9yZSBpdCBhcyBsb25nIGFzIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLiBJdCBtZWFucyB5b3VyIGJyb3dzZXIgaXMgb3V0LW9mLWRhdGUuIFBsZWFzZSB1cGRhdGUgeW91ciBicm93c2VyIHRvIGJlbmVmaXQgZnJvbSB0aGUgbGF0ZXN0IHNlY3VyaXR5IHVwZGF0ZXMgYW5kIHRvIGVuam95IGEgZmFzdGVyIFBERiB2aWV3ZXIuXCJcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBkZkRlZmF1bHRPcHRpb25zLm5lZWRzRVM1ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzaW5nIHRoZSBFUzUgdmVyc2lvbiBvZiB0aGUgUERGIHZpZXdlci4gWW91ciBQREYgZmlsZXMgc2hvdyBmYXN0ZXIgaWYgeW91IHVwZGF0ZSB5b3VyIGJyb3dzZXIuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5taW5pZmllZEpTTGlicmFyaWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjKCkuZW5kc1dpdGgoJy5taW4uanMnKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYygpO1xyXG4gICAgICAgICAgICAgIHBkZkRlZmF1bHRPcHRpb25zLndvcmtlclNyYyA9ICgpID0+IHNyYy5yZXBsYWNlKCcuanMnLCAnLm1pbi5qcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBwZGZKc1BhdGggPSB0aGlzLmdldFBkZkpzUGF0aCgncGRmJywgbmVlZHNFUzUpO1xyXG4gICAgICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHBkZkpzUGF0aCk7XHJcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIShnbG9iYWxUaGlzIGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9hZFZpZXdlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKCEoZ2xvYmFsVGhpcyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcclxuICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgaWYgKChnbG9iYWxUaGlzIGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5kb0luaXRQREZWaWV3ZXIoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ0FmdGVyVmlld0luaXQoKSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3NpZ25UYWJpbmRleGVzKCkge1xyXG4gICAgaWYgKHRoaXMuc3RhcnRUYWJpbmRleCkge1xyXG4gICAgICBjb25zdCByID0gdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICByLmNsYXNzTGlzdC5hZGQoJ29mZnNjcmVlbicpO1xyXG4gICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KHIpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpO1xyXG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMociwgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQsIFtdKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyKTtcclxuICAgICAgY29uc3QgdG9wUmlnaHRHcmVhdGVyVGhhbkJvdHRvbUxlZnRDb21wYXJhdG9yID0gKGEsIGIpID0+IHtcclxuICAgICAgICBpZiAoYS55IC0gYi55ID4gMTUpIHtcclxuICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYi55IC0gYS55ID4gMTUpIHtcclxuICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEueCAtIGIueDtcclxuICAgICAgfTtcclxuICAgICAgY29uc3Qgc29ydGVkID0gWy4uLmVsZW1lbnRzXS5zb3J0KHRvcFJpZ2h0R3JlYXRlclRoYW5Cb3R0b21MZWZ0Q29tcGFyYXRvcik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc29ydGVkW2ldLmVsZW1lbnQudGFiSW5kZXggPSB0aGlzLnN0YXJ0VGFiaW5kZXggKyBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KHJvb3Q6IEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5YWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5MYXJnZVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTWVkaXVtVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5TbWFsbFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuVGlueVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVhYTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTGFyZ2VWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVNZWRpdW1WaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVTbWFsbFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVRpbnlWaWV3Jyk7XHJcblxyXG4gICAgaWYgKHJvb3QgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAocm9vdC5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb290LmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcclxuICAgICAgICBjb25zdCBjID0gcm9vdC5jaGlsZHJlbi5pdGVtKGkpO1xyXG4gICAgICAgIGlmIChjKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjb3B5OiBFbGVtZW50LCBvcmlnaW5hbDogRWxlbWVudCwgZWxlbWVudHM6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4pOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+IHtcclxuICAgIGlmIChjb3B5IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xyXG4gICAgICBjb25zdCByZWN0ID0gY29weS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3QgZWxlbWVudEFuZFBvcyA9IHtcclxuICAgICAgICBlbGVtZW50OiBvcmlnaW5hbCxcclxuICAgICAgICB4OiBNYXRoLnJvdW5kKHJlY3QubGVmdCksXHJcbiAgICAgICAgeTogTWF0aC5yb3VuZChyZWN0LnRvcCksXHJcbiAgICAgIH0gYXMgRWxlbWVudEFuZFBvc2l0aW9uO1xyXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnRBbmRQb3MpO1xyXG4gICAgfSBlbHNlIGlmIChjb3B5LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcHkuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSBjb3B5LmNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgY29uc3QgbyA9IG9yaWdpbmFsLmNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGMgJiYgbykge1xyXG4gICAgICAgICAgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RFbGVtZW50UG9zaXRpb25zKGMsIG8sIGVsZW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZG9Jbml0UERGVmlld2VyKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xyXG4gICAgICB0aGlzLmxvY2FsaXphdGlvbkluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpO1xyXG4gICAgICAgICAgdGhpcy5hZnRlckxpYnJhcnlJbml0KCk7XHJcbiAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgIHRoaXMuYXNzaWduVGFiaW5kZXhlcygpO1xyXG4gICAgICAgICAgaWYgKHRoaXMucmVwbGFjZUJyb3dzZXJQcmludCkge1xyXG4gICAgICAgICAgICB3aW5kb3cucHJpbnQgPSAod2luZG93IGFzIGFueSkucHJpbnRQREY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB0aGlzLmRlbGF5Rmlyc3RWaWV3KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FmdGVycHJpbnQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYWZ0ZXJQcmludC5lbWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYmVmb3JlUHJpbnQuZW1pdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xyXG5cclxuICAgIGlmICh0aGlzLnNlcnZpY2Uubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgdHJ5aW5nIHRvIG9wZW4gdHdvIGluc3RhbmNlcyBvZiB0aGUgUERGIHZpZXdlci4gTW9zdCBsaWtlbHksIHRoaXMgd2lsbCByZXN1bHQgaW4gZXJyb3JzLlwiKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9uTG9hZGVkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYnZpZXdlcmxvYWRlZCcsIG9uTG9hZGVkKTtcclxuICAgIH07XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG51bGwpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAvLyBUaGlzIGluaXRpYWxpemVzIHRoZSB3ZWJ2aWV3ZXIsIHRoZSBmaWxlIG1heSBiZSBwYXNzZWQgaW4gdG8gaXQgdG8gaW5pdGlhbGl6ZSB0aGUgdmlld2VyIHdpdGggYSBwZGYgZGlyZWN0bHlcclxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgdGhpcy5oaWRlVG9vbGJhcklmSXRJc0VtcHR5KCk7XHJcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IGdsb2JhbFRoaXMud2ViVmlld2VyTG9hZCgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZGVmYXVsdFVybCA9ICcnOyAvLyBJRSBidWdmaXhcclxuICAgICAgICBpZiAodGhpcy5maWxlbmFtZUZvckRvd25sb2FkKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZmlsZW5hbWVGb3JEb3dubG9hZCA9IHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnZW5hYmxlRHJhZ0FuZERyb3AnLCB0aGlzLmVuYWJsZURyYWdBbmREcm9wKTtcclxuICAgICAgICBsZXQgbGFuZ3VhZ2UgPSB0aGlzLmxhbmd1YWdlID09PSAnJyA/IHVuZGVmaW5lZCA6IHRoaXMubGFuZ3VhZ2U7XHJcbiAgICAgICAgaWYgKCFsYW5ndWFnZSkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICBsYW5ndWFnZSA9ICdlbic7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbG9jYWxlJywgbGFuZ3VhZ2UpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2ltYWdlUmVzb3VyY2VzUGF0aCcsIHRoaXMuaW1hZ2VSZXNvdXJjZXNQYXRoKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtaW5ab29tJywgdGhpcy5taW5ab29tKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtYXhab29tJywgdGhpcy5tYXhab29tKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdwYWdlVmlld01vZGUnLCB0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgndmVyYm9zaXR5JywgdGhpcy5sb2dMZXZlbCk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW5pdGlhbFpvb20nLCB0aGlzLnpvb20pO1xyXG5cclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5pc1ZpZXdlckVtYmVkZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcclxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5Jyk7XHJcbiAgICAgICAgaWYgKGJvZHlbMF0pIHtcclxuICAgICAgICAgIGNvbnN0IHRvcExldmVsRWxlbWVudHMgPSBib2R5WzBdLmNoaWxkcmVuO1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IHRvcExldmVsRWxlbWVudHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgY29uc3QgZSA9IHRvcExldmVsRWxlbWVudHMuaXRlbShpKTtcclxuICAgICAgICAgICAgaWYgKGUgJiYgZS5pZCA9PT0gJ3ByaW50Q29udGFpbmVyJykge1xyXG4gICAgICAgICAgICAgIGJvZHlbMF0ucmVtb3ZlQ2hpbGQoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRDb250YWluZXInKTtcclxuICAgICAgICBpZiAocGMpIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0uYXBwZW5kQ2hpbGQocGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZFRyYW5zbGF0aW9uc1VubGVzc1Byb3ZpZGVkQnlUaGVVc2VyKCkge1xyXG4gICAgY29uc3QgbGFuZ0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1t0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xyXG4gICAgY29uc3QgbGFuZ0NvdW50ID0gbGFuZ0xpbmtzLmxlbmd0aDtcclxuICAgIGNvbnN0IGRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2wxMG5cIl0nKTtcclxuICAgIGNvbnN0IHVzZXJQcm92aWRlc1RyYW5zbGF0aW9ucyA9IGxhbmdDb3VudCA+IDAgfHwgISFkaWN0O1xyXG4gICAgaWYgKHRoaXMuX3VzZUJyb3dzZXJMb2NhbGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnVzZUJyb3dzZXJMb2NhbGUgPSAhdXNlclByb3ZpZGVzVHJhbnNsYXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXNlclByb3ZpZGVzVHJhbnNsYXRpb25zKSB7XHJcbiAgICAgIGlmICghdGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIklmIHlvdSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UsIHlvdSBtdXN0IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIGVhc2llc3Qgd2F5IHRvIGRvIHRoaXMgaXMgdG8gYWRkIHRoZW0gdG8gdGhlIGluZGV4Lmh0bWwuJyk7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIFBERiB2aWV3ZXIgaWdub3JlcyB5b3VyIHNldHRpbmcgYW5kIGxvYWRzIHRoZSBkZWZhdWx0IHRyYW5zbGF0aW9ucy4nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBsaW5rID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgIGxpbmsucmVsID0gJ3Jlc291cmNlJztcclxuICAgICAgbGluay50eXBlID0gJ2FwcGxpY2F0aW9uL2wxMG4nO1xyXG4gICAgICBsaW5rLmhyZWYgPSB0aGlzLmxvY2FsZUZvbGRlclBhdGggKyAnL2xvY2FsZS5wcm9wZXJ0aWVzJztcclxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ29yaWdpbicsICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBsaW5rKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy51c2VCcm93c2VyTG9jYWxlICYmIGxhbmdDb3VudCA+IDApIHtcclxuICAgICAgY29uc3QgbyA9IGxhbmdMaW5rc1swXS5hdHRyaWJ1dGVzWydvcmlnaW4nXTtcclxuICAgICAgaWYgKG8gJiYgby52YWx1ZSAhPT0gJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQbGVhc2Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlIGlmIHlvdSBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhpZGVUb29sYmFySWZJdElzRW1wdHkoKSB7XHJcbiAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IHRoaXMuc2hvd1Rvb2xiYXI7XHJcbiAgICBpZiAoIXRoaXMuc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gfHwgdGhpcy5zZXJ2aWNlLnNlY29uZGFyeU1lbnVJc0VtcHR5KSB7XHJcbiAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIE5vdGlmaWVzIGV2ZXJ5IHdpZGdldCB0aGF0IGltcGxlbWVudHMgb25MaWJyYXJ5SW5pdCgpIHRoYXQgdGhlIFBERiB2aWV3ZXIgb2JqZWN0cyBhcmUgYXZhaWxhYmxlICovXHJcbiAgcHJpdmF0ZSBhZnRlckxpYnJhcnlJbml0KCkge1xyXG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0Lm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGVja0hlaWdodCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9oZWlnaHQpIHtcclxuICAgICAgaWYgKGlzTmFOKE51bWJlcih0aGlzLl9oZWlnaHQucmVwbGFjZSgnJScsICcnKSkpKSB7XHJcbiAgICAgICAgLy8gVGhlIGhlaWdodCBpcyBkZWZpbmVkIHdpdGggb25lIG9mIHRoZSB1bml0cyB2aCwgdncsIGVtLCByZW0sIGV0Yy5cclxuICAgICAgICAvLyBTbyB0aGUgaGVpZ2h0IGNoZWNrIGlzbid0IG5lY2Vzc2FyeS5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wZGZqc3ByaW50aW5nXScpKSB7XHJcbiAgICAgIC8vICMxNzAyIHdvcmthcm91bmQgdG8gYSBGaXJlZm94IGJ1Zzogd2hlbiBwcmludGluZywgY29udGFpbmVyLmNsaWVudEhlaWdodCBpcyB0ZW1wb3JhcmlseSAwLFxyXG4gICAgICAvLyBjYXVzaW5nIG5neC1leHRlbmRlZC1wZGYtdmlld2VyIHRvIGRlZmF1bHQgdG8gMTAwIHBpeGVscyBoZWlnaHQuIFNvIGl0J3MgYmV0dGVyXHJcbiAgICAgIC8vIHRvIGRvIG5vdGhpbmcuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3pvb20nKVswXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGlmIChjb250YWluZXIuY2xpZW50SGVpZ2h0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAmJiAhdGhpcy5hdXRvSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICBcIlRoZSBoZWlnaHQgb2YgdGhlIFBERiB2aWV3ZXIgd2lkZ2V0IGlzIHplcm8gcGl4ZWxzLiBQbGVhc2UgY2hlY2sgdGhlIGhlaWdodCBhdHRyaWJ1dGUuIElzIHRoZXJlIGEgc3ludGF4IGVycm9yPyBPciBhcmUgeW91IHVzaW5nIGEgcGVyY2VudGFnZSB3aXRoIGEgQ1NTIGZyYW1ld29yayB0aGF0IGRvZXNuJ3Qgc3VwcG9ydCB0aGlzPyBUaGUgaGVpZ2h0IGlzIGFkanVzdGVkIGF1dG9tYXRlZGx5LlwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRvSGVpZ2h0KSB7XHJcbiAgICAgICAgICBjb25zdCBhdmFpbGFibGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgICAgY29uc3QgdG9wID0gcmVjdC50b3A7XHJcbiAgICAgICAgICBsZXQgbWF4aW11bUhlaWdodCA9IGF2YWlsYWJsZSAtIHRvcDtcclxuICAgICAgICAgIC8vIHRha2UgdGhlIG1hcmdpbnMgYW5kIHBhZGRpbmdzIG9mIHRoZSBwYXJlbnQgY29udGFpbmVycyBpbnRvIGFjY291bnRcclxuICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLmNhbGN1bGF0ZUJvcmRlck1hcmdpbihjb250YWluZXIpO1xyXG4gICAgICAgICAgbWF4aW11bUhlaWdodCAtPSBwYWRkaW5nO1xyXG4gICAgICAgICAgaWYgKG1heGltdW1IZWlnaHQgPiAxMDApIHtcclxuICAgICAgICAgICAgdGhpcy5taW5IZWlnaHQgPSBgJHttYXhpbXVtSGVpZ2h0fXB4YDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluSGVpZ2h0ID0gJzEwMHB4JztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVCb3JkZXJNYXJnaW4oY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IHBhZGRpbmcgPSBVbml0VG9QeC50b1B4KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XHJcbiAgICAgIGNvbnN0IG1hcmdpbiA9IFVuaXRUb1B4LnRvUHgoY29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20pO1xyXG4gICAgICBpZiAoY29udGFpbmVyLnN0eWxlLnpJbmRleCkge1xyXG4gICAgICAgIHJldHVybiBwYWRkaW5nICsgbWFyZ2luO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwYWRkaW5nICsgbWFyZ2luICsgdGhpcy5jYWxjdWxhdGVCb3JkZXJNYXJnaW4oY29udGFpbmVyLnBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25TcHJlYWRDaGFuZ2UobmV3U3ByZWFkOiAnb2ZmJyB8ICdldmVuJyB8ICdvZGQnKTogdm9pZCB7XHJcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3Nhcnkob3B0aW9uczogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50ZXh0TGF5ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAoIXRoaXMuaGFuZFRvb2wpIHtcclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcclxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XHJcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XHJcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID8gcGRmRGVmYXVsdE9wdGlvbnMudGV4dExheWVyTW9kZSA6IDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiB8fCB0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLidcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImhhbmQgdG9vbCAvIHNlbGVjdGlvbiBtb2RlXCIgbWVudSBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIHRoZSBtZW51IGl0ZW1zLidcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLnRleHRMYXllcikge1xyXG4gICAgICAgIC8vIHRvZG86IGlzIHRoaXMgYSByZWR1bmRhbnQgY2hlY2s/XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgcGRmRGVmYXVsdE9wdGlvbnMudGV4dExheWVyTW9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dExheWVyID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZXdGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICh2aWV3RmluZCkge1xyXG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbmRiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZGJhcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xyXG4gICAgICAgICAgICAgIGZpbmRiYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB0b2RvOiBpcyB0aGUgZWxzZSBicmFuY2ggZGVhZCBjb2RlP1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRMYXllciA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nKTtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIG92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCkge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjsgLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICB9XHJcbiAgICBjb25zdCBvcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyBhcyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBwZGZEZWZhdWx0T3B0aW9ucykge1xyXG4gICAgICBvcHRpb25zLnNldChrZXksIHBkZkRlZmF1bHRPcHRpb25zW2tleV0pO1xyXG4gICAgfVxyXG4gICAgb3B0aW9ucy5zZXQoJ2Rpc2FibGVQcmVmZXJlbmNlcycsIHRydWUpO1xyXG4gICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcblxyXG4gICAgb3B0aW9ucy5zZXQoJ2lnbm9yZUtleWJvYXJkJywgdGhpcy5pZ25vcmVLZXlib2FyZCk7XHJcbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5cycsIHRoaXMuaWdub3JlS2V5cyk7XHJcbiAgICBvcHRpb25zLnNldCgnYWNjZXB0S2V5cycsIHRoaXMuYWNjZXB0S2V5cyk7XHJcbiAgICB0aGlzLmFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3Nhcnkob3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSB8fCB0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzY3JvbGxNb2RlT25Mb2FkJywgdGhpcy5zY3JvbGxNb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaWRlYmFyVmlzaWJsZSA9IHRoaXMuc2lkZWJhclZpc2libGU7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG5cclxuICAgIGlmIChzaWRlYmFyVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNpZGViYXJWaWV3T25Mb2FkID0gc2lkZWJhclZpc2libGUgPyAxIDogMDtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gdGhpcy5hY3RpdmVTaWRlYmFyVmlldyA6IFBkZlNpZGViYXJWaWV3Lk5PTkU7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9ucy5zZXQoJ3NpZGViYXJWaWV3T25Mb2FkJywgdGhpcy5zaWRlYmFyVmlzaWJsZSA/IHRoaXMuYWN0aXZlU2lkZWJhclZpZXcgOiAwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNwcmVhZCA9PT0gJ2V2ZW4nKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMik7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAxKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZGQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMCk7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcmludFJlc29sdXRpb24pIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNob3dCb3JkZXJzID09PSBmYWxzZSkge1xyXG4gICAgICBvcHRpb25zLnNldCgncmVtb3ZlUGFnZUJvcmRlcnMnLCAhdGhpcy5zaG93Qm9yZGVycyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wZW5QREYoKSB7XHJcbiAgICBTZXJ2aWNlV29ya2VyT3B0aW9ucy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcztcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5lbmFibGVQcmludCA9IHRoaXMuZW5hYmxlUHJpbnQ7XHJcbiAgICB0aGlzLnNlcnZpY2Uubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5fc3JjKSB7XHJcbiAgICAgIHRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICBpZiAoIXRoaXMubGlzdGVuVG9VUkwpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5zZXRIYXNoID0gZnVuY3Rpb24gKCkge307XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pbml0VGltZW91dCA9IG51bGw7XHJcbiAgICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3RvZ2dsZVNpZGViYXInLCAoeDogVG9nZ2xlU2lkZWJhckV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2lkZWJhclZpc2libGUgPSB4LnZpc2libGU7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aXNpYmxlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnRleHRMYXllclJlbmRlcmVkLmVtaXQoeCkpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9uZWRpdG9ybW9kZWNoYW5nZWQnLCAoeDogQW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQpID0+IHtcclxuICAgICAgICAvLyB3ZSdyZSB1c2luZyBhIHRpbWVvdXQgaGVyZSB0byBtYWtlIHN1cmUgdGhlIGVkaXRvciBpcyBhbHJlYWR5IHZpc2libGVcclxuICAgICAgICAvLyB3aGVuIHRoZSBldmVudCBpcyBjYXVnaHQuIFBkZi5qcyBmaXJlcyBpdCBhIGJpdCBlYXJseS5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuYW5ub3RhdGlvbkVkaXRvck1vZGVDaGFuZ2VkLmVtaXQoeCkpO1xyXG4gICAgICAgIGlmICh4Lm1vZGUgPT09IDApIHtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItcHJldmVudC10b3VjaC1tb3ZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXItcHJldmVudC10b3VjaC1tb3ZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY3JvbGxtb2RlY2hhbmdlZCcsICh4OiBTY3JvbGxNb2RlQ2hhbmdlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3Njcm9sbE1vZGUgPSB4Lm1vZGU7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbE1vZGVDaGFuZ2UuZW1pdCh4Lm1vZGUpO1xyXG4gICAgICAgICAgaWYgKHgubW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCgnc2luZ2xlJyk7XHJcbiAgICAgICAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gJ3NpbmdsZSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcm9ncmVzcycsICh4OiBQcm9ncmVzc0JhckV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucHJvZ3Jlc3MuZW1pdCh4KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZmluZGJhcmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbmRiYXJWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmZpbmRiYXJWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZmluZGJhcm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmluZGJhclZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5maW5kYmFyVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncHJvcGVydGllc2RpYWxvZ2Nsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncHJvcGVydGllc2RpYWxvZ29wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGVDaGFuZ2UuZW1pdCh0cnVlKSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VzbG9hZGVkJywgKHg6IFBhZ2VzTG9hZGVkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wYWdlc0xvYWRlZC5lbWl0KHgpKTtcclxuICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5yb3RhdGlvbiAhPT0gdW5kZWZpbmVkICYmIHRoaXMucm90YXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xyXG4gICAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLmdvVG9EZXN0aW5hdGlvbih0aGlzLm5hbWVkZGVzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlKSB7XHJcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IE51bWJlcih0aGlzLnBhZ2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwgPSB0aGlzLnBhZ2VMYWJlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VyZW5kZXJlZCcsICh4OiBQYWdlUmVuZGVyZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXJlZC5lbWl0KHgpO1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVTY3JvbGxiYXJJbkluZmluaXRlU2Nyb2xsTW9kZShmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcicsICh4OiBQYWdlUmVuZGVyRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wYWdlUmVuZGVyLmVtaXQoeCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Rvd25sb2FkJywgKHg6IFBkZkRvd25sb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBkZkRvd25sb2FkZWQuZW1pdCh4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY2FsZWNoYW5naW5nJywgKHg6IFNjYWxlQ2hhbmdpbmdFdmVudCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUZhY3Rvci5lbWl0KHguc2NhbGUpO1xyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh4LnByZXNldFZhbHVlICE9PSAnYXV0bycgJiYgeC5wcmVzZXRWYWx1ZSAhPT0gJ3BhZ2UtZml0JyAmJiB4LnByZXNldFZhbHVlICE9PSAncGFnZS1hY3R1YWwnICYmIHgucHJlc2V0VmFsdWUgIT09ICdwYWdlLXdpZHRoJykge1xyXG4gICAgICAgICAgLy8gaWdub3JlIHJvdW5kaW5nIGRpZmZlcmVuY2VzXHJcbiAgICAgICAgICBpZiAoTWF0aC5hYnMoeC5wcmV2aW91c1NjYWxlIC0geC5zY2FsZSkgPiAwLjAwMDAwMSkge1xyXG4gICAgICAgICAgICB0aGlzLnpvb20gPSB4LnNjYWxlICogMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnNjYWxlICogMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHgucHJldmlvdXNQcmVzZXRWYWx1ZSAhPT0geC5wcmVzZXRWYWx1ZSkge1xyXG4gICAgICAgICAgLy8gY2FsbGVkIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBvbmUgb2YgdGhlIHRleHQgdmFsdWVzIG9mIHRoZSB6b29tIHNlbGVjdCBkcm9wZG93blxyXG4gICAgICAgICAgdGhpcy56b29tQ2hhbmdlLmVtaXQoeC5wcmVzZXRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdyb3RhdGlvbmNoYW5naW5nJywgKHg6IFBhZ2VzUm90YXRpb25FdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQoeC5wYWdlc1JvdGF0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaWxlaW5wdXRjaGFuZ2UnLCAoeDogRmlsZUlucHV0Q2hhbmdlZCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoeC5maWxlSW5wdXQuZmlsZXMgJiYgeC5maWxlSW5wdXQuZmlsZXMubGVuZ3RoID49IDEpIHtcclxuICAgICAgICAgICAgLy8gZHJhZyBhbmQgZHJvcFxyXG4gICAgICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHguZmlsZUlucHV0LmZpbGVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcmVndWxhciBmaWxlIG9wZW4gZGlhbG9nXHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSB4LmZpbGVJbnB1dD8udmFsdWU/LnJlcGxhY2UoJ0M6XFxcXGZha2VwYXRoXFxcXCcsICcnKTtcclxuICAgICAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdChwYXRoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdjdXJzb3J0b29sY2hhbmdlZCcsICh4OiBIYW5kdG9vbENoYW5nZWQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5oYW5kVG9vbCA9IHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORDtcclxuICAgICAgICAgIHRoaXMuaGFuZFRvb2xDaGFuZ2UuZW1pdCh4LnRvb2wgPT09IFBkZkN1cnNvclRvb2xzLkhBTkQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzaWRlYmFydmlld2NoYW5nZWQnLCAoeDogU2lkZWJhcnZpZXdDaGFuZ2UpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaWRlYmFyVmlzaWJsZUNoYW5nZS5lbWl0KHgudmlldyA+IDApO1xyXG4gICAgICAgICAgaWYgKHgudmlldyA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTaWRlYmFyVmlld0NoYW5nZS5lbWl0KHgudmlldyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhckNvbXBvbmVudC5zaG93VG9vbGJhcldoZW5OZWNlc3NhcnkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG9jdW1lbnRsb2FkZWQnLCAocGRmTG9hZGVkRXZlbnQ6IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcGFnZXMgPSBwZGZMb2FkZWRFdmVudC5zb3VyY2UucGFnZXNDb3VudDtcclxuICAgICAgICAgIHRoaXMucGFnZUxhYmVsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UgPj0gcGFnZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlID0gcGFnZXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFNpZ25hdHVyZVdhcm5pbmdJbnRvVmlldyhwZGZMb2FkZWRFdmVudC5zb3VyY2UucGRmRG9jdW1lbnQpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmluZGJhclZpc2libGUpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5vcGVuKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudFByb3BlcnRpZXMub3BlbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzcHJlYWRtb2RlY2hhbmdlZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBtb2RlcyA9IFsnb2ZmJywgJ29kZCcsICdldmVuJ10gYXMgQXJyYXk8U3ByZWFkVHlwZT47XHJcbiAgICAgICAgICB0aGlzLnNwcmVhZCA9IG1vZGVzW2V2ZW50Lm1vZGVdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IGhpZGVTaWRlYmFyVG9vbGJhciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2lkZWJhckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpZGViYXJDb21wb25lbnQuc2hvd1Rvb2xiYXJXaGVuTmVjZXNzYXJ5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignb3V0bGluZWxvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYXR0YWNobWVudHNsb2FkZWQnLCBoaWRlU2lkZWJhclRvb2xiYXIpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmxheWVycmVuZGVyZWQnLCAoZXZlbnQ6IEFubm90YXRpb25MYXllclJlbmRlcmVkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZC5lbWl0KGV2ZW50KTtcclxuICAgICAgICAgIHRoaXMuZW5hYmxlT3JEaXNhYmxlRm9ybXMoZXZlbnQuc291cmNlLmRpdiwgdHJ1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYW5ub3RhdGlvbmVkaXRvcmxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLmFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpKSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd4ZmFsYXllcnJlbmRlcmVkJywgKGV2ZW50KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy54ZmFMYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpKSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdvdXRsaW5lbG9hZGVkJywgKGV2ZW50KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5vdXRsaW5lTG9hZGVkLmVtaXQoZXZlbnQpKSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhdHRhY2htZW50c2xvYWRlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuYXR0YWNobWVudHNsb2FkZWQuZW1pdChldmVudCkpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2xheWVyc2xvYWRlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMubGF5ZXJzbG9hZGVkLmVtaXQoZXZlbnQpKSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcmVzZW50YXRpb25tb2RlY2hhbmdlZCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uZGVzdHJveUJvb2tNb2RlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRjb250cm9sc3RhdGUnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgdHlwZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLnR5cGUgfHwgJ2ZpbmQnO1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdhZ2FpbicpIHtcclxuICAgICAgICAgICAgdHlwZSA9ICdmaW5kYWdhaW4nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBjYXNlU2Vuc2l0aXZlOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5jYXNlU2Vuc2l0aXZlLFxyXG4gICAgICAgICAgICBlbnRpcmVXb3JkOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5lbnRpcmVXb3JkLFxyXG4gICAgICAgICAgICBmaW5kUHJldmlvdXM6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmZpbmRQcmV2aW91cyxcclxuICAgICAgICAgICAgaGlnaGxpZ2h0QWxsOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5oaWdobGlnaHRBbGwsXHJcbiAgICAgICAgICAgIG1hdGNoRGlhY3JpdGljczogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUubWF0Y2hEaWFjcml0aWNzLFxyXG4gICAgICAgICAgICBxdWVyeTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUucXVlcnksXHJcbiAgICAgICAgICAgIHR5cGUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoe1xyXG4gICAgICAgICAgICAuLi5yZXN1bHQsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IHgubWF0Y2hlc0NvdW50LmN1cnJlbnQsXHJcbiAgICAgICAgICAgIHRvdGFsOiB4Lm1hdGNoZXNDb3VudC50b3RhbCxcclxuICAgICAgICAgICAgbWF0Y2hlczogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzLFxyXG4gICAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXNMZW5ndGgsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy51cGRhdGVGaW5kU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaW5kU3RhdGUuZW1pdCh4LnN0YXRlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGVmaW5kbWF0Y2hlc2NvdW50JywgKHg6IEZpbmRSZXN1bHQpID0+IHtcclxuICAgICAgICB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuX3BhZ2VNYXRjaGVzO1xyXG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNMZW5ndGggPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXNMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh7XHJcbiAgICAgICAgICAgIGNhc2VTZW5zaXRpdmU6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmNhc2VTZW5zaXRpdmUsXHJcbiAgICAgICAgICAgIGVudGlyZVdvcmQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmVudGlyZVdvcmQsXHJcbiAgICAgICAgICAgIGZpbmRQcmV2aW91czogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuZmluZFByZXZpb3VzLFxyXG4gICAgICAgICAgICBoaWdobGlnaHRBbGw6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmhpZ2hsaWdodEFsbCxcclxuICAgICAgICAgICAgbWF0Y2hEaWFjcml0aWNzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5tYXRjaERpYWNyaXRpY3MsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5xdWVyeSxcclxuICAgICAgICAgICAgdHlwZTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUudHlwZSxcclxuICAgICAgICAgICAgY3VycmVudDogeC5tYXRjaGVzQ291bnQuY3VycmVudCxcclxuICAgICAgICAgICAgdG90YWw6IHgubWF0Y2hlc0NvdW50LnRvdGFsLFxyXG4gICAgICAgICAgICBtYXRjaGVzOiB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzLFxyXG4gICAgICAgICAgICBtYXRjaGVzTGVuZ3RoOiB4Lm1hdGNoZXNDb3VudC5tYXRjaGVzTGVuZ3RoLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoeDogUGFnZU51bWJlckNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhZ2VMYWJlbCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlICE9PSB0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlTGFiZWwgIT09IHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTGFiZWxDaGFuZ2UuZW1pdChjdXJyZW50UGFnZUxhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gdGhpcy5jaGVja0hlaWdodCgpLCAxMDApO1xyXG4gICAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXHJcbiAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyY1sncmFuZ2UnXSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmF1dGhvcml6YXRpb24gIT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5odHRwSGVhZGVycykgb3B0aW9ucy5odHRwSGVhZGVycyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvcHRpb25zLmJhc2VIcmVmID0gdGhpcy5iYXNlSHJlZjtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vbkVycm9yID0gKGVycm9yOiBFcnJvcikgPT4gdGhpcy5wZGZMb2FkaW5nRmFpbGVkLmVtaXQoZXJyb3IpO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBvcHRpb25zLnVybCA9IHRoaXMuX3NyYztcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3JjIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHRoaXMuX3NyYztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9wdGlvbnMucmFuZ2VDaHVua1NpemUgPSBwZGZEZWZhdWx0T3B0aW9ucy5yYW5nZUNodW5rU2l6ZTtcclxuICAgICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4ob3B0aW9ucyk7XHJcbiAgICAgICAgICB0aGlzLnBkZkxvYWRpbmdTdGFydHMuZW1pdCh7fSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHRoaXMuc2V0Wm9vbSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVTY3JvbGxiYXJJbkluZmluaXRlU2Nyb2xsTW9kZShyZXN0b3JlSGVpZ2h0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdpbmZpbml0ZS1zY3JvbGwnIHx8IHJlc3RvcmVIZWlnaHQpIHtcclxuICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpO1xyXG4gICAgICBjb25zdCB6b29tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpWzBdO1xyXG4gICAgICBpZiAodmlld2VyKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgPT09ICdpbmZpbml0ZS1zY3JvbGwnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHZpZXdlci5jbGllbnRIZWlnaHQgKyAxNztcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKyAzNSArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGVpZ2h0ID4gMTcpIHtcclxuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWlnaHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh6b29tKSB7XHJcbiAgICAgICAgICAgICAgKDxIVE1MRWxlbWVudD56b29tKS5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXN0b3JlSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0hlaWdodCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgb3BlblBERjIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmRlc3Ryb3lCb29rTW9kZSgpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnN0b3BSZW5kZXJpbmcoKTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlRodW1ibmFpbFZpZXdlci5zdG9wUmVuZGVyaW5nKCk7XHJcblxyXG4gICAgLy8gIzgwMiBjbGVhciB0aGUgZm9ybSBkYXRhOyBvdGhlcndpc2UgdGhlIFwiZG93bmxvYWRcIiBkaWFsb2dzIG9wZW5zXHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcclxuXHJcbiAgICBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xyXG4gICAgdGhpcy5mb3JtU3VwcG9ydC5yZXNldCgpO1xyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgIHZlcmJvc2l0eTogdGhpcy5sb2dMZXZlbCxcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5fc3JjPy5bJ3JhbmdlJ10pIHtcclxuICAgICAgb3B0aW9ucy5yYW5nZSA9IHRoaXMuX3NyY1sncmFuZ2UnXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmh0dHBIZWFkZXJzKSB7XHJcbiAgICAgIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB0aGlzLmh0dHBIZWFkZXJzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0aG9yaXphdGlvbikge1xyXG4gICAgICBvcHRpb25zLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG4gICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aG9yaXphdGlvbiAhPSAnYm9vbGVhbicpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMuaHR0cEhlYWRlcnMpIG9wdGlvbnMuaHR0cEhlYWRlcnMgPSB7fTtcclxuXHJcbiAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycy5BdXRob3JpemF0aW9uID0gdGhpcy5hdXRob3JpemF0aW9uO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvcHRpb25zLmJhc2VIcmVmID0gdGhpcy5iYXNlSHJlZjtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3JjID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5fc3JjO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgIGlmICh0aGlzLl9zcmMuYnl0ZUxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gc29tZXRpbWVzIG5nT25Jbml0KCkgY2FsbHMgb3BlblBkZjIgdG9vIGVhcmx5XHJcbiAgICAgICAgICAvLyBzbyBsZXQncyBpZ25vcmUgZW1wdHkgYXJyYXlzXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyYy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIC8vIHNvbWV0aW1lcyBuZ09uSW5pdCgpIGNhbGxzIG9wZW5QZGYyIHRvbyBlYXJseVxyXG4gICAgICAgICAgLy8gc28gbGV0J3MgaWdub3JlIGVtcHR5IGFycmF5c1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zLnJhbmdlQ2h1bmtTaXplID0gcGRmRGVmYXVsdE9wdGlvbnMucmFuZ2VDaHVua1NpemU7XHJcbiAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4ob3B0aW9ucyk7XHJcbiAgICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50IH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5wZGZMb2FkaW5nRmFpbGVkLmVtaXQoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RDdXJzb3JUb29sKCkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hjdXJzb3J0b29sJywgeyB0b29sOiB0aGlzLmhhbmRUb29sID8gMSA6IDAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbmdPbkRlc3Ryb3koKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuOyAvLyBmYXN0IGVzY2FwZSBmb3Igc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LmRlc3Ryb3lCb29rTW9kZSgpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlRodW1ibmFpbFZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xyXG5cclxuICAgIGNvbnN0IG9yaWdpbmFsUHJpbnQgPSBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5vcmlnaW5hbFByaW50O1xyXG4gICAgaWYgKHdpbmRvdyAmJiBvcmlnaW5hbFByaW50ICYmICFvcmlnaW5hbFByaW50LnRvU3RyaW5nKCkuaW5jbHVkZXMoJ3ByaW50UGRmJykpIHtcclxuICAgICAgd2luZG93LnByaW50ID0gb3JpZ2luYWxQcmludDtcclxuICAgIH1cclxuICAgIGNvbnN0IHByaW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW50Q29udGFpbmVyJyk7XHJcbiAgICBpZiAocHJpbnRDb250YWluZXIpIHtcclxuICAgICAgcHJpbnRDb250YWluZXIucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQocHJpbnRDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICh3aW5kb3cgYXMgYW55KS5nZXRGb3JtVmFsdWVGcm9tQW5ndWxhciA9IHVuZGVmaW5lZDtcclxuICAgICh3aW5kb3cgYXMgYW55KS5yZWdpc3RlckFjcm9mb3JtQW5ub3RhdGlvbnMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNodXR0aW5nRG93biA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmluaXRUaW1lb3V0KSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmluaXRUaW1lb3V0KTtcclxuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlPy5yZXNldE1vZGlmaWVkKCk7XHJcbiAgICAgIHRoaXMuZm9ybVN1cHBvcnQucmVzZXQoKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLl9jbGVhbnVwKCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgLy8ganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAvLyBmb3IgZXhhbXBsZSwgdGhlIHNlY29uZGFyeSB0b29sYmFyIG1heSBoYXZlIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldCwgc29cclxuICAgICAgICAvLyB0cnlpbmcgdG8gZGVzdHJveSBpdCByZXN1bHQgaW4gZXJyb3JzXHJcbiAgICAgIH1cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XHJcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2JvdW5kRXZlbnRzKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRXaW5kb3dFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXM7XHJcbiAgICAgICAgaWYgKGJ1cykge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24udW5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBidXMuX2xpc3RlbmVycykge1xyXG4gICAgICAgICAgICBpZiAoYnVzLl9saXN0ZW5lcnNba2V5XSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBidXMuX2xpc3RlbmVyc1trZXldO1xyXG4gICAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIHRoZSBmb3IgbG9vcCBpcyBuZWNlc3NhcnkgLSBidXRcclxuICAgICAgICAgICAgICAvLyBpdCBtaWdodCBpbXByb3ZlIGdhcmJhZ2UgY29sbGVjdGlvbiBpZiB0aGUgXCJsaXN0ZW5lcnNcIlxyXG4gICAgICAgICAgICAgIC8vIGFycmF5IGlzIHN0b3JlZCBzb21ld2hlcmUgZWxzZVxyXG4gICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGlzdFtpXSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnVzLl9saXN0ZW5lcnNba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAoUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMgYXMgYW55KSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ByaW1hcnlNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNob3dUb29sYmFyKSB7XHJcbiAgICAgIGNvbnN0IHZpc2libGUgPVxyXG4gICAgICAgIHRoaXMuc2hvd0Rvd25sb2FkQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93RHJhd0VkaXRvciB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1RleHRFZGl0b3IgfHxcclxuICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93T3BlbkZpbGVCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dQYWdpbmdCdXR0b25zIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1ByaW50QnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJvcGVydGllc0J1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1JvdGF0ZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U2Nyb2xsaW5nQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U3ByZWFkQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93U2lkZWJhckJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1pvb21CdXR0b25zO1xyXG5cclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgIGlmICgnc3JjJyBpbiBjaGFuZ2VzIHx8ICdiYXNlNjRTcmMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXIpIHtcclxuICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2Jvb2snKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LmRlc3Ryb3lCb29rTW9kZSgpO1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyPy5zdG9wUmVuZGVyaW5nKCk7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZUaHVtYm5haWxWaWV3ZXI/LnN0b3BSZW5kZXJpbmcoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghIXRoaXMuX3NyYykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlckluY29tcGxldGVseUluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vcGVuUERGKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5vcGVuUERGMigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ/LmFubm90YXRpb25TdG9yYWdlPy5yZXNldE1vZGlmaWVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybVN1cHBvcnQucmVzZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbnB1dEZpZWxkID0gUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnPy5vcGVuRmlsZUlucHV0O1xyXG4gICAgICAgICAgICBpZiAoIWlucHV0RmllbGQpIHtcclxuICAgICAgICAgICAgICBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbGVJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0RmllbGQpIHtcclxuICAgICAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnZW5hYmxlRHJhZ0FuZERyb3AnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdlbmFibGVEcmFnQW5kRHJvcCcsIHRoaXMuZW5hYmxlRHJhZ0FuZERyb3ApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ2ZpbmRiYXJWaXNpYmxlJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXNbJ2ZpbmRiYXJWaXNpYmxlJ10uY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZmluZEJhci5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdwcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNEaWFsb2dWaXNpYmxlKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudFByb3BlcnRpZXMub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudFByb3BlcnRpZXMuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnem9vbScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuc2V0Wm9vbSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ21heFpvb20nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtYXhab29tJywgdGhpcy5tYXhab29tKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdtaW5ab29tJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnbWluWm9vbScsIHRoaXMubWluWm9vbSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnaGFuZFRvb2wnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEN1cnNvclRvb2woKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3BhZ2UnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlKSB7XHJcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHRyaXBsZS1lcXVhbHNcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2UgIT0gUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gdGhpcy5wYWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3BhZ2VMYWJlbCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZUxhYmVsICE9PSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdyb3RhdGlvbicgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uKSB7XHJcbiAgICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xyXG4gICAgICAgICAgaWYgKHIgPT09IDAgfHwgciA9PT0gOTAgfHwgciA9PT0gMTgwIHx8IHIgPT09IDI3MCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdzY3JvbGxNb2RlJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSB8fCB0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsKSB7XHJcbiAgICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNjcm9sbE1vZGUgIT09IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hzY3JvbGxtb2RlJywgeyBtb2RlOiBOdW1iZXIodGhpcy5zY3JvbGxNb2RlKSB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdhY3RpdmVTaWRlYmFyVmlldycgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNpZGViYXJWaXNpYmxlKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLm9wZW4oKTtcclxuICAgICAgICAgIGNvbnN0IHZpZXcgPSBOdW1iZXIodGhpcy5hY3RpdmVTaWRlYmFyVmlldyk7XHJcbiAgICAgICAgICBpZiAodmlldyA9PT0gMSB8fCB2aWV3ID09PSAyIHx8IHZpZXcgPT09IDMgfHwgdmlldyA9PT0gNCkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLnN3aXRjaFZpZXcodmlldywgdHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdbYWN0aXZlU2lkZWJhclZpZXddIG11c3QgYmUgYW4gaW50ZWdlciB2YWx1ZSBiZXR3ZWVuIDEgYW5kIDQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ2ZpbGVuYW1lRm9yRG93bmxvYWQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZmlsZW5hbWVGb3JEb3dubG9hZCA9IHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoJ25hbWVkZGVzdCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UuZ29Ub0Rlc3RpbmF0aW9uKHRoaXMubmFtZWRkZXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnc3ByZWFkJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAyO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMTtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMTtcclxuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMDtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcclxuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5oaWRlVG9vbGJhcklmSXRJc0VtcHR5KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XHJcbiAgICB9IC8vIGVuZCBvZiBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZClcclxuXHJcbiAgICBpZiAoJ3ByaW50UmVzb2x1dGlvbicgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIG9wdGlvbnMuc2V0KCdwcmludFJlc29sdXRpb24nLCB0aGlzLnByaW50UmVzb2x1dGlvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnaWdub3JlS2V5Ym9hcmQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnaWdub3JlS2V5cycgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdhY2NlcHRLZXlzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ3Nob3dCb3JkZXJzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmICghY2hhbmdlc1snc2hvd0JvcmRlcnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaG93Qm9yZGVycykge1xyXG4gICAgICAgICAgICB2aWV3ZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlUGFnZUJvcmRlcnMnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQYWdlQm9yZGVycycpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzID0gIXRoaXMuc2hvd0JvcmRlcnM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCB6b29tRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIHNvdXJjZTogdmlld2VyLFxyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxyXG4gICAgICAgICAgICBzY2FsZTogKE51bWJlcih0aGlzLnpvb20pIHwgMTAwKSAvIDEwMCxcclxuICAgICAgICAgICAgcHJlc2V0VmFsdWU6IHRoaXMuem9vbSxcclxuICAgICAgICAgIH0gYXMgU2NhbGVDaGFuZ2luZ0V2ZW50O1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3NjYWxlY2hhbmdpbmcnLCB6b29tRXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmRG9jdW1lbnQpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5fdHJhbnNwb3J0Lm1lc3NhZ2VIYW5kbGVyLnNlbmQoJ3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlcycsIHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgnZm9ybURhdGEnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzWydmb3JtRGF0YSddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIHRoaXMuZm9ybVN1cHBvcnQudXBkYXRlRm9ybUZpZWxkc0luUGRmQ2FsbGVkQnlOZ09uQ2hhbmdlcyhjaGFuZ2VzWydmb3JtRGF0YSddLnByZXZpb3VzVmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdlbmFibGVQcmludCcgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoIWNoYW5nZXNbJ2VuYWJsZVByaW50J10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICgnY3VzdG9tRmluZGJhcicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhciddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21GaW5kYmFyQnV0dG9ucycgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhckJ1dHRvbnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XHJcbiAgICAgICgnY3VzdG9tRmluZGJhcklucHV0QXJlYScgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhcklucHV0QXJlYSddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21Ub29sYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21Ub29sYmFyJ10uaXNGaXJzdENoYW5nZSgpKVxyXG4gICAgKSB7XHJcbiAgICAgIGlmICh0aGlzLmR1bW15Q29tcG9uZW50cykge1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICgncGFnZVZpZXdNb2RlJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydwYWdlVmlld01vZGUnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5wYWdlVmlld01vZGUgPSBjaGFuZ2VzWydwYWdlVmlld01vZGUnXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcbiAgICBpZiAoJ3JlcGxhY2VCcm93c2VyUHJpbnQnIGluIGNoYW5nZXMgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKHRoaXMucmVwbGFjZUJyb3dzZXJQcmludCkge1xyXG4gICAgICAgIGlmICgod2luZG93IGFzIGFueSkucHJpbnRQREYpIHtcclxuICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQcmludCA9IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm9yaWdpbmFsUHJpbnQ7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUHJpbnQgJiYgIW9yaWdpbmFsUHJpbnQudG9TdHJpbmcoKS5pbmNsdWRlcygncHJpbnRQZGYnKSkge1xyXG4gICAgICAgICAgd2luZG93LnByaW50ID0gb3JpZ2luYWxQcmludDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnZGlzYWJsZUZvcm1zJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIHRoaXMuZW5hYmxlT3JEaXNhYmxlRm9ybXModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIHNldFpvb20oKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuOyAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgIH1cclxuICAgIC8vIHNvbWV0aW1lcyBuZ09uQ2hhbmdlcyBjYWxscyB0aGlzIG1ldGhvZCBiZWZvcmUgdGhlIHBhZ2UgaXMgaW5pdGlhbGl6ZWQsXHJcbiAgICAvLyBzbyBsZXQncyBjaGVjayBpZiB0aGlzLnJvb3QgaXMgYWxyZWFkeSBkZWZpbmVkXHJcbiAgICBpZiAodGhpcy5yb290KSB7XHJcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgICBsZXQgem9vbUFzTnVtYmVyID0gdGhpcy56b29tO1xyXG4gICAgICBpZiAoU3RyaW5nKHpvb21Bc051bWJlcikuZW5kc1dpdGgoJyUnKSkge1xyXG4gICAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcihTdHJpbmcoem9vbUFzTnVtYmVyKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcclxuICAgICAgfSBlbHNlIGlmICghaXNOYU4oTnVtYmVyKHpvb21Bc051bWJlcikpKSB7XHJcbiAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHpvb21Bc051bWJlcikgLyAxMDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF6b29tQXNOdW1iZXIpIHtcclxuICAgICAgICBpZiAoIVBERlZpZXdlckFwcGxpY2F0aW9uLnN0b3JlKSB7XHJcbiAgICAgICAgICAvLyBJdCdzIGRpZmZpY3VsdCB0byBwcmV2ZW50IGNhbGxpbmcgdGhpcyBtZXRob2QgdG8gZWFybHksIHNvIHdlIG5lZWQgdGhpcyBjaGVjay5cclxuICAgICAgICAgIC8vIHNldFpvb20oKSBpcyBjYWxsZWQgbGF0ZXIgYWdhaW4sIHdoZW4gdGhlIFBERiBkb2N1bWVudCBoYXMgYmVlbiBsb2FkZWQgYW5kIGl0c1xyXG4gICAgICAgICAgLy8gZmluZ2VycHJpbnQgaGFzIGJlZW4gY2FsY3VsYXRlZC5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgdXNlclNldHRpbmcgPSBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zdG9yZS5nZXQoJ3pvb20nKTtcclxuICAgICAgICAgIGlmICh1c2VyU2V0dGluZykge1xyXG4gICAgICAgICAgICBpZiAoIWlzTmFOKE51bWJlcih1c2VyU2V0dGluZykpKSB7XHJcbiAgICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHVzZXJTZXR0aW5nKSAvIDEwMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB6b29tQXNOdW1iZXIgPSB1c2VyU2V0dGluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgem9vbUFzTnVtYmVyID0gJ2F1dG8nO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdkZWZhdWx0Wm9vbVZhbHVlJywgem9vbUFzTnVtYmVyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3Qgc2NhbGVEcm9wZG93bkZpZWxkID0gKHRoaXMucm9vdC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCcjc2NhbGVTZWxlY3QnKSBhcyBIVE1MU2VsZWN0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICAgICAgaWYgKHNjYWxlRHJvcGRvd25GaWVsZCkge1xyXG4gICAgICAgIGlmICh0aGlzLnpvb20gPT09ICdhdXRvJyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLWZpdCcgfHwgdGhpcy56b29tID09PSAncGFnZS1hY3R1YWwnIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgICBzY2FsZURyb3Bkb3duRmllbGQudmFsdWUgPSB0aGlzLnpvb207XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjYWxlRHJvcGRvd25GaWVsZC52YWx1ZSA9ICdjdXN0b20nO1xyXG4gICAgICAgICAgaWYgKHNjYWxlRHJvcGRvd25GaWVsZC5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIHNjYWxlRHJvcGRvd25GaWVsZC5vcHRpb25zIGFzIGFueSkge1xyXG4gICAgICAgICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09ICdjdXN0b20nKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKE51bWJlcih6b29tQXNOdW1iZXIpICogMTAwXzAwMCkgLyAxMDAwfSVgO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50U2NhbGVWYWx1ZSA9IHpvb21Bc051bWJlciA/PyAnYXV0byc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHBkZlZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h0bWwnKTtcclxuICAgIGlmIChwZGZWaWV3ZXIgJiYgcGRmVmlld2VyLmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dGVyQ29udGFpbmVyJyk7XHJcbiAgICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgICBjb25zdCB3aWR0aCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLnRvb2xiYXJXaWR0aEluUGl4ZWxzID0gd2lkdGg7XHJcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LmNoZWNrVmlzaWJpbGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKSk7XHJcbiAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKTtcclxuICAgICAgaWYgKHZpZXdlcikge1xyXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUodmlld2VyKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXNpemVPYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIGJ5IHlvdXIgYnJvd3NlcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnKVxyXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVBbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHNjcm9sbFNpZ25hdHVyZVdhcm5pbmdJbnRvVmlldyhwZGY6IFBERkRvY3VtZW50UHJveHkpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIC8qKiBUaGlzIG1ldGhvZCBoYXMgYmVlbiBpbnNwaXJlZCBieSBodHRwczovL21lZGl1bS5jb20vZmFjdG9yeS1taW5kL2FuZ3VsYXItcGRmLWZvcm1zLWZhNzJiMTVjM2ZiZC4gVGhhbmtzLCBKb25ueSBGb3ghICovXHJcbiAgICB0aGlzLmhhc1NpZ25hdHVyZSA9IGZhbHNlO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBkZj8ubnVtUGFnZXM7IGkrKykge1xyXG4gICAgICAvLyB0cmFjayB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGYuZ2V0UGFnZShpKTtcclxuICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSBhd2FpdCBwYWdlLmdldEFubm90YXRpb25zKCk7XHJcblxyXG4gICAgICBhbm5vdGF0aW9ucy5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgaWYgKGEuZmllbGRUeXBlID09PSAnU2lnJykge1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYXNTaWduYXR1cmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld2VyQ29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnNjcm9sbEJ5KDAsIC0zMik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBwZGY/Lm51bVBhZ2VzIH0gYXMgUGRmTG9hZGVkRXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHpvb21Ub1BhZ2VXaWR0aChldmVudDogTW91c2VFdmVudCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMuaGFuZFRvb2wpIHtcclxuICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tc0luSGFuZE1vZGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbXNJblRleHRTZWxlY3Rpb25Nb2RlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgZGVzaXJlZENlbnRlclkgPSBldmVudC5jbGllbnRZO1xyXG4gICAgY29uc3QgcHJldmlvdXNTY2FsZSA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jdXJyZW50U2NhbGU7XHJcblxyXG4gICAgaWYgKHRoaXMuem9vbSAhPT0gcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbUZhY3RvciAmJiB0aGlzLnpvb20gKyAnJScgIT09IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3IpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c1pvb20gPSB0aGlzLnpvb207XHJcbiAgICAgIHRoaXMuem9vbSA9IHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21GYWN0b3I7IC8vIGJ5IGRlZmF1bHQ6ICdwYWdlLXdpZHRoJztcclxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICB9IGVsc2UgaWYgKHBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFJlc2V0c1pvb21PblNlY29uZERvdWJsZVRhcCkge1xyXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1pvb20pIHtcclxuICAgICAgICB0aGlzLnpvb20gPSB0aGlzLnByZXZpb3VzWm9vbTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnpvb20gPSAncGFnZS13aWR0aCc7XHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3VycmVudFNjYWxlID0gKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmN1cnJlbnRTY2FsZTtcclxuICAgIGNvbnN0IHNjYWxlQ29ycmVjdGlvbkZhY3RvciA9IGN1cnJlbnRTY2FsZSAvIHByZXZpb3VzU2NhbGUgLSAxO1xyXG4gICAgY29uc3QgcmVjdCA9IChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCBkeSA9IGRlc2lyZWRDZW50ZXJZIC0gcmVjdC50b3A7XHJcbiAgICAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY29udGFpbmVyLnNjcm9sbFRvcCArPSBkeSAqIHNjYWxlQ29ycmVjdGlvbkZhY3RvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlT3JEaXNhYmxlRm9ybXMoZGl2OiBIVE1MRWxlbWVudCwgZG9Ob3RFbmFibGU6IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlRm9ybXMgJiYgZG9Ob3RFbmFibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeGZhTGF5ZXJzID0gQXJyYXkuZnJvbShkaXYucXVlcnlTZWxlY3RvckFsbCgnLnhmYUxheWVyJykpO1xyXG4gICAgY29uc3QgYWNyb0Zvcm1MYXllcnMgPSBBcnJheS5mcm9tKGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcuYW5ub3RhdGlvbkxheWVyJykpO1xyXG4gICAgY29uc3QgbGF5ZXJzID0geGZhTGF5ZXJzLmNvbmNhdCguLi5hY3JvRm9ybUxheWVycyk7XHJcbiAgICBsYXllcnMuZm9yRWFjaCgobGF5ZXIpID0+IGxheWVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykuZm9yRWFjaCgoeCkgPT4gKHguZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVGb3JtcykpKTtcclxuICAgIGxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykuZm9yRWFjaCgoeCkgPT4gKHguZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVGb3JtcykpKTtcclxuICAgIGxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgndGV4dGFyZWEnKS5mb3JFYWNoKCh4KSA9PiAoeC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZvcm1zKSkpO1xyXG4gIH1cclxufVxyXG4iLCI8cGRmLWRhcmstdGhlbWUgKm5nSWY9XCJ0aGVtZSA9PT0gJ2RhcmsnXCI+PC9wZGYtZGFyay10aGVtZT5cclxuPHBkZi1saWdodC10aGVtZSAqbmdJZj1cInRoZW1lID09PSAnbGlnaHQnXCI+PC9wZGYtbGlnaHQtdGhlbWU+XHJcbjxwZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZT48L3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lPlxyXG5cclxuPHBkZi1keW5hbWljLWNzcyBbem9vbV09XCJtb2JpbGVGcmllbmRseVpvb21TY2FsZVwiIFt3aWR0aF09XCJ0b29sYmFyV2lkdGhJblBpeGVsc1wiPjwvcGRmLWR5bmFtaWMtY3NzPlxyXG48bmctY29udGVudCAqbmdUZW1wbGF0ZU91dGxldD1cImN1c3RvbVBkZlZpZXdlciA/IGN1c3RvbVBkZlZpZXdlciA6IGRlZmF1bHRQZGZWaWV3ZXJcIj48L25nLWNvbnRlbnQ+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRQZGZWaWV3ZXI+XHJcbiAgPGRpdiBjbGFzcz1cInpvb21cIiBbc3R5bGUuaGVpZ2h0XT1cIm1pbkhlaWdodCA/IG1pbkhlaWdodCA6IGhlaWdodFwiICNyb290PlxyXG4gICAgPGRpdiBjbGFzcz1cImh0bWxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJvZHkgcGRmLWpzLXZlcnNpb24te3sgbWFqb3JNaW5vclBkZkpzVmVyc2lvbiB9fVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cIm91dGVyQ29udGFpbmVyXCIgKHdpbmRvdzpyZXNpemUpPVwib25SZXNpemUoKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZyZWUtZmxvYXRpbmctYmFyXCIgKm5nSWY9XCJzaG93RnJlZUZsb2F0aW5nQmFyXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tRnJlZUZsb2F0aW5nQmFyID8gY3VzdG9tRnJlZUZsb2F0aW5nQmFyIDogZGVmYXVsdEZyZWVGbG9hdGluZ0JhclwiPiA8L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwZGYtc2lkZWJhclxyXG4gICAgICAgICAgICAjcGRmc2lkZWJhclxyXG4gICAgICAgICAgICBbc2lkZWJhclZpc2libGVdPVwic2lkZWJhclZpc2libGUgfHwgZmFsc2VcIlxyXG4gICAgICAgICAgICBbc2hvd1NpZGViYXJCdXR0b25dPVwic2hvd1NpZGViYXJCdXR0b25cIlxyXG4gICAgICAgICAgICBbY3VzdG9tU2lkZWJhcl09XCJjdXN0b21TaWRlYmFyXCJcclxuICAgICAgICAgICAgW2N1c3RvbVRodW1ibmFpbF09XCJjdXN0b21UaHVtYm5haWxcIlxyXG4gICAgICAgICAgICAodGh1bWJuYWlsRHJhd24pPVwidGh1bWJuYWlsRHJhd24uZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgW3NpZGViYXJQb3NpdGlvblRvcF09XCJzaWRlYmFyUG9zaXRpb25Ub3BcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9wZGYtc2lkZWJhcj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJtYWluQ29udGFpbmVyXCIgW2NsYXNzLnRvb2xiYXItaGlkZGVuXT1cIiFwcmltYXJ5TWVudVZpc2libGVcIj5cclxuICAgICAgICAgICAgPHBkZi1kdW1teS1jb21wb25lbnRzPjwvcGRmLWR1bW15LWNvbXBvbmVudHM+XHJcblxyXG4gICAgICAgICAgICA8cGRmLXRvb2xiYXJcclxuICAgICAgICAgICAgICAob25Ub29sYmFyTG9hZGVkKT1cIm9uVG9vbGJhckxvYWRlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICBbc2lkZWJhclZpc2libGVdPVwic2lkZWJhclZpc2libGVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiXHJcbiAgICAgICAgICAgICAgW2N1c3RvbVRvb2xiYXJdPVwiY3VzdG9tVG9vbGJhclwiXHJcbiAgICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgICBbKHBhZ2VWaWV3TW9kZSldPVwicGFnZVZpZXdNb2RlXCJcclxuICAgICAgICAgICAgICBbcHJpbWFyeU1lbnVWaXNpYmxlXT1cInByaW1hcnlNZW51VmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgW3Njcm9sbE1vZGVdPVwic2Nyb2xsTW9kZSA/PyAwXCJcclxuICAgICAgICAgICAgICBbc2hvd1Byb3BlcnRpZXNCdXR0b25dPVwic2hvd1Byb3BlcnRpZXNCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93Qm9va01vZGVCdXR0b25dPVwic2hvd0Jvb2tNb2RlQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0Rvd25sb2FkQnV0dG9uXT1cInNob3dEb3dubG9hZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dEcmF3RWRpdG9yXT1cInNob3dEcmF3RWRpdG9yXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93SGFuZFRvb2xCdXR0b25dPVwic2hvd0hhbmRUb29sQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0hvcml6b250YWxTY3JvbGxCdXR0b25dPVwic2hvd0hvcml6b250YWxTY3JvbGxCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93SW5maW5pdGVTY3JvbGxCdXR0b25dPVwic2hvd0luZmluaXRlU2Nyb2xsQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd09wZW5GaWxlQnV0dG9uXT1cInNob3dPcGVuRmlsZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dQYWdpbmdCdXR0b25zXT1cInNob3dQYWdpbmdCdXR0b25zXCJcclxuICAgICAgICAgICAgICBbc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b25dPVwic2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gJiYgcGFnZVZpZXdNb2RlICE9PSAnYm9vaydcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJpbnRCdXR0b25dPVwic2hvd1ByaW50QnV0dG9uICYmIGVuYWJsZVByaW50XCJcclxuICAgICAgICAgICAgICBbc2hvd1JvdGF0ZUJ1dHRvbl09XCJzaG93Um90YXRlQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b25dPVwic2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gJiYgIXNlcnZpY2Uuc2Vjb25kYXJ5TWVudUlzRW1wdHlcIlxyXG4gICAgICAgICAgICAgIFtzaG93U2lkZWJhckJ1dHRvbl09XCJzaG93U2lkZWJhckJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTaW5nbGVQYWdlTW9kZUJ1dHRvbl09XCJzaG93U2luZ2xlUGFnZU1vZGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93U3ByZWFkQnV0dG9uXT1cInNob3dTcHJlYWRCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93U3RhbXBFZGl0b3JdPVwic2hvd1N0YW1wRWRpdG9yXCJcclxuICAgICAgICAgICAgICBbc2hvd1RleHRFZGl0b3JdPVwic2hvd1RleHRFZGl0b3JcIlxyXG4gICAgICAgICAgICAgIFtzaG93VmVydGljYWxTY3JvbGxCdXR0b25dPVwic2hvd1ZlcnRpY2FsU2Nyb2xsQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1dyYXBwZWRTY3JvbGxCdXR0b25dPVwic2hvd1dyYXBwZWRTY3JvbGxCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93Wm9vbUJ1dHRvbnNdPVwic2hvd1pvb21CdXR0b25zICYmIHBhZ2VWaWV3TW9kZSAhPT0gJ2Jvb2snXCJcclxuICAgICAgICAgICAgICBbc3ByZWFkXT1cInNwcmVhZFwiXHJcbiAgICAgICAgICAgICAgW3RleHRMYXllcl09XCJ0ZXh0TGF5ZXJcIlxyXG4gICAgICAgICAgICAgIFt0b29sYmFyTWFyZ2luVG9wXT1cInRvb2xiYXJNYXJnaW5Ub3BcIlxyXG4gICAgICAgICAgICAgIFt0b29sYmFyV2lkdGhdPVwidG9vbGJhcldpZHRoXCJcclxuICAgICAgICAgICAgICBbem9vbUxldmVsc109XCJ6b29tTGV2ZWxzXCJcclxuICAgICAgICAgICAgICBbZmluZGJhclZpc2libGVdPVwiZmluZGJhclZpc2libGVcIlxyXG4gICAgICAgICAgICA+PC9wZGYtdG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvckZyZWVUZXh0UGFyYW1zVG9vbGJhclwiIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JGcmVlVGV4dENvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9mcmVlX3RleHRfY29sb3JcIj5Gb250IENvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiZWRpdG9yRnJlZVRleHRDb2xvclwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zQ29sb3JcIiB0YWJpbmRleD1cIjEwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVUZXh0Rm9udFNpemVcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2ZyZWVfdGV4dF9zaXplXCI+Rm9udCBTaXplPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIGlkPVwiZWRpdG9yRnJlZVRleHRGb250U2l6ZVwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zU2xpZGVyXCIgdmFsdWU9XCIxMFwiIG1pbj1cIjVcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHRhYmluZGV4PVwiMTAxXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyIGhpZGRlbiBkb29ySGFuZ2VyUmlnaHRcIiBpZD1cImVkaXRvcklua1BhcmFtc1Rvb2xiYXJcIiBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zVG9vbGJhckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua19jb2xvclwiPkNvbG9yPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjb2xvclwiIGlkPVwiZWRpdG9ySW5rQ29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0NvbG9yXCIgdGFiaW5kZXg9XCIxMDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JJbmtUaGlja25lc3NcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua190aGlja25lc3NcIj5UaGlja25lc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtUaGlja25lc3NcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCIyMFwiIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNMYWJlbFwiIGRhdGEtbDEwbi1pZD1cImVkaXRvcl9pbmtfb3BhY2l0eVwiPk9wYWNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JJbmtPcGFjaXR5XCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNTbGlkZXJcIiB2YWx1ZT1cIjEwMFwiIG1pbj1cIjFcIiBtYXg9XCIxMDBcIiBzdGVwPVwiMVwiIHRhYmluZGV4PVwiMTA0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtc2Vjb25kYXJ5LXRvb2xiYXJcclxuICAgICAgICAgICAgICAjcGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudFxyXG4gICAgICAgICAgICAgIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiXHJcbiAgICAgICAgICAgICAgW2N1c3RvbVNlY29uZGFyeVRvb2xiYXJdPVwiY3VzdG9tU2Vjb25kYXJ5VG9vbGJhclwiXHJcbiAgICAgICAgICAgICAgW3NlY29uZGFyeVRvb2xiYXJUb3BdPVwic2Vjb25kYXJ5VG9vbGJhclRvcFwiXHJcbiAgICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgICAoc3ByZWFkQ2hhbmdlKT1cIm9uU3ByZWFkQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIFtsb2NhbGl6YXRpb25Jbml0aWFsaXplZF09XCJsb2NhbGl6YXRpb25Jbml0aWFsaXplZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wZGYtc2Vjb25kYXJ5LXRvb2xiYXI+XHJcblxyXG4gICAgICAgICAgICA8cGRmLWZpbmRiYXJcclxuICAgICAgICAgICAgICBbY2xhc3Muc2VydmVyLXNpZGUtcmVuZGVyaW5nXT1cInNlcnZlclNpZGVSZW5kZXJpbmdcIlxyXG4gICAgICAgICAgICAgIFtmaW5kYmFyTGVmdF09XCJmaW5kYmFyTGVmdFwiXHJcbiAgICAgICAgICAgICAgW2ZpbmRiYXJUb3BdPVwiZmluZGJhclRvcFwiXHJcbiAgICAgICAgICAgICAgW21vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRCdXR0b25dPVwic2hvd0ZpbmRCdXR0b24gfHwgZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21GaW5kYmFySW5wdXRBcmVhXT1cImN1c3RvbUZpbmRiYXJJbnB1dEFyZWFcIlxyXG4gICAgICAgICAgICAgIFtjdXN0b21GaW5kYmFyQnV0dG9uc109XCJjdXN0b21GaW5kYmFyQnV0dG9uc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kQ3VycmVudFBhZ2VPbmx5XT1cInNob3dGaW5kQ3VycmVudFBhZ2VPbmx5XCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRFbnRpcmVQaHJhc2VdPVwic2hvd0ZpbmRFbnRpcmVQaHJhc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEVudGlyZVdvcmRdPVwic2hvd0ZpbmRFbnRpcmVXb3JkXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRGdXp6eVNlYXJjaF09XCJzaG93RmluZEZ1enp5U2VhcmNoXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRIaWdobGlnaHRBbGxdPVwic2hvd0ZpbmRIaWdobGlnaHRBbGxcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZE1hdGNoRGlhY3JpdGljc109XCJzaG93RmluZE1hdGNoRGlhY3JpdGljc1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWF0Y2hDYXNlXT1cInNob3dGaW5kTWF0Y2hDYXNlXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRNZXNzYWdlc109XCJzaG93RmluZE1lc3NhZ2VzXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRQYWdlUmFuZ2VdPVwic2hvd0ZpbmRQYWdlUmFuZ2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZFJlc3VsdHNDb3VudF09XCJzaG93RmluZFJlc3VsdHNDb3VudFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9wZGYtZmluZGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtY29udGV4dC1tZW51PjwvcGRmLWNvbnRleHQtbWVudT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWV3ZXJDb250YWluZXJcIiBbc3R5bGUudG9wXT1cInZpZXdlclBvc2l0aW9uVG9wXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIiB0YWJpbmRleD1cIjBcIiByb2xlPVwiZG9jdW1lbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW52ZXJpZmllZC1zaWduYXR1cmUtd2FybmluZ1wiICpuZ0lmPVwiaGFzU2lnbmF0dXJlICYmIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAge3tcclxuICAgICAgICAgICAgICAgICAgJ3VudmVyaWZpZWRfc2lnbmF0dXJlX3dhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgfCB0cmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJUaGlzIFBERiBmaWxlIGNvbnRhaW5zIGEgZGlnaXRhbCBzaWduYXR1cmUuIFRoZSBQREYgdmlld2VyIGNhbid0IHZlcmlmeSBpZiB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIGRvd25sb2FkIHRoZSBmaWxlIGFuZCBvcGVuIGl0IGluIEFjcm9iYXQgUmVhZGVyIHRvIHZlcmlmeSB0aGUgc2lnbmF0dXJlIGlzIHZhbGlkLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfCBhc3luY1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwidmlld2VyXCIgY2xhc3M9XCJwZGZWaWV3ZXJcIiAoZGJsY2xpY2spPVwiem9vbVRvUGFnZVdpZHRoKCRldmVudClcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwZGYtZXJyb3ItbWVzc2FnZT48L3BkZi1lcnJvci1tZXNzYWdlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIG1haW5Db250YWluZXIgLS0+XHJcblxyXG4gICAgICAgICAgPGRpdiBpZD1cImRpYWxvZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8cGRmLXBhc3N3b3JkLWRpYWxvZz48L3BkZi1wYXNzd29yZC1kaWFsb2c+XHJcbiAgICAgICAgICAgIDxwZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+PC9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2c+XHJcbiAgICAgICAgICAgIDxwZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2c+PC9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2c+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gZGlhbG9nQ29udGFpbmVyIC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gb3V0ZXJDb250YWluZXIgLS0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlSW5wdXRcIiBjbGFzcz1cImhpZGRlblwiIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cInByaW50Q29udGFpbmVyXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGcmVlRmxvYXRpbmdCYXI+IDwvbmctdGVtcGxhdGU+XHJcbiJdfQ==