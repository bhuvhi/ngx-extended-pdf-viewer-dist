import { Injectable, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { AnnotationEditorParamsType } from './options/editor-annotations';
import * as i0 from "@angular/core";
export class NgxExtendedPdfViewerService {
    rendererFactory;
    ngxExtendedPdfViewerInitialized = false;
    recalculateSize$ = new Subject();
    secondaryMenuIsEmpty = false;
    renderer;
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    find(text, options = {}) {
        if (!this.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            const highlightAllCheckbox = document.getElementById('findHighlightAll');
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = options.highlightAll ?? false;
            }
            const matchCaseCheckbox = document.getElementById('findMatchCase');
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = options.matchCase ?? false;
            }
            const entireWordCheckbox = document.getElementById('findEntireWord');
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = options.wholeWords ?? false;
            }
            const matchDiacriticsCheckbox = document.getElementById('findMatchDiacritics');
            if (matchDiacriticsCheckbox) {
                matchDiacriticsCheckbox.checked = options.matchDiacritics ?? false;
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
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (PDFViewerApplication) {
            const alreadyThere = !!globalThis['isInPDFPrintRange'] && !printRange;
            if (!alreadyThere) {
                if (!printRange) {
                    printRange = {};
                }
                this.setPrintRange(printRange);
            }
            globalThis.printPDF();
            if (!alreadyThere) {
                PDFViewerApplication.eventBus.on('afterprint', () => {
                    this.removePrintRange();
                });
            }
        }
    }
    removePrintRange() {
        globalThis['isInPDFPrintRange'] = undefined;
        globalThis['filteredPageCount'] = undefined;
    }
    setPrintRange(printRange) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        globalThis['isInPDFPrintRange'] = (page) => this.isInPDFPrintRange(page, printRange);
        globalThis['filteredPageCount'] = this.filteredPageCount(PDFViewerApplication?.pagesCount, printRange);
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
    async getPageAsLines(pageNumber) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (PDFViewerApplication) {
            const pdfDocument = PDFViewerApplication.pdfDocument;
            const page = await pdfDocument.getPage(pageNumber);
            const textSnippets = (await page.getTextContent()).items //
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
        }
        return [];
    }
    async getPageAsText(pageNumber) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return '';
        }
        const pdfDocument = PDFViewerApplication.pdfDocument;
        const page = await pdfDocument.getPage(pageNumber);
        const textSnippets = (await page.getTextContent()).items;
        return this.convertTextInfoToText(textSnippets);
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
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return Promise.resolve(undefined);
        }
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
        this.renderer.setStyle(canvas, 'width', `${width}px`);
        this.renderer.setStyle(canvas, 'height', `${height}px`);
        return { ctx, canvas };
    }
    async getCurrentDocumentAsBlob() {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        return await PDFViewerApplication?.export();
    }
    async getFormData(currentFormValues = true) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return [];
        }
        const pdf = PDFViewerApplication.pdfDocument;
        // screen DPI / PDF DPI
        const dpiRatio = 96 / 72;
        const result = [];
        for (let i = 1; i <= pdf?.numPages; i++) {
            // track the current page
            const currentPage /* : PDFPageProxy */ = await pdf.getPage(i);
            const annotations = await currentPage.getAnnotations();
            annotations
                .filter((a) => a.subtype === 'Widget') // get the form field annotations only
                .map((a) => ({ ...a })) // only expose copies of the annotations to avoid side-effects
                .forEach((a) => {
                // get the rectangle that represent the single field
                // and resize it according to the current DPI
                const fieldRect = currentPage.getViewport({ scale: dpiRatio }).convertToViewportRectangle(a.rect);
                // add the corresponding input
                if (currentFormValues && a.fieldName) {
                    try {
                        if (a.exportValue) {
                            const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + '/' + a.exportValue, '');
                            a.value = currentValue?.value;
                        }
                        else if (a.radioButton) {
                            const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName + '/' + a.fieldValue, '');
                            a.value = currentValue?.value;
                        }
                        else {
                            const currentValue = PDFViewerApplication.pdfDocument.annotationStorage.getValue(a.id, a.fieldName, '');
                            a.value = currentValue?.value;
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
    }
    /**
     * Adds a page to the rendering queue
     * @param {number} pageIndex Index of the page to render
     * @returns {boolean} false, if the page has already been rendered
     * or if it's out of range
     */
    addPageToRenderQueue(pageIndex) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        return PDFViewerApplication?.pdfViewer.addPageToRenderQueue(pageIndex);
    }
    isRenderQueueEmpty() {
        const scrolledDown = true;
        const renderExtra = false;
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        const nextPage = PDFViewerApplication?.pdfViewer.renderingQueue.getHighestPriority(PDFViewerApplication.pdfViewer._getVisiblePages(), PDFViewerApplication.pdfViewer._pages, scrolledDown, renderExtra);
        return !nextPage;
    }
    hasPageBeenRendered(pageIndex) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return false;
        }
        const pages = PDFViewerApplication.pdfViewer._pages;
        if (pages.length > pageIndex && pageIndex >= 0) {
            const pageView = pages[pageIndex];
            const hasBeenRendered = pageView.renderingState === 3;
            return hasBeenRendered;
        }
        return false;
    }
    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    async renderPage(pageIndex) {
        if (!this.hasPageBeenRendered(pageIndex)) {
            await this.addPageToRenderQueue(pageIndex);
            while (!this.hasPageBeenRendered(pageIndex)) {
                await this.sleep(7);
            }
        }
    }
    currentlyRenderedPages() {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return [];
        }
        const pages = PDFViewerApplication.pdfViewer._pages;
        return pages.filter((page) => page.renderingState === 3).map((page) => page.id);
    }
    numberOfPages() {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return 0;
        }
        const pages = PDFViewerApplication.pdfViewer._pages;
        return pages.length;
    }
    getCurrentlyVisiblePageNumbers() {
        const app = globalThis.PDFViewerApplication;
        if (!app) {
            return [];
        }
        const pages = app.pdfViewer._getVisiblePages().views;
        return pages?.map((page) => page.id);
    }
    recalculateSize() {
        this.recalculateSize$.next();
    }
    async listLayers() {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return [];
        }
        const optionalContentConfig = await PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
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
    }
    async toggleLayer(layerId) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (!PDFViewerApplication) {
            return;
        }
        const optionalContentConfig = await PDFViewerApplication.pdfViewer.optionalContentConfigPromise;
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
    }
    scrollPageIntoView(pageNumber, pageSpot) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        const viewer = PDFViewerApplication?.pdfViewer;
        viewer?.scrollPagePosIntoView(pageNumber, pageSpot);
    }
    getSerializedAnnotations() {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        return PDFViewerApplication?.pdfViewer.getSerializedAnnotations();
    }
    addEditorAnnotation(serializedAnnotation) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        PDFViewerApplication?.pdfViewer.addEditorAnnotation(serializedAnnotation);
    }
    removeEditorAnnotations(filter) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        PDFViewerApplication?.pdfViewer.removeEditorAnnotations(filter);
    }
    async loadImageAsDataURL(imageUrl) {
        if (imageUrl.startsWith('data:')) {
            return imageUrl;
        }
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch the image from ${imageUrl}: ${response.statusText}`);
        }
        const imageBlob = await response.blob();
        return imageBlob;
    }
    async addImageToAnnotationLayer({ urlOrDataUrl, page, left, bottom, right, top, rotation }) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        if (PDFViewerApplication) {
            if (page !== undefined) {
                if (page !== this.currentPageIndex()) {
                    await this.renderPage(page);
                }
            }
            else {
                page = this.currentPageIndex();
            }
            const previousAnnotationEditorMode = PDFViewerApplication.pdfViewer.annotationEditorMode;
            this.switchAnnotationEdtorMode(13);
            const dataUrl = await this.loadImageAsDataURL(urlOrDataUrl);
            const pageSize = PDFViewerApplication.pdfViewer._pages[page].pdfPage.view;
            const leftDim = pageSize[0];
            const bottomDim = pageSize[1];
            const rightDim = pageSize[2];
            const topDim = pageSize[3];
            const width = rightDim - leftDim;
            const height = topDim - bottomDim;
            const imageWidth = PDFViewerApplication.pdfViewer._pages[page].div.clientWidth;
            const imageHeight = PDFViewerApplication.pdfViewer._pages[page].div.clientHeight;
            const leftPdf = this.convertToPDFCoordinates(left, width, 0, imageWidth);
            const bottomPdf = this.convertToPDFCoordinates(bottom, height, 0, imageHeight);
            const rightPdf = this.convertToPDFCoordinates(right, width, width, imageWidth);
            const topPdf = this.convertToPDFCoordinates(top, height, height, imageHeight);
            const stampAnnotation = {
                annotationType: 13,
                pageIndex: page,
                bitmapUrl: dataUrl,
                rect: [leftPdf, bottomPdf, rightPdf, topPdf],
                rotation: rotation ?? 0,
            };
            this.addEditorAnnotation(stampAnnotation);
            await this.sleep(10);
            this.switchAnnotationEdtorMode(previousAnnotationEditorMode);
        }
    }
    currentPageIndex() {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        return PDFViewerApplication?.pdfViewer.currentPageNumber - 1;
    }
    convertToPDFCoordinates(value, maxValue, defaultValue, imageMaxValue) {
        if (!value) {
            return defaultValue;
        }
        if (typeof value === 'string') {
            if (value.endsWith('%')) {
                return (parseInt(value, 10) / 100) * maxValue;
            }
            else if (value.endsWith('px')) {
                return parseInt(value, 10) * (maxValue / imageMaxValue);
            }
            else {
                return parseInt(value, 10);
            }
        }
        else {
            return value;
        }
    }
    switchAnnotationEdtorMode(mode) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        PDFViewerApplication?.eventBus.dispatch('switchannotationeditormode', { mode });
    }
    set editorFontSize(size) {
        this.setEditorProperty(AnnotationEditorParamsType.FREETEXT_SIZE, size);
    }
    set editorFontColor(color) {
        this.setEditorProperty(AnnotationEditorParamsType.FREETEXT_COLOR, color);
    }
    set editorInkColor(color) {
        this.setEditorProperty(AnnotationEditorParamsType.INK_COLOR, color);
    }
    set editorInkOpacity(opacity) {
        this.setEditorProperty(AnnotationEditorParamsType.INK_OPACITY, opacity);
    }
    set editorInkThickness(thickness) {
        this.setEditorProperty(AnnotationEditorParamsType.INK_THICKNESS, thickness);
    }
    set editorHighlightColor(color) {
        this.setEditorProperty(AnnotationEditorParamsType.HIGHLIGHT_COLOR, color);
    }
    set editorHighlightDefaultColor(color) {
        this.setEditorProperty(AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, color);
    }
    set editorHighlightShowAll(showAll) {
        this.setEditorProperty(AnnotationEditorParamsType.HIGHLIGHT_SHOW_ALL, showAll);
    }
    set editorHighlightThickness(thickness) {
        this.setEditorProperty(AnnotationEditorParamsType.HIGHLIGHT_THICKNESS, thickness);
    }
    setEditorProperty(editorPropertyType, value) {
        const PDFViewerApplication = globalThis.PDFViewerApplication;
        PDFViewerApplication?.eventBus.dispatch('switchannotationeditorparams', { type: editorPropertyType, value });
        PDFViewerApplication?.eventBus.dispatch('annotationeditorparamschanged', { details: [[editorPropertyType, value]] });
    }
    /** @nocollapse */ static ɵfac = function NgxExtendedPdfViewerService_Factory(t) { return new (t || NgxExtendedPdfViewerService)(i0.ɵɵinject(i0.RendererFactory2)); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: NgxExtendedPdfViewerService, factory: NgxExtendedPdfViewerService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i0.RendererFactory2 }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLDBCQUEwQixFQUEyQyxNQUFNLDhCQUE4QixDQUFDOztBQXVEbkgsTUFBTSxPQUFPLDJCQUEyQjtJQVNsQjtJQVJiLCtCQUErQixHQUFHLEtBQUssQ0FBQztJQUV4QyxnQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBRXZDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztJQUU1QixRQUFRLENBQVk7SUFFNUIsWUFBb0IsZUFBaUM7UUFBakMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxJQUFJLENBQUMsSUFBWSxFQUFFLFVBQXVCLEVBQUU7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRTtZQUN6QyxxQ0FBcUM7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDO1lBQ3hGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBcUIsQ0FBQztZQUM3RixJQUFJLG9CQUFvQixFQUFFO2dCQUN4QixvQkFBb0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFlB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LENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxrQkFBMEIsRUFBRSxLQUFVO1FBQzdELE1BQU0sb0JBQW9CLEdBQTJCLFVBQWtCLENBQUMsb0JBQW9CLENBQUM7UUFDN0Ysb0JBQW9CLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzdHLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZILENBQUM7d0dBdG1CVSwyQkFBMkI7K0ZBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkIsbUJBRjFCLE1BQU07O2lGQUVQLDJCQUEyQjtjQUh2QyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBbm5vdGF0aW9uRWRpdG9yUGFyYW1zVHlwZSwgRWRpdG9yQW5ub3RhdGlvbiwgU3RhbXBFZGl0b3JBbm5vdGF0aW9uIH0gZnJvbSAnLi9vcHRpb25zL2VkaXRvci1hbm5vdGF0aW9ucyc7XHJcbmltcG9ydCB7IFBkZkxheWVyIH0gZnJvbSAnLi9vcHRpb25zL29wdGlvbmFsX2NvbnRlbnRfY29uZmlnJztcclxuaW1wb3J0IHsgUERGUHJpbnRSYW5nZSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtcHJpbnQtcmFuZ2UnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24sIFBERkRvY3VtZW50UHJveHksIFRleHRJdGVtLCBUZXh0TWFya2VkQ29udGVudCB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZE9wdGlvbnMge1xyXG4gIGhpZ2hsaWdodEFsbD86IGJvb2xlYW47XHJcbiAgbWF0Y2hDYXNlPzogYm9vbGVhbjtcclxuICB3aG9sZVdvcmRzPzogYm9vbGVhbjtcclxuICBtYXRjaERpYWNyaXRpY3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJhd0NvbnRleHQge1xyXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUERGRXhwb3J0U2NhbGVGYWN0b3Ige1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuICBzY2FsZT86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBEaXJlY3Rpb25UeXBlID0gJ2x0cicgfCAncnRsJyB8ICdib3RoJyB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGRmSW1hZ2VQYXJhbWV0ZXJzIHtcclxuICB1cmxPckRhdGFVcmw6IHN0cmluZztcclxuICBwYWdlPzogbnVtYmVyO1xyXG4gIGxlZnQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgYm90dG9tPzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIHJpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIHRvcD86IG51bWJlciB8IHN0cmluZztcclxuICByb3RhdGlvbj86IDAgfCA5MCB8IDE4MCB8IDI3MDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaW5lIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZGlyZWN0aW9uOiBEaXJlY3Rpb25UeXBlO1xyXG4gIHRleHQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNlY3Rpb24ge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICBkaXJlY3Rpb246IERpcmVjdGlvblR5cGU7XHJcbiAgbGluZXM6IEFycmF5PExpbmU+O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgbmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcmVjYWxjdWxhdGVTaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIHB1YmxpYyBzZWNvbmRhcnlNZW51SXNFbXB0eSA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZCh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IEZpbmRPcHRpb25zID0ge30pOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBQREYgdmlld2VyIGhhc24ndCBmaW5pc2hlZCBpbml0aWFsaXppbmcuIFBsZWFzZSBjYWxsIGZpbmQoKSBsYXRlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGhpZ2hsaWdodEFsbENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRIaWdobGlnaHRBbGwnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoaGlnaGxpZ2h0QWxsQ2hlY2tib3gpIHtcclxuICAgICAgICBoaWdobGlnaHRBbGxDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5oaWdobGlnaHRBbGwgPz8gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1hdGNoQ2FzZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRNYXRjaENhc2UnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAobWF0Y2hDYXNlQ2hlY2tib3gpIHtcclxuICAgICAgICBtYXRjaENhc2VDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5tYXRjaENhc2UgPz8gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZW50aXJlV29yZENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRFbnRpcmVXb3JkJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgaWYgKGVudGlyZVdvcmRDaGVja2JveCkge1xyXG4gICAgICAgIGVudGlyZVdvcmRDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy53aG9sZVdvcmRzID8/IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hdGNoRGlhY3JpdGljc0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRNYXRjaERpYWNyaXRpY3MnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAobWF0Y2hEaWFjcml0aWNzQ2hlY2tib3gpIHtcclxuICAgICAgICBtYXRjaERpYWNyaXRpY3NDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5tYXRjaERpYWNyaXRpY3MgPz8gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kSW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoaW5wdXRGaWVsZCkge1xyXG4gICAgICAgIGlucHV0RmllbGQudmFsdWUgPSB0ZXh0O1xyXG4gICAgICAgIC8vIHRvZG8gZGlydHkgaGFjayFcclxuICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIC8vIGVuZCBvZiB0aGUgZGlydHkgaGFja1xyXG4gICAgICAgIGlucHV0RmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjogdGhlIGlucHV0IGZpZWxkIHVzZWQgdG8gc2VhcmNoIGlzbid0IHBhcnQgb2YgdGhlIERPTS5cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZE5leHQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgUERGIHZpZXdlciBoYXNuJ3QgZmluaXNoZWQgaW5pdGlhbGl6aW5nLiBQbGVhc2UgY2FsbCBmaW5kTmV4dCgpIGxhdGVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmROZXh0Jyk7XHJcbiAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICBidXR0b24uY2xpY2soKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmluZFByZXZpb3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFBERiB2aWV3ZXIgaGFzbid0IGZpbmlzaGVkIGluaXRpYWxpemluZy4gUGxlYXNlIGNhbGwgZmluZFByZXZpb3VzKCkgbGF0ZXIuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZFByZXZpb3VzJyk7XHJcbiAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICBidXR0b24uY2xpY2soKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJpbnQocHJpbnRSYW5nZT86IFBERlByaW50UmFuZ2UpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIGNvbnN0IGFscmVhZHlUaGVyZSA9ICEhZ2xvYmFsVGhpc1snaXNJblBERlByaW50UmFuZ2UnXSAmJiAhcHJpbnRSYW5nZTtcclxuICAgICAgaWYgKCFhbHJlYWR5VGhlcmUpIHtcclxuICAgICAgICBpZiAoIXByaW50UmFuZ2UpIHtcclxuICAgICAgICAgIHByaW50UmFuZ2UgPSB7fSBhcyBQREZQcmludFJhbmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFByaW50UmFuZ2UocHJpbnRSYW5nZSk7XHJcbiAgICAgIH1cclxuICAgICAgKGdsb2JhbFRoaXMgYXMgYW55KS5wcmludFBERigpO1xyXG4gICAgICBpZiAoIWFscmVhZHlUaGVyZSkge1xyXG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdhZnRlcnByaW50JywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW1vdmVQcmludFJhbmdlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVQcmludFJhbmdlKCkge1xyXG4gICAgZ2xvYmFsVGhpc1snaXNJblBERlByaW50UmFuZ2UnXSA9IHVuZGVmaW5lZDtcclxuICAgIGdsb2JhbFRoaXNbJ2ZpbHRlcmVkUGFnZUNvdW50J10gPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UHJpbnRSYW5nZShwcmludFJhbmdlOiBQREZQcmludFJhbmdlKSB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGdsb2JhbFRoaXNbJ2lzSW5QREZQcmludFJhbmdlJ10gPSAocGFnZTogbnVtYmVyKSA9PiB0aGlzLmlzSW5QREZQcmludFJhbmdlKHBhZ2UsIHByaW50UmFuZ2UpO1xyXG4gICAgZ2xvYmFsVGhpc1snZmlsdGVyZWRQYWdlQ291bnQnXSA9IHRoaXMuZmlsdGVyZWRQYWdlQ291bnQoUERGVmlld2VyQXBwbGljYXRpb24/LnBhZ2VzQ291bnQsIHByaW50UmFuZ2UpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZpbHRlcmVkUGFnZUNvdW50KHBhZ2VDb3VudDogbnVtYmVyLCByYW5nZTogUERGUHJpbnRSYW5nZSk6IG51bWJlciB7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGZvciAobGV0IHBhZ2UgPSAxOyBwYWdlIDw9IHBhZ2VDb3VudDsgcGFnZSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzSW5QREZQcmludFJhbmdlKHBhZ2UsIHJhbmdlKSkge1xyXG4gICAgICAgIHJlc3VsdCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzSW5QREZQcmludFJhbmdlKHBhZ2VJbmRleDogbnVtYmVyLCBwcmludFJhbmdlOiBQREZQcmludFJhbmdlKSB7XHJcbiAgICBjb25zdCBwYWdlID0gcGFnZUluZGV4ICsgMTtcclxuICAgIGlmIChwcmludFJhbmdlLmZyb20pIHtcclxuICAgICAgaWYgKHBhZ2UgPCBwcmludFJhbmdlLmZyb20pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmludFJhbmdlLnRvKSB7XHJcbiAgICAgIGlmIChwYWdlID4gcHJpbnRSYW5nZS50bykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHByaW50UmFuZ2UuZXhjbHVkZWQpIHtcclxuICAgICAgaWYgKHByaW50UmFuZ2UuZXhjbHVkZWQuc29tZSgocCkgPT4gcCA9PT0gcGFnZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmludFJhbmdlLmluY2x1ZGVkKSB7XHJcbiAgICAgIGlmICghcHJpbnRSYW5nZS5pbmNsdWRlZC5zb21lKChwKSA9PiBwID09PSBwYWdlKSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UGFnZUFzTGluZXMocGFnZU51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxBcnJheTxMaW5lPj4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9IChnbG9iYWxUaGlzIGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgY29uc3QgcGRmRG9jdW1lbnQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGZEb2N1bWVudC5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgICBjb25zdCB0ZXh0U25pcHBldHMgPSAoYXdhaXQgcGFnZS5nZXRUZXh0Q29udGVudCgpKS5pdGVtcyAvL1xyXG4gICAgICAgIC5maWx0ZXIoKGluZm8pID0+ICFpbmZvWyd0eXBlJ10pOyAvLyBpZ25vcmUgdGhlIFRleHRNYXJrZWRDb250ZW50IGl0ZW1zXHJcblxyXG4gICAgICBjb25zdCBzbmlwcGV0cyA9IHRleHRTbmlwcGV0cyBhcyBBcnJheTxUZXh0SXRlbT47XHJcblxyXG4gICAgICBsZXQgbWluWCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICBsZXQgbWluWSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICBsZXQgbWF4WCA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xyXG4gICAgICBsZXQgbWF4WSA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xyXG4gICAgICBsZXQgY291bnRMVFIgPSAwO1xyXG4gICAgICBsZXQgY291bnRSVEwgPSAwO1xyXG4gICAgICBsZXQgdGV4dCA9ICcnO1xyXG4gICAgICBsZXQgbGluZXMgPSBuZXcgQXJyYXk8TGluZT4oKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmlwcGV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbmlwcGV0ID0gc25pcHBldHNbaV07XHJcbiAgICAgICAgaWYgKCFjdXJyZW50U25pcHBldC5oYXNFT0wpIHtcclxuICAgICAgICAgIGNvbnN0IHggPSBjdXJyZW50U25pcHBldC50cmFuc2Zvcm1bNF07XHJcbiAgICAgICAgICBjb25zdCB5ID0gLWN1cnJlbnRTbmlwcGV0LnRyYW5zZm9ybVs1XTtcclxuICAgICAgICAgIGNvbnN0IHdpZHRoID0gY3VycmVudFNuaXBwZXQud2lkdGg7XHJcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBjdXJyZW50U25pcHBldC5oZWlnaHQ7XHJcbiAgICAgICAgICBtaW5YID0gTWF0aC5taW4obWluWCwgeCk7XHJcbiAgICAgICAgICBtaW5ZID0gTWF0aC5taW4obWluWSwgeSk7XHJcbiAgICAgICAgICBtYXhYID0gTWF0aC5tYXgobWF4WCwgeCArIHdpZHRoKTtcclxuICAgICAgICAgIG1heFkgPSBNYXRoLm1heChtYXhZLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICAgIHRleHQgKz0gY3VycmVudFNuaXBwZXQuc3RyO1xyXG4gICAgICAgICAgaWYgKGN1cnJlbnRTbmlwcGV0LmRpciA9PT0gJ3J0bCcpIHtcclxuICAgICAgICAgICAgY291bnRSVEwrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChjdXJyZW50U25pcHBldC5kaXIgPT09ICdsdHInKSB7XHJcbiAgICAgICAgICAgIGNvdW50TFRSKys7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYWRkSXQgPSBpID09PSBzbmlwcGV0cy5sZW5ndGggLSAxIHx8IGN1cnJlbnRTbmlwcGV0Lmhhc0VPTDtcclxuICAgICAgICBpZiAoYWRkSXQpIHtcclxuICAgICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvblR5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICBpZiAoY291bnRMVFIgPiAwICYmIGNvdW50UlRMID4gMCkge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnYm90aCc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvdW50TFRSID4gMCkge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSAnbHRyJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAoY291bnRSVEwgPiAwKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9ICdydGwnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgbGluZSA9IHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICB4OiBtaW5YLFxyXG4gICAgICAgICAgICB5OiBtaW5ZLFxyXG4gICAgICAgICAgICB3aWR0aDogbWF4WCAtIG1pblgsXHJcbiAgICAgICAgICAgIGhlaWdodDogbWF4WSAtIG1pblksXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHQudHJpbSgpLFxyXG4gICAgICAgICAgfSBhcyBMaW5lO1xyXG4gICAgICAgICAgbGluZXMucHVzaChsaW5lKTtcclxuICAgICAgICAgIG1pblggPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICAgIG1pblkgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICAgIG1heFggPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjtcclxuICAgICAgICAgIG1heFkgPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjtcclxuICAgICAgICAgIGNvdW50TFRSID0gMDtcclxuICAgICAgICAgIGNvdW50UlRMID0gMDtcclxuICAgICAgICAgIHRleHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGxpbmVzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2VBc1RleHQocGFnZU51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwZGZEb2N1bWVudCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50O1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGZEb2N1bWVudC5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3QgdGV4dFNuaXBwZXRzID0gKGF3YWl0IHBhZ2UuZ2V0VGV4dENvbnRlbnQoKSkuaXRlbXM7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJ0VGV4dEluZm9Ub1RleHQodGV4dFNuaXBwZXRzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29udmVydFRleHRJbmZvVG9UZXh0KHRleHRJbmZvSXRlbXM6IEFycmF5PFRleHRJdGVtIHwgVGV4dE1hcmtlZENvbnRlbnQ+KTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dEluZm9JdGVtcykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dEluZm9JdGVtc1xyXG4gICAgICAuZmlsdGVyKChpbmZvKSA9PiAhaW5mb1sndHlwZSddKVxyXG4gICAgICAubWFwKChpbmZvOiBUZXh0SXRlbSkgPT4gKGluZm8uaGFzRU9MID8gaW5mby5zdHIgKyAnXFxuJyA6IGluZm8uc3RyKSlcclxuICAgICAgLmpvaW4oJycpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFBhZ2VBc0ltYWdlKHBhZ2VOdW1iZXI6IG51bWJlciwgc2NhbGU6IFBERkV4cG9ydFNjYWxlRmFjdG9yLCBiYWNrZ3JvdW5kPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2U6IHN0cmluZyA9ICcjRkZGRkZGJyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGlmICghUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGRmRG9jdW1lbnQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudDtcclxuICAgIGNvbnN0IHBhZ2VQcm9taXNlOiBQcm9taXNlPGFueT4gPSBwZGZEb2N1bWVudC5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3QgaW1hZ2VQcm9taXNlID0gKHBkZlBhZ2UpID0+IFByb21pc2UucmVzb2x2ZSh0aGlzLmRyYXcocGRmUGFnZSwgc2NhbGUsIGJhY2tncm91bmQsIGJhY2tncm91bmRDb2xvclRvUmVwbGFjZSkpO1xyXG5cclxuICAgIHJldHVybiBwYWdlUHJvbWlzZS50aGVuKGltYWdlUHJvbWlzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXcocGRmUGFnZTogYW55LCBzY2FsZTogUERGRXhwb3J0U2NhbGVGYWN0b3IsIGJhY2tncm91bmQ/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvclRvUmVwbGFjZTogc3RyaW5nID0gJyNGRkZGRkYnKTogUHJvbWlzZTxIVE1MQ2FudmFzRWxlbWVudD4ge1xyXG4gICAgbGV0IHpvb21GYWN0b3IgPSAxO1xyXG4gICAgaWYgKHNjYWxlLnNjYWxlKSB7XHJcbiAgICAgIHpvb21GYWN0b3IgPSBzY2FsZS5zY2FsZTtcclxuICAgIH0gZWxzZSBpZiAoc2NhbGUud2lkdGgpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLndpZHRoIC8gcGRmUGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiAxIH0pLndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChzY2FsZS5oZWlnaHQpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLmhlaWdodCAvIHBkZlBhZ2UuZ2V0Vmlld3BvcnQoeyBzY2FsZTogMSB9KS5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHBkZlBhZ2UuZ2V0Vmlld3BvcnQoe1xyXG4gICAgICBzY2FsZTogem9vbUZhY3RvcixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgeyBjdHgsIGNhbnZhcyB9ID0gdGhpcy5nZXRQYWdlRHJhd0NvbnRleHQodmlld3BvcnQud2lkdGgsIHZpZXdwb3J0LmhlaWdodCk7XHJcbiAgICBjb25zdCBkcmF3Vmlld3BvcnQgPSB2aWV3cG9ydC5jbG9uZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRleHQgPSB7XHJcbiAgICAgIGNhbnZhc0NvbnRleHQ6IGN0eCxcclxuICAgICAgdmlld3BvcnQ6IGRyYXdWaWV3cG9ydCxcclxuICAgICAgYmFja2dyb3VuZCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yVG9SZXBsYWNlLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbmRlclRhc2sgPSBwZGZQYWdlLnJlbmRlcihyZW5kZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBkYXRhVXJsUHJvbWlzZSA9ICgpID0+IFByb21pc2UucmVzb2x2ZShjYW52YXMudG9EYXRhVVJMKCkpO1xyXG5cclxuICAgIHJldHVybiByZW5kZXJUYXNrLnByb21pc2UudGhlbihkYXRhVXJsUHJvbWlzZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFBhZ2VEcmF3Q29udGV4dCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IERyYXdDb250ZXh0IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJywgeyBhbHBoYTogdHJ1ZSB9KTtcclxuICAgIGlmICghY3R4KSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcXVvdGVtYXJrXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGNyZWF0ZSB0aGUgMmQgY29udGV4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNhbnZhcywgJ3dpZHRoJywgYCR7d2lkdGh9cHhgKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY2FudmFzLCAnaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XHJcblxyXG4gICAgcmV0dXJuIHsgY3R4LCBjYW52YXMgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRDdXJyZW50RG9jdW1lbnRBc0Jsb2IoKTogUHJvbWlzZTxCbG9iPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHJldHVybiBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbj8uZXhwb3J0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0Rm9ybURhdGEoY3VycmVudEZvcm1WYWx1ZXMgPSB0cnVlKTogUHJvbWlzZTxBcnJheTxPYmplY3Q+PiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGlmICghUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGRmOiBQREZEb2N1bWVudFByb3h5IHwgdW5kZWZpbmVkID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ7XHJcbiAgICAvLyBzY3JlZW4gRFBJIC8gUERGIERQSVxyXG4gICAgY29uc3QgZHBpUmF0aW8gPSA5NiAvIDcyO1xyXG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTxPYmplY3Q+ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwZGY/Lm51bVBhZ2VzOyBpKyspIHtcclxuICAgICAgLy8gdHJhY2sgdGhlIGN1cnJlbnQgcGFnZVxyXG4gICAgICBjb25zdCBjdXJyZW50UGFnZSAvKiA6IFBERlBhZ2VQcm94eSAqLyA9IGF3YWl0IHBkZi5nZXRQYWdlKGkpO1xyXG4gICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGF3YWl0IGN1cnJlbnRQYWdlLmdldEFubm90YXRpb25zKCk7XHJcblxyXG4gICAgICBhbm5vdGF0aW9uc1xyXG4gICAgICAgIC5maWx0ZXIoKGEpID0+IGEuc3VidHlwZSA9PT0gJ1dpZGdldCcpIC8vIGdldCB0aGUgZm9ybSBmaWVsZCBhbm5vdGF0aW9ucyBvbmx5XHJcbiAgICAgICAgLm1hcCgoYSkgPT4gKHsgLi4uYSB9KSkgLy8gb25seSBleHBvc2UgY29waWVzIG9mIHRoZSBhbm5vdGF0aW9ucyB0byBhdm9pZCBzaWRlLWVmZmVjdHNcclxuICAgICAgICAuZm9yRWFjaCgoYSkgPT4ge1xyXG4gICAgICAgICAgLy8gZ2V0IHRoZSByZWN0YW5nbGUgdGhhdCByZXByZXNlbnQgdGhlIHNpbmdsZSBmaWVsZFxyXG4gICAgICAgICAgLy8gYW5kIHJlc2l6ZSBpdCBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgRFBJXHJcbiAgICAgICAgICBjb25zdCBmaWVsZFJlY3Q6IEFycmF5PG51bWJlcj4gPSBjdXJyZW50UGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiBkcGlSYXRpbyB9KS5jb252ZXJ0VG9WaWV3cG9ydFJlY3RhbmdsZShhLnJlY3QpO1xyXG5cclxuICAgICAgICAgIC8vIGFkZCB0aGUgY29ycmVzcG9uZGluZyBpbnB1dFxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRGb3JtVmFsdWVzICYmIGEuZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgaWYgKGEuZXhwb3J0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogYW55ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UuZ2V0VmFsdWUoYS5pZCwgYS5maWVsZE5hbWUgKyAnLycgKyBhLmV4cG9ydFZhbHVlLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBhLnZhbHVlID0gY3VycmVudFZhbHVlPy52YWx1ZTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEucmFkaW9CdXR0b24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogYW55ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UuZ2V0VmFsdWUoYS5pZCwgYS5maWVsZE5hbWUgKyAnLycgKyBhLmZpZWxkVmFsdWUsICcnKTtcclxuICAgICAgICAgICAgICAgIGEudmFsdWUgPSBjdXJyZW50VmFsdWU/LnZhbHVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWU6IGFueSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50LmFubm90YXRpb25TdG9yYWdlLmdldFZhbHVlKGEuaWQsIGEuZmllbGROYW1lLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBhLnZhbHVlID0gY3VycmVudFZhbHVlPy52YWx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xyXG4gICAgICAgICAgICAgIC8vIGp1c3QgaWdub3JlIGl0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJlc3VsdC5wdXNoKHsgZmllbGRBbm5vdGF0aW9uOiBhLCBmaWVsZFJlY3QsIHBhZ2VOdW1iZXI6IGkgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHBhZ2UgdG8gdGhlIHJlbmRlcmluZyBxdWV1ZVxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwYWdlSW5kZXggSW5kZXggb2YgdGhlIHBhZ2UgdG8gcmVuZGVyXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59IGZhbHNlLCBpZiB0aGUgcGFnZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkXHJcbiAgICogb3IgaWYgaXQncyBvdXQgb2YgcmFuZ2VcclxuICAgKi9cclxuICBwdWJsaWMgYWRkUGFnZVRvUmVuZGVyUXVldWUocGFnZUluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgcmV0dXJuIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXIuYWRkUGFnZVRvUmVuZGVyUXVldWUocGFnZUluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1JlbmRlclF1ZXVlRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZERvd24gPSB0cnVlO1xyXG4gICAgY29uc3QgcmVuZGVyRXh0cmEgPSBmYWxzZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgbmV4dFBhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyLnJlbmRlcmluZ1F1ZXVlLmdldEhpZ2hlc3RQcmlvcml0eShcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9nZXRWaXNpYmxlUGFnZXMoKSxcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9wYWdlcyxcclxuICAgICAgc2Nyb2xsZWREb3duLFxyXG4gICAgICByZW5kZXJFeHRyYVxyXG4gICAgKTtcclxuICAgIHJldHVybiAhbmV4dFBhZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFzUGFnZUJlZW5SZW5kZXJlZChwYWdlSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9IChnbG9iYWxUaGlzIGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBpZiAoIVBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhZ2VzID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9wYWdlcztcclxuICAgIGlmIChwYWdlcy5sZW5ndGggPiBwYWdlSW5kZXggJiYgcGFnZUluZGV4ID49IDApIHtcclxuICAgICAgY29uc3QgcGFnZVZpZXcgPSBwYWdlc1twYWdlSW5kZXhdO1xyXG4gICAgICBjb25zdCBoYXNCZWVuUmVuZGVyZWQgPSBwYWdlVmlldy5yZW5kZXJpbmdTdGF0ZSA9PT0gMztcclxuICAgICAgcmV0dXJuIGhhc0JlZW5SZW5kZXJlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVuZGVyUGFnZShwYWdlSW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKCF0aGlzLmhhc1BhZ2VCZWVuUmVuZGVyZWQocGFnZUluZGV4KSkge1xyXG4gICAgICBhd2FpdCB0aGlzLmFkZFBhZ2VUb1JlbmRlclF1ZXVlKHBhZ2VJbmRleCk7XHJcbiAgICAgIHdoaWxlICghdGhpcy5oYXNQYWdlQmVlblJlbmRlcmVkKHBhZ2VJbmRleCkpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3VycmVudGx5UmVuZGVyZWRQYWdlcygpOiBBcnJheTxudW1iZXI+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWdlcyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXM7XHJcbiAgICByZXR1cm4gcGFnZXMuZmlsdGVyKChwYWdlKSA9PiBwYWdlLnJlbmRlcmluZ1N0YXRlID09PSAzKS5tYXAoKHBhZ2UpID0+IHBhZ2UuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG51bWJlck9mUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgaWYgKCFQREZWaWV3ZXJBcHBsaWNhdGlvbikge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhZ2VzID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLl9wYWdlcztcclxuICAgIHJldHVybiBwYWdlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q3VycmVudGx5VmlzaWJsZVBhZ2VOdW1iZXJzKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgY29uc3QgYXBwID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbiBhcyBJUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBpZiAoIWFwcCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYWdlcyA9IChhcHAucGRmVmlld2VyLl9nZXRWaXNpYmxlUGFnZXMoKSBhcyBhbnkpLnZpZXdzIGFzIEFycmF5PGFueT47XHJcbiAgICByZXR1cm4gcGFnZXM/Lm1hcCgocGFnZSkgPT4gcGFnZS5pZCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVjYWxjdWxhdGVTaXplKCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVNpemUkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBsaXN0TGF5ZXJzKCk6IFByb21pc2U8QXJyYXk8UGRmTGF5ZXI+IHwgdW5kZWZpbmVkPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGlmICghUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbmFsQ29udGVudENvbmZpZyA9IGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5vcHRpb25hbENvbnRlbnRDb25maWdQcm9taXNlO1xyXG4gICAgaWYgKG9wdGlvbmFsQ29udGVudENvbmZpZykge1xyXG4gICAgICBjb25zdCBsZXZlbERhdGEgPSBvcHRpb25hbENvbnRlbnRDb25maWcuZ2V0T3JkZXIoKTtcclxuICAgICAgY29uc3QgbGF5ZXJJZHMgPSBsZXZlbERhdGEuZmlsdGVyKChncm91cElkKSA9PiB0eXBlb2YgZ3JvdXBJZCAhPT0gJ29iamVjdCcpO1xyXG4gICAgICByZXR1cm4gbGF5ZXJJZHMubWFwKChsYXllcklkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gb3B0aW9uYWxDb250ZW50Q29uZmlnLmdldEdyb3VwKGxheWVySWQpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYXllcklkOiBsYXllcklkLFxyXG4gICAgICAgICAgbmFtZTogY29uZmlnLm5hbWUsXHJcbiAgICAgICAgICB2aXNpYmxlOiBjb25maWcudmlzaWJsZSxcclxuICAgICAgICB9IGFzIFBkZkxheWVyO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdG9nZ2xlTGF5ZXIobGF5ZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGlmICghUERGVmlld2VyQXBwbGljYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb3B0aW9uYWxDb250ZW50Q29uZmlnID0gYXdhaXQgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLm9wdGlvbmFsQ29udGVudENvbmZpZ1Byb21pc2U7XHJcbiAgICBpZiAob3B0aW9uYWxDb250ZW50Q29uZmlnKSB7XHJcbiAgICAgIGxldCBpc1Zpc2libGUgPSBvcHRpb25hbENvbnRlbnRDb25maWcuZ2V0R3JvdXAobGF5ZXJJZCkudmlzaWJsZTtcclxuICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFtpZD0nJHtsYXllcklkfSddYCk7XHJcbiAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgIGlzVmlzaWJsZSA9IChjaGVja2JveCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkO1xyXG4gICAgICAgIChjaGVja2JveCBhcyBIVE1MSW5wdXRFbGVtZW50KS5jaGVja2VkID0gIWlzVmlzaWJsZTtcclxuICAgICAgfVxyXG4gICAgICBvcHRpb25hbENvbnRlbnRDb25maWcuc2V0VmlzaWJpbGl0eShsYXllcklkLCAhaXNWaXNpYmxlKTtcclxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ29wdGlvbmFsY29udGVudGNvbmZpZycsIHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMsXHJcbiAgICAgICAgcHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKG9wdGlvbmFsQ29udGVudENvbmZpZyksXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNjcm9sbFBhZ2VJbnRvVmlldyhwYWdlTnVtYmVyOiBudW1iZXIsIHBhZ2VTcG90PzogeyB0b3A/OiBudW1iZXIgfCBzdHJpbmc7IGxlZnQ/OiBudW1iZXIgfCBzdHJpbmcgfSk6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9IChnbG9iYWxUaGlzIGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCB2aWV3ZXIgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyIGFzIGFueTtcclxuICAgIHZpZXdlcj8uc2Nyb2xsUGFnZVBvc0ludG9WaWV3KHBhZ2VOdW1iZXIsIHBhZ2VTcG90KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTZXJpYWxpemVkQW5ub3RhdGlvbnMoKTogRWRpdG9yQW5ub3RhdGlvbltdIHwgbnVsbCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHJldHVybiBQREZWaWV3ZXJBcHBsaWNhdGlvbj8ucGRmVmlld2VyLmdldFNlcmlhbGl6ZWRBbm5vdGF0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZEVkaXRvckFubm90YXRpb24oc2VyaWFsaXplZEFubm90YXRpb246IHN0cmluZyB8IEVkaXRvckFubm90YXRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24/LnBkZlZpZXdlci5hZGRFZGl0b3JBbm5vdGF0aW9uKHNlcmlhbGl6ZWRBbm5vdGF0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVFZGl0b3JBbm5vdGF0aW9ucyhmaWx0ZXI/OiAoc2VyaWFsaXplZDogb2JqZWN0KSA9PiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXIucmVtb3ZlRWRpdG9yQW5ub3RhdGlvbnMoZmlsdGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgbG9hZEltYWdlQXNEYXRhVVJMKGltYWdlVXJsOiBzdHJpbmcpOiBQcm9taXNlPEJsb2IgfCBzdHJpbmc+IHtcclxuICAgIGlmIChpbWFnZVVybC5zdGFydHNXaXRoKCdkYXRhOicpKSB7XHJcbiAgICAgIHJldHVybiBpbWFnZVVybDtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW1hZ2VVcmwpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCB0aGUgaW1hZ2UgZnJvbSAke2ltYWdlVXJsfTogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGltYWdlQmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgIHJldHVybiBpbWFnZUJsb2I7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgYWRkSW1hZ2VUb0Fubm90YXRpb25MYXllcih7IHVybE9yRGF0YVVybCwgcGFnZSwgbGVmdCwgYm90dG9tLCByaWdodCwgdG9wLCByb3RhdGlvbiB9OiBQZGZJbWFnZVBhcmFtZXRlcnMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XHJcbiAgICAgIGlmIChwYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAocGFnZSAhPT0gdGhpcy5jdXJyZW50UGFnZUluZGV4KCkpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMucmVuZGVyUGFnZShwYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFnZSA9IHRoaXMuY3VycmVudFBhZ2VJbmRleCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzQW5ub3RhdGlvbkVkaXRvck1vZGUgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuYW5ub3RhdGlvbkVkaXRvck1vZGU7XHJcbiAgICAgIHRoaXMuc3dpdGNoQW5ub3RhdGlvbkVkdG9yTW9kZSgxMyk7XHJcbiAgICAgIGNvbnN0IGRhdGFVcmwgPSBhd2FpdCB0aGlzLmxvYWRJbWFnZUFzRGF0YVVSTCh1cmxPckRhdGFVcmwpO1xyXG4gICAgICBjb25zdCBwYWdlU2l6ZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXNbcGFnZV0ucGRmUGFnZS52aWV3O1xyXG4gICAgICBjb25zdCBsZWZ0RGltID0gcGFnZVNpemVbMF07XHJcbiAgICAgIGNvbnN0IGJvdHRvbURpbSA9IHBhZ2VTaXplWzFdO1xyXG4gICAgICBjb25zdCByaWdodERpbSA9IHBhZ2VTaXplWzJdO1xyXG4gICAgICBjb25zdCB0b3BEaW0gPSBwYWdlU2l6ZVszXTtcclxuICAgICAgY29uc3Qgd2lkdGggPSByaWdodERpbSAtIGxlZnREaW07XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IHRvcERpbSAtIGJvdHRvbURpbTtcclxuICAgICAgY29uc3QgaW1hZ2VXaWR0aCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXNbcGFnZV0uZGl2LmNsaWVudFdpZHRoO1xyXG4gICAgICBjb25zdCBpbWFnZUhlaWdodCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXNbcGFnZV0uZGl2LmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IGxlZnRQZGYgPSB0aGlzLmNvbnZlcnRUb1BERkNvb3JkaW5hdGVzKGxlZnQsIHdpZHRoLCAwLCBpbWFnZVdpZHRoKTtcclxuICAgICAgY29uc3QgYm90dG9tUGRmID0gdGhpcy5jb252ZXJ0VG9QREZDb29yZGluYXRlcyhib3R0b20sIGhlaWdodCwgMCwgaW1hZ2VIZWlnaHQpO1xyXG4gICAgICBjb25zdCByaWdodFBkZiA9IHRoaXMuY29udmVydFRvUERGQ29vcmRpbmF0ZXMocmlnaHQsIHdpZHRoLCB3aWR0aCwgaW1hZ2VXaWR0aCk7XHJcbiAgICAgIGNvbnN0IHRvcFBkZiA9IHRoaXMuY29udmVydFRvUERGQ29vcmRpbmF0ZXModG9wLCBoZWlnaHQsIGhlaWdodCwgaW1hZ2VIZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3Qgc3RhbXBBbm5vdGF0aW9uOiBTdGFtcEVkaXRvckFubm90YXRpb24gPSB7XHJcbiAgICAgICAgYW5ub3RhdGlvblR5cGU6IDEzLFxyXG4gICAgICAgIHBhZ2VJbmRleDogcGFnZSxcclxuICAgICAgICBiaXRtYXBVcmw6IGRhdGFVcmwsXHJcbiAgICAgICAgcmVjdDogW2xlZnRQZGYsIGJvdHRvbVBkZiwgcmlnaHRQZGYsIHRvcFBkZl0sXHJcbiAgICAgICAgcm90YXRpb246IHJvdGF0aW9uID8/IDAsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYWRkRWRpdG9yQW5ub3RhdGlvbihzdGFtcEFubm90YXRpb24pO1xyXG4gICAgICBhd2FpdCB0aGlzLnNsZWVwKDEwKTtcclxuICAgICAgdGhpcy5zd2l0Y2hBbm5vdGF0aW9uRWR0b3JNb2RlKHByZXZpb3VzQW5ub3RhdGlvbkVkaXRvck1vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGN1cnJlbnRQYWdlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAoZ2xvYmFsVGhpcyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgcmV0dXJuIFBERlZpZXdlckFwcGxpY2F0aW9uPy5wZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXIgLSAxO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VG9QREZDb29yZGluYXRlcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkLCBtYXhWYWx1ZTogbnVtYmVyLCBkZWZhdWx0VmFsdWU6IG51bWJlciwgaW1hZ2VNYXhWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlmICh2YWx1ZS5lbmRzV2l0aCgnJScpKSB7XHJcbiAgICAgICAgcmV0dXJuIChwYXJzZUludCh2YWx1ZSwgMTApIC8gMTAwKSAqIG1heFZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmVuZHNXaXRoKCdweCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCkgKiAobWF4VmFsdWUgLyBpbWFnZU1heFZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN3aXRjaEFubm90YXRpb25FZHRvck1vZGUobW9kZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoYW5ub3RhdGlvbmVkaXRvcm1vZGUnLCB7IG1vZGUgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGVkaXRvckZvbnRTaXplKHNpemU6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZXRFZGl0b3JQcm9wZXJ0eShBbm5vdGF0aW9uRWRpdG9yUGFyYW1zVHlwZS5GUkVFVEVYVF9TSVpFLCBzaXplKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZWRpdG9yRm9udENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0RWRpdG9yUHJvcGVydHkoQW5ub3RhdGlvbkVkaXRvclBhcmFtc1R5cGUuRlJFRVRFWFRfQ09MT1IsIGNvbG9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZWRpdG9ySW5rQ29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRFZGl0b3JQcm9wZXJ0eShBbm5vdGF0aW9uRWRpdG9yUGFyYW1zVHlwZS5JTktfQ09MT1IsIGNvbG9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZWRpdG9ySW5rT3BhY2l0eShvcGFjaXR5OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2V0RWRpdG9yUHJvcGVydHkoQW5ub3RhdGlvbkVkaXRvclBhcmFtc1R5cGUuSU5LX09QQUNJVFksIG9wYWNpdHkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBlZGl0b3JJbmtUaGlja25lc3ModGhpY2tuZXNzOiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2V0RWRpdG9yUHJvcGVydHkoQW5ub3RhdGlvbkVkaXRvclBhcmFtc1R5cGUuSU5LX1RISUNLTkVTUywgdGhpY2tuZXNzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZWRpdG9ySGlnaGxpZ2h0Q29sb3IoY29sb3I6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZXRFZGl0b3JQcm9wZXJ0eShBbm5vdGF0aW9uRWRpdG9yUGFyYW1zVHlwZS5ISUdITElHSFRfQ09MT1IsIGNvbG9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZWRpdG9ySGlnaGxpZ2h0RGVmYXVsdENvbG9yKGNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2V0RWRpdG9yUHJvcGVydHkoQW5ub3RhdGlvbkVkaXRvclBhcmFtc1R5cGUuSElHSExJR0hUX0RFRkFVTFRfQ09MT1IsIGNvbG9yKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgZWRpdG9ySGlnaGxpZ2h0U2hvd0FsbChzaG93QWxsOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNldEVkaXRvclByb3BlcnR5KEFubm90YXRpb25FZGl0b3JQYXJhbXNUeXBlLkhJR0hMSUdIVF9TSE9XX0FMTCwgc2hvd0FsbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGVkaXRvckhpZ2hsaWdodFRoaWNrbmVzcyh0aGlja25lc3M6IG51bWJlcikge1xyXG4gICAgdGhpcy5zZXRFZGl0b3JQcm9wZXJ0eShBbm5vdGF0aW9uRWRpdG9yUGFyYW1zVHlwZS5ISUdITElHSFRfVEhJQ0tORVNTLCB0aGlja25lc3MpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldEVkaXRvclByb3BlcnR5KGVkaXRvclByb3BlcnR5VHlwZTogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKGdsb2JhbFRoaXMgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoYW5ub3RhdGlvbmVkaXRvcnBhcmFtcycsIHsgdHlwZTogZWRpdG9yUHJvcGVydHlUeXBlLCB2YWx1ZSB9KTtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uPy5ldmVudEJ1cy5kaXNwYXRjaCgnYW5ub3RhdGlvbmVkaXRvcnBhcmFtc2NoYW5nZWQnLCB7IGRldGFpbHM6IFtbZWRpdG9yUHJvcGVydHlUeXBlLCB2YWx1ZV1dIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=