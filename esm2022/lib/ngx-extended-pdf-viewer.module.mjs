// tslint:disable:max-line-length
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicCssComponent } from './dynamic-css/dynamic-css.component';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { NgxConsole } from './options/ngx-console';
import { PdfAltTextDialogComponent } from './pdf-dialog/pdf-alt-text-dialog/pdf-alt-text-dialog.component';
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
import { PdfHighlightEditorComponent } from './toolbar/pdf-highlight-editor/pdf-highlight-editor.component';
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
import { PdfRotatePageCcwComponent } from './toolbar/pdf-rotate-page-ccw/pdf-rotate-page-ccw.component';
import { PdfRotatePageCwComponent } from './toolbar/pdf-rotate-page-cw/pdf-rotate-page-cw.component';
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
    /** @nocollapse */ static ɵfac = function NgxExtendedPdfViewerModule_Factory(t) { return new (t || NgxExtendedPdfViewerModule)(); };
    /** @nocollapse */ static ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgxExtendedPdfViewerModule });
    /** @nocollapse */ static ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [NgxExtendedPdfViewerService], imports: [CommonModule, FormsModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxExtendedPdfViewerModule, [{
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
                    PdfAltTextDialogComponent,
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
                    PdfHighlightEditorComponent,
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
                    PdfRotatePageCwComponent,
                    PdfRotatePageCcwComponent,
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
                    PdfAltTextDialogComponent,
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
                    PdfHighlightEditorComponent,
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
        PdfAltTextDialogComponent,
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
        PdfHighlightEditorComponent,
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
        PdfRotatePageCwComponent,
        PdfRotatePageCcwComponent,
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
        PdfAltTextDialogComponent,
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
        PdfHighlightEditorComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDM0csT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDbkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFF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O1FBQzVCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEeW5hbWljQ3NzQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLWNzcy9keW5hbWljLWNzcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmd4Q29uc29sZSB9IGZyb20gJy4vb3B0aW9ucy9uZ3gtY29uc29sZSc7XHJcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcclxuaW1wb3J0IHsgUGRmQWx0VGV4dERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtYWx0LXRleHQtZGlhbG9nL3BkZi1hbHQtdGV4dC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLWRpYWxvZy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRXJyb3JNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1lcnJvci1tZXNzYWdlL3BkZi1lcnJvci1tZXNzYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlBhc3N3b3JkRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZGlhbG9nL3BkZi1wYXNzd29yZC1kaWFsb2cvcGRmLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmVwYXJlUHJpbnRpbmdEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nL3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kdW1teS1jb21wb25lbnRzL3BkZi1kdW1teS1jb21wb25lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5lZ2F0aXZlUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSwgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSB9IGZyb20gJy4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci1jb250ZW50L3BkZi1zaWRlYmFyLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXItdG9vbGJhci9wZGYtc2lkZWJhci10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL2Fjcm9mb3JtLWRlZmF1bHQtdGhlbWUvcGRmLWFjcm9mb3JtLWRlZmF1bHQtdGhlbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRGFya1RoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9wZGYtZGFyay10aGVtZS9wZGYtZGFyay10aGVtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZMaWdodFRoZW1lQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZS9wZGYtbGlnaHQtdGhlbWUvcGRmLWxpZ2h0LXRoZW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkJvb2tNb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ib29rLW1vZGUvcGRmLWJvb2stbW9kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZDb250ZXh0TWVudUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtY29udGV4dC1tZW51L3BkZi1jb250ZXh0LW1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkRvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kb3dubG9hZC9wZGYtZG93bmxvYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRHJhd0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZHJhdy1lZGl0b3IvcGRmLWRyYXctZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZWRpdG9yL3BkZi1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRXZlblNwcmVhZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZXZlbi1zcHJlYWQvcGRmLWV2ZW4tc3ByZWFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmQtYnV0dG9uL3BkZi1maW5kLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLWlucHV0LWFyZWEvcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTmV4dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1uZXh0L3BkZi1maW5kLW5leHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLXByZXZpb3VzL3BkZi1maW5kLXByZXZpb3VzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyL3BkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1tYXRjaC1jYXNlL3BkZi1maW5kLW1hdGNoLWNhc2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1yZXN1bHRzLWNvdW50L3BkZi1maW5kLXJlc3VsdHMtY291bnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS13b3JkL3BkZi1maW5kLWVudGlyZS13b3JkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk1hdGNoRGlhY3JpdGljc0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLW1hdGNoLWRpYWNyaXRpY3MvcGRmLW1hdGNoLWRpYWNyaXRpY3MuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZIYW5kVG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtaGFuZC10b29sL3BkZi1oYW5kLXRvb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmSGlnaGxpZ2h0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1oaWdobGlnaHQtZWRpdG9yL3BkZi1oaWdobGlnaHQtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhvcml6b250YWwtc2Nyb2xsL3BkZi1ob3Jpem9udGFsLXNjcm9sbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZJbmZpbml0ZVNjcm9sbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtaW5maW5pdGUtc2Nyb2xsL3BkZi1pbmZpbml0ZS1zY3JvbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTm9TcHJlYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLW5vLXNwcmVhZC9wZGYtbm8tc3ByZWFkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk9kZFNwcmVhZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb2RkLXNwcmVhZC9wZGYtb2RkLXNwcmVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZPcGVuRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmlyc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtZmlyc3QtcGFnZS9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZMYXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWxhc3QtcGFnZS9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk5leHRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbmV4dC1wYWdlL3BkZi1uZXh0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUGFnZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQYWdpbmdBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtcHJldmlvdXMtcGFnZS9wZGYtcHJldmlvdXMtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmVzZW50YXRpb24tbW9kZS9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJpbnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXByaW50L3BkZi1wcmludC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ2N3Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1yb3RhdGUtcGFnZS1jY3cvcGRmLXJvdGF0ZS1wYWdlLWNjdy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ3dDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlLWN3L3BkZi1yb3RhdGUtcGFnZS1jdy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1yb3RhdGUtcGFnZS9wZGYtcm90YXRlLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2VsZWN0VG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2VsZWN0LXRvb2wvcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNoeUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc2luZ2xlLXBhZ2UtbW9kZS9wZGYtc2luZ2xlLXBhZ2UtbW9kZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTdGFtcEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtc3RhbXAtZWRpdG9yL3BkZi1zdGFtcC1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVGV4dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdGV4dC1lZGl0b3IvcGRmLXRleHQtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zaWRlYmFyL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdmVydGljYWwtc2Nyb2xsLWJ1dHRvbi9wZGYtdmVydGljYWwtc2Nyb2xsLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmV3JhcHBlZFNjcm9sbE1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUvcGRmLXdyYXBwZWQtc2Nyb2xsLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbU91dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLW91dC9wZGYtem9vbS1vdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcclxuXHJcbmlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSA9PT0gMCkge1xyXG4gIG5ldyBOZ3hDb25zb2xlKCkubG9nKCcnKTtcclxufVxyXG5cclxuaWYgKCFQcm9taXNlWydhbGxTZXR0bGVkJ10pIHtcclxuICBpZiAoISF3aW5kb3dbJ1pvbmUnXSAmJiAhd2luZG93WydfX3pvbmVfc3ltYm9sX19Qcm9taXNlLmFsbFNldHRsZWQnXSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgXCJQbGVhc2UgdXBkYXRlIHpvbmUuanMgdG8gdmVyc2lvbiAwLjEwLjMgb3IgaGlnaGVyLiBPdGhlcndpc2UsIHlvdSdsbCBydW4gdGhlIHNsb3cgRUNNQVNjcmlwdCA1IHZlcnNpb24gZXZlbiBvbiBtb2Rlcm4gYnJvd3NlciB0aGF0IGNhbiBydW4gdGhlIGZhc3QgRVNNQVNjcmlwdCAyMDE1IHZlcnNpb24uXCJcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleUlnbm9yZWQoY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xyXG5cclxuICBjb25zdCBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5cycpO1xyXG4gIGNvbnN0IGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuZ2V0KCdhY2NlcHRLZXlzJyk7XHJcbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcclxuICAgIGlmICghIWlnbm9yZUtleXMgJiYgaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCAnV0hFRUwnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5Y29kZSA9PT0gMTYgfHwga2V5Y29kZSA9PT0gMTcgfHwga2V5Y29kZSA9PT0gMTggfHwga2V5Y29kZSA9PT0gMjI0KSB7XHJcbiAgICAvLyBpZ25vcmUgc29saXRhcnkgU0hJRlQsIEFMVCwgQ01ELCBhbmQgQ1RSTCBiZWNhdXNlIHRoZXkgb25seSBtYWtlIHNlbnNlIGFzIHR3by1rZXktY29tYmluYXRpb25zXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgLy8gY21kIGlzIGEgYml0LWFycmF5OlxyXG4gIC8vIDEgPT0gQ1RSTFxyXG4gIC8vIDIgPT0gQUxUXHJcbiAgLy8gNCA9PSBTSElGVFxyXG4gIC8vIDggPT0gTUVUQVxyXG4gIGNvbnN0IGlnbm9yZUtleWJvYXJkID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5Ym9hcmQnKTtcclxuICBpZiAoISFpZ25vcmVLZXlib2FyZCkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwga2V5Y29kZSkpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuICFpc0tleUluTGlzdChhY2NlcHRLZXlzLCBjbWQsIGtleWNvZGUpO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xyXG4gIGlmICghc2V0dGluZ3MpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gc2V0dGluZ3Muc29tZSgoa2V5RGVmKSA9PiBpc0tleShrZXlEZWYsIGNtZCwga2V5Y29kZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleShrZXlEZWY6IHN0cmluZywgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBsZXQgY21kRGVmID0gMDtcclxuICBsZXQga2V5ID0gMDtcclxuICBrZXlEZWYgPSBrZXlEZWYudG9Mb3dlckNhc2UoKTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYml0d2lzZVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcclxuICAgIGNtZERlZiB8PSAxO1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2N0cmwrJywgJycpO1xyXG4gIH1cclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjbWQrJykpIHtcclxuICAgIGNtZERlZiB8PSA4O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2FsdCsnKSkge1xyXG4gICAgY21kRGVmIHw9IDI7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnYWx0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcclxuICAgIGNtZERlZiB8PSA0O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ3NoaWZ0KycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnbWV0YSsnKSkge1xyXG4gICAgY21kRGVmIHw9IDg7XHJcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XHJcbiAgfVxyXG5cclxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XHJcbiAgICBrZXkgPSAzODtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Rvd24nKSB7XHJcbiAgICBrZXkgPSA0MDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJysnIHx8IGtleURlZiA9PT0gJ1wiK1wiJykge1xyXG4gICAga2V5ID0gMTcxO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XHJcbiAgICBrZXkgPSAxNzM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlc2MnKSB7XHJcbiAgICBrZXkgPSAyNztcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VudGVyJykge1xyXG4gICAga2V5ID0gMTM7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcclxuICAgIGtleSA9IDMyO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZjQnKSB7XHJcbiAgICBrZXkgPSAxMTU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdiYWNrc3BhY2UnKSB7XHJcbiAgICBrZXkgPSA4O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcclxuICAgIGtleSA9IDM2O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZW5kJykge1xyXG4gICAga2V5ID0gMzU7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdsZWZ0Jykge1xyXG4gICAga2V5ID0gMzc7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcclxuICAgIGtleSA9IDM5O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncGFnZWRvd24nKSB7XHJcbiAgICBrZXkgPSAzNDtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2V1cCcpIHtcclxuICAgIGtleSA9IDMzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBrZXkgPSBrZXlEZWYudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApO1xyXG4gIH1cclxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xyXG4gICAgcmV0dXJuIGtleURlZiA9PT0gJ3doZWVsJyAmJiBjbWQgPT09IGNtZERlZjtcclxuICB9XHJcbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcclxufVxyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgKHdpbmRvdyBhcyBhbnkpLmlzS2V5SWdub3JlZCA9IGlzS2V5SWdub3JlZDtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEeW5hbWljQ3NzQ29tcG9uZW50LFxyXG4gICAgTmVnYXRpdmVSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlLFxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXHJcbiAgICBQZGZBY3JvZm9ybURlZmF1bHRUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZkJvb2tNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBQZGZEYXJrVGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZEcmF3RWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmQWx0VGV4dERpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc0NvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZkRvd25sb2FkQ29tcG9uZW50LFxyXG4gICAgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50LFxyXG4gICAgUGRmRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmRXJyb3JNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmRXZlblNwcmVhZENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXHJcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmROZXh0Q29tcG9uZW50LFxyXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCxcclxuICAgIFBkZkZpcnN0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmSGlnaGxpZ2h0RWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmSG9yaXpvbnRhbFNjcm9sbENvbXBvbmVudCxcclxuICAgIFBkZkluZmluaXRlU2Nyb2xsQ29tcG9uZW50LFxyXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZMaWdodFRoZW1lQ29tcG9uZW50LFxyXG4gICAgUGRmTWF0Y2hEaWFjcml0aWNzQ29tcG9uZW50LFxyXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZOb1NwcmVhZENvbXBvbmVudCxcclxuICAgIFBkZk9kZFNwcmVhZENvbXBvbmVudCxcclxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxyXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2luZ0FyZWFDb21wb25lbnQsXHJcbiAgICBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZQcmludENvbXBvbmVudCxcclxuICAgIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZSb3RhdGVQYWdlQ3dDb21wb25lbnQsXHJcbiAgICBQZGZSb3RhdGVQYWdlQ2N3Q29tcG9uZW50LFxyXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmU2h5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlN0YW1wRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmVGV4dEVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZldyYXBwZWRTY3JvbGxNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcclxuICAgIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50LFxyXG4gICAgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSxcclxuICAgIFRyYW5zbGF0ZVBpcGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2VdLFxyXG4gIGV4cG9ydHM6IFtcclxuICAgIE5lZ2F0aXZlUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSxcclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50LFxyXG4gICAgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZCb29rTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGRmRGFya1RoZW1lQ29tcG9uZW50LFxyXG4gICAgUGRmRHJhd0VkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZkFsdFRleHREaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZEb2N1bWVudFByb3BlcnRpZXNEaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcclxuICAgIFBkZkVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZkVycm9yTWVzc2FnZUNvbXBvbmVudCxcclxuICAgIFBkZkV2ZW5TcHJlYWRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTmV4dENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCxcclxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXHJcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZIYW5kVG9vbENvbXBvbmVudCxcclxuICAgIFBkZkhpZ2hsaWdodEVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZkhvcml6b250YWxTY3JvbGxDb21wb25lbnQsXHJcbiAgICBQZGZJbmZpbml0ZVNjcm9sbENvbXBvbmVudCxcclxuICAgIFBkZkxhc3RQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmTGlnaHRUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZk1hdGNoRGlhY3JpdGljc0NvbXBvbmVudCxcclxuICAgIFBkZk5leHRQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmTm9TcHJlYWRDb21wb25lbnQsXHJcbiAgICBQZGZPZGRTcHJlYWRDb21wb25lbnQsXHJcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXHJcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmUGFzc3dvcmREaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZQcmVwYXJlUHJpbnRpbmdEaWFsb2dDb21wb25lbnQsXHJcbiAgICBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXHJcbiAgICBQZGZSb3RhdGVQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcclxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmU2h5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhclRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaW5nbGVQYWdlTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlN0YW1wRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmVGV4dEVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlZlcnRpY2FsU2Nyb2xsTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZldyYXBwZWRTY3JvbGxNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxyXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcclxuICAgIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50LFxyXG4gICAgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJNb2R1bGUge31cclxuIl19