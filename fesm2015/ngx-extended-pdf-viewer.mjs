import { __awaiter } from 'tslib';
import * as i4 from '@angular/common';
import { DOCUMENT, isPlatformBrowser, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, EventEmitter, Injectable, Inject, Pipe, PLATFORM_ID, Input, ViewChild, Output, HostListener, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import * as i2 from '@angular/platform-browser';
import * as i2$1 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs/operators';

var FindState;
(function (FindState) {
    FindState[FindState["FOUND"] = 0] = "FOUND";
    FindState[FindState["NOT_FOUND"] = 1] = "NOT_FOUND";
    FindState[FindState["WRAPPED"] = 2] = "WRAPPED";
    FindState[FindState["PENDING"] = 3] = "PENDING";
})(FindState || (FindState = {}));

var PdfCursorTools;
(function (PdfCursorTools) {
    PdfCursorTools[PdfCursorTools["SELECT"] = 0] = "SELECT";
    PdfCursorTools[PdfCursorTools["HAND"] = 1] = "HAND";
    PdfCursorTools[PdfCursorTools["ZOOM"] = 2] = "ZOOM";
})(PdfCursorTools || (PdfCursorTools = {}));

const _isIE11 = typeof window === 'undefined' ? false : !!window.MSInputMethodContext && !!document.documentMode;
const isEdge = typeof navigator === 'undefined' || /Edge\/\d./i.test(navigator.userAgent);
const needsES5 = typeof ReadableStream === 'undefined' || typeof Promise['allSettled'] === 'undefined';
const pdfjsVersion = '4.0.721';
const pdfjsBleedingEdgeVersion = '4.1.0';
function getVersionSuffix(folder) {
    if (folder === null || folder === void 0 ? void 0 : folder.includes('bleeding-edge')) {
        console.log("The bleeding edge version has been deleted in version 18.1.11.");
    }
    return pdfjsVersion;
}
function assetsUrl(url, postfixIfPathIsRelativ = '') {
    if (url.includes('://')) {
        // the assets folder is on an absolute path (like https://example.com/assets)
        return url;
    }
    return `./${url + postfixIfPathIsRelativ}`;
}
const AnnotationMode = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3,
};
const AnnotationEditorType = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    INK: 15,
};
function getDefaultLanguage() {
    if (typeof navigator !== 'undefined') {
        return (navigator === null || navigator === void 0 ? void 0 : navigator.language) || 'en-US';
    }
    return 'en-US';
}
let pdfDefaultOptions = {
    needsES5: _isIE11 || isEdge || needsES5,
    annotationEditorMode: 0,
    annotationMode: 2,
    defaultZoomDelay: 400,
    cursorToolOnLoad: 0,
    defaultUrl: '',
    defaultZoomValue: undefined,
    disableHistory: false,
    disablePageLabels: false,
    enablePermissions: false,
    docBaseUrl: '',
    enablePrintAutoRotate: true,
    externalLinkRel: 'noopener noreferrer nofollow',
    externalLinkTarget: 0,
    historyUpdateUrl: false,
    ignoreDestinationZoom: false,
    imageResourcesPath: './images/',
    maxCanvasPixels: 16777216,
    forcePageColors: false,
    pageColorsBackground: 'Canvas',
    pageColorsForeground: 'CanvasText',
    pdfBugEnabled: false,
    printResolution: 150,
    rangeChunkSize: 65536,
    removePageBorders: false,
    renderer: 'canvas',
    renderForms: true,
    enableXfa: true,
    fontExtraProperties: false,
    sidebarViewOnLoad: -1,
    scrollModeOnLoad: -1,
    spreadModeOnLoad: -1,
    textLayerMode: 1,
    useOnlyCssZoom: false,
    // viewerCssTheme: 0, // not supported by ngx-extended-pdf-viewer
    viewOnLoad: 0,
    cMapPacked: true,
    cMapUrl: () => `${assetsUrl(pdfDefaultOptions.assetsFolder, '/..')}/cmaps/`,
    disableAutoFetch: false,
    disableFontFace: false,
    disableRange: false,
    disableStream: false,
    isEvalSupported: true,
    isOffscreenCanvasSupported: true,
    maxImageSize: -1,
    pdfBug: false,
    postMessageTransfers: true,
    verbosity: 1,
    workerPort: null,
    assetsFolder: 'assets',
    sandboxBundleSrc: () => pdfDefaultOptions.needsES5
        ? `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.sandbox-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}-es5.js`
        : `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.sandbox-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}.js`,
    workerSrc: () => pdfDefaultOptions.needsES5
        ? `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.worker-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}-es5.js`
        : `${assetsUrl(pdfDefaultOptions.assetsFolder)}/pdf.worker-${getVersionSuffix(assetsUrl(pdfDefaultOptions.assetsFolder))}.js`,
    standardFontDataUrl: () => `${assetsUrl(pdfDefaultOptions.assetsFolder, '/..')}/standard_fonts/`,
    // options specific to ngx-extended-pdf-viewer (as opposed to being used by pdf.js)
    doubleTapZoomFactor: 'page-width',
    doubleTapZoomsInHandMode: true,
    doubleTapZoomsInTextSelectionMode: false,
    doubleTapResetsZoomOnSecondDoubleTap: false,
    enableScripting: true,
    defaultCacheSize: 50,
    passwordPrompt: undefined,
    locale: getDefaultLanguage(),
    activateWillReadFrequentlyFlag: false,
};
if (typeof window !== 'undefined') {
    if (window.pdfDefaultOptions) {
        pdfDefaultOptions = window.pdfDefaultOptions;
    }
    else {
        window.pdfDefaultOptions = pdfDefaultOptions;
    }
}

var ScrollModeType;
(function (ScrollModeType) {
    ScrollModeType[ScrollModeType["vertical"] = 0] = "vertical";
    ScrollModeType[ScrollModeType["horizontal"] = 1] = "horizontal";
    ScrollModeType[ScrollModeType["wrapped"] = 2] = "wrapped";
    ScrollModeType[ScrollModeType["page"] = 3] = "page";
})(ScrollModeType || (ScrollModeType = {}));
var SpreadModeType;
(function (SpreadModeType) {
    SpreadModeType[SpreadModeType["UNKNOWN"] = -1] = "UNKNOWN";
    SpreadModeType[SpreadModeType["NONE"] = 0] = "NONE";
    SpreadModeType[SpreadModeType["ODD"] = 1] = "ODD";
    SpreadModeType[SpreadModeType["EVEN"] = 2] = "EVEN";
})(SpreadModeType || (SpreadModeType = {}));

var VerbosityLevel;
(function (VerbosityLevel) {
    VerbosityLevel[VerbosityLevel["ERRORS"] = 0] = "ERRORS";
    VerbosityLevel[VerbosityLevel["WARNINGS"] = 1] = "WARNINGS";
    VerbosityLevel[VerbosityLevel["INFOS"] = 5] = "INFOS";
})(VerbosityLevel || (VerbosityLevel = {}));

/** List of all fields that can be customized */
const requiredIds = [
    'attachmentsView',
    'authorField',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCcw',
    'contextPageRotateCw',
    'creationDateField',
    'creatorField',
    'currentOutlineItem',
    'cursorHandTool',
    'cursorSelectTool',
    'customScaleOption',
    'documentProperties',
    'documentPropertiesClose',
    'download',
    'editorFreeText',
    'editorInk',
    'editorStamp',
    'editorModeButtons',
    'editorNone',
    'editorStampAddImage',
    'errorClose',
    'errorMessage',
    'errorMoreInfo',
    'errorShowLess',
    'errorShowMore',
    'errorWrapper',
    'fileNameField',
    'fileSizeField',
    'findbar',
    'findCurrentPage',
    'findEntireWord',
    'findFuzzy',
    'findHighlightAll',
    'findIgnoreAccents',
    'findInput',
    'findInputMultiline',
    'findMatchCase',
    'findMatchDiacritics',
    'findMsg',
    'findMultipleSearchTexts',
    'findNext',
    'findPrevious',
    'findRange',
    'findResultsCount',
    'firstPage',
    'individualWordsMode',
    'individualWordsModeLabel',
    'keywordsField',
    'lastPage',
    'linearizedField',
    'modificationDateField',
    'next',
    'numPages',
    'openFile',
    'outerContainer',
    'outerContainer',
    'outlineOptionsContainer',
    'outlineView',
    'pageCountField',
    'pageNumber',
    'pageRotateCcw',
    'pageRotateCw',
    'pageSizeField',
    'password',
    'passwordCancel',
    'passwordSubmit',
    'passwordText',
    'presentationMode',
    'previous',
    'print',
    'producerField',
    'scaleSelect',
    'scaleSelectContainer',
    'scaleSelectContainer',
    'scrollHorizontal',
    'scrollPage',
    'scrollVertical',
    'scrollWrapped',
    'secondaryDownload',
    'secondaryOpenFile',
    'secondaryPresentationMode',
    'secondaryPrint',
    'secondaryToolbar',
    'secondaryToolbarButtonContainer',
    'secondaryToolbarToggle',
    'secondaryViewBookmark',
    'sidebarResizer',
    'sidebarToggle',
    'spreadEven',
    'spreadNone',
    'spreadOdd',
    'subjectField',
    'thumbnailView',
    'titleField',
    'toolbarViewer',
    'versionField',
    'viewAttachments',
    'viewAttachments',
    'viewBookmark',
    'viewerContainer',
    'viewFind',
    'viewFind',
    'viewLayers',
    'viewOutline',
    'viewOutline',
    'viewThumbnail',
    'viewThumbnail',
    'zoomIn',
    'zoomOut',
];
class PdfDummyComponentsComponent {
    addMissingStandardWidgets() {
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        const container = this.dummyComponentsContainer;
        if (!container) {
            return;
        }
        for (let i = 0; i < container.children.length; i++) {
            const child = container.firstChild;
            if (child) {
                container.removeChild(child);
            }
        }
        requiredIds.forEach((id) => {
            if (this.needsDummyWidget(id)) {
                const dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                this.dummyComponentsContainer.appendChild(dummy);
            }
        });
        if (this.needsDummyWidget('scaleSelect')) {
            const dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    }
    needsDummyWidget(id) {
        const widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    }
}
PdfDummyComponentsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDummyComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDummyComponentsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDummyComponentsComponent, selector: "pdf-dummy-components", ngImport: i0, template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDummyComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-dummy-components', template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" }]
        }] });

class UnitToPx {
    static initElements() {
        if (!document) {
            return;
        }
        if (!this.con || !this.el) {
            this.con = document.createElement('div');
            this.el = document.createElement('div');
        }
        this.con.style.position = 'absolute';
        this.con.style.width = '0';
        this.con.style.height = '0';
        this.con.style.visibility = 'hidden';
        this.con.style.overflow = 'hidden';
        this.con.appendChild(this.el);
    }
    static pxPerUnit(unit) {
        if (!this.pxPerUnitCache[unit]) {
            if (!this.con || !this.el) {
                this.initElements();
            }
            if (!this.con || !this.el) {
                // dummy implementation for server-side rendering
                return 1;
            }
            this.el.style.width = this.sample + unit;
            document.body.appendChild(this.con);
            const dimension = this.el.getBoundingClientRect();
            this.con.parentNode.removeChild(this.con);
            this.pxPerUnitCache[unit] = dimension.width / this.sample;
        }
        return this.pxPerUnitCache[unit];
    }
    static toPx(length) {
        const unitRe = /^\s*([+-]?[\d\.]*)\s*(.*)\s*$/i; // NOSONAR
        const match = unitRe.exec(length);
        if (match != null && match.length > 2) {
            const bare = match[1] === '';
            const val = bare ? 1 : Number(match[1]);
            const unit = match[2];
            const valid = !isNaN(val) && unit;
            if (valid) {
                return unit === 'px' ? val : this.pxPerUnit(unit) * val;
            }
        }
        throw new TypeError('Error parsing length');
    }
}
// cache this.con, el for reused
UnitToPx.con = undefined;
UnitToPx.el = undefined;
// high sample will more accurate?
UnitToPx.sample = 100;
UnitToPx.pxPerUnitCache = {};

class NgxFormSupport {
    constructor() {
        /** Maps the internal ids of the annotations of pdf.js to their field name */
        this.formIdToFullFieldName = {};
        this.formIdToField = {};
        this.radioButtons = {};
        this.formData = {};
        this.formDataChange = new EventEmitter();
    }
    reset() {
        this.formData = {};
        this.formIdToFullFieldName = {};
    }
    registerFormSupportWithPdfjs(ngZone) {
        this.ngZone = ngZone;
        globalThis.getFormValueFromAngular = (key) => this.getFormValueFromAngular(key);
        globalThis.updateAngularFormValue = (key, value) => this.updateAngularFormValueCalledByPdfjs(key, value);
        globalThis.registerAcroformField = (id, element, value, radioButtonValueName) => this.registerAcroformField(id, element, value, radioButtonValueName);
        globalThis.registerXFAField = (element, value) => this.registerXFAField(element, value);
    }
    registerAcroformField(id, element, value, radioButtonValueName) {
        const fieldName = element.name;
        this.formIdToField[id] = element;
        this.formIdToFullFieldName[id] = fieldName;
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            const groupName = fieldName;
            this.formIdToFullFieldName[id] = groupName;
            if (value) {
                this.formData[groupName] = radioButtonValueName;
            }
            element.setAttribute('exportValue', radioButtonValueName);
            if (!this.radioButtons[groupName]) {
                this.radioButtons[groupName] = [];
            }
            this.radioButtons[groupName].push(element);
        }
        else if (element instanceof HTMLSelectElement) {
            this.formData[fieldName] = this.getValueOfASelectField(element);
        }
        else {
            this.formData[fieldName] = value;
        }
    }
    registerXFAField(element, value) {
        var _a, _b, _c, _d;
        const fullFieldName = this.findFullXFAName(element);
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            const id = (_a = element.getAttribute('fieldid')) !== null && _a !== void 0 ? _a : '';
            // remove the xfa name of the radio button itself form the field name,
            // because the field name refers to the entire group of relatated radio buttons
            const groupName = fullFieldName.substring(0, fullFieldName.lastIndexOf('.'));
            this.formIdToFullFieldName[id] = groupName;
            this.formData[groupName] = value.value;
            if (!this.radioButtons[groupName]) {
                this.radioButtons[groupName] = [];
            }
            this.radioButtons[groupName].push(element);
        }
        else if (element instanceof HTMLInputElement) {
            const id = (_b = element.getAttribute('fieldid')) !== null && _b !== void 0 ? _b : '';
            this.formIdToField[id] = element;
            this.formIdToFullFieldName[id] = fullFieldName;
            this.formData[fullFieldName] = value.value;
        }
        else if (element instanceof HTMLSelectElement) {
            const id = (_c = element.getAttribute('fieldid')) !== null && _c !== void 0 ? _c : '';
            this.formIdToField[id] = element;
            this.formIdToFullFieldName[id] = fullFieldName;
            this.formData[fullFieldName] = value.value;
        }
        else if (element instanceof HTMLTextAreaElement) {
            const id = (_d = element.getAttribute('fieldid')) !== null && _d !== void 0 ? _d : '';
            this.formIdToField[id] = element;
            this.formIdToFullFieldName[id] = fullFieldName;
            this.formData[fullFieldName] = value.value;
        }
        else {
            console.error("Couldn't register an XFA form field", element);
        }
    }
    getValueOfASelectField(selectElement) {
        const { options, multiple } = selectElement;
        if (!multiple) {
            return options.selectedIndex === -1 ? null : options[options.selectedIndex]['value'];
        }
        return Array.prototype.filter.call(options, (option) => option.selected).map((option) => option['value']);
    }
    getFormValueFromAngular(element) {
        let key;
        if (element instanceof HTMLElement) {
            const fieldName = this.findXFAName(element);
            if (fieldName) {
                if (this.formData.hasOwnProperty(fieldName)) {
                    key = fieldName;
                }
                else {
                    key = this.findFullXFAName(element);
                }
            }
            else {
                console.error("Couldn't find the field name or XFA name of the form field", element);
                return { value: null };
            }
        }
        else {
            key = element;
        }
        return { value: this.formData[key] };
    }
    findXFAName(element) {
        let parentElement = element;
        while (!parentElement.getAttribute('xfaname') && parentElement.parentElement) {
            parentElement = parentElement.parentElement;
        }
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            do {
                parentElement = parentElement === null || parentElement === void 0 ? void 0 : parentElement.parentElement;
            } while (!(parentElement === null || parentElement === void 0 ? void 0 : parentElement.getAttribute('xfaname')) && parentElement);
        }
        let fieldName = parentElement === null || parentElement === void 0 ? void 0 : parentElement.getAttribute('xfaname');
        if (!fieldName) {
            throw new Error("Couldn't find the xfaname of the field");
        }
        return fieldName;
    }
    findFullXFAName(element) {
        let parentElement = element;
        let fieldName = '';
        while (parentElement instanceof HTMLElement && parentElement.parentElement) {
            const xfaName = parentElement.getAttribute('xfaname');
            if (xfaName) {
                fieldName = xfaName + '.' + fieldName;
            }
            parentElement = parentElement.parentElement;
        }
        if (!fieldName) {
            throw new Error("Couldn't find the xfaname of the field");
        }
        fieldName = fieldName.substring(0, fieldName.length - 1);
        if (element instanceof HTMLInputElement && element.type === 'radio') {
            // ignore the last part of the xfaName because it's actually the value of the field
            return fieldName.substring(0, fieldName.lastIndexOf('.'));
        }
        return fieldName;
    }
    updateAngularFormValueCalledByPdfjs(key, value) {
        if (!this.formData) {
            this.formData = {};
        }
        if (typeof key === 'string') {
            const acroFormKey = this.formIdToFullFieldName[key];
            const fullKey = acroFormKey !== null && acroFormKey !== void 0 ? acroFormKey : Object.values(this.formIdToFullFieldName).find((k) => k === key || k.endsWith('.' + key));
            if (fullKey) {
                const field = this.formIdToField[key];
                let change = this.doUpdateAngularFormValue(field, value, fullKey);
                if (change) {
                    this.ngZone.run(() => this.formDataChange.emit(this.formData));
                }
            }
            else {
                console.error("Couldn't find the field with the name " + key);
            }
        }
        else {
            let change = false;
            const shortFieldName = this.findXFAName(key);
            if (this.formData.hasOwnProperty(shortFieldName)) {
                change = this.doUpdateAngularFormValue(key, value, shortFieldName);
            }
            const fullFieldName = this.findFullXFAName(key);
            if (fullFieldName !== shortFieldName) {
                change || (change = this.doUpdateAngularFormValue(key, value, fullFieldName));
            }
            if (change) {
                this.ngZone.run(() => this.formDataChange.emit(this.formData));
            }
        }
    }
    doUpdateAngularFormValue(field, value, fullKey) {
        var _a;
        let change = false;
        if (field instanceof HTMLInputElement && field.type === 'checkbox') {
            const exportValue = field.getAttribute('exportvalue');
            if (exportValue) {
                if (value.value) {
                    if (this.formData[fullKey] !== exportValue) {
                        this.formData[fullKey] = exportValue;
                        change = true;
                    }
                }
                else {
                    if (this.formData[fullKey] !== false) {
                        this.formData[fullKey] = false;
                        change = true;
                    }
                }
            }
            else {
                if (this.formData[fullKey] !== value.value) {
                    this.formData[fullKey] = value.value;
                    change = true;
                }
            }
        }
        else if (field instanceof HTMLInputElement && field.type === 'radio') {
            const exportValue = (_a = field.getAttribute('exportvalue')) !== null && _a !== void 0 ? _a : field.getAttribute('xfaon');
            if (value.value) {
                if (this.formData[fullKey] !== exportValue) {
                    this.formData[fullKey] = exportValue;
                    change = true;
                }
            }
        }
        else {
            if (this.formData[fullKey] !== value.value) {
                this.formData[fullKey] = value.value;
                change = true;
            }
        }
        return change;
    }
    updateFormFieldsInPdfCalledByNgOnChanges(previousFormData) {
        var _a;
        const PDFViewerApplication = window.PDFViewerApplication;
        if (!((_a = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfDocument) === null || _a === void 0 ? void 0 : _a.annotationStorage)) {
            // ngOnChanges calls this method too early - so just ignore it
            return;
        }
        for (const key in this.formData) {
            if (this.formData.hasOwnProperty(key)) {
                const newValue = this.formData[key];
                if (newValue !== previousFormData[key]) {
                    this.setFieldValueAndUpdateAnnotationStorage(key, newValue);
                }
            }
        }
        for (const key in previousFormData) {
            if (previousFormData.hasOwnProperty(key) && previousFormData[key]) {
                let hasPreviousValue = this.formData.hasOwnProperty(key);
                if (!hasPreviousValue) {
                    const fullKey = Object.keys(this.formData).find((k) => k === key || k.endsWith('.' + key));
                    if (fullKey) {
                        hasPreviousValue = this.formData.hasOwnProperty(fullKey);
                    }
                }
                if (!hasPreviousValue) {
                    this.setFieldValueAndUpdateAnnotationStorage(key, null);
                }
            }
        }
    }
    setFieldValueAndUpdateAnnotationStorage(key, newValue) {
        var _a, _b;
        const radios = this.findRadioButtonGroup(key);
        if (radios) {
            radios.forEach((r) => {
                var _a;
                const activeValue = (_a = r.getAttribute('exportValue')) !== null && _a !== void 0 ? _a : r.getAttribute('xfaon');
                r.checked = activeValue === newValue;
            });
            const updateFromAngular = new CustomEvent('updateFromAngular', {
                detail: newValue,
            });
            radios[0].dispatchEvent(updateFromAngular);
        }
        else {
            const fieldId = this.findFormIdFromFieldName(key);
            if (fieldId) {
                const htmlField = this.formIdToField[fieldId];
                if (htmlField) {
                    if (htmlField instanceof HTMLInputElement && htmlField.type === 'checkbox') {
                        let activeValue = (_b = (_a = htmlField.getAttribute('xfaon')) !== null && _a !== void 0 ? _a : htmlField.getAttribute('exportvalue')) !== null && _b !== void 0 ? _b : true;
                        if (newValue === true || newValue === false) {
                            activeValue = true;
                        }
                        htmlField.checked = activeValue === newValue;
                    }
                    else if (htmlField instanceof HTMLSelectElement) {
                        this.populateSelectField(htmlField, newValue);
                    }
                    else {
                        // textareas and input fields
                        htmlField.value = newValue;
                    }
                    const updateFromAngular = new CustomEvent('updateFromAngular', {
                        detail: newValue,
                    });
                    htmlField.dispatchEvent(updateFromAngular);
                }
                else {
                    console.error("Couldn't set the value of the field", key);
                }
            }
        }
    }
    populateSelectField(htmlField, newValue) {
        if (htmlField.multiple) {
            const { options } = htmlField;
            const newValueArray = newValue;
            for (let i = 0; i < options.length; i++) {
                const option = options.item(i);
                if (option) {
                    option.selected = newValueArray.some((o) => o === option.value);
                }
            }
        }
        else {
            htmlField.value = newValue;
        }
    }
    findFormIdFromFieldName(fieldName) {
        if (Object.entries(this.formIdToFullFieldName).length === 0) {
            // sometimes, ngOnChanges() is called before initializing the PDF file
            return undefined;
        }
        const matchingEntries = Object.entries(this.formIdToFullFieldName).filter((entry) => entry[1] === fieldName || entry[1].endsWith('.' + fieldName));
        if (matchingEntries.length > 1) {
            console.log(`More than one field name matches the field name ${fieldName}. Please use the one of these qualified field names:`, matchingEntries.map((f) => f[1]));
            console.log('ngx-extended-pdf-viewer uses the first matching field (which may or may not be the topmost field on your PDF form): ' + matchingEntries[0][0]);
        }
        else if (matchingEntries.length === 0) {
            console.log("Couldn't find the field " + fieldName);
            return undefined;
        }
        return matchingEntries[0][0];
    }
    findRadioButtonGroup(fieldName) {
        const matchingEntries = Object.entries(this.radioButtons).filter((entry) => entry[0].endsWith('.' + fieldName) || entry[0] === fieldName);
        if (matchingEntries.length === 0) {
            return null;
        }
        if (matchingEntries.length > 1) {
            console.log('More than one radio button group name matches this name. Please use the qualified field name', matchingEntries.map((radio) => radio[0]));
            console.log('ngx-extended-pdf-viewer uses the first matching field (which may not be the topmost field on your PDF form): ' + matchingEntries[0][0]);
        }
        return matchingEntries[0][1];
    }
}

var PdfSidebarView;
(function (PdfSidebarView) {
    PdfSidebarView[PdfSidebarView["UNKNOWN"] = -1] = "UNKNOWN";
    PdfSidebarView[PdfSidebarView["NONE"] = 0] = "NONE";
    PdfSidebarView[PdfSidebarView["THUMBS"] = 1] = "THUMBS";
    PdfSidebarView[PdfSidebarView["OUTLINE"] = 2] = "OUTLINE";
    PdfSidebarView[PdfSidebarView["ATTACHMENTS"] = 3] = "ATTACHMENTS";
    PdfSidebarView[PdfSidebarView["LAYERS"] = 4] = "LAYERS";
})(PdfSidebarView || (PdfSidebarView = {}));

class PDFNotificationService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
        this.pdfjsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
}
PDFNotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PDFNotificationService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PDFNotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PDFNotificationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PDFNotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class NgxExtendedPdfViewerService {
    constructor() {
        this.ngxExtendedPdfViewerInitialized = false;
        this.recalculateSize$ = new Subject();
        this.secondaryMenuIsEmpty = false;
    }
    find(text, options = {}) {
        var _a, _b, _c, _d;
        if (!this.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            const highlightAllCheckbox = document.getElementById('findHighlightAll');
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = (_a = options.highlightAll) !== null && _a !== void 0 ? _a : false;
            }
            const matchCaseCheckbox = document.getElementById('findMatchCase');
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = (_b = options.matchCase) !== null && _b !== void 0 ? _b : false;
            }
            const entireWordCheckbox = document.getElementById('findEntireWord');
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = (_c = options.wholeWords) !== null && _c !== void 0 ? _c : false;
            }
            const matchDiacriticsCheckbox = document.getElementById('findMatchDiacritics');
            if (matchDiacriticsCheckbox) {
                matchDiacriticsCheckbox.checked = (_d = options.matchDiacritics) !== null && _d !== void 0 ? _d : false;
            }
            const inputField = document.getElementById('findInput');
            if (inputField) {
                inputField.value = text;
                // todo dirty hack!
                inputField.classList.remove('hidden');
                // end of the dirty hack
                inputField.dispatchEvent(new Event('input'));
                return true;
            }
            else {
                // tslint:disable-next-line:quotemark
                console.error("Unexpected error: the input field used to search isn't part of the DOM.");
                return false;
            }
        }
    }
    findNext() {
        if (!this.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
            return false;
        }
        else {
            const button = document.getElementById('findNext');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    findPrevious() {
        if (!this.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
            return false;
        }
        else {
            const button = document.getElementById('findPrevious');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    print(printRange) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const alreadyThere = !!window['isInPDFPrintRange'] && !printRange;
        if (!alreadyThere) {
            if (!printRange) {
                printRange = {};
            }
            this.setPrintRange(printRange);
        }
        window.printPDF();
        if (!alreadyThere) {
            PDFViewerApplication.eventBus.on('afterprint', () => {
                this.removePrintRange();
            });
        }
    }
    removePrintRange() {
        window['isInPDFPrintRange'] = undefined;
        window['filteredPageCount'] = undefined;
    }
    setPrintRange(printRange) {
        const PDFViewerApplication = window.PDFViewerApplication;
        window['isInPDFPrintRange'] = (page) => this.isInPDFPrintRange(page, printRange);
        window['filteredPageCount'] = this.filteredPageCount(PDFViewerApplication.pagesCount, printRange);
    }
    filteredPageCount(pageCount, range) {
        let result = 0;
        for (let page = 1; page <= pageCount; page++) {
            if (this.isInPDFPrintRange(page, range)) {
                result++;
            }
        }
        return result;
    }
    isInPDFPrintRange(pageIndex, printRange) {
        const page = pageIndex + 1;
        if (printRange.from) {
            if (page < printRange.from) {
                return false;
            }
        }
        if (printRange.to) {
            if (page > printRange.to) {
                return false;
            }
        }
        if (printRange.excluded) {
            if (printRange.excluded.some((p) => p === page)) {
                return false;
            }
        }
        if (printRange.included) {
            if (!printRange.included.some((p) => p === page)) {
                return false;
            }
        }
        return true;
    }
    getPageAsLines(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const pdfDocument = PDFViewerApplication.pdfDocument;
            const page = yield pdfDocument.getPage(pageNumber);
            const textSnippets = (yield page.getTextContent()).items //
                .filter((info) => !info['type']); // ignore the TextMarkedContent items
            const snippets = textSnippets;
            let minX = Number.MAX_SAFE_INTEGER;
            let minY = Number.MAX_SAFE_INTEGER;
            let maxX = Number.MIN_SAFE_INTEGER;
            let maxY = Number.MIN_SAFE_INTEGER;
            let countLTR = 0;
            let countRTL = 0;
            let text = '';
            let lines = new Array();
            for (let i = 0; i < snippets.length; i++) {
                const currentSnippet = snippets[i];
                if (!currentSnippet.hasEOL) {
                    const x = currentSnippet.transform[4];
                    const y = -currentSnippet.transform[5];
                    const width = currentSnippet.width;
                    const height = currentSnippet.height;
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x + width);
                    maxY = Math.max(maxY, y + height);
                    text += currentSnippet.str;
                    if (currentSnippet.dir === 'rtl') {
                        countRTL++;
                    }
                    if (currentSnippet.dir === 'ltr') {
                        countLTR++;
                    }
                }
                let addIt = i === snippets.length - 1 || currentSnippet.hasEOL;
                if (addIt) {
                    let direction = undefined;
                    if (countLTR > 0 && countRTL > 0) {
                        direction = 'both';
                    }
                    else if (countLTR > 0) {
                        direction = 'ltr';
                    }
                    else if (countRTL > 0) {
                        direction = 'rtl';
                    }
                    const line = {
                        direction,
                        x: minX,
                        y: minY,
                        width: maxX - minX,
                        height: maxY - minY,
                        text: text.trim(),
                    };
                    lines.push(line);
                    minX = Number.MAX_SAFE_INTEGER;
                    minY = Number.MAX_SAFE_INTEGER;
                    maxX = Number.MIN_SAFE_INTEGER;
                    maxY = Number.MIN_SAFE_INTEGER;
                    countLTR = 0;
                    countRTL = 0;
                    text = '';
                }
            }
            return lines;
        });
    }
    getPageAsText(pageNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const pdfDocument = PDFViewerApplication.pdfDocument;
            const page = yield pdfDocument.getPage(pageNumber);
            const textSnippets = (yield page.getTextContent()).items;
            return this.convertTextInfoToText(textSnippets);
        });
    }
    convertTextInfoToText(textInfoItems) {
        if (!textInfoItems) {
            return '';
        }
        return textInfoItems
            .filter((info) => !info['type'])
            .map((info) => (info.hasEOL ? info.str + '\n' : info.str))
            .join('');
    }
    getPageAsImage(pageNumber, scale, background, backgroundColorToReplace = '#FFFFFF') {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pdfDocument = PDFViewerApplication.pdfDocument;
        const pagePromise = pdfDocument.getPage(pageNumber);
        const imagePromise = (pdfPage) => Promise.resolve(this.draw(pdfPage, scale, background, backgroundColorToReplace));
        return pagePromise.then(imagePromise);
    }
    draw(pdfPage, scale, background, backgroundColorToReplace = '#FFFFFF') {
        let zoomFactor = 1;
        if (scale.scale) {
            zoomFactor = scale.scale;
        }
        else if (scale.width) {
            zoomFactor = scale.width / pdfPage.getViewport({ scale: 1 }).width;
        }
        else if (scale.height) {
            zoomFactor = scale.height / pdfPage.getViewport({ scale: 1 }).height;
        }
        const viewport = pdfPage.getViewport({
            scale: zoomFactor,
        });
        const { ctx, canvas } = this.getPageDrawContext(viewport.width, viewport.height);
        const drawViewport = viewport.clone();
        const renderContext = {
            canvasContext: ctx,
            viewport: drawViewport,
            background,
            backgroundColorToReplace,
        };
        const renderTask = pdfPage.render(renderContext);
        const dataUrlPromise = () => Promise.resolve(canvas.toDataURL());
        return renderTask.promise.then(dataUrlPromise);
    }
    getPageDrawContext(width, height) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) {
            // tslint:disable-next-line: quotemark
            throw new Error("Couldn't create the 2d context");
        }
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        return { ctx, canvas };
    }
    getCurrentDocumentAsBlob() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            return yield PDFViewerApplication.export();
        });
    }
    getFormData(currentFormValues = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const pdf = PDFViewerApplication.pdfDocument;
            // screen DPI / PDF DPI
            const dpiRatio = 96 / 72;
            const result = [];
            for (let i = 1; i <= (pdf === null || pdf === void 0 ? void 0 : pdf.numPages); i++) {
                // track the current page
                const currentPage /* : PDFPageProxy */ = yield pdf.getPage(i);
                const annotations = yield currentPage.getAnnotations();
                annotations
                    .filter((a) => a.subtype === 'Widget') // get the form field annotations only
                    .map((a) => (Object.assign({}, a))) // only expose copies of the annotations to avoid side-effects
                    .forEach((a) => {
                    // get the rectangle that represent the single field
                    // and resize it according to the current DPI
                    const fieldRect = currentPage.getViewport({ scale: dpiRatio }).convertToViewportRectangle(a.rect);
                    // add the corresponding input
                    if (currentFormValues && a.fieldName) {
                        try {
                            if (a.exportValue) {
                                const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + '/' + a.exportValue, '');
                                a.value = currentValue === null || currentValue === void 0 ? void 0 : currentValue.value;
                            }
                            else if (a.radioButton) {
                                const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + '/' + a.fieldValue, '');
                                a.value = currentValue === null || currentValue === void 0 ? void 0 : currentValue.value;
                            }
                            else {
                                const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName, '');
                                a.value = currentValue === null || currentValue === void 0 ? void 0 : currentValue.value;
                            }
                        }
                        catch (exception) {
                            // just ignore it
                        }
                    }
                    result.push({ fieldAnnotation: a, fieldRect, pageNumber: i });
                });
            }
            return result;
        });
    }
    /**
     * Adds a page to the rendering queue
     * @param {number} pageIndex Index of the page to render
     * @returns {boolean} false, if the page has already been rendered
     * or if it's out of range
     */
    addPageToRenderQueue(pageIndex) {
        const PDFViewerApplication = window.PDFViewerApplication;
        return PDFViewerApplication.pdfViewer.addPageToRenderQueue(pageIndex);
    }
    isRenderQueueEmpty() {
        const scrolledDown = true;
        const renderExtra = false;
        const PDFViewerApplication = window.PDFViewerApplication;
        const nextPage = PDFViewerApplication.pdfViewer.renderingQueue.getHighestPriority(PDFViewerApplication.pdfViewer._getVisiblePages(), PDFViewerApplication.pdfViewer._pages, scrolledDown, renderExtra);
        return !nextPage;
    }
    hasPageBeenRendered(pageIndex) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pages = PDFViewerApplication.pdfViewer._pages;
        if (pages.length > pageIndex && pageIndex >= 0) {
            const pageView = pages[pageIndex];
            const isLoading = pageView.renderingState === 3;
            return !isLoading;
        }
        return false;
    }
    currentlyRenderedPages() {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pages = PDFViewerApplication.pdfViewer._pages;
        return pages.filter((page) => page.renderingState === 3).map((page) => page.id);
    }
    numberOfPages() {
        const PDFViewerApplication = window.PDFViewerApplication;
        const pages = PDFViewerApplication.pdfViewer._pages;
        return pages.length;
    }
    getCurrentlyVisiblePageNumbers() {
        const app = window.PDFViewerApplication;
        const pages = app.pdfViewer._getVisiblePages().views;
        return pages === null || pages === void 0 ? void 0 : pages.map((page) => page.id);
    }
    recalculateSize() {
        this.recalculateSize$.next();
    }
    listLayers() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const optionalContentConfig = yield PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
            if (optionalContentConfig) {
                const levelData = optionalContentConfig.getOrder();
                const layerIds = levelData.filter((groupId) => typeof groupId !== 'object');
                return layerIds.map((layerId) => {
                    const config = optionalContentConfig.getGroup(layerId);
                    return {
                        layerId: layerId,
                        name: config.name,
                        visible: config.visible,
                    };
                });
            }
            return undefined;
        });
    }
    toggleLayer(layerId) {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const optionalContentConfig = yield PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
            if (optionalContentConfig) {
                let isVisible = optionalContentConfig.getGroup(layerId).visible;
                const checkbox = document.querySelector(`input[id='${layerId}']`);
                if (checkbox) {
                    isVisible = checkbox.checked;
                    checkbox.checked = !isVisible;
                }
                optionalContentConfig.setVisibility(layerId, !isVisible);
                PDFViewerApplication.eventBus.dispatch('optionalcontentconfig', {
                    source: this,
                    promise: Promise.resolve(optionalContentConfig),
                });
            }
        });
    }
    scrollPageIntoView(pageNumber, pageSpot) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const viewer = PDFViewerApplication.pdfViewer;
        viewer.scrollPagePosIntoView(pageNumber, pageSpot);
    }
    getSerializedAnnotations() {
        const PDFViewerApplication = window.PDFViewerApplication;
        return PDFViewerApplication.pdfViewer.getSerializedAnnotations();
    }
    addEditorAnnotation(serializedAnnotation) {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.addEditorAnnotation(serializedAnnotation);
    }
    removeEditorAnnotations(filter) {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.removeEditorAnnotations(filter);
    }
}

