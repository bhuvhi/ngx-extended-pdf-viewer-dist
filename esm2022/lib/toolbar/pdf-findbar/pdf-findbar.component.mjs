import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-findbar-message-container/pdf-findbar-message-container.component";
import * as i3 from "./pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component";
import * as i4 from "./pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component";
import * as i5 from "./pdf-find-input-area/pdf-find-input-area.component";
import * as i6 from "./pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component";
import * as i7 from "./pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component";
import * as i8 from "./pdf-findbar-options-two-container/pdf-match-diacritics/pdf-match-diacritics.component";
function PdfFindbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementContainer(1, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const defaultFindbarButtons_r2 = i0.ɵɵreference(4);
    i0.ɵɵstyleProp("transform", "scale(" + ctx_r0.mobileFriendlyZoomScale + ")")("transform-origin", "left top")("left", ctx_r0.findbarLeft)("top", ctx_r0.findbarTop);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.customFindbarButtons ? ctx_r0.customFindbarButtons : defaultFindbarButtons_r2);
} }
function PdfFindbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-find-input-area", 4)(1, "pdf-find-highlight-all")(2, "pdf-find-match-case")(3, "pdf-match-diacritics")(4, "pdf-find-entire-word")(5, "pdf-find-results-count")(6, "pdf-findbar-message-container");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customFindbarInputArea", ctx_r0.customFindbarInputArea);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", !ctx_r0.showFindHighlightAll);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", !ctx_r0.showFindMatchCase);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", !ctx_r0.showFindMatchDiacritics);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", !ctx_r0.showFindEntireWord);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", !ctx_r0.showFindResultsCount);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("hidden", !ctx_r0.showFindMessages);
} }
export class PdfFindbarComponent {
    showFindButton = true;
    mobileFriendlyZoomScale;
    findbarLeft;
    findbarTop;
    /* UI templates */
    customFindbarInputArea;
    customFindbar;
    customFindbarButtons;
    showFindHighlightAll = true;
    showFindMatchCase = true;
    showFindCurrentPageOnly = true;
    showFindPageRange = true;
    showFindEntireWord = true;
    showFindEntirePhrase = true;
    showFindMatchDiacritics = true;
    showFindFuzzySearch = true;
    showFindResultsCount = true;
    showFindMessages = true;
    /** @nocollapse */ static ɵfac = function PdfFindbarComponent_Factory(t) { return new (t || PdfFindbarComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindbarComponent, selectors: [["pdf-findbar"]], inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages" }, decls: 5, vars: 1, consts: [["defaultFindbar", ""], ["defaultFindbarButtons", ""], [3, "ngTemplateOutlet"], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]], template: function PdfFindbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainer(0, 2);
            i0.ɵɵtemplate(1, PdfFindbarComponent_ng_template_1_Template, 2, 9, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, PdfFindbarComponent_ng_template_3_Template, 7, 13, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const defaultFindbar_r3 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngTemplateOutlet", ctx.customFindbar ? ctx.customFindbar : defaultFindbar_r3);
        } }, dependencies: [i1.NgTemplateOutlet, i2.PdfFindbarMessageContainerComponent, i3.PdfFindEntireWordComponent, i4.PdfFindHighlightAllComponent, i5.PdfFindInputAreaComponent, i6.PdfFindMatchCaseComponent, i7.PdfFindResultsCountComponent, i8.PdfMatchDiacriticsComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-findbar', template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\"> </ng-container>\r\n\r\n<ng-template #defaultFindbar>\r\n  <div\r\n    class=\"findbar hidden doorHanger\"\r\n    id=\"findbar\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'left top'\"\r\n    [style.left]=\"findbarLeft\"\r\n    [style.top]=\"findbarTop\"\r\n  >\r\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFindbarButtons>\r\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\r\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\r\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\r\n  <pdf-match-diacritics [class.hidden]=\"!showFindMatchDiacritics\"></pdf-match-diacritics>\r\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\r\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\r\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\r\n</ng-template>\r\n" }]
    }], null, { showFindButton: [{
            type: Input
        }], mobileFriendlyZoomScale: [{
            type: Input
        }], findbarLeft: [{
            type: Input
        }], findbarTop: [{
            type: Input
        }], customFindbarInputArea: [{
            type: Input
        }], customFindbar: [{
            type: Input
        }], customFindbarButtons: [{
            type: Input
        }], showFindHighlightAll: [{
            type: Input
        }], showFindMatchCase: [{
            type: Input
        }], showFindCurrentPageOnly: [{
            type: Input
        }], showFindPageRange: [{
            type: Input
        }], showFindEntireWord: [{
            type: Input
        }], showFindEntirePhrase: [{
            type: Input
        }], showFindMatchDiacritics: [{
            type: Input
        }], showFindFuzzySearch: [{
            type: Input
        }], showFindResultsCount: [{
            type: Input
        }], showFindMessages: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfFindbarComponent, { className: "PdfFindbarComponent", filePath: "lib\\toolbar\\pdf-findbar\\pdf-findbar.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDRzVELDhCQU9DO0lBQ0MsMkJBQXVIO0lBQ3pILGlCQUFNOzs7O0lBSEosQUFEQSxBQURBLEFBREEsNEVBQTRELGdDQUN4Qiw0QkFDViwwQkFDRjtJQUVWLGNBQXdGO0lBQXhGLHVIQUF3Rjs7O0lBV3hHLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLHlDQUE2Riw2QkFDTCwwQkFDVCwyQkFDUSwyQkFDTCw2QkFDTSxvQ0FDVTs7O0lBTjdFLHNFQUFpRDtJQUM5QyxjQUFzQztJQUF0QyxzREFBc0M7SUFDekMsY0FBbUM7SUFBbkMsbURBQW1DO0lBQ2xDLGNBQXlDO0lBQXpDLHlEQUF5QztJQUN6QyxjQUFvQztJQUFwQyxvREFBb0M7SUFDbEMsY0FBc0M7SUFBdEMsc0RBQXNDO0lBQy9CLGNBQWtDO0lBQWxDLGtEQUFrQzs7QURkbkUsTUFBTSxPQUFPLG1CQUFtQjtJQUV2QixjQUFjLEdBQXlCLElBQUksQ0FBQztJQUc1Qyx1QkFBdUIsQ0FBUztJQUdoQyxXQUFXLENBQXFCO0lBR2hDLFVBQVUsQ0FBcUI7SUFFdEMsa0JBQWtCO0lBRVgsc0JBQXNCLENBQStCO0lBR3JELGFBQWEsQ0FBbUI7SUFHaEMsb0JBQW9CLENBQStCO0lBR25ELG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUc1QixpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFHekIsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBRy9CLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUd6QixrQkFBa0IsR0FBRyxJQUFJLENBQUM7SUFHMUIsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBRzVCLHVCQUF1QixHQUFHLElBQUksQ0FBQztJQUcvQixtQkFBbUIsR0FBRyxJQUFJLENBQUM7SUFHM0Isb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBRzVCLGdCQUFnQixHQUFHLElBQUksQ0FBQztnR0FuRHBCLG1CQUFtQjs0RkFBbkIsbUJBQW1CO1lDUmhDLDJCQUFrRztZQWVsRyxBQWJBLHFIQUE2Qix5R0FhTzs7O1lBZnRCLDRGQUFtRTs7O2lGRFFwRSxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxhQUFhO2dCQU1oQixjQUFjO2tCQURwQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsV0FBVztrQkFEakIsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFLQyxzQkFBc0I7a0JBRDVCLEtBQUs7WUFJQyxhQUFhO2tCQURuQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsbUJBQW1CO2tCQUR6QixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsZ0JBQWdCO2tCQUR0QixLQUFLOztrRkFsREssbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZmluZGJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1maW5kYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmluZGJhci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZGaW5kYmFyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEhpZ2hsaWdodEFsbCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWF0Y2hDYXNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRDdXJyZW50UGFnZU9ubHkgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZFBhZ2VSYW5nZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRW50aXJlV29yZCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kRW50aXJlUGhyYXNlID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaERpYWNyaXRpY3MgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEZ1enp5U2VhcmNoID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRSZXN1bHRzQ291bnQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1lc3NhZ2VzID0gdHJ1ZTtcclxufVxyXG4iLCI8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUZpbmRiYXIgPyBjdXN0b21GaW5kYmFyIDogZGVmYXVsdEZpbmRiYXJcIj4gPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGaW5kYmFyPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwiZmluZGJhciBoaWRkZW4gZG9vckhhbmdlclwiXHJcbiAgICBpZD1cImZpbmRiYXJcIlxyXG4gICAgW3N0eWxlLnRyYW5zZm9ybV09XCInc2NhbGUoJyArIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlICsgJyknXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1PcmlnaW5dPVwiJ2xlZnQgdG9wJ1wiXHJcbiAgICBbc3R5bGUubGVmdF09XCJmaW5kYmFyTGVmdFwiXHJcbiAgICBbc3R5bGUudG9wXT1cImZpbmRiYXJUb3BcIlxyXG4gID5cclxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tRmluZGJhckJ1dHRvbnMgPyBjdXN0b21GaW5kYmFyQnV0dG9ucyA6IGRlZmF1bHRGaW5kYmFyQnV0dG9uc1wiPiA8L25nLWNvbnRhaW5lcj5cclxuICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZpbmRiYXJCdXR0b25zPlxyXG4gIDxwZGYtZmluZC1pbnB1dC1hcmVhIFtjdXN0b21GaW5kYmFySW5wdXRBcmVhXT1cImN1c3RvbUZpbmRiYXJJbnB1dEFyZWFcIj48L3BkZi1maW5kLWlucHV0LWFyZWE+XHJcbiAgPHBkZi1maW5kLWhpZ2hsaWdodC1hbGwgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRIaWdobGlnaHRBbGxcIj48L3BkZi1maW5kLWhpZ2hsaWdodC1hbGw+XHJcbiAgPHBkZi1maW5kLW1hdGNoLWNhc2UgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRNYXRjaENhc2VcIj48L3BkZi1maW5kLW1hdGNoLWNhc2U+XHJcbiAgPHBkZi1tYXRjaC1kaWFjcml0aWNzIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kTWF0Y2hEaWFjcml0aWNzXCI+PC9wZGYtbWF0Y2gtZGlhY3JpdGljcz5cclxuICA8cGRmLWZpbmQtZW50aXJlLXdvcmQgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRFbnRpcmVXb3JkXCI+PC9wZGYtZmluZC1lbnRpcmUtd29yZD5cclxuICA8cGRmLWZpbmQtcmVzdWx0cy1jb3VudCBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZFJlc3VsdHNDb3VudFwiPjwvcGRmLWZpbmQtcmVzdWx0cy1jb3VudD5cclxuICA8cGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRNZXNzYWdlc1wiPjwvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==