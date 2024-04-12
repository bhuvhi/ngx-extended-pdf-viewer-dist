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
PdfDummyComponentsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDummyComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfDummyComponentsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfDummyComponentsComponent, selector: "pdf-dummy-components", ngImport: i0, template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfDummyComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-dummy-components', template: "<span class=\"invisible dummy-pdf-viewer-components\">\r\n</span>\r\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLGdEQUFnRDtBQUNoRCxNQUFNLFdBQVcsR0FBRztJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtJQUNmLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsTUFBTTtJQUNOLFVBQVU7SUFDVixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsZUFBZTtJQUNmLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztDQUNWLENBQUM7QUFNRixNQUFNLE9BQU8sMkJBQTJCO0lBRy9CLHlCQUF5QjtRQUM5QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEcsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLHdCQUF1QyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUNuQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUNkLEtBQUssQ0FBQyxTQUFTLEdBQUcsMkJBQTJCLENBQUM7Z0JBQzlDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLEVBQUUsR0FBRyxhQUFhLENBQUM7WUFDekIsS0FBSyxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztZQUM5QyxJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEVBQVU7UUFDakMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7d0hBeENVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLDREQ3hIeEMsdUVBRUE7MkZEc0hhLDJCQUEyQjtrQkFKdkMsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKiBMaXN0IG9mIGFsbCBmaWVsZHMgdGhhdCBjYW4gYmUgY3VzdG9taXplZCAqL1xyXG5jb25zdCByZXF1aXJlZElkcyA9IFtcclxuICAnYXR0YWNobWVudHNWaWV3JyxcclxuICAnYXV0aG9yRmllbGQnLFxyXG4gICdjb250ZXh0Rmlyc3RQYWdlJyxcclxuICAnY29udGV4dExhc3RQYWdlJyxcclxuICAnY29udGV4dFBhZ2VSb3RhdGVDY3cnLFxyXG4gICdjb250ZXh0UGFnZVJvdGF0ZUN3JyxcclxuICAnY3JlYXRpb25EYXRlRmllbGQnLFxyXG4gICdjcmVhdG9yRmllbGQnLFxyXG4gICdjdXJyZW50T3V0bGluZUl0ZW0nLFxyXG4gICdjdXJzb3JIYW5kVG9vbCcsXHJcbiAgJ2N1cnNvclNlbGVjdFRvb2wnLFxyXG4gICdjdXN0b21TY2FsZU9wdGlvbicsXHJcbiAgJ2RvY3VtZW50UHJvcGVydGllcycsXHJcbiAgJ2RvY3VtZW50UHJvcGVydGllc0Nsb3NlJyxcclxuICAnZG93bmxvYWQnLFxyXG4gICdlZGl0b3JGcmVlVGV4dCcsXHJcbiAgJ2VkaXRvckluaycsXHJcbiAgJ2VkaXRvclN0YW1wJyxcclxuICAnZWRpdG9yTW9kZUJ1dHRvbnMnLFxyXG4gICdlZGl0b3JOb25lJyxcclxuICAnZWRpdG9yU3RhbXBBZGRJbWFnZScsXHJcbiAgJ2Vycm9yQ2xvc2UnLFxyXG4gICdlcnJvck1lc3NhZ2UnLFxyXG4gICdlcnJvck1vcmVJbmZvJyxcclxuICAnZXJyb3JTaG93TGVzcycsXHJcbiAgJ2Vycm9yU2hvd01vcmUnLFxyXG4gICdlcnJvcldyYXBwZXInLFxyXG4gICdmaWxlTmFtZUZpZWxkJyxcclxuICAnZmlsZVNpemVGaWVsZCcsXHJcbiAgJ2ZpbmRiYXInLFxyXG4gICdmaW5kQ3VycmVudFBhZ2UnLFxyXG4gICdmaW5kRW50aXJlV29yZCcsXHJcbiAgJ2ZpbmRGdXp6eScsXHJcbiAgJ2ZpbmRIaWdobGlnaHRBbGwnLFxyXG4gICdmaW5kSWdub3JlQWNjZW50cycsXHJcbiAgJ2ZpbmRJbnB1dCcsXHJcbiAgJ2ZpbmRJbnB1dE11bHRpbGluZScsXHJcbiAgJ2ZpbmRNYXRjaENhc2UnLFxyXG4gICdmaW5kTWF0Y2hEaWFjcml0aWNzJyxcclxuICAnZmluZE1zZycsXHJcbiAgJ2ZpbmRNdWx0aXBsZVNlYXJjaFRleHRzJyxcclxuICAnZmluZE5leHQnLFxyXG4gICdmaW5kUHJldmlvdXMnLFxyXG4gICdmaW5kUmFuZ2UnLFxyXG4gICdmaW5kUmVzdWx0c0NvdW50JyxcclxuICAnZmlyc3RQYWdlJyxcclxuICAnaW5kaXZpZHVhbFdvcmRzTW9kZScsXHJcbiAgJ2luZGl2aWR1YWxXb3Jkc01vZGVMYWJlbCcsXHJcbiAgJ2tleXdvcmRzRmllbGQnLFxyXG4gICdsYXN0UGFnZScsXHJcbiAgJ2xpbmVhcml6ZWRGaWVsZCcsXHJcbiAgJ21vZGlmaWNhdGlvbkRhdGVGaWVsZCcsXHJcbiAgJ25leHQnLFxyXG4gICdudW1QYWdlcycsXHJcbiAgJ29wZW5GaWxlJyxcclxuICAnb3V0ZXJDb250YWluZXInLFxyXG4gICdvdXRlckNvbnRhaW5lcicsXHJcbiAgJ291dGxpbmVPcHRpb25zQ29udGFpbmVyJyxcclxuICAnb3V0bGluZVZpZXcnLFxyXG4gICdwYWdlQ291bnRGaWVsZCcsXHJcbiAgJ3BhZ2VOdW1iZXInLFxyXG4gICdwYWdlUm90YXRlQ2N3JyxcclxuICAncGFnZVJvdGF0ZUN3JyxcclxuICAncGFnZVNpemVGaWVsZCcsXHJcbiAgJ3Bhc3N3b3JkJyxcclxuICAncGFzc3dvcmRDYW5jZWwnLFxyXG4gICdwYXNzd29yZFN1Ym1pdCcsXHJcbiAgJ3Bhc3N3b3JkVGV4dCcsXHJcbiAgJ3ByZXNlbnRhdGlvbk1vZGUnLFxyXG4gICdwcmV2aW91cycsXHJcbiAgJ3ByaW50JyxcclxuICAncHJvZHVjZXJGaWVsZCcsXHJcbiAgJ3NjYWxlU2VsZWN0JyxcclxuICAnc2NhbGVTZWxlY3RDb250YWluZXInLFxyXG4gICdzY2FsZVNlbGVjdENvbnRhaW5lcicsXHJcbiAgJ3Njcm9sbEhvcml6b250YWwnLFxyXG4gICdzY3JvbGxQYWdlJyxcclxuICAnc2Nyb2xsVmVydGljYWwnLFxyXG4gICdzY3JvbGxXcmFwcGVkJyxcclxuICAnc2Vjb25kYXJ5RG93bmxvYWQnLFxyXG4gICdzZWNvbmRhcnlPcGVuRmlsZScsXHJcbiAgJ3NlY29uZGFyeVByZXNlbnRhdGlvbk1vZGUnLFxyXG4gICdzZWNvbmRhcnlQcmludCcsXHJcbiAgJ3NlY29uZGFyeVRvb2xiYXInLFxyXG4gICdzZWNvbmRhcnlUb29sYmFyQnV0dG9uQ29udGFpbmVyJyxcclxuICAnc2Vjb25kYXJ5VG9vbGJhclRvZ2dsZScsXHJcbiAgJ3NlY29uZGFyeVZpZXdCb29rbWFyaycsXHJcbiAgJ3NpZGViYXJSZXNpemVyJyxcclxuICAnc2lkZWJhclRvZ2dsZScsXHJcbiAgJ3NwcmVhZEV2ZW4nLFxyXG4gICdzcHJlYWROb25lJyxcclxuICAnc3ByZWFkT2RkJyxcclxuICAnc3ViamVjdEZpZWxkJyxcclxuICAndGh1bWJuYWlsVmlldycsXHJcbiAgJ3RpdGxlRmllbGQnLFxyXG4gICd0b29sYmFyVmlld2VyJyxcclxuICAndmVyc2lvbkZpZWxkJyxcclxuICAndmlld0F0dGFjaG1lbnRzJyxcclxuICAndmlld0F0dGFjaG1lbnRzJyxcclxuICAndmlld0Jvb2ttYXJrJyxcclxuICAndmlld2VyQ29udGFpbmVyJyxcclxuICAndmlld0ZpbmQnLFxyXG4gICd2aWV3RmluZCcsXHJcbiAgJ3ZpZXdMYXllcnMnLFxyXG4gICd2aWV3T3V0bGluZScsXHJcbiAgJ3ZpZXdPdXRsaW5lJyxcclxuICAndmlld1RodW1ibmFpbCcsXHJcbiAgJ3ZpZXdUaHVtYm5haWwnLFxyXG4gICd6b29tSW4nLFxyXG4gICd6b29tT3V0JyxcclxuXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWR1bW15LWNvbXBvbmVudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQge1xyXG4gIHByaXZhdGUgZHVtbXlDb21wb25lbnRzQ29udGFpbmVyOiBFbGVtZW50O1xyXG5cclxuICBwdWJsaWMgYWRkTWlzc2luZ1N0YW5kYXJkV2lkZ2V0cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzJylbMF07XHJcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lciBhcyBIVE1MRWxlbWVudDtcclxuICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWlyZWRJZHMuZm9yRWFjaCgoaWQpID0+IHtcclxuICAgICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldChpZCkpIHtcclxuICAgICAgICBjb25zdCBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBkdW1teS5pZCA9IGlkO1xyXG4gICAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcclxuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdW1teSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLm5lZWRzRHVtbXlXaWRnZXQoJ3NjYWxlU2VsZWN0JykpIHtcclxuICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgZHVtbXkuaWQgPSAnc2NhbGVTZWxlY3QnO1xyXG4gICAgICBkdW1teS5jbGFzc05hbWUgPSAnaW52aXNpYmxlIGR1bW15LWNvbXBvbmVudCc7XHJcbiAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bW15KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbmVlZHNEdW1teVdpZGdldChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB3aWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBpZiAoIXdpZGdldCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiPHNwYW4gY2xhc3M9XCJpbnZpc2libGUgZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzXCI+XHJcbjwvc3Bhbj5cclxuIl19