function addTrustedHTML(styles, css) {
    if (typeof window === 'undefined') {
        // server-side rendering
        return;
    }
    const ttWindow = window;
    if (ttWindow.trustedTypes) {
        // Create a policy that can create TrustedHTML values
        // after sanitizing the input strings with DOMPurify library.
        const sanitizer = ttWindow.trustedTypes.createPolicy('foo', {
            createHTML: (input) => input,
        });
        styles.innerHTML = sanitizer.createHTML(css); // Puts the sanitized value into the DOM.
    }
    else {
        styles.innerHTML = css;
    }
}

const css$2 = `ngx-extended-pdf-viewer .textLayer{position:absolute;text-align:initial;inset:0;overflow:hidden;opacity:.25;line-height:1;text-size-adjust:none;forced-color-adjust:none;transform-origin:0 0;z-index:2}ngx-extended-pdf-viewer .textLayer :is(span,br){color:rgba(0,0,0,0);position:absolute;white-space:pre;cursor:text;transform-origin:0% 0%}ngx-extended-pdf-viewer .textLayer span.markedContent{top:0;height:0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:#b400aa;border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.appended{position:initial}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer br::selection{background:rgba(0,0,0,0)}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;inset:100% 0 0;z-index:-1;cursor:default;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: none;--page-margin: 1px auto -8px;--page-border: 9px solid transparent;--spreadHorizontalWrapped-margin-LR: -3.5px;--zoom-factor: 1}@media screen and (forced-colors: active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: 9px;--page-margin: 9px auto 0;--page-border: none;--spreadHorizontalWrapped-margin-LR: 4.5px}}ngx-extended-pdf-viewer [data-main-rotation="90"]{transform:rotate(90deg) translateY(-100%)}ngx-extended-pdf-viewer [data-main-rotation="180"]{transform:rotate(180deg) translate(-100%, -100%)}ngx-extended-pdf-viewer [data-main-rotation="270"]{transform:rotate(270deg) translateX(-100%)}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px auto;position:relative;overflow:hidden;border:9px solid rgba(0,0,0,0);background-clip:content-box;-o-border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;background-color:#fff;filter:opacity(1);-webkit-filter:opacity(1)}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px auto;border:none}ngx-extended-pdf-viewer .html .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .html .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .html .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page canvas[zooming]{width:100%;height:100%}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url("data:image/gif;base64,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") center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100vh !important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .body :is(.toolbar,.editorParamsToolbar,.findbar,#sidebarContainer) :is(input,button,select),ngx-extended-pdf-viewer .body .secondaryToolbar :is(input,button,a,select){outline:none;font-family:message-box,sans-serif;font-size:13px}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer select{font-family:message-box,sans-serif;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#474747 !important;color:#d9d9d9}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none !important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0 !important;overflow:hidden !important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#000}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#000;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:200ms;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:-200px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:min(102%,350px)}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:auto;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:200ms;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid rgba(0,0,0,.5)}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#424242;color:#d9d9d9;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px !important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px !important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{position:relative;min-height:32px;background-color:#474747}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width 200ms}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg, rgb(187, 187, 187) 0, rgb(153, 153, 153) 5px, rgb(153, 153, 153) 45px, rgb(221, 221, 221) 55px, rgb(221, 221, 221) 95px, rgb(187, 187, 187) 100px);-webkit-animation:progressIndeterminate 950ms linear infinite;animation:progressIndeterminate 950ms linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px 0 6px;margin:4px 2px 4px 2px;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}#findInput[data-status=notFound]{background-color:#f66}ngx-extended-pdf-viewer ngx-extended-pdf-viewer .editorParamsToolbar{padding:6px;height:auto;z-index:3000}ngx-extended-pdf-viewer .editorParamsToolbarContainer{width:220px;margin-bottom:-4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer>.editorParamsSetter{min-height:26px;display:flex;align-items:center;justify-content:space-between;padding-inline:10px}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsLabel{padding-inline-end:10px;flex:none;color:var(--main-color)}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsColor{width:32px;height:32px;flex:none}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider{background-color:rgba(0,0,0,0);width:90px;flex:0 1 0}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{background-color:#fff}ngx-extended-pdf-viewer #editorStampParamsToolbar{inset-inline-end:40px;background-color:#474747}ngx-extended-pdf-viewer #editorInkParamsToolbar{inset-inline-end:68px;background-color:#474747}ngx-extended-pdf-viewer #editorFreeTextParamsToolbar{inset-inline-end:96px;background-color:#474747}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid rgba(0,0,0,0);content:" ";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#474747;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after{right:13px;margin-right:-8px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#d9d9d9;color:#474747;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findResultsCount:empty,ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *{position:relative;float:right}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{border:0 none;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .toolbarButton[disabled],ngx-extended-pdf-viewer .dialogButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:1px solid rgba(0,0,0,0);color:#d9d9d9}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{min-width:16px;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton,html[dir=ltr] ngx-extended-pdf-viewer .dialogButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton,html[dir=rtl] ngx-extended-pdf-viewer .dialogButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .dialogButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarButton.toggled,ngx-extended-pdf-viewer .secondaryToolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#d9d9d9;background-color:rgba(255,255,255,.8)}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#474747}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:"";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .html .toolbarField{padding:3px 6px;margin:4px 0 4px 0;border-radius:2px;background-color:rgba(255,255,255,.8);background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.4);color:#4d4d4d;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .html .toolbarField::placeholder,ngx-extended-pdf-viewer .html .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .html .toolbarField::-ms-input-placeholder{color:#d9d9d9}ngx-extended-pdf-viewer .html .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .html .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber.visiblePageIsLoading{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .html .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid rgba(0,0,0,0);border-radius:2px;color:#d9d9d9;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer .html #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer .html #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .html .thumbnail{width:var(--thumbnail-width);height:var(--thumbnail-height);margin:0 10px 5px 10px;padding:1px;border:7px solid rgba(0,0,0,0);border-radius:2px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px 9px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid rgba(0,0,0,0);width:var(--thumbnail-width);height:var(--thumbnail-height);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer .thumbnail.selected{border-color:rgba(255,255,255,.4) !important}ngx-extended-pdf-viewer .thumbnail:not([data-loaded])>.thumbnailImage{width:calc(var(--thumbnail-width) - 2px);height:calc(var(--thumbnail-height) - 2px);border:1px dashed #848484}ngx-extended-pdf-viewer #outlineView,ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#424242;font-size:13px;line-height:15px;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a *{cursor:pointer}ngx-extended-pdf-viewer #layersView .treeItem>a>label>input{float:inline-start;margin-top:1px}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M10 13l4-7H6z'/></svg>");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M13 9L6 5v8z'/></svg>");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems,ngx-extended-pdf-viewer .treeItem>a:hover{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .dialogButton{width:auto;margin:3px 4px 2px !important;padding:2px 11px;color:#d9d9d9;background-color:#474747;border:#474747 !important}ngx-extended-pdf-viewer dialog{margin:auto;padding:15px;border-spacing:4px;color:#d9d9d9;font-size:12px;line-height:14px;background-color:#474747;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}ngx-extended-pdf-viewer dialog::backdrop{background-color:rgba(0,0,0,.2);user-select:none}ngx-extended-pdf-viewer dialog>.row{display:table-row}ngx-extended-pdf-viewer dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordDialog{text-align:center}ngx-extended-pdf-viewer #passwordDialog .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesDialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{min-width:100px;text-align:start}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:right}.fileInput{background:#fff;color:#000;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8="),move !important;cursor:-webkit-grab !important;cursor:grab !important}ngx-extended-pdf-viewer .grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit !important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8="),move !important;cursor:-webkit-grabbing !important;cursor:grabbing !important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio: 1.1),screen and (min-resolution: 1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{transform:scale(0.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{transform:scale(0.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:186px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading,ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-size:16px 17px}ngx-extended-pdf-viewer .html .unverified-signature-warning,ngx-extended-pdf-viewer .html .modified-background-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:bold}ngx-extended-pdf-viewer .invisible{display:none !important}ngx-extended-pdf-viewer #outerContainer{clip-path:inset(0 0 0 0)}html[dir=ltr] ngx-extended-pdf-viewer .dialogButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed !important;left:-9999px !important;display:block !important;width:3000px !important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px !important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px !important;margin-right:-2px !important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}.hidden-by-fullscreen{display:none !important}:root{--scrollbar-color: rgba(121, 121, 123, 1);--scrollbar-bg-color: rgba(35, 35, 39, 1)} #printContainer{display:none}@media print{#printContainer{position:static;display:block}body[data-pdfjsprinting],html{overflow-y:visible !important;margin:0;padding:0}body[data-pdfjsprinting]{background:rgba(0,0,0,0) none;height:100%;width:100%}body[data-pdfjsprinting]>*{display:none !important;outline:0;padding:0;margin:0}body[data-pdfjsprinting] #printContainer{display:block !important;height:100%;width:100%}body[data-pdfjsprinting] #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block !important}body[data-pdfjsprinting] #printContainer>.printedPage{page-break-after:always;page-break-inside:avoid;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage .xfaPage{position:absolute}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage{page-break-after:always;page-break-inside:avoid;width:100%;height:100%;position:relative}body[data-pdfjsprinting] #printContainer>.printedPage canvas,body[data-pdfjsprinting] #printContainer>.printedPage img{max-width:100%;max-height:100%;direction:ltr;display:block}html[data-pdfjsprinting].cdk-global-scrollblock{width:initial;position:initial}}`;

class PdfDarkThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-theme-css';
        addTrustedHTML(styles, css$2);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        var _a;
        const styles = this.document.getElementById('pdf-theme-css');
        (_a = styles === null || styles === void 0 ? void 0 : styles.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(styles);
    }
}
PdfDarkThemeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDarkThemeComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
PdfDarkThemeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDarkThemeComponent, selector: "pdf-dark-theme", ngImport: i0, template: "" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDarkThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-dark-theme', template: "" }]
        }], ctorParameters: function () {
        return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    } });

const css$1 = `ngx-extended-pdf-viewer .textLayer{position:absolute;text-align:initial;inset:0;overflow:hidden;opacity:.25;line-height:1;text-size-adjust:none;forced-color-adjust:none;transform-origin:0 0;z-index:2}ngx-extended-pdf-viewer .textLayer :is(span,br){color:rgba(0,0,0,0);position:absolute;white-space:pre;cursor:text;transform-origin:0% 0%}ngx-extended-pdf-viewer .textLayer span.markedContent{top:0;height:0}ngx-extended-pdf-viewer .textLayer .highlight{margin:-1px;padding:1px;background-color:rgba(180,0,170,.4);border-radius:4px}ngx-extended-pdf-viewer .textLayer .highlight.appended{position:initial}ngx-extended-pdf-viewer .textLayer .highlight.begin{border-radius:4px 0 0 4px}ngx-extended-pdf-viewer .textLayer .highlight.end{border-radius:0 4px 4px 0}ngx-extended-pdf-viewer .textLayer .highlight.middle{border-radius:0}ngx-extended-pdf-viewer .textLayer .highlight.selected{background-color:#006400}ngx-extended-pdf-viewer .textLayer ::selection{background:blue}ngx-extended-pdf-viewer .textLayer br::selection{background:rgba(0,0,0,0)}ngx-extended-pdf-viewer .textLayer .endOfContent{display:block;position:absolute;inset:100% 0 0;z-index:-1;cursor:default;user-select:none}ngx-extended-pdf-viewer .textLayer .endOfContent.active{top:0}ngx-extended-pdf-viewer *{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: none;--page-margin: 1px auto -8px;--page-border: 9px solid transparent;--spreadHorizontalWrapped-margin-LR: -3.5px;--zoom-factor: 1}@media screen and (forced-colors: active){ngx-extended-pdf-viewer :root{--pdfViewer-padding-bottom: 9px;--page-margin: 9px auto 0;--page-border: none;--spreadHorizontalWrapped-margin-LR: 4.5px}}ngx-extended-pdf-viewer [data-main-rotation="90"]{transform:rotate(90deg) translateY(-100%)}ngx-extended-pdf-viewer [data-main-rotation="180"]{transform:rotate(180deg) translate(-100%, -100%)}ngx-extended-pdf-viewer [data-main-rotation="270"]{transform:rotate(270deg) translateX(-100%)}ngx-extended-pdf-viewer .pdfViewer{padding-bottom:var(--pdfViewer-padding-bottom)}ngx-extended-pdf-viewer .pdfViewer .canvasWrapper{overflow:hidden}ngx-extended-pdf-viewer .pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px auto;position:relative;overflow:hidden;border:9px solid rgba(0,0,0,0);background-clip:content-box;-o-border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;border-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=") 9 9 repeat;background-color:#fff;filter:opacity(1);-webkit-filter:opacity(1)}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .page{margin:0 auto 10px auto;border:none}ngx-extended-pdf-viewer .html .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .html .pdfViewer.scrollWrapped,ngx-extended-pdf-viewer .html .spread{margin-left:3.5px;margin-right:3.5px;text-align:center}ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal,ngx-extended-pdf-viewer .spread{white-space:nowrap}ngx-extended-pdf-viewer .pdfViewer.removePageBorders,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .spread,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .spread{display:inline-block;vertical-align:middle}ngx-extended-pdf-viewer .spread .page,ngx-extended-pdf-viewer .pdfViewer.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.scrollWrapped .page{margin-left:-3.5px;margin-right:-3.5px}ngx-extended-pdf-viewer .pdfViewer.removePageBorders .spread .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollHorizontal .page,ngx-extended-pdf-viewer .pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}ngx-extended-pdf-viewer .pdfViewer .page canvas{margin:0;display:block}ngx-extended-pdf-viewer .pdfViewer .page canvas[hidden]{display:none}ngx-extended-pdf-viewer .pdfViewer .page canvas[zooming]{width:100%;height:100%}ngx-extended-pdf-viewer .pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url("data:image/gif;base64,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") center no-repeat}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .spread{display:block}ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer .page,ngx-extended-pdf-viewer .pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100vh !important}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100vh;border:0}ngx-extended-pdf-viewer .html{height:100%;width:100%;font-size:10px}ngx-extended-pdf-viewer .body{height:100%;width:100%;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .body :is(.toolbar,.editorParamsToolbar,.findbar,#sidebarContainer) :is(input,button,select),ngx-extended-pdf-viewer .body .secondaryToolbar :is(input,button,a,select){outline:none;font-family:message-box,sans-serif;font-size:13px}ngx-extended-pdf-viewer .body,ngx-extended-pdf-viewer .pdf-viewer input,ngx-extended-pdf-viewer .pdf-viewer button,ngx-extended-pdf-viewer .pdf-viewer select{font-family:message-box,sans-serif;outline:none;scrollbar-color:var(--scrollbar-color) var(--scrollbar-bg-color)}ngx-extended-pdf-viewer button{cursor:pointer}ngx-extended-pdf-viewer select{background-color:#fff !important;color:#5a5a5a}ngx-extended-pdf-viewer .hidden,ngx-extended-pdf-viewer [hidden]{display:none !important}ngx-extended-pdf-viewer .pdfViewer.enablePermissions .textLayer span{-webkit-user-select:none !important;-moz-user-select:none !important;-ms-user-select:none !important;user-select:none !important;cursor:not-allowed}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0 !important;overflow:hidden !important}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:#f9f9f9}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid rgba(0,0,0,0);background-color:#f9f9f9;width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen a:not(.internalLink){display:none}ngx-extended-pdf-viewer .pdfPresentationMode:-webkit-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-moz-full-screen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:-ms-fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode:fullscreen .textLayer span{cursor:none}ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls>*,ngx-extended-pdf-viewer .pdfPresentationMode.pdfPresentationModeControls .textLayer span{cursor:default}ngx-extended-pdf-viewer #outerContainer{width:100%;height:100%;position:relative}ngx-extended-pdf-viewer #sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;visibility:hidden;z-index:100;transition-duration:200ms;transition-timing-function:ease}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContainer{transition-property:left;left:-200px;left:-200px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContainer{transition-property:right;right:-200px}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outerContainer.sidebarMoving #sidebarContainer,ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #sidebarContainer{right:0}ngx-extended-pdf-viewer #mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:min(102%,350px)}ngx-extended-pdf-viewer #sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:#f2f2f3}html[dir=ltr] ngx-extended-pdf-viewer #sidebarContent{left:0}html[dir=rtl] ngx-extended-pdf-viewer #sidebarContent{right:0}ngx-extended-pdf-viewer #viewerContainer{overflow:auto;-webkit-overflow-scrolling:auto;position:absolute;top:32px;right:0;bottom:0;left:0;outline:none}ngx-extended-pdf-viewer #viewerContainer:not(.pdfPresentationMode){transition-duration:200ms;transition-timing-function:ease}ngx-extended-pdf-viewer #outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px}html[dir=rtl] ngx-extended-pdf-viewer #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px}ngx-extended-pdf-viewer .toolbar{position:relative;left:0;right:0;z-index:9999;cursor:default;border:0;border-bottom:1px solid #ddd}ngx-extended-pdf-viewer #toolbarContainer{width:100%}ngx-extended-pdf-viewer #toolbarSidebar{width:calc(100% - 10px);height:32px;background-color:#f2f2f3;color:#5a5a5a;border:none;padding-top:1px;padding-left:5px;padding-right:5px}html[dir=ltr] #toolbarSidebarRight .toolbarButton{margin-right:3px !important}html[dir=rtl] #toolbarSidebarRight .toolbarButton{margin-left:3px !important}html[dir=ltr] #sidebarToggle{margin-right:5px}html[dir=rtl] #sidebarToggle{margin-left:5px}ngx-extended-pdf-viewer #sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:200;cursor:ew-resize}html[dir=ltr] ngx-extended-pdf-viewer #sidebarResizer{right:-6px}html[dir=rtl] ngx-extended-pdf-viewer #sidebarResizer{left:-6px}ngx-extended-pdf-viewer #toolbarContainer,ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{position:relative;min-height:32px;background-color:#f9f9f9}ngx-extended-pdf-viewer #toolbarViewer{min-height:32px}ngx-extended-pdf-viewer #loadingBar{position:relative;width:100%;height:4px;background-color:#333;border-bottom:1px solid #333}ngx-extended-pdf-viewer #loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:#ddd;overflow:hidden;transition:width 200ms}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate{background-color:#999;transition:none}ngx-extended-pdf-viewer #loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg, rgb(187, 187, 187) 0, rgb(153, 153, 153) 5px, rgb(153, 153, 153) 45px, rgb(221, 221, 221) 55px, rgb(221, 221, 221) 95px, rgb(187, 187, 187) 100px);-webkit-animation:progressIndeterminate 950ms linear infinite;animation:progressIndeterminate 950ms linear infinite}ngx-extended-pdf-viewer .findbar,ngx-extended-pdf-viewer .secondaryToolbar,ngx-extended-pdf-viewer .editorParamsToolbar{top:40px;position:absolute;z-index:10000;height:auto;min-width:16px;padding:0 6px 0 6px;margin:4px 2px 4px 2px;font-size:12px;line-height:14px;text-align:left;cursor:default}ngx-extended-pdf-viewer .findbar{min-width:300px}ngx-extended-pdf-viewer .findbar>div{height:32px}ngx-extended-pdf-viewer .findbar.wrapContainers>div{clear:both}ngx-extended-pdf-viewer .findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] ngx-extended-pdf-viewer .findbar{left:34px}html[dir=rtl] ngx-extended-pdf-viewer .findbar{right:34px}ngx-extended-pdf-viewer .findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #findInput{width:200px}ngx-extended-pdf-viewer #findInput::-webkit-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer #findInput::-moz-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput:-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::-ms-input-placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput::placeholder{font-style:italic}ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:right}html[dir=rtl] ngx-extended-pdf-viewer #findInput[data-status=pending]{background-position:left}#findInput[data-status=notFound]{background-color:#f66}ngx-extended-pdf-viewer ngx-extended-pdf-viewer .editorParamsToolbar{padding:6px;height:auto;z-index:3000}ngx-extended-pdf-viewer .editorParamsToolbarContainer{width:220px;margin-bottom:-4px}ngx-extended-pdf-viewer .editorParamsToolbarContainer>.editorParamsSetter{min-height:26px;display:flex;align-items:center;justify-content:space-between;padding-inline:10px}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsLabel{padding-inline-end:10px;flex:none;color:var(--main-color)}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsColor{width:32px;height:32px;flex:none}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider{background-color:rgba(0,0,0,0);width:90px;flex:0 1 0}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-progress{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-runnable-track,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-track{background-color:#000}ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-webkit-slider-thumb,ngx-extended-pdf-viewer .editorParamsToolbarContainer .editorParamsSlider::-moz-range-thumb{background-color:#fff}ngx-extended-pdf-viewer #editorStampParamsToolbar{inset-inline-end:40px;background-color:#f9f9f9}ngx-extended-pdf-viewer #editorInkParamsToolbar{inset-inline-end:68px;background-color:#f9f9f9}ngx-extended-pdf-viewer #editorFreeTextParamsToolbar{inset-inline-end:96px;background-color:#f9f9f9}ngx-extended-pdf-viewer .doorHanger,ngx-extended-pdf-viewer .doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:after,ngx-extended-pdf-viewer .doorHangerRight:before{bottom:100%;border:solid rgba(0,0,0,0);content:" ";height:0;width:0;position:absolute;pointer-events:none}ngx-extended-pdf-viewer .doorHanger:after,ngx-extended-pdf-viewer .doorHangerRight:after{border-bottom-color:#f9f9f9;border-width:8px}ngx-extended-pdf-viewer .doorHanger:before,ngx-extended-pdf-viewer .doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:after,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] ngx-extended-pdf-viewer .doorHanger:before,html[dir=rtl] ngx-extended-pdf-viewer .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:after,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:after{right:13px;margin-right:-8px}html[dir=rtl] ngx-extended-pdf-viewer .doorHanger:before,html[dir=ltr] ngx-extended-pdf-viewer .doorHangerRight:before{right:13px;margin-right:-9px}ngx-extended-pdf-viewer #findResultsCount{background-color:#5a5a5a;color:#f9f9f9;text-align:center;padding:3px 4px}ngx-extended-pdf-viewer #findMsg{font-style:italic;color:#f66}ngx-extended-pdf-viewer #findResultsCount:empty,ngx-extended-pdf-viewer #findMsg:empty{display:none}ngx-extended-pdf-viewer #toolbarViewerMiddle{position:absolute;left:50%;transform:translateX(-50%)}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight{float:left;margin-left:4px}html[dir=ltr] #toolbarSidebarLeft,html[dir=rtl] #toolbarSidebarRight{float:left}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft{float:right;margin-right:4px}html[dir=ltr] #toolbarSidebarRight,html[dir=rtl] #toolbarSidebarLeft{float:right}html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=ltr] ngx-extended-pdf-viewer #toolbarViewerRight>*{position:relative;float:left}html[dir=ltr] #toolbarSidebarLeft *,html[dir=ltr] #toolbarSidebarRight *,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerLeft>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerMiddle>*,html[dir=rtl] ngx-extended-pdf-viewer #toolbarViewerRight>*,html[dir=rtl] ngx-extended-pdf-viewer .findbar *{position:relative;float:right}html[dir=rtl] #toolbarSidebarLeft *,html[dir=rtl] #toolbarSidebarRight *{position:relative;float:right}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{border:0 none;background:none;width:32px;height:25px}ngx-extended-pdf-viewer .toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}ngx-extended-pdf-viewer .toolbarButton[disabled],ngx-extended-pdf-viewer .dialogButton[disabled]{opacity:.5}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dropdownToolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{border:1px solid rgba(0,0,0,0);color:#5a5a5a}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .secondaryToolbarButton,ngx-extended-pdf-viewer .dialogButton{min-width:16px;border-radius:2px;font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton,html[dir=ltr] ngx-extended-pdf-viewer .dialogButton{margin:3px 2px 4px 0}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton,html[dir=rtl] ngx-extended-pdf-viewer .dialogButton{margin:3px 0 4px 2px}ngx-extended-pdf-viewer .dialogButton{background-color:rgba(0,0,0,.2);background-clip:padding-box;border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton{background-color:rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.4)}ngx-extended-pdf-viewer .toolbarButton.toggled,ngx-extended-pdf-viewer .secondaryToolbarButton.toggled{background-color:rgba(0,0,0,.2);border-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer .dropdownToolbarButton>select{color:#5a5a5a;background-color:#fff}ngx-extended-pdf-viewer .dropdownToolbarButton>select>option{background:#f9f9f9}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:first-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:last-child{margin-left:4px}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:4px}ngx-extended-pdf-viewer .toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] ngx-extended-pdf-viewer #findPrevious{margin-left:3px}html[dir=ltr] ngx-extended-pdf-viewer #findNext{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findPrevious{margin-right:3px}html[dir=rtl] ngx-extended-pdf-viewer #findNext{margin-left:3px}ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:"";background-color:#70db55;height:9px;width:9px;border-radius:50%}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton.pdfSidebarNotification::after{right:17px}ngx-extended-pdf-viewer .html .toolbarField{padding:3px 6px;margin:4px 0 4px 0;border-radius:2px;background-color:#fff;background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.4);color:#5a5a5a;font-size:12px;line-height:14px;outline-style:none}ngx-extended-pdf-viewer .html .toolbarField::placeholder,ngx-extended-pdf-viewer .html .toolbarField:-ms-input-placeholder,ngx-extended-pdf-viewer .html .toolbarField::-ms-input-placeholder{color:#bfbfbf}ngx-extended-pdf-viewer .html .toolbarField[type=checkbox]{display:inline-block;margin:8px 0}ngx-extended-pdf-viewer .html .toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber.visiblePageIsLoading{background-image:url("data:image/png;base64,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");background-repeat:no-repeat;background-position:1px}ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-inner-spin-button,ngx-extended-pdf-viewer .html .toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}ngx-extended-pdf-viewer .html .toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid rgba(0,0,0,0);border-radius:2px;color:#5a5a5a;font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}ngx-extended-pdf-viewer .html #thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}ngx-extended-pdf-viewer .html #thumbnailView>a:active{outline:0}ngx-extended-pdf-viewer .html .thumbnail{width:var(--thumbnail-width);height:var(--thumbnail-height);margin:0 10px 5px 10px;padding:1px;border:7px solid rgba(0,0,0,0);border-radius:2px}html[dir=ltr] ngx-extended-pdf-viewer .thumbnail{float:left}html[dir=rtl] ngx-extended-pdf-viewer .thumbnail{float:right}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}ngx-extended-pdf-viewer #thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}ngx-extended-pdf-viewer .thumbnail:not([data-loaded]){border:1px dashed rgba(255,0,0,.5);margin:-1px 9px 4px 9px}ngx-extended-pdf-viewer .thumbnailImage{border:1px solid rgba(0,0,0,0);width:var(--thumbnail-width);height:var(--thumbnail-height);opacity:.8;z-index:1;background-color:#fff;background-clip:content-box}ngx-extended-pdf-viewer .thumbnailSelectionRing{border-radius:2px;padding:7px}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{opacity:1}ngx-extended-pdf-viewer .thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.4);background-clip:padding-box;color:#fff}ngx-extended-pdf-viewer .thumbnail.selected{border-color:rgba(255,255,255,.4) !important}ngx-extended-pdf-viewer .thumbnail:not([data-loaded])>.thumbnailImage{width:calc(var(--thumbnail-width) - 2px);height:calc(var(--thumbnail-height) - 2px);border:1px dashed #848484}ngx-extended-pdf-viewer #outlineView,ngx-extended-pdf-viewer #attachmentsView,ngx-extended-pdf-viewer #layersView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ngx-extended-pdf-viewer #outlineView{padding:4px 4px 0}ngx-extended-pdf-viewer #attachmentsView{padding:3px 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=ltr] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-left:20px}html[dir=rtl] ngx-extended-pdf-viewer .treeWithDeepNesting>.treeItem,html[dir=rtl] ngx-extended-pdf-viewer .treeItem>.treeItems{margin-right:20px}ngx-extended-pdf-viewer .treeItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:#5a5a5a;font-size:13px;line-height:15px;user-select:none;white-space:normal;cursor:pointer}html[dir=ltr] ngx-extended-pdf-viewer .treeItem>a{padding:2px 0 5px 4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItem>a{padding:2px 4px 5px 0}ngx-extended-pdf-viewer #layersView .treeItem>a *{cursor:pointer}ngx-extended-pdf-viewer #layersView .treeItem>a>label>input{float:inline-start;margin-top:1px}html[dir=ltr] ngx-extended-pdf-viewer #layersView .treeItem>a>label{padding-left:4px}html[dir=rtl] ngx-extended-pdf-viewer #layersView .treesItem>a>label{padding-right:4px}ngx-extended-pdf-viewer .treeItemToggler{position:relative;height:0;width:0}ngx-extended-pdf-viewer .treeItemToggler::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M10 13l4-7H6z'/></svg>");display:inline-block;position:absolute;max-width:16px}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{content:url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M13 9L6 5v8z'/></svg>");max-width:16px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden::before{transform:scaleX(-1)}ngx-extended-pdf-viewer .treeItemToggler.treeItemsHidden~.treeItems{display:none}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler{float:left}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler{float:right}html[dir=ltr] ngx-extended-pdf-viewer .treeItemToggler::before{right:4px}html[dir=rtl] ngx-extended-pdf-viewer .treeItemToggler::before{left:4px}ngx-extended-pdf-viewer .treeItemToggler:hover,ngx-extended-pdf-viewer .treeItemToggler:hover+a,ngx-extended-pdf-viewer .treeItemToggler:hover~.treeItems,ngx-extended-pdf-viewer .treeItem>a:hover{background-clip:padding-box;border-radius:2px}ngx-extended-pdf-viewer .treeItem.selected{background-clip:padding-box}ngx-extended-pdf-viewer ::-moz-selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer ::selection{background:rgba(0,0,255,.3)}ngx-extended-pdf-viewer #errorWrapper{background:none repeat scroll 0 0 #f66;color:#fff;left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}ngx-extended-pdf-viewer #errorMessageLeft{float:left}ngx-extended-pdf-viewer #errorMessageRight{float:right}ngx-extended-pdf-viewer #errorMoreInfo{background-color:#fff;color:#f66;padding:3px;margin:3px;width:98%}ngx-extended-pdf-viewer .dialogButton{width:auto;margin:3px 4px 2px !important;padding:2px 11px;color:#5a5a5a;background-color:#f9f9f9;border:#f9f9f9 !important}ngx-extended-pdf-viewer dialog{margin:auto;padding:15px;border-spacing:4px;color:#5a5a5a;font-size:12px;line-height:14px;background-color:#f9f9f9;border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}ngx-extended-pdf-viewer dialog::backdrop{background-color:rgba(0,0,0,.2);user-select:none}ngx-extended-pdf-viewer dialog>.row{display:table-row}ngx-extended-pdf-viewer dialog>.row>*{display:table-cell}ngx-extended-pdf-viewer dialog .toolbarField{margin:5px 0}ngx-extended-pdf-viewer dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.4)}ngx-extended-pdf-viewer dialog .buttonRow{text-align:center;vertical-align:middle}ngx-extended-pdf-viewer dialog :link{color:#fff}ngx-extended-pdf-viewer #passwordDialog{text-align:center}ngx-extended-pdf-viewer #passwordDialog .toolbarField{width:200px}ngx-extended-pdf-viewer #documentPropertiesDialog{text-align:left}ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{min-width:100px;text-align:start}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}html[dir=ltr] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:left}html[dir=rtl] ngx-extended-pdf-viewer #documentPropertiesDialog .row>*{text-align:right}.fileInput{background:#fff;color:#f9f9f9;margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}ngx-extended-pdf-viewer #documentPropertiesDialog .row>span{width:125px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .row>p{max-width:225px;word-wrap:break-word}ngx-extended-pdf-viewer #documentPropertiesDialog .buttonRow{margin-top:10px}ngx-extended-pdf-viewer .clearBoth{clear:both}ngx-extended-pdf-viewer .grab-to-pan-grab{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8="),move !important;cursor:-webkit-grab !important;cursor:grab !important}ngx-extended-pdf-viewer .grab-to-pan-grab *:not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit !important}ngx-extended-pdf-viewer .grab-to-pan-grab:active,ngx-extended-pdf-viewer .grab-to-pan-grabbing{cursor:url("data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8="),move !important;cursor:-webkit-grabbing !important;cursor:grabbing !important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}@media screen and (-webkit-min-device-pixel-ratio: 1.1),screen and (min-resolution: 1.1dppx){ngx-extended-pdf-viewer .toolbarButton::before{transform:scale(0.5);top:-5px}ngx-extended-pdf-viewer .secondaryToolbarButton::before{transform:scale(0.5);top:-4px}}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton::before,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton::before{left:-1px}html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:-2px}html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton::before{left:186px}ngx-extended-pdf-viewer .toolbarField.pageNumber.visiblePageIsLoading,ngx-extended-pdf-viewer #findInput[data-status=pending]{background-image:url("data:image/png;base64,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");background-size:16px 17px}ngx-extended-pdf-viewer .html .unverified-signature-warning,ngx-extended-pdf-viewer .html .modified-background-warning{width:100%;background-color:#ff5353;font-size:12px;text-align:center;padding-top:5px;padding-bottom:5px}.treeItem.selected>a{font-weight:bold}ngx-extended-pdf-viewer .invisible{display:none !important}ngx-extended-pdf-viewer #outerContainer{clip-path:inset(0 0 0 0)}html[dir=ltr] ngx-extended-pdf-viewer .dialogButton,html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton{margin:3px 0 4px 0}html[dir=ltr] ngx-extended-pdf-viewer .toolbarButton:last-child,html[dir=rtl] ngx-extended-pdf-viewer .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] ngx-extended-pdf-viewer #secondaryToolbarToggle{margin-right:0;margin-left:4px}ngx-extended-pdf-viewer .toolbarButton,ngx-extended-pdf-viewer .dialogButton{padding-left:0;padding-right:0}ngx-extended-pdf-viewer .offscreen{position:fixed !important;left:-9999px !important;display:block !important;width:3000px !important}ngx-extended-pdf-viewer .offscreen #sidebarContainer{top:1000px !important}ngx-extended-pdf-viewer .toolbarButton{margin-left:-1px !important;margin-right:-2px !important}ngx-extended-pdf-viewer #numPages{padding-right:0}ngx-extended-pdf-viewer .pdf-viewer-template,ngx-extended-pdf-viewer .pdf-viewer-template *{display:none}ngx-extended-pdf-viewer button:focus,ngx-extended-pdf-viewer a:focus,ngx-extended-pdf-viewer input:focus,ngx-extended-pdf-viewer select:focus{outline:none;border:1px solid blue}ngx-extended-pdf-viewer input[type=checkbox]:focus{outline:1px solid blue}.hidden-by-fullscreen{display:none !important}:root{--scrollbar-color: auto;--scrollbar-bg-color: auto} #printContainer{display:none}@media print{#printContainer{position:static;display:block}body[data-pdfjsprinting],html{overflow-y:visible !important;margin:0;padding:0}body[data-pdfjsprinting]{background:rgba(0,0,0,0) none;height:100%;width:100%}body[data-pdfjsprinting]>*{display:none !important;outline:0;padding:0;margin:0}body[data-pdfjsprinting] #printContainer{display:block !important;height:100%;width:100%}body[data-pdfjsprinting] #printContainer img{max-width:100%;max-height:100%;direction:ltr;display:block !important}body[data-pdfjsprinting] #printContainer>.printedPage{page-break-after:always;page-break-inside:avoid;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage .xfaPage{position:absolute}body[data-pdfjsprinting] #printContainer>.xfaPrintedPage{page-break-after:always;page-break-inside:avoid;width:100%;height:100%;position:relative}body[data-pdfjsprinting] #printContainer>.printedPage canvas,body[data-pdfjsprinting] #printContainer>.printedPage img{max-width:100%;max-height:100%;direction:ltr;display:block}html[data-pdfjsprinting].cdk-global-scrollblock{width:initial;position:initial}}`;

class PdfLightThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-theme-css';
        addTrustedHTML(styles, css$1);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        var _a;
        const styles = this.document.getElementById('pdf-theme-css');
        (_a = styles === null || styles === void 0 ? void 0 : styles.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(styles);
    }
}
PdfLightThemeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfLightThemeComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
PdfLightThemeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfLightThemeComponent, selector: "pdf-light-theme", ngImport: i0, template: "" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfLightThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-light-theme', template: "" }]
        }], ctorParameters: function () {
        return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    } });

const css = `:root{--annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");--input-focus-border-color: Highlight;--input-focus-outline: 1px solid Canvas;--input-unfocused-border-color: transparent;--input-disabled-border-color: transparent;--input-hover-border-color: black;--link-outline: none}@media screen and (forced-colors: active){:root{--input-focus-border-color: CanvasText;--input-unfocused-border-color: ActiveText;--input-disabled-border-color: GrayText;--input-hover-border-color: Highlight;--link-outline: 1.5px solid LinkText;--hcm-highligh-filter: invert(100%)}.annotationLayer .textWidgetAnnotation :is(input,textarea):required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input:required{outline:1.5px solid selectedItem}.annotationLayer .linkAnnotation:hover{backdrop-filter:var(--hcm-highligh-filter)}.annotationLayer .linkAnnotation>a:hover{opacity:0 !important;background:none !important;box-shadow:none}.annotationLayer .popupAnnotation .popup{outline:calc(1.5px*var(--scale-factor)) solid CanvasText !important;background-color:ButtonFace !important;color:ButtonText !important}.annotationLayer .highlightArea:hover::after{position:absolute;top:0;left:0;width:100%;height:100%;backdrop-filter:var(--hcm-highligh-filter);content:"";pointer-events:none}.annotationLayer .popupAnnotation.focused .popup{outline:calc(3px*var(--scale-factor)) solid Highlight !important}}.annotationLayer{position:absolute;top:0;left:0;pointer-events:none;transform-origin:0 0;z-index:3}.annotationLayer[data-main-rotation="90"] .norotate{transform:rotate(270deg) translateX(-100%)}.annotationLayer[data-main-rotation="180"] .norotate{transform:rotate(180deg) translate(-100%, -100%)}.annotationLayer[data-main-rotation="270"] .norotate{transform:rotate(90deg) translateY(-100%)}.annotationLayer canvas{position:absolute;width:100%;height:100%;pointer-events:none}.annotationLayer section{position:absolute;text-align:initial;pointer-events:auto;box-sizing:border-box;transform-origin:0 0}.annotationLayer .linkAnnotation{outline:var(--link-outline)}.annotationLayer :is(.linkAnnotation,.buttonWidgetAnnotation.pushButton)>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer :is(.linkAnnotation,.buttonWidgetAnnotation.pushButton):not(.hasBorder)>a:hover{opacity:.2;background-color:#ff0;box-shadow:0 2px 10px #ff0}.annotationLayer .linkAnnotation.hasBorder:hover{background-color:rgba(255,255,0,.2)}.annotationLayer .hasBorder{background-size:100% 100%}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer;width:100%;height:100%;top:0;left:0}.annotationLayer .textWidgetAnnotation :is(input,textarea),.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input{background-image:var(--annotation-unfocused-field-background);border:2px solid var(--input-unfocused-border-color);box-sizing:border-box;font:calc(9px*var(--scale-factor)) sans-serif;height:100%;margin:0;vertical-align:top;width:100%}.annotationLayer .textWidgetAnnotation :is(input,textarea):required,.annotationLayer .choiceWidgetAnnotation select:required,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input:required{outline:1.5px solid red}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{resize:none}.annotationLayer .textWidgetAnnotation :is(input,textarea)[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input[disabled]{background:none;border:2px solid var(--input-disabled-border-color);cursor:not-allowed}.annotationLayer .textWidgetAnnotation :is(input,textarea):hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input:hover{border:2px solid var(--input-hover-border-color)}.annotationLayer .textWidgetAnnotation :is(input,textarea):hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .buttonWidgetAnnotation.checkBox input:hover{border-radius:2px}.annotationLayer .textWidgetAnnotation :is(input,textarea):focus,.annotationLayer .choiceWidgetAnnotation select:focus{background:none;border:2px solid var(--input-focus-border-color);border-radius:2px;outline:var(--input-focus-outline)}.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) :focus{background-image:none;background-color:rgba(0,0,0,0)}.annotationLayer .buttonWidgetAnnotation.checkBox :focus{border:2px solid var(--input-focus-border-color);border-radius:2px;outline:var(--input-focus-outline)}.annotationLayer .buttonWidgetAnnotation.radioButton :focus{border:2px solid var(--input-focus-border-color);outline:var(--input-focus-outline)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{background-color:CanvasText;content:"";display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::before{transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked::after{transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked::before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:103%}.annotationLayer .buttonWidgetAnnotation:is(.checkBox,.radioButton) input{appearance:none}.annotationLayer .fileAttachmentAnnotation .popupTriggerArea{height:100%;width:100%}.annotationLayer .popupAnnotation{position:absolute;font-size:calc(9px*var(--scale-factor));pointer-events:none;width:max-content;max-width:45%;height:auto}.annotationLayer .popup{background-color:#ff9;box-shadow:0 calc(2px*var(--scale-factor)) calc(5px*var(--scale-factor)) #888;border-radius:calc(2px*var(--scale-factor));outline:1.5px solid #ffff4a;padding:calc(6px*var(--scale-factor));cursor:pointer;font-family:message-box,sans-serif;white-space:normal;word-wrap:break-word;pointer-events:auto}.annotationLayer .popupAnnotation.focused .popup{outline-width:3px}.annotationLayer .popup *{font-size:calc(9px*var(--scale-factor))}.annotationLayer .popup>.header{display:inline-block}.annotationLayer .popup>.header h1{display:inline}.annotationLayer .popup>.header .popupDate{display:inline-block;margin-left:calc(5px*var(--scale-factor));width:fit-content}.annotationLayer .popupContent{border-top:1px solid #333;margin-top:calc(2px*var(--scale-factor));padding-top:calc(2px*var(--scale-factor))}.annotationLayer .richText>*{white-space:pre-wrap;font-size:calc(9px*var(--scale-factor))}.annotationLayer .highlightAnnotation,.annotationLayer .underlineAnnotation,.annotationLayer .squigglyAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .lineAnnotation svg line,.annotationLayer .squareAnnotation svg rect,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .caretAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .stampAnnotation,.annotationLayer .fileAttachmentAnnotation{cursor:pointer}.annotationLayer section svg{position:absolute;width:100%;height:100%;top:0;left:0}.annotationLayer .annotationTextContent{position:absolute;width:100%;height:100%;opacity:0;color:rgba(0,0,0,0);user-select:none;pointer-events:none}.annotationLayer .annotationTextContent span{width:100%;display:inline-block}.annotationLayer svg.quadrilateralsContainer{contain:strict;width:0;height:0;position:absolute;top:0;left:0;z-index:-1} :root{--xfa-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");--xfa-focus-outline: auto}@media screen and (forced-colors: active){:root{--xfa-focus-outline: 2px solid CanvasText}.xfaLayer *:required{outline:1.5px solid selectedItem}}.xfaLayer .highlight{margin:-1px;padding:1px;background-color:#efcbed;border-radius:4px}.xfaLayer .highlight.appended{position:initial}.xfaLayer .highlight.begin{border-radius:4px 0 0 4px}.xfaLayer .highlight.end{border-radius:0 4px 4px 0}.xfaLayer .highlight.middle{border-radius:0}.xfaLayer .highlight.selected{background-color:#cbdfcb}.xfaPage{overflow:hidden;position:relative}.xfaContentarea{position:absolute}.xfaPrintOnly{display:none}.xfaLayer{background-color:rgba(0,0,0,0);position:absolute;text-align:initial;top:0;left:0;transform-origin:0 0;line-height:1.2}.xfaLayer *{color:inherit;font:inherit;font-style:inherit;font-weight:inherit;font-kerning:inherit;letter-spacing:-0.01px;text-align:inherit;text-decoration:inherit;box-sizing:border-box;background-color:rgba(0,0,0,0);padding:0;margin:0;pointer-events:auto;line-height:inherit}.xfaLayer *:required{outline:1.5px solid red}.xfaLayer div,.xfaLayer svg,.xfaLayer svg *{pointer-events:none}.xfaLayer a{color:blue}.xfaRich li{margin-left:3em}.xfaFont{color:#000;font-weight:normal;font-kerning:none;font-size:10px;font-style:normal;letter-spacing:0;text-decoration:none;vertical-align:0}.xfaCaption{overflow:hidden;flex:0 0 auto}.xfaCaptionForCheckButton{overflow:hidden;flex:1 1 auto}.xfaLabel{height:100%;width:100%}.xfaLeft{display:flex;flex-direction:row;align-items:center}.xfaRight{display:flex;flex-direction:row-reverse;align-items:center}:is(.xfaLeft,.xfaRight)>:is(.xfaCaption,.xfaCaptionForCheckButton){max-height:100%}.xfaTop{display:flex;flex-direction:column;align-items:flex-start}.xfaBottom{display:flex;flex-direction:column-reverse;align-items:flex-start}:is(.xfaTop,.xfaBottom)>:is(.xfaCaption,.xfaCaptionForCheckButton){width:100%}.xfaBorder{background-color:rgba(0,0,0,0);position:absolute;pointer-events:none}.xfaWrapped{width:100%;height:100%}:is(.xfaTextfield,.xfaSelect):focus{background-image:none;background-color:rgba(0,0,0,0);outline:var(--xfa-focus-outline);outline-offset:-1px}:is(.xfaCheckbox,.xfaRadio):focus{outline:var(--xfa-focus-outline)}.xfaTextfield,.xfaSelect{height:100%;width:100%;flex:1 1 auto;border:none;resize:none;background-image:var(--xfa-unfocused-field-background)}.xfaSelect{padding-inline:2px}:is(.xfaTop,.xfaBottom)>:is(.xfaTextfield,.xfaSelect){flex:0 1 auto}.xfaButton{cursor:pointer;width:100%;height:100%;border:none;text-align:center}.xfaLink{width:100%;height:100%;position:absolute;top:0;left:0}.xfaCheckbox,.xfaRadio{width:100%;height:100%;flex:0 0 auto;border:none}.xfaRich{white-space:pre-wrap;width:100%;height:100%}.xfaImage{object-position:left top;object-fit:contain;width:100%;height:100%}.xfaLrTb,.xfaRlTb,.xfaTb{display:flex;flex-direction:column;align-items:stretch}.xfaLr{display:flex;flex-direction:row;align-items:stretch}.xfaRl{display:flex;flex-direction:row-reverse;align-items:stretch}.xfaTb>div{justify-content:left}.xfaPosition{position:relative}.xfaArea{position:relative}.xfaValignMiddle{display:flex;align-items:center}.xfaTable{display:flex;flex-direction:column;align-items:stretch}.xfaTable .xfaRow{display:flex;flex-direction:row;align-items:stretch}.xfaTable .xfaRlRow{display:flex;flex-direction:row-reverse;align-items:stretch;flex:1}.xfaTable .xfaRlRow>div{flex:1}:is(.xfaNonInteractive,.xfaDisabled,.xfaReadOnly) :is(input,textarea){background:initial}@media print{.xfaTextfield,.xfaSelect{background:rgba(0,0,0,0)}.xfaSelect{appearance:none;text-indent:1px;text-overflow:""}} :root{--outline-width: 2px;--outline-color: blue;--focus-outline: solid var(--outline-width) var(--outline-color);--hover-outline: dashed var(--outline-width) var(--outline-color);--freetext-line-height: 1.35;--freetext-padding: 2px;--resizer-size: 8px;--resizer-shift: calc(0px - var(--outline-width) - var(--resizer-size) / 2 - var(--outline-width) / 2);--resizer-color: white;--editorFreeText-editing-cursor: text;--editorInk-editing-cursor: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M2.49913 12.6251C2.61913 12.6251 2.73913 12.6051 2.85713 12.5661L6.29013 11.4201L13.2891 4.4221C14.0191 3.6911 14.0191 2.5011 13.2891 1.7701L12.2291 0.710098C11.4971 -0.0199023 10.3091 -0.0199023 9.57713 0.710098L2.57813 7.7091L1.43313 11.1451C1.29813 11.5511 1.40213 11.9931 1.70513 12.2951C1.92113 12.5101 2.20613 12.6251 2.49913 12.6251ZM10.4611 1.5951C10.7031 1.3511 11.1021 1.3511 11.3441 1.5951L12.4051 2.6561C12.6491 2.8991 12.6491 3.2961 12.4051 3.5391L11.3401 4.6051L9.39513 2.6601L10.4611 1.5951ZM3.67013 8.3851L8.51013 3.5451L10.4541 5.4891L5.61413 10.3301L2.69713 11.3031L3.67013 8.3851Z' fill='black'/><path d='M14.8169 13.314L13.0229 13.862C12.3309 14.073 11.5909 14.111 10.8859 13.968L8.80391 13.551C7.58491 13.308 6.29791 13.48 5.18491 14.036C3.95291 14.652 2.46691 14.412 1.49191 13.436L1.44091 13.385L0.60791 14.321C1.46291 15.175 2.59991 15.625 3.75291 15.625C4.42891 15.625 5.10991 15.471 5.74391 15.153C6.60891 14.721 7.60891 14.586 8.55891 14.777L10.6409 15.194C11.5509 15.376 12.5009 15.327 13.3879 15.056L15.1819 14.508L14.8169 13.314Z' fill='black'/></svg>") 0 16, pointer;--editorFreeText-editing-cursor: url("data:image/svg+xml;charset=UTF-8,<svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 2.75H12.5V2.25V1V0.5H12H10.358C9.91165 0.5 9.47731 0.625661 9.09989 0.860442L9.09886 0.861087L8 1.54837L6.89997 0.860979L6.89911 0.860443C6.5218 0.625734 6.08748 0.5 5.642 0.5H4H3.5V1V2.25V2.75H4H5.642C5.66478 2.75 5.6885 2.75641 5.71008 2.76968C5.71023 2.76977 5.71038 2.76986 5.71053 2.76995L6.817 3.461C6.81704 3.46103 6.81709 3.46105 6.81713 3.46108C6.81713 3.46108 6.81713 3.46108 6.81714 3.46109C6.8552 3.48494 6.876 3.52285 6.876 3.567V8V12.433C6.876 12.4771 6.85523 12.515 6.81722 12.5389C6.81715 12.5389 6.81707 12.539 6.817 12.539L5.70953 13.23C5.70941 13.2301 5.70929 13.2302 5.70917 13.2303C5.68723 13.2438 5.6644 13.25 5.641 13.25H4H3.5V13.75V15V15.5H4H5.642C6.08835 15.5 6.52269 15.3743 6.90011 15.1396L6.90086 15.1391L8 14.4526L9.10003 15.14L9.10089 15.1406C9.47831 15.3753 9.91265 15.501 10.359 15.501H12H12.5V15.001V13.751V13.251H12H10.358C10.3352 13.251 10.3115 13.2446 10.2899 13.2313C10.2897 13.2312 10.2896 13.2311 10.2895 13.231L9.183 12.54C9.18298 12.54 9.18295 12.54 9.18293 12.54C9.18291 12.5399 9.18288 12.5399 9.18286 12.5399C9.14615 12.5169 9.125 12.4797 9.125 12.434V8V3.567C9.125 3.52266 9.14603 3.48441 9.18364 3.4606C9.18377 3.46052 9.1839 3.46043 9.18404 3.46035L10.2895 2.76995C10.2896 2.76985 10.2898 2.76975 10.2899 2.76966C10.3119 2.75619 10.3346 2.75 10.358 2.75H12Z' fill='black' stroke='white'/></svg>") 0 16, text}@media screen and (forced-colors: active){:root{--outline-width: 3px;--outline-color: ButtonText;--resizer-size: 12px;--resizer-color: ButtonFace}}[data-editor-rotation="90"]{transform:rotate(90deg)}[data-editor-rotation="180"]{transform:rotate(180deg)}[data-editor-rotation="270"]{transform:rotate(270deg)}.annotationEditorLayer{background:rgba(0,0,0,0);position:absolute;inset:0;font-size:calc(100px*var(--scale-factor));transform-origin:0 0;cursor:auto;z-index:4}.annotationEditorLayer.waiting{content:"";cursor:wait;position:absolute;inset:0;width:100%;height:100%}.annotationEditorLayer.freeTextEditing{cursor:var(--editorFreeText-editing-cursor)}.annotationEditorLayer.inkEditing{cursor:var(--editorInk-editing-cursor)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor).draggable.selectedEditor{cursor:move}.annotationEditorLayer .selectedEditor{outline:var(--focus-outline)}.ngx-extended-pdf-viewer-prevent-touch-move #viewerContainer{touch-action:none}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor){position:absolute;background:rgba(0,0,0,0);border-radius:3px;z-index:1;transform-origin:0 0;cursor:auto;max-width:100%;max-height:100%}.annotationEditorLayer .freeTextEditor{padding:calc(var(--freetext-padding)*var(--scale-factor));width:auto;height:auto;touch-action:none}.annotationEditorLayer .freeTextEditor .internal{background:rgba(0,0,0,0);border:none;inset:0;overflow:visible;white-space:nowrap;font:10px sans-serif;line-height:var(--freetext-line-height);user-select:none}.annotationEditorLayer .freeTextEditor .overlay{position:absolute;display:none;background:rgba(0,0,0,0);inset:0;width:100%;height:100%}.annotationEditorLayer .freeTextEditor .overlay.enabled{display:block}.annotationEditorLayer .freeTextEditor .internal:empty::before{content:attr(default-content);color:gray}.annotationEditorLayer .freeTextEditor .internal:focus{outline:none;user-select:auto}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor):hover:not(.selectedEditor){outline:var(--hover-outline)}.annotationEditorLayer .inkEditor{width:100%;height:100%}.annotationEditorLayer .inkEditor.editing{cursor:inherit}.annotationEditorLayer .inkEditor .inkEditorCanvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none}.annotationEditorLayer .stampEditor{width:auto;height:auto}.annotationEditorLayer .stampEditor canvas{width:100%;height:100%}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers{width:100%;height:100%;position:absolute;inset:0}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers.hidden{display:none}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer{width:var(--resizer-size);height:var(--resizer-size);border-radius:50%;background:var(--resizer-color);border:var(--focus-outline);position:absolute}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.topLeft{top:var(--resizer-shift);left:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.topMiddle{top:var(--resizer-shift);left:calc(50% + var(--resizer-shift))}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.topRight{top:var(--resizer-shift);right:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.middleRight{top:calc(50% + var(--resizer-shift));right:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.bottomRight{bottom:var(--resizer-shift);right:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.bottomMiddle{bottom:var(--resizer-shift);left:calc(50% + var(--resizer-shift))}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.bottomLeft{bottom:var(--resizer-shift);left:var(--resizer-shift)}.annotationEditorLayer :is(.freeTextEditor,.inkEditor,.stampEditor)>.resizers>.resizer.middleLeft{top:calc(50% + var(--resizer-shift));left:var(--resizer-shift)}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomRight{cursor:nwse-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomMiddle{cursor:ns-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomLeft{cursor:nesw-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleLeft{cursor:ew-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomRight{cursor:nesw-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topMiddle,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomMiddle{cursor:ew-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.bottomLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.topRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.bottomLeft{cursor:nwse-resize}.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="0"] :is([data-editor-rotation="90"],[data-editor-rotation="270"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="90"] :is([data-editor-rotation="0"],[data-editor-rotation="180"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="180"] :is([data-editor-rotation="270"],[data-editor-rotation="90"])>.resizers>.resizer.middleLeft,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleRight,.annotationEditorLayer[data-main-rotation="270"] :is([data-editor-rotation="180"],[data-editor-rotation="0"])>.resizers>.resizer.middleLeft{cursor:ns-resize}`;

class PdfAcroformDefaultThemeComponent {
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        this.injectStyle();
    }
    injectStyle() {
        const styles = this.document.createElement('STYLE');
        styles.id = 'pdf-acroform-css';
        addTrustedHTML(styles, css);
        this.renderer.appendChild(this.document.head, styles);
    }
    ngOnDestroy() {
        var _a;
        const styles = this.document.getElementById('pdf-acroform-css');
        (_a = styles === null || styles === void 0 ? void 0 : styles.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(styles);
    }
}
PdfAcroformDefaultThemeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfAcroformDefaultThemeComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component });
PdfAcroformDefaultThemeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfAcroformDefaultThemeComponent, selector: "pdf-acroform-default-theme", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfAcroformDefaultThemeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-acroform-default-theme', template: '', styles: [] }]
        }], ctorParameters: function () {
        return [{ type: i0.Renderer2 }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }];
    } });

class PdfBreakpoints {
}
PdfBreakpoints.xs = 490;
PdfBreakpoints.sm = 560;
PdfBreakpoints.md = 610;
PdfBreakpoints.lg = 660;
PdfBreakpoints.xl = 780;
PdfBreakpoints.xxl = 900;
class ResponsiveCSSClassPipe {
    transform(visible, defaultClass = 'always-visible') {
        switch (visible) {
            case undefined:
                return defaultClass;
            case false:
                return 'invisible';
            case true:
                return defaultClass;
            case 'always-visible':
                return 'always-visible';
            case 'always-in-secondary-menu':
                return 'always-in-secondary-menu';
            case 'xxs':
                return 'hiddenXXSView';
            case 'xs':
                return 'hiddenTinyView';
            case 'sm':
                return 'hiddenSmallView';
            case 'md':
                return 'hiddenMediumView';
            case 'lg':
                return 'hiddenLargeView';
            case 'xl':
                return 'hiddenXLView';
            case 'xxl':
                return 'hiddenXXLView';
        }
    }
}
ResponsiveCSSClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ResponsiveCSSClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ResponsiveCSSClassPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ResponsiveCSSClassPipe, name: "responsiveCSSClass" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ResponsiveCSSClassPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'responsiveCSSClass' }]
        }] });
class NegativeResponsiveCSSClassPipe {
    transform(visible) {
        switch (visible) {
            case undefined:
                return 'always-visible';
            case 'always-visible':
            case true:
                return 'invisible';
            case 'invisible':
            case false:
                return 'invisible';
            case 'always-in-secondary-menu':
                return 'always-in-secondary-menu';
            case 'hiddenXXSView':
            case 'xxs':
                return 'visibleXXSView';
            case 'hiddenTinyView':
            case 'xs':
                return 'visibleTinyView';
            case 'sm':
            case 'hiddenSmallView':
                return 'visibleSmallView';
            case 'md':
            case 'hiddenMediumView':
                return 'visibleMediumView';
            case 'lg':
            case 'hiddenLargeView':
                return 'visibleLargeView';
            case 'xl':
            case 'hiddenXLView':
                return 'visibleXLView';
            case 'xxl':
            case 'hiddenXXLView':
                return 'visibleXXLView';
        }
    }
}
NegativeResponsiveCSSClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NegativeResponsiveCSSClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NegativeResponsiveCSSClassPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NegativeResponsiveCSSClassPipe, name: "invertForSecondaryToolbar" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NegativeResponsiveCSSClassPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'invertForSecondaryToolbar' }]
        }] });

class DynamicCssComponent {
    constructor(renderer, document, platformId) {
        this.renderer = renderer;
        this.document = document;
        this.platformId = platformId;
        this.zoom = 1.0;
        this.width = 3.14159265359;
        this.xxs = 455;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
        if (isPlatformBrowser(this.platformId)) {
            this.width = document.body.clientWidth;
        }
    }
    get style() {
        return `
#toolbarContainer .always-in-secondary-menu {
  display: none;
}

#secondaryToolbar .always-in-secondary-menu {
  display: inline-flex;
}

#outerContainer #mainContainer .visibleXXSView,
#outerContainer #mainContainer .visibleTinyView,
#outerContainer #mainContainer .visibleSmallView,
#outerContainer #mainContainer .visibleMediumView,
#outerContainer #mainContainer .visibleLargeView,
#outerContainer #mainContainer .visibleXLView,
#outerContainer #mainContainer .visibleXXLView {
  display: none;
}

@media all and (max-width: ${this.xl}px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: ${this.xxl}) {
  #sidebarContent {
    background-color: rgba(0, 0, 0, 0.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {
    left: 0px !important;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {
    right: 0px !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.lg}px) {
  .toolbarButtonSpacer {
    width: 15px;
  }

  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  .toolbarButtonSpacer {
    display: none;
  }
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.sm}px) {
  #outerContainer .hiddenSmallView,
  #outerContainer .hiddenSmallView * {
    display: none;
  }
  #outerContainer  #mainContainer .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir='ltr'] .findbar {
    left: 38px;
  }
  html[dir='rtl'] .findbar {
    right: 38px;
  }
}

@media all and (max-width: ${this.sm}px) {
  #scaleSelectContainer {
    display: none;
  }
}

#outerContainer .visibleXLView,
#outerContainer .visibleXXLView,
#outerContainer .visibleTinyView {
  display: none;
}

#outerContainer .hiddenXLView,
#outerContainer .hiddenXXLView {
  display: unset;
}

@media all and (max-width: ${this.xl}px) {
  #outerContainer .hiddenXLView {
    display: none;
  }
  #outerContainer .visibleXLView {
    display: inherit;
  }

  #toolbarViewerMiddle {
    -webkit-transform: translateX(-36%);
    transform: translateX(-36%);
    display: unset;
    margin: unset;
    left: 50%;
    position: absolute;
  }
}

@media all and (max-width: ${this.xxl}px) {
  #outerContainer .hiddenXXLView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleXXLView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  #toolbarViewerMiddle {
    -webkit-transform: translateX(-26%);
    transform: translateX(-26%);
  }
}

@media all and (max-width: ${this.xs}px) {
  #outerContainer .hiddenTinyView,
  #outerContainer .hiddenTinyView * {
    display: none;
  }
  #outerContainer  #mainContainer .visibleTinyView {
    display: inherit;
  }
}

@media all and (max-width: ${this.xxs}px) {
  #outerContainer .hiddenXXSView,
  #outerContainer .hiddenXXSView * {
    display: none;
  }
  #outerContainer #mainContainer .visibleXXSView {
    display: inherit;
  }
}
  `;
    }
    ngOnInit() {
        this.injectStyle();
    }
    ngOnChanges() {
        const fullWith = this.document.body.clientWidth;
        const partialViewScale = fullWith / this.width;
        const scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * PdfBreakpoints.xs;
        this.sm = scaleFactor * PdfBreakpoints.sm;
        this.md = scaleFactor * PdfBreakpoints.md;
        this.lg = scaleFactor * PdfBreakpoints.lg;
        this.xl = scaleFactor * PdfBreakpoints.xl;
        this.xxl = scaleFactor * PdfBreakpoints.xxl;
        let styles = this.document.getElementById('pdf-dynamic-css');
        if (!styles) {
            styles = this.document.createElement('STYLE');
            styles.id = 'pdf-dynamic-css';
            addTrustedHTML(styles, this.style);
            this.renderer.appendChild(this.document.head, styles);
        }
        addTrustedHTML(styles, this.style);
    }
    injectStyle() {
        if (this.width === 3.14159265359) {
            setTimeout(() => this.ngOnChanges(), 1);
        }
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles === null || styles === void 0 ? void 0 : styles.parentElement) {
            styles.parentElement.removeChild(styles);
        }
    }
}
DynamicCssComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: DynamicCssComponent, deps: [{ token: i0.Renderer2 }, { token: DOCUMENT }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
DynamicCssComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: DynamicCssComponent, selector: "pdf-dynamic-css", inputs: { zoom: "zoom", width: "width" }, usesOnChanges: true, ngImport: i0, template: "", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: DynamicCssComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-dynamic-css', template: "", styles: [""] }]
        }], ctorParameters: function () {
        return [{ type: i0.Renderer2 }, { type: Document, decorators: [{
                        type: Inject,
                        args: [DOCUMENT]
                    }] }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }];
    }, propDecorators: { zoom: [{
                type: Input
            }], width: [{
                type: Input
            }] } });

