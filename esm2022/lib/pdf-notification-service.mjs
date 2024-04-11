import { Injectable } from '@angular/core';
import { Subject, firstValueFrom } from 'rxjs';
import { getVersionSuffix, pdfDefaultOptions } from './options/pdf-default-options';
import * as i0 from "@angular/core";
export class PDFNotificationService {
    // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
    onPDFJSInit = new Subject();
    pdfjsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
    constructor() {
        (async () => {
            await firstValueFrom(this.onPDFJSInit);
            this.pdfjsVersion = getVersionSuffix(pdfDefaultOptions.assetsFolder);
        })();
    }
    /** @nocollapse */ static ɵfac = function PDFNotificationService_Factory(t) { return new (t || PDFNotificationService)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PDFNotificationService, factory: PDFNotificationService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PDFNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7QUFLcEYsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyw0R0FBNEc7SUFDckcsV0FBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFbEMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXZFO1FBQ0UsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNWLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDUCxDQUFDO21HQVhVLHNCQUFzQjsrRkFBdEIsc0JBQXNCLFdBQXRCLHNCQUFzQixtQkFGckIsTUFBTTs7aUZBRVAsc0JBQXNCO2NBSGxDLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCwgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZ2V0VmVyc2lvblN1ZmZpeCwgcGRmRGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLWRlZmF1bHQtb3B0aW9ucyc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUERGTm90aWZpY2F0aW9uU2VydmljZSB7XHJcbiAgLy8gdGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwZGYuanMgbGlicmFyeSBoYXMgYmVlbiBsb2FkZWQgYW5kIG9iamVjdHMgbGlrZSBQREZBcHBsaWNhdGlvbiBhcmUgYXZhaWxhYmxlXHJcbiAgcHVibGljIG9uUERGSlNJbml0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgcHVibGljIHBkZmpzVmVyc2lvbiA9IGdldFZlcnNpb25TdWZmaXgocGRmRGVmYXVsdE9wdGlvbnMuYXNzZXRzRm9sZGVyKTtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5vblBERkpTSW5pdCk7XHJcbiAgICAgIHRoaXMucGRmanNWZXJzaW9uID0gZ2V0VmVyc2lvblN1ZmZpeChwZGZEZWZhdWx0T3B0aW9ucy5hc3NldHNGb2xkZXIpO1xyXG4gICAgfSkoKTtcclxuICB9XHJcbn1cclxuIl19