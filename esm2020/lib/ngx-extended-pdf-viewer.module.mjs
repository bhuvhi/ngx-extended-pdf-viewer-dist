// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicCssComponent } from './dynamic-css/dynamic-css.component';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { NgxConsole } from './options/ngx-console';
import { PdfDocumentPropertiesDialogComponent } from './pdf-dialog/pdf-document-properties-dialog/pdf-document-properties-dialog.component';
import { PdfErrorMessageComponent } from './pdf-dialog/pdf-error-message/pdf-error-message.component';
import { PdfPasswordDialogComponent } from './pdf-dialog/pdf-password-dialog/pdf-password-dialog.component';
import { PdfPreparePrintingDialogComponent } from './pdf-dialog/pdf-prepare-printing-dialog/pdf-prepare-printing-dialog.component';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { NegativeResponsiveCSSClassPipe, ResponsiveCSSClassPipe } from './responsive-visibility';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarContentComponent } from './sidebar/pdf-sidebar/pdf-sidebar-content/pdf-sidebar-content.component';
import { PdfSidebarToolbarComponent } from './sidebar/pdf-sidebar/pdf-sidebar-toolbar/pdf-sidebar-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { PdfAcroformDefaultThemeComponent } from './theme/acroform-default-theme/pdf-acroform-default-theme.component';
import { PdfDarkThemeComponent } from './theme/pdf-dark-theme/pdf-dark-theme.component';
import { PdfLightThemeComponent } from './theme/pdf-light-theme/pdf-light-theme.component';
import { PdfBookModeComponent } from './toolbar/pdf-book-mode/pdf-book-mode.component';
import { PdfContextMenuComponent } from './toolbar/pdf-context-menu/pdf-context-menu.component';
import { PdfDocumentPropertiesComponent } from './toolbar/pdf-document-properties/pdf-document-properties.component';
import { PdfDownloadComponent } from './toolbar/pdf-download/pdf-download.component';
import { PdfDrawEditorComponent } from './toolbar/pdf-draw-editor/pdf-draw-editor.component';
import { PdfEditorComponent } from './toolbar/pdf-editor/pdf-editor.component';
import { PdfEvenSpreadComponent } from './toolbar/pdf-even-spread/pdf-even-spread.component';
import { PdfFindButtonComponent } from './toolbar/pdf-find-button/pdf-find-button.component';
import { PdfFindInputAreaComponent } from './toolbar/pdf-findbar/pdf-find-input-area/pdf-find-input-area.component';
import { PdfFindNextComponent } from './toolbar/pdf-findbar/pdf-find-next/pdf-find-next.component';
import { PdfFindPreviousComponent } from './toolbar/pdf-findbar/pdf-find-previous/pdf-find-previous.component';
import { PdfFindbarMessageContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-message-container/pdf-findbar-message-container.component';
import { PdfFindHighlightAllComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component';
import { PdfFindMatchCaseComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component';
import { PdfFindResultsCountComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component';
import { PdfFindEntireWordComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component';
import { PdfMatchDiacriticsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-match-diacritics/pdf-match-diacritics.component';
import { PdfFindbarComponent } from './toolbar/pdf-findbar/pdf-findbar.component';
import { PdfSearchInputFieldComponent } from './toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component';
import { PdfHandToolComponent } from './toolbar/pdf-hand-tool/pdf-hand-tool.component';
import { PdfHorizontalScrollComponent } from './toolbar/pdf-horizontal-scroll/pdf-horizontal-scroll.component';
import { PdfInfiniteScrollComponent } from './toolbar/pdf-infinite-scroll/pdf-infinite-scroll.component';
import { PdfNoSpreadComponent } from './toolbar/pdf-no-spread/pdf-no-spread.component';
import { PdfOddSpreadComponent } from './toolbar/pdf-odd-spread/pdf-odd-spread.component';
import { PdfOpenFileComponent } from './toolbar/pdf-open-file/pdf-open-file.component';
import { PdfFirstPageComponent } from './toolbar/pdf-paging-area/pdf-first-page/pdf-first-page.component';
import { PdfLastPageComponent } from './toolbar/pdf-paging-area/pdf-last-page/pdf-last-page.component';
import { PdfNextPageComponent } from './toolbar/pdf-paging-area/pdf-next-page/pdf-next-page.component';
import { PdfPageNumberComponent } from './toolbar/pdf-paging-area/pdf-page-number/pdf-page-number.component';
import { PdfPagingAreaComponent } from './toolbar/pdf-paging-area/pdf-paging-area.component';
import { PdfPreviousPageComponent } from './toolbar/pdf-paging-area/pdf-previous-page/pdf-previous-page.component';
import { PdfPresentationModeComponent } from './toolbar/pdf-presentation-mode/pdf-presentation-mode.component';
import { PdfPrintComponent } from './toolbar/pdf-print/pdf-print.component';
import { PdfRotatePageComponent } from './toolbar/pdf-rotate-page/pdf-rotate-page.component';
import { PdfSelectToolComponent } from './toolbar/pdf-select-tool/pdf-select-tool.component';
import { PdfShyButtonComponent } from './toolbar/pdf-shy-button/pdf-shy-button.component';
import { PdfSinglePageModeComponent } from './toolbar/pdf-single-page-mode/pdf-single-page-mode.component';
import { PdfStampEditorComponent } from './toolbar/pdf-stamp-editor/pdf-stamp-editor.component';
import { PdfTextEditorComponent } from './toolbar/pdf-text-editor/pdf-text-editor.component';
import { PdfToggleSecondaryToolbarComponent } from './toolbar/pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component';
import { PdfToggleSidebarComponent } from './toolbar/pdf-toggle-sidebar/pdf-toggle-sidebar.component';
import { PdfToolbarComponent } from './toolbar/pdf-toolbar/pdf-toolbar.component';
import { PdfVerticalScrollModeComponent } from './toolbar/pdf-vertical-scroll-button/pdf-vertical-scroll-mode.component';
import { PdfWrappedScrollModeComponent } from './toolbar/pdf-wrapped-scroll-mode/pdf-wrapped-scroll-mode.component';
import { PdfZoomDropdownComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component';
import { PdfZoomInComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-in/pdf-zoom-in.component';
import { PdfZoomOutComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-out/pdf-zoom-out.component';
import { PdfZoomToolbarComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-toolbar.component';
import { TranslatePipe } from './translate.pipe';
import * as i0 from "@angular/core";
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
export class NgxExtendedPdfViewerModule {
}
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵfac = function NgxExtendedPdfViewerModule_Factory(t) { return new (t || NgxExtendedPdfViewerModule)(); };
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerModule });
/** @nocollapse */ NgxExtendedPdfViewerModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [NgxExtendedPdfViewerService], imports: [[CommonModule, FormsModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerModule, [{
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
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxExtendedPdfViewerModule, { declarations: [DynamicCssComponent,
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
        ResponsiveCSSClassPipe] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDbkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFF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QUFFLFdBQVcsYUFzRWpDLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRHluYW1pY0Nzc0NvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1jc3MvZHluYW1pYy1jc3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5neENvbnNvbGUgfSBmcm9tICcuL29wdGlvbnMvbmd4LWNvbnNvbGUnO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24tb3B0aW9ucyc7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2cvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtZXJyb3ItbWVzc2FnZS9wZGYtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtcGFzc3dvcmQtZGlhbG9nL3BkZi1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJlcGFyZVByaW50aW5nRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZWdhdGl2ZVJlc3BvbnNpdmVDU1NDbGFzc1BpcGUsIFJlc3BvbnNpdmVDU1NDbGFzc1BpcGUgfSBmcm9tICcuL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItY29udGVudC9wZGYtc2lkZWJhci1jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLXRvb2xiYXIvcGRmLXNpZGViYXItdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkFjcm9mb3JtRGVmYXVsdFRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9hY3JvZm9ybS1kZWZhdWx0LXRoZW1lL3BkZi1hY3JvZm9ybS1kZWZhdWx0LXRoZW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRhcmtUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvcGRmLWRhcmstdGhlbWUvcGRmLWRhcmstdGhlbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvcGRmLWxpZ2h0LXRoZW1lL3BkZi1saWdodC10aGVtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZCb29rTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtYm9vay1tb2RlL3BkZi1ib29rLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZEb3dubG9hZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZG93bmxvYWQvcGRmLWRvd25sb2FkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRyYXdFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWRyYXctZWRpdG9yL3BkZi1kcmF3LWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWVkaXRvci9wZGYtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkV2ZW5TcHJlYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWV2ZW4tc3ByZWFkL3BkZi1ldmVuLXNwcmVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kLWJ1dHRvbi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE5leHRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtbmV4dC9wZGYtZmluZC1uZXh0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1wcmV2aW91cy9wZGYtZmluZC1wcmV2aW91cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1oaWdobGlnaHQtYWxsL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtbWF0Y2gtY2FzZS9wZGYtZmluZC1tYXRjaC1jYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtZmluZC1lbnRpcmUtd29yZC9wZGYtZmluZC1lbnRpcmUtd29yZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZNYXRjaERpYWNyaXRpY3NDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1tYXRjaC1kaWFjcml0aWNzL3BkZi1tYXRjaC1kaWFjcml0aWNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtc2VhcmNoLWlucHV0LWZpZWxkL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmSGFuZFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhhbmQtdG9vbC9wZGYtaGFuZC10b29sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhvcml6b250YWwtc2Nyb2xsL3BkZi1ob3Jpem9udGFsLXNjcm9sbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZJbmZpbml0ZVNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtaW5maW5pdGUtc2Nyb2xsL3BkZi1pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTm9TcHJlYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLW5vLXNwcmVhZC9wZGYtbm8tc3ByZWFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk9kZFNwcmVhZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb2RkLXNwcmVhZC9wZGYtb2RkLXNwcmVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZPcGVuRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmlyc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZMYXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWxhc3QtcGFnZS9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk5leHRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbmV4dC1wYWdlL3BkZi1uZXh0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUGFnZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYWdpbmdBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmVzZW50YXRpb24tbW9kZS9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJpbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByaW50L3BkZi1wcmludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1yb3RhdGUtcGFnZS9wZGYtcm90YXRlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2VsZWN0VG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNoeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2luZ2xlLXBhZ2UtbW9kZS9wZGYtc2luZ2xlLXBhZ2UtbW9kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTdGFtcEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc3RhbXAtZWRpdG9yL3BkZi1zdGFtcC1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVGV4dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdGV4dC1lZGl0b3IvcGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zaWRlYmFyL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdmVydGljYWwtc2Nyb2xsLWJ1dHRvbi9wZGYtdmVydGljYWwtc2Nyb2xsLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmV3JhcHBlZFNjcm9sbE1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUvcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLW91dC9wZGYtem9vbS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcclxuXHJcbmlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA9PT0gMCkge1xyXG4gIG5ldyBOZ3hDb25zb2xlKCkubG9nKCcnKTtcclxufVxyXG5cclxuaWYgKCFQcm9taXNlWydhbGxTZXR0bGVkJ10pIHtcclxuICBpZiAoISF3aW5kb3dbJ1pvbmUnXSAmJiAhd2luZG93WydfX3pvbmVfc3ltYm9sX19Qcm9taXNlLmFsbFNldHRsZWQnXSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJQbGVhc2UgdXBkYXRlIHpvbmUuanMgdG8gdmVyc2lvbiAwLjEwLjMgb3IgaGlnaGVyLiBPdGhlcndpc2UsIHlvdSdsbCBydW4gdGhlIHNsb3cgRUNNQVNjcmlwdCA1IHZlcnNpb24gZXZlbiBvbiBtb2Rlcm4gYnJvd3NlciB0aGF0IGNhbiBydW4gdGhlIGZhc3QgRVNNQVNjcmlwdCAyMDE1IHZlcnNpb24uXCJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleUlnbm9yZWQoY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG5cclxuICBjb25zdCBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5cycpO1xyXG4gIGNvbnN0IGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuZ2V0KCdhY2NlcHRLZXlzJyk7XHJcbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcclxuICAgIGlmICghIWlnbm9yZUtleXMgJiYgaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCAnV0hFRUwnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5Y29kZSA9PT0gMTYgfHwga2V5Y29kZSA9PT0gMTcgfHwga2V5Y29kZSA9PT0gMTggfHwga2V5Y29kZSA9PT0gMjI0KSB7XHJcbiAgICAvLyBpZ25vcmUgc29saXRhcnkgU0hJRlQsIEFMVCwgQ01ELCBhbmQgQ1RSTCBiZWNhdXNlIHRoZXkgb25seSBtYWtlIHNlbnNlIGFzIHR3by1rZXktY29tYmluYXRpb25zXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gY21kIGlzIGEgYml0LWFycmF5OlxyXG4gIC8vIDEgPT0gQ1RSTFxyXG4gIC8vIDIgPT0gQUxUXHJcbiAgLy8gNCA9PSBTSElGVFxyXG4gIC8vIDggPT0gTUVUQVxyXG4gIGNvbnN0IGlnbm9yZUtleWJvYXJkID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5Ym9hcmQnKTtcclxuICBpZiAoISFpZ25vcmVLZXlib2FyZCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwga2V5Y29kZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuICFpc0tleUluTGlzdChhY2NlcHRLZXlzLCBjbWQsIGtleWNvZGUpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xyXG4gIGlmICghc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gc2V0dGluZ3Muc29tZSgoa2V5RGVmKSA9PiBpc0tleShrZXlEZWYsIGNtZCwga2V5Y29kZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleShrZXlEZWY6IHN0cmluZywgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBsZXQgY21kRGVmID0gMDtcclxuICBsZXQga2V5ID0gMDtcclxuICBrZXlEZWYgPSBrZXlEZWYudG9Mb3dlckNhc2UoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYml0d2lzZVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcclxuICAgIGNtZERlZiB8PSAxO1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2N0cmwrJywgJycpO1xyXG4gIH1cclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjbWQrJykpIHtcclxuICAgIGNtZERlZiB8PSA4O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2FsdCsnKSkge1xyXG4gICAgY21kRGVmIHw9IDI7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnYWx0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcclxuICAgIGNtZERlZiB8PSA0O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ3NoaWZ0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnbWV0YSsnKSkge1xyXG4gICAgY21kRGVmIHw9IDg7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XHJcbiAgICBrZXkgPSAzODtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Rvd24nKSB7XHJcbiAgICBrZXkgPSA0MDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJysnIHx8IGtleURlZiA9PT0gJ1wiK1wiJykge1xyXG4gICAga2V5ID0gMTcxO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XHJcbiAgICBrZXkgPSAxNzM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlc2MnKSB7XHJcbiAgICBrZXkgPSAyNztcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VudGVyJykge1xyXG4gICAga2V5ID0gMTM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcclxuICAgIGtleSA9IDMyO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZjQnKSB7XHJcbiAgICBrZXkgPSAxMTU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdiYWNrc3BhY2UnKSB7XHJcbiAgICBrZXkgPSA4O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcclxuICAgIGtleSA9IDM2O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZW5kJykge1xyXG4gICAga2V5ID0gMzU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdsZWZ0Jykge1xyXG4gICAga2V5ID0gMzc7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcclxuICAgIGtleSA9IDM5O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncGFnZWRvd24nKSB7XHJcbiAgICBrZXkgPSAzNDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2V1cCcpIHtcclxuICAgIGtleSA9IDMzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBrZXkgPSBrZXlEZWYudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xyXG4gIH1cclxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xyXG4gICAgcmV0dXJuIGtleURlZiA9PT0gJ3doZWVsJyAmJiBjbWQgPT09IGNtZERlZjtcclxuICB9XHJcbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLmlzS2V5SWdub3JlZCA9IGlzS2V5SWdub3JlZDtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeW5hbWljQ3NzQ29tcG9uZW50LFxyXG4gICAgTmVnYXRpdmVSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlLFxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXHJcbiAgICBQZGZBY3JvZm9ybURlZmF1bHRUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZkJvb2tNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBQZGZEYXJrVGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZEcmF3RWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzQ29tcG9uZW50LFxyXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmRG93bmxvYWRDb21wb25lbnQsXHJcbiAgICBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQsXHJcbiAgICBQZGZFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZFcnJvck1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZFdmVuU3ByZWFkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50LFxyXG4gICAgUGRmRmlyc3RQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmSGFuZFRvb2xDb21wb25lbnQsXHJcbiAgICBQZGZIb3Jpem9udGFsU2Nyb2xsQ29tcG9uZW50LFxyXG4gICAgUGRmSW5maW5pdGVTY3JvbGxDb21wb25lbnQsXHJcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZkxpZ2h0VGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZNYXRjaERpYWNyaXRpY3NDb21wb25lbnQsXHJcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZk5vU3ByZWFkQ29tcG9uZW50LFxyXG4gICAgUGRmT2RkU3ByZWFkQ29tcG9uZW50LFxyXG4gICAgUGRmT3BlbkZpbGVDb21wb25lbnQsXHJcbiAgICBQZGZQYWdlTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCxcclxuICAgIFBkZlBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmUHJlcGFyZVByaW50aW5nRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlByaW50Q29tcG9uZW50LFxyXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQsXHJcbiAgICBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2VsZWN0VG9vbENvbXBvbmVudCxcclxuICAgIFBkZlNoeUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2luZ2xlUGFnZU1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZTdGFtcEVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZlRleHRFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZWZXJ0aWNhbFNjcm9sbE1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZXcmFwcGVkU2Nyb2xsTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgIFBkZlpvb21JbkNvbXBvbmVudCxcclxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXHJcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFJlc3BvbnNpdmVDU1NDbGFzc1BpcGUsXHJcbiAgICBUcmFuc2xhdGVQaXBlLFxyXG4gIF0sXHJcbiAgcHJvdmlkZXJzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZWdhdGl2ZVJlc3BvbnNpdmVDU1NDbGFzc1BpcGUsXHJcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCxcclxuICAgIFBkZkFjcm9mb3JtRGVmYXVsdFRoZW1lQ29tcG9uZW50LFxyXG4gICAgUGRmQm9va01vZGVDb21wb25lbnQsXHJcbiAgICBQZGZDb250ZXh0TWVudUNvbXBvbmVudCxcclxuICAgIFBkZkRhcmtUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZkRyYXdFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZEb2N1bWVudFByb3BlcnRpZXNEaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcclxuICAgIFBkZkVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFBkZkV2ZW5TcHJlYWRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTmV4dENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCxcclxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXHJcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZIYW5kVG9vbENvbXBvbmVudCxcclxuICAgIFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQsXHJcbiAgICBQZGZJbmZpbml0ZVNjcm9sbENvbXBvbmVudCxcclxuICAgIFBkZkxhc3RQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZk1hdGNoRGlhY3JpdGljc0NvbXBvbmVudCxcclxuICAgIFBkZk5leHRQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmTm9TcHJlYWRDb21wb25lbnQsXHJcbiAgICBQZGZPZGRTcHJlYWRDb21wb25lbnQsXHJcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXHJcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmUGFzc3dvcmREaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZQcmVwYXJlUHJpbnRpbmdEaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXHJcbiAgICBQZGZSb3RhdGVQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmU2h5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlN0YW1wRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmVGV4dEVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZldyYXBwZWRTY3JvbGxNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcclxuICAgIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50LFxyXG4gICAgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGUge31cclxuIl19