class PdfSidebarToolbarComponent {
    constructor() {
        this.mobileFriendlyZoomScale = 1;
    }
    get height() {
        const h = 32 * this.mobileFriendlyZoomScale;
        return `${h}px`;
    }
}
PdfSidebarToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfSidebarToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSidebarToolbarComponent, selector: "pdf-sidebar-toolbar", inputs: { mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, ngImport: i0, template: "<div id=\"toolbarSidebar\" [style.height]=\"height\">\r\n  <div id=\"toolbarSidebarLeft\">\r\n    <button\r\n      aria-label=\"Thumbnails\"\r\n      type=\"button\"\r\n      id=\"viewThumbnail\"\r\n      class=\"toolbarButton toggled\"\r\n      title=\"Show Thumbnails\"\r\n      data-l10n-id=\"thumbs\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n    >\r\n      <span data-l10n-id=\"thumbs_label\">Thumbnails</span>\r\n      <svg role=\"img\" aria-label=\"Thumbnails\" style=\"width: 20px; height: 20px\" viewBox=\"0 0 24 24\">\r\n        <path\r\n          fill=\"currentColor\"\r\n          d=\"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z\"\r\n        />\r\n      </svg>\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      id=\"viewOutline\"\r\n      class=\"toolbarButton\"\r\n      title=\"Show Document Outline (double-click to expand/collapse all items)\"\r\n      data-l10n-id=\"document_outline\"\r\n      hidden=\"true\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n      aria-label=\"Show Document Outline (double-click to expand/collapse all items)\"\r\n    >\r\n      <span data-l10n-id=\"document_outline_label\">Document Outline</span>\r\n      <svg role=\"img\" aria-label=\"Show Document Outline (double-click to expand/collapse all items)\" style=\"width: 20px; height: 20px\" viewBox=\"0 0 24 24\">\r\n        <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\r\n      </svg>\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      id=\"viewAttachments\"\r\n      class=\"toolbarButton\"\r\n      title=\"Show Attachments\"\r\n      data-l10n-id=\"attachments\"\r\n      hidden=\"true\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n    >\r\n      <span data-l10n-id=\"attachments_label\">Attachments</span>\r\n      <svg style=\"width: 20px; height: 20px\" viewBox=\"0 0 24 24\">\r\n        <path\r\n          fill=\"currentColor\"\r\n          d=\"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z\"\r\n        />\r\n      </svg>\r\n    </button>\r\n    <button\r\n      id=\"viewLayers\"\r\n      class=\"toolbarButton\"\r\n      type=\"button\"\r\n      title=\"Show Layers (double-click to reset all layers to the default state)\"\r\n      data-l10n-id=\"layers\"\r\n      hidden=\"true\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n      aria-label=\"Show Layers (double-click to reset all layers to the default state)\"\r\n    >\r\n      <span data-l10n-id=\"layers_label\">Layers</span>\r\n      <svg\r\n        role=\"img\"\r\n        aria-label=\"Show Layers (double-click to reset all layers to the default state)\"\r\n        style=\"width: 20px; height: 20px; margin-left: 1px\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        fill=\"currentColor\"\r\n        viewBox=\"0 0 4.233 4.233\"\r\n      >\r\n        <path\r\n          d=\"M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z\"\r\n        />\r\n      </svg>\r\n    </button>\r\n  </div>\r\n\r\n  <div id=\"toolbarSidebarRight\">\r\n    <div id=\"outlineOptionsContainer\" class=\"hidden\">\r\n      <div class=\"verticalToolbarSeparator\"></div>\r\n\r\n      <button\r\n        type=\"button\"\r\n        id=\"currentOutlineItem\"\r\n        class=\"toolbarButton\"\r\n        disabled=\"disabled\"\r\n        title=\"Find Current Outline Item\"\r\n        tabindex=\"6\"\r\n        data-l10n-id=\"current_outline_item\"\r\n        [style.zoom]=\"mobileFriendlyZoomScale\"\r\n        aria-label=\"Find Current Outline Item\"\r\n      >\r\n        <span data-l10n-id=\"current_outline_item_label\">Current Outline Item</span>\r\n        <svg role=\"img\" aria-label=\"Find Current Outline Item\" style=\"width: 20px; height: 20px\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\">\r\n          <path\r\n            d=\"m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z\"\r\n          />\r\n          <path d=\"m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911\" />\r\n        </svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["button.toolbarButton{margin-right:4px!important;width:22px;height:22px}div#toolbarSidebar>button:first-child{margin-left:4px!important}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-sidebar-toolbar', template: "<div id=\"toolbarSidebar\" [style.height]=\"height\">\r\n  <div id=\"toolbarSidebarLeft\">\r\n    <button\r\n      aria-label=\"Thumbnails\"\r\n      type=\"button\"\r\n      id=\"viewThumbnail\"\r\n      class=\"toolbarButton toggled\"\r\n      title=\"Show Thumbnails\"\r\n      data-l10n-id=\"thumbs\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n    >\r\n      <span data-l10n-id=\"thumbs_label\">Thumbnails</span>\r\n      <svg role=\"img\" aria-label=\"Thumbnails\" style=\"width: 20px; height: 20px\" viewBox=\"0 0 24 24\">\r\n        <path\r\n          fill=\"currentColor\"\r\n          d=\"M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z\"\r\n        />\r\n      </svg>\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      id=\"viewOutline\"\r\n      class=\"toolbarButton\"\r\n      title=\"Show Document Outline (double-click to expand/collapse all items)\"\r\n      data-l10n-id=\"document_outline\"\r\n      hidden=\"true\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n      aria-label=\"Show Document Outline (double-click to expand/collapse all items)\"\r\n    >\r\n      <span data-l10n-id=\"document_outline_label\">Document Outline</span>\r\n      <svg role=\"img\" aria-label=\"Show Document Outline (double-click to expand/collapse all items)\" style=\"width: 20px; height: 20px\" viewBox=\"0 0 24 24\">\r\n        <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\r\n      </svg>\r\n    </button>\r\n\r\n    <button\r\n      type=\"button\"\r\n      id=\"viewAttachments\"\r\n      class=\"toolbarButton\"\r\n      title=\"Show Attachments\"\r\n      data-l10n-id=\"attachments\"\r\n      hidden=\"true\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n    >\r\n      <span data-l10n-id=\"attachments_label\">Attachments</span>\r\n      <svg style=\"width: 20px; height: 20px\" viewBox=\"0 0 24 24\">\r\n        <path\r\n          fill=\"currentColor\"\r\n          d=\"M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z\"\r\n        />\r\n      </svg>\r\n    </button>\r\n    <button\r\n      id=\"viewLayers\"\r\n      class=\"toolbarButton\"\r\n      type=\"button\"\r\n      title=\"Show Layers (double-click to reset all layers to the default state)\"\r\n      data-l10n-id=\"layers\"\r\n      hidden=\"true\"\r\n      [style.zoom]=\"mobileFriendlyZoomScale\"\r\n      aria-label=\"Show Layers (double-click to reset all layers to the default state)\"\r\n    >\r\n      <span data-l10n-id=\"layers_label\">Layers</span>\r\n      <svg\r\n        role=\"img\"\r\n        aria-label=\"Show Layers (double-click to reset all layers to the default state)\"\r\n        style=\"width: 20px; height: 20px; margin-left: 1px\"\r\n        xmlns=\"http://www.w3.org/2000/svg\"\r\n        fill=\"currentColor\"\r\n        viewBox=\"0 0 4.233 4.233\"\r\n      >\r\n        <path\r\n          d=\"M.15 2.992c-.198.1-.2.266-.002.365l1.604.802a.93.93 0 00.729-.001l1.602-.801c.198-.1.197-.264 0-.364l-.695-.348c-1.306.595-2.542 0-2.542 0m-.264.53l.658-.329c.6.252 1.238.244 1.754 0l.659.329-1.536.768zM.15 1.935c-.198.1-.198.265 0 .364l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363l-.694-.35c-1.14.56-2.546.001-2.546.001m-.264.53l.664-.332c.52.266 1.261.235 1.75.002l.659.33-1.537.768zM.15.877c-.198.099-.198.264 0 .363l1.604.802a.926.926 0 00.727 0l1.603-.802c.198-.099.198-.264 0-.363L2.481.075a.926.926 0 00-.727 0zm.43.182L2.117.29l1.538.769-1.538.768z\"\r\n        />\r\n      </svg>\r\n    </button>\r\n  </div>\r\n\r\n  <div id=\"toolbarSidebarRight\">\r\n    <div id=\"outlineOptionsContainer\" class=\"hidden\">\r\n      <div class=\"verticalToolbarSeparator\"></div>\r\n\r\n      <button\r\n        type=\"button\"\r\n        id=\"currentOutlineItem\"\r\n        class=\"toolbarButton\"\r\n        disabled=\"disabled\"\r\n        title=\"Find Current Outline Item\"\r\n        tabindex=\"6\"\r\n        data-l10n-id=\"current_outline_item\"\r\n        [style.zoom]=\"mobileFriendlyZoomScale\"\r\n        aria-label=\"Find Current Outline Item\"\r\n      >\r\n        <span data-l10n-id=\"current_outline_item_label\">Current Outline Item</span>\r\n        <svg role=\"img\" aria-label=\"Find Current Outline Item\" style=\"width: 20px; height: 20px\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\">\r\n          <path\r\n            d=\"m14 9h-6c-1.3 0-1.3 2 0 2h6c1.3 0 1.3-2 0-2zm-5.2-8h-3.8c-1.3 0-1.3 2 0 2h1.7zm-6.8 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.3 1.7-0.7 0-0.5-0.4-1-1-1zm3 8c-1 0-1.3 1-0.7 1.7 0.6 0.6 1.7 0.2 1.7-0.7 0-0.5-0.4-1-1-1zm0.3-4h-0.3c-1.4 0-1.4 2 0 2h2.3zm-3.3 0c-0.9 0-1.4 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.7 0-0.6-0.5-1-1-1zm12 8h-9c-1.3 0-1.3 2 0 2h9c1.3 0 1.3-2 0-2zm-12 0c-1 0-1.3 1-0.7 1.7 0.7 0.6 1.7 0.2 1.7-0.712 0-0.5-0.4-1-1-1z\"\r\n          />\r\n          <path d=\"m7.37 4.838 3.93-3.911v2.138h3.629v3.546h-3.629v2.138l-3.93-3.911\" />\r\n        </svg>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: ["button.toolbarButton{margin-right:4px!important;width:22px;height:22px}div#toolbarSidebar>button:first-child{margin-left:4px!important}\n"] }]
        }], propDecorators: { mobileFriendlyZoomScale: [{
                type: Input
            }] } });

const THUMBNAIL_CANVAS_BORDER_WIDTH = 1; // one pixel
class PdfSidebarContentComponent {
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
PdfSidebarContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSidebarContentComponent, selector: "pdf-sidebar-content", inputs: { customThumbnail: "customThumbnail", hideSidebarToolbar: "hideSidebarToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, viewQueries: [{ propertyName: "thumbnailViewTemplate", first: true, predicate: ["thumbnailViewTemplate"], descendants: true }], ngImport: i0, template: "<div id=\"sidebarContent\" [style.top]=\"top\">\r\n  <div #thumbnailViewTemplate>\r\n    <ng-content *ngTemplateOutlet=\"customThumbnail ? customThumbnail : defaultThumbnail\"></ng-content>\r\n  </div>\r\n\r\n  <div id=\"thumbnailView\" (keydown)=\"onKeyDown($event)\"></div>\r\n  <div id=\"outlineView\" class=\"hidden\"></div>\r\n  <div id=\"attachmentsView\" class=\"hidden\"></div>\r\n  <div id=\"layersView\" class=\"hidden\"></div>\r\n</div>\r\n\r\n<ng-template #defaultThumbnail>\r\n  <a class=\"pdf-viewer-template\">\r\n    <div class=\"thumbnail\" data-page-number=\"PAGE_NUMBER\">\r\n      <img class=\"thumbnailImage\" alt=\"miniature of the page\" />\r\n    </div>\r\n  </a>\r\n</ng-template>\r\n", styles: [""], directives: [{ type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
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

class PdfSidebarComponent {
    constructor(elementRef, ref) {
        this.elementRef = elementRef;
        this.ref = ref;
        this.sidebarVisible = true;
        this.mobileFriendlyZoomScale = 1;
        this.showSidebarButton = true;
        this.thumbnailDrawn = new EventEmitter();
        this.hideSidebarToolbar = true;
    }
    showToolbarWhenNecessary() {
        const element = this.elementRef.nativeElement;
        const buttons = element.querySelectorAll('button');
        let visible = 0;
        for (let index = 0; index < buttons.length; index++) {
            const b = buttons.item(index);
            if (!b.hidden) {
                visible++;
            }
        }
        this.hideSidebarToolbar = visible <= 1;
        this.ref.markForCheck();
    }
}
PdfSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSidebarComponent, selector: "pdf-sidebar", inputs: { sidebarPositionTop: "sidebarPositionTop", sidebarVisible: "sidebarVisible", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", showSidebarButton: "showSidebarButton", customSidebar: "customSidebar", customThumbnail: "customThumbnail" }, outputs: { thumbnailDrawn: "thumbnailDrawn" }, ngImport: i0, template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""], components: [{ type: PdfSidebarToolbarComponent, selector: "pdf-sidebar-toolbar", inputs: ["mobileFriendlyZoomScale"] }, { type: PdfSidebarContentComponent, selector: "pdf-sidebar-content", inputs: ["customThumbnail", "hideSidebarToolbar", "mobileFriendlyZoomScale"], outputs: ["thumbnailDrawn"] }], directives: [{ type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-sidebar', template: "<div>\r\n  <ng-content *ngTemplateOutlet=\"customSidebar ? customSidebar : defaultSidebar\"></ng-content>\r\n</div>\r\n\r\n<ng-template #defaultSidebar>\r\n  <div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\r\n    <div id=\"additionalSidebarContainer\" [style.display]=\"hideSidebarToolbar ? 'none' : ''\">\r\n      <pdf-sidebar-toolbar [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"></pdf-sidebar-toolbar>\r\n    </div>\r\n    <pdf-sidebar-content\r\n      [customThumbnail]=\"customThumbnail\"\r\n      (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n      [hideSidebarToolbar]=\"hideSidebarToolbar\"\r\n      [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n    ></pdf-sidebar-content>\r\n    <div id=\"sidebarResizer\" class=\"hidden\"></div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { sidebarPositionTop: [{
                type: Input
            }], sidebarVisible: [{
                type: Input
            }], mobileFriendlyZoomScale: [{
                type: Input
            }], showSidebarButton: [{
                type: Input
            }], customSidebar: [{
                type: Input
            }], customThumbnail: [{
                type: Input
            }], thumbnailDrawn: [{
                type: Output
            }] } });

class PdfShyButtonService {
    constructor() {
        this.buttons = [];
    }
    add(button) {
        var _a, _b;
        const id = (_a = button.secondaryMenuId) !== null && _a !== void 0 ? _a : this.addDefaultPrefix(button);
        const previousDefinition = this.buttons.findIndex((b) => b.id === id);
        const description = {
            id,
            cssClass: button.cssClass,
            l10nId: button.l10nId,
            l10nLabel: button.l10nLabel,
            title: button.title,
            toggled: button.toggled,
            disabled: button.disabled,
            order: (_b = button.order) !== null && _b !== void 0 ? _b : 99999,
            image: button.imageHtml,
            action: button.action,
            eventBusName: button.eventBusName,
            closeOnClick: button.closeOnClick,
        };
        if (previousDefinition >= 0) {
            this.buttons[previousDefinition] = description;
            setTimeout(() => {
                const PDFViewerApplication = window.PDFViewerApplication;
                if (PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.l10n) {
                    const element = document.getElementById(id);
                    PDFViewerApplication.l10n.translate(element).then(() => {
                        // Dispatch the 'localized' event on the `eventBus` once the viewer
                        // has been fully initialized and translated.
                    });
                }
            }, 0);
        }
        else {
            this.buttons.push(description);
        }
        this.buttons.sort((a, b) => a.order - b.order);
    }
    addDefaultPrefix(button) {
        if (button.primaryToolbarId.startsWith('primary')) {
            return button.primaryToolbarId.replace('primary', 'secondary');
        }
        return 'secondary' + button.primaryToolbarId.substring(0, 1).toUpperCase() + button.primaryToolbarId.substring(1);
    }
    update(button) {
        var _a;
        const id = (_a = button.secondaryMenuId) !== null && _a !== void 0 ? _a : this.addDefaultPrefix(button);
        if (this.buttons.some((b) => b.id === id)) {
            this.add(button);
        }
    }
}
PdfShyButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PdfShyButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });

class PdfShyButtonComponent {
    constructor(pdfShyButtonServiceService, sanitizer) {
        this.pdfShyButtonServiceService = pdfShyButtonServiceService;
        this.sanitizer = sanitizer;
        this.eventBusName = undefined;
        this.action = undefined;
        this.closeOnClick = true;
        this.onlySecondaryMenu = false;
    }
    get imageHtml() {
        return this._imageHtml;
    }
    set image(value) {
        const svgTags = [
            // 'a' is not allowed!
            'animate',
            'animateMotion',
            'animateTransform',
            'audio',
            'canvas',
            'circle',
            'clipPath',
            'defs',
            'desc',
            'discard',
            'ellipse',
            'feBlend',
            'feColorMatrix',
            'feComponentTransfer',
            'feComposite',
            'feConvolveMatrix',
            'feDiffuseLighting',
            'feDisplacementMap',
            'feDistantLight',
            'feDropShadow',
            'feFlood',
            'feFuncA',
            'feFuncB',
            'feFuncG',
            'feFuncR',
            'feGaussianBlur',
            'feImage',
            'feMerge',
            'feMergeNode',
            'feMorphology',
            'feOffset',
            'fePointLight',
            'feSpecularLighting',
            'feSpotLight',
            'feTile',
            'feTurbulence',
            'filter',
            'foreignObject',
            'g',
            'iframe',
            'image',
            'line',
            'linearGradient',
            'marker',
            'mask',
            'metadata',
            'mpath',
            'path',
            'pattern',
            'polygon',
            'polyline',
            'radialGradient',
            'rect',
            'script',
            'set',
            'stop',
            'style',
            'svg',
            'switch',
            'symbol',
            'text',
            'textPath',
            'title',
            'tspan',
            'unknown',
            'use',
            'video',
            'view',
        ];
        // only <svg> and SVG tags are allowed
        const tags = value.split('<').filter((tag) => tag.length > 0);
        const legal = tags.every((tag) => tag.startsWith('svg') || tag.startsWith('/') || svgTags.includes(tag.split(/\s|>/)[0]));
        if (!legal) {
            throw new Error('Illegal image for PDFShyButton. Only SVG images are allowed. Please use only the tags <svg> and <path>. ' + value);
        }
        this._imageHtml = this.sanitizeHtml(value);
    }
    ngOnInit() {
        this.pdfShyButtonServiceService.add(this);
    }
    ngOnChanges(changes) {
        this.pdfShyButtonServiceService.update(this);
    }
    sanitizeHtml(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html); // NOSONAR
    }
    onClick(event) {
        if (this.action) {
            this.action();
            event.preventDefault();
        }
        else if (this.eventBusName) {
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.eventBus.dispatch(this.eventBusName);
            event.preventDefault();
        }
    }
}
PdfShyButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonComponent, deps: [{ token: PdfShyButtonService }, { token: i2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Component });
PdfShyButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: { primaryToolbarId: "primaryToolbarId", secondaryMenuId: "secondaryMenuId", cssClass: "cssClass", eventBusName: "eventBusName", l10nId: "l10nId", l10nLabel: "l10nLabel", title: "title", toggled: "toggled", disabled: "disabled", order: "order", action: "action", closeOnClick: "closeOnClick", onlySecondaryMenu: "onlySecondaryMenu", image: "image" }, usesOnChanges: true, ngImport: i0, template: "<button\r\n  *ngIf=\"!onlySecondaryMenu\"\r\n  type=\"button\"\r\n  [id]=\"primaryToolbarId\"\r\n  class=\"toolbarButton\"\r\n  [class]=\"cssClass\"\r\n  [title]=\"title\"\r\n  [attr.data-l10n-id]=\"l10nId\"\r\n  [class.toggled]=\"toggled\"\r\n  [disabled]=\"disabled\"\r\n  [innerHTML]=\"imageHtml\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.aria-label]=\"title\"\r\n  role=\"button\"\r\n>\r\n  <ng-content *ngIf=\"!image\" role=\"img\" aria-hidden=\"true\"></ng-content>\r\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\r\n</button>\r\n", directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-shy-button', template: "<button\r\n  *ngIf=\"!onlySecondaryMenu\"\r\n  type=\"button\"\r\n  [id]=\"primaryToolbarId\"\r\n  class=\"toolbarButton\"\r\n  [class]=\"cssClass\"\r\n  [title]=\"title\"\r\n  [attr.data-l10n-id]=\"l10nId\"\r\n  [class.toggled]=\"toggled\"\r\n  [disabled]=\"disabled\"\r\n  [innerHTML]=\"imageHtml\"\r\n  (click)=\"onClick($event)\"\r\n  [attr.aria-label]=\"title\"\r\n  role=\"button\"\r\n>\r\n  <ng-content *ngIf=\"!image\" role=\"img\" aria-hidden=\"true\"></ng-content>\r\n  <span [attr.data-l10n-id]=\"l10nLabel\">{{ title }}</span>\r\n</button>\r\n" }]
        }], ctorParameters: function () { return [{ type: PdfShyButtonService }, { type: i2.DomSanitizer }]; }, propDecorators: { primaryToolbarId: [{
                type: Input
            }], secondaryMenuId: [{
                type: Input
            }], cssClass: [{
                type: Input
            }], eventBusName: [{
                type: Input
            }], l10nId: [{
                type: Input
            }], l10nLabel: [{
                type: Input
            }], title: [{
                type: Input
            }], toggled: [{
                type: Input
            }], disabled: [{
                type: Input
            }], order: [{
                type: Input
            }], action: [{
                type: Input
            }], closeOnClick: [{
                type: Input
            }], onlySecondaryMenu: [{
                type: Input
            }], image: [{
                type: Input
            }] } });

class PdfToggleSidebarComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.show = true;
        this.sidebarVisible = false;
        this.showChange = new EventEmitter();
        const emitter = this.showChange;
        this.onClick = () => {
            const PDFViewerApplication = window.PDFViewerApplication;
            const newVisibility = !PDFViewerApplication.pdfSidebar.isOpen;
            emitter.emit(newVisibility);
            PDFViewerApplication.eventBus.dispatch('toggleSidebar', { visible: newVisibility });
        };
    }
}
PdfToggleSidebarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfToggleSidebarComponent, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfToggleSidebarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfToggleSidebarComponent, selector: "pdf-toggle-sidebar", inputs: { show: "show", sidebarVisible: "sidebarVisible" }, outputs: { showChange: "showChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Toggle Sidebar\"\r\n  primaryToolbarId=\"primarySidebarToggle\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-visible'\"\r\n  [toggled]=\"sidebarVisible === true\"\r\n  l10nId=\"toggle_sidebar\"\r\n  l10nLabel=\"toggle_sidebar_label\"\r\n  [order]=\"4500\"\r\n  [closeOnClick]=\"true\"\r\n  [action]=\"onClick\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button#sidebarToggle{height:24px;width:24px;margin-right:5px!important}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfToggleSidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-toggle-sidebar', template: "<pdf-shy-button\r\n  title=\"Toggle Sidebar\"\r\n  primaryToolbarId=\"primarySidebarToggle\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-visible'\"\r\n  [toggled]=\"sidebarVisible === true\"\r\n  l10nId=\"toggle_sidebar\"\r\n  l10nLabel=\"toggle_sidebar_label\"\r\n  [order]=\"4500\"\r\n  [closeOnClick]=\"true\"\r\n  [action]=\"onClick\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button#sidebarToggle{height:24px;width:24px;margin-right:5px!important}button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], sidebarVisible: [{
                type: Input
            }], showChange: [{
                type: Output
            }] } });

class PdfFindButtonComponent {
    constructor() {
        this.showFindButton = undefined;
        this.textLayer = undefined;
        this.findbarVisible = false;
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        if (PDFViewerApplication.findBar.opened) {
            PDFViewerApplication.findBar.close();
        }
        else {
            PDFViewerApplication.findBar.open();
        }
    }
}
PdfFindButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindButtonComponent, selector: "pdf-find-button", inputs: { showFindButton: "showFindButton", textLayer: "textLayer", findbarVisible: "findbarVisible" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"showFindButton | responsiveCSSClass : (textLayer ? 'always-visible' : 'invisible')\"\r\n  primaryToolbarId=\"primaryViewFind\"\r\n  title=\"Find in Document\"\r\n  l10nId=\"findbar\"\r\n  l10nLabel=\"findbar_label\"\r\n  [order]=\"1400\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"findbarVisible\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-button', template: "<pdf-shy-button\r\n  [cssClass]=\"showFindButton | responsiveCSSClass : (textLayer ? 'always-visible' : 'invisible')\"\r\n  primaryToolbarId=\"primaryViewFind\"\r\n  title=\"Find in Document\"\r\n  l10nId=\"findbar\"\r\n  l10nLabel=\"findbar_label\"\r\n  [order]=\"1400\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"findbarVisible\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'> <path fill='currentColor' d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], propDecorators: { showFindButton: [{
                type: Input
            }], textLayer: [{
                type: Input
            }], findbarVisible: [{
                type: Input
            }] } });

class PdfFirstPageComponent {
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        this.show = true;
        this.disableFirstPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    firstPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableFirstPage = event.pageNumber <= 1;
        this.changeDetectorRef.markForCheck();
    }
}
PdfFirstPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFirstPageComponent, deps: [{ token: PDFNotificationService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfFirstPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFirstPageComponent, selector: "pdf-first-page", inputs: { show: "show" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenLargeView'\"\r\n  title=\"First page\"\r\n  primaryToolbarId=\"primaryFirstPage\"\r\n  l10nId=\"first_page\"\r\n  (click)=\"firstPage()\"\r\n  [disabled]=\"disableFirstPage\"\r\n  l10nLabel=\"first_page_label\"\r\n  [order]=\"500\"\r\n  eventBusName=\"firstpage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFirstPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-first-page', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenLargeView'\"\r\n  title=\"First page\"\r\n  primaryToolbarId=\"primaryFirstPage\"\r\n  l10nId=\"first_page\"\r\n  (click)=\"firstPage()\"\r\n  [disabled]=\"disableFirstPage\"\r\n  l10nLabel=\"first_page_label\"\r\n  [order]=\"500\"\r\n  eventBusName=\"firstpage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { show: [{
                type: Input
            }] } });

class PdfPreviousPageComponent {
    constructor(notificationService, ngZone, changeDetectorRef) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.disablePreviousPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disablePreviousPage = event.pageNumber <= 1;
        this.changeDetectorRef.markForCheck();
    }
}
PdfPreviousPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPreviousPageComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfPreviousPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPreviousPageComponent, selector: "pdf-previous-page", ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  title=\"Previous Page\"\r\n  primaryToolbarId=\"primaryPrevious\"\r\n  secondaryMenuId=\"secondaryPreviousPage\"\r\n  l10nId=\"previous\"\r\n  l10nLabel=\"previous_label\"\r\n  [disabled]=\"disablePreviousPage\"\r\n  [order]=\"600\"\r\n  eventBusName=\"previouspage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPreviousPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-previous-page', template: "<pdf-shy-button\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  title=\"Previous Page\"\r\n  primaryToolbarId=\"primaryPrevious\"\r\n  secondaryMenuId=\"secondaryPreviousPage\"\r\n  l10nId=\"previous\"\r\n  l10nLabel=\"previous_label\"\r\n  [disabled]=\"disablePreviousPage\"\r\n  [order]=\"600\"\r\n  eventBusName=\"previouspage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }]; } });

class PdfPageNumberComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
PdfPageNumberComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPageNumberComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPageNumberComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPageNumberComponent, selector: "pdf-page-number", inputs: { showPagingButtons: "showPagingButtons" }, ngImport: i0, template: "<input type=\"number\" id=\"pageNumber\" class=\"toolbarField pageNumber\" title=\"Page\" value=\"1\" size=\"4\" min=\"1\" data-l10n-id=\"page\" autocomplete=\"off\" />\r\n<span [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXLView'\" id=\"numPages\" class=\"toolbarLabel\"></span>\r\n", styles: ["button{padding:0}\n"], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPageNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-page-number', template: "<input type=\"number\" id=\"pageNumber\" class=\"toolbarField pageNumber\" title=\"Page\" value=\"1\" size=\"4\" min=\"1\" data-l10n-id=\"page\" autocomplete=\"off\" />\r\n<span [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXLView'\" id=\"numPages\" class=\"toolbarLabel\"></span>\r\n", styles: ["button{padding:0}\n"] }]
        }], propDecorators: { showPagingButtons: [{
                type: Input
            }] } });

class PdfNextPageComponent {
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        this.disableNextPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableNextPage = event.pageNumber === event.pagesCount;
        this.changeDetectorRef.markForCheck();
    }
}
PdfNextPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfNextPageComponent, deps: [{ token: PDFNotificationService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfNextPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfNextPageComponent, selector: "pdf-next-page", ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Next Page\"\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  primaryToolbarId=\"primaryNext\"\r\n  secondaryMenuId=\"primaryNextPage\"\r\n  l10nId=\"next\"\r\n  l10nLabel=\"next_label\"\r\n  [disabled]=\"disableNextPage\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>\"\r\n  [order]=\"700\"\r\n  [closeOnClick]=\"false\"\r\n  eventBusName=\"nextpage\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfNextPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-next-page', template: "<pdf-shy-button\r\n  title=\"Next Page\"\r\n  [cssClass]=\"'xs' | responsiveCSSClass\"\r\n  primaryToolbarId=\"primaryNext\"\r\n  secondaryMenuId=\"primaryNextPage\"\r\n  l10nId=\"next\"\r\n  l10nLabel=\"next_label\"\r\n  [disabled]=\"disableNextPage\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' /></svg>\"\r\n  [order]=\"700\"\r\n  [closeOnClick]=\"false\"\r\n  eventBusName=\"nextpage\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.ChangeDetectorRef }]; } });

class PdfLastPageComponent {
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        this.disableLastPage = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    firstPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableLastPage = event.pageNumber === event.pagesCount;
        this.changeDetectorRef.markForCheck();
    }
    lastPage() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('lastpage');
    }
}
PdfLastPageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfLastPageComponent, deps: [{ token: PDFNotificationService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfLastPageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfLastPageComponent, selector: "pdf-last-page", ngImport: i0, template: "<pdf-shy-button\r\n  cssClass=\"hiddenLargeView\"\r\n  title=\"Last page\"\r\n  primaryToolbarId=\"primaryLastPage\"\r\n  l10nId=\"last_page\"\r\n  l10nLabel=\"last_page_label\"\r\n  (click)=\"lastPage()\"\r\n  [disabled]=\"disableLastPage\"\r\n  [order]=\"800\"\r\n  eventBusName=\"lastpage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfLastPageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-last-page', template: "<pdf-shy-button\r\n  cssClass=\"hiddenLargeView\"\r\n  title=\"Last page\"\r\n  primaryToolbarId=\"primaryLastPage\"\r\n  l10nId=\"last_page\"\r\n  l10nLabel=\"last_page_label\"\r\n  (click)=\"lastPage()\"\r\n  [disabled]=\"disableLastPage\"\r\n  [order]=\"800\"\r\n  eventBusName=\"lastpage\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.ChangeDetectorRef }]; } });

class PdfPagingAreaComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
PdfPagingAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPagingAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPagingAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPagingAreaComponent, selector: "pdf-paging-area", inputs: { showPagingButtons: "showPagingButtons" }, ngImport: i0, template: "<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-left\">\r\n  <pdf-first-page style=\"margin-right: -3px\"></pdf-first-page>\r\n  <pdf-previous-page style=\"margin-left: -3px\"></pdf-previous-page>\r\n</div>\r\n<pdf-page-number [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXXSView'\"></pdf-page-number>\r\n<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-right\">\r\n  <pdf-next-page style=\"margin-right: -3px; margin-left: -3px\"></pdf-next-page>\r\n  <pdf-last-page style=\"margin-left: -3px\"></pdf-last-page>\r\n</div>\r\n", styles: [".paging-right{float:right;display:block}.paging-left{float:left;display:block}\n"], components: [{ type: PdfFirstPageComponent, selector: "pdf-first-page", inputs: ["show"] }, { type: PdfPreviousPageComponent, selector: "pdf-previous-page" }, { type: PdfPageNumberComponent, selector: "pdf-page-number", inputs: ["showPagingButtons"] }, { type: PdfNextPageComponent, selector: "pdf-next-page" }, { type: PdfLastPageComponent, selector: "pdf-last-page" }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPagingAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-paging-area', template: "<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-left\">\r\n  <pdf-first-page style=\"margin-right: -3px\"></pdf-first-page>\r\n  <pdf-previous-page style=\"margin-left: -3px\"></pdf-previous-page>\r\n</div>\r\n<pdf-page-number [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenXXSView'\"></pdf-page-number>\r\n<div [class]=\"showPagingButtons | responsiveCSSClass : 'hiddenTinyView'\" class=\"paging-right\">\r\n  <pdf-next-page style=\"margin-right: -3px; margin-left: -3px\"></pdf-next-page>\r\n  <pdf-last-page style=\"margin-left: -3px\"></pdf-last-page>\r\n</div>\r\n", styles: [".paging-right{float:right;display:block}.paging-left{float:left;display:block}\n"] }]
        }], propDecorators: { showPagingButtons: [{
                type: Input
            }] } });

class PdfZoomOutComponent {
    constructor() {
        this.showZoomButtons = true;
    }
}
PdfZoomOutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomOutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfZoomOutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfZoomOutComponent, selector: "pdf-zoom-out", inputs: { showZoomButtons: "showZoomButtons" }, ngImport: i0, template: "<pdf-shy-button\r\n  primaryToolbarId=\"zoomOut\"\r\n  class=\"zoomOut\"\r\n  title=\"Zoom Out\"\r\n  l10nId=\"zoom_out\"\r\n  l10nLabel=\"zoom_out_label\"\r\n  eventBusName=\"zoomout\"\r\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\r\n  [order]=\"1500\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H5V11H19V13Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomOutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-zoom-out', template: "<pdf-shy-button\r\n  primaryToolbarId=\"zoomOut\"\r\n  class=\"zoomOut\"\r\n  title=\"Zoom Out\"\r\n  l10nId=\"zoom_out\"\r\n  l10nLabel=\"zoom_out_label\"\r\n  eventBusName=\"zoomout\"\r\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\r\n  [order]=\"1500\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H5V11H19V13Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"] }]
        }], propDecorators: { showZoomButtons: [{
                type: Input
            }] } });

class PdfZoomInComponent {
    constructor() {
        this.showZoomButtons = true;
    }
}
PdfZoomInComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomInComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfZoomInComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfZoomInComponent, selector: "pdf-zoom-in", inputs: { showZoomButtons: "showZoomButtons" }, ngImport: i0, template: "<pdf-shy-button\r\n  primaryToolbarId=\"zoomIn\"\r\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\r\n  class=\"zoomIn\"\r\n  title=\"Zoom In\"\r\n  l10nId=\"zoom_in\"\r\n  l10nLabel=\"zoom_in_label\"\r\n  eventBusName=\"zoomin\"\r\n  [order]=\"1600\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomInComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-zoom-in', template: "<pdf-shy-button\r\n  primaryToolbarId=\"zoomIn\"\r\n  [cssClass]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\"\r\n  class=\"zoomIn\"\r\n  title=\"Zoom In\"\r\n  l10nId=\"zoom_in\"\r\n  l10nLabel=\"zoom_in_label\"\r\n  eventBusName=\"zoomin\"\r\n  [order]=\"1600\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{margin-left:-2px!important;margin-right:-2px!important;padding:0}\n"] }]
        }], propDecorators: { showZoomButtons: [{
                type: Input
            }] } });

class PdfZoomDropdownComponent {
    constructor(element) {
        this.element = element;
        this._zoomLevels = [];
    }
    set zoomLevels(levels) {
        this._zoomLevels = levels.map((l) => this.valueToZoomLevel(l));
    }
    valueToZoomLevel(value) {
        if (value.toString().endsWith('%')) {
            value = value.toString().replace('%', '');
            value = Number(value) / 100;
        }
        const numericalValue = Number(value);
        if (!numericalValue) {
            const v = String(value);
            return {
                id: this.snakeToCamel(value + 'Option'),
                value: v,
                dataL10nId: 'page_scale_' + v.replace('page-', ''),
                dataL10nArgs: undefined,
                displayValue: v,
            };
        }
        const percentage = Math.round(numericalValue * 100);
        return {
            id: `scale_${percentage}`,
            value: String(numericalValue),
            dataL10nId: 'page_scale_percent',
            dataL10nArgs: `{ "scale": ${percentage} }`,
            displayValue: isNaN(percentage) ? '' : String(percentage) + '%',
        };
    }
    snakeToCamel(str) {
        // idea found here: https://hisk.io/javascript-snake-to-camel/
        return str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
    }
}
PdfZoomDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomDropdownComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PdfZoomDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfZoomDropdownComponent, selector: "pdf-zoom-dropdown", inputs: { zoomLevels: "zoomLevels" }, viewQueries: [{ propertyName: "sizeSelector", first: true, predicate: ["sizeSelector"], descendants: true }], ngImport: i0, template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-zoom-dropdown', template: "<span id=\"scaleSelectContainer\">\r\n  <select\r\n    id=\"scaleSelect\"\r\n    title=\"Zoom\"\r\n    data-l10n-id=\"zoom\"\r\n    #sizeSelector\r\n  >\r\n    <option *ngFor=\"let level of _zoomLevels\"\r\n      [id]=\"level.id\"\r\n      [attr.value]=\"level.value\"\r\n      [attr.data-l10n-id]=\"level.dataL10nId\"\r\n      [attr.data-l10n-args]=\"level.dataL10nArgs\">\r\n      {{level.displayValue}}\r\n    </option>\r\n    <option\r\n    id=\"customScaleOption\"\r\n    title=\"\"\r\n    value=\"custom\"\r\n    disabled=\"disabled\"\r\n    hidden=\"true\"\r\n  ></option>\r\n\r\n  </select>\r\n</span>\r\n", styles: ["select{font-size:12px;height:26px;cursor:pointer;border-radius:2px;border-width:1px;border-style:solid;padding-top:0;padding-bottom:0}#customScaleOption{display:none}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { zoomLevels: [{
                type: Input
            }], sizeSelector: [{
                type: ViewChild,
                args: ['sizeSelector']
            }] } });

