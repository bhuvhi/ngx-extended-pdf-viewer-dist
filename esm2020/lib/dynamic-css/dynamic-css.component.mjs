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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9keW5hbWljLWNzcy9keW5hbWljLWNzcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBZ0MsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQU9qRSxNQUFNLE9BQU8sbUJBQW1CO0lBMEw5QixZQUFvQixRQUFtQixFQUE0QixRQUFrQixFQUErQixVQUFVO1FBQTFHLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBNEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUErQixlQUFVLEdBQVYsVUFBVSxDQUFBO1FBeEx2SCxTQUFJLEdBQUcsR0FBRyxDQUFDO1FBR1gsVUFBSyxHQUFHLGFBQWEsQ0FBQztRQUV0QixRQUFHLEdBQUcsR0FBRyxDQUFDO1FBRVYsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBRVQsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxRQUFHLEdBQUcsR0FBRyxDQUFDO1FBd0tmLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDeEM7SUFD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LHdCQUFzQyxXQUFXO3FHQTFML0YsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxpQkFBaUI7OERBOExrRCxRQUFRO3NCQUEzQyxNQUFNO3VCQUFDLFFBQVE7O3NCQUErQixNQUFNO3VCQUFDLFdBQVc7d0JBeExuRyxJQUFJO2tCQURWLEtBQUs7WUFJQyxLQUFLO2tCQURYLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBQTEFURk9STV9JRCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZGZCcmVha3BvaW50cyB9IGZyb20gJy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XG5pbXBvcnQgeyBhZGRUcnVzdGVkSFRNTCB9IGZyb20gJy4uL3RoZW1lL3Nhbml0aXplZC1jc3MtaW5qZWN0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtZHluYW1pYy1jc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1jc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLWNzcy5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgcHVibGljIHpvb20gPSAxLjA7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHdpZHRoID0gMy4xNDE1OTI2NTM1OTtcblxuICBwdWJsaWMgeHhzID0gNDU1O1xuXG4gIHB1YmxpYyB4cyA9IDQ5MDtcblxuICBwdWJsaWMgc20gPSA1NjA7XG5cbiAgcHVibGljIG1kID0gNjEwO1xuXG4gIHB1YmxpYyBsZyA9IDY2MDtcblxuICBwdWJsaWMgeGwgPSA3NDA7XG5cbiAgcHVibGljIHh4bCA9IDgzMDtcblxuICBwdWJsaWMgZ2V0IHN0eWxlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiN0b29sYmFyQ29udGFpbmVyIC5hbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2Vjb25kYXJ5VG9vbGJhciAuYWx3YXlzLWluLXNlY29uZGFyeS1tZW51IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbiNvdXRlckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAudmlzaWJsZVhYU1ZpZXcsXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVUaW55VmlldyxcbiNvdXRlckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAudmlzaWJsZVNtYWxsVmlldyxcbiNvdXRlckNvbnRhaW5lciAjbWFpbkNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcsXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVYTFZpZXcsXG4jb3V0ZXJDb250YWluZXIgI21haW5Db250YWluZXIgLnZpc2libGVYWExWaWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhsfXB4KSB7XG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnh4bH0pIHtcbiAgI3NpZGViYXJDb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cblxuICBodG1sW2Rpcj0nbHRyJ10gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIGh0bWxbZGlyPSdydGwnXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcsXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMubGd9cHgpIHtcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xuICAgIHdpZHRoOiAxNXB4O1xuICB9XG5cbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI291dGVyQ29udGFpbmVyICAjbWFpbkNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMubWR9cHgpIHtcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNvdXRlckNvbnRhaW5lciAgI21haW5Db250YWluZXIgLnZpc2libGVNZWRpdW1WaWV3IHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy5zbX1weCkge1xuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblNtYWxsVmlldyxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5TbWFsbFZpZXcgKiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjb3V0ZXJDb250YWluZXIgICNtYWluQ29udGFpbmVyIC52aXNpYmxlU21hbGxWaWV3IHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xuICB9XG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICBodG1sW2Rpcj0nbHRyJ10gLmZpbmRiYXIge1xuICAgIGxlZnQ6IDM4cHg7XG4gIH1cbiAgaHRtbFtkaXI9J3J0bCddIC5maW5kYmFyIHtcbiAgICByaWdodDogMzhweDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMuc219cHgpIHtcbiAgI3NjYWxlU2VsZWN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbiNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhMVmlldyxcbiNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhYTFZpZXcsXG4jb3V0ZXJDb250YWluZXIgLnZpc2libGVUaW55VmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNvdXRlckNvbnRhaW5lciAuaGlkZGVuWExWaWV3LFxuI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWExWaWV3IHtcbiAgZGlzcGxheTogdW5zZXQ7XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54bH1weCkge1xuICAjb3V0ZXJDb250YWluZXIgLmhpZGRlblhMVmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVYTFZpZXcge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH1cblxuICAjdG9vbGJhclZpZXdlck1pZGRsZSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM2JSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNiUpO1xuICAgIGRpc3BsYXk6IHVuc2V0O1xuICAgIG1hcmdpbjogdW5zZXQ7XG4gICAgbGVmdDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHhsfXB4KSB7XG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuWFhMVmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAjb3V0ZXJDb250YWluZXIgICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhMVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMubWR9cHgpIHtcbiAgI3Rvb2xiYXJWaWV3ZXJNaWRkbGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNiUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjYlKTtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHN9cHgpIHtcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5UaW55VmlldyxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5UaW55VmlldyAqIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNvdXRlckNvbnRhaW5lciAgI21haW5Db250YWluZXIgLnZpc2libGVUaW55VmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMueHhzfXB4KSB7XG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuWFhTVmlldyxcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWFNWaWV3ICoge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI291dGVyQ29udGFpbmVyICNtYWluQ29udGFpbmVyIC52aXNpYmxlWFhTVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudCwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluamVjdFN0eWxlKCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoKSB7XG4gICAgY29uc3QgZnVsbFdpdGggPSB0aGlzLmRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgcGFydGlhbFZpZXdTY2FsZSA9IGZ1bGxXaXRoIC8gdGhpcy53aWR0aDtcbiAgICBjb25zdCBzY2FsZUZhY3RvciA9IHBhcnRpYWxWaWV3U2NhbGUgKiAodGhpcy56b29tID8gdGhpcy56b29tIDogMSk7XG5cbiAgICB0aGlzLnhzID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy54cztcbiAgICB0aGlzLnNtID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy5zbTtcbiAgICB0aGlzLm1kID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy5tZDtcbiAgICB0aGlzLmxnID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy5sZztcbiAgICB0aGlzLnhsID0gc2NhbGVGYWN0b3IgKiBQZGZCcmVha3BvaW50cy54bDtcbiAgICB0aGlzLnh4bCA9IHNjYWxlRmFjdG9yICogUGRmQnJlYWtwb2ludHMueHhsO1xuXG4gICAgbGV0IHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZi1keW5hbWljLWNzcycpIGFzIEhUTUxTdHlsZUVsZW1lbnQ7XG4gICAgaWYgKCFzdHlsZXMpIHtcbiAgICAgIHN0eWxlcyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1RZTEUnKSBhcyBIVE1MU3R5bGVFbGVtZW50O1xuICAgICAgc3R5bGVzLmlkID0gJ3BkZi1keW5hbWljLWNzcyc7XG4gICAgICBhZGRUcnVzdGVkSFRNTChzdHlsZXMsIHRoaXMuc3R5bGUpO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc3R5bGVzKTtcbiAgICB9XG4gICAgYWRkVHJ1c3RlZEhUTUwoc3R5bGVzLCB0aGlzLnN0eWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgaW5qZWN0U3R5bGUoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggPT09IDMuMTQxNTkyNjUzNTkpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5uZ09uQ2hhbmdlcygpLCAxKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWR5bmFtaWMtY3NzJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKHN0eWxlcz8ucGFyZW50RWxlbWVudCkge1xuICAgICAgKHN0eWxlcy5wYXJlbnRFbGVtZW50IGFzIGFueSkucmVtb3ZlQ2hpbGQoc3R5bGVzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==