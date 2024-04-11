import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import * as i0 from "@angular/core";
export class PDFNotificationService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
        this.pdfjsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
    }
}
/** @nocollapse */ PDFNotificationService.ɵfac = function PDFNotificationService_Factory(t) { return new (t || PDFNotificationService)(); };
/** @nocollapse */ PDFNotificationService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PDFNotificationService, factory: PDFNotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PDFNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQUtwRixNQUFNLE9BQU8sc0JBQXNCO0lBSG5DO1FBSUUsNEdBQTRHO1FBQ3JHLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUVsQyxpQkFBWSxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ3hFOzsrR0FMWSxzQkFBc0I7MkdBQXRCLHNCQUFzQixXQUF0QixzQkFBc0IsbUJBRnJCLE1BQU07dUZBRVAsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGdldFZlcnNpb25TdWZmaXgsIHBkZkRlZmF1bHRPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1kZWZhdWx0LW9wdGlvbnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUERGTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIC8vIHRoaXMgZXZlbnQgaXMgZmlyZWQgd2hlbiB0aGUgcGRmLmpzIGxpYnJhcnkgaGFzIGJlZW4gbG9hZGVkIGFuZCBvYmplY3RzIGxpa2UgUERGQXBwbGljYXRpb24gYXJlIGF2YWlsYWJsZVxuICBwdWJsaWMgb25QREZKU0luaXQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHB1YmxpYyBwZGZqc1ZlcnNpb24gPSBnZXRWZXJzaW9uU3VmZml4KHBkZkRlZmF1bHRPcHRpb25zLmFzc2V0c0ZvbGRlcik7XG59XG4iXX0=