class PdfZoomToolbarComponent {
    constructor() {
        this.showZoomButtons = true;
        this.zoomLevels = ['auto', 'page-actual', 'page-fit', 'page-width', 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
    }
}
PdfZoomToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomToolbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfZoomToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfZoomToolbarComponent, selector: "pdf-zoom-toolbar", inputs: { showZoomButtons: "showZoomButtons", zoomLevels: "zoomLevels" }, ngImport: i0, template: "<div id=\"toolbarViewerMiddle\" [class]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\">\r\n  <pdf-zoom-out [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-out>\r\n  <pdf-zoom-in [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-in>\r\n  <pdf-zoom-dropdown style=\"width: unset; max-width: unset; padding-top: 3px\" [zoomLevels]=\"zoomLevels\"> </pdf-zoom-dropdown>\r\n</div>\r\n", styles: [""], components: [{ type: PdfZoomOutComponent, selector: "pdf-zoom-out", inputs: ["showZoomButtons"] }, { type: PdfZoomInComponent, selector: "pdf-zoom-in", inputs: ["showZoomButtons"] }, { type: PdfZoomDropdownComponent, selector: "pdf-zoom-dropdown", inputs: ["zoomLevels"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfZoomToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-zoom-toolbar', template: "<div id=\"toolbarViewerMiddle\" [class]=\"showZoomButtons | responsiveCSSClass : 'always-visible'\">\r\n  <pdf-zoom-out [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-out>\r\n  <pdf-zoom-in [showZoomButtons]=\"showZoomButtons\"></pdf-zoom-in>\r\n  <pdf-zoom-dropdown style=\"width: unset; max-width: unset; padding-top: 3px\" [zoomLevels]=\"zoomLevels\"> </pdf-zoom-dropdown>\r\n</div>\r\n", styles: [""] }]
        }], propDecorators: { showZoomButtons: [{
                type: Input
            }], zoomLevels: [{
                type: Input
            }] } });

class PdfDocumentPropertiesComponent {
    constructor() {
        this.show = true;
    }
}
PdfDocumentPropertiesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDocumentPropertiesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDocumentPropertiesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDocumentPropertiesComponent, selector: "pdf-document-properties", inputs: { show: "show" }, ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Document Properties\u2026\"\r\n  primaryToolbarId=\"documentProperties\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  l10nId=\"document_properties\"\r\n  l10nLabel=\"document_properties_label\"\r\n  [order]=\"5000\"\r\n  eventBusName=\"documentproperties\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 16px; height: 16px; margin-top: 3px' viewBox='0 0 16 16'><path fill='currentColor' d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z' /><path fill='currentColor' d='M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' /><circle fill='currentColor' cx='8' cy='5' r='1.188' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDocumentPropertiesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-document-properties', template: "<pdf-shy-button\r\n  title=\"Document Properties\u2026\"\r\n  primaryToolbarId=\"documentProperties\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  l10nId=\"document_properties\"\r\n  l10nLabel=\"document_properties_label\"\r\n  [order]=\"5000\"\r\n  eventBusName=\"documentproperties\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 16px; height: 16px; margin-top: 3px' viewBox='0 0 16 16'><path fill='currentColor' d='M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zM8 2a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6z' /><path fill='currentColor' d='M8 7a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z' /><circle fill='currentColor' cx='8' cy='5' r='1.188' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], propDecorators: { show: [{
                type: Input
            }] } });

class PdfNoSpreadComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.spread = 'off';
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('spreadmodechanged', (event) => {
            this.ngZone.run(() => {
                const modes = ['off', 'odd', 'even'];
                this.spread = modes[event.mode];
            });
        });
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.spreadMode = 0;
    }
}
PdfNoSpreadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfNoSpreadComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfNoSpreadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfNoSpreadComponent, selector: "pdf-no-spread", inputs: { show: "show", scrollMode: "scrollMode" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Do not join page spreads\"\r\n  primaryToolbarId=\"spreadNone\"\r\n  l10nId=\"spread_none\"\r\n  [toggled]=\"spread === 'off'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"spread_none_label\"\r\n  [order]=\"2000\"\r\n  [closeOnClick]=\"false\"\r\n  [disabled]=\"scrollMode === 1\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfNoSpreadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-no-spread', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Do not join page spreads\"\r\n  primaryToolbarId=\"spreadNone\"\r\n  l10nId=\"spread_none\"\r\n  [toggled]=\"spread === 'off'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"spread_none_label\"\r\n  [order]=\"2000\"\r\n  [closeOnClick]=\"false\"\r\n  [disabled]=\"scrollMode === 1\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M6 3c-1 0-1.5.5-1.5 1.5v7c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5v-7c0-1-.5-1.5-1.5-1.5z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }] } });

class PdfOddSpreadComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.spread = 'off';
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('spreadmodechanged', (event) => {
            this.ngZone.run(() => {
                const modes = ['off', 'odd', 'even'];
                this.spread = modes[event.mode];
            });
        });
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.spreadMode = 1;
    }
}
PdfOddSpreadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfOddSpreadComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfOddSpreadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfOddSpreadComponent, selector: "pdf-odd-spread", inputs: { show: "show", scrollMode: "scrollMode" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Join page spreads starting with odd-numbered pages\"\r\n  primaryToolbarId=\"spreadOdd\"\r\n  [toggled]=\"spread === 'odd'\"\r\n  l10nId=\"spread_odd\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"spread_odd_label\"\r\n  [order]=\"2100\"\r\n  [closeOnClick]=\"false\"\r\n  [disabled]=\"scrollMode === 1\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfOddSpreadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-odd-spread', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Join page spreads starting with odd-numbered pages\"\r\n  primaryToolbarId=\"spreadOdd\"\r\n  [toggled]=\"spread === 'odd'\"\r\n  l10nId=\"spread_odd\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"spread_odd_label\"\r\n  [order]=\"2100\"\r\n  [closeOnClick]=\"false\"\r\n  [disabled]=\"scrollMode === 1\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M10.56 3.5C9.56 3.5 9 4 9 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.93 1.2c.8 0 1.4.2 1.8.64.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.44-.2.3-.6.6-1 .93l-.6.4c-.4.3-.6.4-.7.55-.1.1-.2.2-.3.4h3.2v1.27h-5c0-.5.1-1 .3-1.43.2-.49.7-1 1.5-1.54.7-.5 1.1-.8 1.3-1.02.3-.3.4-.7.4-1.05 0-.3-.1-.6-.3-.77-.2-.2-.4-.3-.7-.3-.4 0-.7.2-.9.5-.1.2-.1.5-.2.9h-1.4c0-.6.2-1.1.3-1.5.4-.7 1.1-1.1 2-1.1zM1.54 3.5C.54 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.54 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm1.8 1.125H4.5V12H3V6.9H1.3v-1c.5 0 .8 0 .97-.03.33-.07.53-.17.73-.37.1-.2.2-.3.25-.5.05-.2.05-.3.05-.3z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }] } });

class PdfEvenSpreadComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.spread = 'off';
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('spreadmodechanged', (event) => {
            this.ngZone.run(() => {
                const modes = ['off', 'odd', 'even'];
                this.spread = modes[event.mode];
            });
        });
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.pdfViewer.spreadMode = 2;
    }
}
PdfEvenSpreadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfEvenSpreadComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfEvenSpreadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfEvenSpreadComponent, selector: "pdf-even-spread", inputs: { show: "show", scrollMode: "scrollMode" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  [toggled]=\"spread === 'even'\"\r\n  title=\"Join page spreads starting with even-numbered pages\"\r\n  primaryToolbarId=\"spreadEven\"\r\n  l10nId=\"spread_even\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"spread_even_label\"\r\n  [order]=\"2200\"\r\n  [closeOnClick]=\"false\"\r\n  [disabled]=\"scrollMode === 1\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px'><path fill='currentColor' d='M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfEvenSpreadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-even-spread', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  [toggled]=\"spread === 'even'\"\r\n  title=\"Join page spreads starting with even-numbered pages\"\r\n  primaryToolbarId=\"spreadEven\"\r\n  l10nId=\"spread_even\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"spread_even_label\"\r\n  [order]=\"2200\"\r\n  [closeOnClick]=\"false\"\r\n  [disabled]=\"scrollMode === 1\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px'><path fill='currentColor' d='M1.5 3.5C.5 3.5 0 4 0 5v6.5c0 1 .5 1.5 1.5 1.5h4c1 0 1.5-.5 1.5-1.5V5c0-1-.5-1.5-1.5-1.5zm2 1.2c.8 0 1.4.2 1.8.6.5.4.7 1 .7 1.7 0 .5-.2 1-.5 1.4-.2.3-.5.7-1 1l-.6.4c-.4.3-.6.4-.75.56-.15.14-.25.24-.35.44H6v1.3H1c0-.6.1-1.1.3-1.5.3-.6.7-1 1.5-1.6.7-.4 1.1-.8 1.28-1 .32-.3.42-.6.42-1 0-.3-.1-.6-.23-.8-.17-.2-.37-.3-.77-.3s-.7.1-.9.5c-.04.2-.1.5-.1.9H1.1c0-.6.1-1.1.3-1.5.4-.7 1.1-1.1 2.1-1.1zM10.54 3.54C9.5 3.54 9 4 9 5v6.5c0 1 .5 1.5 1.54 1.5h4c.96 0 1.46-.5 1.46-1.5V5c0-1-.5-1.46-1.5-1.46zm1.9.95c.7 0 1.3.2 1.7.5.4.4.6.8.6 1.4 0 .4-.1.8-.4 1.1-.2.2-.3.3-.5.4.1 0 .3.1.6.3.4.3.5.8.5 1.4 0 .6-.2 1.2-.6 1.6-.4.5-1.1.7-1.9.7-1 0-1.8-.3-2.2-1-.14-.29-.24-.69-.24-1.29h1.4c0 .3 0 .5.1.7.2.4.5.5 1 .5.3 0 .5-.1.7-.3.2-.2.3-.5.3-.8 0-.5-.2-.8-.6-.95-.2-.05-.5-.15-1-.15v-1c.5 0 .8-.1 1-.14.3-.1.5-.4.5-.9 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.7-.3-.3 0-.6.1-.75.3-.2.2-.2.5-.2.86h-1.34c0-.4.1-.7.19-1.1 0-.12.2-.32.4-.62.2-.2.4-.3.7-.4.3-.1.6-.1 1-.1z'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }] } });

var ScrollMode;
(function (ScrollMode) {
    ScrollMode[ScrollMode["UNKNOWN"] = -1] = "UNKNOWN";
    ScrollMode[ScrollMode["VERTICAL"] = 0] = "VERTICAL";
    ScrollMode[ScrollMode["HORIZONTAL"] = 1] = "HORIZONTAL";
    ScrollMode[ScrollMode["WRAPPED"] = 2] = "WRAPPED";
    ScrollMode[ScrollMode["PAGE"] = 3] = "PAGE";
    ScrollMode[ScrollMode["INFINITE"] = 4] = "INFINITE";
})(ScrollMode || (ScrollMode = {}));

class PdfSinglePageModeComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
        this.onClick = () => {
            ngZone.run(() => {
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.PAGE });
            });
        };
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('switchscrollmode', (event) => {
            this.ngZone.run(() => {
                this.scrollMode = event.mode;
            });
        });
    }
}
PdfSinglePageModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSinglePageModeComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfSinglePageModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSinglePageModeComponent, selector: "pdf-single-page-mode", inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Page Scrolling\"\r\n  primaryToolbarId=\"scrollPage\"\r\n  [toggled]=\"scrollMode == 3\"\r\n  l10nId=\"scroll_page\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_page_label\"\r\n  [order]=\"3000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSinglePageModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-single-page-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Page Scrolling\"\r\n  primaryToolbarId=\"scrollPage\"\r\n  [toggled]=\"scrollMode == 3\"\r\n  l10nId=\"scroll_page\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_page_label\"\r\n  [order]=\"3000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px' viewBox='0 0 24 24'><path fill='currentColor' d='M10,7V9H12V17H14V7H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });

class PdfVerticalScrollModeComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            this.ngZone.run(() => {
                if (this.pageViewMode !== 'multiple' && this.pageViewMode !== 'infinite-scroll') {
                    emitter.emit('multiple');
                }
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.VERTICAL });
            });
        };
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('switchscrollmode', (event) => {
            this.ngZone.run(() => {
                this.scrollMode = event.mode;
            });
        });
    }
}
PdfVerticalScrollModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfVerticalScrollModeComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfVerticalScrollModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfVerticalScrollModeComponent, selector: "pdf-vertical-scroll-mode", inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Vertical Scrolling\"\r\n  primaryToolbarId=\"scrollVertical\"\r\n  l10nId=\"scroll_vertical\"\r\n  [toggled]=\"scrollMode == 0 && pageViewMode !== 'book'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_vertical_label\"\r\n  [order]=\"3100\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfVerticalScrollModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-vertical-scroll-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Vertical Scrolling\"\r\n  primaryToolbarId=\"scrollVertical\"\r\n  l10nId=\"scroll_vertical\"\r\n  [toggled]=\"scrollMode == 0 && pageViewMode !== 'book'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_vertical_label\"\r\n  [order]=\"3100\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM11 0v.5c0 1-.5 1.5-1.5 1.5h-3C5.5 2 5 1.5 5 .5V0h6zM11 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });

class PdfHorizontalScrollComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            this.ngZone.run(() => {
                if (this.pageViewMode !== 'multiple' && this.pageViewMode !== 'infinite-scroll') {
                    emitter.emit('multiple');
                }
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.HORIZONTAL });
            });
        };
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('switchscrollmode', (event) => {
            this.ngZone.run(() => {
                this.scrollMode = event.mode;
            });
        });
    }
}
PdfHorizontalScrollComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfHorizontalScrollComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfHorizontalScrollComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfHorizontalScrollComponent, selector: "pdf-horizontal-scroll", inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Horizontal Scrolling\"\r\n  primaryToolbarId=\"scrollHorizontal\"\r\n  l10nId=\"scroll_horizontal\"\r\n  [toggled]=\"scrollMode == 1\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_horizontal_label\"\r\n  [order]=\"3200\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px'> <path fill='currentColor' d='M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfHorizontalScrollComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-horizontal-scroll', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Use Horizontal Scrolling\"\r\n  primaryToolbarId=\"scrollHorizontal\"\r\n  l10nId=\"scroll_horizontal\"\r\n  [toggled]=\"scrollMode == 1\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_horizontal_label\"\r\n  [order]=\"3200\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px'> <path fill='currentColor' d='M0 4h1.5c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5H0zM9.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C5 4.5 5.5 4 6.5 4zM16 4h-1.5c-1 0-1.5.5-1.5 1.5v5c0 1 .5 1.5 1.5 1.5H16z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });

class PdfWrappedScrollModeComponent {
    constructor(notificationService, ngZone) {
        this.notificationService = notificationService;
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            this.ngZone.run(() => {
                if (this.pageViewMode !== 'multiple' && this.pageViewMode !== 'infinite-scroll') {
                    emitter.emit('multiple');
                }
                const PDFViewerApplication = window.PDFViewerApplication;
                PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.WRAPPED });
            });
        };
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('switchscrollmode', (event) => {
            this.ngZone.run(() => {
                this.scrollMode = event.mode;
            });
        });
    }
}
PdfWrappedScrollModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfWrappedScrollModeComponent, deps: [{ token: PDFNotificationService }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfWrappedScrollModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfWrappedScrollModeComponent, selector: "pdf-wrapped-scroll-mode", inputs: { show: "show", scrollMode: "scrollMode", pageViewMode: "pageViewMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Wrapped Scrolling\"\r\n  primaryToolbarId=\"scrollWrapped\"\r\n  [toggled]=\"scrollMode == 2\"\r\n  l10nId=\"scroll_wrapped\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_wrapped_label\"\r\n  [order]=\"3300\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfWrappedScrollModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-wrapped-scroll-mode', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Wrapped Scrolling\"\r\n  primaryToolbarId=\"scrollWrapped\"\r\n  [toggled]=\"scrollMode == 2\"\r\n  l10nId=\"scroll_wrapped\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"scroll_wrapped_label\"\r\n  [order]=\"3300\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 24px; height: 24px; margin-top: 3px' viewBox='0 0 24 24'><path fill='currentColor' d='M5.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5C1 4.5 1.5 4 2.5 4zM7 0v.5C7 1.5 6.5 2 5.5 2h-3C1.5 2 1 1.5 1 .5V0h6zM7 16v-.5c0-1-.5-1.5-1.5-1.5h-3c-1 0-1.5.5-1.5 1.5v.5h6zM13.5 4c1 0 1.5.5 1.5 1.5v5c0 1-.5 1.5-1.5 1.5h-3c-1 0-1.5-.5-1.5-1.5v-5c0-1 .5-1.5 1.5-1.5zM15 0v.5c0 1-.5 1.5-1.5 1.5h-3C9.5 2 9 1.5 9 .5V0h6zM15 16v-.507c0-1-.5-1.5-1.5-1.5h-3C9.5 14 9 14.5 9 15.5v.5h6z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });

class PdfInfiniteScrollComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            this.ngZone.run(() => {
                if (this.pageViewMode === 'infinite-scroll') {
                    emitter.emit('multiple');
                }
                else {
                    const PDFViewerApplication = window.PDFViewerApplication;
                    if (this.scrollMode !== ScrollModeType.wrapped && this.scrollMode !== ScrollModeType.vertical) {
                        PDFViewerApplication.eventBus.dispatch('switchscrollmode', { mode: ScrollMode.VERTICAL });
                    }
                    emitter.emit('infinite-scroll');
                }
            });
        };
    }
}
PdfInfiniteScrollComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfInfiniteScrollComponent, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component });
PdfInfiniteScrollComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfInfiniteScrollComponent, selector: "pdf-infinite-scroll", inputs: { show: "show", pageViewMode: "pageViewMode", scrollMode: "scrollMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Infinite scroll\"\r\n  primaryToolbarId=\"infiniteScroll\"\r\n  [toggled]=\"pageViewMode == 'infinite-scroll'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"infinite_scroll_label\"\r\n  [order]=\"3400\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfInfiniteScrollComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-infinite-scroll', template: "<pdf-shy-button\r\n  [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\"\r\n  title=\"Infinite scroll\"\r\n  primaryToolbarId=\"infiniteScroll\"\r\n  [toggled]=\"pageViewMode == 'infinite-scroll'\"\r\n  [action]=\"onClick\"\r\n  l10nLabel=\"infinite_scroll_label\"\r\n  [order]=\"3400\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg xmlns='http://www.w3.org/2000/svg' height= '24' viewBox= '0 -960 960 960' width='24'><path d= 'M212-260q-90 0-151-65.5T0-482q0-90 61.5-154T212-700q36 0 69.5 12t59.5 37l93 90-42 42-89-87q-18-18-41.5-26t-49.5-8q-64 0-108 46.5T60-482q0 66 43.5 114T212-320q25 0 48.5-8t42.5-25l316-298q26-25 59.5-37t68.5-12q90 0 151.5 64T960-482q0 91-61.5 156.5T747-260q-35 0-69-11.5T619-308l-91-90 42-42 87 87q17 17 41 25t49 8q65 0 109-48t44-114q0-65-44.5-111.5T747-640q-25 0-48.5 9T657-605L341-307q-26 24-60 35.5T212-260Z '/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { show: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });

class PdfBookModeComponent {
    constructor() {
        this.show = true;
        this.pageViewModeChange = new EventEmitter();
        const emitter = this.pageViewModeChange;
        this.onClick = () => {
            setTimeout(() => {
                emitter.emit('book');
            });
        };
    }
}
PdfBookModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfBookModeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfBookModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfBookModeComponent, selector: "pdf-book-mode", inputs: { show: "show", pageViewMode: "pageViewMode", scrollMode: "scrollMode" }, outputs: { pageViewModeChange: "pageViewModeChange" }, ngImport: i0, template: "<pdf-shy-button [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\" title=\"Book mode\"\r\n  primaryToolbarId=\"book-mode\" [toggled]=\"pageViewMode == 'book'\" [action]=\"onClick\" [order]=\"3400\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z'/></svg>\">\r\n</pdf-shy-button>", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfBookModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-book-mode', template: "<pdf-shy-button [cssClass]=\"show | responsiveCSSClass : 'always-in-secondary-menu'\" title=\"Book mode\"\r\n  primaryToolbarId=\"book-mode\" [toggled]=\"pageViewMode == 'book'\" [action]=\"onClick\" [order]=\"3400\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 -960 960 960' width='24'><path d='M560-574v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-610q-38 0-73 9.5T560-574Zm0 220v-49q33-13.5 67.5-20.25T700-430q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-390q-38 0-73 9t-67 27Zm0-110v-48q33-14 67.5-21t72.5-7q26 0 51 4t49 10v44q-24-9-48.5-13.5T700-500q-38 0-73 9.5T560-464ZM248-300q53.566 0 104.283 12.5T452-250v-427q-45-30-97.619-46.5Q301.763-740 248-740q-38 0-74.5 9.5T100-707v434q31-14 70.5-20.5T248-300Zm264 50q50-25 98-37.5T712-300q38 0 78.5 6t69.5 16v-429q-34-17-71.822-25-37.823-8-76.178-8-54 0-104.5 16.5T512-677v427Zm-30 90q-51-38-111-58.5T248-239q-36.537 0-71.768 9Q141-221 106-208q-23.1 11-44.55-3Q40-225 40-251v-463q0-15 7-27.5T68-761q42-20 87.395-29.5Q200.789-800 248-800q63 0 122.5 17T482-731q51-35 109.5-52T712-800q46.868 0 91.934 9.5Q849-781 891-761q14 7 21.5 19.5T920-714v463q0 27.894-22.5 42.447Q875-194 853-208q-34-14-69.232-22.5Q748.537-239 712-239q-63 0-121 21t-109 58ZM276-489Z'/></svg>\">\r\n</pdf-shy-button>", styles: ["button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { show: [{
                type: Input
            }], pageViewMode: [{
                type: Input
            }], scrollMode: [{
                type: Input
            }], pageViewModeChange: [{
                type: Output
            }] } });

class PdfHandToolComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showHandToolButton = true;
        this.isSelected = false;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', ({ tool }) => (this.isSelected = tool === PdfCursorTools.HAND));
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.HAND });
    }
}
PdfHandToolComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfHandToolComponent, deps: [{ token: PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfHandToolComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfHandToolComponent, selector: "pdf-hand-tool", inputs: { showHandToolButton: "showHandToolButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  primaryToolbarId=\"primaryCursorHandTool\"\r\n  [cssClass]=\"showHandToolButton | responsiveCSSClass : 'hiddenXXLView'\"\r\n  title=\"Enable hand tool\"\r\n  l10nId=\"cursor_hand_tool\"\r\n  l10nLabel=\"cursor_hand_tool_label\"\r\n  [order]=\"1200\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfHandToolComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-hand-tool', template: "<pdf-shy-button\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  primaryToolbarId=\"primaryCursorHandTool\"\r\n  [cssClass]=\"showHandToolButton | responsiveCSSClass : 'hiddenXXLView'\"\r\n  title=\"Enable hand tool\"\r\n  l10nId=\"cursor_hand_tool\"\r\n  l10nLabel=\"cursor_hand_tool_label\"\r\n  [order]=\"1200\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }]; }, propDecorators: { showHandToolButton: [{
                type: Input
            }] } });

class PdfSelectToolComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showSelectToolButton = true;
        this.isSelected = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', ({ tool }) => (this.isSelected = tool === PdfCursorTools.SELECT));
    }
    onClick() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
    }
}
PdfSelectToolComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSelectToolComponent, deps: [{ token: PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfSelectToolComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSelectToolComponent, selector: "pdf-select-tool", inputs: { showSelectToolButton: "showSelectToolButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  primaryToolbarId=\"primaryCursorSelectTool\"\r\n  [cssClass]=\"showSelectToolButton | responsiveCSSClass : 'hiddenXXLView'\"\r\n  title=\"Enable text selection tool\"\r\n  l10nId=\"cursor_text_select_tool\"\r\n  l10nLabel=\"cursor_text_select_tool_label\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z'/></svg>\"\r\n  [order]=\"1100\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0;margin-right:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSelectToolComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-select-tool', template: "<pdf-shy-button\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  primaryToolbarId=\"primaryCursorSelectTool\"\r\n  [cssClass]=\"showSelectToolButton | responsiveCSSClass : 'hiddenXXLView'\"\r\n  title=\"Enable text selection tool\"\r\n  l10nId=\"cursor_text_select_tool\"\r\n  l10nLabel=\"cursor_text_select_tool_label\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z'/></svg>\"\r\n  [order]=\"1100\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0;margin-right:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px #0000001a inset,0 0 1px #0003 inset,0 1px #ffffff0d}button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }]; }, propDecorators: { showSelectToolButton: [{
                type: Input
            }] } });

class PdfRotatePageComponent {
    constructor(notificationService, changeDetectorRef) {
        this.notificationService = notificationService;
        this.changeDetectorRef = changeDetectorRef;
        this.showRotateButton = true;
        this.disableRotate = true;
        this.clockwise = true;
        this.counterClockwise = true;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    rotateCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    }
    rotateCCW() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
    }
    updateUIState(event) {
        this.disableRotate = event.pagesCount === 0;
        this.changeDetectorRef.markForCheck();
    }
}
PdfRotatePageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfRotatePageComponent, deps: [{ token: PDFNotificationService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
PdfRotatePageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfRotatePageComponent, selector: "pdf-rotate-page", inputs: { showRotateButton: "showRotateButton", clockwise: "clockwise", counterClockwise: "counterClockwise" }, ngImport: i0, template: "<pdf-shy-button\r\n  *ngIf=\"clockwise\"\r\n  [action]=\"rotateCW\"\r\n  primaryToolbarId=\"primaryPageRotateCw\"\r\n  class=\"rotateCw\"\r\n  [cssClass]=\"showRotateButton | responsiveCSSClass : 'hiddenXLView'\"\r\n  title=\"Rotate Clockwise\"\r\n  l10nId=\"page_rotate_cw\"\r\n  l10nLabel=\"page_rotate_cw_label\"\r\n  [disabled]=\"disableRotate\"\r\n  [order]=\"900\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n<pdf-shy-button\r\n  *ngIf=\"counterClockwise\"\r\n  [action]=\"rotateCCW\"\r\n  primaryToolbarId=\"primaryPageRotateCcw\"\r\n  class=\"rotateCcw\"\r\n  [cssClass]=\"showRotateButton | responsiveCSSClass : 'hiddenXLView'\"\r\n  title=\"Rotate Counterclockwise\"\r\n  l10nId=\"page_rotate_ccw\"\r\n  l10nLabel=\"page_rotate_ccw_label\"\r\n  [disabled]=\"disableRotate\"\r\n  [order]=\"1000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfRotatePageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-rotate-page', template: "<pdf-shy-button\r\n  *ngIf=\"clockwise\"\r\n  [action]=\"rotateCW\"\r\n  primaryToolbarId=\"primaryPageRotateCw\"\r\n  class=\"rotateCw\"\r\n  [cssClass]=\"showRotateButton | responsiveCSSClass : 'hiddenXLView'\"\r\n  title=\"Rotate Clockwise\"\r\n  l10nId=\"page_rotate_cw\"\r\n  l10nLabel=\"page_rotate_cw_label\"\r\n  [disabled]=\"disableRotate\"\r\n  [order]=\"900\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n<pdf-shy-button\r\n  *ngIf=\"counterClockwise\"\r\n  [action]=\"rotateCCW\"\r\n  primaryToolbarId=\"primaryPageRotateCcw\"\r\n  class=\"rotateCcw\"\r\n  [cssClass]=\"showRotateButton | responsiveCSSClass : 'hiddenXLView'\"\r\n  title=\"Rotate Counterclockwise\"\r\n  l10nId=\"page_rotate_ccw\"\r\n  l10nLabel=\"page_rotate_ccw_label\"\r\n  [disabled]=\"disableRotate\"\r\n  [order]=\"1000\"\r\n  [closeOnClick]=\"false\"\r\n  image=\"<svg style='width: 23px; height: 23px' viewBox='0 0 24 24'><path fill='currentColor' d='M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3'/></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { showRotateButton: [{
                type: Input
            }], clockwise: [{
                type: Input
            }], counterClockwise: [{
                type: Input
            }] } });

class PdfPresentationModeComponent {
    constructor() {
        this.showPresentationModeButton = true;
    }
}
PdfPresentationModeComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPresentationModeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPresentationModeComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPresentationModeComponent, selector: "pdf-presentation-mode", inputs: { showPresentationModeButton: "showPresentationModeButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  primaryToolbarId=\"presentationMode\"\r\n  [cssClass]=\"showPresentationModeButton | responsiveCSSClass : 'hiddenLargeView'\"\r\n  title=\"Switch to Presentation Mode\"\r\n  l10nId=\"presentation_mode\"\r\n  l10nLabel=\"presentation_mode_label\"\r\n  [order]=\"100\"\r\n  image=\"<svg style='width: 27px; height: 27px; margin-top: -2px' viewBox='0 0 24 24'><path fill='currentColor' d='M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host button.toolbarButton{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPresentationModeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-presentation-mode', template: "<pdf-shy-button\r\n  primaryToolbarId=\"presentationMode\"\r\n  [cssClass]=\"showPresentationModeButton | responsiveCSSClass : 'hiddenLargeView'\"\r\n  title=\"Switch to Presentation Mode\"\r\n  l10nId=\"presentation_mode\"\r\n  l10nLabel=\"presentation_mode_label\"\r\n  [order]=\"100\"\r\n  image=\"<svg style='width: 27px; height: 27px; margin-top: -2px' viewBox='0 0 24 24'><path fill='currentColor' d='M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host button.toolbarButton{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], propDecorators: { showPresentationModeButton: [{
                type: Input
            }] } });

class PdfOpenFileComponent {
    constructor() {
        this.showOpenFileButton = true;
    }
}
PdfOpenFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfOpenFileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfOpenFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfOpenFileComponent, selector: "pdf-open-file", inputs: { showOpenFileButton: "showOpenFileButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"showOpenFileButton | responsiveCSSClass : 'hiddenMediumView'\"\r\n  primaryToolbarId=\"openFile\"\r\n  title=\"Open File\"\r\n  l10nId=\"open_file\"\r\n  l10nLabel=\"open_file_label\"\r\n  image=\"<svg style='width: 24px; height: 20px' viewBox='0 0 24 24'><path fill='currentColor' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z' /></svg>\"\r\n  [order]=\"200\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfOpenFileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-open-file', template: "<pdf-shy-button\r\n  [cssClass]=\"showOpenFileButton | responsiveCSSClass : 'hiddenMediumView'\"\r\n  primaryToolbarId=\"openFile\"\r\n  title=\"Open File\"\r\n  l10nId=\"open_file\"\r\n  l10nLabel=\"open_file_label\"\r\n  image=\"<svg style='width: 24px; height: 20px' viewBox='0 0 24 24'><path fill='currentColor' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z' /></svg>\"\r\n  [order]=\"200\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], propDecorators: { showOpenFileButton: [{
                type: Input
            }] } });

class PdfPrintComponent {
    constructor() {
        this.showPrintButton = true;
    }
}
PdfPrintComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPrintComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPrintComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPrintComponent, selector: "pdf-print", inputs: { showPrintButton: "showPrintButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  primaryToolbarId=\"print\"\r\n  [cssClass]=\"showPrintButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Print\"\r\n  l10nId=\"print\"\r\n  l10nLabel=\"print\"\r\n  [order]=\"300\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPrintComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-print', template: "<pdf-shy-button\r\n  primaryToolbarId=\"print\"\r\n  [cssClass]=\"showPrintButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Print\"\r\n  l10nId=\"print\"\r\n  l10nLabel=\"print\"\r\n  [order]=\"300\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], propDecorators: { showPrintButton: [{
                type: Input
            }] } });

class PdfDownloadComponent {
    constructor() {
        this.showDownloadButton = true;
    }
}
PdfDownloadComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDownloadComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDownloadComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDownloadComponent, selector: "pdf-download", inputs: { showDownloadButton: "showDownloadButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  primaryToolbarId=\"download\"\r\n  [cssClass]=\"showDownloadButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Download\"\r\n  l10nId=\"save\"\r\n  l10nLabel=\"save\"\r\n  image=\"<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>\"\r\n  [order]=\"400\"\r\n>\r\n  <span data-l10n-id=\"save_label\">Download</span>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDownloadComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-download', template: "<pdf-shy-button\r\n  primaryToolbarId=\"download\"\r\n  [cssClass]=\"showDownloadButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Download\"\r\n  l10nId=\"save\"\r\n  l10nLabel=\"save\"\r\n  image=\"<svg style= 'width: 20px; height: 20px ' viewBox= '0 0 24 24 '><path fill= 'currentColor ' d= 'M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z ' /></svg>\"\r\n  [order]=\"400\"\r\n>\r\n  <span data-l10n-id=\"save_label\">Download</span>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], propDecorators: { showDownloadButton: [{
                type: Input
            }] } });

class PdfStampEditorComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.show = true;
        this.isSelected = false;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    get pdfJsVersion() {
        return getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('annotationeditormodechanged', ({ mode }) => (this.isSelected = mode === 13));
    }
    onClick() {
        var _a;
        (_a = document.getElementById('editorStamp')) === null || _a === void 0 ? void 0 : _a.click();
    }
}
PdfStampEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfStampEditorComponent, deps: [{ token: PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfStampEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfStampEditorComponent, selector: "pdf-stamp-editor", inputs: { show: "show" }, ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Text\"\r\n  primaryToolbarId=\"primaryEditorStamp\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_stamp1\"\r\n  l10nLabel=\"editor_stamp1_label\"\r\n  [order]=\"4200\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13 19C13 19.7 13.13 20.37 13.35 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V13.35C20.37 13.13 19.7 13 19 13V5H5V19H13M13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.35C13.75 15.88 14.47 14.91 15.4 14.21L13.96 12.29M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n<div\r\n  class=\"editorParamsToolbar hidden doorHangerRight\"\r\n  id=\"editorStampParamsToolbar\"\r\n  [class]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  *ngIf=\"pdfJsVersion >= '4.0'\"\r\n>\r\n  <div class=\"editorParamsToolbarContainer\">\r\n    <button\r\n      id=\"editorStampAddImage\"\r\n      class=\"secondaryToolbarButton\"\r\n      title=\"Add image\"\r\n      tabindex=\"105\"\r\n      data-l10n-id=\"editor_stamp_add_image\"\r\n      aria-label=\"Add image\"\r\n    >\r\n      <svg role=\"img\" aria-label=\"Add image\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M7.00488 9.75V14C7.00488 14.1658 7.07073 14.3247 7.18794 14.4419C7.30515 14.5592 7.46412 14.625 7.62988 14.625C7.79564 14.625 7.95461 14.5592 8.07183 14.4419C8.18904 14.3247 8.25488 14.1658 8.25488 14V9.75L8.75488 9.25H13.0049C13.1706 9.25 13.3296 9.18415 13.4468 9.06694C13.564 8.94973 13.6299 8.79076 13.6299 8.625C13.6299 8.45924 13.564 8.30027 13.4468 8.18306C13.3296 8.06585 13.1706 8 13.0049 8H8.75488L8.25488 7.5V3.25C8.25488 3.08424 8.18904 2.92527 8.07183 2.80806C7.95461 2.69085 7.79564 2.625 7.62988 2.625C7.46412 2.625 7.30515 2.69085 7.18794 2.80806C7.07073 2.92527 7.00488 3.08424 7.00488 3.25V7.5L6.50488 8H2.25488C2.08912 8 1.93015 8.06585 1.81294 8.18306C1.69573 8.30027 1.62988 8.45924 1.62988 8.625C1.62988 8.79076 1.69573 8.94973 1.81294 9.06694C1.93015 9.18415 2.08912 9.25 2.25488 9.25H6.39188L7.00488 9.75Z\"\r\n          fill=\"black\"\r\n        />\r\n      </svg>\r\n      <span data-l10n-id=\"editor_stamp_add_image_label\">Add image</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: ["button{padding:0;height:25px;background-color:transparent}button:focus{outline:none;border:none}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfStampEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-stamp-editor', template: "<pdf-shy-button\r\n  title=\"Text\"\r\n  primaryToolbarId=\"primaryEditorStamp\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_stamp1\"\r\n  l10nLabel=\"editor_stamp1_label\"\r\n  [order]=\"4200\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M13 19C13 19.7 13.13 20.37 13.35 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V13.35C20.37 13.13 19.7 13 19 13V5H5V19H13M13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.35C13.75 15.88 14.47 14.91 15.4 14.21L13.96 12.29M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n<div\r\n  class=\"editorParamsToolbar hidden doorHangerRight\"\r\n  id=\"editorStampParamsToolbar\"\r\n  [class]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  *ngIf=\"pdfJsVersion >= '4.0'\"\r\n>\r\n  <div class=\"editorParamsToolbarContainer\">\r\n    <button\r\n      id=\"editorStampAddImage\"\r\n      class=\"secondaryToolbarButton\"\r\n      title=\"Add image\"\r\n      tabindex=\"105\"\r\n      data-l10n-id=\"editor_stamp_add_image\"\r\n      aria-label=\"Add image\"\r\n    >\r\n      <svg role=\"img\" aria-label=\"Add image\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M7.00488 9.75V14C7.00488 14.1658 7.07073 14.3247 7.18794 14.4419C7.30515 14.5592 7.46412 14.625 7.62988 14.625C7.79564 14.625 7.95461 14.5592 8.07183 14.4419C8.18904 14.3247 8.25488 14.1658 8.25488 14V9.75L8.75488 9.25H13.0049C13.1706 9.25 13.3296 9.18415 13.4468 9.06694C13.564 8.94973 13.6299 8.79076 13.6299 8.625C13.6299 8.45924 13.564 8.30027 13.4468 8.18306C13.3296 8.06585 13.1706 8 13.0049 8H8.75488L8.25488 7.5V3.25C8.25488 3.08424 8.18904 2.92527 8.07183 2.80806C7.95461 2.69085 7.79564 2.625 7.62988 2.625C7.46412 2.625 7.30515 2.69085 7.18794 2.80806C7.07073 2.92527 7.00488 3.08424 7.00488 3.25V7.5L6.50488 8H2.25488C2.08912 8 1.93015 8.06585 1.81294 8.18306C1.69573 8.30027 1.62988 8.45924 1.62988 8.625C1.62988 8.79076 1.69573 8.94973 1.81294 9.06694C1.93015 9.18415 2.08912 9.25 2.25488 9.25H6.39188L7.00488 9.75Z\"\r\n          fill=\"black\"\r\n        />\r\n      </svg>\r\n      <span data-l10n-id=\"editor_stamp_add_image_label\">Add image</span>\r\n    </button>\r\n  </div>\r\n</div>\r\n", styles: ["button{padding:0;height:25px;background-color:transparent}button:focus{outline:none;border:none}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }]; }, propDecorators: { show: [{
                type: Input
            }] } });

class PdfTextEditorComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.show = true;
        this.isSelected = false;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('annotationeditormodechanged', ({ mode }) => (this.isSelected = mode === 3));
    }
    onClick() {
        var _a;
        (_a = document.getElementById('editorFreeText')) === null || _a === void 0 ? void 0 : _a.click();
        //    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
        //    PDFViewerApplication.eventBus.dispatch('annotationeditormodechanged', { mode: 3 });
    }
}
PdfTextEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfTextEditorComponent, deps: [{ token: PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfTextEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfTextEditorComponent, selector: "pdf-text-editor", inputs: { show: "show" }, ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorFreeText\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_free_text2\"\r\n  l10nLabel=\"editor_free_text2_label\"\r\n  [order]=\"4100\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfTextEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-text-editor', template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorFreeText\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_free_text2\"\r\n  l10nLabel=\"editor_free_text2_label\"\r\n  [order]=\"4100\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' viewBox='0 0 24 24'> <path fill='currentColor' d='M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z' /> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }]; }, propDecorators: { show: [{
                type: Input
            }] } });

class PdfDrawEditorComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.show = true;
        this.isSelected = false;
        const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('annotationeditormodechanged', ({ mode }) => (this.isSelected = mode === 15));
    }
    onClick() {
        var _a;
        (_a = document.getElementById('editorInk')) === null || _a === void 0 ? void 0 : _a.click();
        // const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
        // PDFViewerApplication.eventBus.dispatch('annotationeditormodechanged', { mode: 15 });
    }
}
PdfDrawEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDrawEditorComponent, deps: [{ token: PDFNotificationService }], target: i0.ɵɵFactoryTarget.Component });
PdfDrawEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDrawEditorComponent, selector: "pdf-draw-editor", inputs: { show: "show" }, ngImport: i0, template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorInk\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_ink2\"\r\n  l10nLabel=\"editor_ink2_label\"\r\n  [order]=\"4000\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 16 16' > <g> <g transform='scale(0.03125)'>  <path  d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'  /> </g> </g> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"], components: [{ type: PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDrawEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-draw-editor', template: "<pdf-shy-button\r\n  title=\"Draw\"\r\n  primaryToolbarId=\"primaryEditorInk\"\r\n  [cssClass]=\"show | responsiveCSSClass : 'hiddenTinyView'\"\r\n  l10nId=\"editor_ink2\"\r\n  l10nLabel=\"editor_ink2_label\"\r\n  [order]=\"4000\"\r\n  [action]=\"onClick\"\r\n  [toggled]=\"isSelected\"\r\n  [closeOnClick]=\"true\"\r\n  image=\"<svg style='width: 20px; height: 20px' version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' xmlns:xlink='http://www.w3.org/1999/xlink' enable-background='new 0 0 16 16' > <g> <g transform='scale(0.03125)'>  <path  d='m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z'  /> </g> </g> </svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: ["button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: PDFNotificationService }]; }, propDecorators: { show: [{
                type: Input
            }] } });

class PdfEditorComponent {
    constructor() {
        this.showDrawEditor = true;
        this.showTextEditor = true;
        this.showStampEditor = true;
    }
}
PdfEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfEditorComponent, selector: "pdf-editor", inputs: { showDrawEditor: "showDrawEditor", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor" }, ngImport: i0, template: "<div\r\n  id=\"editorModeButtons\"\r\n  class=\"splitToolbarButton toggled hiddenTinyView\"\r\n  role=\"radiogroup\"\r\n  *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"\r\n>\r\n  <pdf-stamp-editor [show]=\"showStampEditor\"></pdf-stamp-editor>\r\n  <pdf-text-editor [show]=\"showTextEditor\"></pdf-text-editor>\r\n  <pdf-draw-editor [show]=\"showDrawEditor\"></pdf-draw-editor>\r\n</div>\r\n\r\n<div id=\"editorModeSeparator\" class=\"verticalToolbarSeparator hiddenTinyView\" *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"></div>\r\n", styles: ["button{padding:0}\n"], components: [{ type: PdfStampEditorComponent, selector: "pdf-stamp-editor", inputs: ["show"] }, { type: PdfTextEditorComponent, selector: "pdf-text-editor", inputs: ["show"] }, { type: PdfDrawEditorComponent, selector: "pdf-draw-editor", inputs: ["show"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-editor', template: "<div\r\n  id=\"editorModeButtons\"\r\n  class=\"splitToolbarButton toggled hiddenTinyView\"\r\n  role=\"radiogroup\"\r\n  *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"\r\n>\r\n  <pdf-stamp-editor [show]=\"showStampEditor\"></pdf-stamp-editor>\r\n  <pdf-text-editor [show]=\"showTextEditor\"></pdf-text-editor>\r\n  <pdf-draw-editor [show]=\"showDrawEditor\"></pdf-draw-editor>\r\n</div>\r\n\r\n<div id=\"editorModeSeparator\" class=\"verticalToolbarSeparator hiddenTinyView\" *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"></div>\r\n", styles: ["button{padding:0}\n"] }]
        }], propDecorators: { showDrawEditor: [{
                type: Input
            }], showTextEditor: [{
                type: Input
            }], showStampEditor: [{
                type: Input
            }] } });

class PdfToggleSecondaryToolbarComponent {
    constructor(service) {
        this.service = service;
        this.showSecondaryToolbarButton = true;
    }
    onClick(event) {
        event.preventDefault();
        return false;
    }
}
PdfToggleSecondaryToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfToggleSecondaryToolbarComponent, deps: [{ token: NgxExtendedPdfViewerService }], target: i0.ɵɵFactoryTarget.Component });
PdfToggleSecondaryToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfToggleSecondaryToolbarComponent, selector: "pdf-toggle-secondary-toolbar", inputs: { showSecondaryToolbarButton: "showSecondaryToolbarButton" }, ngImport: i0, template: "<button\r\n  type=\"button\"\r\n  [class]=\"showSecondaryToolbarButton | responsiveCSSClass : 'always-visible'\"\r\n  id=\"secondaryToolbarToggle\"\r\n  class=\"toolbarButton\"\r\n  title=\"Tools\"\r\n  data-l10n-id=\"tools\"\r\n  aria-label=\"Tools\"\r\n  [class.hidden]=\"service.secondaryMenuIsEmpty\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Tools\" style=\"width: 27px; height: 27px\" viewBox=\"0 0 24 24\" (click)=\"onClick($event)\">\r\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"tools_label\">Tools</span>\r\n</button>\r\n", styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"], pipes: { "responsiveCSSClass": ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfToggleSecondaryToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-toggle-secondary-toolbar', template: "<button\r\n  type=\"button\"\r\n  [class]=\"showSecondaryToolbarButton | responsiveCSSClass : 'always-visible'\"\r\n  id=\"secondaryToolbarToggle\"\r\n  class=\"toolbarButton\"\r\n  title=\"Tools\"\r\n  data-l10n-id=\"tools\"\r\n  aria-label=\"Tools\"\r\n  [class.hidden]=\"service.secondaryMenuIsEmpty\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Tools\" style=\"width: 27px; height: 27px\" viewBox=\"0 0 24 24\" (click)=\"onClick($event)\">\r\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"tools_label\">Tools</span>\r\n</button>\r\n", styles: ["button>svg{margin-top:-3px}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], ctorParameters: function () { return [{ type: NgxExtendedPdfViewerService }]; }, propDecorators: { showSecondaryToolbarButton: [{
                type: Input
            }] } });

class PdfToolbarComponent {
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
PdfToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfToolbarComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
PdfToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfToolbarComponent, selector: "pdf-toolbar", inputs: { customToolbar: "customToolbar", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", primaryMenuVisible: "primaryMenuVisible", showDownloadButton: "showDownloadButton", showDrawEditor: "showDrawEditor", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor", showFindButton: "showFindButton", showHandToolButton: "showHandToolButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showPagingButtons: "showPagingButtons", showPresentationModeButton: "showPresentationModeButton", showRotateButton: "showRotateButton", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", showZoomButtons: "showZoomButtons", textLayer: "textLayer", toolbarMarginTop: "toolbarMarginTop", toolbarWidth: "toolbarWidth", zoomLevels: "zoomLevels", pageViewMode: "pageViewMode", spread: "spread", scrollMode: "scrollMode", showPropertiesButton: "showPropertiesButton", showSpreadButton: "showSpreadButton", showSinglePageModeButton: "showSinglePageModeButton", showVerticalScrollButton: "showVerticalScrollButton", showHorizontalScrollButton: "showHorizontalScrollButton", showWrappedScrollButton: "showWrappedScrollButton", showInfiniteScrollButton: "showInfiniteScrollButton", showBookModeButton: "showBookModeButton", findbarVisible: "findbarVisible" }, outputs: { pageViewModeChange: "pageViewModeChange", onToolbarLoaded: "onToolbarLoaded" }, ngImport: i0, template: "<div\r\n  class=\"toolbar\"\r\n  [class.invisible]=\"!primaryMenuVisible\"\r\n  [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n  [style.transformOrigin]=\"'left center'\"\r\n  [style.width]=\"toolbarWidth\"\r\n  [style.marginTop]=\"toolbarMarginTop\"\r\n>\r\n  <div id=\"toolbarContainer\">\r\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\r\n    <div id=\"loadingBar\">\r\n      <div class=\"progress\">\r\n        <div class=\"glimmer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultToolbar>\r\n  <div id=\"toolbarViewer\">\r\n    <div id=\"toolbarViewerLeft\">\r\n      <pdf-toggle-sidebar [show]=\"showSidebarButton\" [sidebarVisible]=\"sidebarVisible\"></pdf-toggle-sidebar>\r\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\" [findbarVisible]=\"findbarVisible\"></pdf-find-button>\r\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\r\n    </div>\r\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\r\n    <div id=\"toolbarViewerRight\">\r\n      <pdf-document-properties [show]=\"showPropertiesButton\"></pdf-document-properties>\r\n      <pdf-no-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-no-spread>\r\n      <pdf-odd-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-odd-spread>\r\n      <pdf-even-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-even-spread>\r\n      <pdf-single-page-mode\r\n        [show]=\"showSinglePageModeButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-single-page-mode>\r\n      <pdf-vertical-scroll-mode\r\n        [show]=\"showVerticalScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-vertical-scroll-mode>\r\n      <pdf-horizontal-scroll\r\n        [show]=\"showHorizontalScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-horizontal-scroll>\r\n      <pdf-wrapped-scroll-mode\r\n        [show]=\"showWrappedScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-wrapped-scroll-mode>\r\n      <pdf-infinite-scroll\r\n        [show]=\"showInfiniteScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-infinite-scroll>\r\n      <pdf-book-mode\r\n        [show]=\"showBookModeButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-book-mode>\r\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\r\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\r\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"true\" [counterClockwise]=\"false\"> </pdf-rotate-page>\r\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"false\" [counterClockwise]=\"true\"> </pdf-rotate-page>\r\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\r\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\r\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\r\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\r\n\r\n      <pdf-editor [showDrawEditor]=\"showDrawEditor\" [showTextEditor]=\"showTextEditor\" [showStampEditor]=\"showStampEditor\"></pdf-editor>\r\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"> </pdf-toggle-secondary-toolbar>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""], components: [{ type: PdfToggleSidebarComponent, selector: "pdf-toggle-sidebar", inputs: ["show", "sidebarVisible"], outputs: ["showChange"] }, { type: PdfFindButtonComponent, selector: "pdf-find-button", inputs: ["showFindButton", "textLayer", "findbarVisible"] }, { type: PdfPagingAreaComponent, selector: "pdf-paging-area", inputs: ["showPagingButtons"] }, { type: PdfZoomToolbarComponent, selector: "pdf-zoom-toolbar", inputs: ["showZoomButtons", "zoomLevels"] }, { type: PdfDocumentPropertiesComponent, selector: "pdf-document-properties", inputs: ["show"] }, { type: PdfNoSpreadComponent, selector: "pdf-no-spread", inputs: ["show", "scrollMode"] }, { type: PdfOddSpreadComponent, selector: "pdf-odd-spread", inputs: ["show", "scrollMode"] }, { type: PdfEvenSpreadComponent, selector: "pdf-even-spread", inputs: ["show", "scrollMode"] }, { type: PdfSinglePageModeComponent, selector: "pdf-single-page-mode", inputs: ["show", "scrollMode", "pageViewMode"], outputs: ["pageViewModeChange"] }, { type: PdfVerticalScrollModeComponent, selector: "pdf-vertical-scroll-mode", inputs: ["show", "scrollMode", "pageViewMode"], outputs: ["pageViewModeChange"] }, { type: PdfHorizontalScrollComponent, selector: "pdf-horizontal-scroll", inputs: ["show", "scrollMode", "pageViewMode"], outputs: ["pageViewModeChange"] }, { type: PdfWrappedScrollModeComponent, selector: "pdf-wrapped-scroll-mode", inputs: ["show", "scrollMode", "pageViewMode"], outputs: ["pageViewModeChange"] }, { type: PdfInfiniteScrollComponent, selector: "pdf-infinite-scroll", inputs: ["show", "pageViewMode", "scrollMode"], outputs: ["pageViewModeChange"] }, { type: PdfBookModeComponent, selector: "pdf-book-mode", inputs: ["show", "pageViewMode", "scrollMode"], outputs: ["pageViewModeChange"] }, { type: PdfHandToolComponent, selector: "pdf-hand-tool", inputs: ["showHandToolButton"] }, { type: PdfSelectToolComponent, selector: "pdf-select-tool", inputs: ["showSelectToolButton"] }, { type: PdfRotatePageComponent, selector: "pdf-rotate-page", inputs: ["showRotateButton", "clockwise", "counterClockwise"] }, { type: PdfPresentationModeComponent, selector: "pdf-presentation-mode", inputs: ["showPresentationModeButton"] }, { type: PdfOpenFileComponent, selector: "pdf-open-file", inputs: ["showOpenFileButton"] }, { type: PdfPrintComponent, selector: "pdf-print", inputs: ["showPrintButton"] }, { type: PdfDownloadComponent, selector: "pdf-download", inputs: ["showDownloadButton"] }, { type: PdfEditorComponent, selector: "pdf-editor", inputs: ["showDrawEditor", "showTextEditor", "showStampEditor"] }, { type: PdfToggleSecondaryToolbarComponent, selector: "pdf-toggle-secondary-toolbar", inputs: ["showSecondaryToolbarButton"] }], directives: [{ type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-toolbar', template: "<div\r\n  class=\"toolbar\"\r\n  [class.invisible]=\"!primaryMenuVisible\"\r\n  [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n  [style.transformOrigin]=\"'left center'\"\r\n  [style.width]=\"toolbarWidth\"\r\n  [style.marginTop]=\"toolbarMarginTop\"\r\n>\r\n  <div id=\"toolbarContainer\">\r\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\r\n    <div id=\"loadingBar\">\r\n      <div class=\"progress\">\r\n        <div class=\"glimmer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #defaultToolbar>\r\n  <div id=\"toolbarViewer\">\r\n    <div id=\"toolbarViewerLeft\">\r\n      <pdf-toggle-sidebar [show]=\"showSidebarButton\" [sidebarVisible]=\"sidebarVisible\"></pdf-toggle-sidebar>\r\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\" [findbarVisible]=\"findbarVisible\"></pdf-find-button>\r\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\r\n    </div>\r\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" [zoomLevels]=\"zoomLevels\"></pdf-zoom-toolbar>\r\n    <div id=\"toolbarViewerRight\">\r\n      <pdf-document-properties [show]=\"showPropertiesButton\"></pdf-document-properties>\r\n      <pdf-no-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-no-spread>\r\n      <pdf-odd-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-odd-spread>\r\n      <pdf-even-spread [scrollMode]=\"scrollMode\" [show]=\"showSpreadButton\"></pdf-even-spread>\r\n      <pdf-single-page-mode\r\n        [show]=\"showSinglePageModeButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-single-page-mode>\r\n      <pdf-vertical-scroll-mode\r\n        [show]=\"showVerticalScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-vertical-scroll-mode>\r\n      <pdf-horizontal-scroll\r\n        [show]=\"showHorizontalScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-horizontal-scroll>\r\n      <pdf-wrapped-scroll-mode\r\n        [show]=\"showWrappedScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-wrapped-scroll-mode>\r\n      <pdf-infinite-scroll\r\n        [show]=\"showInfiniteScrollButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-infinite-scroll>\r\n      <pdf-book-mode\r\n        [show]=\"showBookModeButton\"\r\n        [pageViewMode]=\"pageViewMode\"\r\n        (pageViewModeChange)=\"updatePageViewMode($event)\"\r\n        [scrollMode]=\"scrollMode\"\r\n      ></pdf-book-mode>\r\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\r\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\r\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"true\" [counterClockwise]=\"false\"> </pdf-rotate-page>\r\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\" [clockwise]=\"false\" [counterClockwise]=\"true\"> </pdf-rotate-page>\r\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\r\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\r\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\r\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\r\n\r\n      <pdf-editor [showDrawEditor]=\"showDrawEditor\" [showTextEditor]=\"showTextEditor\" [showStampEditor]=\"showStampEditor\"></pdf-editor>\r\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"> </pdf-toggle-secondary-toolbar>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: [""] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { customToolbar: [{
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
            }] } });

class PdfSecondaryToolbarComponent {
    constructor(element, notificationService, platformId, pdfShyButtonService, ngxExtendedPdfViewerService) {
        this.element = element;
        this.notificationService = notificationService;
        this.platformId = platformId;
        this.pdfShyButtonService = pdfShyButtonService;
        this.ngxExtendedPdfViewerService = ngxExtendedPdfViewerService;
        this.spreadChange = new EventEmitter();
        this.disablePreviousPage = true;
        this.disableNextPage = true;
        this.notificationService.onPDFJSInit.pipe(take(1)).subscribe(() => {
            this.onPdfJsInit();
        });
    }
    onPdfJsInit() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.on('pagechanging', () => {
            this.updateUIState();
        });
        PDFViewerApplication.eventBus.on('pagerendered', () => {
            this.updateUIState();
        });
    }
    updateUIState() {
        setTimeout(() => {
            const PDFViewerApplication = window.PDFViewerApplication;
            const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
            const previousButton = document.getElementById('previousPage');
            if (previousButton) {
                this.disablePreviousPage = Number(currentPage) <= 1;
                previousButton.disabled = this.disablePreviousPage;
            }
            const nextButton = document.getElementById('nextPage');
            if (nextButton) {
                this.disableNextPage = currentPage === PDFViewerApplication.pagesCount;
                nextButton.disabled = this.disableNextPage;
            }
        });
    }
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    ngOnChanges(changes) {
        setTimeout(() => this.checkVisibility());
    }
    onResize() {
        setTimeout(() => this.checkVisibility());
    }
    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            const targetNode = this.element.nativeElement;
            const config = { attributes: true, childList: true, subtree: true };
            this.classMutationObserver = new MutationObserver((mutationList, observer) => {
                for (const mutation of mutationList) {
                    if (mutation.type === 'attributes') {
                        if (mutation.attributeName === 'class') {
                            this.checkVisibility();
                            break;
                        }
                    }
                    else if (mutation.type === 'childList') {
                        this.checkVisibility();
                        break;
                    }
                }
            });
            this.classMutationObserver.observe(targetNode, config);
        }
    }
    ngOnDestroy() {
        if (this.classMutationObserver) {
            this.classMutationObserver.disconnect();
            this.classMutationObserver = undefined;
        }
    }
    checkVisibility() {
        let visibleButtons = 0;
        const e = this.element.nativeElement;
        const f = e.children.item(0);
        if (f) {
            const g = f.children.item(0);
            if (g && g instanceof HTMLElement) {
                visibleButtons = this.checkVisibilityRecursively(g);
            }
        }
        this.ngxExtendedPdfViewerService.secondaryMenuIsEmpty = visibleButtons === 0;
    }
    checkVisibilityRecursively(e) {
        if (typeof window === 'undefined') {
            // server-side rendering
            return 0;
        }
        if (e.style.display === 'none') {
            return 0;
        }
        if (e.classList.contains('hidden')) {
            return 0;
        }
        if (e.classList.contains('invisible')) {
            return 0;
        }
        const style = window.getComputedStyle(e);
        if (style.display === 'none') {
            return 0;
        }
        if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
            return 1;
        }
        let count = 0;
        const children = e.children;
        if (children === null || children === void 0 ? void 0 : children.length) {
            for (let i = 0; i < children.length && count === 0; i++) {
                const child = children.item(i);
                if (child && child instanceof HTMLElement) {
                    count += this.checkVisibilityRecursively(child);
                }
            }
        }
        return count;
    }
    onClick(htmlevent, action, eventBusName, closeOnClick) {
        const PDFViewerApplication = window.PDFViewerApplication;
        const origin = htmlevent.target;
        origin === null || origin === void 0 ? void 0 : origin.classList.add('toggled');
        if (action) {
            action();
            htmlevent.preventDefault();
        }
        else if (eventBusName) {
            PDFViewerApplication.eventBus.dispatch(eventBusName);
            htmlevent.preventDefault();
        }
        if (closeOnClick) {
            PDFViewerApplication.secondaryToolbar.close();
        }
    }
}
PdfSecondaryToolbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSecondaryToolbarComponent, deps: [{ token: i0.ElementRef }, { token: PDFNotificationService }, { token: PLATFORM_ID }, { token: PdfShyButtonService }, { token: NgxExtendedPdfViewerService }], target: i0.ɵɵFactoryTarget.Component });
PdfSecondaryToolbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSecondaryToolbarComponent, selector: "pdf-secondary-toolbar", inputs: { customSecondaryToolbar: "customSecondaryToolbar", secondaryToolbarTop: "secondaryToolbarTop", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", localizationInitialized: "localizationInitialized" }, outputs: { spreadChange: "spreadChange" }, host: { listeners: { "window:resize": "onResize()" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\r\n\r\n<ng-template #defaultSecondaryToolbar>\r\n  <div\r\n    id=\"secondaryToolbar\"\r\n    class=\"secondaryToolbar hidden doorHangerRight\"\r\n    [style.top]=\"secondaryToolbarTop\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'right top'\"\r\n  >\r\n    <div id=\"secondaryToolbarButtonContainer\">\r\n      <button\r\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\r\n        type=\"button\"\r\n        [id]=\"button.id\"\r\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\r\n        [class.toggled]=\"button.toggled\"\r\n        class=\"secondaryToolbarButton\"\r\n        [title]=\"button.title\"\r\n        [attr.data-l10n-id]=\"button.l10nId\"\r\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\r\n        [attr.aria-label]=\"button.title\"\r\n        role=\"button\"\r\n      >\r\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\r\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"], directives: [{ type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "invertForSecondaryToolbar": NegativeResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSecondaryToolbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-secondary-toolbar', template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\r\n\r\n<ng-template #defaultSecondaryToolbar>\r\n  <div\r\n    id=\"secondaryToolbar\"\r\n    class=\"secondaryToolbar hidden doorHangerRight\"\r\n    [style.top]=\"secondaryToolbarTop\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'right top'\"\r\n  >\r\n    <div id=\"secondaryToolbarButtonContainer\">\r\n      <button\r\n        *ngFor=\"let button of pdfShyButtonService.buttons\"\r\n        type=\"button\"\r\n        [id]=\"button.id\"\r\n        [ngClass]=\"button.cssClass | invertForSecondaryToolbar\"\r\n        [class.toggled]=\"button.toggled\"\r\n        class=\"secondaryToolbarButton\"\r\n        [title]=\"button.title\"\r\n        [attr.data-l10n-id]=\"button.l10nId\"\r\n        (click)=\"onClick($event, button.action, button.eventBusName, button.closeOnClick)\"\r\n        [attr.aria-label]=\"button.title\"\r\n        role=\"button\"\r\n      >\r\n        <span class=\"icon\" role=\"img\" aria-hidden=\"true\" [attr.aria-label]=\"button.title\" *ngIf=\"button.image\" [innerHTML]=\"button.image\"></span>\r\n        <span class=\"toolbar-caption\" [attr.data-l10n-id]=\"button.l10nLabel\">{{ button.title }}</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n", styles: ["svg{position:absolute;display:inline-block;top:0;left:0}.secondaryToolbarButton{display:inline-flex;align-items:center;justify-content:flex-start;border:0 none;background:none;width:calc(100% - 4px);height:25px;position:relative;margin:0 0 4px;padding:3px 0 1px;min-height:25px;white-space:normal}.secondaryToolbarButton span{display:inline-block}.secondaryToolbarButton[disabled]{opacity:.5}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-left:4px;text-align:left}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton{padding-right:4px;text-align:right}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-right:4px}::ng-deep html[dir=rtl] ngx-extended-pdf-viewer .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbar{height:auto;z-index:3000}::ng-deep html[dir=ltr] ngx-extended-pdf-viewer .secondaryToolbar{right:4px}::ng-deep [dir=rtl] ngx-extended-pdf-viewer .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{width:250px;max-height:775px;overflow-y:auto;-webkit-overflow-scrolling:touch}.toolbar-caption{position:relative;top:-3px}.icon{width:24px}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i0.ElementRef }, { type: PDFNotificationService }, { type: Object, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }, { type: PdfShyButtonService }, { type: NgxExtendedPdfViewerService }];
    }, propDecorators: { customSecondaryToolbar: [{
                type: Input
            }], secondaryToolbarTop: [{
                type: Input
            }], mobileFriendlyZoomScale: [{
                type: Input
            }], localizationInitialized: [{
                type: Input
            }], spreadChange: [{
                type: Output
            }], onResize: [{
                type: HostListener,
                args: ['window:resize']
            }] } });

class PdfSearchInputFieldComponent {
}
PdfSearchInputFieldComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSearchInputFieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfSearchInputFieldComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfSearchInputFieldComponent, selector: "pdf-search-input-field", ngImport: i0, template: "<input\r\n  autocomplete=\"off\"\r\n  id=\"findInput\"\r\n  class=\"toolbarField\"\r\n  title=\"Find\"\r\n  [placeholder]=\"'Find in document\u2026'\"\r\n  data-l10n-id=\"find_input\"\r\n  name=\"search-input-field\"\r\n/>\r\n", styles: ["textarea{width:200px;height:3.5em}textarea::placeholder{font-style:italic}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfSearchInputFieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-search-input-field', template: "<input\r\n  autocomplete=\"off\"\r\n  id=\"findInput\"\r\n  class=\"toolbarField\"\r\n  title=\"Find\"\r\n  [placeholder]=\"'Find in document\u2026'\"\r\n  data-l10n-id=\"find_input\"\r\n  name=\"search-input-field\"\r\n/>\r\n", styles: ["textarea{width:200px;height:3.5em}textarea::placeholder{font-style:italic}\n"] }]
        }] });

class PdfFindPreviousComponent {
}
PdfFindPreviousComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindPreviousComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindPreviousComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindPreviousComponent, selector: "pdf-find-previous", ngImport: i0, template: "<button\r\n  type=\"button\"\r\n  id=\"findPrevious\"\r\n  class=\"toolbarButton\"\r\n  title=\"Find the previous occurrence of the phrase\"\r\n  data-l10n-id=\"find_previous\"\r\n  aria-label=\"Find the previous occurrence of the phrase\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Find the previous occurrence of the phrase\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"find_previous_label\">Previous</span>\r\n</button>\r\n", styles: ["button.toolbarButton#findPrevious{margin-top:0;width:24px;margin-left:1px!important}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindPreviousComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-previous', template: "<button\r\n  type=\"button\"\r\n  id=\"findPrevious\"\r\n  class=\"toolbarButton\"\r\n  title=\"Find the previous occurrence of the phrase\"\r\n  data-l10n-id=\"find_previous\"\r\n  aria-label=\"Find the previous occurrence of the phrase\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Find the previous occurrence of the phrase\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"find_previous_label\">Previous</span>\r\n</button>\r\n", styles: ["button.toolbarButton#findPrevious{margin-top:0;width:24px;margin-left:1px!important}\n"] }]
        }] });

class PdfFindNextComponent {
}
PdfFindNextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindNextComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindNextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindNextComponent, selector: "pdf-find-next", ngImport: i0, template: "<button\r\n  type=\"button\"\r\n  id=\"findNext\"\r\n  class=\"toolbarButton\"\r\n  title=\"Find the next occurrence of the phrase\"\r\n  data-l10n-id=\"find_next\"\r\n  aria-label=\"Find the next occurrence of the phrase\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Find the next occurrence of the phrase\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"find_next_label\">Next</span>\r\n</button>\r\n", styles: ["button.toolbarButton#findNext{margin-top:0;margin-left:-4px!important;margin-right:3px!important;width:24px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindNextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-next', template: "<button\r\n  type=\"button\"\r\n  id=\"findNext\"\r\n  class=\"toolbarButton\"\r\n  title=\"Find the next occurrence of the phrase\"\r\n  data-l10n-id=\"find_next\"\r\n  aria-label=\"Find the next occurrence of the phrase\"\r\n>\r\n  <svg role=\"img\" aria-label=\"Find the next occurrence of the phrase\" style=\"width: 24px; height: 24px\" viewBox=\"0 0 24 24\">\r\n    <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\r\n  </svg>\r\n  <span data-l10n-id=\"find_next_label\">Next</span>\r\n</button>\r\n", styles: ["button.toolbarButton#findNext{margin-top:0;margin-left:-4px!important;margin-right:3px!important;width:24px}\n"] }]
        }] });

class PdfFindInputAreaComponent {
}
PdfFindInputAreaComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindInputAreaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindInputAreaComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindInputAreaComponent, selector: "pdf-find-input-area", inputs: { customFindbarInputArea: "customFindbarInputArea" }, ngImport: i0, template: "<div id=\"findbarInputContainer\" *ngIf=\"!customFindbarInputArea\">\r\n  <pdf-search-input-field></pdf-search-input-field>\r\n  <pdf-find-previous></pdf-find-previous>\r\n  <pdf-find-next></pdf-find-next>\r\n</div>\r\n\r\n<ng-container [ngTemplateOutlet]=\"customFindbarInputArea || null\"> </ng-container>\r\n", styles: [""], components: [{ type: PdfSearchInputFieldComponent, selector: "pdf-search-input-field" }, { type: PdfFindPreviousComponent, selector: "pdf-find-previous" }, { type: PdfFindNextComponent, selector: "pdf-find-next" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindInputAreaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-input-area', template: "<div id=\"findbarInputContainer\" *ngIf=\"!customFindbarInputArea\">\r\n  <pdf-search-input-field></pdf-search-input-field>\r\n  <pdf-find-previous></pdf-find-previous>\r\n  <pdf-find-next></pdf-find-next>\r\n</div>\r\n\r\n<ng-container [ngTemplateOutlet]=\"customFindbarInputArea || null\"> </ng-container>\r\n", styles: [""] }]
        }], propDecorators: { customFindbarInputArea: [{
                type: Input
            }] } });

