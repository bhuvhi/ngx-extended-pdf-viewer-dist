import { EventEmitter, NgZone } from '@angular/core';
import { PageViewModeType, ScrollModeType } from '../../options/pdf-viewer';
import { PDFNotificationService } from '../../pdf-notification-service';
import { ResponsiveVisibility } from '../../responsive-visibility';
import * as i0 from "@angular/core";
export declare class PdfHorizontalScrollComponent {
    private notificationService;
    private ngZone;
    show: ResponsiveVisibility;
    scrollMode: ScrollModeType;
    pageViewMode: PageViewModeType;
    pageViewModeChange: EventEmitter<PageViewModeType>;
    onClick: () => void;
    constructor(notificationService: PDFNotificationService, ngZone: NgZone);
    onPdfJsInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfHorizontalScrollComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfHorizontalScrollComponent, "pdf-horizontal-scroll", never, { "show": "show"; "scrollMode": "scrollMode"; "pageViewMode": "pageViewMode"; }, { "pageViewModeChange": "pageViewModeChange"; }, never, never>;
}
