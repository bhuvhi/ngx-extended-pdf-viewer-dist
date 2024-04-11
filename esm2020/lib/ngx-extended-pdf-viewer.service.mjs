import { Subject } from 'rxjs';
export class NgxExtendedPdfViewerService {
    constructor() {
        this.ngxExtendedPdfViewerInitialized = false;
        this.recalculateSize$ = new Subject();
        this.secondaryMenuIsEmpty = false;
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
    async getPageAsLines(pageNumber) {
        const PDFViewerApplication = window.PDFViewerApplication;
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
    async getPageAsText(pageNumber) {
        const PDFViewerApplication = window.PDFViewerApplication;
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
    async getCurrentDocumentAsBlob() {
        const PDFViewerApplication = window.PDFViewerApplication;
        return await PDFViewerApplication.export();
    }
    async getFormData(currentFormValues = true) {
        const PDFViewerApplication = window.PDFViewerApplication;
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
        return pages?.map((page) => page.id);
    }
    recalculateSize() {
        this.recalculateSize$.next();
    }
    async listLayers() {
        const PDFViewerApplication = window.PDFViewerApplication;
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
        const PDFViewerApplication = window.PDFViewerApplication;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBMkMvQixNQUFNLE9BQU8sMkJBQTJCO0lBQXhDO1FBRVMsb0NBQStCLEdBQUcsS0FBSyxDQUFDO1FBRXhDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFFdkMseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBb2J0QyxDQUFDO0lBbGJRLElBQUksQ0FBQyxJQUFZLEVBQUUsVUFBdUIsRUFBRTtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFO1lBQ3pDLHFDQUFxQztZQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7WUFDeEYsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFxQixDQUFDO1lBQzdGLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQzthQUM5RDtZQUVELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXFCLENBQUM7WUFDdkYsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO2FBQ3hEO1lBQ0QsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFxQixDQUFDO1lBQ3pGLElBQUksa0JBQWtCLEVBQUU7Z0JBQ3RCLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQzthQUMxRDtZQUNELE1BQU0sdUJBQXVCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBcUIsQ0FBQztZQUNuRyxJQUFJLHVCQUF1QixFQUFFO2dCQUMzQix1QkFBdUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUM7YUFDcEU7WUFDRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztZQUM1RSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDeEIsbUJBQW1CO2dCQUNuQixVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEMsd0JBQXdCO2dCQUN4QixVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wscUNBQXFDO2dCQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7Z0JBQ3pGLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7SUFFTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRTtZQUN6QyxxQ0FBcUM7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1lBQzVGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRTtZQUN6QyxxQ0FBcUM7WUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnRkFBZ0YsQ0FBQyxDQUFDO1lBQ2hHLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDdkQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUEwQjtRQUNyQyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixVQUFVLEdBQUcsRUFBbUIsQ0FBQzthQUNsQztZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7UUFDQSxNQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCO1FBQ3JCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN4QyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxTQUFTLENBQUM7SUFDMUMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxVQUF5QjtRQUM1QyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDekYsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNwRyxDQUFDO0lBRU0saUJBQWlCLENBQUMsU0FBaUIsRUFBRSxLQUFvQjtRQUM5RCxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzVDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxFQUFFLENBQUM7YUFDVjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLFNBQWlCLEVBQUUsVUFBeUI7UUFDbkUsTUFBTSxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7WUFDbkIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFDMUIsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsSUFBSSxVQUFVLENBQUMsRUFBRSxFQUFFO1lBQ2pCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxVQUFrQjtRQUM1QyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1FBRXJELE1BQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7YUFDeEQsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMscUNBQXFDO1FBRXpFLE1BQU0sUUFBUSxHQUFHLFlBQStCLENBQUM7UUFFakQsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ25DLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7UUFDbkMsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1FBQ25DLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVEsQ0FBQztRQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7Z0JBQzFCLE1BQU0sQ0FBQyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztnQkFDbkMsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztnQkFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDO2dCQUMzQixJQUFJLGNBQWMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO29CQUNoQyxRQUFRLEVBQUUsQ0FBQztpQkFDWjtnQkFDRCxJQUFJLGNBQWMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO29CQUNoQyxRQUFRLEVBQUUsQ0FBQztpQkFDWjthQUNGO1lBRUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUM7WUFDL0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxTQUFTLEdBQWtCLFNBQVMsQ0FBQztnQkFDekMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUU7b0JBQ2hDLFNBQVMsR0FBRyxNQUFNLENBQUM7aUJBQ3BCO3FCQUFNLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRTtvQkFDdkIsU0FBUyxHQUFHLEtBQUssQ0FBQztpQkFDbkI7cUJBQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUN2QixTQUFTLEdBQUcsS0FBSyxDQUFDO2lCQUNuQjtnQkFDRCxNQUFNLElBQUksR0FBRztvQkFDWCxTQUFTO29CQUNULENBQUMsRUFBRSxJQUFJO29CQUNQLENBQUMsRUFBRSxJQUFJO29CQUNQLEtBQUssRUFBRSxJQUFJLEdBQUcsSUFBSTtvQkFDbEIsTUFBTSxFQUFFLElBQUksR0FBRyxJQUFJO29CQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtpQkFDVixDQUFDO2dCQUNWLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pCLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9CLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9CLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9CLElBQUksR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9CLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsUUFBUSxHQUFHLENBQUMsQ0FBQztnQkFDYixJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQ1g7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVNLEtBQUssQ0FBQyxhQUFhLENBQUMsVUFBa0I7UUFDM0MsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLE1BQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQztRQUVyRCxNQUFNLElBQUksR0FBRyxNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8scUJBQXFCLENBQUMsYUFBa0Q7UUFDOUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxhQUFhO2FBQ2pCLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0IsR0FBRyxDQUFDLENBQUMsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbkUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVNLGNBQWMsQ0FBQyxVQUFrQixFQUFFLEtBQTJCLEVBQUUsVUFBbUIsRUFBRSwyQkFBbUMsU0FBUztRQUN0SSxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDO1FBQ3JELE1BQU0sV0FBVyxHQUFpQixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sWUFBWSxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBRW5ILE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sSUFBSSxDQUFDLE9BQVksRUFBRSxLQUEyQixFQUFFLFVBQW1CLEVBQUUsMkJBQW1DLFNBQVM7UUFDdkgsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUNmLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQzFCO2FBQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO1lBQ3RCLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDcEU7YUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdkIsVUFBVSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUN0RTtRQUNELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDbkMsS0FBSyxFQUFFLFVBQVU7U0FDbEIsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRDLE1BQU0sYUFBYSxHQUFHO1lBQ3BCLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFVBQVU7WUFDVix3QkFBd0I7U0FDekIsQ0FBQztRQUNGLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFakQsTUFBTSxjQUFjLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUVqRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxLQUFhLEVBQUUsTUFBYztRQUN0RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLHNDQUFzQztZQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLEtBQUssSUFBSSxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUM7UUFFcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sS0FBSyxDQUFDLHdCQUF3QjtRQUNuQyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsT0FBTyxNQUFNLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFTSxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixHQUFHLElBQUk7UUFDL0MsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLE1BQU0sR0FBRyxHQUFpQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUM7UUFDM0UsdUJBQXVCO1FBQ3ZCLE1BQU0sUUFBUSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDekIsTUFBTSxNQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2Qyx5QkFBeUI7WUFDekIsTUFBTSxXQUFXLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELE1BQU0sV0FBVyxHQUFHLE1BQU0sV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXZELFdBQVc7aUJBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLHNDQUFzQztpQkFDNUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsOERBQThEO2lCQUNyRixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDYixvREFBb0Q7Z0JBQ3BELDZDQUE2QztnQkFDN0MsTUFBTSxTQUFTLEdBQWtCLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWpILDhCQUE4QjtnQkFDOUIsSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFO29CQUNwQyxJQUFJO3dCQUNGLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRTs0QkFDakIsTUFBTSxZQUFZLEdBQVEsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ25JLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFLEtBQUssQ0FBQzt5QkFDL0I7NkJBQU0sSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFOzRCQUN4QixNQUFNLFlBQVksR0FBUSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDbEksQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsS0FBSyxDQUFDO3lCQUMvQjs2QkFBTTs0QkFDTCxNQUFNLFlBQVksR0FBUSxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDN0csQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUUsS0FBSyxDQUFDO3lCQUMvQjtxQkFDRjtvQkFBQyxPQUFPLFNBQVMsRUFBRTt3QkFDbEIsaUJBQWlCO3FCQUNsQjtpQkFDRjtnQkFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsZUFBZSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9CQUFvQixDQUFDLFNBQWlCO1FBQzNDLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixPQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQztRQUMxQixNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDMUIsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLE1BQU0sUUFBUSxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQy9FLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUNqRCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUNyQyxZQUFZLEVBQ1osV0FBVyxDQUNaLENBQUM7UUFDRixPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ25CLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxTQUFpQjtRQUMxQyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxLQUFLLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUNwRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLEtBQUssQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDbkI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTSxzQkFBc0I7UUFDM0IsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLE1BQU0sS0FBSyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDcEQsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxhQUFhO1FBQ2xCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixNQUFNLEtBQUssR0FBRyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBRU0sOEJBQThCO1FBQ25DLE1BQU0sR0FBRyxHQUFJLE1BQWMsQ0FBQyxvQkFBNkMsQ0FBQztRQUMxRSxNQUFNLEtBQUssR0FBSSxHQUFHLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFVLENBQUMsS0FBbUIsQ0FBQztRQUM1RSxPQUFPLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUV6RixNQUFNLHFCQUFxQixHQUFHLE1BQU0sb0JBQW9CLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDO1FBQ2hHLElBQUkscUJBQXFCLEVBQUU7WUFDekIsTUFBTSxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbkQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDNUUsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzlCLE1BQU0sTUFBTSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkQsT0FBTztvQkFDTCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO29CQUNqQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU87aUJBQ1osQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVNLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBZTtRQUN0QyxNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQztRQUNoRyxJQUFJLHFCQUFxQixFQUFFO1lBQ3pCLElBQUksU0FBUyxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDaEUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDbEUsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osU0FBUyxHQUFJLFFBQTZCLENBQUMsT0FBTyxDQUFDO2dCQUNsRCxRQUE2QixDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQzthQUNyRDtZQUNELHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO2dCQUM5RCxNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQzthQUNoRCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxVQUFrQixFQUFFLFFBQTREO1FBQ3hHLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixNQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxTQUFnQixDQUFDO1FBQ3JELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLHdCQUF3QjtRQUM3QixNQUFNLG9CQUFvQixHQUEyQixNQUFjLENBQUMsb0JBQW9CLENBQUM7UUFDekYsT0FBTyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNuRSxDQUFDO0lBRU0sbUJBQW1CLENBQUMsb0JBQStDO1FBQ3hFLE1BQU0sb0JBQW9CLEdBQTJCLE1BQWMsQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RixvQkFBb0IsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRU0sdUJBQXVCLENBQUMsTUFBd0M7UUFDckUsTUFBTSxvQkFBb0IsR0FBMkIsTUFBYyxDQUFDLG9CQUFvQixDQUFDO1FBQ3pGLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFBkZkxheWVyIH0gZnJvbSAnLi9vcHRpb25zL29wdGlvbmFsX2NvbnRlbnRfY29uZmlnJztcclxuaW1wb3J0IHsgUERGUHJpbnRSYW5nZSB9IGZyb20gJy4vb3B0aW9ucy9wZGYtcHJpbnQtcmFuZ2UnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24sIFBERkRvY3VtZW50UHJveHksIFRleHRJdGVtLCBUZXh0TWFya2VkQ29udGVudCB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgRWRpdG9yQW5ub3RhdGlvbiB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZE9wdGlvbnMge1xyXG4gIGhpZ2hsaWdodEFsbD86IGJvb2xlYW47XHJcbiAgbWF0Y2hDYXNlPzogYm9vbGVhbjtcclxuICB3aG9sZVdvcmRzPzogYm9vbGVhbjtcclxuICBtYXRjaERpYWNyaXRpY3M/OiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRHJhd0NvbnRleHQge1xyXG4gIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUERGRXhwb3J0U2NhbGVGYWN0b3Ige1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuICBzY2FsZT86IG51bWJlcjtcclxufVxyXG5cclxudHlwZSBEaXJlY3Rpb25UeXBlID0gJ2x0cicgfCAncnRsJyB8ICdib3RoJyB8IHVuZGVmaW5lZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZSB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIGRpcmVjdGlvbjogRGlyZWN0aW9uVHlwZTtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgZGlyZWN0aW9uOiBEaXJlY3Rpb25UeXBlO1xyXG4gIGxpbmVzOiBBcnJheTxMaW5lPjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB7XHJcblxyXG4gIHB1YmxpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyByZWNhbGN1bGF0ZVNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHVibGljIHNlY29uZGFyeU1lbnVJc0VtcHR5ID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBmaW5kKHRleHQ6IHN0cmluZywgb3B0aW9uczogRmluZE9wdGlvbnMgPSB7fSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFBERiB2aWV3ZXIgaGFzbid0IGZpbmlzaGVkIGluaXRpYWxpemluZy4gUGxlYXNlIGNhbGwgZmluZCgpIGxhdGVyLlwiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaGlnaGxpZ2h0QWxsQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEhpZ2hsaWdodEFsbCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChoaWdobGlnaHRBbGxDaGVja2JveCkge1xyXG4gICAgICAgIGhpZ2hsaWdodEFsbENoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLmhpZ2hsaWdodEFsbCA/PyBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbWF0Y2hDYXNlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZE1hdGNoQ2FzZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChtYXRjaENhc2VDaGVja2JveCkge1xyXG4gICAgICAgIG1hdGNoQ2FzZUNoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLm1hdGNoQ2FzZSA/PyBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBlbnRpcmVXb3JkQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEVudGlyZVdvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBpZiAoZW50aXJlV29yZENoZWNrYm94KSB7XHJcbiAgICAgICAgZW50aXJlV29yZENoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLndob2xlV29yZHMgPz8gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbWF0Y2hEaWFjcml0aWNzQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZE1hdGNoRGlhY3JpdGljcycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChtYXRjaERpYWNyaXRpY3NDaGVja2JveCkge1xyXG4gICAgICAgIG1hdGNoRGlhY3JpdGljc0NoZWNrYm94LmNoZWNrZWQgPSBvcHRpb25zLm1hdGNoRGlhY3JpdGljcyA/PyBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGlmIChpbnB1dEZpZWxkKSB7XHJcbiAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IHRleHQ7XHJcbiAgICAgICAgLy8gdG9kbyBkaXJ0eSBoYWNrIVxyXG4gICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgLy8gZW5kIG9mIHRoZSBkaXJ0eSBoYWNrXHJcbiAgICAgICAgaW5wdXRGaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmV4cGVjdGVkIGVycm9yOiB0aGUgaW5wdXQgZmllbGQgdXNlZCB0byBzZWFyY2ggaXNuJ3QgcGFydCBvZiB0aGUgRE9NLlwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kTmV4dCgpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBQREYgdmlld2VyIGhhc24ndCBmaW5pc2hlZCBpbml0aWFsaXppbmcuIFBsZWFzZSBjYWxsIGZpbmROZXh0KCkgbGF0ZXIuXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZE5leHQnKTtcclxuICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaW5kUHJldmlvdXMoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgUERGIHZpZXdlciBoYXNuJ3QgZmluaXNoZWQgaW5pdGlhbGl6aW5nLiBQbGVhc2UgY2FsbCBmaW5kUHJldmlvdXMoKSBsYXRlci5cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kUHJldmlvdXMnKTtcclxuICAgICAgaWYgKGJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5jbGljaygpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcmludChwcmludFJhbmdlPzogUERGUHJpbnRSYW5nZSkge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IGFscmVhZHlUaGVyZSA9ICEhd2luZG93Wydpc0luUERGUHJpbnRSYW5nZSddICYmICFwcmludFJhbmdlO1xyXG4gICAgaWYgKCFhbHJlYWR5VGhlcmUpIHtcclxuICAgICAgaWYgKCFwcmludFJhbmdlKSB7XHJcbiAgICAgICAgcHJpbnRSYW5nZSA9IHt9IGFzIFBERlByaW50UmFuZ2U7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZXRQcmludFJhbmdlKHByaW50UmFuZ2UpO1xyXG4gICAgfVxyXG4gICAgKHdpbmRvdyBhcyBhbnkpLnByaW50UERGKCk7XHJcbiAgICBpZiAoIWFscmVhZHlUaGVyZSkge1xyXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignYWZ0ZXJwcmludCcsICgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZVByaW50UmFuZ2UoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlUHJpbnRSYW5nZSgpIHtcclxuICAgIHdpbmRvd1snaXNJblBERlByaW50UmFuZ2UnXSA9IHVuZGVmaW5lZDtcclxuICAgIHdpbmRvd1snZmlsdGVyZWRQYWdlQ291bnQnXSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRQcmludFJhbmdlKHByaW50UmFuZ2U6IFBERlByaW50UmFuZ2UpIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICB3aW5kb3dbJ2lzSW5QREZQcmludFJhbmdlJ10gPSAocGFnZTogbnVtYmVyKSA9PiB0aGlzLmlzSW5QREZQcmludFJhbmdlKHBhZ2UsIHByaW50UmFuZ2UpO1xyXG4gICAgd2luZG93WydmaWx0ZXJlZFBhZ2VDb3VudCddID0gdGhpcy5maWx0ZXJlZFBhZ2VDb3VudChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50LCBwcmludFJhbmdlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJlZFBhZ2VDb3VudChwYWdlQ291bnQ6IG51bWJlciwgcmFuZ2U6IFBERlByaW50UmFuZ2UpOiBudW1iZXIge1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBmb3IgKGxldCBwYWdlID0gMTsgcGFnZSA8PSBwYWdlQ291bnQ7IHBhZ2UrKykge1xyXG4gICAgICBpZiAodGhpcy5pc0luUERGUHJpbnRSYW5nZShwYWdlLCByYW5nZSkpIHtcclxuICAgICAgICByZXN1bHQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0luUERGUHJpbnRSYW5nZShwYWdlSW5kZXg6IG51bWJlciwgcHJpbnRSYW5nZTogUERGUHJpbnRSYW5nZSkge1xyXG4gICAgY29uc3QgcGFnZSA9IHBhZ2VJbmRleCArIDE7XHJcbiAgICBpZiAocHJpbnRSYW5nZS5mcm9tKSB7XHJcbiAgICAgIGlmIChwYWdlIDwgcHJpbnRSYW5nZS5mcm9tKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocHJpbnRSYW5nZS50bykge1xyXG4gICAgICBpZiAocGFnZSA+IHByaW50UmFuZ2UudG8pIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChwcmludFJhbmdlLmV4Y2x1ZGVkKSB7XHJcbiAgICAgIGlmIChwcmludFJhbmdlLmV4Y2x1ZGVkLnNvbWUoKHApID0+IHAgPT09IHBhZ2UpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAocHJpbnRSYW5nZS5pbmNsdWRlZCkge1xyXG4gICAgICBpZiAoIXByaW50UmFuZ2UuaW5jbHVkZWQuc29tZSgocCkgPT4gcCA9PT0gcGFnZSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGdldFBhZ2VBc0xpbmVzKHBhZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8QXJyYXk8TGluZT4+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBwZGZEb2N1bWVudCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50O1xyXG5cclxuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGZEb2N1bWVudC5nZXRQYWdlKHBhZ2VOdW1iZXIpO1xyXG4gICAgY29uc3QgdGV4dFNuaXBwZXRzID0gKGF3YWl0IHBhZ2UuZ2V0VGV4dENvbnRlbnQoKSkuaXRlbXMgLy9cclxuICAgICAgLmZpbHRlcigoaW5mbykgPT4gIWluZm9bJ3R5cGUnXSk7IC8vIGlnbm9yZSB0aGUgVGV4dE1hcmtlZENvbnRlbnQgaXRlbXNcclxuXHJcbiAgICBjb25zdCBzbmlwcGV0cyA9IHRleHRTbmlwcGV0cyBhcyBBcnJheTxUZXh0SXRlbT47XHJcblxyXG4gICAgbGV0IG1pblggPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgIGxldCBtaW5ZID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICBsZXQgbWF4WCA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xyXG4gICAgbGV0IG1heFkgPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUjtcclxuICAgIGxldCBjb3VudExUUiA9IDA7XHJcbiAgICBsZXQgY291bnRSVEwgPSAwO1xyXG4gICAgbGV0IHRleHQgPSAnJztcclxuICAgIGxldCBsaW5lcyA9IG5ldyBBcnJheTxMaW5lPigpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbmlwcGV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjdXJyZW50U25pcHBldCA9IHNuaXBwZXRzW2ldO1xyXG4gICAgICBpZiAoIWN1cnJlbnRTbmlwcGV0Lmhhc0VPTCkge1xyXG4gICAgICAgIGNvbnN0IHggPSBjdXJyZW50U25pcHBldC50cmFuc2Zvcm1bNF07XHJcbiAgICAgICAgY29uc3QgeSA9IC1jdXJyZW50U25pcHBldC50cmFuc2Zvcm1bNV07XHJcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50U25pcHBldC53aWR0aDtcclxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjdXJyZW50U25pcHBldC5oZWlnaHQ7XHJcbiAgICAgICAgbWluWCA9IE1hdGgubWluKG1pblgsIHgpO1xyXG4gICAgICAgIG1pblkgPSBNYXRoLm1pbihtaW5ZLCB5KTtcclxuICAgICAgICBtYXhYID0gTWF0aC5tYXgobWF4WCwgeCArIHdpZHRoKTtcclxuICAgICAgICBtYXhZID0gTWF0aC5tYXgobWF4WSwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGV4dCArPSBjdXJyZW50U25pcHBldC5zdHI7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTbmlwcGV0LmRpciA9PT0gJ3J0bCcpIHtcclxuICAgICAgICAgIGNvdW50UlRMKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50U25pcHBldC5kaXIgPT09ICdsdHInKSB7XHJcbiAgICAgICAgICBjb3VudExUUisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGFkZEl0ID0gaSA9PT0gc25pcHBldHMubGVuZ3RoIC0gMSB8fCBjdXJyZW50U25pcHBldC5oYXNFT0w7XHJcbiAgICAgIGlmIChhZGRJdCkge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvblR5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGNvdW50TFRSID4gMCAmJiBjb3VudFJUTCA+IDApIHtcclxuICAgICAgICAgIGRpcmVjdGlvbiA9ICdib3RoJztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvdW50TFRSID4gMCkge1xyXG4gICAgICAgICAgZGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb3VudFJUTCA+IDApIHtcclxuICAgICAgICAgIGRpcmVjdGlvbiA9ICdydGwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsaW5lID0ge1xyXG4gICAgICAgICAgZGlyZWN0aW9uLFxyXG4gICAgICAgICAgeDogbWluWCxcclxuICAgICAgICAgIHk6IG1pblksXHJcbiAgICAgICAgICB3aWR0aDogbWF4WCAtIG1pblgsXHJcbiAgICAgICAgICBoZWlnaHQ6IG1heFkgLSBtaW5ZLFxyXG4gICAgICAgICAgdGV4dDogdGV4dC50cmltKCksXHJcbiAgICAgICAgfSBhcyBMaW5lO1xyXG4gICAgICAgIGxpbmVzLnB1c2gobGluZSk7XHJcbiAgICAgICAgbWluWCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIG1pblkgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcclxuICAgICAgICBtYXhYID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgbWF4WSA9IE51bWJlci5NSU5fU0FGRV9JTlRFR0VSO1xyXG4gICAgICAgIGNvdW50TFRSID0gMDtcclxuICAgICAgICBjb3VudFJUTCA9IDA7XHJcbiAgICAgICAgdGV4dCA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGluZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0UGFnZUFzVGV4dChwYWdlTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IHBkZkRvY3VtZW50ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQ7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IHBkZkRvY3VtZW50LmdldFBhZ2UocGFnZU51bWJlcik7XHJcbiAgICBjb25zdCB0ZXh0U25pcHBldHMgPSAoYXdhaXQgcGFnZS5nZXRUZXh0Q29udGVudCgpKS5pdGVtcztcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnRUZXh0SW5mb1RvVGV4dCh0ZXh0U25pcHBldHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb252ZXJ0VGV4dEluZm9Ub1RleHQodGV4dEluZm9JdGVtczogQXJyYXk8VGV4dEl0ZW0gfCBUZXh0TWFya2VkQ29udGVudD4pOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0ZXh0SW5mb0l0ZW1zKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB0ZXh0SW5mb0l0ZW1zXHJcbiAgICAgIC5maWx0ZXIoKGluZm8pID0+ICFpbmZvWyd0eXBlJ10pXHJcbiAgICAgIC5tYXAoKGluZm86IFRleHRJdGVtKSA9PiAoaW5mby5oYXNFT0wgPyBpbmZvLnN0ciArICdcXG4nIDogaW5mby5zdHIpKVxyXG4gICAgICAuam9pbignJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0UGFnZUFzSW1hZ2UocGFnZU51bWJlcjogbnVtYmVyLCBzY2FsZTogUERGRXhwb3J0U2NhbGVGYWN0b3IsIGJhY2tncm91bmQ/OiBzdHJpbmcsIGJhY2tncm91bmRDb2xvclRvUmVwbGFjZTogc3RyaW5nID0gJyNGRkZGRkYnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBwZGZEb2N1bWVudCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50O1xyXG4gICAgY29uc3QgcGFnZVByb21pc2U6IFByb21pc2U8YW55PiA9IHBkZkRvY3VtZW50LmdldFBhZ2UocGFnZU51bWJlcik7XHJcbiAgICBjb25zdCBpbWFnZVByb21pc2UgPSAocGRmUGFnZSkgPT4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuZHJhdyhwZGZQYWdlLCBzY2FsZSwgYmFja2dyb3VuZCwgYmFja2dyb3VuZENvbG9yVG9SZXBsYWNlKSk7XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VQcm9taXNlLnRoZW4oaW1hZ2VQcm9taXNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhdyhwZGZQYWdlOiBhbnksIHNjYWxlOiBQREZFeHBvcnRTY2FsZUZhY3RvciwgYmFja2dyb3VuZD86IHN0cmluZywgYmFja2dyb3VuZENvbG9yVG9SZXBsYWNlOiBzdHJpbmcgPSAnI0ZGRkZGRicpOiBQcm9taXNlPEhUTUxDYW52YXNFbGVtZW50PiB7XHJcbiAgICBsZXQgem9vbUZhY3RvciA9IDE7XHJcbiAgICBpZiAoc2NhbGUuc2NhbGUpIHtcclxuICAgICAgem9vbUZhY3RvciA9IHNjYWxlLnNjYWxlO1xyXG4gICAgfSBlbHNlIGlmIChzY2FsZS53aWR0aCkge1xyXG4gICAgICB6b29tRmFjdG9yID0gc2NhbGUud2lkdGggLyBwZGZQYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IDEgfSkud2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKHNjYWxlLmhlaWdodCkge1xyXG4gICAgICB6b29tRmFjdG9yID0gc2NhbGUuaGVpZ2h0IC8gcGRmUGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiAxIH0pLmhlaWdodDtcclxuICAgIH1cclxuICAgIGNvbnN0IHZpZXdwb3J0ID0gcGRmUGFnZS5nZXRWaWV3cG9ydCh7XHJcbiAgICAgIHNjYWxlOiB6b29tRmFjdG9yLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB7IGN0eCwgY2FudmFzIH0gPSB0aGlzLmdldFBhZ2VEcmF3Q29udGV4dCh2aWV3cG9ydC53aWR0aCwgdmlld3BvcnQuaGVpZ2h0KTtcclxuICAgIGNvbnN0IGRyYXdWaWV3cG9ydCA9IHZpZXdwb3J0LmNsb25lKCk7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ29udGV4dCA9IHtcclxuICAgICAgY2FudmFzQ29udGV4dDogY3R4LFxyXG4gICAgICB2aWV3cG9ydDogZHJhd1ZpZXdwb3J0LFxyXG4gICAgICBiYWNrZ3JvdW5kLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3JUb1JlcGxhY2UsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcmVuZGVyVGFzayA9IHBkZlBhZ2UucmVuZGVyKHJlbmRlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGRhdGFVcmxQcm9taXNlID0gKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGNhbnZhcy50b0RhdGFVUkwoKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlbmRlclRhc2sucHJvbWlzZS50aGVuKGRhdGFVcmxQcm9taXNlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGFnZURyYXdDb250ZXh0KHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogRHJhd0NvbnRleHQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnLCB7IGFscGhhOiB0cnVlIH0pO1xyXG4gICAgaWYgKCFjdHgpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBxdW90ZW1hcmtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgY3JlYXRlIHRoZSAyZCBjb250ZXh0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcclxuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgO1xyXG5cclxuICAgIHJldHVybiB7IGN0eCwgY2FudmFzIH07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0Q3VycmVudERvY3VtZW50QXNCbG9iKCk6IFByb21pc2U8QmxvYj4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHJldHVybiBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5leHBvcnQoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRGb3JtRGF0YShjdXJyZW50Rm9ybVZhbHVlcyA9IHRydWUpOiBQcm9taXNlPEFycmF5PE9iamVjdD4+IHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBwZGY6IFBERkRvY3VtZW50UHJveHkgfCB1bmRlZmluZWQgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudDtcclxuICAgIC8vIHNjcmVlbiBEUEkgLyBQREYgRFBJXHJcbiAgICBjb25zdCBkcGlSYXRpbyA9IDk2IC8gNzI7XHJcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PE9iamVjdD4gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHBkZj8ubnVtUGFnZXM7IGkrKykge1xyXG4gICAgICAvLyB0cmFjayB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQYWdlIC8qIDogUERGUGFnZVByb3h5ICovID0gYXdhaXQgcGRmLmdldFBhZ2UoaSk7XHJcbiAgICAgIGNvbnN0IGFubm90YXRpb25zID0gYXdhaXQgY3VycmVudFBhZ2UuZ2V0QW5ub3RhdGlvbnMoKTtcclxuXHJcbiAgICAgIGFubm90YXRpb25zXHJcbiAgICAgICAgLmZpbHRlcigoYSkgPT4gYS5zdWJ0eXBlID09PSAnV2lkZ2V0JykgLy8gZ2V0IHRoZSBmb3JtIGZpZWxkIGFubm90YXRpb25zIG9ubHlcclxuICAgICAgICAubWFwKChhKSA9PiAoeyAuLi5hIH0pKSAvLyBvbmx5IGV4cG9zZSBjb3BpZXMgb2YgdGhlIGFubm90YXRpb25zIHRvIGF2b2lkIHNpZGUtZWZmZWN0c1xyXG4gICAgICAgIC5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgICAvLyBnZXQgdGhlIHJlY3RhbmdsZSB0aGF0IHJlcHJlc2VudCB0aGUgc2luZ2xlIGZpZWxkXHJcbiAgICAgICAgICAvLyBhbmQgcmVzaXplIGl0IGFjY29yZGluZyB0byB0aGUgY3VycmVudCBEUElcclxuICAgICAgICAgIGNvbnN0IGZpZWxkUmVjdDogQXJyYXk8bnVtYmVyPiA9IGN1cnJlbnRQYWdlLmdldFZpZXdwb3J0KHsgc2NhbGU6IGRwaVJhdGlvIH0pLmNvbnZlcnRUb1ZpZXdwb3J0UmVjdGFuZ2xlKGEucmVjdCk7XHJcblxyXG4gICAgICAgICAgLy8gYWRkIHRoZSBjb3JyZXNwb25kaW5nIGlucHV0XHJcbiAgICAgICAgICBpZiAoY3VycmVudEZvcm1WYWx1ZXMgJiYgYS5maWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBpZiAoYS5leHBvcnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBhbnkgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5nZXRWYWx1ZShhLmlkLCBhLmZpZWxkTmFtZSArICcvJyArIGEuZXhwb3J0VmFsdWUsICcnKTtcclxuICAgICAgICAgICAgICAgIGEudmFsdWUgPSBjdXJyZW50VmFsdWU/LnZhbHVlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYS5yYWRpb0J1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBhbnkgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudC5hbm5vdGF0aW9uU3RvcmFnZS5nZXRWYWx1ZShhLmlkLCBhLmZpZWxkTmFtZSArICcvJyArIGEuZmllbGRWYWx1ZSwgJycpO1xyXG4gICAgICAgICAgICAgICAgYS52YWx1ZSA9IGN1cnJlbnRWYWx1ZT8udmFsdWU7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZTogYW55ID0gUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuYW5ub3RhdGlvblN0b3JhZ2UuZ2V0VmFsdWUoYS5pZCwgYS5maWVsZE5hbWUsICcnKTtcclxuICAgICAgICAgICAgICAgIGEudmFsdWUgPSBjdXJyZW50VmFsdWU/LnZhbHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgLy8ganVzdCBpZ25vcmUgaXRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0LnB1c2goeyBmaWVsZEFubm90YXRpb246IGEsIGZpZWxkUmVjdCwgcGFnZU51bWJlcjogaSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgcGFnZSB0byB0aGUgcmVuZGVyaW5nIHF1ZXVlXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VJbmRleCBJbmRleCBvZiB0aGUgcGFnZSB0byByZW5kZXJcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gZmFsc2UsIGlmIHRoZSBwYWdlIGhhcyBhbHJlYWR5IGJlZW4gcmVuZGVyZWRcclxuICAgKiBvciBpZiBpdCdzIG91dCBvZiByYW5nZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRQYWdlVG9SZW5kZXJRdWV1ZShwYWdlSW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHJldHVybiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuYWRkUGFnZVRvUmVuZGVyUXVldWUocGFnZUluZGV4KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc1JlbmRlclF1ZXVlRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBzY3JvbGxlZERvd24gPSB0cnVlO1xyXG4gICAgY29uc3QgcmVuZGVyRXh0cmEgPSBmYWxzZTtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBuZXh0UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5yZW5kZXJpbmdRdWV1ZS5nZXRIaWdoZXN0UHJpb3JpdHkoXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fZ2V0VmlzaWJsZVBhZ2VzKCksXHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXMsXHJcbiAgICAgIHNjcm9sbGVkRG93bixcclxuICAgICAgcmVuZGVyRXh0cmFcclxuICAgICk7XHJcbiAgICByZXR1cm4gIW5leHRQYWdlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc1BhZ2VCZWVuUmVuZGVyZWQocGFnZUluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCBwYWdlcyA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5fcGFnZXM7XHJcbiAgICBpZiAocGFnZXMubGVuZ3RoID4gcGFnZUluZGV4ICYmIHBhZ2VJbmRleCA+PSAwKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VWaWV3ID0gcGFnZXNbcGFnZUluZGV4XTtcclxuICAgICAgY29uc3QgaXNMb2FkaW5nID0gcGFnZVZpZXcucmVuZGVyaW5nU3RhdGUgPT09IDM7XHJcbiAgICAgIHJldHVybiAhaXNMb2FkaW5nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGN1cnJlbnRseVJlbmRlcmVkUGFnZXMoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGFnZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuX3BhZ2VzO1xyXG4gICAgcmV0dXJuIHBhZ2VzLmZpbHRlcigocGFnZSkgPT4gcGFnZS5yZW5kZXJpbmdTdGF0ZSA9PT0gMykubWFwKChwYWdlKSA9PiBwYWdlLmlkKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBudW1iZXJPZlBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGFnZXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuX3BhZ2VzO1xyXG4gICAgcmV0dXJuIHBhZ2VzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDdXJyZW50bHlWaXNpYmxlUGFnZU51bWJlcnMoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICBjb25zdCBhcHAgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb24gYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgY29uc3QgcGFnZXMgPSAoYXBwLnBkZlZpZXdlci5fZ2V0VmlzaWJsZVBhZ2VzKCkgYXMgYW55KS52aWV3cyBhcyBBcnJheTxhbnk+O1xyXG4gICAgcmV0dXJuIHBhZ2VzPy5tYXAoKHBhZ2UpID0+IHBhZ2UuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlY2FsY3VsYXRlU2l6ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVjYWxjdWxhdGVTaXplJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbGlzdExheWVycygpOiBQcm9taXNlPEFycmF5PFBkZkxheWVyPiB8IHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuXHJcbiAgICBjb25zdCBvcHRpb25hbENvbnRlbnRDb25maWcgPSBhd2FpdCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIub3B0aW9uYWxDb250ZW50Q29uZmlnUHJvbWlzZTtcclxuICAgIGlmIChvcHRpb25hbENvbnRlbnRDb25maWcpIHtcclxuICAgICAgY29uc3QgbGV2ZWxEYXRhID0gb3B0aW9uYWxDb250ZW50Q29uZmlnLmdldE9yZGVyKCk7XHJcbiAgICAgIGNvbnN0IGxheWVySWRzID0gbGV2ZWxEYXRhLmZpbHRlcigoZ3JvdXBJZCkgPT4gdHlwZW9mIGdyb3VwSWQgIT09ICdvYmplY3QnKTtcclxuICAgICAgcmV0dXJuIGxheWVySWRzLm1hcCgobGF5ZXJJZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG9wdGlvbmFsQ29udGVudENvbmZpZy5nZXRHcm91cChsYXllcklkKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGF5ZXJJZDogbGF5ZXJJZCxcclxuICAgICAgICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxyXG4gICAgICAgICAgdmlzaWJsZTogY29uZmlnLnZpc2libGUsXHJcbiAgICAgICAgfSBhcyBQZGZMYXllcjtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHRvZ2dsZUxheWVyKGxheWVySWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIGNvbnN0IG9wdGlvbmFsQ29udGVudENvbmZpZyA9IGF3YWl0IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5vcHRpb25hbENvbnRlbnRDb25maWdQcm9taXNlO1xyXG4gICAgaWYgKG9wdGlvbmFsQ29udGVudENvbmZpZykge1xyXG4gICAgICBsZXQgaXNWaXNpYmxlID0gb3B0aW9uYWxDb250ZW50Q29uZmlnLmdldEdyb3VwKGxheWVySWQpLnZpc2libGU7XHJcbiAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbaWQ9JyR7bGF5ZXJJZH0nXWApO1xyXG4gICAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgICBpc1Zpc2libGUgPSAoY2hlY2tib3ggYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZDtcclxuICAgICAgICAoY2hlY2tib3ggYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9ICFpc1Zpc2libGU7XHJcbiAgICAgIH1cclxuICAgICAgb3B0aW9uYWxDb250ZW50Q29uZmlnLnNldFZpc2liaWxpdHkobGF5ZXJJZCwgIWlzVmlzaWJsZSk7XHJcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdvcHRpb25hbGNvbnRlbnRjb25maWcnLCB7XHJcbiAgICAgICAgc291cmNlOiB0aGlzLFxyXG4gICAgICAgIHByb21pc2U6IFByb21pc2UucmVzb2x2ZShvcHRpb25hbENvbnRlbnRDb25maWcpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzY3JvbGxQYWdlSW50b1ZpZXcocGFnZU51bWJlcjogbnVtYmVyLCBwYWdlU3BvdD86IHsgdG9wPzogbnVtYmVyIHwgc3RyaW5nOyBsZWZ0PzogbnVtYmVyIHwgc3RyaW5nIH0pOiB2b2lkIHtcclxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICBjb25zdCB2aWV3ZXIgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIgYXMgYW55O1xyXG4gICAgdmlld2VyLnNjcm9sbFBhZ2VQb3NJbnRvVmlldyhwYWdlTnVtYmVyLCBwYWdlU3BvdCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0U2VyaWFsaXplZEFubm90YXRpb25zKCk6IEVkaXRvckFubm90YXRpb25bXSB8IG51bGwge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIHJldHVybiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuZ2V0U2VyaWFsaXplZEFubm90YXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkRWRpdG9yQW5ub3RhdGlvbihzZXJpYWxpemVkQW5ub3RhdGlvbjogc3RyaW5nIHwgRWRpdG9yQW5ub3RhdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcclxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5hZGRFZGl0b3JBbm5vdGF0aW9uKHNlcmlhbGl6ZWRBbm5vdGF0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW1vdmVFZGl0b3JBbm5vdGF0aW9ucyhmaWx0ZXI/OiAoc2VyaWFsaXplZDogb2JqZWN0KSA9PiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnJlbW92ZUVkaXRvckFubm90YXRpb25zKGZpbHRlcik7XHJcbiAgfVxyXG59XHJcbiJdfQ==