class PdfFindHighlightAllComponent {
}
PdfFindHighlightAllComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindHighlightAllComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindHighlightAllComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindHighlightAllComponent, selector: "pdf-find-highlight-all", ngImport: i0, template: "<input\r\n  type=\"checkbox\"\r\n  id=\"findHighlightAll\"\r\n  class=\"toolbarField\"\r\n/>\r\n<label\r\n  for=\"findHighlightAll\"\r\n  class=\"toolbarLabel\"\r\n  data-l10n-id=\"find_highlight\">\r\n  Highlight all\r\n</label>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindHighlightAllComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-highlight-all', template: "<input\r\n  type=\"checkbox\"\r\n  id=\"findHighlightAll\"\r\n  class=\"toolbarField\"\r\n/>\r\n<label\r\n  for=\"findHighlightAll\"\r\n  class=\"toolbarLabel\"\r\n  data-l10n-id=\"find_highlight\">\r\n  Highlight all\r\n</label>\r\n", styles: [""] }]
        }] });

class PdfFindMatchCaseComponent {
}
PdfFindMatchCaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindMatchCaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindMatchCaseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindMatchCaseComponent, selector: "pdf-find-match-case", ngImport: i0, template: "<input\r\n  type=\"checkbox\"\r\n  id=\"findMatchCase\"\r\n  class=\"toolbarField\"\r\n/>\r\n<label\r\n  for=\"findMatchCase\"\r\n  class=\"toolbarLabel\"\r\n  data-l10n-id=\"find_match_case_label\">\r\n    Match case\r\n</label>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindMatchCaseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-match-case', template: "<input\r\n  type=\"checkbox\"\r\n  id=\"findMatchCase\"\r\n  class=\"toolbarField\"\r\n/>\r\n<label\r\n  for=\"findMatchCase\"\r\n  class=\"toolbarLabel\"\r\n  data-l10n-id=\"find_match_case_label\">\r\n    Match case\r\n</label>\r\n", styles: [""] }]
        }] });

class PdfMatchDiacriticsComponent {
}
PdfMatchDiacriticsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfMatchDiacriticsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfMatchDiacriticsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfMatchDiacriticsComponent, selector: "pdf-match-diacritics", ngImport: i0, template: "<input type=\"checkbox\" id=\"findMatchDiacritics\" class=\"toolbarField\" tabindex=\"96\" />\r\n<label for=\"findMatchDiacritics\" class=\"toolbarLabel\" data-l10n-id=\"find_match_diacritics_label\">Match Diacritics</label>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfMatchDiacriticsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-match-diacritics', template: "<input type=\"checkbox\" id=\"findMatchDiacritics\" class=\"toolbarField\" tabindex=\"96\" />\r\n<label for=\"findMatchDiacritics\" class=\"toolbarLabel\" data-l10n-id=\"find_match_diacritics_label\">Match Diacritics</label>\r\n", styles: [] }]
        }] });

class PdfFindEntireWordComponent {
}
PdfFindEntireWordComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindEntireWordComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindEntireWordComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindEntireWordComponent, selector: "pdf-find-entire-word", ngImport: i0, template: "<input type=\"checkbox\" id=\"findEntireWord\" class=\"toolbarField\" />\r\n<label for=\"findEntireWord\" class=\"toolbarLabel\" data-l10n-id=\"find_entire_word_label\"> Whole words </label>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindEntireWordComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-entire-word', template: "<input type=\"checkbox\" id=\"findEntireWord\" class=\"toolbarField\" />\r\n<label for=\"findEntireWord\" class=\"toolbarLabel\" data-l10n-id=\"find_entire_word_label\"> Whole words </label>\r\n", styles: [""] }]
        }] });

class PdfFindResultsCountComponent {
}
PdfFindResultsCountComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindResultsCountComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindResultsCountComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindResultsCountComponent, selector: "pdf-find-results-count", ngImport: i0, template: "<div id=\"findbarMessageContainer\" aria-live=\"polite\">\r\n  <span id=\"findResultsCount\" class=\"toolbarLabel\"></span>\r\n  <span id=\"findMsg\" class=\"toolbarLabel\"></span>\r\n</div>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindResultsCountComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-find-results-count', template: "<div id=\"findbarMessageContainer\" aria-live=\"polite\">\r\n  <span id=\"findResultsCount\" class=\"toolbarLabel\"></span>\r\n  <span id=\"findMsg\" class=\"toolbarLabel\"></span>\r\n</div>\r\n", styles: [""] }]
        }] });

class PdfFindbarMessageContainerComponent {
}
PdfFindbarMessageContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindbarMessageContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindbarMessageContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindbarMessageContainerComponent, selector: "pdf-findbar-message-container", ngImport: i0, template: "<div id=\"findbarMessageContainer\">\r\n  <span id=\"findMsg\" class=\"toolbarLabel\"></span>\r\n</div>\r\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindbarMessageContainerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-findbar-message-container', template: "<div id=\"findbarMessageContainer\">\r\n  <span id=\"findMsg\" class=\"toolbarLabel\"></span>\r\n</div>\r\n", styles: [""] }]
        }] });

class PdfFindbarComponent {
    constructor() {
        this.showFindButton = true;
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
    }
}
PdfFindbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindbarComponent, selector: "pdf-findbar", inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages" }, ngImport: i0, template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\"> </ng-container>\r\n\r\n<ng-template #defaultFindbar>\r\n  <div\r\n    class=\"findbar hidden doorHanger\"\r\n    id=\"findbar\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'left top'\"\r\n    [style.left]=\"findbarLeft\"\r\n    [style.top]=\"findbarTop\"\r\n  >\r\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFindbarButtons>\r\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\r\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\r\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\r\n  <pdf-match-diacritics [class.hidden]=\"!showFindMatchDiacritics\"></pdf-match-diacritics>\r\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\r\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\r\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\r\n</ng-template>\r\n", styles: [""], components: [{ type: PdfFindInputAreaComponent, selector: "pdf-find-input-area", inputs: ["customFindbarInputArea"] }, { type: PdfFindHighlightAllComponent, selector: "pdf-find-highlight-all" }, { type: PdfFindMatchCaseComponent, selector: "pdf-find-match-case" }, { type: PdfMatchDiacriticsComponent, selector: "pdf-match-diacritics" }, { type: PdfFindEntireWordComponent, selector: "pdf-find-entire-word" }, { type: PdfFindResultsCountComponent, selector: "pdf-find-results-count" }, { type: PdfFindbarMessageContainerComponent, selector: "pdf-findbar-message-container" }], directives: [{ type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-findbar', template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\"> </ng-container>\r\n\r\n<ng-template #defaultFindbar>\r\n  <div\r\n    class=\"findbar hidden doorHanger\"\r\n    id=\"findbar\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'left top'\"\r\n    [style.left]=\"findbarLeft\"\r\n    [style.top]=\"findbarTop\"\r\n  >\r\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFindbarButtons>\r\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\r\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\r\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\r\n  <pdf-match-diacritics [class.hidden]=\"!showFindMatchDiacritics\"></pdf-match-diacritics>\r\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\r\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\r\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\r\n</ng-template>\r\n", styles: [""] }]
        }], propDecorators: { showFindButton: [{
                type: Input
            }], mobileFriendlyZoomScale: [{
                type: Input
            }], findbarLeft: [{
                type: Input
            }], findbarTop: [{
                type: Input
            }], customFindbarInputArea: [{
                type: Input
            }], customFindbar: [{
                type: Input
            }], customFindbarButtons: [{
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
            }] } });

class PdfContextMenuComponent {
}
PdfContextMenuComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfContextMenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfContextMenuComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfContextMenuComponent, selector: "pdf-context-menu", ngImport: i0, template: "<!-- the context menu is deactivated because only Firefox supports it -->\r\n<div style=\"display:none\" type=\"context\" id=\"viewerContextMenu\">\r\n  <div style=\"display:none\" id=\"contextFirstPage\"></div>\r\n  <div style=\"display:none\" id=\"contextLastPage\"></div>\r\n  <div style=\"display:none\" id=\"contextPageRotateCw\"></div>\r\n  <div style=\"display:none\" id=\"contextPageRotateCcw\"></div>\r\n</div>\r\n", styles: [":host{margin-top:4px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfContextMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-context-menu', template: "<!-- the context menu is deactivated because only Firefox supports it -->\r\n<div style=\"display:none\" type=\"context\" id=\"viewerContextMenu\">\r\n  <div style=\"display:none\" id=\"contextFirstPage\"></div>\r\n  <div style=\"display:none\" id=\"contextLastPage\"></div>\r\n  <div style=\"display:none\" id=\"contextPageRotateCw\"></div>\r\n  <div style=\"display:none\" id=\"contextPageRotateCcw\"></div>\r\n</div>\r\n", styles: [":host{margin-top:4px}\n"] }]
        }] });

class PdfErrorMessageComponent {
}
PdfErrorMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfErrorMessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfErrorMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfErrorMessageComponent, selector: "pdf-error-message", ngImport: i0, template: "<div id=\"errorWrapper\" hidden=\"true\">\r\n  <div id=\"errorMessageLeft\">\r\n    <span id=\"errorMessage\"></span>\r\n    <button type=\"button\" id=\"errorShowMore\">More Information</button>\r\n    <button type=\"button\" id=\"errorShowLess\" hidden=\"true\">Less Information</button>\r\n  </div>\r\n  <div id=\"errorMessageRight\">\r\n    <button type=\"button\" id=\"errorClose\">Close</button>\r\n  </div>\r\n  <div class=\"clearBoth\"></div>\r\n  <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\r\n</div>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfErrorMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-error-message', template: "<div id=\"errorWrapper\" hidden=\"true\">\r\n  <div id=\"errorMessageLeft\">\r\n    <span id=\"errorMessage\"></span>\r\n    <button type=\"button\" id=\"errorShowMore\">More Information</button>\r\n    <button type=\"button\" id=\"errorShowLess\" hidden=\"true\">Less Information</button>\r\n  </div>\r\n  <div id=\"errorMessageRight\">\r\n    <button type=\"button\" id=\"errorClose\">Close</button>\r\n  </div>\r\n  <div class=\"clearBoth\"></div>\r\n  <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\r\n</div>\r\n" }]
        }] });

class PdfPasswordDialogComponent {
}
PdfPasswordDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPasswordDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPasswordDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPasswordDialogComponent, selector: "pdf-password-dialog", ngImport: i0, template: "<dialog id=\"passwordDialog\">\r\n  <div class=\"row\">\r\n    <label for=\"password\" id=\"passwordText\" data-l10n-id=\"password_label\">Enter the password to open this PDF\r\n      file:</label>\r\n  </div>\r\n  <div class=\"row\">\r\n    <input type=\"hidden\" id=\"password\" class=\"toolbarField\" />\r\n  </div>\r\n  <div class=\"buttonRow\">\r\n    <button id=\"passwordCancel\" class=\"dialogButton\"><span data-l10n-id=\"password_cancel\">Cancel</span></button>\r\n    <button id=\"passwordSubmit\" class=\"dialogButton\"><span data-l10n-id=\"password_ok\">OK</span></button>\r\n  </div>\r\n</dialog>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPasswordDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-password-dialog', template: "<dialog id=\"passwordDialog\">\r\n  <div class=\"row\">\r\n    <label for=\"password\" id=\"passwordText\" data-l10n-id=\"password_label\">Enter the password to open this PDF\r\n      file:</label>\r\n  </div>\r\n  <div class=\"row\">\r\n    <input type=\"hidden\" id=\"password\" class=\"toolbarField\" />\r\n  </div>\r\n  <div class=\"buttonRow\">\r\n    <button id=\"passwordCancel\" class=\"dialogButton\"><span data-l10n-id=\"password_cancel\">Cancel</span></button>\r\n    <button id=\"passwordSubmit\" class=\"dialogButton\"><span data-l10n-id=\"password_ok\">OK</span></button>\r\n  </div>\r\n</dialog>\r\n" }]
        }] });

class PdfDocumentPropertiesDialogComponent {
}
PdfDocumentPropertiesDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDocumentPropertiesDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDocumentPropertiesDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDocumentPropertiesDialogComponent, selector: "pdf-document-properties-dialog", ngImport: i0, template: "<dialog id=\"documentPropertiesDialog\">\r\n  <div class=\"row\">\r\n    <span id=\"fileNameLabel\" data-l10n-id=\"document_properties_file_name\">File name:</span>\r\n    <p id=\"fileNameField\" aria-labelledby=\"fileNameLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"fileSizeLabel\" data-l10n-id=\"document_properties_file_size\">File size:</span>\r\n    <p id=\"fileSizeField\" aria-labelledby=\"fileSizeLabel\">-</p>\r\n  </div>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"row\">\r\n    <span id=\"titleLabel\" data-l10n-id=\"document_properties_title\">Title:</span>\r\n    <p id=\"titleField\" aria-labelledby=\"titleLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"authorLabel\" data-l10n-id=\"document_properties_author\">Author:</span>\r\n    <p id=\"authorField\" aria-labelledby=\"authorLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"subjectLabel\" data-l10n-id=\"document_properties_subject\">Subject:</span>\r\n    <p id=\"subjectField\" aria-labelledby=\"subjectLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"keywordsLabel\" data-l10n-id=\"document_properties_keywords\">Keywords:</span>\r\n    <p id=\"keywordsField\" aria-labelledby=\"keywordsLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"creationDateLabel\" data-l10n-id=\"document_properties_creation_date\">Creation Date:</span>\r\n    <p id=\"creationDateField\" aria-labelledby=\"creationDateLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"modificationDateLabel\" data-l10n-id=\"document_properties_modification_date\">Modification Date:</span>\r\n    <p id=\"modificationDateField\" aria-labelledby=\"modificationDateLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"creatorLabel\" data-l10n-id=\"document_properties_creator\">Creator:</span>\r\n    <p id=\"creatorField\" aria-labelledby=\"creatorLabel\">-</p>\r\n  </div>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"row\">\r\n    <span id=\"producerLabel\" data-l10n-id=\"document_properties_producer\">PDF Producer:</span>\r\n    <p id=\"producerField\" aria-labelledby=\"producerLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"versionLabel\" data-l10n-id=\"document_properties_version\">PDF Version:</span>\r\n    <p id=\"versionField\" aria-labelledby=\"versionLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"pageCountLabel\" data-l10n-id=\"document_properties_page_count\">Page Count:</span>\r\n    <p id=\"pageCountField\" aria-labelledby=\"pageCountLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"pageSizeLabel\" data-l10n-id=\"document_properties_page_size\">Page Size:</span>\r\n    <p id=\"pageSizeField\" aria-labelledby=\"pageSizeLabel\">-</p>\r\n  </div>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"row\">\r\n    <span id=\"linearizedLabel\" data-l10n-id=\"document_properties_linearized\">Fast Web View:</span>\r\n    <p id=\"linearizedField\" aria-labelledby=\"linearizedLabel\">-</p>\r\n  </div>\r\n  <div class=\"buttonRow\">\r\n    <button id=\"documentPropertiesClose\" class=\"dialogButton\" type=\"button\"><span data-l10n-id=\"document_properties_close\">Close</span></button>\r\n  </div>\r\n</dialog>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDocumentPropertiesDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-document-properties-dialog', template: "<dialog id=\"documentPropertiesDialog\">\r\n  <div class=\"row\">\r\n    <span id=\"fileNameLabel\" data-l10n-id=\"document_properties_file_name\">File name:</span>\r\n    <p id=\"fileNameField\" aria-labelledby=\"fileNameLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"fileSizeLabel\" data-l10n-id=\"document_properties_file_size\">File size:</span>\r\n    <p id=\"fileSizeField\" aria-labelledby=\"fileSizeLabel\">-</p>\r\n  </div>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"row\">\r\n    <span id=\"titleLabel\" data-l10n-id=\"document_properties_title\">Title:</span>\r\n    <p id=\"titleField\" aria-labelledby=\"titleLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"authorLabel\" data-l10n-id=\"document_properties_author\">Author:</span>\r\n    <p id=\"authorField\" aria-labelledby=\"authorLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"subjectLabel\" data-l10n-id=\"document_properties_subject\">Subject:</span>\r\n    <p id=\"subjectField\" aria-labelledby=\"subjectLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"keywordsLabel\" data-l10n-id=\"document_properties_keywords\">Keywords:</span>\r\n    <p id=\"keywordsField\" aria-labelledby=\"keywordsLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"creationDateLabel\" data-l10n-id=\"document_properties_creation_date\">Creation Date:</span>\r\n    <p id=\"creationDateField\" aria-labelledby=\"creationDateLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"modificationDateLabel\" data-l10n-id=\"document_properties_modification_date\">Modification Date:</span>\r\n    <p id=\"modificationDateField\" aria-labelledby=\"modificationDateLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"creatorLabel\" data-l10n-id=\"document_properties_creator\">Creator:</span>\r\n    <p id=\"creatorField\" aria-labelledby=\"creatorLabel\">-</p>\r\n  </div>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"row\">\r\n    <span id=\"producerLabel\" data-l10n-id=\"document_properties_producer\">PDF Producer:</span>\r\n    <p id=\"producerField\" aria-labelledby=\"producerLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"versionLabel\" data-l10n-id=\"document_properties_version\">PDF Version:</span>\r\n    <p id=\"versionField\" aria-labelledby=\"versionLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"pageCountLabel\" data-l10n-id=\"document_properties_page_count\">Page Count:</span>\r\n    <p id=\"pageCountField\" aria-labelledby=\"pageCountLabel\">-</p>\r\n  </div>\r\n  <div class=\"row\">\r\n    <span id=\"pageSizeLabel\" data-l10n-id=\"document_properties_page_size\">Page Size:</span>\r\n    <p id=\"pageSizeField\" aria-labelledby=\"pageSizeLabel\">-</p>\r\n  </div>\r\n  <div class=\"separator\"></div>\r\n  <div class=\"row\">\r\n    <span id=\"linearizedLabel\" data-l10n-id=\"document_properties_linearized\">Fast Web View:</span>\r\n    <p id=\"linearizedField\" aria-labelledby=\"linearizedLabel\">-</p>\r\n  </div>\r\n  <div class=\"buttonRow\">\r\n    <button id=\"documentPropertiesClose\" class=\"dialogButton\" type=\"button\"><span data-l10n-id=\"document_properties_close\">Close</span></button>\r\n  </div>\r\n</dialog>\r\n" }]
        }] });

class PdfPreparePrintingDialogComponent {
}
PdfPreparePrintingDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPreparePrintingDialogComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPreparePrintingDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPreparePrintingDialogComponent, selector: "pdf-prepare-printing-dialog", ngImport: i0, template: "<dialog id=\"printServiceDialog\" style=\"min-width: 200px\">\r\n  <div class=\"row\">\r\n    <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <progress value=\"0\" max=\"100\"></progress>\r\n    <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\r\n  </div>\r\n  <div class=\"buttonRow\">\r\n    <button id=\"printCancel\" class=\"dialogButton\" type=\"button\">\r\n      <span data-l10n-id=\"print_progress_close\">Cancel</span></button>\r\n  </div>\r\n</dialog>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPreparePrintingDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-prepare-printing-dialog', template: "<dialog id=\"printServiceDialog\" style=\"min-width: 200px\">\r\n  <div class=\"row\">\r\n    <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\r\n  </div>\r\n  <div class=\"row\">\r\n    <progress value=\"0\" max=\"100\"></progress>\r\n    <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\r\n  </div>\r\n  <div class=\"buttonRow\">\r\n    <button id=\"printCancel\" class=\"dialogButton\" type=\"button\">\r\n      <span data-l10n-id=\"print_progress_close\">Cancel</span></button>\r\n  </div>\r\n</dialog>\r\n" }]
        }] });

class TranslatePipe {
    transform(key, fallback) {
        return this.translate(key, fallback);
    }
    translate(key, englishText) {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            return PDFViewerApplication.l10n.get(key, null, englishText);
        });
    }
}
TranslatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TranslatePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
TranslatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TranslatePipe, name: "translate" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: TranslatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate'
                }]
        }] });

function isIOS() {
    if (typeof window === 'undefined') {
        // server-side rendering
        return false;
    }
    return (['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document));
}
class NgxExtendedPdfViewerComponent {
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
                PDFViewerApplicationOptions === null || PDFViewerApplicationOptions === void 0 ? void 0 : PDFViewerApplicationOptions.set('pageViewMode', this.pageViewMode);
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
            if (PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfViewer) {
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
                            (() => __awaiter(this, void 0, void 0, function* () { return this.openPDF2(); }))();
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
        if (PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfSidebar) {
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
    needsES5() {
        return __awaiter(this, void 0, void 0, function* () {
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
            return !(yield this.supportsOptionalChaining());
        });
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
    overrideDefaultSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === 'undefined') {
                return; // server side rendering
            }
            const options = window.PDFViewerApplicationOptions;
            // tslint:disable-next-line:forin
            for (const key in pdfDefaultOptions) {
                options.set(key, pdfDefaultOptions[key]);
            }
            options.set('disablePreferences', true);
            yield this.setZoom();
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
        });
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
                    var _a, _b;
                    if (x.fileInput.files && x.fileInput.files.length >= 1) {
                        // drag and drop
                        this.srcChange.emit(x.fileInput.files[0].name);
                    }
                    else {
                        // regular file open dialog
                        const path = (_b = (_a = x.fileInput) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.replace('C:\\fakepath\\', '');
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
                var _a;
                const PDFViewerApplication = window.PDFViewerApplication;
                (_a = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfViewer) === null || _a === void 0 ? void 0 : _a.destroyBookMode();
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
                    this.updateFindMatchesCount.emit(Object.assign(Object.assign({}, result), { current: x.matchesCount.current, total: x.matchesCount.total, matches: PDFViewerApplication.findController._pageMatches, matchesLength: PDFViewerApplication.findController._pageMatchesLength }));
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
            setTimeout(() => __awaiter(this, void 0, void 0, function* () { return this.checkHeight(); }), 100);
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
                this.ngZone.runOutsideAngular(() => __awaiter(this, void 0, void 0, function* () {
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
                    yield PDFViewerApplication.open(options);
                    this.pdfLoadingStarts.emit({});
                    setTimeout(() => __awaiter(this, void 0, void 0, function* () { return this.setZoom(); }));
                }));
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
    openPDF2() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            this.overrideDefaultSettings();
            const PDFViewerApplication = window.PDFViewerApplication;
            PDFViewerApplication.pdfViewer.destroyBookMode();
            PDFViewerApplication.pdfViewer.stopRendering();
            PDFViewerApplication.pdfThumbnailViewer.stopRendering();
            // #802 clear the form data; otherwise the "download" dialogs opens
            (_b = (_a = PDFViewerApplication.pdfDocument) === null || _a === void 0 ? void 0 : _a.annotationStorage) === null || _b === void 0 ? void 0 : _b.resetModified();
            yield PDFViewerApplication.close();
            this.formSupport.reset();
            const options = {
                password: this.password,
                verbosity: this.logLevel,
            };
            if ((_c = this._src) === null || _c === void 0 ? void 0 : _c['range']) {
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
                yield PDFViewerApplication.open(options);
                this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount });
            }
            catch (error) {
                this.pdfLoadingFailed.emit(error);
            }
        });
    }
    selectCursorTool() {
        const PDFViewerApplication = window.PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    }
    ngOnDestroy() {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof window === 'undefined') {
                return; // fast escape for server side rendering
            }
            const PDFViewerApplication = window.PDFViewerApplication;
            (_a = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfViewer) === null || _a === void 0 ? void 0 : _a.destroyBookMode();
            (_b = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfViewer) === null || _b === void 0 ? void 0 : _b.stopRendering();
            (_c = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfThumbnailViewer) === null || _c === void 0 ? void 0 : _c.stopRendering();
            const originalPrint = NgxExtendedPdfViewerComponent.originalPrint;
            if (window && originalPrint && !originalPrint.toString().includes('printPdf')) {
                window.print = originalPrint;
            }
            const printContainer = document.querySelector('#printContainer');
            if (printContainer) {
                (_d = printContainer.parentElement) === null || _d === void 0 ? void 0 : _d.removeChild(printContainer);
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
                (_f = (_e = PDFViewerApplication.pdfDocument) === null || _e === void 0 ? void 0 : _e.annotationStorage) === null || _f === void 0 ? void 0 : _f.resetModified();
                this.formSupport.reset();
                PDFViewerApplication._cleanup();
                try {
                    yield PDFViewerApplication.close();
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
        });
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
    ngOnChanges(changes) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
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
                            (_a = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfViewer) === null || _a === void 0 ? void 0 : _a.destroyBookMode();
                            (_b = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfViewer) === null || _b === void 0 ? void 0 : _b.stopRendering();
                            (_c = PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfThumbnailViewer) === null || _c === void 0 ? void 0 : _c.stopRendering();
                        }
                        if (!!this._src) {
                            if (this.ngxExtendedPdfViewerIncompletelyInitialized) {
                                this.openPDF();
                            }
                            else {
                                yield this.openPDF2();
                            }
                        }
                        else {
                            // #802 clear the form data; otherwise the "download" dialogs opens
                            (_e = (_d = PDFViewerApplication.pdfDocument) === null || _d === void 0 ? void 0 : _d.annotationStorage) === null || _e === void 0 ? void 0 : _e.resetModified();
                            this.formSupport.reset();
                            let inputField = (_f = PDFViewerApplication.appConfig) === null || _f === void 0 ? void 0 : _f.openFileInput;
                            if (!inputField) {
                                inputField = document.querySelector('#fileInput');
                            }
                            if (inputField) {
                                inputField.value = '';
                            }
                            yield PDFViewerApplication.close();
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
                    yield this.setZoom();
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
                if (PDFViewerApplication === null || PDFViewerApplication === void 0 ? void 0 : PDFViewerApplication.pdfDocument) {
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
        });
    }
    setZoom() {
        return __awaiter(this, void 0, void 0, function* () {
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
                        const userSetting = yield PDFViewerApplication.store.get('zoom');
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
                    PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber !== null && zoomAsNumber !== void 0 ? zoomAsNumber : 'auto';
                }
            }
        });
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
    scrollSignatureWarningIntoView(pdf) {
        return __awaiter(this, void 0, void 0, function* () {
            /** This method has been inspired by https://medium.com/factory-mind/angular-pdf-forms-fa72b15c3fbd. Thanks, Jonny Fox! */
            this.hasSignature = false;
            for (let i = 1; i <= (pdf === null || pdf === void 0 ? void 0 : pdf.numPages); i++) {
                // track the current page
                const page = yield pdf.getPage(i);
                const annotations = yield page.getAnnotations();
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
            this.pdfLoaded.emit({ pagesCount: pdf === null || pdf === void 0 ? void 0 : pdf.numPages });
        });
    }
    zoomToPageWidth(event) {
        return __awaiter(this, void 0, void 0, function* () {
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
                yield this.setZoom();
            }
            else if (pdfDefaultOptions.doubleTapResetsZoomOnSecondDoubleTap) {
                if (this.previousZoom) {
                    this.zoom = this.previousZoom;
                }
                else {
                    this.zoom = 'page-width';
                }
                yield this.setZoom();
            }
            else {
                return;
            }
            const currentScale = PDFViewerApplication.pdfViewer.currentScale;
            const scaleCorrectionFactor = currentScale / previousScale - 1;
            const rect = PDFViewerApplication.pdfViewer.container.getBoundingClientRect();
            const dy = desiredCenterY - rect.top;
            PDFViewerApplication.pdfViewer.container.scrollTop += dy * scaleCorrectionFactor;
        });
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
NgxExtendedPdfViewerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxExtendedPdfViewerComponent, deps: [{ token: i0.NgZone }, { token: PLATFORM_ID }, { token: PDFNotificationService }, { token: i4.Location }, { token: i0.ElementRef }, { token: i4.PlatformLocation }, { token: i0.ChangeDetectorRef }, { token: NgxExtendedPdfViewerService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
NgxExtendedPdfViewerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: NgxExtendedPdfViewerComponent, selector: "ngx-extended-pdf-viewer", inputs: { customFindbarInputArea: "customFindbarInputArea", customToolbar: "customToolbar", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", customPdfViewer: "customPdfViewer", customSecondaryToolbar: "customSecondaryToolbar", customSidebar: "customSidebar", customThumbnail: "customThumbnail", customFreeFloatingBar: "customFreeFloatingBar", showFreeFloatingBar: "showFreeFloatingBar", enableDragAndDrop: "enableDragAndDrop", formData: "formData", disableForms: "disableForms", pageViewMode: "pageViewMode", scrollMode: "scrollMode", authorization: "authorization", httpHeaders: "httpHeaders", contextMenuAllowed: "contextMenuAllowed", enablePrint: "enablePrint", delayFirstView: "delayFirstView", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor", showDrawEditor: "showDrawEditor", logLevel: "logLevel", relativeCoordsOptions: "relativeCoordsOptions", minifiedJSLibraries: "minifiedJSLibraries", printResolution: "printResolution", rotation: "rotation", src: "src", base64Src: "base64Src", minHeight: "minHeight", height: "height", useBrowserLocale: "useBrowserLocale", forceUsingLegacyES5: "forceUsingLegacyES5", backgroundColor: "backgroundColor", filenameForDownload: "filenameForDownload", ignoreKeyboard: "ignoreKeyboard", ignoreKeys: "ignoreKeys", acceptKeys: "acceptKeys", imageResourcesPath: "imageResourcesPath", localeFolderPath: "localeFolderPath", language: "language", listenToURL: "listenToURL", nameddest: "nameddest", password: "password", replaceBrowserPrint: "replaceBrowserPrint", showUnverifiedSignatures: "showUnverifiedSignatures", startTabindex: "startTabindex", showSidebarButton: "showSidebarButton", sidebarVisible: "sidebarVisible", activeSidebarView: "activeSidebarView", findbarVisible: "findbarVisible", propertiesDialogVisible: "propertiesDialogVisible", showFindButton: "showFindButton", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages", showPagingButtons: "showPagingButtons", showZoomButtons: "showZoomButtons", showPresentationModeButton: "showPresentationModeButton", showOpenFileButton: "showOpenFileButton", showPrintButton: "showPrintButton", showDownloadButton: "showDownloadButton", theme: "theme", showToolbar: "showToolbar", showSecondaryToolbarButton: "showSecondaryToolbarButton", showSinglePageModeButton: "showSinglePageModeButton", showVerticalScrollButton: "showVerticalScrollButton", showHorizontalScrollButton: "showHorizontalScrollButton", showWrappedScrollButton: "showWrappedScrollButton", showInfiniteScrollButton: "showInfiniteScrollButton", showBookModeButton: "showBookModeButton", showRotateButton: "showRotateButton", handTool: "handTool", showHandToolButton: "showHandToolButton", showScrollingButton: "showScrollingButton", showSpreadButton: "showSpreadButton", showPropertiesButton: "showPropertiesButton", showBorders: "showBorders", spread: "spread", page: "page", pageLabel: "pageLabel", textLayer: "textLayer", zoom: "zoom", zoomLevels: "zoomLevels", maxZoom: "maxZoom", minZoom: "minZoom", mobileFriendlyZoom: "mobileFriendlyZoom" }, outputs: { formDataChange: "formDataChange", pageViewModeChange: "pageViewModeChange", progress: "progress", srcChange: "srcChange", scrollModeChange: "scrollModeChange", afterPrint: "afterPrint", beforePrint: "beforePrint", currentZoomFactor: "currentZoomFactor", rotationChange: "rotationChange", annotationLayerRendered: "annotationLayerRendered", annotationEditorLayerRendered: "annotationEditorLayerRendered", xfaLayerRendered: "xfaLayerRendered", outlineLoaded: "outlineLoaded", attachmentsloaded: "attachmentsloaded", layersloaded: "layersloaded", sidebarVisibleChange: "sidebarVisibleChange", activeSidebarViewChange: "activeSidebarViewChange", findbarVisibleChange: "findbarVisibleChange", propertiesDialogVisibleChange: "propertiesDialogVisibleChange", handToolChange: "handToolChange", spreadChange: "spreadChange", thumbnailDrawn: "thumbnailDrawn", pageChange: "pageChange", pageLabelChange: "pageLabelChange", pagesLoaded: "pagesLoaded", pageRender: "pageRender", pageRendered: "pageRendered", pdfDownloaded: "pdfDownloaded", pdfLoaded: "pdfLoaded", pdfLoadingStarts: "pdfLoadingStarts", pdfLoadingFailed: "pdfLoadingFailed", textLayerRendered: "textLayerRendered", annotationEditorModeChanged: "annotationEditorModeChanged", updateFindMatchesCount: "updateFindMatchesCount", updateFindState: "updateFindState", zoomChange: "zoomChange" }, host: { listeners: { "contextmenu": "onContextMenu()" } }, viewQueries: [{ propertyName: "dummyComponents", first: true, predicate: PdfDummyComponentsComponent, descendants: true }, { propertyName: "root", first: true, predicate: ["root"], descendants: true }, { propertyName: "secondaryToolbarComponent", first: true, predicate: ["pdfSecondaryToolbarComponent"], descendants: true }, { propertyName: "sidebarComponent", first: true, predicate: ["pdfsidebar"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-default-theme></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body pdf-js-version-{{ majorMinorPdfJsVersion }}\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"> </ng-content>\r\n          </div>\r\n          <pdf-sidebar\r\n            #pdfsidebar\r\n            [sidebarVisible]=\"sidebarVisible || false\"\r\n            [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\"\r\n            [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\"\r\n          >\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\"\r\n              [sidebarVisible]=\"sidebarVisible\"\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customToolbar]=\"customToolbar\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [(pageViewMode)]=\"pageViewMode\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [scrollMode]=\"scrollMode ?? 0\"\r\n              [showPropertiesButton]=\"showPropertiesButton\"\r\n              [showBookModeButton]=\"showBookModeButton\"\r\n              [showDownloadButton]=\"showDownloadButton\"\r\n              [showDrawEditor]=\"showDrawEditor\"\r\n              [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\"\r\n              [showHorizontalScrollButton]=\"showHorizontalScrollButton\"\r\n              [showInfiniteScrollButton]=\"showInfiniteScrollButton\"\r\n              [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton && pageViewMode !== 'book'\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\"\r\n              [showRotateButton]=\"showRotateButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !service.secondaryMenuIsEmpty\"\r\n              [showSidebarButton]=\"showSidebarButton\"\r\n              [showSinglePageModeButton]=\"showSinglePageModeButton\"\r\n              [showSpreadButton]=\"showSpreadButton\"\r\n              [showStampEditor]=\"showStampEditor\"\r\n              [showTextEditor]=\"showTextEditor\"\r\n              [showVerticalScrollButton]=\"showVerticalScrollButton\"\r\n              [showWrappedScrollButton]=\"showWrappedScrollButton\"\r\n              [showZoomButtons]=\"showZoomButtons && pageViewMode !== 'book'\"\r\n              [spread]=\"spread\"\r\n              [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\"\r\n              [toolbarWidth]=\"toolbarWidth\"\r\n              [zoomLevels]=\"zoomLevels\"\r\n              [findbarVisible]=\"findbarVisible\"\r\n            ></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_color\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_size\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\" max=\"100\" step=\"1\" tabindex=\"101\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_thickness\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\" step=\"1\" tabindex=\"103\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_opacity\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\" step=\"1\" tabindex=\"104\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <pdf-secondary-toolbar\r\n              #pdfSecondaryToolbarComponent\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              (spreadChange)=\"onSpreadChange($event)\"\r\n              [localizationInitialized]=\"localizationInitialized\"\r\n            >\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [findbarLeft]=\"findbarLeft\"\r\n              [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\"\r\n              [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\"\r\n              [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\"\r\n              [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\"\r\n              [showFindMatchDiacritics]=\"showFindMatchDiacritics\"\r\n              [showFindMatchCase]=\"showFindMatchCase\"\r\n              [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\"\r\n              [showFindResultsCount]=\"showFindResultsCount\"\r\n            >\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\" tabindex=\"0\" role=\"document\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                  'unverified_signature_warning'\r\n                    | translate\r\n                      : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                    | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" [class.server-side-rendering]=\"serverSideRendering\" />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}.server-side-rendering,.hidden{display:none}\n"], components: [{ type: PdfDarkThemeComponent, selector: "pdf-dark-theme" }, { type: PdfLightThemeComponent, selector: "pdf-light-theme" }, { type: PdfAcroformDefaultThemeComponent, selector: "pdf-acroform-default-theme" }, { type: DynamicCssComponent, selector: "pdf-dynamic-css", inputs: ["zoom", "width"] }, { type: PdfSidebarComponent, selector: "pdf-sidebar", inputs: ["sidebarPositionTop", "sidebarVisible", "mobileFriendlyZoomScale", "showSidebarButton", "customSidebar", "customThumbnail"], outputs: ["thumbnailDrawn"] }, { type: PdfDummyComponentsComponent, selector: "pdf-dummy-components" }, { type: PdfToolbarComponent, selector: "pdf-toolbar", inputs: ["customToolbar", "mobileFriendlyZoomScale", "primaryMenuVisible", "showDownloadButton", "showDrawEditor", "showTextEditor", "showStampEditor", "showFindButton", "showHandToolButton", "showOpenFileButton", "showPrintButton", "showPagingButtons", "showPresentationModeButton", "showRotateButton", "showSecondaryToolbarButton", "showSidebarButton", "sidebarVisible", "showZoomButtons", "textLayer", "toolbarMarginTop", "toolbarWidth", "zoomLevels", "pageViewMode", "spread", "scrollMode", "showPropertiesButton", "showSpreadButton", "showSinglePageModeButton", "showVerticalScrollButton", "showHorizontalScrollButton", "showWrappedScrollButton", "showInfiniteScrollButton", "showBookModeButton", "findbarVisible"], outputs: ["pageViewModeChange", "onToolbarLoaded"] }, { type: PdfSecondaryToolbarComponent, selector: "pdf-secondary-toolbar", inputs: ["customSecondaryToolbar", "secondaryToolbarTop", "mobileFriendlyZoomScale", "localizationInitialized"], outputs: ["spreadChange"] }, { type: PdfFindbarComponent, selector: "pdf-findbar", inputs: ["showFindButton", "mobileFriendlyZoomScale", "findbarLeft", "findbarTop", "customFindbarInputArea", "customFindbar", "customFindbarButtons", "showFindHighlightAll", "showFindMatchCase", "showFindCurrentPageOnly", "showFindPageRange", "showFindEntireWord", "showFindEntirePhrase", "showFindMatchDiacritics", "showFindFuzzySearch", "showFindResultsCount", "showFindMessages"] }, { type: PdfContextMenuComponent, selector: "pdf-context-menu" }, { type: PdfErrorMessageComponent, selector: "pdf-error-message" }, { type: PdfPasswordDialogComponent, selector: "pdf-password-dialog" }, { type: PdfDocumentPropertiesDialogComponent, selector: "pdf-document-properties-dialog" }, { type: PdfPreparePrintingDialogComponent, selector: "pdf-prepare-printing-dialog" }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }], pipes: { "async": i4.AsyncPipe, "translate": TranslatePipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxExtendedPdfViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-extended-pdf-viewer', changeDetection: ChangeDetectionStrategy.OnPush, template: "<pdf-dark-theme *ngIf=\"theme === 'dark'\"></pdf-dark-theme>\r\n<pdf-light-theme *ngIf=\"theme === 'light'\"></pdf-light-theme>\r\n<pdf-acroform-default-theme></pdf-acroform-default-theme>\r\n\r\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\r\n<ng-content *ngTemplateOutlet=\"customPdfViewer ? customPdfViewer : defaultPdfViewer\"></ng-content>\r\n\r\n<ng-template #defaultPdfViewer>\r\n  <div class=\"zoom\" [style.height]=\"minHeight ? minHeight : height\" #root>\r\n    <div class=\"html\">\r\n      <div class=\"body pdf-js-version-{{ majorMinorPdfJsVersion }}\" [style.backgroundColor]=\"backgroundColor\">\r\n        <div id=\"outerContainer\" (window:resize)=\"onResize()\">\r\n          <div class=\"free-floating-bar\" *ngIf=\"showFreeFloatingBar\">\r\n            <ng-content *ngTemplateOutlet=\"customFreeFloatingBar ? customFreeFloatingBar : defaultFreeFloatingBar\"> </ng-content>\r\n          </div>\r\n          <pdf-sidebar\r\n            #pdfsidebar\r\n            [sidebarVisible]=\"sidebarVisible || false\"\r\n            [showSidebarButton]=\"showSidebarButton\"\r\n            [customSidebar]=\"customSidebar\"\r\n            [customThumbnail]=\"customThumbnail\"\r\n            (thumbnailDrawn)=\"thumbnailDrawn.emit($event)\"\r\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n            [sidebarPositionTop]=\"sidebarPositionTop\"\r\n          >\r\n          </pdf-sidebar>\r\n          <div id=\"mainContainer\" [class.toolbar-hidden]=\"!primaryMenuVisible\">\r\n            <pdf-dummy-components></pdf-dummy-components>\r\n\r\n            <pdf-toolbar\r\n              (onToolbarLoaded)=\"onToolbarLoaded($event)\"\r\n              [sidebarVisible]=\"sidebarVisible\"\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customToolbar]=\"customToolbar\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [(pageViewMode)]=\"pageViewMode\"\r\n              [primaryMenuVisible]=\"primaryMenuVisible\"\r\n              [scrollMode]=\"scrollMode ?? 0\"\r\n              [showPropertiesButton]=\"showPropertiesButton\"\r\n              [showBookModeButton]=\"showBookModeButton\"\r\n              [showDownloadButton]=\"showDownloadButton\"\r\n              [showDrawEditor]=\"showDrawEditor\"\r\n              [showFindButton]=\"showFindButton\"\r\n              [showHandToolButton]=\"showHandToolButton\"\r\n              [showHorizontalScrollButton]=\"showHorizontalScrollButton\"\r\n              [showInfiniteScrollButton]=\"showInfiniteScrollButton\"\r\n              [showOpenFileButton]=\"showOpenFileButton\"\r\n              [showPagingButtons]=\"showPagingButtons\"\r\n              [showPresentationModeButton]=\"showPresentationModeButton && pageViewMode !== 'book'\"\r\n              [showPrintButton]=\"showPrintButton && enablePrint\"\r\n              [showRotateButton]=\"showRotateButton\"\r\n              [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !service.secondaryMenuIsEmpty\"\r\n              [showSidebarButton]=\"showSidebarButton\"\r\n              [showSinglePageModeButton]=\"showSinglePageModeButton\"\r\n              [showSpreadButton]=\"showSpreadButton\"\r\n              [showStampEditor]=\"showStampEditor\"\r\n              [showTextEditor]=\"showTextEditor\"\r\n              [showVerticalScrollButton]=\"showVerticalScrollButton\"\r\n              [showWrappedScrollButton]=\"showWrappedScrollButton\"\r\n              [showZoomButtons]=\"showZoomButtons && pageViewMode !== 'book'\"\r\n              [spread]=\"spread\"\r\n              [textLayer]=\"textLayer\"\r\n              [toolbarMarginTop]=\"toolbarMarginTop\"\r\n              [toolbarWidth]=\"toolbarWidth\"\r\n              [zoomLevels]=\"zoomLevels\"\r\n              [findbarVisible]=\"findbarVisible\"\r\n            ></pdf-toolbar>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorFreeTextParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_color\">Font Color</label>\r\n                  <input type=\"color\" id=\"editorFreeTextColor\" class=\"editorParamsColor\" tabindex=\"100\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorFreeTextFontSize\" class=\"editorParamsLabel\" data-l10n-id=\"editor_free_text_size\">Font Size</label>\r\n                  <input type=\"range\" id=\"editorFreeTextFontSize\" class=\"editorParamsSlider\" value=\"10\" min=\"5\" max=\"100\" step=\"1\" tabindex=\"101\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"editorParamsToolbar hidden doorHangerRight\" id=\"editorInkParamsToolbar\" [class.server-side-rendering]=\"serverSideRendering\">\r\n              <div class=\"editorParamsToolbarContainer\">\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkColor\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_color\">Color</label>\r\n                  <input type=\"color\" id=\"editorInkColor\" class=\"editorParamsColor\" tabindex=\"102\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkThickness\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_thickness\">Thickness</label>\r\n                  <input type=\"range\" id=\"editorInkThickness\" class=\"editorParamsSlider\" value=\"1\" min=\"1\" max=\"20\" step=\"1\" tabindex=\"103\" />\r\n                </div>\r\n                <div class=\"editorParamsSetter\">\r\n                  <label for=\"editorInkOpacity\" class=\"editorParamsLabel\" data-l10n-id=\"editor_ink_opacity\">Opacity</label>\r\n                  <input type=\"range\" id=\"editorInkOpacity\" class=\"editorParamsSlider\" value=\"100\" min=\"1\" max=\"100\" step=\"1\" tabindex=\"104\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <pdf-secondary-toolbar\r\n              #pdfSecondaryToolbarComponent\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [customSecondaryToolbar]=\"customSecondaryToolbar\"\r\n              [secondaryToolbarTop]=\"secondaryToolbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              (spreadChange)=\"onSpreadChange($event)\"\r\n              [localizationInitialized]=\"localizationInitialized\"\r\n            >\r\n            </pdf-secondary-toolbar>\r\n\r\n            <pdf-findbar\r\n              [class.server-side-rendering]=\"serverSideRendering\"\r\n              [findbarLeft]=\"findbarLeft\"\r\n              [findbarTop]=\"findbarTop\"\r\n              [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\r\n              [showFindButton]=\"showFindButton || false\"\r\n              [customFindbarInputArea]=\"customFindbarInputArea\"\r\n              [customFindbarButtons]=\"customFindbarButtons\"\r\n              [showFindCurrentPageOnly]=\"showFindCurrentPageOnly\"\r\n              [showFindEntirePhrase]=\"showFindEntirePhrase\"\r\n              [showFindEntireWord]=\"showFindEntireWord\"\r\n              [showFindFuzzySearch]=\"showFindFuzzySearch\"\r\n              [showFindHighlightAll]=\"showFindHighlightAll\"\r\n              [showFindMatchDiacritics]=\"showFindMatchDiacritics\"\r\n              [showFindMatchCase]=\"showFindMatchCase\"\r\n              [showFindMessages]=\"showFindMessages\"\r\n              [showFindPageRange]=\"showFindPageRange\"\r\n              [showFindResultsCount]=\"showFindResultsCount\"\r\n            >\r\n            </pdf-findbar>\r\n\r\n            <pdf-context-menu></pdf-context-menu>\r\n\r\n            <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\" [style.backgroundColor]=\"backgroundColor\" tabindex=\"0\" role=\"document\">\r\n              <div class=\"unverified-signature-warning\" *ngIf=\"hasSignature && showUnverifiedSignatures\">\r\n                {{\r\n                  'unverified_signature_warning'\r\n                    | translate\r\n                      : \"This PDF file contains a digital signature. The PDF viewer can't verify if the signature is valid.\r\n                Please download the file and open it in Acrobat Reader to verify the signature is valid.\"\r\n                    | async\r\n                }}\r\n              </div>\r\n              <div id=\"viewer\" class=\"pdfViewer\" (dblclick)=\"zoomToPageWidth($event)\"></div>\r\n            </div>\r\n            <pdf-error-message></pdf-error-message>\r\n          </div>\r\n          <!-- mainContainer -->\r\n\r\n          <div id=\"dialogContainer\">\r\n            <pdf-password-dialog></pdf-password-dialog>\r\n            <pdf-document-properties-dialog></pdf-document-properties-dialog>\r\n            <pdf-prepare-printing-dialog></pdf-prepare-printing-dialog>\r\n          </div>\r\n          <!-- dialogContainer -->\r\n        </div>\r\n        <!-- outerContainer -->\r\n        <input type=\"file\" id=\"fileInput\" class=\"hidden\" [class.server-side-rendering]=\"serverSideRendering\" />\r\n        <div id=\"printContainer\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFreeFloatingBar> </ng-template>\r\n", styles: ["#mainContainer.toolbar-hidden{margin-top:-30px}.server-side-rendering,.hidden{display:none}\n"] }]
        }], ctorParameters: function () {
        return [{ type: i0.NgZone }, { type: undefined, decorators: [{
                        type: Inject,
                        args: [PLATFORM_ID]
                    }] }, { type: PDFNotificationService }, { type: i4.Location }, { type: i0.ElementRef }, { type: i4.PlatformLocation }, { type: i0.ChangeDetectorRef }, { type: NgxExtendedPdfViewerService }, { type: i0.Renderer2 }];
    }, propDecorators: { dummyComponents: [{
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
            }] } });

