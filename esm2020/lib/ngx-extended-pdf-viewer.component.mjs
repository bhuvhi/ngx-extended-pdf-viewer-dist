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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRixPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBR1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBa0J2QixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9GLE9BQU8sRUFBNEMsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJaEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJFQUEy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QURsQixLQUFLO1lBZ0JDLGNBQWM7a0JBRHBCLE1BQU07WUFJQSxrQkFBa0I7a0JBRHhCLEtBQUs7WUFhSyxtQkFBbUI7a0JBRDdCLEtBQUs7WUFNQyxnQkFBZ0I7a0JBRHRCLEtBQUs7WUFJQyxvQkFBb0I7a0JBRDFCLEtBQUs7WUFJQyxXQUFXO2tCQURqQixLQUFLO1lBSUMsTUFBTTtrQkFEWixLQUFLO1lBSUMsWUFBWTtrQkFEbEIsTUFBTTtZQUlBLGNBQWM7a0JBRHBCLE1BQU07WUFVSSxJQUFJO2tCQURkLEtBQUs7WUFXQyxVQUFVO2tCQURoQixNQUFNO1lBSUEsU0FBUztrQkFEZixLQUFLO1lBSUMsZUFBZTtrQkFEckIsTUFBTTtZQUlBLFdBQVc7a0JBRGpCLE1BQU07WUFJQSxVQUFVO2tCQURoQixNQUFNO1lBSUEsWUFBWTtrQkFEbEIsTUFBTTtZQUlBLGFBQWE7a0JBRG5CLE1BQU07WUFJQSxTQUFTO2tCQURmLE1BQU07WUFJQSxnQkFBZ0I7a0JBRHRCLE1BQU07WUFJQSxnQkFBZ0I7a0JBRHRCLE1BQU07WUFJQSxTQUFTO2tCQURmLEtBQUs7WUFJQyxpQkFBaUI7a0JBRHZCLE1BQU07WUFJQSwyQkFBMkI7a0JBRGpDLE1BQU07WUFJQSxzQkFBc0I7a0JBRDVCLE1BQU07WUFJQSxlQUFlO2tCQURyQixNQUFNO1lBS0EsSUFBSTtrQkFEVixLQUFLO1lBSUMsVUFBVTtrQkFEaEIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLEtBQUs7WUFJQyxPQUFPO2tCQURiLEtBQUs7WUFJQyxPQUFPO2tCQURiLEtBQUs7WUFtREssa0JBQWtCO2tCQUQ1QixLQUFLO1lBMmdEQyxhQUFhO2tCQURuQixZQUFZO21CQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgTG9jYXRpb24sIFBsYXRmb3JtTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQTEFURk9STV9JRCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50TG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9kb2N1bWVudC1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBGaWxlSW5wdXRDaGFuZ2VkIH0gZnJvbSAnLi9ldmVudHMvZmlsZS1pbnB1dC1jaGFuZ2VkJztcclxuaW1wb3J0IHsgRmluZFJlc3VsdCwgRmluZFJlc3VsdE1hdGNoZXNDb3VudCwgRmluZFN0YXRlIH0gZnJvbSAnLi9ldmVudHMvZmluZC1yZXN1bHQnO1xyXG5pbXBvcnQgeyBIYW5kdG9vbENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9oYW5kdG9vbC1jaGFuZ2VkJztcclxuaW1wb3J0IHsgUGFnZU51bWJlckNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtbnVtYmVyLWNoYW5nZSc7XHJcbmltcG9ydCB7IFBhZ2VSZW5kZXJFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtcmVuZGVyLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZVJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgUGFnZXNMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLWxvYWRlZC1ldmVudCc7XHJcbmltcG9ydCB7IFBhZ2VzUm90YXRpb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLXJvdGF0aW9uLWV2ZW50JztcclxuaW1wb3J0IHsgUGRmRG93bmxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWRvd25sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZMb2FkaW5nU3RhcnRzRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtbG9hZGluZy1zdGFydHMtZXZlbnQnO1xyXG5pbXBvcnQgeyBQZGZUaHVtYm5haWxEcmF3bkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLXRodW1ibmFpbC1kcmF3bi1ldmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wcm9ncmVzcy1iYXItZXZlbnQnO1xyXG5pbXBvcnQgeyBTY2FsZUNoYW5naW5nRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9zY2FsZS1jaGFuZ2luZy1ldmVudCc7XHJcbmltcG9ydCB7IFNpZGViYXJ2aWV3Q2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvc2lkZWJhcnZpZXctY2hhbmdlZCc7XHJcbmltcG9ydCB7IFRleHRMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90ZXh0bGF5ZXItcmVuZGVyZWQnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQZGZDdXJzb3JUb29scyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtY3Vyc29yLXRvb2xzJztcclxuaW1wb3J0IHsgYXNzZXRzVXJsLCBnZXRWZXJzaW9uU3VmZml4LCBwZGZEZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtZGVmYXVsdC1vcHRpb25zJztcclxuaW1wb3J0IHsgUGFnZVZpZXdNb2RlVHlwZSwgU2Nyb2xsTW9kZUNoYW5nZWRFdmVudCwgU2Nyb2xsTW9kZVR5cGUgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlcic7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiwgUERGRG9jdW1lbnRQcm94eSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGUgfSBmcm9tICcuL29wdGlvbnMvc2VydmljZS13b3JrZXItb3B0aW9ucyc7XHJcbmltcG9ydCB7IFZlcmJvc2l0eUxldmVsIH0gZnJvbSAnLi9vcHRpb25zL3ZlcmJvc2l0eS1sZXZlbCc7XHJcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVuaXRUb1B4IH0gZnJvbSAnLi91bml0LXRvLXB4JztcclxuXHJcbmltcG9ydCB7IFRydXN0ZWRUeXBlc1dpbmRvdyB9IGZyb20gJ3RydXN0ZWQtdHlwZXMvbGliJztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2Fubm90YXRpb24tZWRpdG9yLWxheWVyLXJlbmRlcmVkLWV2ZW50JztcclxuaW1wb3J0IHsgQW5ub3RhdGlvbkVkaXRvckVkaXRvck1vZGVDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9hbm5vdGF0aW9uLWVkaXRvci1tb2RlLWNoYW5nZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvYW5ub3RhdGlvbi1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnRMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL2F0dGFjaG1lbnQtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgTGF5ZXJzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9sYXllcnMtbG9hZGVkLWV2ZW50JztcclxuaW1wb3J0IHsgT3V0bGluZUxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvb3V0bGluZS1sb2FkZWQtZXZlbnQnO1xyXG5pbXBvcnQgeyBUb2dnbGVTaWRlYmFyRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90b2dnbGUtc2lkZWJhci1ldmVudCc7XHJcbmltcG9ydCB7IFhmYUxheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3hmYS1sYXllci1yZW5kZXJlZC1ldmVudCc7XHJcbmltcG9ydCB7IE5neEZvcm1TdXBwb3J0IH0gZnJvbSAnLi9uZ3gtZm9ybS1zdXBwb3J0JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhclZpZXcgfSBmcm9tICcuL29wdGlvbnMvcGRmLXNpZGViYXItdmlld3MnO1xyXG5pbXBvcnQgeyBTcHJlYWRUeXBlIH0gZnJvbSAnLi9vcHRpb25zL3NwcmVhZC10eXBlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IFNlcnZpY2VXb3JrZXJPcHRpb25zOiBTZXJ2aWNlV29ya2VyT3B0aW9uc1R5cGU7IC8vIGRlZmluZWQgaW4gdmlld2VyLmpzXHJcbmRlY2xhcmUgY2xhc3MgUmVzaXplT2JzZXJ2ZXIge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtOiAoKSA9PiB2b2lkKTtcclxuICBwdWJsaWMgb2JzZXJ2ZShkaXY6IEhUTUxFbGVtZW50KTtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVsZW1lbnRBbmRQb3NpdGlvbiB7XHJcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGb3JtRGF0YVR5cGUge1xyXG4gIFtmaWVsZE5hbWU6IHN0cmluZ106IG51bGwgfCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgc3RyaW5nW107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzSU9TKCkge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICBbJ2lQYWQgU2ltdWxhdG9yJywgJ2lQaG9uZSBTaW11bGF0b3InLCAnaVBvZCBTaW11bGF0b3InLCAnaVBhZCcsICdpUGhvbmUnLCAnaVBvZCddLmluY2x1ZGVzKG5hdmlnYXRvci5wbGF0Zm9ybSkgfHxcclxuICAgIC8vIGlQYWQgb24gaU9TIDEzIGRldGVjdGlvblxyXG4gICAgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01hYycpICYmICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudClcclxuICApO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgb3JpZ2luYWxQcmludCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LnByaW50IDogdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgbmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbmNvbXBsZXRlbHlJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgZm9ybVN1cHBvcnQgPSBuZXcgTmd4Rm9ybVN1cHBvcnQoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGR1bW15IGNvbXBvbmVudHMgYXJlIGluc2VydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBjdXN0b21pemVzIHRoZSB0b29sYmFyXHJcbiAgICogd2l0aG91dCBhZGRpbmcgZXZlcnkgb3JpZ2luYWwgdG9vbGJhciBpdGVtLiBXaXRob3V0IHRoZSBkdW1teSBjb21wb25lbnRzLCB0aGVcclxuICAgKiBpbml0aWFsaXphdGlvbiBjb2RlIG9mIHBkZi5qcyBjcmFzaGVzIGJlY2F1c2UgaXQgYXNzdW1lIHRoYXQgZXZlcnkgc3RhbmRhcmQgd2lkZ2V0IGlzIHRoZXJlLlxyXG4gICAqL1xyXG4gIEBWaWV3Q2hpbGQoUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50KVxyXG4gIHB1YmxpYyBkdW1teUNvbXBvbmVudHM6IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudDtcclxuXHJcbiAgQFZpZXdDaGlsZCgncm9vdCcpXHJcbiAgcHVibGljIHJvb3Q6IEVsZW1lbnRSZWY7XHJcblxyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21QZGZWaWV3ZXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVNpZGViYXI6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbVRodW1ibmFpbDogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY3VzdG9tRnJlZUZsb2F0aW5nQmFyOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RnJlZUZsb2F0aW5nQmFyID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZW5hYmxlRHJhZ0FuZERyb3AgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgbG9jYWxpemF0aW9uSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGZvcm1EYXRhKGZvcm1EYXRhOiBGb3JtRGF0YVR5cGUpIHtcclxuICAgIHRoaXMuZm9ybVN1cHBvcnQuZm9ybURhdGEgPSBmb3JtRGF0YTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGRpc2FibGVGb3JtcyA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgZ2V0IGZvcm1EYXRhQ2hhbmdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9ybVN1cHBvcnQuZm9ybURhdGFDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgX3BhZ2VWaWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSA9ICdtdWx0aXBsZSc7XHJcblxyXG4gIHB1YmxpYyBiYXNlSHJlZjogc3RyaW5nO1xyXG5cclxuICAvKiogVGhpcyBmbGFnIHByZXZlbnRzIHRyeWluZyB0byBsb2FkIGEgZmlsZSB0d2ljZSBpZiB0aGUgdXNlciB1cGxvYWRzIGl0IHVzaW5nIHRoZSBmaWxlIHVwbG9hZCBkaWFsb2cgb3IgdmlhIGRyYWcnbidkcm9wICovXHJcbiAgcHJpdmF0ZSBzcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIGdldCBwYWdlVmlld01vZGUoKTogUGFnZVZpZXdNb2RlVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZVZpZXdNb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHBhZ2VWaWV3TW9kZSh2aWV3TW9kZTogUGFnZVZpZXdNb2RlVHlwZSkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcclxuICAgICAgY29uc3QgaGFzQ2hhbmdlZCA9IHRoaXMuX3BhZ2VWaWV3TW9kZSAhPT0gdmlld01vZGU7XHJcbiAgICAgIGlmIChoYXNDaGFuZ2VkKSB7XHJcbiAgICAgICAgY29uc3QgbXVzdFJlZHJhdyA9ICF0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQgJiYgKHRoaXMuX3BhZ2VWaWV3TW9kZSA9PT0gJ2Jvb2snIHx8IHZpZXdNb2RlID09PSAnYm9vaycpO1xyXG4gICAgICAgIHRoaXMuX3BhZ2VWaWV3TW9kZSA9IHZpZXdNb2RlO1xyXG4gICAgICAgIHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlLmVtaXQodGhpcy5fcGFnZVZpZXdNb2RlKTtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucz8uc2V0KCdwYWdlVmlld01vZGUnLCB0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlVmlld01vZGUgPSB0aGlzLl9wYWdlVmlld01vZGU7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5wYWdlVmlld01vZGUgPSB0aGlzLl9wYWdlVmlld01vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNjcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnBhZ2UgfHwgdGhpcy5zY3JvbGxNb2RlID09PSBTY3JvbGxNb2RlVHlwZS5ob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZSA9IFNjcm9sbE1vZGVUeXBlLnZlcnRpY2FsO1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHZpZXdNb2RlICE9PSAnbXVsdGlwbGUnKSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUucGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgIC8vIHNpbmNlIHBkZi5qcywgb3VyIGN1c3RvbSBzaW5nbGUtcGFnZS1tb2RlIGhhcyBiZWVuIHJlcGxhY2VkIGJ5IHRoZSBzdGFuZGFyZCBzY3JvbGxNb2RlPVwicGFnZVwiXHJcbiAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS5wYWdlO1xyXG4gICAgICAgICAgdGhpcy5fcGFnZVZpZXdNb2RlID0gdmlld01vZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aWV3TW9kZSA9PT0gJ2Jvb2snKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dCb3JkZXJzID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlICE9PSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbE1vZGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG11c3RSZWRyYXcpIHtcclxuICAgICAgICAgIGlmICh2aWV3TW9kZSAhPT0gJ2Jvb2snKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5neCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ZXJDb250YWluZXIgPSBuZ3gucXVlcnlTZWxlY3RvcignI3ZpZXdlckNvbnRhaW5lcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUud2lkdGggPSAnJztcclxuICAgICAgICAgICAgdmlld2VyQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgICAgIHZpZXdlckNvbnRhaW5lci5zdHlsZS5tYXJnaW5SaWdodCA9ICcnO1xyXG4gICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc3R5bGUubWFyZ2luTGVmdCA9ICcnO1xyXG4gICAgICAgICAgICBjb25zdCB2aWV3ZXIgPSBuZ3gucXVlcnlTZWxlY3RvcignI3ZpZXdlcicpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICB2aWV3ZXIuc3R5bGUubWF4V2lkdGggPSAnJztcclxuICAgICAgICAgICAgdmlld2VyLnN0eWxlLm1pbldpZHRoID0gJyc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5vcGVuUERGMigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VWaWV3TW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVZpZXdNb2RlVHlwZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByb2dyZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxQcm9ncmVzc0JhckV2ZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50JylcclxuICBwcml2YXRlIHNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ6IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BkZnNpZGViYXInKVxyXG4gIHByaXZhdGUgc2lkZWJhckNvbXBvbmVudDogUGRmU2lkZWJhckNvbXBvbmVudDtcclxuXHJcbiAgLyogcmVndWxhciBhdHRyaWJ1dGVzICovXHJcblxyXG4gIHByaXZhdGUgX3NyYzogc3RyaW5nIHwgQXJyYXlCdWZmZXIgfCBVaW50OEFycmF5IHwgeyByYW5nZTogYW55IH0gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcmNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfc2Nyb2xsTW9kZTogU2Nyb2xsTW9kZVR5cGUgPSBTY3JvbGxNb2RlVHlwZS52ZXJ0aWNhbDtcclxuXHJcbiAgcHVibGljIGdldCBzY3JvbGxNb2RlKCk6IFNjcm9sbE1vZGVUeXBlIHtcclxuICAgIHJldHVybiB0aGlzLl9zY3JvbGxNb2RlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNjcm9sbE1vZGUodmFsdWU6IFNjcm9sbE1vZGVUeXBlKSB7XHJcbiAgICBpZiAodGhpcy5fc2Nyb2xsTW9kZSAhPT0gdmFsdWUpIHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXIpIHtcclxuICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNjcm9sbE1vZGUgIT09IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoc2Nyb2xsbW9kZScsIHsgbW9kZTogTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3Njcm9sbE1vZGUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMuX3Njcm9sbE1vZGUgPT09IFNjcm9sbE1vZGVUeXBlLnBhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdlVmlld01vZGUgIT09ICdzaW5nbGUnKSB7XHJcbiAgICAgICAgICB0aGlzLl9wYWdlVmlld01vZGUgPSAnc2luZ2xlJztcclxuICAgICAgICAgIHRoaXMucGFnZVZpZXdNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYWdlVmlld01vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ3NpbmdsZScgfHwgdGhpcy5fc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUuaG9yaXpvbnRhbCkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2VWaWV3TW9kZSA9ICdtdWx0aXBsZSc7XHJcbiAgICAgICAgdGhpcy5wYWdlVmlld01vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhZ2VWaWV3TW9kZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzY3JvbGxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTY3JvbGxNb2RlVHlwZT4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgYXV0aG9yaXphdGlvbjogT2JqZWN0IHwgYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaHR0cEhlYWRlcnM6IE9iamVjdCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIC8qKiBUaGlzIGZpZWxkIHN0b3JlcyB0aGUgcHJldmlvdXMgem9vbSBsZXZlbCBpZiB0aGUgcGFnZSBpcyBlbmxhcmdlZCB3aXRoIGEgZG91YmxlLXRhcCBvciBkb3VibGUtY2xpY2sgKi9cclxuICBwcml2YXRlIHByZXZpb3VzWm9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBlbmFibGVQcmludCA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIGluaXRpYWxpemluZyB0aGUgUERGIHZpZXdlciBhbmQgbG9hZGluZyB0aGUgUERGIGZpbGUuXHJcbiAgICogTW9zdCB1c2VycyBjYW4gbGV0IHRoaXMgcGFyYW1ldGVyIHNhZmVseSBhdCBpdCdzIGRlZmF1bHQgdmFsdWUgb2YgemVyby5cclxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xyXG4gICAqIGFmdGVyIHRoZSBQREYgZmlsZXMsIHNvIHRoZXkgYXJlIG5vdCBhdmFpbGFibGUgd2hlbiB0aGUgUERGIHZpZXdlciBpcyBpbml0aWFsaXplZCkuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVsYXlGaXJzdFZpZXcgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VGV4dEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93U3RhbXBFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0RyYXdFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgLyoqIHN0b3JlIHRoZSB0aW1lb3V0IGlkIHNvIGl0IGNhbiBiZSBjYW5jZWxlZCBpZiB1c2VyIGxlYXZlcyB0aGUgcGFnZSBiZWZvcmUgdGhlIFBERiBpcyBzaG93biAqL1xyXG4gIHByaXZhdGUgaW5pdFRpbWVvdXQ6IGFueTtcclxuXHJcbiAgLyoqIEhvdyBtYW55IGxvZyBtZXNzYWdlcyBzaG91bGQgYmUgcHJpbnRlZD9cclxuICAgKiBMZWdhbCB2YWx1ZXM6IFZlcmJvc2l0eUxldmVsLklORk9TICg9IDUpLCBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAoPSAxKSwgVmVyYm9zaXR5TGV2ZWwuRVJST1JTICg9IDApICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbG9nTGV2ZWwgPSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcmVsYXRpdmVDb29yZHNPcHRpb25zOiBPYmplY3QgPSB7fTtcclxuXHJcbiAgLyoqIFVzZSB0aGUgbWluaWZpZWQgKG1pbmlmaWVkSlNMaWJyYXJpZXM9XCJ0cnVlXCIsIHdoaWNoIGlzIHRoZSBkZWZhdWx0KSBvciB0aGUgdXNlci1yZWFkYWJsZSBwZGYuanMgbGlicmFyeSAobWluaWZpZWRKU0xpYnJhcmllcz1cImZhbHNlXCIpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluaWZpZWRKU0xpYnJhcmllcyA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xyXG5cclxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcclxuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhbm5vdGF0aW9uTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFubm90YXRpb25FZGl0b3JMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uRWRpdG9yTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgeGZhTGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8WGZhTGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgb3V0bGluZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3V0bGluZUxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYXR0YWNobWVudHNsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEF0dGFjaG1lbnRMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGxheWVyc2xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8TGF5ZXJzTG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIHB1YmxpYyBoYXNTaWduYXR1cmU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IEJsb2IgfCBVaW50OEFycmF5IHwgVVJMIHwgeyByYW5nZTogYW55IH0pIHtcclxuICAgIGlmICh1cmwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XHJcbiAgICAgIHRoaXMuX3NyYyA9IHVybC5idWZmZXI7XHJcbiAgICB9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIFVSTCkge1xyXG4gICAgICB0aGlzLl9zcmMgPSB1cmwudG9TdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHVybCBpbnN0YW5jZW9mIEJsb2IpIHtcclxuICAgICAgLy8gYWRkaXRpb25hbCBjaGVjayBpbnRyb2R1Y2VkIHRvIHN1cHBvcnQgc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNyYyA9IG5ldyBVaW50OEFycmF5KHJlYWRlci5yZXN1bHQgYXMgQXJyYXlCdWZmZXIpO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAoYXN5bmMgKCkgPT4gdGhpcy5vcGVuUERGMigpKSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2Ugb3BlblBERiBpcyBjYWxsZWQgbGF0ZXIsIHNvIHdlIGRvIG5vdGhpbmcgdG8gcHJldmVudCBsb2FkaW5nIHRoZSBQREYgZmlsZSB0d2ljZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodXJsKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fc3JjID0gdXJsO1xyXG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xyXG4gICAgICAgIC8vIG1pbmltYWwgbGVuZ3RoIG9mIGEgYmFzZTY0IGVuY29kZWQgUERGXHJcbiAgICAgICAgaWYgKHVybC5sZW5ndGggJSA0ID09PSAwKSB7XHJcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkLytdKz17MCwyfSQvLnRlc3QodXJsKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVVJMIGxvb2tzIGxpa2UgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIElmIHNvLCBwbGVhc2UgdXNlIHRoZSBhdHRyaWJ1dGUgW2Jhc2U2NFNyY10gaW5zdGVhZCBvZiBbc3JjXScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgKHRoaXMuX3NyYyBhcyBhbnkpID0gdXJsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IGJhc2U2NFNyYyhiYXNlNjQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmIChiYXNlNjQpIHtcclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGJpbmFyeV9zdHJpbmcgPSBhdG9iKGJhc2U2NCk7XHJcbiAgICAgIGNvbnN0IGxlbiA9IGJpbmFyeV9zdHJpbmcubGVuZ3RoO1xyXG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBieXRlc1tpXSA9IGJpbmFyeV9zdHJpbmcuY2hhckNvZGVBdChpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNyYyA9IGJ5dGVzLmJ1ZmZlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NyYyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBjb21iaW5hdGlvbiBvZiBoZWlnaHQsIG1pbkhlaWdodCwgYW5kIGF1dG9IZWlnaHQgZW5zdXJlcyB0aGUgUERGIGhlaWdodCBvZiB0aGUgUERGIHZpZXdlciBpcyBjYWxjdWxhdGVkIGNvcnJlY3RseSB3aGVuIHRoZSBoZWlnaHQgaXMgYSBwZXJjZW50YWdlLlxyXG4gICAqIEJ5IGRlZmF1bHQsIG1hbnkgQ1NTIGZyYW1ld29ya3MgbWFrZSBhIGRpdiB3aXRoIDEwMCUgaGF2ZSBhIGhlaWdodCBvciB6ZXJvIHBpeGVscy4gY2hlY2tIZWlndGgoKSBmaXhlcyB0aGlzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYXV0b0hlaWdodCA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHJpdmF0ZSBfaGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAnMTAwJSc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoZWlnaHQoaCkge1xyXG4gICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmF1dG9IZWlnaHQgPSBmYWxzZTtcclxuICAgIGlmIChoKSB7XHJcbiAgICAgIGlmIChoID09PSAnYXV0bycpIHtcclxuICAgICAgICB0aGlzLmF1dG9IZWlnaHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHVuZGVmaW5lZDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBoO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3VzZUJyb3dzZXJMb2NhbGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBnZXQgdXNlQnJvd3NlckxvY2FsZSgpIHtcclxuICAgIHJldHVybiAhIXRoaXMuX3VzZUJyb3dzZXJMb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZiB0aGlzIGZsYWcgaXMgdHJ1ZSwgdGhpcyBjb21wb25lbnRzIGFkZHMgYSBsaW5rIHRvIHRoZSBsb2NhbGUgYXNzZXRzLiBUaGUgcGRmIHZpZXdlclxyXG4gICAqIHNlZXMgdGhpcyBsaW5rIGFuZCB1c2VzIGl0IHRvIGxvYWQgdGhlIGxvY2FsZSBmaWxlcyBhdXRvbWF0aWNhbGx5LlxyXG4gICAqIEBwYXJhbSB1c2VCcm93c2VyTG9jYWxlIGJvb2xlYW5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgdXNlQnJvd3NlckxvY2FsZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdXNlQnJvd3NlckxvY2FsZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZm9yY2VVc2luZ0xlZ2FjeUVTNSA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZThlYic7XHJcblxyXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGVmaW5lIHRoZSBuYW1lIG9mIHRoZSBmaWxlIGFmdGVyIGNsaWNraW5nIFwiZG93bmxvYWRcIiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIHRoZSBrZXlib2FyZCBiaW5kaW5ncyBjb21wbGV0ZWx5ICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5Ym9hcmQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGVuYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzIGV4cGxpY2l0bHkuIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBldmVyeSBvdGhlciBrZXkgYmluZGluZyBpcyBpZ25vcmVkLiAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlIHZpZXdlcidzIHN2ZyBpbWFnZXMgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgaW1hZ2VSZXNvdXJjZXNQYXRoID0gYXNzZXRzVXJsKHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcikgKyAnL2ltYWdlcy8nO1xyXG5cclxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGVpciBsb2NhbGUgZm9sZGVyIGludG8gYW4gYXJiaXRyYXJ5IGZvbGRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxvY2FsZUZvbGRlclBhdGggPSBhc3NldHNVcmwocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKSArICcvbG9jYWxlJztcclxuXHJcbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvY2FsZS4gVGhpcyBtdXN0IGJlIHRoZSBjb21wbGV0ZSBsb2NhbGUgbmFtZSwgc3VjaCBhcyBcImVzLUVTXCIuIFRoZSBzdHJpbmcgaXMgYWxsb3dlZCB0byBiZSBhbGwgbG93ZXJjYXNlLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBCeSBkZWZhdWx0LCBsaXN0ZW5pbmcgdG8gdGhlIFVSTCBpcyBkZWFjdGl2YXRlZCBiZWNhdXNlIG9mdGVuIHRoZSBhbmNob3IgdGFnIGlzIHVzZWQgZm9yIHRoZSBBbmd1bGFyIHJvdXRlciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGxpc3RlblRvVVJMID0gZmFsc2U7XHJcblxyXG4gIC8qKiBOYXZpZ2F0ZSB0byBhIGNlcnRhaW4gXCJuYW1lZCBkZXN0aW5hdGlvblwiICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbmFtZWRkZXN0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKiBhbGxvd3MgeW91IHRvIHBhc3MgYSBwYXNzd29yZCB0byByZWFkIHBhc3N3b3JkLXByb3RlY3RlZCBmaWxlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHJlcGxhY2VCcm93c2VyUHJpbnQgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgX3Nob3dTaWRlYmFyQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIHB1YmxpYyB2aWV3ZXJQb3NpdGlvblRvcCA9ICczMnB4JztcclxuXHJcbiAgLyoqIHBkZi5qcyBjYW4gc2hvdyBzaWduYXR1cmVzLCBidXQgZmFpbHMgdG8gdmVyaWZ5IHRoZW0uIFNvIHRoZXkgYXJlIHN3aXRjaGVkIG9mZiBieSBkZWZhdWx0LlxyXG4gICAqIFNldCBcIltzaG93VW52ZXJpZmllZFNpZ25hdHVyZXNdXCI9XCJ0cnVlXCIgdG8gZGlzcGxheSBlLXNpZ25hdHVyZXMgbm9uZXRoZWxlc3MuXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHN0YXJ0VGFiaW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBzaG93U2lkZWJhckJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9zaG93U2lkZWJhckJ1dHRvbjtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTaWRlYmFyQnV0dG9uKHNob3c6IFJlc3BvbnNpdmVWaXNpYmlsaXR5KSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uID0gZmFsc2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uID0gc2hvdztcclxuICAgIGlmICh0aGlzLl9zaG93U2lkZWJhckJ1dHRvbikge1xyXG4gICAgICBjb25zdCBpc0lFID0gL21zaWVcXHN8dHJpZGVudFxcLy9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICBsZXQgZmFjdG9yID0gMTtcclxuICAgICAgaWYgKGlzSUUpIHtcclxuICAgICAgICBmYWN0b3IgPSBOdW1iZXIoKHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbSB8fCAnMTAwJykucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAoNjggKiBmYWN0b3IpLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zaWRlYmFyVmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwdWJsaWMgZ2V0IHNpZGViYXJWaXNpYmxlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpZGViYXJWaXNpYmxlO1xyXG4gIH1cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZXQgc2lkZWJhclZpc2libGUodmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc2lkZWJhclZpc2libGUpIHtcclxuICAgICAgdGhpcy5zaWRlYmFyVmlzaWJsZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3NpZGViYXJWaXNpYmxlID0gdmFsdWU7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZTaWRlYmFyKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpZGViYXJWaXNpYmxlKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5vcGVuKCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IE51bWJlcih0aGlzLmFjdGl2ZVNpZGViYXJWaWV3KTtcclxuICAgICAgICBpZiAodmlldyA9PT0gMSB8fCB2aWV3ID09PSAyIHx8IHZpZXcgPT09IDMgfHwgdmlldyA9PT0gNCkge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5zd2l0Y2hWaWV3KHZpZXcsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdbYWN0aXZlU2lkZWJhclZpZXddIG11c3QgYmUgYW4gaW50ZWdlciB2YWx1ZSBiZXR3ZWVuIDEgYW5kIDQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmU2lkZWJhci5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgc2lkZWJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGFjdGl2ZVNpZGViYXJWaWV3OiBQZGZTaWRlYmFyVmlldyA9IFBkZlNpZGViYXJWaWV3Lk9VVExJTkU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBhY3RpdmVTaWRlYmFyVmlld0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmU2lkZWJhclZpZXc+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGZpbmRiYXJWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBmaW5kYmFyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgcHJvcGVydGllc0RpYWxvZ1Zpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHByb3BlcnRpZXNEaWFsb2dWaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kSGlnaGxpZ2h0QWxsID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaENhc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEN1cnJlbnRQYWdlT25seSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kUGFnZVJhbmdlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVXb3JkID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVQaHJhc2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoRGlhY3JpdGljcyA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRnV6enlTZWFyY2ggPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZFJlc3VsdHNDb3VudCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWVzc2FnZXMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9uczogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnM6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnIHwgJ2N1c3RvbScgfCBzdHJpbmcgPSAnbGlnaHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VG9vbGJhciA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTaW5nbGVQYWdlTW9kZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93VmVydGljYWxTY3JvbGxCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0hvcml6b250YWxTY3JvbGxCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1dyYXBwZWRTY3JvbGxCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0luZmluaXRlU2Nyb2xsQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dCb29rTW9kZUJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgX2hhbmRUb29sID0gIWlzSU9TKCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBoYW5kVG9vbChoYW5kVG9vbDogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzSU9TKCkgJiYgaGFuZFRvb2wpIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgXCJPbiBpT1MsIHRoZSBoYW5kdG9vbCBkb2Vzbid0IHdvcmsgcmVsaWFibHkuIFBsdXMsIHlvdSBkb24ndCBuZWVkIGl0IGJlY2F1c2UgdG91Y2ggZ2VzdHVyZXMgYWxsb3cgeW91IHRvIGRpc3Rpbmd1aXNoIGVhc2lseSBiZXR3ZWVuIHN3aXBpbmcgYW5kIHNlbGVjdGluZyB0ZXh0LiBUaGVyZWZvcmUsIHRoZSBsaWJyYXJ5IGlnbm9yZXMgeW91ciBzZXR0aW5nLlwiXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2hhbmRUb29sID0gaGFuZFRvb2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGhhbmRUb29sKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhbmRUb29sO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGhhbmRUb29sQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gZmFsc2U7XHJcblxyXG4gIHByaXZhdGUgX3Nob3dTY3JvbGxpbmdCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgcHVibGljIGdldCBzaG93U2Nyb2xsaW5nQnV0dG9uKCkge1xyXG4gICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnbXVsdGlwbGUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zaG93U2Nyb2xsaW5nQnV0dG9uO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHNob3dTY3JvbGxpbmdCdXR0b24odmFsOiBSZXNwb25zaXZlVmlzaWJpbGl0eSkge1xyXG4gICAgdGhpcy5fc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHZhbDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTcHJlYWRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1Byb3BlcnRpZXNCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0JvcmRlcnMgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzcHJlYWQ6IFNwcmVhZFR5cGU7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBzcHJlYWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPCdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCc+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB0aHVtYm5haWxEcmF3biA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmVGh1bWJuYWlsRHJhd25FdmVudD4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBwdWJsaWMgZ2V0IHBhZ2UoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9wYWdlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHBhZ2UocDogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAocCkge1xyXG4gICAgICAvLyBzaWxlbnRseSBjb3BlIHdpdGggc3RyaW5nc1xyXG4gICAgICB0aGlzLl9wYWdlID0gTnVtYmVyKHApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcGFnZSA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXIgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHBhZ2VMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGFnZUxhYmVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCB1bmRlZmluZWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwYWdlc0xvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZXNMb2FkZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VSZW5kZXIgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHBhZ2VSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZVJlbmRlcmVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZEb3dubG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZEb3dubG9hZGVkRXZlbnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyBwZGZMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkxvYWRlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGluZ1N0YXJ0cyA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGluZ1N0YXJ0c0V2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgcGRmTG9hZGluZ0ZhaWxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RXJyb3I+KCk7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHRleHRMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgYW5ub3RhdGlvbkVkaXRvck1vZGVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbm5vdGF0aW9uRWRpdG9yRWRpdG9yTW9kZUNoYW5nZWRFdmVudD4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIHVwZGF0ZUZpbmRNYXRjaGVzQ291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRSZXN1bHRNYXRjaGVzQ291bnQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHB1YmxpYyB1cGRhdGVGaW5kU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRTdGF0ZT4oKTtcclxuXHJcbiAgLyoqIExlZ2FsIHZhbHVlczogdW5kZWZpbmVkLCAnYXV0bycsICdwYWdlLWFjdHVhbCcsICdwYWdlLWZpdCcsICdwYWdlLXdpZHRoJywgb3IgJzUwJyAob3IgYW55IG90aGVyIHBlcmNlbnRhZ2UpICovXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgem9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyB6b29tTGV2ZWxzID0gWydhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2UtZml0JywgJ3BhZ2Utd2lkdGgnLCAwLjUsIDEsIDEuMjUsIDEuNSwgMiwgMywgNF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIG1heFpvb20gPSAxMDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbWluWm9vbSA9IDAuMTtcclxuXHJcbiAgLyoqIFRoaXMgYXR0cmlidXRlIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBfbW9iaWxlRnJpZW5kbHlab29tOiBzdHJpbmcgPSAnMTAwJSc7XHJcblxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyTWFyZ2luVG9wID0gJzBweCc7XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XHJcblxyXG4gIHByaXZhdGUgdG9vbGJhcjogSFRNTEVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHB1YmxpYyBvblRvb2xiYXJMb2FkZWQodG9vbGJhckVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLnRvb2xiYXIgPSB0b29sYmFyRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyV2lkdGhJblBpeGVscyA9IDMuMTQxNTkyNjUzNTk7IC8vIG1hZ2ljIG51bWJlciBpbmRpY2F0aW5nIHRoZSB0b29sYmFyIHNpemUgaGFzbid0IGJlZW4gZGV0ZXJtaW5lZCB5ZXRcclxuXHJcbiAgcHVibGljIHNlY29uZGFyeVRvb2xiYXJUb3A6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIHNpZGViYXJQb3NpdGlvblRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBkaXJ0eSBJRTExIGhhY2sgLSB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAvLyBkaXJ0eSBJRTExIGhhY2sgLSB0ZW1wb3Jhcnkgc29sdXRpb25cclxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgcHVibGljIGdldCBtb2JpbGVGcmllbmRseVpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBwZGZKc1ZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBnZXRWZXJzaW9uU3VmZml4KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG1ham9yTWlub3JQZGZKc1ZlcnNpb24oKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZ1bGxWZXJzaW9uID0gdGhpcy5wZGZKc1ZlcnNpb247XHJcbiAgICBjb25zdCBwb3MgPSBmdWxsVmVyc2lvbi5sYXN0SW5kZXhPZignLicpO1xyXG4gICAgcmV0dXJuIGZ1bGxWZXJzaW9uLnN1YnN0cmluZygwLCBwb3MpLnJlcGxhY2UoJy4nLCAnLScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBhdHRyaWJ1dGVzIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXHJcbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNldCBtb2JpbGVGcmllbmRseVpvb20oem9vbTogc3RyaW5nKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFscyAtIHRoZSB0eXBlIGNvbnZlcnNpb24gaXMgaW50ZW5kZWRcclxuICAgIGlmICh6b29tID09ICd0cnVlJykge1xyXG4gICAgICB6b29tID0gJzE1MCUnO1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFscyAtIHRoZSB0eXBlIGNvbnZlcnNpb24gaXMgaW50ZW5kZWRcclxuICAgIH0gZWxzZSBpZiAoem9vbSA9PSAnZmFsc2UnIHx8IHpvb20gPT09IHVuZGVmaW5lZCB8fCB6b29tID09PSBudWxsKSB7XHJcbiAgICAgIHpvb20gPSAnMTAwJSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9tb2JpbGVGcmllbmRseVpvb20gPSB6b29tO1xyXG4gICAgbGV0IGZhY3RvciA9IDE7XHJcbiAgICBpZiAoIVN0cmluZyh6b29tKS5pbmNsdWRlcygnJScpKSB7XHJcbiAgICAgIHpvb20gPSAxMDAgKiBOdW1iZXIoem9vbSkgKyAnJSc7XHJcbiAgICB9XHJcbiAgICBmYWN0b3IgPSBOdW1iZXIoKHpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG4gICAgdGhpcy5tb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IGZhY3RvcjtcclxuICAgIHRoaXMudG9vbGJhcldpZHRoID0gKDEwMCAvIGZhY3RvcikudG9TdHJpbmcoKSArICclJztcclxuICAgIHRoaXMudG9vbGJhck1hcmdpblRvcCA9IChmYWN0b3IgLSAxKSAqIDE2ICsgJ3B4JztcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaHV0dGluZ0Rvd24gPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHNlcnZlclNpZGVSZW5kZXJpbmcgPSB0cnVlO1xyXG5cclxuICBwdWJsaWMgY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudG9vbGJhciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhclBvc2l0aW9uVG9wID0gJzAnO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgdG9wID0gdGhpcy50b29sYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcclxuICAgIGlmICh0b3AgPCAzMykge1xyXG4gICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gJzMzcHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9IHRvcCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmFjdG9yID0gdG9wIC8gMzM7XHJcblxyXG4gICAgaWYgKHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhclBvc2l0aW9uVG9wID0gKDMzICsgMzMgKiAoZmFjdG9yIC0gMSkpLnRvU3RyaW5nKCkgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWRlYmFyUG9zaXRpb25Ub3AgPSAnMCc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJUb3AgPSAoMzMgKyAzOCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcbiAgICB0aGlzLmZpbmRiYXJUb3AgPSAoMzMgKyAzOCAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XHJcblxyXG4gICAgY29uc3QgZmluZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmltYXJ5Vmlld0ZpbmQnKTtcclxuICAgIGlmIChmaW5kQnV0dG9uKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lclBvc2l0aW9uTGVmdCA9IHRoaXMudG9vbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICBjb25zdCBmaW5kQnV0dG9uUG9zaXRpb24gPSBmaW5kQnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBsZWZ0ID0gTWF0aC5tYXgoMCwgZmluZEJ1dHRvblBvc2l0aW9uLmxlZnQgLSBjb250YWluZXJQb3NpdGlvbkxlZnQpO1xyXG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gbGVmdCArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd1NpZGViYXJCdXR0b24pIHtcclxuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9IDM0ICsgKDMyICogZmFjdG9yKS50b1N0cmluZygpICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAnMCc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQsXHJcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcGxhdGZvcm1Mb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICAgIHRoaXMuYmFzZUhyZWYgPSB0aGlzLnBsYXRmb3JtTG9jYXRpb24uZ2V0QmFzZUhyZWZGcm9tRE9NKCk7XHJcbiAgICB0aGlzLnNlcnZpY2UucmVjYWxjdWxhdGVTaXplJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblJlc2l6ZSgpKTtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIHRoaXMuc2VydmVyU2lkZVJlbmRlcmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRvb2xiYXJXaWR0aCA9IFN0cmluZyhkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaU9TVmVyc2lvblJlcXVpcmVzRVM1KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIC8vIHNlcnZlci1zaWRlIHJlbmRlcmluZ1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXRjaCA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLm1hdGNoKC9PUyAoXFxkKylfKFxcZCspXz8oXFxkKyk/Lyk7XHJcbiAgICBpZiAobWF0Y2ggIT09IHVuZGVmaW5lZCAmJiBtYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2hbMV0sIDEwKSA8IDE0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgbmVlZHNFUzUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGlzSUUgPSAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xyXG4gICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIGNvbnN0IGlzSU9zMTNPckJlbG93ID0gdGhpcy5pT1NWZXJzaW9uUmVxdWlyZXNFUzUoKTtcclxuICAgIGxldCBuZWVkc0VTNSA9IHR5cGVvZiBSZWFkYWJsZVN0cmVhbSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFByb21pc2VbJ2FsbFNldHRsZWQnXSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICBpZiAobmVlZHNFUzUgfHwgaXNJRSB8fCBpc0VkZ2UgfHwgaXNJT3MxM09yQmVsb3cgfHwgdGhpcy5mb3JjZVVzaW5nTGVnYWN5RVM1KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEoYXdhaXQgdGhpcy5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN1cHBvcnRzT3B0aW9uYWxDaGFpbmluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBjb25zdCBzdXBwb3J0ID0gKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmc7XHJcbiAgICAgIHN1cHBvcnQgIT09IHVuZGVmaW5lZCA/IHJlc29sdmUoc3VwcG9ydCkgOiByZXNvbHZlKHRoaXMuYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkU2NyaXB0T3BDaGFpbmluZ1N1cHBvcnQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgaWYgKHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciA9PT0gJ2JsZWVkaW5nLWVkZ2UnKSB7XHJcbiAgICAgICAgcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyPVwiYXNzZXRzXCI7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvb3AtY2hhaW5pbmctc3VwcG9ydC5qcycpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgICByZXNvbHZlKCg8YW55PndpbmRvdykuc3VwcG9ydHNPcHRpb25hbENoYWluaW5nIGFzIGJvb2xlYW4pO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICBzY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgICAgKDxhbnk+d2luZG93KS5zdXBwb3J0c09wdGlvbmFsQ2hhaW5pbmcgPSBmYWxzZTtcclxuICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVTY3JpcHRFbGVtZW50KHNvdXJjZVBhdGg6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50IHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgICBjb25zdCB0dFdpbmRvdyA9IHdpbmRvdyBhcyB1bmtub3duIGFzIFRydXN0ZWRUeXBlc1dpbmRvdztcclxuICAgIGlmICh0dFdpbmRvdy50cnVzdGVkVHlwZXMpIHtcclxuICAgICAgY29uc3Qgc2FuaXRpemVyID0gdHRXaW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSgnZm9vJywge1xyXG4gICAgICAgIGNyZWF0ZVNjcmlwdFVSTDogKGlucHV0KSA9PiBpbnB1dCxcclxuICAgICAgfSk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSBzYW5pdGl6ZXIuY3JlYXRlU2NyaXB0VVJMKHRoaXMubG9jYXRpb24ubm9ybWFsaXplKHNvdXJjZVBhdGgpKSBhcyBhbnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzY3JpcHQuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoc291cmNlUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNjcmlwdDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGRmSnNQYXRoKGFydGlmYWN0OiAncGRmJyB8ICd2aWV3ZXInLCBuZWVkc0VTNTogYm9vbGVhbikge1xyXG4gICAgbGV0IHN1ZmZpeCA9IHRoaXMubWluaWZpZWRKU0xpYnJhcmllcyA/ICcubWluLmpzJyA6ICcuanMnO1xyXG4gICAgY29uc3QgYXNzZXRzID0gcGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyO1xyXG4gICAgY29uc3QgdmVyc2lvblN1ZmZpeCA9IGdldFZlcnNpb25TdWZmaXgoYXNzZXRzKTtcclxuICAgIGlmICh2ZXJzaW9uU3VmZml4LnN0YXJ0c1dpdGgoJzQnKSkge1xyXG4gICAgICBzdWZmaXggPSBzdWZmaXgucmVwbGFjZSgnLmpzJywgJy5tanMnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFydGlmYWN0UGF0aCA9IGAvJHthcnRpZmFjdH0tYDtcclxuICAgIGNvbnN0IGVzNSA9IG5lZWRzRVM1ID8gJy1lczUnIDogJyc7XHJcblxyXG4gICAgcmV0dXJuIGFzc2V0cyArIGFydGlmYWN0UGF0aCArIHZlcnNpb25TdWZmaXggKyBlczUgKyBzdWZmaXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRWaWV3ZXIoKTogdm9pZCB7XHJcbiAgICBnbG9iYWxUaGlzWyduZ3hab25lJ10gPSB0aGlzLm5nWm9uZTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5uZWVkc0VTNSgpLnRoZW4oKG5lZWRzRVM1KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgdmlld2VyUGF0aCA9IHRoaXMuZ2V0UGRmSnNQYXRoKCd2aWV3ZXInLCBuZWVkc0VTNSk7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHZpZXdlclBhdGgpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRmVhdHVyZXMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5jcmVhdGVTY3JpcHRFbGVtZW50KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlciArICcvYWRkaXRpb25hbC1mZWF0dXJlcy5qcycpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIHNjcmlwdC5yZW1vdmUoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICBnbG9iYWxUaGlzWydzZXROZ3hFeHRlbmRlZFBkZlZpZXdlclNvdXJjZSddID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3JjID0gdXJsO1xyXG4gICAgICAgIHRoaXMuc3JjQ2hhbmdlVHJpZ2dlcmVkQnlVc2VyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHVybCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmFkZFRyYW5zbGF0aW9uc1VubGVzc1Byb3ZpZGVkQnlUaGVVc2VyKCk7XHJcbiAgICAgIHRoaXMuZm9ybVN1cHBvcnQucmVnaXN0ZXJGb3JtU3VwcG9ydFdpdGhQZGZqcyh0aGlzLm5nWm9uZSk7XHJcbiAgICAgIHRoaXMubG9hZFBkZkpzKCk7XHJcbiAgICAgIHRoaXMuaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkUGRmSnMoKSB7XHJcbiAgICBnbG9iYWxUaGlzWyduZ3hab25lJ10gPSB0aGlzLm5nWm9uZTtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgaWYgKCFnbG9iYWxUaGlzWydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XHJcbiAgICAgICAgdGhpcy5uZWVkc0VTNSgpLnRoZW4oKG5lZWRzRVM1KSA9PiB7XHJcbiAgICAgICAgICBpZiAobmVlZHNFUzUpIHtcclxuICAgICAgICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy5uZWVkc0VTNSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgXCJJZiB5b3Ugc2VlIHRoZSBlcnJvciBtZXNzYWdlIFxcXCJleHBlY3RlZCBleHByZXNzaW9uLCBnb3QgJz0nXFxcIiBhYm92ZTogeW91IGNhbiBzYWZlbHkgaWdub3JlIGl0IGFzIGxvbmcgYXMgeW91IGtub3cgd2hhdCB5b3UncmUgZG9pbmcuIEl0IG1lYW5zIHlvdXIgYnJvd3NlciBpcyBvdXQtb2YtZGF0ZS4gUGxlYXNlIHVwZGF0ZSB5b3VyIGJyb3dzZXIgdG8gYmVuZWZpdCBmcm9tIHRoZSBsYXRlc3Qgc2VjdXJpdHkgdXBkYXRlcyBhbmQgdG8gZW5qb3kgYSBmYXN0ZXIgUERGIHZpZXdlci5cIlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGRmRGVmYXVsdE9wdGlvbnMubmVlZHNFUzUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXNpbmcgdGhlIEVTNSB2ZXJzaW9uIG9mIHRoZSBQREYgdmlld2VyLiBZb3VyIFBERiBmaWxlcyBzaG93IGZhc3RlciBpZiB5b3UgdXBkYXRlIHlvdXIgYnJvd3Nlci4nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLm1pbmlmaWVkSlNMaWJyYXJpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy53b3JrZXJTcmMoKS5lbmRzV2l0aCgnLm1pbi5qcycpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3Qgc3JjID0gcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjKCk7XHJcbiAgICAgICAgICAgICAgcGRmRGVmYXVsdE9wdGlvbnMud29ya2VyU3JjID0gKCkgPT4gc3JjLnJlcGxhY2UoJy5qcycsICcubWluLmpzJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHBkZkpzUGF0aCA9IHRoaXMuZ2V0UGRmSnNQYXRoKCdwZGYnLCBuZWVkc0VTNSk7XHJcbiAgICAgICAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmNyZWF0ZVNjcmlwdEVsZW1lbnQocGRmSnNQYXRoKTtcclxuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIShnbG9iYWxUaGlzIGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xyXG4gICAgICAgIHRoaXMubG9hZFZpZXdlcigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAoIXRoaXMuc2h1dHRpbmdEb3duKSB7XHJcbiAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICBpZiAoKGdsb2JhbFRoaXMgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmRvSW5pdFBERlZpZXdlcigpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzc2lnblRhYmluZGV4ZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydFRhYmluZGV4KSB7XHJcbiAgICAgIGNvbnN0IHIgPSB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHIuY2xhc3NMaXN0LmFkZCgnb2Zmc2NyZWVuJyk7XHJcbiAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocik7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocik7XHJcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhyLCB0aGlzLnJvb3QubmF0aXZlRWxlbWVudCwgW10pO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHIpO1xyXG4gICAgICBjb25zdCB0b3BSaWdodEdyZWF0ZXJUaGFuQm90dG9tTGVmdENvbXBhcmF0b3IgPSAoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmIChhLnkgLSBiLnkgPiAxNSkge1xyXG4gICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiLnkgLSBhLnkgPiAxNSkge1xyXG4gICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYS54IC0gYi54O1xyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBzb3J0ZWQgPSBbLi4uZWxlbWVudHNdLnNvcnQodG9wUmlnaHRHcmVhdGVyVGhhbkJvdHRvbUxlZnRDb21wYXJhdG9yKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzb3J0ZWRbaV0uZWxlbWVudC50YWJJbmRleCA9IHRoaXMuc3RhcnRUYWJpbmRleCArIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkocm9vdDogRWxlbWVudCk6IHZvaWQge1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblhYTFZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbkxhcmdlVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5NZWRpdW1WaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblNtYWxsVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5UaW55VmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWFhMVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWExWaWV3Jyk7XHJcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVMYXJnZVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZU1lZGl1bVZpZXcnKTtcclxuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVNtYWxsVmlldycpO1xyXG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlVGlueVZpZXcnKTtcclxuXHJcbiAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChyb290LmNoaWxkRWxlbWVudENvdW50ID4gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGMgPSByb290LmNoaWxkcmVuLml0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkoYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbGxlY3RFbGVtZW50UG9zaXRpb25zKGNvcHk6IEVsZW1lbnQsIG9yaWdpbmFsOiBFbGVtZW50LCBlbGVtZW50czogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPik6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4ge1xyXG4gICAgaWYgKGNvcHkgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHJlY3QgPSBjb3B5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBlbGVtZW50QW5kUG9zID0ge1xyXG4gICAgICAgIGVsZW1lbnQ6IG9yaWdpbmFsLFxyXG4gICAgICAgIHg6IE1hdGgucm91bmQocmVjdC5sZWZ0KSxcclxuICAgICAgICB5OiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcclxuICAgICAgfSBhcyBFbGVtZW50QW5kUG9zaXRpb247XHJcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudEFuZFBvcyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvcHkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29weS5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IGNvcHkuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBjb25zdCBvID0gb3JpZ2luYWwuY2hpbGRyZW4uaXRlbShpKTtcclxuICAgICAgICBpZiAoYyAmJiBvKSB7XHJcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoYywgbywgZWxlbWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb0luaXRQREZWaWV3ZXIoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XHJcbiAgICAgIHRoaXMubG9jYWxpemF0aW9uSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XHJcbiAgICAgICAgICB0aGlzLmFmdGVyTGlicmFyeUluaXQoKTtcclxuICAgICAgICAgIHRoaXMub3BlblBERigpO1xyXG4gICAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5wcmludCA9ICh3aW5kb3cgYXMgYW55KS5wcmludFBERjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIHRoaXMuZGVsYXlGaXJzdFZpZXcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsICgpID0+IHtcclxuICAgICAgdGhpcy5iZWZvcmVQcmludC5lbWl0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgY29uc29sZS5lcnJvcihcIllvdSdyZSB0cnlpbmcgdG8gb3BlbiB0d28gaW5zdGFuY2VzIG9mIHRoZSBQREYgdmlld2VyLiBNb3N0IGxpa2VseSwgdGhpcyB3aWxsIHJlc3VsdCBpbiBlcnJvcnMuXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25Mb2FkZWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Vidmlld2VybG9hZGVkJywgb25Mb2FkZWQpO1xyXG4gICAgfTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYnZpZXdlcmxvYWRlZCcsIG9uTG9hZGVkKTtcclxuXHJcbiAgICB0aGlzLmFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3NhcnkobnVsbCk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAvLyBodXJyaWVkIHVzZXJzIHNvbWV0aW1lcyByZWxvYWQgdGhlIFBERiBiZWZvcmUgaXQgaGFzIGZpbmlzaGVkIGluaXRpYWxpemluZ1xyXG4gICAgICAgIC8vIFRoaXMgaW5pdGlhbGl6ZXMgdGhlIHdlYnZpZXdlciwgdGhlIGZpbGUgbWF5IGJlIHBhc3NlZCBpbiB0byBpdCB0byBpbml0aWFsaXplIHRoZSB2aWV3ZXIgd2l0aCBhIHBkZiBkaXJlY3RseVxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICB0aGlzLmhpZGVUb29sYmFySWZJdElzRW1wdHkoKTtcclxuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gZ2xvYmFsVGhpcy53ZWJWaWV3ZXJMb2FkKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5kZWZhdWx0VXJsID0gJyc7IC8vIElFIGJ1Z2ZpeFxyXG4gICAgICAgIGlmICh0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG5cclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdlbmFibGVEcmFnQW5kRHJvcCcsIHRoaXMuZW5hYmxlRHJhZ0FuZERyb3ApO1xyXG4gICAgICAgIGxldCBsYW5ndWFnZSA9IHRoaXMubGFuZ3VhZ2UgPT09ICcnID8gdW5kZWZpbmVkIDogdGhpcy5sYW5ndWFnZTtcclxuICAgICAgICBpZiAoIWxhbmd1YWdlKSB7XHJcbiAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgIGxhbmd1YWdlID0gJ2VuJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlID0gbmF2aWdhdG9yLmxhbmd1YWdlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdsb2NhbGUnLCBsYW5ndWFnZSk7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW1hZ2VSZXNvdXJjZXNQYXRoJywgdGhpcy5pbWFnZVJlc291cmNlc1BhdGgpO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21pblpvb20nLCB0aGlzLm1pblpvb20pO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ3BhZ2VWaWV3TW9kZScsIHRoaXMucGFnZVZpZXdNb2RlKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCd2ZXJib3NpdHknLCB0aGlzLmxvZ0xldmVsKTtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdpbml0aWFsWm9vbScsIHRoaXMuem9vbSk7XHJcblxyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmlzVmlld2VyRW1iZWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lcikge1xyXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcclxuICAgICAgICBpZiAoYm9keVswXSkge1xyXG4gICAgICAgICAgY29uc3QgdG9wTGV2ZWxFbGVtZW50cyA9IGJvZHlbMF0uY2hpbGRyZW47XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gdG9wTGV2ZWxFbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBjb25zdCBlID0gdG9wTGV2ZWxFbGVtZW50cy5pdGVtKGkpO1xyXG4gICAgICAgICAgICBpZiAoZSAmJiBlLmlkID09PSAncHJpbnRDb250YWluZXInKSB7XHJcbiAgICAgICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmludENvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmIChwYykge1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChwYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkVHJhbnNsYXRpb25zVW5sZXNzUHJvdmlkZWRCeVRoZVVzZXIoKSB7XHJcbiAgICBjb25zdCBsYW5nTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3R5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCJdJyk7XHJcbiAgICBjb25zdCBsYW5nQ291bnQgPSBsYW5nTGlua3MubGVuZ3RoO1xyXG4gICAgY29uc3QgZGljdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFt0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xyXG4gICAgY29uc3QgdXNlclByb3ZpZGVzVHJhbnNsYXRpb25zID0gbGFuZ0NvdW50ID4gMCB8fCAhIWRpY3Q7XHJcbiAgICBpZiAodGhpcy5fdXNlQnJvd3NlckxvY2FsZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudXNlQnJvd3NlckxvY2FsZSA9ICF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1c2VyUHJvdmlkZXNUcmFuc2xhdGlvbnMpIHtcclxuICAgICAgaWYgKCF0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiSWYgeW91IHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSwgeW91IG11c3QgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgZWFzaWVzdCB3YXkgdG8gZG8gdGhpcyBpcyB0byBhZGQgdGhlbSB0byB0aGUgaW5kZXguaHRtbC4nKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgUERGIHZpZXdlciBpZ25vcmVzIHlvdXIgc2V0dGluZyBhbmQgbG9hZHMgdGhlIGRlZmF1bHQgdHJhbnNsYXRpb25zLicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgICAgbGluay5yZWwgPSAncmVzb3VyY2UnO1xyXG4gICAgICBsaW5rLnR5cGUgPSAnYXBwbGljYXRpb24vbDEwbic7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHRoaXMubG9jYWxlRm9sZGVyUGF0aCArICcvbG9jYWxlLnByb3BlcnRpZXMnO1xyXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnb3JpZ2luJywgJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGxpbmspO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUgJiYgbGFuZ0NvdW50ID4gMCkge1xyXG4gICAgICBjb25zdCBvID0gbGFuZ0xpbmtzWzBdLmF0dHJpYnV0ZXNbJ29yaWdpbiddO1xyXG4gICAgICBpZiAobyAmJiBvLnZhbHVlICE9PSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZVRvb2xiYXJJZkl0SXNFbXB0eSgpIHtcclxuICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdGhpcy5zaG93VG9vbGJhcjtcclxuICAgIGlmICghdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB8fCB0aGlzLnNlcnZpY2Uuc2Vjb25kYXJ5TWVudUlzRW1wdHkpIHtcclxuICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcclxuICAgICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogTm90aWZpZXMgZXZlcnkgd2lkZ2V0IHRoYXQgaW1wbGVtZW50cyBvbkxpYnJhcnlJbml0KCkgdGhhdCB0aGUgUERGIHZpZXdlciBvYmplY3RzIGFyZSBhdmFpbGFibGUgKi9cclxuICBwcml2YXRlIGFmdGVyTGlicmFyeUluaXQoKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNoZWNrSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2hlaWdodCkge1xyXG4gICAgICBpZiAoaXNOYU4oTnVtYmVyKHRoaXMuX2hlaWdodC5yZXBsYWNlKCclJywgJycpKSkpIHtcclxuICAgICAgICAvLyBUaGUgaGVpZ2h0IGlzIGRlZmluZWQgd2l0aCBvbmUgb2YgdGhlIHVuaXRzIHZoLCB2dywgZW0sIHJlbSwgZXRjLlxyXG4gICAgICAgIC8vIFNvIHRoZSBoZWlnaHQgY2hlY2sgaXNuJ3QgbmVjZXNzYXJ5LlxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBkZmpzcHJpbnRpbmddJykpIHtcclxuICAgICAgLy8gIzE3MDIgd29ya2Fyb3VuZCB0byBhIEZpcmVmb3ggYnVnOiB3aGVuIHByaW50aW5nLCBjb250YWluZXIuY2xpZW50SGVpZ2h0IGlzIHRlbXBvcmFyaWx5IDAsXHJcbiAgICAgIC8vIGNhdXNpbmcgbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIgdG8gZGVmYXVsdCB0byAxMDAgcGl4ZWxzIGhlaWdodC4gU28gaXQncyBiZXR0ZXJcclxuICAgICAgLy8gdG8gZG8gbm90aGluZy5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5jbGllbnRIZWlnaHQgPT09IDApIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTICYmICF0aGlzLmF1dG9IZWlnaHQpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgIFwiVGhlIGhlaWdodCBvZiB0aGUgUERGIHZpZXdlciB3aWRnZXQgaXMgemVybyBwaXhlbHMuIFBsZWFzZSBjaGVjayB0aGUgaGVpZ2h0IGF0dHJpYnV0ZS4gSXMgdGhlcmUgYSBzeW50YXggZXJyb3I/IE9yIGFyZSB5b3UgdXNpbmcgYSBwZXJjZW50YWdlIHdpdGggYSBDU1MgZnJhbWV3b3JrIHRoYXQgZG9lc24ndCBzdXBwb3J0IHRoaXM/IFRoZSBoZWlnaHQgaXMgYWRqdXN0ZWQgYXV0b21hdGVkbHkuXCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYXV0b0hlaWdodCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9IZWlnaHQpIHtcclxuICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgICAgICAgIGNvbnN0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICBjb25zdCB0b3AgPSByZWN0LnRvcDtcclxuICAgICAgICAgIGxldCBtYXhpbXVtSGVpZ2h0ID0gYXZhaWxhYmxlIC0gdG9wO1xyXG4gICAgICAgICAgLy8gdGFrZSB0aGUgbWFyZ2lucyBhbmQgcGFkZGluZ3Mgb2YgdGhlIHBhcmVudCBjb250YWluZXJzIGludG8gYWNjb3VudFxyXG4gICAgICAgICAgY29uc3QgcGFkZGluZyA9IHRoaXMuY2FsY3VsYXRlQm9yZGVyTWFyZ2luKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICBtYXhpbXVtSGVpZ2h0IC09IHBhZGRpbmc7XHJcbiAgICAgICAgICBpZiAobWF4aW11bUhlaWdodCA+IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkhlaWdodCA9IGAke21heGltdW1IZWlnaHR9cHhgO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5taW5IZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUJvcmRlck1hcmdpbihjb250YWluZXI6IEhUTUxFbGVtZW50IHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpO1xyXG5cclxuICAgICAgY29uc3QgcGFkZGluZyA9IFVuaXRUb1B4LnRvUHgoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcclxuICAgICAgY29uc3QgbWFyZ2luID0gVW5pdFRvUHgudG9QeChjb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSk7XHJcbiAgICAgIGlmIChjb250YWluZXIuc3R5bGUuekluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHBhZGRpbmcgKyBtYXJnaW47XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHBhZGRpbmcgKyBtYXJnaW4gKyB0aGlzLmNhbGN1bGF0ZUJvcmRlck1hcmdpbihjb250YWluZXIucGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvblNwcmVhZENoYW5nZShuZXdTcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCcpOiB2b2lkIHtcclxuICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQobmV3U3ByZWFkKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRleHRMYXllciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICghdGhpcy5oYW5kVG9vbCkge1xyXG4gICAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIHBkZkRlZmF1bHRPcHRpb25zLnRleHRMYXllck1vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxyXG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcclxuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcclxuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPyBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlIDogMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uIHx8IHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMudGV4dExheWVyKSB7XHJcbiAgICAgICAgLy8gdG9kbzogaXMgdGhpcyBhIHJlZHVuZGFudCBjaGVjaz9cclxuICAgICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCBwZGZEZWZhdWx0T3B0aW9ucy50ZXh0TGF5ZXJNb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcclxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XHJcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XHJcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRvZG86IGlzIHRoZSBlbHNlIGJyYW5jaCBkZWFkIGNvZGU/XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dExheWVyID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24pIHtcclxuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLicpO1xyXG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgICAnSGlkaW5nIHRoZSBcImhhbmQgdG9vbCAvIHNlbGVjdGlvbiBtb2RlXCIgbWVudSBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIHRoZSBtZW51IGl0ZW1zLidcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgb3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuOyAvLyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgIH1cclxuICAgIGNvbnN0IG9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIGFzIElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cclxuICAgIGZvciAoY29uc3Qga2V5IGluIHBkZkRlZmF1bHRPcHRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KGtleSwgcGRmRGVmYXVsdE9wdGlvbnNba2V5XSk7XHJcbiAgICB9XHJcbiAgICBvcHRpb25zLnNldCgnZGlzYWJsZVByZWZlcmVuY2VzJywgdHJ1ZSk7XHJcbiAgICBhd2FpdCB0aGlzLnNldFpvb20oKTtcclxuXHJcbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5Ym9hcmQnLCB0aGlzLmlnbm9yZUtleWJvYXJkKTtcclxuICAgIG9wdGlvbnMuc2V0KCdpZ25vcmVLZXlzJywgdGhpcy5pZ25vcmVLZXlzKTtcclxuICAgIG9wdGlvbnMuc2V0KCdhY2NlcHRLZXlzJywgdGhpcy5hY2NlcHRLZXlzKTtcclxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zKTtcclxuXHJcbiAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3Njcm9sbE1vZGVPbkxvYWQnLCB0aGlzLnNjcm9sbE1vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNpZGViYXJWaXNpYmxlID0gdGhpcy5zaWRlYmFyVmlzaWJsZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcblxyXG4gICAgaWYgKHNpZGViYXJWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc2lkZWJhclZpZXdPbkxvYWQgPSBzaWRlYmFyVmlzaWJsZSA/IDEgOiAwO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLnNpZGViYXJWaWV3T25Mb2FkID0gc2lkZWJhclZpc2libGUgPyB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3IDogUGRmU2lkZWJhclZpZXcuTk9ORTtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25zLnNldCgnc2lkZWJhclZpZXdPbkxvYWQnLCB0aGlzLnNpZGViYXJWaXNpYmxlID8gdGhpcy5hY3RpdmVTaWRlYmFyVmlldyA6IDApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAyKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3ByZWFkID09PSAnb2RkJykge1xyXG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDEpO1xyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAwKTtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZmYnKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByaW50UmVzb2x1dGlvbikge1xyXG4gICAgICBvcHRpb25zLnNldCgncHJpbnRSZXNvbHV0aW9uJywgdGhpcy5wcmludFJlc29sdXRpb24pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMgPT09IGZhbHNlKSB7XHJcbiAgICAgIG9wdGlvbnMuc2V0KCdyZW1vdmVQYWdlQm9yZGVycycsICF0aGlzLnNob3dCb3JkZXJzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb3BlblBERigpIHtcclxuICAgIFNlcnZpY2VXb3JrZXJPcHRpb25zLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcclxuICAgIHRoaXMuc2VydmljZS5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLl9zcmMpIHtcclxuICAgICAgdGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlckluY29tcGxldGVseUluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgIGlmICghdGhpcy5saXN0ZW5Ub1VSTCkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLnNldEhhc2ggPSBmdW5jdGlvbiAoKSB7fTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndG9nZ2xlU2lkZWJhcicsICh4OiBUb2dnbGVTaWRlYmFyRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaWRlYmFyVmlzaWJsZSA9IHgudmlzaWJsZTtcclxuICAgICAgICAgIHRoaXMuc2lkZWJhclZpc2libGVDaGFuZ2UuZW1pdCh4LnZpc2libGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd0ZXh0bGF5ZXJyZW5kZXJlZCcsICh4OiBUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMudGV4dExheWVyUmVuZGVyZWQuZW1pdCh4KSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Fubm90YXRpb25lZGl0b3Jtb2RlY2hhbmdlZCcsICh4OiBBbm5vdGF0aW9uRWRpdG9yRWRpdG9yTW9kZUNoYW5nZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIC8vIHdlJ3JlIHVzaW5nIGEgdGltZW91dCBoZXJlIHRvIG1ha2Ugc3VyZSB0aGUgZWRpdG9yIGlzIGFscmVhZHkgdmlzaWJsZVxyXG4gICAgICAgIC8vIHdoZW4gdGhlIGV2ZW50IGlzIGNhdWdodC4gUGRmLmpzIGZpcmVzIGl0IGEgYml0IGVhcmx5LlxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5hbm5vdGF0aW9uRWRpdG9yTW9kZUNoYW5nZWQuZW1pdCh4KSk7XHJcbiAgICAgICAgaWYgKHgubW9kZSA9PT0gMCkge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci1wcmV2ZW50LXRvdWNoLW1vdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci1wcmV2ZW50LXRvdWNoLW1vdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Njcm9sbG1vZGVjaGFuZ2VkJywgKHg6IFNjcm9sbE1vZGVDaGFuZ2VkRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fc2Nyb2xsTW9kZSA9IHgubW9kZTtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsTW9kZUNoYW5nZS5lbWl0KHgubW9kZSk7XHJcbiAgICAgICAgICBpZiAoeC5tb2RlID09PSBTY3JvbGxNb2RlVHlwZS5wYWdlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSAhPT0gJ3NpbmdsZScpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2VWaWV3TW9kZUNoYW5nZS5lbWl0KCdzaW5nbGUnKTtcclxuICAgICAgICAgICAgICB0aGlzLl9wYWdlVmlld01vZGUgPSAnc2luZ2xlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3Byb2dyZXNzJywgKHg6IFByb2dyZXNzQmFyRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9ncmVzcy5lbWl0KHgpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaW5kYmFyY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmluZGJhclZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuZmluZGJhclZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaW5kYmFyb3BlbicsICgpID0+IHtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maW5kYmFyVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLmZpbmRiYXJWaXNpYmxlQ2hhbmdlLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcm9wZXJ0aWVzZGlhbG9nY2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnByb3BlcnRpZXNEaWFsb2dWaXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwcm9wZXJ0aWVzZGlhbG9nb3BlbicsICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXNEaWFsb2dWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5wcm9wZXJ0aWVzRGlhbG9nVmlzaWJsZUNoYW5nZS5lbWl0KHRydWUpKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXNsb2FkZWQnLCAoeDogUGFnZXNMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnBhZ2VzTG9hZGVkLmVtaXQoeCkpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uICE9PSB1bmRlZmluZWQgJiYgdGhpcy5yb3RhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgY29uc3QgciA9IE51bWJlcih0aGlzLnJvdGF0aW9uKTtcclxuICAgICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XHJcbiAgICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UuZ29Ub0Rlc3RpbmF0aW9uKHRoaXMubmFtZWRkZXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRab29tKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKHg6IFBhZ2VSZW5kZXJlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGFnZVJlbmRlcmVkLmVtaXQoeCk7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyJywgKHg6IFBhZ2VSZW5kZXJFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBhZ2VSZW5kZXIuZW1pdCh4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG93bmxvYWQnLCAoeDogUGRmRG93bmxvYWRlZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucGRmRG93bmxvYWRlZC5lbWl0KHgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NjYWxlY2hhbmdpbmcnLCAoeDogU2NhbGVDaGFuZ2luZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRab29tRmFjdG9yLmVtaXQoeC5zY2FsZSk7XHJcbiAgICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHgucHJlc2V0VmFsdWUgIT09ICdhdXRvJyAmJiB4LnByZXNldFZhbHVlICE9PSAncGFnZS1maXQnICYmIHgucHJlc2V0VmFsdWUgIT09ICdwYWdlLWFjdHVhbCcgJiYgeC5wcmVzZXRWYWx1ZSAhPT0gJ3BhZ2Utd2lkdGgnKSB7XHJcbiAgICAgICAgICAvLyBpZ25vcmUgcm91bmRpbmcgZGlmZmVyZW5jZXNcclxuICAgICAgICAgIGlmIChNYXRoLmFicyh4LnByZXZpb3VzU2NhbGUgLSB4LnNjYWxlKSA+IDAuMDAwMDAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbSA9IHguc2NhbGUgKiAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHguc2NhbGUgKiAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoeC5wcmV2aW91c1ByZXNldFZhbHVlICE9PSB4LnByZXNldFZhbHVlKSB7XHJcbiAgICAgICAgICAvLyBjYWxsZWQgd2hlbiB0aGUgdXNlciBzZWxlY3RzIG9uZSBvZiB0aGUgdGV4dCB2YWx1ZXMgb2YgdGhlIHpvb20gc2VsZWN0IGRyb3Bkb3duXHJcbiAgICAgICAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh4LnByZXNldFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3JvdGF0aW9uY2hhbmdpbmcnLCAoeDogUGFnZXNSb3RhdGlvbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucm90YXRpb25DaGFuZ2UuZW1pdCh4LnBhZ2VzUm90YXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbGVpbnB1dGNoYW5nZScsICh4OiBGaWxlSW5wdXRDaGFuZ2VkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGlmICh4LmZpbGVJbnB1dC5maWxlcyAmJiB4LmZpbGVJbnB1dC5maWxlcy5sZW5ndGggPj0gMSkge1xyXG4gICAgICAgICAgICAvLyBkcmFnIGFuZCBkcm9wXHJcbiAgICAgICAgICAgIHRoaXMuc3JjQ2hhbmdlLmVtaXQoeC5maWxlSW5wdXQuZmlsZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZWd1bGFyIGZpbGUgb3BlbiBkaWFsb2dcclxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHguZmlsZUlucHV0Py52YWx1ZT8ucmVwbGFjZSgnQzpcXFxcZmFrZXBhdGhcXFxcJywgJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJywgKHg6IEhhbmR0b29sQ2hhbmdlZCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmhhbmRUb29sID0geC50b29sID09PSBQZGZDdXJzb3JUb29scy5IQU5EO1xyXG4gICAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NpZGViYXJ2aWV3Y2hhbmdlZCcsICh4OiBTaWRlYmFydmlld0NoYW5nZSkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID4gMCk7XHJcbiAgICAgICAgICBpZiAoeC52aWV3ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNpZGViYXJWaWV3Q2hhbmdlLmVtaXQoeC52aWV3KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnNpZGViYXJDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaWRlYmFyQ29tcG9uZW50LnNob3dUb29sYmFyV2hlbk5lY2Vzc2FyeSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdkb2N1bWVudGxvYWRlZCcsIChwZGZMb2FkZWRFdmVudDogUGRmRG9jdW1lbnRMb2FkZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBwYWdlcyA9IHBkZkxvYWRlZEV2ZW50LnNvdXJjZS5wYWdlc0NvdW50O1xyXG4gICAgICAgICAgdGhpcy5wYWdlTGFiZWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZSA+PSBwYWdlcykge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlcztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2Nyb2xsU2lnbmF0dXJlV2FybmluZ0ludG9WaWV3KHBkZkxvYWRlZEV2ZW50LnNvdXJjZS5wZGZEb2N1bWVudCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5maW5kYmFyVmlzaWJsZSkge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLm9wZW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNEaWFsb2dWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5vcGVuKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3NwcmVhZG1vZGVjaGFuZ2VkJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG1vZGVzID0gWydvZmYnLCAnb2RkJywgJ2V2ZW4nXSBhcyBBcnJheTxTcHJlYWRUeXBlPjtcclxuICAgICAgICAgIHRoaXMuc3ByZWFkID0gbW9kZXNbZXZlbnQubW9kZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgaGlkZVNpZGViYXJUb29sYmFyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaWRlYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2lkZWJhckNvbXBvbmVudC5zaG93VG9vbGJhcldoZW5OZWNlc3NhcnkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdvdXRsaW5lbG9hZGVkJywgaGlkZVNpZGViYXJUb29sYmFyKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhdHRhY2htZW50c2xvYWRlZCcsIGhpZGVTaWRlYmFyVG9vbGJhcik7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignbGF5ZXJzbG9hZGVkJywgaGlkZVNpZGViYXJUb29sYmFyKTtcclxuXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9ubGF5ZXJyZW5kZXJlZCcsIChldmVudDogQW5ub3RhdGlvbkxheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmFubm90YXRpb25MYXllclJlbmRlcmVkLmVtaXQoZXZlbnQpO1xyXG4gICAgICAgICAgdGhpcy5lbmFibGVPckRpc2FibGVGb3JtcyhldmVudC5zb3VyY2UuZGl2LCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhbm5vdGF0aW9uZWRpdG9ybGF5ZXJyZW5kZXJlZCcsIChldmVudCkgPT4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHRoaXMuYW5ub3RhdGlvbkVkaXRvckxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3hmYWxheWVycmVuZGVyZWQnLCAoZXZlbnQpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLnhmYUxheWVyUmVuZGVyZWQuZW1pdChldmVudCkpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ291dGxpbmVsb2FkZWQnLCAoZXZlbnQpID0+IHRoaXMubmdab25lLnJ1bigoKSA9PiB0aGlzLm91dGxpbmVMb2FkZWQuZW1pdChldmVudCkpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2F0dGFjaG1lbnRzbG9hZGVkJywgKGV2ZW50KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5hdHRhY2htZW50c2xvYWRlZC5lbWl0KGV2ZW50KSkpO1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignbGF5ZXJzbG9hZGVkJywgKGV2ZW50KSA9PiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4gdGhpcy5sYXllcnNsb2FkZWQuZW1pdChldmVudCkpKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3ByZXNlbnRhdGlvbm1vZGVjaGFuZ2VkJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyPy5kZXN0cm95Qm9va01vZGUoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRlZmluZGNvbnRyb2xzdGF0ZScsICh4OiBGaW5kUmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgIGxldCB0eXBlID0gUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUudHlwZSB8fCAnZmluZCc7XHJcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ2FnYWluJykge1xyXG4gICAgICAgICAgICB0eXBlID0gJ2ZpbmRhZ2Fpbic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGNhc2VTZW5zaXRpdmU6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmNhc2VTZW5zaXRpdmUsXHJcbiAgICAgICAgICAgIGVudGlyZVdvcmQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmVudGlyZVdvcmQsXHJcbiAgICAgICAgICAgIGZpbmRQcmV2aW91czogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuZmluZFByZXZpb3VzLFxyXG4gICAgICAgICAgICBoaWdobGlnaHRBbGw6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLmhpZ2hsaWdodEFsbCxcclxuICAgICAgICAgICAgbWF0Y2hEaWFjcml0aWNzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5tYXRjaERpYWNyaXRpY3MsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5xdWVyeSxcclxuICAgICAgICAgICAgdHlwZSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh7XHJcbiAgICAgICAgICAgIC4uLnJlc3VsdCxcclxuICAgICAgICAgICAgY3VycmVudDogeC5tYXRjaGVzQ291bnQuY3VycmVudCxcclxuICAgICAgICAgICAgdG90YWw6IHgubWF0Y2hlc0NvdW50LnRvdGFsLFxyXG4gICAgICAgICAgICBtYXRjaGVzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXMsXHJcbiAgICAgICAgICAgIG1hdGNoZXNMZW5ndGg6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aCxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZUZpbmRTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRTdGF0ZS5lbWl0KHguc3RhdGUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRtYXRjaGVzY291bnQnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHgubWF0Y2hlc0NvdW50Lm1hdGNoZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5fcGFnZU1hdGNoZXM7XHJcbiAgICAgICAgeC5tYXRjaGVzQ291bnQubWF0Y2hlc0xlbmd0aCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLl9wYWdlTWF0Y2hlc0xlbmd0aDtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT5cclxuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHtcclxuICAgICAgICAgICAgY2FzZVNlbnNpdGl2ZTogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuY2FzZVNlbnNpdGl2ZSxcclxuICAgICAgICAgICAgZW50aXJlV29yZDogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuZW50aXJlV29yZCxcclxuICAgICAgICAgICAgZmluZFByZXZpb3VzOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS5maW5kUHJldmlvdXMsXHJcbiAgICAgICAgICAgIGhpZ2hsaWdodEFsbDogUERGVmlld2VyQXBwbGljYXRpb24uZmluZENvbnRyb2xsZXIuc3RhdGUuaGlnaGxpZ2h0QWxsLFxyXG4gICAgICAgICAgICBtYXRjaERpYWNyaXRpY3M6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLm1hdGNoRGlhY3JpdGljcyxcclxuICAgICAgICAgICAgcXVlcnk6IFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRDb250cm9sbGVyLnN0YXRlLnF1ZXJ5LFxyXG4gICAgICAgICAgICB0eXBlOiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQ29udHJvbGxlci5zdGF0ZS50eXBlLFxyXG4gICAgICAgICAgICBjdXJyZW50OiB4Lm1hdGNoZXNDb3VudC5jdXJyZW50LFxyXG4gICAgICAgICAgICB0b3RhbDogeC5tYXRjaGVzQ291bnQudG90YWwsXHJcbiAgICAgICAgICAgIG1hdGNoZXM6IHgubWF0Y2hlc0NvdW50Lm1hdGNoZXMsXHJcbiAgICAgICAgICAgIG1hdGNoZXNMZW5ndGg6IHgubWF0Y2hlc0NvdW50Lm1hdGNoZXNMZW5ndGgsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VjaGFuZ2luZycsICh4OiBQYWdlTnVtYmVyQ2hhbmdlKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNodXR0aW5nRG93bikge1xyXG4gICAgICAgICAgLy8gaHVycmllZCB1c2VycyBzb21ldGltZXMgcmVsb2FkIHRoZSBQREYgYmVmb3JlIGl0IGhhcyBmaW5pc2hlZCBpbml0aWFsaXppbmdcclxuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UGFnZUxhYmVsID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWw7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgIT09IHRoaXMucGFnZSkge1xyXG4gICAgICAgICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2VMYWJlbCAhPT0gdGhpcy5wYWdlTGFiZWwpIHtcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMYWJlbENoYW5nZS5lbWl0KGN1cnJlbnRQYWdlTGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB0aGlzLmNoZWNrSGVpZ2h0KCksIDEwMCk7XHJcbiAgICAgIC8vIG9wZW4gYSBmaWxlIGluIHRoZSB2aWV3ZXJcclxuICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICB2ZXJib3NpdHk6IHRoaXMubG9nTGV2ZWwsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5fc3JjWydyYW5nZSddKSB7XHJcbiAgICAgICAgICBvcHRpb25zLnJhbmdlID0gdGhpcy5fc3JjWydyYW5nZSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5odHRwSGVhZGVycykge1xyXG4gICAgICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHRoaXMuaHR0cEhlYWRlcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmF1dGhvcml6YXRpb24pIHtcclxuICAgICAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuYXV0aG9yaXphdGlvbiAhPSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmh0dHBIZWFkZXJzKSBvcHRpb25zLmh0dHBIZWFkZXJzID0ge307XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wdGlvbnMuYmFzZUhyZWYgPSB0aGlzLmJhc2VIcmVmO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9uRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMudXJsID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zcmMgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xyXG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NyYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gdGhpcy5fc3JjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgb3B0aW9ucy5yYW5nZUNodW5rU2l6ZSA9IHBkZkRlZmF1bHRPcHRpb25zLnJhbmdlQ2h1bmtTaXplO1xyXG4gICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcclxuICAgICAgICAgIHRoaXMucGRmTG9hZGluZ1N0YXJ0cy5lbWl0KHt9KTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4gdGhpcy5zZXRab29tKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5zaHV0dGluZ0Rvd24pIHtcclxuICAgICAgICAgIC8vIGh1cnJpZWQgdXNlcnMgc29tZXRpbWVzIHJlbG9hZCB0aGUgUERGIGJlZm9yZSBpdCBoYXMgZmluaXNoZWQgaW5pdGlhbGl6aW5nXHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSBOdW1iZXIodGhpcy5wYWdlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbW92ZVNjcm9sbGJhckluSW5maW5pdGVTY3JvbGxNb2RlKHJlc3RvcmVIZWlnaHQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcgfHwgcmVzdG9yZUhlaWdodCkge1xyXG4gICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJyk7XHJcbiAgICAgIGNvbnN0IHpvb20gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6b29tJylbMF07XHJcbiAgICAgIGlmICh2aWV3ZXIpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnBhZ2VWaWV3TW9kZSA9PT0gJ2luZmluaXRlLXNjcm9sbCcpIHtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gdmlld2VyLmNsaWVudEhlaWdodCArIDE3O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmltYXJ5TWVudVZpc2libGUpIHtcclxuICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodCArIDM1ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoZWlnaHQgPiAxNykge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlaWdodCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHpvb20pIHtcclxuICAgICAgICAgICAgICAoPEhUTUxFbGVtZW50Pnpvb20pLnN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3RvcmVIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRvSGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5faGVpZ2h0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBvcGVuUERGMigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuZGVzdHJveUJvb2tNb2RlKCk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3RvcFJlbmRlcmluZygpO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVGh1bWJuYWlsVmlld2VyLnN0b3BSZW5kZXJpbmcoKTtcclxuXHJcbiAgICAvLyAjODAyIGNsZWFyIHRoZSBmb3JtIGRhdGE7IG90aGVyd2lzZSB0aGUgXCJkb3dubG9hZFwiIGRpYWxvZ3Mgb3BlbnNcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Py5hbm5vdGF0aW9uU3RvcmFnZT8ucmVzZXRNb2RpZmllZCgpO1xyXG5cclxuICAgIGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XHJcbiAgICB0aGlzLmZvcm1TdXBwb3J0LnJlc2V0KCk7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xyXG4gICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcclxuICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLl9zcmM/LlsncmFuZ2UnXSkge1xyXG4gICAgICBvcHRpb25zLnJhbmdlID0gdGhpcy5fc3JjWydyYW5nZSddO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaHR0cEhlYWRlcnMpIHtcclxuICAgICAgb3B0aW9ucy5odHRwSGVhZGVycyA9IHRoaXMuaHR0cEhlYWRlcnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgIG9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRob3JpemF0aW9uICE9ICdib29sZWFuJykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucy5odHRwSGVhZGVycykgb3B0aW9ucy5odHRwSGVhZGVycyA9IHt9O1xyXG5cclxuICAgICAgICBvcHRpb25zLmh0dHBIZWFkZXJzLkF1dGhvcml6YXRpb24gPSB0aGlzLmF1dGhvcml6YXRpb247XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG9wdGlvbnMuYmFzZUhyZWYgPSB0aGlzLmJhc2VIcmVmO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zcmMgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgb3B0aW9ucy51cmwgPSB0aGlzLl9zcmM7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3JjIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgICBvcHRpb25zLmRhdGEgPSB0aGlzLl9zcmM7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NyYy5ieXRlTGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBzb21ldGltZXMgbmdPbkluaXQoKSBjYWxscyBvcGVuUGRmMiB0b28gZWFybHlcclxuICAgICAgICAgIC8vIHNvIGxldCdzIGlnbm9yZSBlbXB0eSBhcnJheXNcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3JjIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xyXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9IHRoaXMuX3NyYztcclxuICAgICAgICBpZiAodGhpcy5fc3JjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gc29tZXRpbWVzIG5nT25Jbml0KCkgY2FsbHMgb3BlblBkZjIgdG9vIGVhcmx5XHJcbiAgICAgICAgICAvLyBzbyBsZXQncyBpZ25vcmUgZW1wdHkgYXJyYXlzXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG9wdGlvbnMucmFuZ2VDaHVua1NpemUgPSBwZGZEZWZhdWx0T3B0aW9ucy5yYW5nZUNodW5rU2l6ZTtcclxuICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ub3BlbihvcHRpb25zKTtcclxuICAgICAgdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEN1cnNvclRvb2woKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IHRoaXMuaGFuZFRvb2wgPyAxIDogMCB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBuZ09uRGVzdHJveSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIGZhc3QgZXNjYXBlIGZvciBzZXJ2ZXIgc2lkZSByZW5kZXJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uZGVzdHJveUJvb2tNb2RlKCk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyPy5zdG9wUmVuZGVyaW5nKCk7XHJcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVGh1bWJuYWlsVmlld2VyPy5zdG9wUmVuZGVyaW5nKCk7XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWxQcmludCA9IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm9yaWdpbmFsUHJpbnQ7XHJcbiAgICBpZiAod2luZG93ICYmIG9yaWdpbmFsUHJpbnQgJiYgIW9yaWdpbmFsUHJpbnQudG9TdHJpbmcoKS5pbmNsdWRlcygncHJpbnRQZGYnKSkge1xyXG4gICAgICB3aW5kb3cucHJpbnQgPSBvcmlnaW5hbFByaW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJpbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpbnRDb250YWluZXInKTtcclxuICAgIGlmIChwcmludENvbnRhaW5lcikge1xyXG4gICAgICBwcmludENvbnRhaW5lci5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChwcmludENvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgKHdpbmRvdyBhcyBhbnkpLmdldEZvcm1WYWx1ZUZyb21Bbmd1bGFyID0gdW5kZWZpbmVkO1xyXG4gICAgKHdpbmRvdyBhcyBhbnkpLnJlZ2lzdGVyQWNyb2Zvcm1Bbm5vdGF0aW9ucyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuc2h1dHRpbmdEb3duID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLnNlcnZpY2Uubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuaW5pdFRpbWVvdXQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW5pdFRpbWVvdXQpO1xyXG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIC8vICM4MDIgY2xlYXIgdGhlIGZvcm0gZGF0YTsgb3RoZXJ3aXNlIHRoZSBcImRvd25sb2FkXCIgZGlhbG9ncyBvcGVuc1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcclxuICAgICAgdGhpcy5mb3JtU3VwcG9ydC5yZXNldCgpO1xyXG5cclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uX2NsZWFudXAoKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBqdXN0IGlnbm9yZSBpdFxyXG4gICAgICAgIC8vIGZvciBleGFtcGxlLCB0aGUgc2Vjb25kYXJ5IHRvb2xiYXIgbWF5IGhhdmUgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0LCBzb1xyXG4gICAgICAgIC8vIHRyeWluZyB0byBkZXN0cm95IGl0IHJlc3VsdCBpbiBlcnJvcnNcclxuICAgICAgfVxyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcclxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5fYm91bmRFdmVudHMpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZFdpbmRvd0V2ZW50cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBidXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cztcclxuICAgICAgICBpZiAoYnVzKSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi51bmJpbmRFdmVudHMoKTtcclxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJ1cy5fbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChidXMuX2xpc3RlbmVyc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IGJ1cy5fbGlzdGVuZXJzW2tleV07XHJcbiAgICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgdGhlIGZvciBsb29wIGlzIG5lY2Vzc2FyeSAtIGJ1dFxyXG4gICAgICAgICAgICAgIC8vIGl0IG1pZ2h0IGltcHJvdmUgZ2FyYmFnZSBjb2xsZWN0aW9uIGlmIHRoZSBcImxpc3RlbmVyc1wiXHJcbiAgICAgICAgICAgICAgLy8gYXJyYXkgaXMgc3RvcmVkIHNvbWV3aGVyZSBlbHNlXHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0W2ldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBidXMuX2xpc3RlbmVyc1trZXldID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cyBhcyBhbnkpID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzUHJpbWFyeU1lbnVWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuc2hvd1Rvb2xiYXIpIHtcclxuICAgICAgY29uc3QgdmlzaWJsZSA9XHJcbiAgICAgICAgdGhpcy5zaG93RG93bmxvYWRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dEcmF3RWRpdG9yIHx8XHJcbiAgICAgICAgdGhpcy5zaG93VGV4dEVkaXRvciB8fFxyXG4gICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dPcGVuRmlsZUJ1dHRvbiB8fFxyXG4gICAgICAgIHRoaXMuc2hvd1BhZ2luZ0J1dHRvbnMgfHxcclxuICAgICAgICB0aGlzLnNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93UHJpbnRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dQcm9wZXJ0aWVzQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93Um90YXRlQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dTY3JvbGxpbmdCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dTcHJlYWRCdXR0b24gfHxcclxuICAgICAgICB0aGlzLnNob3dTaWRlYmFyQnV0dG9uIHx8XHJcbiAgICAgICAgdGhpcy5zaG93Wm9vbUJ1dHRvbnM7XHJcblxyXG4gICAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHJldHVybjsgLy8gc2VydmVyIHNpZGUgcmVuZGVyaW5nXHJcbiAgICB9XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgICBpZiAodGhpcy5zZXJ2aWNlLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgaWYgKCdzcmMnIGluIGNoYW5nZXMgfHwgJ2Jhc2U2NFNyYycgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNyY0NoYW5nZVRyaWdnZXJlZEJ5VXNlcikge1xyXG4gICAgICAgICAgdGhpcy5zcmNDaGFuZ2VUcmlnZ2VyZWRCeVVzZXIgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZVZpZXdNb2RlID09PSAnYm9vaycpIHtcclxuICAgICAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlcj8uZGVzdHJveUJvb2tNb2RlKCk7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXI/LnN0b3BSZW5kZXJpbmcoKTtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlRodW1ibmFpbFZpZXdlcj8uc3RvcFJlbmRlcmluZygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5jb21wbGV0ZWx5SW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLm9wZW5QREYoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9wZW5QREYyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICM4MDIgY2xlYXIgdGhlIGZvcm0gZGF0YTsgb3RoZXJ3aXNlIHRoZSBcImRvd25sb2FkXCIgZGlhbG9ncyBvcGVuc1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudD8uYW5ub3RhdGlvblN0b3JhZ2U/LnJlc2V0TW9kaWZpZWQoKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtU3VwcG9ydC5yZXNldCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0RmllbGQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWc/Lm9wZW5GaWxlSW5wdXQ7XHJcbiAgICAgICAgICAgIGlmICghaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsZUlucHV0JykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgIGlucHV0RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24uY2xvc2UoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCdlbmFibGVEcmFnQW5kRHJvcCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2VuYWJsZURyYWdBbmREcm9wJywgdGhpcy5lbmFibGVEcmFnQW5kRHJvcCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnZmluZGJhclZpc2libGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlc1snZmluZGJhclZpc2libGUnXS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmZpbmRCYXIub3BlbigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5maW5kQmFyLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3Byb3BlcnRpZXNEaWFsb2dWaXNpYmxlJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydGllc0RpYWxvZ1Zpc2libGUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50UHJvcGVydGllcy5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCd6b29tJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRab29tKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICgnbWF4Wm9vbScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ21heFpvb20nLCB0aGlzLm1heFpvb20pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ21pblpvb20nIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdtaW5ab29tJywgdGhpcy5taW5ab29tKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdoYW5kVG9vbCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgncGFnZScgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2UpIHtcclxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdHJpcGxlLWVxdWFsc1xyXG4gICAgICAgICAgaWYgKHRoaXMucGFnZSAhPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSB0aGlzLnBhZ2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgncGFnZUxhYmVsJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5wYWdlTGFiZWwgIT09IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoJ3JvdGF0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm90YXRpb24pIHtcclxuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XHJcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ3Njcm9sbE1vZGUnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zY3JvbGxNb2RlIHx8IHRoaXMuc2Nyb2xsTW9kZSA9PT0gU2Nyb2xsTW9kZVR5cGUudmVydGljYWwpIHtcclxuICAgICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc2Nyb2xsTW9kZSAhPT0gTnVtYmVyKHRoaXMuc2Nyb2xsTW9kZSkpIHtcclxuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaHNjcm9sbG1vZGUnLCB7IG1vZGU6IE51bWJlcih0aGlzLnNjcm9sbE1vZGUpIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoJ2FjdGl2ZVNpZGViYXJWaWV3JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclZpc2libGUpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIub3BlbigpO1xyXG4gICAgICAgICAgY29uc3QgdmlldyA9IE51bWJlcih0aGlzLmFjdGl2ZVNpZGViYXJWaWV3KTtcclxuICAgICAgICAgIGlmICh2aWV3ID09PSAxIHx8IHZpZXcgPT09IDIgfHwgdmlldyA9PT0gMyB8fCB2aWV3ID09PSA0KSB7XHJcbiAgICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuc3dpdGNoVmlldyh2aWV3LCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1thY3RpdmVTaWRlYmFyVmlld10gbXVzdCBiZSBhbiBpbnRlZ2VyIHZhbHVlIGJldHdlZW4gMSBhbmQgNCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICgnZmlsZW5hbWVGb3JEb3dubG9hZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgnbmFtZWRkZXN0JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5nb1RvRGVzdGluYXRpb24odGhpcy5uYW1lZGRlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCdzcHJlYWQnIGluIGNoYW5nZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDI7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XHJcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAxO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAxO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAwO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xyXG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmhpZGVUb29sYmFySWZJdElzRW1wdHkoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICAgIH0gLy8gZW5kIG9mIGlmIChOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKVxyXG5cclxuICAgIGlmICgncHJpbnRSZXNvbHV0aW9uJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdpZ25vcmVLZXlib2FyZCcgaW4gY2hhbmdlcykge1xyXG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdpZ25vcmVLZXlzJyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgIGlmIChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJ2FjY2VwdEtleXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgnc2hvd0JvcmRlcnMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKCFjaGFuZ2VzWydzaG93Qm9yZGVycyddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcclxuICAgICAgICAgIGNvbnN0IHZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgIGlmICh0aGlzLnNob3dCb3JkZXJzKSB7XHJcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVQYWdlQm9yZGVycycpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xyXG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgPSAhdGhpcy5zaG93Qm9yZGVycztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IHpvb21FdmVudCA9IHtcclxuICAgICAgICAgICAgc291cmNlOiB2aWV3ZXIsXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXHJcbiAgICAgICAgICAgIHNjYWxlOiAoTnVtYmVyKHRoaXMuem9vbSkgfCAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgICBwcmVzZXRWYWx1ZTogdGhpcy56b29tLFxyXG4gICAgICAgICAgfSBhcyBTY2FsZUNoYW5naW5nRXZlbnQ7XHJcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc2NhbGVjaGFuZ2luZycsIHpvb21FdmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZEb2N1bWVudCkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll90cmFuc3BvcnQubWVzc2FnZUhhbmRsZXIuc2VuZCgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJywgdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdmb3JtRGF0YScgaW4gY2hhbmdlcykge1xyXG4gICAgICBpZiAoIWNoYW5nZXNbJ2Zvcm1EYXRhJ10uaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtU3VwcG9ydC51cGRhdGVGb3JtRmllbGRzSW5QZGZDYWxsZWRCeU5nT25DaGFuZ2VzKGNoYW5nZXNbJ2Zvcm1EYXRhJ10ucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoJ2VuYWJsZVByaW50JyBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgIGlmICghY2hhbmdlc1snZW5hYmxlUHJpbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5lbmFibGVQcmludCA9IHRoaXMuZW5hYmxlUHJpbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChcclxuICAgICAgKCdjdXN0b21GaW5kYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbUZpbmRiYXJCdXR0b25zJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyQnV0dG9ucyddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcclxuICAgICAgKCdjdXN0b21GaW5kYmFySW5wdXRBcmVhJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFySW5wdXRBcmVhJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxyXG4gICAgICAoJ2N1c3RvbVRvb2xiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbVRvb2xiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpXHJcbiAgICApIHtcclxuICAgICAgaWYgKHRoaXMuZHVtbXlDb21wb25lbnRzKSB7XHJcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHMuYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCdwYWdlVmlld01vZGUnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ3BhZ2VWaWV3TW9kZSddLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnBhZ2VWaWV3TW9kZSA9IGNoYW5nZXNbJ3BhZ2VWaWV3TW9kZSddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuICAgIGlmICgncmVwbGFjZUJyb3dzZXJQcmludCcgaW4gY2hhbmdlcyAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAodGhpcy5yZXBsYWNlQnJvd3NlclByaW50KSB7XHJcbiAgICAgICAgaWYgKCh3aW5kb3cgYXMgYW55KS5wcmludFBERikge1xyXG4gICAgICAgICAgd2luZG93LnByaW50ID0gKHdpbmRvdyBhcyBhbnkpLnByaW50UERGO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFByaW50ID0gTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQub3JpZ2luYWxQcmludDtcclxuICAgICAgICBpZiAob3JpZ2luYWxQcmludCAmJiAhb3JpZ2luYWxQcmludC50b1N0cmluZygpLmluY2x1ZGVzKCdwcmludFBkZicpKSB7XHJcbiAgICAgICAgICB3aW5kb3cucHJpbnQgPSBvcmlnaW5hbFByaW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCdkaXNhYmxlRm9ybXMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy5lbmFibGVPckRpc2FibGVGb3Jtcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgc2V0Wm9vbSgpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47IC8vIHNlcnZlciBzaWRlIHJlbmRlcmluZ1xyXG4gICAgfVxyXG4gICAgLy8gc29tZXRpbWVzIG5nT25DaGFuZ2VzIGNhbGxzIHRoaXMgbWV0aG9kIGJlZm9yZSB0aGUgcGFnZSBpcyBpbml0aWFsaXplZCxcclxuICAgIC8vIHNvIGxldCdzIGNoZWNrIGlmIHRoaXMucm9vdCBpcyBhbHJlYWR5IGRlZmluZWRcclxuICAgIGlmICh0aGlzLnJvb3QpIHtcclxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICAgIGxldCB6b29tQXNOdW1iZXIgPSB0aGlzLnpvb207XHJcbiAgICAgIGlmIChTdHJpbmcoem9vbUFzTnVtYmVyKS5lbmRzV2l0aCgnJScpKSB7XHJcbiAgICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKFN0cmluZyh6b29tQXNOdW1iZXIpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xyXG4gICAgICB9IGVsc2UgaWYgKCFpc05hTihOdW1iZXIoem9vbUFzTnVtYmVyKSkpIHtcclxuICAgICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIoem9vbUFzTnVtYmVyKSAvIDEwMDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXpvb21Bc051bWJlcikge1xyXG4gICAgICAgIGlmICghUERGVmlld2VyQXBwbGljYXRpb24uc3RvcmUpIHtcclxuICAgICAgICAgIC8vIEl0J3MgZGlmZmljdWx0IHRvIHByZXZlbnQgY2FsbGluZyB0aGlzIG1ldGhvZCB0byBlYXJseSwgc28gd2UgbmVlZCB0aGlzIGNoZWNrLlxyXG4gICAgICAgICAgLy8gc2V0Wm9vbSgpIGlzIGNhbGxlZCBsYXRlciBhZ2Fpbiwgd2hlbiB0aGUgUERGIGRvY3VtZW50IGhhcyBiZWVuIGxvYWRlZCBhbmQgaXRzXHJcbiAgICAgICAgICAvLyBmaW5nZXJwcmludCBoYXMgYmVlbiBjYWxjdWxhdGVkLlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyU2V0dGluZyA9IGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLnN0b3JlLmdldCgnem9vbScpO1xyXG4gICAgICAgICAgaWYgKHVzZXJTZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNOYU4oTnVtYmVyKHVzZXJTZXR0aW5nKSkpIHtcclxuICAgICAgICAgICAgICB6b29tQXNOdW1iZXIgPSBOdW1iZXIodXNlclNldHRpbmcpIC8gMTAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHpvb21Bc051bWJlciA9IHVzZXJTZXR0aW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB6b29tQXNOdW1iZXIgPSAnYXV0byc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2RlZmF1bHRab29tVmFsdWUnLCB6b29tQXNOdW1iZXIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBzY2FsZURyb3Bkb3duRmllbGQgPSAodGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJyNzY2FsZVNlbGVjdCcpIGFzIEhUTUxTZWxlY3RFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gICAgICBpZiAoc2NhbGVEcm9wZG93bkZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuem9vbSA9PT0gJ2F1dG8nIHx8IHRoaXMuem9vbSA9PT0gJ3BhZ2UtZml0JyB8fCB0aGlzLnpvb20gPT09ICdwYWdlLWFjdHVhbCcgfHwgdGhpcy56b29tID09PSAncGFnZS13aWR0aCcpIHtcclxuICAgICAgICAgIHNjYWxlRHJvcGRvd25GaWVsZC52YWx1ZSA9IHRoaXMuem9vbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2NhbGVEcm9wZG93bkZpZWxkLnZhbHVlID0gJ2N1c3RvbSc7XHJcbiAgICAgICAgICBpZiAoc2NhbGVEcm9wZG93bkZpZWxkLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBvcHRpb24gb2Ygc2NhbGVEcm9wZG93bkZpZWxkLm9wdGlvbnMgYXMgYW55KSB7XHJcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbi52YWx1ZSA9PT0gJ2N1c3RvbScpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoTnVtYmVyKHpvb21Bc051bWJlcikgKiAxMDBfMDAwKSAvIDEwMDB9JWA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XHJcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZVZhbHVlID0gem9vbUFzTnVtYmVyID8/ICdhdXRvJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcGRmVmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHRtbCcpO1xyXG4gICAgaWYgKHBkZlZpZXdlciAmJiBwZGZWaWV3ZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0ZXJDb250YWluZXInKTtcclxuICAgICAgaWYgKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIHRoaXMudG9vbGJhcldpZHRoSW5QaXhlbHMgPSB3aWR0aDtcclxuICAgICAgICBpZiAodGhpcy5zZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQuY2hlY2tWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpID0+IHRoaXMucmVtb3ZlU2Nyb2xsYmFySW5JbmZpbml0ZVNjcm9sbE1vZGUoZmFsc2UpKTtcclxuICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpO1xyXG4gICAgICBpZiAodmlld2VyKSB7XHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh2aWV3ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coJ1Jlc2l6ZU9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBicm93c2VyJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScpXHJcbiAgcHVibGljIG9uQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0TWVudUFsbG93ZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgc2Nyb2xsU2lnbmF0dXJlV2FybmluZ0ludG9WaWV3KHBkZjogUERGRG9jdW1lbnRQcm94eSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLyoqIFRoaXMgbWV0aG9kIGhhcyBiZWVuIGluc3BpcmVkIGJ5IGh0dHBzOi8vbWVkaXVtLmNvbS9mYWN0b3J5LW1pbmQvYW5ndWxhci1wZGYtZm9ybXMtZmE3MmIxNWMzZmJkLiBUaGFua3MsIEpvbm55IEZveCEgKi9cclxuICAgIHRoaXMuaGFzU2lnbmF0dXJlID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcGRmPy5udW1QYWdlczsgaSsrKSB7XHJcbiAgICAgIC8vIHRyYWNrIHRoZSBjdXJyZW50IHBhZ2VcclxuICAgICAgY29uc3QgcGFnZSA9IGF3YWl0IHBkZi5nZXRQYWdlKGkpO1xyXG4gICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGF3YWl0IHBhZ2UuZ2V0QW5ub3RhdGlvbnMoKTtcclxuXHJcbiAgICAgIGFubm90YXRpb25zLmZvckVhY2goKGEpID0+IHtcclxuICAgICAgICBpZiAoYS5maWVsZFR5cGUgPT09ICdTaWcnKSB7XHJcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1NpZ25hdHVyZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHZpZXdlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN2aWV3ZXJDb250YWluZXInKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICB2aWV3ZXJDb250YWluZXIuc2Nyb2xsQnkoMCwgLTMyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IHBkZj8ubnVtUGFnZXMgfSBhcyBQZGZMb2FkZWRFdmVudCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgem9vbVRvUGFnZVdpZHRoKGV2ZW50OiBNb3VzZUV2ZW50KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5oYW5kVG9vbCkge1xyXG4gICAgICBpZiAoIXBkZkRlZmF1bHRPcHRpb25zLmRvdWJsZVRhcFpvb21zSW5IYW5kTW9kZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tc0luVGV4dFNlbGVjdGlvbk1vZGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBkZXNpcmVkQ2VudGVyWSA9IGV2ZW50LmNsaWVudFk7XHJcbiAgICBjb25zdCBwcmV2aW91c1NjYWxlID0gKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmN1cnJlbnRTY2FsZTtcclxuXHJcbiAgICBpZiAodGhpcy56b29tICE9PSBwZGZEZWZhdWx0T3B0aW9ucy5kb3VibGVUYXBab29tRmFjdG9yICYmIHRoaXMuem9vbSArICclJyAhPT0gcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbUZhY3Rvcikge1xyXG4gICAgICB0aGlzLnByZXZpb3VzWm9vbSA9IHRoaXMuem9vbTtcclxuICAgICAgdGhpcy56b29tID0gcGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwWm9vbUZhY3RvcjsgLy8gYnkgZGVmYXVsdDogJ3BhZ2Utd2lkdGgnO1xyXG4gICAgICBhd2FpdCB0aGlzLnNldFpvb20oKTtcclxuICAgIH0gZWxzZSBpZiAocGRmRGVmYXVsdE9wdGlvbnMuZG91YmxlVGFwUmVzZXRzWm9vbU9uU2Vjb25kRG91YmxlVGFwKSB7XHJcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzWm9vbSkge1xyXG4gICAgICAgIHRoaXMuem9vbSA9IHRoaXMucHJldmlvdXNab29tO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuem9vbSA9ICdwYWdlLXdpZHRoJztcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLnNldFpvb20oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjdXJyZW50U2NhbGUgPSAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyIGFzIGFueSkuY3VycmVudFNjYWxlO1xyXG4gICAgY29uc3Qgc2NhbGVDb3JyZWN0aW9uRmFjdG9yID0gY3VycmVudFNjYWxlIC8gcHJldmlvdXNTY2FsZSAtIDE7XHJcbiAgICBjb25zdCByZWN0ID0gKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlciBhcyBhbnkpLmNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IGR5ID0gZGVzaXJlZENlbnRlclkgLSByZWN0LnRvcDtcclxuICAgIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55KS5jb250YWluZXIuc2Nyb2xsVG9wICs9IGR5ICogc2NhbGVDb3JyZWN0aW9uRmFjdG9yO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBlbmFibGVPckRpc2FibGVGb3JtcyhkaXY6IEhUTUxFbGVtZW50LCBkb05vdEVuYWJsZTogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVGb3JtcyAmJiBkb05vdEVuYWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB4ZmFMYXllcnMgPSBBcnJheS5mcm9tKGRpdi5xdWVyeVNlbGVjdG9yQWxsKCcueGZhTGF5ZXInKSk7XHJcbiAgICBjb25zdCBhY3JvRm9ybUxheWVycyA9IEFycmF5LmZyb20oZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbm5vdGF0aW9uTGF5ZXInKSk7XHJcbiAgICBjb25zdCBsYXllcnMgPSB4ZmFMYXllcnMuY29uY2F0KC4uLmFjcm9Gb3JtTGF5ZXJzKTtcclxuICAgIGxheWVycy5mb3JFYWNoKChsYXllcikgPT4gbGF5ZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKS5mb3JFYWNoKCh4KSA9PiAoeC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZvcm1zKSkpO1xyXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKS5mb3JFYWNoKCh4KSA9PiAoeC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZvcm1zKSkpO1xyXG4gICAgbGF5ZXJzLmZvckVhY2goKGxheWVyKSA9PiBsYXllci5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpLmZvckVhY2goKHgpID0+ICh4LmRpc2FibGVkID0gdGhpcy5kaXNhYmxlRm9ybXMpKSk7XHJcbiAgfVxyXG59XHJcbiIsIjxwZGYtZGFyay10aGVtZSAqbmdJZj1cInRoZW1lID09PSAnZGFyaydcIj48L3BkZi1kYXJrLXRoZW1lPlxyXG48cGRmLWxpZ2h0LXRoZW1lICpuZ0lmPVwidGhlbWUgPT09ICdsaWdodCdcIj48L3BkZi1saWdodC10aGVtZT5cclxuPHBkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lPjwvcGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWU+XHJcblxyXG48cGRmLWR5bmFtaWMtY3NzIFt6b29tXT1cIm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlXCIgW3dpZHRoXT1cInRvb2xiYXJXaWR0aEluUGl4ZWxzXCI+PC9wZGYtZHluYW1pYy1jc3M+XHJcbjxuZy1jb250ZW50ICpuZ1RlbXBsYXRlT3V0bGV0PVwiY3VzdG9tUGRmVmlld2VyID8gY3VzdG9tUGRmVmlld2VyIDogZGVmYXVsdFBkZlZpZXdlclwiPjwvbmctY29udGVudD5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdFBkZlZpZXdlcj5cclxuICA8ZGl2IGNsYXNzPVwiem9vbVwiIFtzdHlsZS5oZWlnaHRdPVwibWluSGVpZ2h0ID8gbWluSGVpZ2h0IDogaGVpZ2h0XCIgI3Jvb3Q+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaHRtbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm9keSBwZGYtanMtdmVyc2lvbi17eyBtYWpvck1pbm9yUGRmSnNWZXJzaW9uIH19XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kQ29sb3JcIj5cclxuICAgICAgICA8ZGl2IGlkPVwib3V0ZXJDb250YWluZXJcIiAod2luZG93OnJlc2l6ZSk9XCJvblJlc2l6ZSgpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnJlZS1mbG9hdGluZy1iYXJcIiAqbmdJZj1cInNob3dGcmVlRmxvYXRpbmdCYXJcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjdXN0b21GcmVlRmxvYXRpbmdCYXIgPyBjdXN0b21GcmVlRmxvYXRpbmdCYXIgOiBkZWZhdWx0RnJlZUZsb2F0aW5nQmFyXCI+IDwvbmctY29udGVudD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHBkZi1zaWRlYmFyXHJcbiAgICAgICAgICAgICNwZGZzaWRlYmFyXHJcbiAgICAgICAgICAgIFtzaWRlYmFyVmlzaWJsZV09XCJzaWRlYmFyVmlzaWJsZSB8fCBmYWxzZVwiXHJcbiAgICAgICAgICAgIFtzaG93U2lkZWJhckJ1dHRvbl09XCJzaG93U2lkZWJhckJ1dHRvblwiXHJcbiAgICAgICAgICAgIFtjdXN0b21TaWRlYmFyXT1cImN1c3RvbVNpZGViYXJcIlxyXG4gICAgICAgICAgICBbY3VzdG9tVGh1bWJuYWlsXT1cImN1c3RvbVRodW1ibmFpbFwiXHJcbiAgICAgICAgICAgICh0aHVtYm5haWxEcmF3bik9XCJ0aHVtYm5haWxEcmF3bi5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgICAgICAgICBbc2lkZWJhclBvc2l0aW9uVG9wXT1cInNpZGViYXJQb3NpdGlvblRvcFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L3BkZi1zaWRlYmFyPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1haW5Db250YWluZXJcIiBbY2xhc3MudG9vbGJhci1oaWRkZW5dPVwiIXByaW1hcnlNZW51VmlzaWJsZVwiPlxyXG4gICAgICAgICAgICA8cGRmLWR1bW15LWNvbXBvbmVudHM+PC9wZGYtZHVtbXktY29tcG9uZW50cz5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtdG9vbGJhclxyXG4gICAgICAgICAgICAgIChvblRvb2xiYXJMb2FkZWQpPVwib25Ub29sYmFyTG9hZGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgIFtzaWRlYmFyVmlzaWJsZV09XCJzaWRlYmFyVmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLnNlcnZlci1zaWRlLXJlbmRlcmluZ109XCJzZXJ2ZXJTaWRlUmVuZGVyaW5nXCJcclxuICAgICAgICAgICAgICBbY3VzdG9tVG9vbGJhcl09XCJjdXN0b21Ub29sYmFyXCJcclxuICAgICAgICAgICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgICAgICAgICAgIFsocGFnZVZpZXdNb2RlKV09XCJwYWdlVmlld01vZGVcIlxyXG4gICAgICAgICAgICAgIFtwcmltYXJ5TWVudVZpc2libGVdPVwicHJpbWFyeU1lbnVWaXNpYmxlXCJcclxuICAgICAgICAgICAgICBbc2Nyb2xsTW9kZV09XCJzY3JvbGxNb2RlID8/IDBcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJvcGVydGllc0J1dHRvbl09XCJzaG93UHJvcGVydGllc0J1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dCb29rTW9kZUJ1dHRvbl09XCJzaG93Qm9va01vZGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93RG93bmxvYWRCdXR0b25dPVwic2hvd0Rvd25sb2FkQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd0RyYXdFZGl0b3JdPVwic2hvd0RyYXdFZGl0b3JcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEJ1dHRvbl09XCJzaG93RmluZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dIYW5kVG9vbEJ1dHRvbl09XCJzaG93SGFuZFRvb2xCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvbl09XCJzaG93SG9yaXpvbnRhbFNjcm9sbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dJbmZpbml0ZVNjcm9sbEJ1dHRvbl09XCJzaG93SW5maW5pdGVTY3JvbGxCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93T3BlbkZpbGVCdXR0b25dPVwic2hvd09wZW5GaWxlQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1BhZ2luZ0J1dHRvbnNdPVwic2hvd1BhZ2luZ0J1dHRvbnNcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbl09XCJzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiAmJiBwYWdlVmlld01vZGUgIT09ICdib29rJ1wiXHJcbiAgICAgICAgICAgICAgW3Nob3dQcmludEJ1dHRvbl09XCJzaG93UHJpbnRCdXR0b24gJiYgZW5hYmxlUHJpbnRcIlxyXG4gICAgICAgICAgICAgIFtzaG93Um90YXRlQnV0dG9uXT1cInNob3dSb3RhdGVCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbl09XCJzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiAmJiAhc2VydmljZS5zZWNvbmRhcnlNZW51SXNFbXB0eVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTaWRlYmFyQnV0dG9uXT1cInNob3dTaWRlYmFyQnV0dG9uXCJcclxuICAgICAgICAgICAgICBbc2hvd1NpbmdsZVBhZ2VNb2RlQnV0dG9uXT1cInNob3dTaW5nbGVQYWdlTW9kZUJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTcHJlYWRCdXR0b25dPVwic2hvd1NwcmVhZEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdGFtcEVkaXRvcl09XCJzaG93U3RhbXBFZGl0b3JcIlxyXG4gICAgICAgICAgICAgIFtzaG93VGV4dEVkaXRvcl09XCJzaG93VGV4dEVkaXRvclwiXHJcbiAgICAgICAgICAgICAgW3Nob3dWZXJ0aWNhbFNjcm9sbEJ1dHRvbl09XCJzaG93VmVydGljYWxTY3JvbGxCdXR0b25cIlxyXG4gICAgICAgICAgICAgIFtzaG93V3JhcHBlZFNjcm9sbEJ1dHRvbl09XCJzaG93V3JhcHBlZFNjcm9sbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgW3Nob3dab29tQnV0dG9uc109XCJzaG93Wm9vbUJ1dHRvbnMgJiYgcGFnZVZpZXdNb2RlICE9PSAnYm9vaydcIlxyXG4gICAgICAgICAgICAgIFtzcHJlYWRdPVwic3ByZWFkXCJcclxuICAgICAgICAgICAgICBbdGV4dExheWVyXT1cInRleHRMYXllclwiXHJcbiAgICAgICAgICAgICAgW3Rvb2xiYXJNYXJnaW5Ub3BdPVwidG9vbGJhck1hcmdpblRvcFwiXHJcbiAgICAgICAgICAgICAgW3Rvb2xiYXJXaWR0aF09XCJ0b29sYmFyV2lkdGhcIlxyXG4gICAgICAgICAgICAgIFt6b29tTGV2ZWxzXT1cInpvb21MZXZlbHNcIlxyXG4gICAgICAgICAgICAgIFtmaW5kYmFyVmlzaWJsZV09XCJmaW5kYmFyVmlzaWJsZVwiXHJcbiAgICAgICAgICAgID48L3BkZi10b29sYmFyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXIgaGlkZGVuIGRvb3JIYW5nZXJSaWdodFwiIGlkPVwiZWRpdG9yRnJlZVRleHRQYXJhbXNUb29sYmFyXCIgW2NsYXNzLnNlcnZlci1zaWRlLXJlbmRlcmluZ109XCJzZXJ2ZXJTaWRlUmVuZGVyaW5nXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvckZyZWVUZXh0Q29sb3JcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2ZyZWVfdGV4dF9jb2xvclwiPkZvbnQgQ29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJlZGl0b3JGcmVlVGV4dENvbG9yXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNDb2xvclwiIHRhYmluZGV4PVwiMTAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1NldHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdG9yRnJlZVRleHRGb250U2l6ZVwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIiBkYXRhLWwxMG4taWQ9XCJlZGl0b3JfZnJlZV90ZXh0X3NpemVcIj5Gb250IFNpemU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgaWQ9XCJlZGl0b3JGcmVlVGV4dEZvbnRTaXplXCIgY2xhc3M9XCJlZGl0b3JQYXJhbXNTbGlkZXJcIiB2YWx1ZT1cIjEwXCIgbWluPVwiNVwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXRvclBhcmFtc1Rvb2xiYXIgaGlkZGVuIGRvb3JIYW5nZXJSaWdodFwiIGlkPVwiZWRpdG9ySW5rUGFyYW1zVG9vbGJhclwiIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNUb29sYmFyQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yUGFyYW1zU2V0dGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0b3JJbmtDb2xvclwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIiBkYXRhLWwxMG4taWQ9XCJlZGl0b3JfaW5rX2NvbG9yXCI+Q29sb3I8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNvbG9yXCIgaWQ9XCJlZGl0b3JJbmtDb2xvclwiIGNsYXNzPVwiZWRpdG9yUGFyYW1zQ29sb3JcIiB0YWJpbmRleD1cIjEwMlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvcklua1RoaWNrbmVzc1wiIGNsYXNzPVwiZWRpdG9yUGFyYW1zTGFiZWxcIiBkYXRhLWwxMG4taWQ9XCJlZGl0b3JfaW5rX3RoaWNrbmVzc1wiPlRoaWNrbmVzczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXRvcklua1RoaWNrbmVzc1wiIGNsYXNzPVwiZWRpdG9yUGFyYW1zU2xpZGVyXCIgdmFsdWU9XCIxXCIgbWluPVwiMVwiIG1heD1cIjIwXCIgc3RlcD1cIjFcIiB0YWJpbmRleD1cIjEwM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0b3JQYXJhbXNTZXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXRvcklua09wYWNpdHlcIiBjbGFzcz1cImVkaXRvclBhcmFtc0xhYmVsXCIgZGF0YS1sMTBuLWlkPVwiZWRpdG9yX2lua19vcGFjaXR5XCI+T3BhY2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXRvcklua09wYWNpdHlcIiBjbGFzcz1cImVkaXRvclBhcmFtc1NsaWRlclwiIHZhbHVlPVwiMTAwXCIgbWluPVwiMVwiIG1heD1cIjEwMFwiIHN0ZXA9XCIxXCIgdGFiaW5kZXg9XCIxMDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHBkZi1zZWNvbmRhcnktdG9vbGJhclxyXG4gICAgICAgICAgICAgICNwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50XHJcbiAgICAgICAgICAgICAgW2NsYXNzLnNlcnZlci1zaWRlLXJlbmRlcmluZ109XCJzZXJ2ZXJTaWRlUmVuZGVyaW5nXCJcclxuICAgICAgICAgICAgICBbY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcl09XCJjdXN0b21TZWNvbmRhcnlUb29sYmFyXCJcclxuICAgICAgICAgICAgICBbc2Vjb25kYXJ5VG9vbGJhclRvcF09XCJzZWNvbmRhcnlUb29sYmFyVG9wXCJcclxuICAgICAgICAgICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgICAgICAgICAgIChzcHJlYWRDaGFuZ2UpPVwib25TcHJlYWRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgW2xvY2FsaXphdGlvbkluaXRpYWxpemVkXT1cImxvY2FsaXphdGlvbkluaXRpYWxpemVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3BkZi1zZWNvbmRhcnktdG9vbGJhcj5cclxuXHJcbiAgICAgICAgICAgIDxwZGYtZmluZGJhclxyXG4gICAgICAgICAgICAgIFtjbGFzcy5zZXJ2ZXItc2lkZS1yZW5kZXJpbmddPVwic2VydmVyU2lkZVJlbmRlcmluZ1wiXHJcbiAgICAgICAgICAgICAgW2ZpbmRiYXJMZWZ0XT1cImZpbmRiYXJMZWZ0XCJcclxuICAgICAgICAgICAgICBbZmluZGJhclRvcF09XCJmaW5kYmFyVG9wXCJcclxuICAgICAgICAgICAgICBbbW9iaWxlRnJpZW5kbHlab29tU2NhbGVdPVwibW9iaWxlRnJpZW5kbHlab29tU2NhbGVcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEJ1dHRvbl09XCJzaG93RmluZEJ1dHRvbiB8fCBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgW2N1c3RvbUZpbmRiYXJJbnB1dEFyZWFdPVwiY3VzdG9tRmluZGJhcklucHV0QXJlYVwiXHJcbiAgICAgICAgICAgICAgW2N1c3RvbUZpbmRiYXJCdXR0b25zXT1cImN1c3RvbUZpbmRiYXJCdXR0b25zXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRDdXJyZW50UGFnZU9ubHldPVwic2hvd0ZpbmRDdXJyZW50UGFnZU9ubHlcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEVudGlyZVBocmFzZV09XCJzaG93RmluZEVudGlyZVBocmFzZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kRW50aXJlV29yZF09XCJzaG93RmluZEVudGlyZVdvcmRcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEZ1enp5U2VhcmNoXT1cInNob3dGaW5kRnV6enlTZWFyY2hcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZEhpZ2hsaWdodEFsbF09XCJzaG93RmluZEhpZ2hsaWdodEFsbFwiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kTWF0Y2hEaWFjcml0aWNzXT1cInNob3dGaW5kTWF0Y2hEaWFjcml0aWNzXCJcclxuICAgICAgICAgICAgICBbc2hvd0ZpbmRNYXRjaENhc2VdPVwic2hvd0ZpbmRNYXRjaENhc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZE1lc3NhZ2VzXT1cInNob3dGaW5kTWVzc2FnZXNcIlxyXG4gICAgICAgICAgICAgIFtzaG93RmluZFBhZ2VSYW5nZV09XCJzaG93RmluZFBhZ2VSYW5nZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dGaW5kUmVzdWx0c0NvdW50XT1cInNob3dGaW5kUmVzdWx0c0NvdW50XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8L3BkZi1maW5kYmFyPlxyXG5cclxuICAgICAgICAgICAgPHBkZi1jb250ZXh0LW1lbnU+PC9wZGYtY29udGV4dC1tZW51PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInZpZXdlckNvbnRhaW5lclwiIFtzdHlsZS50b3BdPVwidmlld2VyUG9zaXRpb25Ub3BcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRDb2xvclwiIHRhYmluZGV4PVwiMFwiIHJvbGU9XCJkb2N1bWVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1bnZlcmlmaWVkLXNpZ25hdHVyZS13YXJuaW5nXCIgKm5nSWY9XCJoYXNTaWduYXR1cmUgJiYgc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICB7e1xyXG4gICAgICAgICAgICAgICAgICAndW52ZXJpZmllZF9zaWduYXR1cmVfd2FybmluZydcclxuICAgICAgICAgICAgICAgICAgICB8IHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlRoaXMgUERGIGZpbGUgY29udGFpbnMgYSBkaWdpdGFsIHNpZ25hdHVyZS4gVGhlIFBERiB2aWV3ZXIgY2FuJ3QgdmVyaWZ5IGlmIHRoZSBzaWduYXR1cmUgaXMgdmFsaWQuXHJcbiAgICAgICAgICAgICAgICBQbGVhc2UgZG93bmxvYWQgdGhlIGZpbGUgYW5kIG9wZW4gaXQgaW4gQWNyb2JhdCBSZWFkZXIgdG8gdmVyaWZ5IHRoZSBzaWduYXR1cmUgaXMgdmFsaWQuXCJcclxuICAgICAgICAgICAgICAgICAgICB8IGFzeW5jXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ2aWV3ZXJcIiBjbGFzcz1cInBkZlZpZXdlclwiIChkYmxjbGljayk9XCJ6b29tVG9QYWdlV2lkdGgoJGV2ZW50KVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHBkZi1lcnJvci1tZXNzYWdlPjwvcGRmLWVycm9yLW1lc3NhZ2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS0gbWFpbkNvbnRhaW5lciAtLT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZGlhbG9nQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxwZGYtcGFzc3dvcmQtZGlhbG9nPjwvcGRmLXBhc3N3b3JkLWRpYWxvZz5cclxuICAgICAgICAgICAgPHBkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLWRpYWxvZz48L3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLWRpYWxvZz5cclxuICAgICAgICAgICAgPHBkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZz48L3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPCEtLSBkaWFsb2dDb250YWluZXIgLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSBvdXRlckNvbnRhaW5lciAtLT5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVJbnB1dFwiIGNsYXNzPVwiaGlkZGVuXCIgW2NsYXNzLnNlcnZlci1zaWRlLXJlbmRlcmluZ109XCJzZXJ2ZXJTaWRlUmVuZGVyaW5nXCIgLz5cclxuICAgICAgICA8ZGl2IGlkPVwicHJpbnRDb250YWluZXJcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZyZWVGbG9hdGluZ0Jhcj4gPC9uZy10ZW1wbGF0ZT5cclxuIl19