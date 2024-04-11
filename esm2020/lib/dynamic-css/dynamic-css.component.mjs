import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, Renderer2 } from '@angular/core';
import { PdfBreakpoints } from '../responsive-visibility';
import { addTrustedHTML } from '../theme/sanitized-css-injector';
import * as i0 from "@angular/core";
export class DynamicCssComponent {
    constructor(renderer, document, platformId) {
        this.renderer = renderer;
        this.document = document;
        this.platformId = platformId;
        this.zoom = 1.0;
        this.width = 3.14159265359;
        this.xxs = 455;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
        if (isPlatformBrowser(this.platformId)) {
            this.width = document.body.clientWidth;
        }
    }
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
            addTrustedHTML(styles, this.style);
            this.renderer.appendChild(this.document.head, styles);
        }
        addTrustedHTML(styles, this.style);
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
}
/** @nocollapse */ DynamicCssComponent.ɵfac = function DynamicCssComponent_Factory(t) { return new (t || DynamicCssComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(PLATFORM_ID)); };
/** @nocollapse */ DynamicCssComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: DynamicCssComponent, selectors: [["pdf-dynamic-css"]], inputs: { zoom: "zoom", width: "width" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function DynamicCssComponent_Template(rf, ctx) { }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicCssComponent, [{
        type: Component,
        args: [{ selector: 'pdf-dynamic-css', template: "", styles: [""] }]
    }], function () { return [{ type: i0.Renderer2 }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, { zoom: [{
            type: Input
        }], width: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9keW5hbWljLWNzcy9keW5hbWljLWNzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBZ0MsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU9qRSxNQUFNLE9BQU8sbUJBQW1CO0lBMEw5QixZQUFvQixRQUFtQixFQUE0QixRQUFrQixFQUErQixVQUFVO1FBQTFHLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUErQixlQUFVLEdBQVYsVUFBVSxDQUFBO1FBeEx2SCxTQUFJLEdBQUcsR0FBRyxDQUFDO1FBR1gsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUV0QixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBRVYsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBRVQsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxRQUFHLEdBQUcsR0FBRyxDQUFDO1FBd0tmLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7SUFD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LHdCQUFzQyxXQUFXO3FHQTFML0YsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxpQkFBaUI7OERBOExrRCxRQUFRO3NCQUEzQyxNQUFNO3VCQUFDLFFBQVE7O3NCQUErQixNQUFNO3VCQUFDLFdBQVc7d0JBeExuRyxJQUFJO2tCQURWLEtBQUs7WUFJQyxLQUFLO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFBMQVRGT1JNX0lELCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGRmQnJlYWtwb2ludHMgfSBmcm9tICcuLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5pbXBvcnQgeyBhZGRUcnVzdGVkSFRNTCB9IGZyb20gJy4uL3RoZW1lL3Nhbml0aXplZC1jc3MtaW5qZWN0b3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZHluYW1pYy1jc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWNzcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1jc3MuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY0Nzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHpvb20gPSAxLjA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHdpZHRoID0gMy4xNDE1OTI2NTM1OTtcclxuXHJcbiAgcHVibGljIHh4cyA9IDQ1NTtcclxuXHJcbiAgcHVibGljIHhzID0gNDkwO1xyXG5cclxuICBwdWJsaWMgc20gPSA1NjA7XHJcblxyXG4gIHB1YmxpYyBtZCA9IDYxMDtcclxuXHJcbiAgcHVibGljIGxnID0gNjYwO1xyXG5cclxuICBwdWJsaWMgeGwgPSA3NDA7XHJcblxyXG4gIHB1YmxpYyB4eGwgPSA4MzA7XHJcblxyXG4gIHB1YmxpYyBnZXQgc3R5bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgXHJcbiN0b29sYmFyQ29udGFpbmVyIC5hbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNzZWNvbmRhcnlUb29sYmFyIC5hbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVYWFNWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVUaW55VmlldyxcclxuI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlU21hbGxWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXHJcbiNvdXRlckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAudmlzaWJsZVhMVmlldyxcclxuI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhsfXB4KSB7XHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHhsfSkge1xyXG4gICNzaWRlYmFyQ29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgfVxyXG5cclxuICBodG1sW2Rpcj0nbHRyJ10gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xyXG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPSdydGwnXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XHJcbiAgICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbkxhcmdlVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlbk1lZGl1bVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5sZ31weCkge1xyXG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyICAjbWFpbkNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAgI21haW5Db250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuc219cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyxcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyAqIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gICNvdXRlckNvbnRhaW5lciAgI21haW5Db250YWluZXIgLnZpc2libGVTbWFsbFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgfVxyXG4gIGh0bWxbZGlyPSdsdHInXSAuZmluZGJhciB7XHJcbiAgICBsZWZ0OiAzOHB4O1xyXG4gIH1cclxuICBodG1sW2Rpcj0ncnRsJ10gLmZpbmRiYXIge1xyXG4gICAgcmlnaHQ6IDM4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuc219cHgpIHtcclxuICAjc2NhbGVTZWxlY3RDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhMVmlldyxcclxuI291dGVyQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyxcclxuI291dGVyQ29udGFpbmVyIC52aXNpYmxlVGlueVZpZXcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNvdXRlckNvbnRhaW5lciAuaGlkZGVuWExWaWV3LFxyXG4jb3V0ZXJDb250YWluZXIgLmhpZGRlblhYTFZpZXcge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueGx9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVYTFZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcblxyXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNiUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNiUpO1xyXG4gICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICBtYXJnaW46IHVuc2V0O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnh4bH1weCkge1xyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuWFhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XHJcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHN9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblRpbnlWaWV3LFxyXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuVGlueVZpZXcgKiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAjb3V0ZXJDb250YWluZXIgICNtYWluQ29udGFpbmVyIC52aXNpYmxlVGlueVZpZXcge1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54eHN9cHgpIHtcclxuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblhYU1ZpZXcsXHJcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWFNWaWV3ICoge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhTVmlldyB7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG4gIH1cclxufVxyXG4gIGA7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50LCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQpIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbmplY3RTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgY29uc3QgZnVsbFdpdGggPSB0aGlzLmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBwYXJ0aWFsVmlld1NjYWxlID0gZnVsbFdpdGggLyB0aGlzLndpZHRoO1xyXG4gICAgY29uc3Qgc2NhbGVGYWN0b3IgPSBwYXJ0aWFsVmlld1NjYWxlICogKHRoaXMuem9vbSA/IHRoaXMuem9vbSA6IDEpO1xyXG5cclxuICAgIHRoaXMueHMgPSBzY2FsZUZhY3RvciAqIFBkZkJyZWFrcG9pbnRzLnhzO1xyXG4gICAgdGhpcy5zbSA9IHNjYWxlRmFjdG9yICogUGRmQnJlYWtwb2ludHMuc207XHJcbiAgICB0aGlzLm1kID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy5tZDtcclxuICAgIHRoaXMubGcgPSBzY2FsZUZhY3RvciAqIFBkZkJyZWFrcG9pbnRzLmxnO1xyXG4gICAgdGhpcy54bCA9IHNjYWxlRmFjdG9yICogUGRmQnJlYWtwb2ludHMueGw7XHJcbiAgICB0aGlzLnh4bCA9IHNjYWxlRmFjdG9yICogUGRmQnJlYWtwb2ludHMueHhsO1xyXG5cclxuICAgIGxldCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtZHluYW1pYy1jc3MnKSBhcyBIVE1MU3R5bGVFbGVtZW50O1xyXG4gICAgaWYgKCFzdHlsZXMpIHtcclxuICAgICAgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFlMRScpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XHJcbiAgICAgIHN0eWxlcy5pZCA9ICdwZGYtZHluYW1pYy1jc3MnO1xyXG4gICAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIHRoaXMuc3R5bGUpO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmhlYWQsIHN0eWxlcyk7XHJcbiAgICB9XHJcbiAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIHRoaXMuc3R5bGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbmplY3RTdHlsZSgpIHtcclxuICAgIGlmICh0aGlzLndpZHRoID09PSAzLjE0MTU5MjY1MzU5KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ09uQ2hhbmdlcygpLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1keW5hbWljLWNzcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHN0eWxlcz8ucGFyZW50RWxlbWVudCkge1xyXG4gICAgICAoc3R5bGVzLnBhcmVudEVsZW1lbnQgYXMgYW55KS5yZW1vdmVDaGlsZChzdHlsZXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=