globalThis['ngxConsoleFilter'] = (_level, _message) => {
    return true;
};
class NgxConsole {
    log(message, reason) {
        if (globalThis['ngxConsoleFilter']('log', message)) {
            if (reason !== undefined) {
                console.log(message, reason);
            }
            else {
                console.log(message);
            }
        }
    }
    error(message, reason) {
        if (globalThis['ngxConsoleFilter']('error', message)) {
            if (reason !== undefined) {
                console.error(message, reason);
            }
            else {
                console.error(message);
            }
        }
    }
    warn(message, reason) {
        if (globalThis['ngxConsoleFilter']('warn', message)) {
            if (reason !== undefined) {
                console.warn(message, reason);
            }
            else {
                console.warn(message);
            }
        }
    }
}
globalThis['ngxConsole'] = new NgxConsole();

// tslint:disable:max-line-length
if (new Date().getTime() === 0) {
    new NgxConsole().log('');
}
if (!Promise['allSettled']) {
    if (!!window['Zone'] && !window['__zone_symbol__Promise.allSettled']) {
        console.error("Please update zone.js to version 0.10.3 or higher. Otherwise, you'll run the slow ECMAScript 5 version even on modern browser that can run the fast ESMAScript 2015 version.");
    }
}
function isKeyIgnored(cmd, keycode) {
    const PDFViewerApplicationOptions = window.PDFViewerApplicationOptions;
    const ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    const acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
    if (keycode === 'WHEEL') {
        if (!!ignoreKeys && isKeyInList(ignoreKeys, cmd, 'WHEEL')) {
            return true;
        }
        if (!!acceptKeys && acceptKeys.length > 0) {
            return !isKeyInList(acceptKeys, cmd, 'WHEEL');
        }
        return false;
    }
    if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
        // ignore solitary SHIFT, ALT, CMD, and CTRL because they only make sense as two-key-combinations
        return true;
    }
    // cmd is a bit-array:
    // 1 == CTRL
    // 2 == ALT
    // 4 == SHIFT
    // 8 == META
    const ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
    if (!!ignoreKeyboard) {
        return true;
    }
    if (!!ignoreKeys && ignoreKeys.length > 0) {
        if (isKeyInList(ignoreKeys, cmd, keycode)) {
            return true;
        }
    }
    if (!!acceptKeys && acceptKeys.length > 0) {
        return !isKeyInList(acceptKeys, cmd, keycode);
    }
    return false;
}
function isKeyInList(settings, cmd, keycode) {
    if (!settings) {
        return true;
    }
    return settings.some((keyDef) => isKey(keyDef, cmd, keycode));
}
function isKey(keyDef, cmd, keycode) {
    let cmdDef = 0;
    let key = 0;
    keyDef = keyDef.toLowerCase();
    // tslint:disable: no-bitwise
    if (keyDef.includes('ctrl+')) {
        cmdDef |= 1;
        keyDef = keyDef.replace('ctrl+', '');
    }
    if (keyDef.includes('cmd+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('cmd+', '');
    }
    if (keyDef.includes('alt+')) {
        cmdDef |= 2;
        keyDef = keyDef.replace('alt+', '');
    }
    if (keyDef.includes('shift+')) {
        cmdDef |= 4;
        keyDef = keyDef.replace('shift+', '');
    }
    if (keyDef.includes('meta+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('meta+', '');
    }
    if (keyDef === 'up') {
        key = 38;
    }
    else if (keyDef === 'down') {
        key = 40;
    }
    else if (keyDef === '+' || keyDef === '"+"') {
        key = 171;
    }
    else if (keyDef === '-' || keyDef === '"-"') {
        key = 173;
    }
    else if (keyDef === 'esc') {
        key = 27;
    }
    else if (keyDef === 'enter') {
        key = 13;
    }
    else if (keyDef === 'space') {
        key = 32;
    }
    else if (keyDef === 'f4') {
        key = 115;
    }
    else if (keyDef === 'backspace') {
        key = 8;
    }
    else if (keyDef === 'home') {
        key = 36;
    }
    else if (keyDef === 'end') {
        key = 35;
    }
    else if (keyDef === 'left') {
        key = 37;
    }
    else if (keyDef === 'right') {
        key = 39;
    }
    else if (keyDef === 'pagedown') {
        key = 34;
    }
    else if (keyDef === 'pageup') {
        key = 33;
    }
    else {
        key = keyDef.toUpperCase().charCodeAt(0);
    }
    if (keycode === 'WHEEL') {
        return keyDef === 'wheel' && cmd === cmdDef;
    }
    return key === keycode && cmd === cmdDef;
}
if (typeof window !== 'undefined') {
    window.isKeyIgnored = isKeyIgnored;
}
class NgxExtendedPdfViewerModule {
}
NgxExtendedPdfViewerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxExtendedPdfViewerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxExtendedPdfViewerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxExtendedPdfViewerModule, declarations: [DynamicCssComponent,
        NegativeResponsiveCSSClassPipe,
        NgxExtendedPdfViewerComponent,
        PdfAcroformDefaultThemeComponent,
        PdfBookModeComponent,
        PdfContextMenuComponent,
        PdfDarkThemeComponent,
        PdfDrawEditorComponent,
        PdfDocumentPropertiesComponent,
        PdfDocumentPropertiesDialogComponent,
        PdfDownloadComponent,
        PdfDummyComponentsComponent,
        PdfEditorComponent,
        PdfErrorMessageComponent,
        PdfEvenSpreadComponent,
        PdfFindbarComponent,
        PdfFindbarMessageContainerComponent,
        PdfFindButtonComponent,
        PdfFindEntireWordComponent,
        PdfFindHighlightAllComponent,
        PdfFindInputAreaComponent,
        PdfFindMatchCaseComponent,
        PdfFindNextComponent,
        PdfFindPreviousComponent,
        PdfFindResultsCountComponent,
        PdfFirstPageComponent,
        PdfHandToolComponent,
        PdfHorizontalScrollComponent,
        PdfInfiniteScrollComponent,
        PdfLastPageComponent,
        PdfLightThemeComponent,
        PdfMatchDiacriticsComponent,
        PdfNextPageComponent,
        PdfNoSpreadComponent,
        PdfOddSpreadComponent,
        PdfOpenFileComponent,
        PdfPageNumberComponent,
        PdfPagingAreaComponent,
        PdfPasswordDialogComponent,
        PdfPreparePrintingDialogComponent,
        PdfPresentationModeComponent,
        PdfPreviousPageComponent,
        PdfPrintComponent,
        PdfRotatePageComponent,
        PdfSearchInputFieldComponent,
        PdfSecondaryToolbarComponent,
        PdfSelectToolComponent,
        PdfShyButtonComponent,
        PdfSidebarComponent,
        PdfSidebarContentComponent,
        PdfSidebarToolbarComponent,
        PdfSinglePageModeComponent,
        PdfStampEditorComponent,
        PdfTextEditorComponent,
        PdfToggleSecondaryToolbarComponent,
        PdfToggleSidebarComponent,
        PdfToolbarComponent,
        PdfVerticalScrollModeComponent,
        PdfWrappedScrollModeComponent,
        PdfZoomDropdownComponent,
        PdfZoomInComponent,
        PdfZoomOutComponent,
        PdfZoomToolbarComponent,
        ResponsiveCSSClassPipe,
        TranslatePipe], imports: [CommonModule, FormsModule], exports: [NegativeResponsiveCSSClassPipe,
        NgxExtendedPdfViewerComponent,
        PdfAcroformDefaultThemeComponent,
        PdfBookModeComponent,
        PdfContextMenuComponent,
        PdfDarkThemeComponent,
        PdfDrawEditorComponent,
        PdfDocumentPropertiesDialogComponent,
        PdfDownloadComponent,
        PdfEditorComponent,
        PdfErrorMessageComponent,
        PdfEvenSpreadComponent,
        PdfFindbarComponent,
        PdfFindbarMessageContainerComponent,
        PdfFindButtonComponent,
        PdfFindEntireWordComponent,
        PdfFindHighlightAllComponent,
        PdfFindInputAreaComponent,
        PdfFindMatchCaseComponent,
        PdfFindNextComponent,
        PdfFindPreviousComponent,
        PdfFindResultsCountComponent,
        PdfFirstPageComponent,
        PdfHandToolComponent,
        PdfHorizontalScrollComponent,
        PdfInfiniteScrollComponent,
        PdfLastPageComponent,
        PdfLightThemeComponent,
        PdfMatchDiacriticsComponent,
        PdfNextPageComponent,
        PdfNoSpreadComponent,
        PdfOddSpreadComponent,
        PdfOpenFileComponent,
        PdfPageNumberComponent,
        PdfPagingAreaComponent,
        PdfPasswordDialogComponent,
        PdfPreparePrintingDialogComponent,
        PdfPresentationModeComponent,
        PdfPreviousPageComponent,
        PdfPrintComponent,
        PdfRotatePageComponent,
        PdfSearchInputFieldComponent,
        PdfSecondaryToolbarComponent,
        PdfSelectToolComponent,
        PdfShyButtonComponent,
        PdfSidebarComponent,
        PdfSidebarContentComponent,
        PdfSidebarToolbarComponent,
        PdfSinglePageModeComponent,
        PdfStampEditorComponent,
        PdfTextEditorComponent,
        PdfToggleSecondaryToolbarComponent,
        PdfToggleSidebarComponent,
        PdfToolbarComponent,
        PdfVerticalScrollModeComponent,
        PdfWrappedScrollModeComponent,
        PdfZoomDropdownComponent,
        PdfZoomInComponent,
        PdfZoomOutComponent,
        PdfZoomToolbarComponent,
        ResponsiveCSSClassPipe] });
NgxExtendedPdfViewerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxExtendedPdfViewerModule, providers: [NgxExtendedPdfViewerService], imports: [[CommonModule, FormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NgxExtendedPdfViewerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [
                        DynamicCssComponent,
                        NegativeResponsiveCSSClassPipe,
                        NgxExtendedPdfViewerComponent,
                        PdfAcroformDefaultThemeComponent,
                        PdfBookModeComponent,
                        PdfContextMenuComponent,
                        PdfDarkThemeComponent,
                        PdfDrawEditorComponent,
                        PdfDocumentPropertiesComponent,
                        PdfDocumentPropertiesDialogComponent,
                        PdfDownloadComponent,
                        PdfDummyComponentsComponent,
                        PdfEditorComponent,
                        PdfErrorMessageComponent,
                        PdfEvenSpreadComponent,
                        PdfFindbarComponent,
                        PdfFindbarMessageContainerComponent,
                        PdfFindButtonComponent,
                        PdfFindEntireWordComponent,
                        PdfFindHighlightAllComponent,
                        PdfFindInputAreaComponent,
                        PdfFindMatchCaseComponent,
                        PdfFindNextComponent,
                        PdfFindPreviousComponent,
                        PdfFindResultsCountComponent,
                        PdfFirstPageComponent,
                        PdfHandToolComponent,
                        PdfHorizontalScrollComponent,
                        PdfInfiniteScrollComponent,
                        PdfLastPageComponent,
                        PdfLightThemeComponent,
                        PdfMatchDiacriticsComponent,
                        PdfNextPageComponent,
                        PdfNoSpreadComponent,
                        PdfOddSpreadComponent,
                        PdfOpenFileComponent,
                        PdfPageNumberComponent,
                        PdfPagingAreaComponent,
                        PdfPasswordDialogComponent,
                        PdfPreparePrintingDialogComponent,
                        PdfPresentationModeComponent,
                        PdfPreviousPageComponent,
                        PdfPrintComponent,
                        PdfRotatePageComponent,
                        PdfSearchInputFieldComponent,
                        PdfSecondaryToolbarComponent,
                        PdfSelectToolComponent,
                        PdfShyButtonComponent,
                        PdfSidebarComponent,
                        PdfSidebarContentComponent,
                        PdfSidebarToolbarComponent,
                        PdfSinglePageModeComponent,
                        PdfStampEditorComponent,
                        PdfTextEditorComponent,
                        PdfToggleSecondaryToolbarComponent,
                        PdfToggleSidebarComponent,
                        PdfToolbarComponent,
                        PdfVerticalScrollModeComponent,
                        PdfWrappedScrollModeComponent,
                        PdfZoomDropdownComponent,
                        PdfZoomInComponent,
                        PdfZoomOutComponent,
                        PdfZoomToolbarComponent,
                        ResponsiveCSSClassPipe,
                        TranslatePipe,
                    ],
                    providers: [NgxExtendedPdfViewerService],
                    exports: [
                        NegativeResponsiveCSSClassPipe,
                        NgxExtendedPdfViewerComponent,
                        PdfAcroformDefaultThemeComponent,
                        PdfBookModeComponent,
                        PdfContextMenuComponent,
                        PdfDarkThemeComponent,
                        PdfDrawEditorComponent,
                        PdfDocumentPropertiesDialogComponent,
                        PdfDownloadComponent,
                        PdfEditorComponent,
                        PdfErrorMessageComponent,
                        PdfEvenSpreadComponent,
                        PdfFindbarComponent,
                        PdfFindbarMessageContainerComponent,
                        PdfFindButtonComponent,
                        PdfFindEntireWordComponent,
                        PdfFindHighlightAllComponent,
                        PdfFindInputAreaComponent,
                        PdfFindMatchCaseComponent,
                        PdfFindNextComponent,
                        PdfFindPreviousComponent,
                        PdfFindResultsCountComponent,
                        PdfFirstPageComponent,
                        PdfHandToolComponent,
                        PdfHorizontalScrollComponent,
                        PdfInfiniteScrollComponent,
                        PdfLastPageComponent,
                        PdfLightThemeComponent,
                        PdfMatchDiacriticsComponent,
                        PdfNextPageComponent,
                        PdfNoSpreadComponent,
                        PdfOddSpreadComponent,
                        PdfOpenFileComponent,
                        PdfPageNumberComponent,
                        PdfPagingAreaComponent,
                        PdfPasswordDialogComponent,
                        PdfPreparePrintingDialogComponent,
                        PdfPresentationModeComponent,
                        PdfPreviousPageComponent,
                        PdfPrintComponent,
                        PdfRotatePageComponent,
                        PdfSearchInputFieldComponent,
                        PdfSecondaryToolbarComponent,
                        PdfSelectToolComponent,
                        PdfShyButtonComponent,
                        PdfSidebarComponent,
                        PdfSidebarContentComponent,
                        PdfSidebarToolbarComponent,
                        PdfSinglePageModeComponent,
                        PdfStampEditorComponent,
                        PdfTextEditorComponent,
                        PdfToggleSecondaryToolbarComponent,
                        PdfToggleSidebarComponent,
                        PdfToolbarComponent,
                        PdfVerticalScrollModeComponent,
                        PdfWrappedScrollModeComponent,
                        PdfZoomDropdownComponent,
                        PdfZoomInComponent,
                        PdfZoomOutComponent,
                        PdfZoomToolbarComponent,
                        ResponsiveCSSClassPipe,
                    ],
                }]
        }] });

const LinkTarget = {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
};

const NEED_PASSWORD = 1;
const INCORRECT_PASSWORD = 2;

class PdfDocumentPropertiesExtractor {
    constructor() {
        this.pdfDateStringRegex = new RegExp('^D:' + // Prefix (required)
            '(\\d{4})' + // Year (required)
            '(\\d{2})?' + // Month (optional)
            '(\\d{2})?' + // Day (optional)
            '(\\d{2})?' + // Hour (optional)
            '(\\d{2})?' + // Minute (optional)
            '(\\d{2})?' + // Second (optional)
            '([Z|+|-])?' + // Universal time relation (optional)
            '(\\d{2})?' + // Offset hour (optional)
            // tslint:disable-next-line: quotemark
            "'?" + // Splitting apostrophe (optional)
            '(\\d{2})?' + // Offset minute (optional)
            // tslint:disable-next-line: quotemark
            "'?" // Trailing apostrophe (optional)
        );
    }
    getDocumentProperties() {
        return __awaiter(this, void 0, void 0, function* () {
            const PDFViewerApplication = window.PDFViewerApplication;
            const pdfDocument = PDFViewerApplication.pdfDocument;
            const result = {};
            const md = yield pdfDocument.getMetadata();
            const info = md.info;
            result.author = info.Author;
            result.creationDate = this.toDateObject(info.CreationDate);
            result.creator = info.Creator;
            result.keywords = info.Keywords;
            result.linearized = info.IsLinearized;
            result.modificationDate = this.toDateObject(info.ModDate);
            result.pdfFormatVersion = info.PDFFormatVersion;
            result.producer = info.Producer;
            result.subject = info.Subject;
            result.title = info.Title;
            if (md['contentDispositionFilename']) {
                result.fileName = md['contentDispositionFilename'];
            }
            result.maybeFileSize = (yield pdfDocument.getDownloadInfo()).length;
            return result;
        });
    }
    /** shamelessly copied from pdf.js */
    toDateObject(input) {
        // Optional fields that don't satisfy the requirements from the regular
        // expression (such as incorrect digit counts or numbers that are out of
        // range) will fall back the defaults from the specification.
        const matches = this.pdfDateStringRegex.exec(input);
        if (!matches) {
            return null;
        }
        // JavaScript's `Date` object expects the month to be between 0 and 11
        // instead of 1 and 12, so we have to correct for that.
        const year = parseInt(matches[1], 10);
        let month = parseInt(matches[2], 10);
        month = month >= 1 && month <= 12 ? month - 1 : 0;
        let day = parseInt(matches[3], 10);
        day = day >= 1 && day <= 31 ? day : 1;
        let hour = parseInt(matches[4], 10);
        hour = hour >= 0 && hour <= 23 ? hour : 0;
        let minute = parseInt(matches[5], 10);
        minute = minute >= 0 && minute <= 59 ? minute : 0;
        let second = parseInt(matches[6], 10);
        second = second >= 0 && second <= 59 ? second : 0;
        const universalTimeRelation = matches[7] || 'Z';
        let offsetHour = parseInt(matches[8], 10);
        offsetHour = offsetHour >= 0 && offsetHour <= 23 ? offsetHour : 0;
        let offsetMinute = parseInt(matches[9], 10) || 0;
        offsetMinute = offsetMinute >= 0 && offsetMinute <= 59 ? offsetMinute : 0;
        // Universal time relation 'Z' means that the local time is equal to the
        // universal time, whereas the relations '+'/'-' indicate that the local
        // time is later respectively earlier than the universal time. Every date
        // is normalized to universal time.
        if (universalTimeRelation === '-') {
            hour += offsetHour;
            minute += offsetMinute;
        }
        else if (universalTimeRelation === '+') {
            hour -= offsetHour;
            minute -= offsetMinute;
        }
        return new Date(Date.UTC(year, month, day, hour, minute, second));
    }
}

/*
 * Public API Surface of ngx-extended-pdf-viewer
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FindState, INCORRECT_PASSWORD, LinkTarget, NEED_PASSWORD, NegativeResponsiveCSSClassPipe, NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, PDFNotificationService, PdfAcroformDefaultThemeComponent, PdfBookModeComponent, PdfBreakpoints, PdfContextMenuComponent, PdfDarkThemeComponent, PdfDocumentPropertiesDialogComponent, PdfDocumentPropertiesExtractor, PdfDownloadComponent, PdfDrawEditorComponent, PdfEditorComponent, PdfErrorMessageComponent, PdfEvenSpreadComponent, PdfFindButtonComponent, PdfFindEntireWordComponent, PdfFindHighlightAllComponent, PdfFindInputAreaComponent, PdfFindMatchCaseComponent, PdfFindNextComponent, PdfFindPreviousComponent, PdfFindResultsCountComponent, PdfFindbarComponent, PdfFindbarMessageContainerComponent, PdfFirstPageComponent, PdfHandToolComponent, PdfHorizontalScrollComponent, PdfInfiniteScrollComponent, PdfLastPageComponent, PdfLightThemeComponent, PdfMatchDiacriticsComponent, PdfNextPageComponent, PdfNoSpreadComponent, PdfOddSpreadComponent, PdfOpenFileComponent, PdfPageNumberComponent, PdfPagingAreaComponent, PdfPasswordDialogComponent, PdfPreparePrintingDialogComponent, PdfPresentationModeComponent, PdfPreviousPageComponent, PdfPrintComponent, PdfRotatePageComponent, PdfSearchInputFieldComponent, PdfSecondaryToolbarComponent, PdfSelectToolComponent, PdfShyButtonComponent, PdfSidebarComponent, PdfSidebarContentComponent, PdfSidebarToolbarComponent, PdfSidebarView, PdfSinglePageModeComponent, PdfStampEditorComponent, PdfTextEditorComponent, PdfToggleSecondaryToolbarComponent, PdfToggleSidebarComponent, PdfToolbarComponent, PdfVerticalScrollModeComponent, PdfWrappedScrollModeComponent, PdfZoomDropdownComponent, PdfZoomInComponent, PdfZoomOutComponent, PdfZoomToolbarComponent, ResponsiveCSSClassPipe, ScrollModeType, SpreadModeType, VerbosityLevel, assetsUrl, getVersionSuffix, pdfDefaultOptions, pdfjsBleedingEdgeVersion, pdfjsVersion };
//# sourceMappingURL=ngx-extended-pdf-viewer.mjs.map
