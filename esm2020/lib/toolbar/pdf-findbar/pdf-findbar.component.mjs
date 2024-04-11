import { Component, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./pdf-find-input-area/pdf-find-input-area.component";
import * as i3 from "./pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component";
import * as i4 from "./pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component";
import * as i5 from "./pdf-findbar-options-two-container/pdf-match-diacritics/pdf-match-diacritics.component";
import * as i6 from "./pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component";
import * as i7 from "./pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component";
import * as i8 from "./pdf-findbar-message-container/pdf-findbar-message-container.component";
function PdfFindbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementContainer(1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵstyleProp("transform", "scale(" + ctx_r1.mobileFriendlyZoomScale + ")")("transform-origin", "left top")("left", ctx_r1.findbarLeft)("top", ctx_r1.findbarTop);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customFindbarButtons ? ctx_r1.customFindbarButtons : _r2);
} }
function PdfFindbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "pdf-find-input-area", 4)(1, "pdf-find-highlight-all")(2, "pdf-find-match-case")(3, "pdf-match-diacritics")(4, "pdf-find-entire-word")(5, "pdf-find-results-count")(6, "pdf-findbar-message-container");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("customFindbarInputArea", ctx_r3.customFindbarInputArea);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindHighlightAll);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindMatchCase);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindMatchDiacritics);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindEntireWord);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindResultsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("hidden", !ctx_r3.showFindMessages);
} }
export class PdfFindbarComponent {
    constructor() {
        this.showFindButton = true;
        this.showFindHighlightAll = true;
        this.showFindMatchCase = true;
        this.showFindCurrentPageOnly = true;
        this.showFindPageRange = true;
        this.showFindEntireWord = true;
        this.showFindEntirePhrase = true;
        this.showFindMatchDiacritics = true;
        this.showFindFuzzySearch = true;
        this.showFindResultsCount = true;
        this.showFindMessages = true;
    }
}
/** @nocollapse */ PdfFindbarComponent.ɵfac = function PdfFindbarComponent_Factory(t) { return new (t || PdfFindbarComponent)(); };
/** @nocollapse */ PdfFindbarComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindbarComponent, selectors: [["pdf-findbar"]], inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages" }, decls: 5, vars: 1, consts: [[3, "ngTemplateOutlet"], ["defaultFindbar", ""], ["defaultFindbarButtons", ""], ["id", "findbar", 1, "findbar", "hidden", "doorHanger"], [3, "customFindbarInputArea"]], template: function PdfFindbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainer(0, 0);
        i0.ɵɵtemplate(1, PdfFindbarComponent_ng_template_1_Template, 2, 9, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PdfFindbarComponent_ng_template_3_Template, 7, 13, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customFindbar ? ctx.customFindbar : _r0);
    } }, directives: [i1.NgTemplateOutlet, i2.PdfFindInputAreaComponent, i3.PdfFindHighlightAllComponent, i4.PdfFindMatchCaseComponent, i5.PdfMatchDiacriticsComponent, i6.PdfFindEntireWordComponent, i7.PdfFindResultsCountComponent, i8.PdfFindbarMessageContainerComponent], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindbarComponent, [{
        type: Component,
        args: [{ selector: 'pdf-findbar', template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\"> </ng-container>\n\n<ng-template #defaultFindbar>\n  <div\n    class=\"findbar hidden doorHanger\"\n    id=\"findbar\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left top'\"\n    [style.left]=\"findbarLeft\"\n    [style.top]=\"findbarTop\"\n  >\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\n  </div>\n</ng-template>\n\n<ng-template #defaultFindbarButtons>\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\n  <pdf-match-diacritics [class.hidden]=\"!showFindMatchDiacritics\"></pdf-match-diacritics>\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\n</ng-template>\n", styles: [""] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDRzVELDhCQU9DO0lBQ0MsMkJBQXVIO0lBQ3pILGlCQUFNOzs7O0lBTkosNEVBQTRELGdDQUFBLDRCQUFBLDBCQUFBO0lBSzlDLGVBQXdGO0lBQXhGLGtHQUF3Rjs7O0lBS3hHLHlDQUE2Riw2QkFBQSwwQkFBQSwyQkFBQSwyQkFBQSw2QkFBQSxvQ0FBQTs7O0lBQXhFLHNFQUFpRDtJQUM5QyxlQUFzQztJQUF0QyxzREFBc0M7SUFDekMsZUFBbUM7SUFBbkMsbURBQW1DO0lBQ2xDLGVBQXlDO0lBQXpDLHlEQUF5QztJQUN6QyxlQUFvQztJQUFwQyxvREFBb0M7SUFDbEMsZUFBc0M7SUFBdEMsc0RBQXNDO0lBQy9CLGVBQWtDO0lBQWxDLGtEQUFrQzs7QURkbkUsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU9TLG1CQUFjLEdBQXlCLElBQUksQ0FBQztRQXNCNUMseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRzVCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUd6Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFHL0Isc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHNUIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1FBRy9CLHdCQUFtQixHQUFHLElBQUksQ0FBQztRQUczQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHNUIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0tBQ2hDOzt5R0FwRFksbUJBQW1CO3FHQUFuQixtQkFBbUI7UUNSaEMsMkJBQWtHO1FBRWxHLHFIQVdjO1FBRWQsc0hBUWM7OztRQXZCQSw4RUFBbUU7O3VGRFFwRSxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSxhQUFhO2dCQU1oQixjQUFjO2tCQURwQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsV0FBVztrQkFEakIsS0FBSztZQUlDLFVBQVU7a0JBRGhCLEtBQUs7WUFLQyxzQkFBc0I7a0JBRDVCLEtBQUs7WUFJQyxhQUFhO2tCQURuQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsaUJBQWlCO2tCQUR2QixLQUFLO1lBSUMsa0JBQWtCO2tCQUR4QixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsdUJBQXVCO2tCQUQ3QixLQUFLO1lBSUMsbUJBQW1CO2tCQUR6QixLQUFLO1lBSUMsb0JBQW9CO2tCQUQxQixLQUFLO1lBSUMsZ0JBQWdCO2tCQUR0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWZpbmRiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpbmRiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmluZGJhci5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBkZkZpbmRiYXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGU6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIC8qIFVJIHRlbXBsYXRlcyAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tRmluZGJhcklucHV0QXJlYTogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tRmluZGJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tRmluZGJhckJ1dHRvbnM6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kSGlnaGxpZ2h0QWxsID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRNYXRjaENhc2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZEN1cnJlbnRQYWdlT25seSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kUGFnZVJhbmdlID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVXb3JkID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRFbnRpcmVQaHJhc2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoRGlhY3JpdGljcyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kRnV6enlTZWFyY2ggPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZFJlc3VsdHNDb3VudCA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kTWVzc2FnZXMgPSB0cnVlO1xufVxuIiwiPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21GaW5kYmFyID8gY3VzdG9tRmluZGJhciA6IGRlZmF1bHRGaW5kYmFyXCI+IDwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGaW5kYmFyPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJmaW5kYmFyIGhpZGRlbiBkb29ySGFuZ2VyXCJcbiAgICBpZD1cImZpbmRiYXJcIlxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlKCcgKyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSArICcpJ1wiXG4gICAgW3N0eWxlLnRyYW5zZm9ybU9yaWdpbl09XCInbGVmdCB0b3AnXCJcbiAgICBbc3R5bGUubGVmdF09XCJmaW5kYmFyTGVmdFwiXG4gICAgW3N0eWxlLnRvcF09XCJmaW5kYmFyVG9wXCJcbiAgPlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tRmluZGJhckJ1dHRvbnMgPyBjdXN0b21GaW5kYmFyQnV0dG9ucyA6IGRlZmF1bHRGaW5kYmFyQnV0dG9uc1wiPiA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG48L25nLXRlbXBsYXRlPlxuXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGaW5kYmFyQnV0dG9ucz5cbiAgPHBkZi1maW5kLWlucHV0LWFyZWEgW2N1c3RvbUZpbmRiYXJJbnB1dEFyZWFdPVwiY3VzdG9tRmluZGJhcklucHV0QXJlYVwiPjwvcGRmLWZpbmQtaW5wdXQtYXJlYT5cbiAgPHBkZi1maW5kLWhpZ2hsaWdodC1hbGwgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRIaWdobGlnaHRBbGxcIj48L3BkZi1maW5kLWhpZ2hsaWdodC1hbGw+XG4gIDxwZGYtZmluZC1tYXRjaC1jYXNlIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kTWF0Y2hDYXNlXCI+PC9wZGYtZmluZC1tYXRjaC1jYXNlPlxuICA8cGRmLW1hdGNoLWRpYWNyaXRpY3MgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRNYXRjaERpYWNyaXRpY3NcIj48L3BkZi1tYXRjaC1kaWFjcml0aWNzPlxuICA8cGRmLWZpbmQtZW50aXJlLXdvcmQgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRFbnRpcmVXb3JkXCI+PC9wZGYtZmluZC1lbnRpcmUtd29yZD5cbiAgPHBkZi1maW5kLXJlc3VsdHMtY291bnQgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRSZXN1bHRzQ291bnRcIj48L3BkZi1maW5kLXJlc3VsdHMtY291bnQ+XG4gIDxwZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lciBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZE1lc3NhZ2VzXCI+PC9wZGYtZmluZGJhci1tZXNzYWdlLWNvbnRhaW5lcj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=