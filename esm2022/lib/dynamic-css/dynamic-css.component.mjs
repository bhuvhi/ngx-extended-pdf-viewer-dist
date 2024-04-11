import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { CSP_NONCE, Component, Inject, Input, Optional, PLATFORM_ID, Renderer2 } from '@angular/core';
import { PdfCspPolicyService } from '../pdf-csp-policy.service';
import { PdfBreakpoints } from '../responsive-visibility';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-csp-policy.service";
export class DynamicCssComponent {
    renderer;
    document;
    platformId;
    pdfCspPolicyService;
    nonce;
    zoom = 1.0;
    width = 3.14159265359;
    xxs = 455;
    xs = 490;
    sm = 560;
    md = 610;
    lg = 660;
    xl = 740;
    xxl = 830;
    get style() {
        return `
#toolbarContainer .always-in-secondary-menu {
  display: none;
}

#secondaryToolbar .always-in-secondary-menu {
  display: inline-flex;
}

#outerContainer #mainContainer .visibleXXSView,
#outerContainer #mainContainer .visibleTinyView,
#outerContainer #mainContainer .visibleSmallView,
#outerContainer #mainContainer .visibleMediumView,
#outerContainer #mainContainer .visibleLargeView,
#outerContainer #mainContainer .visibleXLView,
#outerContainer #mainContainer .visibleXXLView {
  display: none;
}

.pdf-margin-top-3px {
  margin-top: 3px;
}

.pdf-margin-top--2px {
  margin-top: -2px;
}

@media all and (max-width: ${this.xl}px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: ${this.xxl}) {
  #sidebarContent {
    background-color: rgba(0, 0, 0, 0.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {
    left: 0px !important;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {
    right: 0px !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.lg}px) {
  .toolbarButtonSpacer {
    width: 15px;
  }

  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  .toolbarButtonSpacer {
    display: none;
  }
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.sm}px) {
  #outerContainer .hiddenSmallView,
  #outerContainer .hiddenSmallView * {
    display: none;
  }
  #outerContainer  #mainContainer .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir='ltr'] .findbar {
    left: 38px;
  }
  html[dir='rtl'] .findbar {
    right: 38px;
  }
}

@media all and (max-width: ${this.sm}px) {
  #scaleSelectContainer {
    display: none;
  }
}

#outerContainer .visibleXLView,
#outerContainer .visibleXXLView,
#outerContainer .visibleTinyView {
  display: none;
}

#outerContainer .hiddenXLView,
#outerContainer .hiddenXXLView {
  display: unset;
}

@media all and (max-width: ${this.xl}px) {
  #outerContainer .hiddenXLView {
    display: none;
  }
  #outerContainer .visibleXLView {
    display: inherit;
  }

  #toolbarViewerMiddle {
    -webkit-transform: translateX(-36%);
    transform: translateX(-36%);
    display: unset;
    margin: unset;
    left: 50%;
    position: absolute;
  }
}

@media all and (max-width: ${this.xxl}px) {
  #outerContainer .hiddenXXLView {
    display: none;
  }
  #outerContainer  #mainContainer .visibleXXLView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  #toolbarViewerMiddle {
    -webkit-transform: translateX(-26%);
    transform: translateX(-26%);
  }
}

@media all and (max-width: ${this.xs}px) {
  #outerContainer .hiddenTinyView,
  #outerContainer .hiddenTinyView * {
    display: none;
  }
  #outerContainer  #mainContainer .visibleTinyView {
    display: inherit;
  }
}

@media all and (max-width: ${this.xxs}px) {
  #outerContainer .hiddenXXSView,
  #outerContainer .hiddenXXSView * {
    display: none;
  }
  #outerContainer #mainContainer .visibleXXSView {
    display: inherit;
  }
}
  `;
    }
    constructor(renderer, document, platformId, pdfCspPolicyService, nonce) {
        this.renderer = renderer;
        this.document = document;
        this.platformId = platformId;
        this.pdfCspPolicyService = pdfCspPolicyService;
        this.nonce = nonce;
        if (isPlatformBrowser(this.platformId)) {
            this.width = document.body.clientWidth;
        }
    }
    ngOnInit() {
        this.injectStyle();
    }
    ngOnChanges() {
        const fullWith = this.document.body.clientWidth;
        const partialViewScale = fullWith / this.width;
        const scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * PdfBreakpoints.xs;
        this.sm = scaleFactor * PdfBreakpoints.sm;
        this.md = scaleFactor * PdfBreakpoints.md;
        this.lg = scaleFactor * PdfBreakpoints.lg;
        this.xl = scaleFactor * PdfBreakpoints.xl;
        this.xxl = scaleFactor * PdfBreakpoints.xxl;
        let styles = this.document.getElementById('pdf-dynamic-css');
        if (!styles) {
            styles = this.document.createElement('STYLE');
            styles.id = 'pdf-dynamic-css';
            this.pdfCspPolicyService.addTrustedCSS(styles, this.style);
            if (this.nonce) {
                styles.nonce = this.nonce;
            }
            this.renderer.appendChild(this.document.head, styles);
        }
        else {
            this.pdfCspPolicyService.addTrustedCSS(styles, this.style);
        }
    }
    injectStyle() {
        if (this.width === 3.14159265359) {
            setTimeout(() => this.ngOnChanges(), 1);
        }
    }
    ngOnDestroy() {
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles?.parentElement) {
            styles.parentElement.removeChild(styles);
        }
    }
    /** @nocollapse */ static ɵfac = function DynamicCssComponent_Factory(t) { return new (t || DynamicCssComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(PLATFORM_ID), i0.ɵɵdirectiveInject(i1.PdfCspPolicyService), i0.ɵɵdirectiveInject(CSP_NONCE, 8)); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: DynamicCssComponent, selectors: [["pdf-dynamic-css"]], inputs: { zoom: "zoom", width: "width" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function DynamicCssComponent_Template(rf, ctx) { } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicCssComponent, [{
        type: Component,
        args: [{ selector: 'pdf-dynamic-css', template: "" }]
    }], () => [{ type: i0.Renderer2 }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i1.PdfCspPolicyService }, { type: undefined, decorators: [{
                type: Inject,
                args: [CSP_NONCE]
            }, {
                type: Optional
            }] }], { zoom: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicCssComponent, { className: "DynamicCssComponent", filePath: "lib\\dynamic-css\\dynamic-css.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9keW5hbWljLWNzcy9keW5hbWljLWNzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQWdDLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBTzFELE1BQU0sT0FBTyxtQkFBbUI7SUFtTXBCO0lBQ2tCO0lBQ0c7SUFDckI7SUFDK0I7SUFyTWxDLElBQUksR0FBRyxHQUFHLENBQUM7SUFHWCxLQUFLLEdBQUcsYUFBYSxDQUFDO0lBRXRCLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFVixFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRVQsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUVULEVBQUUsR0FBRyxHQUFHLENBQUM7SUFFVCxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRVQsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUVULEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFakIsSUFBVyxLQUFLO1FBQ2QsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJCa0IsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7NkJBVVAsSUFBSSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFrQlIsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7NkJBYVAsSUFBSSxDQUFDLEVBQUU7Ozs7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LEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRU0sV0FBVztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FBQztRQUM5RSxJQUFJLE1BQU0sRUFBRSxhQUFhLEVBQUU7WUFDeEIsTUFBTSxDQUFDLGFBQXFCLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztnR0F6UFUsbUJBQW1CLDJEQW9NcEIsUUFBUSx3QkFDUixXQUFXLHNFQUVYLFNBQVM7NEZBdk1SLG1CQUFtQjs7aUZBQW5CLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLGlCQUFpQjs7c0JBd014QixNQUFNO3VCQUFDLFFBQVE7O3NCQUNmLE1BQU07dUJBQUMsV0FBVzs7c0JBRWxCLE1BQU07dUJBQUMsU0FBUzs7c0JBQUcsUUFBUTtxQkFyTXZCLElBQUk7a0JBRFYsS0FBSztZQUlDLEtBQUs7a0JBRFgsS0FBSzs7a0ZBSkssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ1NQX05PTkNFLCBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE9wdGlvbmFsLCBQTEFURk9STV9JRCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBkZkNzcFBvbGljeVNlcnZpY2UgfSBmcm9tICcuLi9wZGYtY3NwLXBvbGljeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGRmQnJlYWtwb2ludHMgfSBmcm9tICcuLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZHluYW1pYy1jc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWNzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1jc3MuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0Nzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb20gPSAxLjA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHdpZHRoID0gMy4xNDE1OTI2NTM1OTtcclxuXHJcbiAgcHVibGljIHh4cyA9IDQ1NTtcclxuXHJcbiAgcHVibGljIHhzID0gNDkwO1xyXG5cclxuICBwdWJsaWMgc20gPSA1NjA7XHJcblxyXG4gIHB1YmxpYyBtZCA9IDYxMDtcclxuXHJcbiAgcHVibGljIGxnID0gNjYwO1xyXG5cclxuICBwdWJsaWMgeGwgPSA3NDA7XHJcblxyXG4gIHB1YmxpYyB4eGwgPSA4MzA7XHJcblxyXG4gIHB1YmxpYyBnZXQgc3R5bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiN0b29sYmFyQ29udGFpbmVyIC5hbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlUb29sYmFyIC5hbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVYWFNWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVUaW55VmlldyxcclxuI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlU21hbGxWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXHJcbiNvdXRlckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAudmlzaWJsZVhMVmlldyxcclxuI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnBkZi1tYXJnaW4tdG9wLTNweCB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4ucGRmLW1hcmdpbi10b3AtLTJweCB7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhsfXB4KSB7XHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHhsfSkge1xyXG4gICNzaWRlYmFyQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG5cclxuICBodG1sW2Rpcj0nbHRyJ10gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPSdydGwnXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5sZ31weCkge1xyXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyICAjbWFpbkNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAgI21haW5Db250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuc219cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyAqIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAgI21haW5Db250YWluZXIgLnZpc2libGVTbWFsbFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPSdsdHInXSAuZmluZGJhciB7XHJcbiAgICBsZWZ0OiAzOHB4O1xyXG4gIH1cclxuICBodG1sW2Rpcj0ncnRsJ10gLmZpbmRiYXIge1xyXG4gICAgcmlnaHQ6IDM4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuc219cHgpIHtcclxuICAjc2NhbGVTZWxlY3RDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhMVmlldyxcclxuI291dGVyQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyxcclxuI291dGVyQ29udGFpbmVyIC52aXNpYmxlVGlueVZpZXcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lciAuaGlkZGVuWExWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgLmhpZGRlblhYTFZpZXcge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueGx9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVYTFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNiUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNiUpO1xyXG4gICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnh4bH1weCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuWFhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHN9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblRpbnlWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuVGlueVZpZXcgKiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgICNtYWluQ29udGFpbmVyIC52aXNpYmxlVGlueVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54eHN9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblhYU1ZpZXcsXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWFNWaWV3ICoge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhTVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG4gIGA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkLFxyXG4gICAgcHJpdmF0ZSBwZGZDc3BQb2xpY3lTZXJ2aWNlOiBQZGZDc3BQb2xpY3lTZXJ2aWNlLFxyXG4gICAgQEluamVjdChDU1BfTk9OQ0UpIEBPcHRpb25hbCgpIHByaXZhdGUgbm9uY2U/OiBzdHJpbmcgfCBudWxsXHJcbiAgKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xyXG4gICAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGNvbnN0IGZ1bGxXaXRoID0gdGhpcy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgcGFydGlhbFZpZXdTY2FsZSA9IGZ1bGxXaXRoIC8gdGhpcy53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlRmFjdG9yID0gcGFydGlhbFZpZXdTY2FsZSAqICh0aGlzLnpvb20gPyB0aGlzLnpvb20gOiAxKTtcclxuXHJcbiAgICB0aGlzLnhzID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy54cztcclxuICAgIHRoaXMuc20gPSBzY2FsZUZhY3RvciAqIFBkZkJyZWFrcG9pbnRzLnNtO1xyXG4gICAgdGhpcy5tZCA9IHNjYWxlRmFjdG9yICogUGRmQnJlYWtwb2ludHMubWQ7XHJcbiAgICB0aGlzLmxnID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy5sZztcclxuICAgIHRoaXMueGwgPSBzY2FsZUZhY3RvciAqIFBkZkJyZWFrcG9pbnRzLnhsO1xyXG4gICAgdGhpcy54eGwgPSBzY2FsZUZhY3RvciAqIFBkZkJyZWFrcG9pbnRzLnh4bDtcclxuXHJcbiAgICBsZXQgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWR5bmFtaWMtY3NzJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcclxuICAgIGlmICghc3R5bGVzKSB7XHJcbiAgICAgIHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1RZTEUnKSBhcyBIVE1MU3R5bGVFbGVtZW50O1xyXG4gICAgICBzdHlsZXMuaWQgPSAncGRmLWR5bmFtaWMtY3NzJztcclxuICAgICAgdGhpcy5wZGZDc3BQb2xpY3lTZXJ2aWNlLmFkZFRydXN0ZWRDU1Moc3R5bGVzLCB0aGlzLnN0eWxlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm5vbmNlKSB7XHJcbiAgICAgICAgc3R5bGVzLm5vbmNlID0gdGhpcy5ub25jZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmhlYWQsIHN0eWxlcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnBkZkNzcFBvbGljeVNlcnZpY2UuYWRkVHJ1c3RlZENTUyhzdHlsZXMsIHRoaXMuc3R5bGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmplY3RTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLndpZHRoID09PSAzLjE0MTU5MjY1MzU5KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ09uQ2hhbmdlcygpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1keW5hbWljLWNzcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHN0eWxlcz8ucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAoc3R5bGVzLnBhcmVudEVsZW1lbnQgYXMgYW55KS5yZW1vdmVDaGlsZChzdHlsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=