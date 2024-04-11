import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfCspPolicyService {
    sanitizer = undefined; // TrustedTypePolicy;
    constructor() {
        if (typeof window === 'undefined') {
            // server-side rendering
            return;
        }
        const ttWindow = globalThis;
        if (ttWindow.trustedTypes) {
            this.sanitizer = ttWindow.trustedTypes.createPolicy('pdf-viewer', {
                createHTML: (input) => input,
                createScriptURL: (input) => input,
            });
        }
        globalThis.pdfViewerSanitizer = this.sanitizer;
    }
    addTrustedCSS(styles, css) {
        if (typeof window === 'undefined') {
            // server-side rendering
            return;
        }
        if (this.sanitizer) {
            styles.textContent = this.sanitizer.createHTML(css);
        }
        else {
            styles.textContent = css;
        }
    }
    addTrustedJavaScript(scripts, css) {
        if (typeof window === 'undefined') {
            // server-side rendering
            return;
        }
        if (this.sanitizer) {
            scripts.src = this.sanitizer.createScriptURL(css);
        }
        else {
            scripts.src = css;
        }
    }
    /** @nocollapse */ static ɵfac = function PdfCspPolicyService_Factory(t) { return new (t || PdfCspPolicyService)(); };
    /** @nocollapse */ static ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PdfCspPolicyService, factory: PdfCspPolicyService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfCspPolicyService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWNzcC1wb2xpY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWNzcC1wb2xpY3kuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8sbUJBQW1CO0lBQ3RCLFNBQVMsR0FBUSxTQUFTLENBQUMsQ0FBQyxxQkFBcUI7SUFFekQ7UUFDRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyx3QkFBd0I7WUFDeEIsT0FBTztTQUNSO1FBQ0QsTUFBTSxRQUFRLEdBQUcsVUFBMkMsQ0FBQztRQUM3RCxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hFLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSztnQkFDNUIsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLO2FBQ2xDLENBQUMsQ0FBQztTQUNKO1FBQ0EsVUFBa0IsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFELENBQUM7SUFFTSxhQUFhLENBQUMsTUFBbUIsRUFBRSxHQUFXO1FBQ25ELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1lBQ2pDLHdCQUF3QjtZQUN4QixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQW1CLENBQUM7U0FDdkU7YUFBTTtZQUNMLE1BQU0sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVNLG9CQUFvQixDQUFDLE9BQTBCLEVBQUUsR0FBVztRQUNqRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtZQUNqQyx3QkFBd0I7WUFDeEIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFtQixDQUFDO1NBQ3JFO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtJQUNILENBQUM7Z0dBeENVLG1CQUFtQjsrRkFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTs7aUZBRVAsbUJBQW1CO2NBSC9CLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJ1c3RlZFR5cGVzV2luZG93IH0gZnJvbSAndHJ1c3RlZC10eXBlcy9saWInO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZkNzcFBvbGljeVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc2FuaXRpemVyOiBhbnkgPSB1bmRlZmluZWQ7IC8vIFRydXN0ZWRUeXBlUG9saWN5O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAvLyBzZXJ2ZXItc2lkZSByZW5kZXJpbmdcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdHRXaW5kb3cgPSBnbG9iYWxUaGlzIGFzIHVua25vd24gYXMgVHJ1c3RlZFR5cGVzV2luZG93O1xyXG4gICAgaWYgKHR0V2luZG93LnRydXN0ZWRUeXBlcykge1xyXG4gICAgICB0aGlzLnNhbml0aXplciA9IHR0V2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3koJ3BkZi12aWV3ZXInLCB7XHJcbiAgICAgICAgY3JlYXRlSFRNTDogKGlucHV0KSA9PiBpbnB1dCxcclxuICAgICAgICBjcmVhdGVTY3JpcHRVUkw6IChpbnB1dCkgPT4gaW5wdXQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgKGdsb2JhbFRoaXMgYXMgYW55KS5wZGZWaWV3ZXJTYW5pdGl6ZXIgPSB0aGlzLnNhbml0aXplcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRUcnVzdGVkQ1NTKHN0eWxlczogSFRNTEVsZW1lbnQsIGNzczogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNhbml0aXplcikge1xyXG4gICAgICBzdHlsZXMudGV4dENvbnRlbnQgPSB0aGlzLnNhbml0aXplci5jcmVhdGVIVE1MKGNzcykgYXMgdW5rbm93biBhcyBhbnk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdHlsZXMudGV4dENvbnRlbnQgPSBjc3M7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkVHJ1c3RlZEphdmFTY3JpcHQoc2NyaXB0czogSFRNTFNjcmlwdEVsZW1lbnQsIGNzczogc3RyaW5nKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNhbml0aXplcikge1xyXG4gICAgICBzY3JpcHRzLnNyYyA9IHRoaXMuc2FuaXRpemVyLmNyZWF0ZVNjcmlwdFVSTChjc3MpIGFzIHVua25vd24gYXMgYW55O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2NyaXB0cy5zcmMgPSBjc3M7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==