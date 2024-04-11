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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDbkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFF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QUFFLFdBQVcsYUFzRWpDLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsZ0NBQWdDO1FBQ2hDLG9CQUFvQjtRQUNwQix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixvQ0FBb0M7UUFDcEMsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixtQ0FBbUM7UUFDbkMsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixvQkFBb0I7UUFDcEIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0Isb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLGtDQUFrQztRQUNsQyx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0Isd0JBQXdCO1FBQ3hCLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IER5bmFtaWNDc3NDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtY3NzL2R5bmFtaWMtY3NzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hDb25zb2xlIH0gZnJvbSAnLi9vcHRpb25zL25neC1jb25zb2xlJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2cvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLWVycm9yLW1lc3NhZ2UvcGRmLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1wYXNzd29yZC1kaWFsb2cvcGRmLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJlcGFyZVByaW50aW5nRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IE5lZ2F0aXZlUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSwgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSB9IGZyb20gJy4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLWNvbnRlbnQvcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItdG9vbGJhci9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZBY3JvZm9ybURlZmF1bHRUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvYWNyb2Zvcm0tZGVmYXVsdC10aGVtZS9wZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRGFya1RoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9wZGYtZGFyay10aGVtZS9wZGYtZGFyay10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvcGRmLWxpZ2h0LXRoZW1lL3BkZi1saWdodC10aGVtZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmQm9va01vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWJvb2stbW9kZS9wZGYtYm9vay1tb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtY29udGV4dC1tZW51L3BkZi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkRvY3VtZW50UHJvcGVydGllc0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRG93bmxvYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWRvd25sb2FkL3BkZi1kb3dubG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRHJhd0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZHJhdy1lZGl0b3IvcGRmLWRyYXctZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWVkaXRvci9wZGYtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZFdmVuU3ByZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ldmVuLXNwcmVhZC9wZGYtZXZlbi1zcHJlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmQtYnV0dG9uL3BkZi1maW5kLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmROZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLW5leHQvcGRmLWZpbmQtbmV4dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLXByZXZpb3VzL3BkZi1maW5kLXByZXZpb3VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC9wZGYtZmluZC1oaWdobGlnaHQtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1tYXRjaC1jYXNlL3BkZi1maW5kLW1hdGNoLWNhc2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmQtZW50aXJlLXdvcmQvcGRmLWZpbmQtZW50aXJlLXdvcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZk1hdGNoRGlhY3JpdGljc0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLW1hdGNoLWRpYWNyaXRpY3MvcGRmLW1hdGNoLWRpYWNyaXRpY3MuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZIYW5kVG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtaGFuZC10b29sL3BkZi1oYW5kLXRvb2wuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhvcml6b250YWwtc2Nyb2xsL3BkZi1ob3Jpem9udGFsLXNjcm9sbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmSW5maW5pdGVTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWluZmluaXRlLXNjcm9sbC9wZGYtaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZOb1NwcmVhZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtbm8tc3ByZWFkL3BkZi1uby1zcHJlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZk9kZFNwcmVhZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb2RkLXNwcmVhZC9wZGYtb2RkLXNwcmVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmT3BlbkZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLW9wZW4tZmlsZS9wZGYtb3Blbi1maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaXJzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZMYXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWxhc3QtcGFnZS9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZOZXh0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLW5leHQtcGFnZS9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQYWdlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnZS1udW1iZXIvcGRmLXBhZ2UtbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQYWdpbmdBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXByZXZpb3VzLXBhZ2UvcGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByZXNlbnRhdGlvbi1tb2RlL3BkZi1wcmVzZW50YXRpb24tbW9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJpbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByaW50L3BkZi1wcmludC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUm90YXRlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTZWxlY3RUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1zZWxlY3QtdG9vbC9wZGYtc2VsZWN0LXRvb2wuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNoeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmU2luZ2xlUGFnZU1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNpbmdsZS1wYWdlLW1vZGUvcGRmLXNpbmdsZS1wYWdlLW1vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlN0YW1wRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1zdGFtcC1lZGl0b3IvcGRmLXN0YW1wLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVGV4dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdGV4dC1lZGl0b3IvcGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZWZXJ0aWNhbFNjcm9sbE1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXZlcnRpY2FsLXNjcm9sbC1idXR0b24vcGRmLXZlcnRpY2FsLXNjcm9sbC1tb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZXcmFwcGVkU2Nyb2xsTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS9wZGYtd3JhcHBlZC1zY3JvbGwtbW9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWluL3BkZi16b29tLWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tT3V0Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tb3V0L3BkZi16b29tLW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUucGlwZSc7XG5cbmlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA9PT0gMCkge1xuICBuZXcgTmd4Q29uc29sZSgpLmxvZygnJyk7XG59XG5cbmlmICghUHJvbWlzZVsnYWxsU2V0dGxlZCddKSB7XG4gIGlmICghIXdpbmRvd1snWm9uZSddICYmICF3aW5kb3dbJ19fem9uZV9zeW1ib2xfX1Byb21pc2UuYWxsU2V0dGxlZCddKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSB6b25lLmpzIHRvIHZlcnNpb24gMC4xMC4zIG9yIGhpZ2hlci4gT3RoZXJ3aXNlLCB5b3UnbGwgcnVuIHRoZSBzbG93IEVDTUFTY3JpcHQgNSB2ZXJzaW9uIGV2ZW4gb24gbW9kZXJuIGJyb3dzZXIgdGhhdCBjYW4gcnVuIHRoZSBmYXN0IEVTTUFTY3JpcHQgMjAxNSB2ZXJzaW9uLlwiXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0tleUlnbm9yZWQoY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcbiAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcblxuICBjb25zdCBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5cycpO1xuICBjb25zdCBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnYWNjZXB0S2V5cycpO1xuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xuICAgIGlmICghIWlnbm9yZUtleXMgJiYgaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gIWlzS2V5SW5MaXN0KGFjY2VwdEtleXMsIGNtZCwgJ1dIRUVMJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGtleWNvZGUgPT09IDE2IHx8IGtleWNvZGUgPT09IDE3IHx8IGtleWNvZGUgPT09IDE4IHx8IGtleWNvZGUgPT09IDIyNCkge1xuICAgIC8vIGlnbm9yZSBzb2xpdGFyeSBTSElGVCwgQUxULCBDTUQsIGFuZCBDVFJMIGJlY2F1c2UgdGhleSBvbmx5IG1ha2Ugc2Vuc2UgYXMgdHdvLWtleS1jb21iaW5hdGlvbnNcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBjbWQgaXMgYSBiaXQtYXJyYXk6XG4gIC8vIDEgPT0gQ1RSTFxuICAvLyAyID09IEFMVFxuICAvLyA0ID09IFNISUZUXG4gIC8vIDggPT0gTUVUQVxuICBjb25zdCBpZ25vcmVLZXlib2FyZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleWJvYXJkJyk7XG4gIGlmICghIWlnbm9yZUtleWJvYXJkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsIGtleWNvZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCBrZXljb2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xuICBpZiAoIXNldHRpbmdzKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHNldHRpbmdzLnNvbWUoKGtleURlZikgPT4gaXNLZXkoa2V5RGVmLCBjbWQsIGtleWNvZGUpKTtcbn1cblxuZnVuY3Rpb24gaXNLZXkoa2V5RGVmOiBzdHJpbmcsIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGxldCBjbWREZWYgPSAwO1xuICBsZXQga2V5ID0gMDtcbiAga2V5RGVmID0ga2V5RGVmLnRvTG93ZXJDYXNlKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcbiAgICBjbWREZWYgfD0gMTtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnY3RybCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnY21kKycpKSB7XG4gICAgY21kRGVmIHw9IDg7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnYWx0KycpKSB7XG4gICAgY21kRGVmIHw9IDI7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2FsdCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcbiAgICBjbWREZWYgfD0gNDtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnc2hpZnQrJywgJycpO1xuICB9XG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ21ldGErJykpIHtcbiAgICBjbWREZWYgfD0gODtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XG4gIH1cblxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XG4gICAga2V5ID0gMzg7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZG93bicpIHtcbiAgICBrZXkgPSA0MDtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICcrJyB8fCBrZXlEZWYgPT09ICdcIitcIicpIHtcbiAgICBrZXkgPSAxNzE7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XG4gICAga2V5ID0gMTczO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VzYycpIHtcbiAgICBrZXkgPSAyNztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbnRlcicpIHtcbiAgICBrZXkgPSAxMztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcbiAgICBrZXkgPSAzMjtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdmNCcpIHtcbiAgICBrZXkgPSAxMTU7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnYmFja3NwYWNlJykge1xuICAgIGtleSA9IDg7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcbiAgICBrZXkgPSAzNjtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbmQnKSB7XG4gICAga2V5ID0gMzU7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnbGVmdCcpIHtcbiAgICBrZXkgPSAzNztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcbiAgICBrZXkgPSAzOTtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdlZG93bicpIHtcbiAgICBrZXkgPSAzNDtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdldXAnKSB7XG4gICAga2V5ID0gMzM7XG4gIH0gZWxzZSB7XG4gICAga2V5ID0ga2V5RGVmLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgfVxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xuICAgIHJldHVybiBrZXlEZWYgPT09ICd3aGVlbCcgJiYgY21kID09PSBjbWREZWY7XG4gIH1cbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICh3aW5kb3cgYXMgYW55KS5pc0tleUlnbm9yZWQgPSBpc0tleUlnbm9yZWQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHluYW1pY0Nzc0NvbXBvbmVudCxcbiAgICBOZWdhdGl2ZVJlc3BvbnNpdmVDU1NDbGFzc1BpcGUsXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXG4gICAgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQsXG4gICAgUGRmQm9va01vZGVDb21wb25lbnQsXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGRmRGFya1RoZW1lQ29tcG9uZW50LFxuICAgIFBkZkRyYXdFZGl0b3JDb21wb25lbnQsXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzQ29tcG9uZW50LFxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCxcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcbiAgICBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQsXG4gICAgUGRmRWRpdG9yQ29tcG9uZW50LFxuICAgIFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCxcbiAgICBQZGZFdmVuU3ByZWFkQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxuICAgIFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQsXG4gICAgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCxcbiAgICBQZGZGaW5kTmV4dENvbXBvbmVudCxcbiAgICBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQsXG4gICAgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCxcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmSGFuZFRvb2xDb21wb25lbnQsXG4gICAgUGRmSG9yaXpvbnRhbFNjcm9sbENvbXBvbmVudCxcbiAgICBQZGZJbmZpbml0ZVNjcm9sbENvbXBvbmVudCxcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZMaWdodFRoZW1lQ29tcG9uZW50LFxuICAgIFBkZk1hdGNoRGlhY3JpdGljc0NvbXBvbmVudCxcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZOb1NwcmVhZENvbXBvbmVudCxcbiAgICBQZGZPZGRTcHJlYWRDb21wb25lbnQsXG4gICAgUGRmT3BlbkZpbGVDb21wb25lbnQsXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxuICAgIFBkZlBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LFxuICAgIFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCxcbiAgICBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50LFxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcbiAgICBQZGZQcmludENvbXBvbmVudCxcbiAgICBQZGZSb3RhdGVQYWdlQ29tcG9uZW50LFxuICAgIFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQsXG4gICAgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxuICAgIFBkZlNoeUJ1dHRvbkNvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyQ29tcG9uZW50LFxuICAgIFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50LFxuICAgIFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZlNpbmdsZVBhZ2VNb2RlQ29tcG9uZW50LFxuICAgIFBkZlN0YW1wRWRpdG9yQ29tcG9uZW50LFxuICAgIFBkZlRleHRFZGl0b3JDb21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxuICAgIFBkZlRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmVmVydGljYWxTY3JvbGxNb2RlQ29tcG9uZW50LFxuICAgIFBkZldyYXBwZWRTY3JvbGxNb2RlQ29tcG9uZW50LFxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcbiAgICBQZGZab29tSW5Db21wb25lbnQsXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcbiAgICBSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlLFxuICAgIFRyYW5zbGF0ZVBpcGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW05neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZWdhdGl2ZVJlc3BvbnNpdmVDU1NDbGFzc1BpcGUsXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXG4gICAgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQsXG4gICAgUGRmQm9va01vZGVDb21wb25lbnQsXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGRmRGFya1RoZW1lQ29tcG9uZW50LFxuICAgIFBkZkRyYXdFZGl0b3JDb21wb25lbnQsXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzRGlhbG9nQ29tcG9uZW50LFxuICAgIFBkZkRvd25sb2FkQ29tcG9uZW50LFxuICAgIFBkZkVkaXRvckNvbXBvbmVudCxcbiAgICBQZGZFcnJvck1lc3NhZ2VDb21wb25lbnQsXG4gICAgUGRmRXZlblNwcmVhZENvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXG4gICAgUGRmRmlyc3RQYWdlQ29tcG9uZW50LFxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxuICAgIFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQsXG4gICAgUGRmSW5maW5pdGVTY3JvbGxDb21wb25lbnQsXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCxcbiAgICBQZGZNYXRjaERpYWNyaXRpY3NDb21wb25lbnQsXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXG4gICAgUGRmTm9TcHJlYWRDb21wb25lbnQsXG4gICAgUGRmT2RkU3ByZWFkQ29tcG9uZW50LFxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXG4gICAgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCxcbiAgICBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCxcbiAgICBQZGZQcmVwYXJlUHJpbnRpbmdEaWFsb2dDb21wb25lbnQsXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmU2VsZWN0VG9vbENvbXBvbmVudCxcbiAgICBQZGZTaHlCdXR0b25Db21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCxcbiAgICBQZGZTdGFtcEVkaXRvckNvbXBvbmVudCxcbiAgICBQZGZUZXh0RWRpdG9yQ29tcG9uZW50LFxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCxcbiAgICBQZGZXcmFwcGVkU2Nyb2xsTW9kZUNvbXBvbmVudCxcbiAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXG4gICAgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQsXG4gICAgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGUge31cbiJdfQ==