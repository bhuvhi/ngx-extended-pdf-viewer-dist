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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQWlDO0FBQ2pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDNUksT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDbkksT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLHNCQUFzQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDakcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDckgsT0FBTyxFQUFF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dUJBQXVCO3dCQUN2QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsb0NBQW9DO3dCQUNwQyxvQkFBb0I7d0JBQ3BCLGtCQUFrQjt3QkFDbEIsd0JBQXdCO3dCQUN4QixzQkFBc0I7d0JBQ3RCLG1CQUFtQjt3QkFDbkIsbUNBQW1DO3dCQUNuQyxzQkFBc0I7d0JBQ3RCLDBCQUEwQjt3QkFDMUIsNEJBQTRCO3dCQUM1Qix5QkFBeUI7d0JBQ3pCLHlCQUF5Qjt3QkFDekIsb0JBQW9CO3dCQUNwQix3QkFBd0I7d0JBQ3hCLDRCQUE0Qjt3QkFDNUIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLDRCQUE0Qjt3QkFDNUIsMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsMkJBQTJCO3dCQUMzQixvQkFBb0I7d0JBQ3BCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjt3QkFDdEIsc0JBQXNCO3dCQUN0QiwwQkFBMEI7d0JBQzFCLGlDQUFpQzt3QkFDakMsNEJBQTRCO3dCQUM1Qix3QkFBd0I7d0JBQ3hCLGlCQUFpQjt3QkFDakIsc0JBQXNCO3dCQUN0Qiw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFDNUIsc0JBQXNCO3dCQUN0QixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQiwwQkFBMEI7d0JBQzFCLDBCQUEwQjt3QkFDMUIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLGtDQUFrQzt3QkFDbEMseUJBQXlCO3dCQUN6QixtQkFBbUI7d0JBQ25CLDhCQUE4Qjt3QkFDOUIsNkJBQTZCO3dCQUM3Qix3QkFBd0I7d0JBQ3hCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLHNCQUFzQjtxQkFDdkI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IER5bmFtaWNDc3NDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtY3NzL2R5bmFtaWMtY3NzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOZ3hDb25zb2xlIH0gZnJvbSAnLi9vcHRpb25zL25neC1jb25zb2xlJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uLW9wdGlvbnMnO1xyXG5pbXBvcnQgeyBQZGZEb2N1bWVudFByb3BlcnRpZXNEaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtZGlhbG9nL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLWRpYWxvZy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZFcnJvck1lc3NhZ2VDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLWVycm9yLW1lc3NhZ2UvcGRmLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUGFzc3dvcmREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3BkZi1kaWFsb2cvcGRmLXBhc3N3b3JkLWRpYWxvZy9wZGYtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmVnYXRpdmVSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlLCBSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlIH0gZnJvbSAnLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNpZGViYXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLWNvbnRlbnQvcGRmLXNpZGViYXItY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci10b29sYmFyL3BkZi1zaWRlYmFyLXRvb2xiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vc2lkZWJhci9wZGYtc2lkZWJhci9wZGYtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZBY3JvZm9ybURlZmF1bHRUaGVtZUNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWUvYWNyb2Zvcm0tZGVmYXVsdC10aGVtZS9wZGYtYWNyb2Zvcm0tZGVmYXVsdC10aGVtZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZEYXJrVGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3BkZi1kYXJrLXRoZW1lL3BkZi1kYXJrLXRoZW1lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkxpZ2h0VGhlbWVDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lL3BkZi1saWdodC10aGVtZS9wZGYtbGlnaHQtdGhlbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmQm9va01vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWJvb2stbW9kZS9wZGYtYm9vay1tb2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1jb250ZXh0LW1lbnUvcGRmLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZEb2N1bWVudFByb3BlcnRpZXNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRG93bmxvYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWRvd25sb2FkL3BkZi1kb3dubG9hZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZEcmF3RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kcmF3LWVkaXRvci9wZGYtZHJhdy1lZGl0b3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1lZGl0b3IvcGRmLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZFdmVuU3ByZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ldmVuLXNwcmVhZC9wZGYtZXZlbi1zcHJlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZC1idXR0b24vcGRmLWZpbmQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtaW5wdXQtYXJlYS9wZGYtZmluZC1pbnB1dC1hcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmROZXh0Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLW5leHQvcGRmLWZpbmQtbmV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtcHJldmlvdXMvcGRmLWZpbmQtcHJldmlvdXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC9wZGYtZmluZC1oaWdobGlnaHQtYWxsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLW1hdGNoLWNhc2UvcGRmLWZpbmQtbWF0Y2gtY2FzZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyL3BkZi1maW5kLXJlc3VsdHMtY291bnQvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmQtZW50aXJlLXdvcmQvcGRmLWZpbmQtZW50aXJlLXdvcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTWF0Y2hEaWFjcml0aWNzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtbWF0Y2gtZGlhY3JpdGljcy9wZGYtbWF0Y2gtZGlhY3JpdGljcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZGaW5kYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkhhbmRUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1oYW5kLXRvb2wvcGRmLWhhbmQtdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZIb3Jpem9udGFsU2Nyb2xsQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ob3Jpem9udGFsLXNjcm9sbC9wZGYtaG9yaXpvbnRhbC1zY3JvbGwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmSW5maW5pdGVTY3JvbGxDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWluZmluaXRlLXNjcm9sbC9wZGYtaW5maW5pdGUtc2Nyb2xsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZk5vU3ByZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1uby1zcHJlYWQvcGRmLW5vLXNwcmVhZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZPZGRTcHJlYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLW9kZC1zcHJlYWQvcGRmLW9kZC1zcHJlYWQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmT3BlbkZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLW9wZW4tZmlsZS9wZGYtb3Blbi1maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZkZpcnN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWZpcnN0LXBhZ2UvcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmTGFzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1sYXN0LXBhZ2UvcGRmLWxhc3QtcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZOZXh0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLW5leHQtcGFnZS9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlBhZ2VOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXByZXZpb3VzLXBhZ2UvcGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlByaW50Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmludC9wZGYtcHJpbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmUm90YXRlUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcm90YXRlLXBhZ2UvcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlNlbGVjdFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNlbGVjdC10b29sL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZTaHlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNoeS1idXR0b24vcGRmLXNoeS1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU2luZ2xlUGFnZU1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNpbmdsZS1wYWdlLW1vZGUvcGRmLXNpbmdsZS1wYWdlLW1vZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmU3RhbXBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXN0YW1wLWVkaXRvci9wZGYtc3RhbXAtZWRpdG9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlRleHRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRleHQtZWRpdG9yL3BkZi10ZXh0LWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b2dnbGUtc2lkZWJhci9wZGYtdG9nZ2xlLXNpZGViYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUGRmVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQZGZWZXJ0aWNhbFNjcm9sbE1vZGVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXZlcnRpY2FsLXNjcm9sbC1idXR0b24vcGRmLXZlcnRpY2FsLXNjcm9sbC1tb2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZldyYXBwZWRTY3JvbGxNb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlL3BkZi13cmFwcGVkLXNjcm9sbC1tb2RlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWRyb3Bkb3duL3BkZi16b29tLWRyb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWluL3BkZi16b29tLWluLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21PdXRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS1vdXQvcGRmLXpvb20tb3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBkZlpvb21Ub29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUucGlwZSc7XHJcblxyXG5pZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgPT09IDApIHtcclxuICBuZXcgTmd4Q29uc29sZSgpLmxvZygnJyk7XHJcbn1cclxuXHJcbmlmICghUHJvbWlzZVsnYWxsU2V0dGxlZCddKSB7XHJcbiAgaWYgKCEhd2luZG93Wydab25lJ10gJiYgIXdpbmRvd1snX196b25lX3N5bWJvbF9fUHJvbWlzZS5hbGxTZXR0bGVkJ10pIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSB6b25lLmpzIHRvIHZlcnNpb24gMC4xMC4zIG9yIGhpZ2hlci4gT3RoZXJ3aXNlLCB5b3UnbGwgcnVuIHRoZSBzbG93IEVDTUFTY3JpcHQgNSB2ZXJzaW9uIGV2ZW4gb24gbW9kZXJuIGJyb3dzZXIgdGhhdCBjYW4gcnVuIHRoZSBmYXN0IEVTTUFTY3JpcHQgMjAxNSB2ZXJzaW9uLlwiXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNLZXlJZ25vcmVkKGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcclxuXHJcbiAgY29uc3QgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleXMnKTtcclxuICBjb25zdCBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnYWNjZXB0S2V5cycpO1xyXG4gIGlmIChrZXljb2RlID09PSAnV0hFRUwnKSB7XHJcbiAgICBpZiAoISFpZ25vcmVLZXlzICYmIGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwgJ1dIRUVMJykpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gIWlzS2V5SW5MaXN0KGFjY2VwdEtleXMsIGNtZCwgJ1dIRUVMJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGtleWNvZGUgPT09IDE2IHx8IGtleWNvZGUgPT09IDE3IHx8IGtleWNvZGUgPT09IDE4IHx8IGtleWNvZGUgPT09IDIyNCkge1xyXG4gICAgLy8gaWdub3JlIHNvbGl0YXJ5IFNISUZULCBBTFQsIENNRCwgYW5kIENUUkwgYmVjYXVzZSB0aGV5IG9ubHkgbWFrZSBzZW5zZSBhcyB0d28ta2V5LWNvbWJpbmF0aW9uc1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIC8vIGNtZCBpcyBhIGJpdC1hcnJheTpcclxuICAvLyAxID09IENUUkxcclxuICAvLyAyID09IEFMVFxyXG4gIC8vIDQgPT0gU0hJRlRcclxuICAvLyA4ID09IE1FVEFcclxuICBjb25zdCBpZ25vcmVLZXlib2FyZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleWJvYXJkJyk7XHJcbiAgaWYgKCEhaWdub3JlS2V5Ym9hcmQpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKCEhaWdub3JlS2V5cyAmJiBpZ25vcmVLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsIGtleWNvZGUpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCEhYWNjZXB0S2V5cyAmJiBhY2NlcHRLZXlzLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCBrZXljb2RlKTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0tleUluTGlzdChzZXR0aW5nczogQXJyYXk8c3RyaW5nPiwgY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcclxuICBpZiAoIXNldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHNldHRpbmdzLnNvbWUoKGtleURlZikgPT4gaXNLZXkoa2V5RGVmLCBjbWQsIGtleWNvZGUpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNLZXkoa2V5RGVmOiBzdHJpbmcsIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XHJcbiAgbGV0IGNtZERlZiA9IDA7XHJcbiAgbGV0IGtleSA9IDA7XHJcbiAga2V5RGVmID0ga2V5RGVmLnRvTG93ZXJDYXNlKCk7XHJcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLWJpdHdpc2VcclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjdHJsKycpKSB7XHJcbiAgICBjbWREZWYgfD0gMTtcclxuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdjdHJsKycsICcnKTtcclxuICB9XHJcbiAgaWYgKGtleURlZi5pbmNsdWRlcygnY21kKycpKSB7XHJcbiAgICBjbWREZWYgfD0gODtcclxuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdjbWQrJywgJycpO1xyXG4gIH1cclxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdhbHQrJykpIHtcclxuICAgIGNtZERlZiB8PSAyO1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2FsdCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ3NoaWZ0KycpKSB7XHJcbiAgICBjbWREZWYgfD0gNDtcclxuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdzaGlmdCsnLCAnJyk7XHJcbiAgfVxyXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ21ldGErJykpIHtcclxuICAgIGNtZERlZiB8PSA4O1xyXG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ21ldGErJywgJycpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGtleURlZiA9PT0gJ3VwJykge1xyXG4gICAga2V5ID0gMzg7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdkb3duJykge1xyXG4gICAga2V5ID0gNDA7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICcrJyB8fCBrZXlEZWYgPT09ICdcIitcIicpIHtcclxuICAgIGtleSA9IDE3MTtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJy0nIHx8IGtleURlZiA9PT0gJ1wiLVwiJykge1xyXG4gICAga2V5ID0gMTczO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZXNjJykge1xyXG4gICAga2V5ID0gMjc7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbnRlcicpIHtcclxuICAgIGtleSA9IDEzO1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnc3BhY2UnKSB7XHJcbiAgICBrZXkgPSAzMjtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Y0Jykge1xyXG4gICAga2V5ID0gMTE1O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnYmFja3NwYWNlJykge1xyXG4gICAga2V5ID0gODtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2hvbWUnKSB7XHJcbiAgICBrZXkgPSAzNjtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VuZCcpIHtcclxuICAgIGtleSA9IDM1O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnbGVmdCcpIHtcclxuICAgIGtleSA9IDM3O1xyXG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncmlnaHQnKSB7XHJcbiAgICBrZXkgPSAzOTtcclxuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ3BhZ2Vkb3duJykge1xyXG4gICAga2V5ID0gMzQ7XHJcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdldXAnKSB7XHJcbiAgICBrZXkgPSAzMztcclxuICB9IGVsc2Uge1xyXG4gICAga2V5ID0ga2V5RGVmLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcclxuICB9XHJcbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcclxuICAgIHJldHVybiBrZXlEZWYgPT09ICd3aGVlbCcgJiYgY21kID09PSBjbWREZWY7XHJcbiAgfVxyXG4gIHJldHVybiBrZXkgPT09IGtleWNvZGUgJiYgY21kID09PSBjbWREZWY7XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICh3aW5kb3cgYXMgYW55KS5pc0tleUlnbm9yZWQgPSBpc0tleUlnbm9yZWQ7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRHluYW1pY0Nzc0NvbXBvbmVudCxcclxuICAgIE5lZ2F0aXZlUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSxcclxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50LFxyXG4gICAgUGRmQWNyb2Zvcm1EZWZhdWx0VGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZCb29rTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxyXG4gICAgUGRmRGFya1RoZW1lQ29tcG9uZW50LFxyXG4gICAgUGRmRHJhd0VkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc0NvbXBvbmVudCxcclxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc0RpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZkRvd25sb2FkQ29tcG9uZW50LFxyXG4gICAgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50LFxyXG4gICAgUGRmRWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmRXJyb3JNZXNzYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmRXZlblNwcmVhZENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kYmFyTWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXHJcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCxcclxuICAgIFBkZkZpbmROZXh0Q29tcG9uZW50LFxyXG4gICAgUGRmRmluZFByZXZpb3VzQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCxcclxuICAgIFBkZkZpcnN0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZkhhbmRUb29sQ29tcG9uZW50LFxyXG4gICAgUGRmSG9yaXpvbnRhbFNjcm9sbENvbXBvbmVudCxcclxuICAgIFBkZkluZmluaXRlU2Nyb2xsQ29tcG9uZW50LFxyXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZMaWdodFRoZW1lQ29tcG9uZW50LFxyXG4gICAgUGRmTWF0Y2hEaWFjcml0aWNzQ29tcG9uZW50LFxyXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZOb1NwcmVhZENvbXBvbmVudCxcclxuICAgIFBkZk9kZFNwcmVhZENvbXBvbmVudCxcclxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxyXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcclxuICAgIFBkZlBhZ2luZ0FyZWFDb21wb25lbnQsXHJcbiAgICBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCxcclxuICAgIFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZQcmludENvbXBvbmVudCxcclxuICAgIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxyXG4gICAgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlNlbGVjdFRvb2xDb21wb25lbnQsXHJcbiAgICBQZGZTaHlCdXR0b25Db21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2lkZWJhckNvbnRlbnRDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlNpbmdsZVBhZ2VNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmU3RhbXBFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZUZXh0RWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcclxuICAgIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVmVydGljYWxTY3JvbGxNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmV3JhcHBlZFNjcm9sbE1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXHJcbiAgICBQZGZab29tSW5Db21wb25lbnQsXHJcbiAgICBQZGZab29tT3V0Q29tcG9uZW50LFxyXG4gICAgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlLFxyXG4gICAgVHJhbnNsYXRlUGlwZSxcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW05neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTmVnYXRpdmVSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlLFxyXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXHJcbiAgICBQZGZBY3JvZm9ybURlZmF1bHRUaGVtZUNvbXBvbmVudCxcclxuICAgIFBkZkJvb2tNb2RlQ29tcG9uZW50LFxyXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXHJcbiAgICBQZGZEYXJrVGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZEcmF3RWRpdG9yQ29tcG9uZW50LFxyXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmRG93bmxvYWRDb21wb25lbnQsXHJcbiAgICBQZGZFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZFcnJvck1lc3NhZ2VDb21wb25lbnQsXHJcbiAgICBQZGZFdmVuU3ByZWFkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZGJhckNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcclxuICAgIFBkZkZpbmRJbnB1dEFyZWFDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50LFxyXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQsXHJcbiAgICBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50LFxyXG4gICAgUGRmRmlyc3RQYWdlQ29tcG9uZW50LFxyXG4gICAgUGRmSGFuZFRvb2xDb21wb25lbnQsXHJcbiAgICBQZGZIb3Jpem9udGFsU2Nyb2xsQ29tcG9uZW50LFxyXG4gICAgUGRmSW5maW5pdGVTY3JvbGxDb21wb25lbnQsXHJcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZkxpZ2h0VGhlbWVDb21wb25lbnQsXHJcbiAgICBQZGZNYXRjaERpYWNyaXRpY3NDb21wb25lbnQsXHJcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcclxuICAgIFBkZk5vU3ByZWFkQ29tcG9uZW50LFxyXG4gICAgUGRmT2RkU3ByZWFkQ29tcG9uZW50LFxyXG4gICAgUGRmT3BlbkZpbGVDb21wb25lbnQsXHJcbiAgICBQZGZQYWdlTnVtYmVyQ29tcG9uZW50LFxyXG4gICAgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCxcclxuICAgIFBkZlBhc3N3b3JkRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmUHJlcGFyZVByaW50aW5nRGlhbG9nQ29tcG9uZW50LFxyXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlByaW50Q29tcG9uZW50LFxyXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcclxuICAgIFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQsXHJcbiAgICBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2VsZWN0VG9vbENvbXBvbmVudCxcclxuICAgIFBkZlNoeUJ1dHRvbkNvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJDb21wb25lbnQsXHJcbiAgICBQZGZTaWRlYmFyQ29udGVudENvbXBvbmVudCxcclxuICAgIFBkZlNpZGViYXJUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmU2luZ2xlUGFnZU1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZTdGFtcEVkaXRvckNvbXBvbmVudCxcclxuICAgIFBkZlRleHRFZGl0b3JDb21wb25lbnQsXHJcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxyXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcclxuICAgIFBkZlRvb2xiYXJDb21wb25lbnQsXHJcbiAgICBQZGZWZXJ0aWNhbFNjcm9sbE1vZGVDb21wb25lbnQsXHJcbiAgICBQZGZXcmFwcGVkU2Nyb2xsTW9kZUNvbXBvbmVudCxcclxuICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcclxuICAgIFBkZlpvb21JbkNvbXBvbmVudCxcclxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXHJcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcclxuICAgIFJlc3BvbnNpdmVDU1NDbGFzc1BpcGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIHt9XHJcbiJdfQ==