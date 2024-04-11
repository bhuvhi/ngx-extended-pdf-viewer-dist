import { Component } from '@angular/core';
import * as i0 from "@angular/core";
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
export class PdfDummyComponentsComponent {
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
/** @nocollapse */ PdfDummyComponentsComponent.ɵfac = function PdfDummyComponentsComponent_Factory(t) { return new (t || PdfDummyComponentsComponent)(); };
/** @nocollapse */ PdfDummyComponentsComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfDummyComponentsComponent, selectors: [["pdf-dummy-components"]], decls: 1, vars: 0, consts: [[1, "invisible", "dummy-pdf-viewer-components"]], template: function PdfDummyComponentsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfDummyComponentsComponent, [{
        type: Component,
        args: [{ selector: 'pdf-dummy-components', template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLGdEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFVBQVU7SUFD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Q0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7eUhBeENVLDJCQUEyQjs2R0FBM0IsMkJBQTJCO1FDeEh4QywwQkFDTzs7dUZEdUhNLDJCQUEyQjtjQUp2QyxTQUFTOzJCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIExpc3Qgb2YgYWxsIGZpZWxkcyB0aGF0IGNhbiBiZSBjdXN0b21pemVkICovXHJcbmNvbnN0IHJlcXVpcmVkSWRzID0gW1xyXG4gICdhdHRhY2htZW50c1ZpZXcnLFxyXG4gICdhdXRob3JGaWVsZCcsXHJcbiAgJ2NvbnRleHRGaXJzdFBhZ2UnLFxyXG4gICdjb250ZXh0TGFzdFBhZ2UnLFxyXG4gICdjb250ZXh0UGFnZVJvdGF0ZUNjdycsXHJcbiAgJ2NvbnRleHRQYWdlUm90YXRlQ3cnLFxyXG4gICdjcmVhdGlvbkRhdGVGaWVsZCcsXHJcbiAgJ2NyZWF0b3JGaWVsZCcsXHJcbiAgJ2N1cnJlbnRPdXRsaW5lSXRlbScsXHJcbiAgJ2N1cnNvckhhbmRUb29sJyxcclxuICAnY3Vyc29yU2VsZWN0VG9vbCcsXHJcbiAgJ2N1c3RvbVNjYWxlT3B0aW9uJyxcclxuICAnZG9jdW1lbnRQcm9wZXJ0aWVzJyxcclxuICAnZG9jdW1lbnRQcm9wZXJ0aWVzQ2xvc2UnLFxyXG4gICdkb3dubG9hZCcsXHJcbiAgJ2VkaXRvckZyZWVUZXh0JyxcclxuICAnZWRpdG9ySW5rJyxcclxuICAnZWRpdG9yU3RhbXAnLFxyXG4gICdlZGl0b3JNb2RlQnV0dG9ucycsXHJcbiAgJ2VkaXRvck5vbmUnLFxyXG4gICdlZGl0b3JTdGFtcEFkZEltYWdlJyxcclxuICAnZXJyb3JDbG9zZScsXHJcbiAgJ2Vycm9yTWVzc2FnZScsXHJcbiAgJ2Vycm9yTW9yZUluZm8nLFxyXG4gICdlcnJvclNob3dMZXNzJyxcclxuICAnZXJyb3JTaG93TW9yZScsXHJcbiAgJ2Vycm9yV3JhcHBlcicsXHJcbiAgJ2ZpbGVOYW1lRmllbGQnLFxyXG4gICdmaWxlU2l6ZUZpZWxkJyxcclxuICAnZmluZGJhcicsXHJcbiAgJ2ZpbmRDdXJyZW50UGFnZScsXHJcbiAgJ2ZpbmRFbnRpcmVXb3JkJyxcclxuICAnZmluZEZ1enp5JyxcclxuICAnZmluZEhpZ2hsaWdodEFsbCcsXHJcbiAgJ2ZpbmRJZ25vcmVBY2NlbnRzJyxcclxuICAnZmluZElucHV0JyxcclxuICAnZmluZElucHV0TXVsdGlsaW5lJyxcclxuICAnZmluZE1hdGNoQ2FzZScsXHJcbiAgJ2ZpbmRNYXRjaERpYWNyaXRpY3MnLFxyXG4gICdmaW5kTXNnJyxcclxuICAnZmluZE11bHRpcGxlU2VhcmNoVGV4dHMnLFxyXG4gICdmaW5kTmV4dCcsXHJcbiAgJ2ZpbmRQcmV2aW91cycsXHJcbiAgJ2ZpbmRSYW5nZScsXHJcbiAgJ2ZpbmRSZXN1bHRzQ291bnQnLFxyXG4gICdmaXJzdFBhZ2UnLFxyXG4gICdpbmRpdmlkdWFsV29yZHNNb2RlJyxcclxuICAnaW5kaXZpZHVhbFdvcmRzTW9kZUxhYmVsJyxcclxuICAna2V5d29yZHNGaWVsZCcsXHJcbiAgJ2xhc3RQYWdlJyxcclxuICAnbGluZWFyaXplZEZpZWxkJyxcclxuICAnbW9kaWZpY2F0aW9uRGF0ZUZpZWxkJyxcclxuICAnbmV4dCcsXHJcbiAgJ251bVBhZ2VzJyxcclxuICAnb3BlbkZpbGUnLFxyXG4gICdvdXRlckNvbnRhaW5lcicsXHJcbiAgJ291dGVyQ29udGFpbmVyJyxcclxuICAnb3V0bGluZU9wdGlvbnNDb250YWluZXInLFxyXG4gICdvdXRsaW5lVmlldycsXHJcbiAgJ3BhZ2VDb3VudEZpZWxkJyxcclxuICAncGFnZU51bWJlcicsXHJcbiAgJ3BhZ2VSb3RhdGVDY3cnLFxyXG4gICdwYWdlUm90YXRlQ3cnLFxyXG4gICdwYWdlU2l6ZUZpZWxkJyxcclxuICAncGFzc3dvcmQnLFxyXG4gICdwYXNzd29yZENhbmNlbCcsXHJcbiAgJ3Bhc3N3b3JkU3VibWl0JyxcclxuICAncGFzc3dvcmRUZXh0JyxcclxuICAncHJlc2VudGF0aW9uTW9kZScsXHJcbiAgJ3ByZXZpb3VzJyxcclxuICAncHJpbnQnLFxyXG4gICdwcm9kdWNlckZpZWxkJyxcclxuICAnc2NhbGVTZWxlY3QnLFxyXG4gICdzY2FsZVNlbGVjdENvbnRhaW5lcicsXHJcbiAgJ3NjYWxlU2VsZWN0Q29udGFpbmVyJyxcclxuICAnc2Nyb2xsSG9yaXpvbnRhbCcsXHJcbiAgJ3Njcm9sbFBhZ2UnLFxyXG4gICdzY3JvbGxWZXJ0aWNhbCcsXHJcbiAgJ3Njcm9sbFdyYXBwZWQnLFxyXG4gICdzZWNvbmRhcnlEb3dubG9hZCcsXHJcbiAgJ3NlY29uZGFyeU9wZW5GaWxlJyxcclxuICAnc2Vjb25kYXJ5UHJlc2VudGF0aW9uTW9kZScsXHJcbiAgJ3NlY29uZGFyeVByaW50JyxcclxuICAnc2Vjb25kYXJ5VG9vbGJhcicsXHJcbiAgJ3NlY29uZGFyeVRvb2xiYXJCdXR0b25Db250YWluZXInLFxyXG4gICdzZWNvbmRhcnlUb29sYmFyVG9nZ2xlJyxcclxuICAnc2Vjb25kYXJ5Vmlld0Jvb2ttYXJrJyxcclxuICAnc2lkZWJhclJlc2l6ZXInLFxyXG4gICdzaWRlYmFyVG9nZ2xlJyxcclxuICAnc3ByZWFkRXZlbicsXHJcbiAgJ3NwcmVhZE5vbmUnLFxyXG4gICdzcHJlYWRPZGQnLFxyXG4gICdzdWJqZWN0RmllbGQnLFxyXG4gICd0aHVtYm5haWxWaWV3JyxcclxuICAndGl0bGVGaWVsZCcsXHJcbiAgJ3Rvb2xiYXJWaWV3ZXInLFxyXG4gICd2ZXJzaW9uRmllbGQnLFxyXG4gICd2aWV3QXR0YWNobWVudHMnLFxyXG4gICd2aWV3QXR0YWNobWVudHMnLFxyXG4gICd2aWV3Qm9va21hcmsnLFxyXG4gICd2aWV3ZXJDb250YWluZXInLFxyXG4gICd2aWV3RmluZCcsXHJcbiAgJ3ZpZXdGaW5kJyxcclxuICAndmlld0xheWVycycsXHJcbiAgJ3ZpZXdPdXRsaW5lJyxcclxuICAndmlld091dGxpbmUnLFxyXG4gICd2aWV3VGh1bWJuYWlsJyxcclxuICAndmlld1RodW1ibmFpbCcsXHJcbiAgJ3pvb21JbicsXHJcbiAgJ3pvb21PdXQnLFxyXG5dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZHVtbXktY29tcG9uZW50cycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBkdW1teUNvbXBvbmVudHNDb250YWluZXI6IEVsZW1lbnQ7XHJcblxyXG4gIHB1YmxpYyBhZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkdW1teS1wZGYtdmlld2VyLWNvbXBvbmVudHMnKVswXTtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKCFjb250YWluZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkID0gY29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1aXJlZElkcy5mb3JFYWNoKChpZCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5uZWVkc0R1bW15V2lkZ2V0KGlkKSkge1xyXG4gICAgICAgIGNvbnN0IGR1bW15ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGR1bW15LmlkID0gaWQ7XHJcbiAgICAgICAgZHVtbXkuY2xhc3NOYW1lID0gJ2ludmlzaWJsZSBkdW1teS1jb21wb25lbnQnO1xyXG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bW15KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldCgnc2NhbGVTZWxlY3QnKSkge1xyXG4gICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICBkdW1teS5pZCA9ICdzY2FsZVNlbGVjdCc7XHJcbiAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcclxuICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBuZWVkc0R1bW15V2lkZ2V0KGlkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHdpZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmICghd2lkZ2V0KSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCI8c3BhbiBjbGFzcz1cImludmlzaWJsZSBkdW1teS1wZGYtdmlld2VyLWNvbXBvbmVudHNcIj5cclxuPC9zcGFuPlxyXG4iXX0=