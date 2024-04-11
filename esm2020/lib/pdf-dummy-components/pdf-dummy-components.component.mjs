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
        args: [{ selector: 'pdf-dummy-components', template: "<span class=\"invisible dummy-pdf-viewer-components\">\n</span>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLGdEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFVBQVU7SUFD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Q0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7eUhBeENVLDJCQUEyQjs2R0FBM0IsMkJBQTJCO1FDeEh4QywwQkFDTzs7dUZEdUhNLDJCQUEyQjtjQUp2QyxTQUFTOzJCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogTGlzdCBvZiBhbGwgZmllbGRzIHRoYXQgY2FuIGJlIGN1c3RvbWl6ZWQgKi9cbmNvbnN0IHJlcXVpcmVkSWRzID0gW1xuICAnYXR0YWNobWVudHNWaWV3JyxcbiAgJ2F1dGhvckZpZWxkJyxcbiAgJ2NvbnRleHRGaXJzdFBhZ2UnLFxuICAnY29udGV4dExhc3RQYWdlJyxcbiAgJ2NvbnRleHRQYWdlUm90YXRlQ2N3JyxcbiAgJ2NvbnRleHRQYWdlUm90YXRlQ3cnLFxuICAnY3JlYXRpb25EYXRlRmllbGQnLFxuICAnY3JlYXRvckZpZWxkJyxcbiAgJ2N1cnJlbnRPdXRsaW5lSXRlbScsXG4gICdjdXJzb3JIYW5kVG9vbCcsXG4gICdjdXJzb3JTZWxlY3RUb29sJyxcbiAgJ2N1c3RvbVNjYWxlT3B0aW9uJyxcbiAgJ2RvY3VtZW50UHJvcGVydGllcycsXG4gICdkb2N1bWVudFByb3BlcnRpZXNDbG9zZScsXG4gICdkb3dubG9hZCcsXG4gICdlZGl0b3JGcmVlVGV4dCcsXG4gICdlZGl0b3JJbmsnLFxuICAnZWRpdG9yU3RhbXAnLFxuICAnZWRpdG9yTW9kZUJ1dHRvbnMnLFxuICAnZWRpdG9yTm9uZScsXG4gICdlZGl0b3JTdGFtcEFkZEltYWdlJyxcbiAgJ2Vycm9yQ2xvc2UnLFxuICAnZXJyb3JNZXNzYWdlJyxcbiAgJ2Vycm9yTW9yZUluZm8nLFxuICAnZXJyb3JTaG93TGVzcycsXG4gICdlcnJvclNob3dNb3JlJyxcbiAgJ2Vycm9yV3JhcHBlcicsXG4gICdmaWxlTmFtZUZpZWxkJyxcbiAgJ2ZpbGVTaXplRmllbGQnLFxuICAnZmluZGJhcicsXG4gICdmaW5kQ3VycmVudFBhZ2UnLFxuICAnZmluZEVudGlyZVdvcmQnLFxuICAnZmluZEZ1enp5JyxcbiAgJ2ZpbmRIaWdobGlnaHRBbGwnLFxuICAnZmluZElnbm9yZUFjY2VudHMnLFxuICAnZmluZElucHV0JyxcbiAgJ2ZpbmRJbnB1dE11bHRpbGluZScsXG4gICdmaW5kTWF0Y2hDYXNlJyxcbiAgJ2ZpbmRNYXRjaERpYWNyaXRpY3MnLFxuICAnZmluZE1zZycsXG4gICdmaW5kTXVsdGlwbGVTZWFyY2hUZXh0cycsXG4gICdmaW5kTmV4dCcsXG4gICdmaW5kUHJldmlvdXMnLFxuICAnZmluZFJhbmdlJyxcbiAgJ2ZpbmRSZXN1bHRzQ291bnQnLFxuICAnZmlyc3RQYWdlJyxcbiAgJ2luZGl2aWR1YWxXb3Jkc01vZGUnLFxuICAnaW5kaXZpZHVhbFdvcmRzTW9kZUxhYmVsJyxcbiAgJ2tleXdvcmRzRmllbGQnLFxuICAnbGFzdFBhZ2UnLFxuICAnbGluZWFyaXplZEZpZWxkJyxcbiAgJ21vZGlmaWNhdGlvbkRhdGVGaWVsZCcsXG4gICduZXh0JyxcbiAgJ251bVBhZ2VzJyxcbiAgJ29wZW5GaWxlJyxcbiAgJ291dGVyQ29udGFpbmVyJyxcbiAgJ291dGVyQ29udGFpbmVyJyxcbiAgJ291dGxpbmVPcHRpb25zQ29udGFpbmVyJyxcbiAgJ291dGxpbmVWaWV3JyxcbiAgJ3BhZ2VDb3VudEZpZWxkJyxcbiAgJ3BhZ2VOdW1iZXInLFxuICAncGFnZVJvdGF0ZUNjdycsXG4gICdwYWdlUm90YXRlQ3cnLFxuICAncGFnZVNpemVGaWVsZCcsXG4gICdwYXNzd29yZCcsXG4gICdwYXNzd29yZENhbmNlbCcsXG4gICdwYXNzd29yZFN1Ym1pdCcsXG4gICdwYXNzd29yZFRleHQnLFxuICAncHJlc2VudGF0aW9uTW9kZScsXG4gICdwcmV2aW91cycsXG4gICdwcmludCcsXG4gICdwcm9kdWNlckZpZWxkJyxcbiAgJ3NjYWxlU2VsZWN0JyxcbiAgJ3NjYWxlU2VsZWN0Q29udGFpbmVyJyxcbiAgJ3NjYWxlU2VsZWN0Q29udGFpbmVyJyxcbiAgJ3Njcm9sbEhvcml6b250YWwnLFxuICAnc2Nyb2xsUGFnZScsXG4gICdzY3JvbGxWZXJ0aWNhbCcsXG4gICdzY3JvbGxXcmFwcGVkJyxcbiAgJ3NlY29uZGFyeURvd25sb2FkJyxcbiAgJ3NlY29uZGFyeU9wZW5GaWxlJyxcbiAgJ3NlY29uZGFyeVByZXNlbnRhdGlvbk1vZGUnLFxuICAnc2Vjb25kYXJ5UHJpbnQnLFxuICAnc2Vjb25kYXJ5VG9vbGJhcicsXG4gICdzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyJyxcbiAgJ3NlY29uZGFyeVRvb2xiYXJUb2dnbGUnLFxuICAnc2Vjb25kYXJ5Vmlld0Jvb2ttYXJrJyxcbiAgJ3NpZGViYXJSZXNpemVyJyxcbiAgJ3NpZGViYXJUb2dnbGUnLFxuICAnc3ByZWFkRXZlbicsXG4gICdzcHJlYWROb25lJyxcbiAgJ3NwcmVhZE9kZCcsXG4gICdzdWJqZWN0RmllbGQnLFxuICAndGh1bWJuYWlsVmlldycsXG4gICd0aXRsZUZpZWxkJyxcbiAgJ3Rvb2xiYXJWaWV3ZXInLFxuICAndmVyc2lvbkZpZWxkJyxcbiAgJ3ZpZXdBdHRhY2htZW50cycsXG4gICd2aWV3QXR0YWNobWVudHMnLFxuICAndmlld0Jvb2ttYXJrJyxcbiAgJ3ZpZXdlckNvbnRhaW5lcicsXG4gICd2aWV3RmluZCcsXG4gICd2aWV3RmluZCcsXG4gICd2aWV3TGF5ZXJzJyxcbiAgJ3ZpZXdPdXRsaW5lJyxcbiAgJ3ZpZXdPdXRsaW5lJyxcbiAgJ3ZpZXdUaHVtYm5haWwnLFxuICAndmlld1RodW1ibmFpbCcsXG4gICd6b29tSW4nLFxuICAnem9vbU91dCcsXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtZHVtbXktY29tcG9uZW50cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB7XG4gIHByaXZhdGUgZHVtbXlDb21wb25lbnRzQ29udGFpbmVyOiBFbGVtZW50O1xuXG4gIHB1YmxpYyBhZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk6IHZvaWQge1xuICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzJylbMF07XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVpcmVkSWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBpZiAodGhpcy5uZWVkc0R1bW15V2lkZ2V0KGlkKSkge1xuICAgICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgZHVtbXkuaWQgPSBpZDtcbiAgICAgICAgZHVtbXkuY2xhc3NOYW1lID0gJ2ludmlzaWJsZSBkdW1teS1jb21wb25lbnQnO1xuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdW1teSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5uZWVkc0R1bW15V2lkZ2V0KCdzY2FsZVNlbGVjdCcpKSB7XG4gICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgZHVtbXkuaWQgPSAnc2NhbGVTZWxlY3QnO1xuICAgICAgZHVtbXkuY2xhc3NOYW1lID0gJ2ludmlzaWJsZSBkdW1teS1jb21wb25lbnQnO1xuICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbmVlZHNEdW1teVdpZGdldChpZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgd2lkZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmICghd2lkZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8c3BhbiBjbGFzcz1cImludmlzaWJsZSBkdW1teS1wZGYtdmlld2VyLWNvbXBvbmVudHNcIj5cbjwvc3Bhbj5cbiJdfQ==