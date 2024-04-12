import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./pdf-find-input-area/pdf-find-input-area.component";
import * as i2 from "./pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component";
import * as i3 from "./pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component";
import * as i4 from "./pdf-findbar-options-two-container/pdf-match-diacritics/pdf-match-diacritics.component";
import * as i5 from "./pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component";
import * as i6 from "./pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component";
import * as i7 from "./pdf-findbar-message-container/pdf-findbar-message-container.component";
import * as i8 from "@angular/common";
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
PdfFindbarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfFindbarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfFindbarComponent, selector: "pdf-findbar", inputs: { showFindButton: "showFindButton", mobileFriendlyZoomScale: "mobileFriendlyZoomScale", findbarLeft: "findbarLeft", findbarTop: "findbarTop", customFindbarInputArea: "customFindbarInputArea", customFindbar: "customFindbar", customFindbarButtons: "customFindbarButtons", showFindHighlightAll: "showFindHighlightAll", showFindMatchCase: "showFindMatchCase", showFindCurrentPageOnly: "showFindCurrentPageOnly", showFindPageRange: "showFindPageRange", showFindEntireWord: "showFindEntireWord", showFindEntirePhrase: "showFindEntirePhrase", showFindMatchDiacritics: "showFindMatchDiacritics", showFindFuzzySearch: "showFindFuzzySearch", showFindResultsCount: "showFindResultsCount", showFindMessages: "showFindMessages" }, ngImport: i0, template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\"> </ng-container>\r\n\r\n<ng-template #defaultFindbar>\r\n  <div\r\n    class=\"findbar hidden doorHanger\"\r\n    id=\"findbar\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'left top'\"\r\n    [style.left]=\"findbarLeft\"\r\n    [style.top]=\"findbarTop\"\r\n  >\r\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFindbarButtons>\r\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\r\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\r\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\r\n  <pdf-match-diacritics [class.hidden]=\"!showFindMatchDiacritics\"></pdf-match-diacritics>\r\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\r\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\r\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\r\n</ng-template>\r\n", styles: [""], components: [{ type: i1.PdfFindInputAreaComponent, selector: "pdf-find-input-area", inputs: ["customFindbarInputArea"] }, { type: i2.PdfFindHighlightAllComponent, selector: "pdf-find-highlight-all" }, { type: i3.PdfFindMatchCaseComponent, selector: "pdf-find-match-case" }, { type: i4.PdfMatchDiacriticsComponent, selector: "pdf-match-diacritics" }, { type: i5.PdfFindEntireWordComponent, selector: "pdf-find-entire-word" }, { type: i6.PdfFindResultsCountComponent, selector: "pdf-find-results-count" }, { type: i7.PdfFindbarMessageContainerComponent, selector: "pdf-findbar-message-container" }], directives: [{ type: i8.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfFindbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-findbar', template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\"> </ng-container>\r\n\r\n<ng-template #defaultFindbar>\r\n  <div\r\n    class=\"findbar hidden doorHanger\"\r\n    id=\"findbar\"\r\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\r\n    [style.transformOrigin]=\"'left top'\"\r\n    [style.left]=\"findbarLeft\"\r\n    [style.top]=\"findbarTop\"\r\n  >\r\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #defaultFindbarButtons>\r\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\r\n  <pdf-find-highlight-all [class.hidden]=\"!showFindHighlightAll\"></pdf-find-highlight-all>\r\n  <pdf-find-match-case [class.hidden]=\"!showFindMatchCase\"></pdf-find-match-case>\r\n  <pdf-match-diacritics [class.hidden]=\"!showFindMatchDiacritics\"></pdf-match-diacritics>\r\n  <pdf-find-entire-word [class.hidden]=\"!showFindEntireWord\"></pdf-find-entire-word>\r\n  <pdf-find-results-count [class.hidden]=\"!showFindResultsCount\"></pdf-find-results-count>\r\n  <pdf-findbar-message-container [class.hidden]=\"!showFindMessages\"></pdf-findbar-message-container>\r\n</ng-template>\r\n", styles: [""] }]
        }], propDecorators: { showFindButton: [{
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
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmRiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztBQVE5RCxNQUFNLE9BQU8sbUJBQW1CO0lBTGhDO1FBT1MsbUJBQWMsR0FBeUIsSUFBSSxDQUFDO1FBc0I1Qyx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHNUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLDRCQUF1QixHQUFHLElBQUksQ0FBQztRQUcvQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUc1Qiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFHL0Isd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRzNCLHlCQUFvQixHQUFHLElBQUksQ0FBQztRQUc1QixxQkFBZ0IsR0FBRyxJQUFJLENBQUM7S0FDaEM7O2dIQXBEWSxtQkFBbUI7b0dBQW5CLG1CQUFtQix5d0JDUmhDLHV4Q0F3QkE7MkZEaEJhLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxhQUFhOzhCQU1oQixjQUFjO3NCQURwQixLQUFLO2dCQUlDLHVCQUF1QjtzQkFEN0IsS0FBSztnQkFJQyxXQUFXO3NCQURqQixLQUFLO2dCQUlDLFVBQVU7c0JBRGhCLEtBQUs7Z0JBS0Msc0JBQXNCO3NCQUQ1QixLQUFLO2dCQUlDLGFBQWE7c0JBRG5CLEtBQUs7Z0JBSUMsb0JBQW9CO3NCQUQxQixLQUFLO2dCQUlDLG9CQUFvQjtzQkFEMUIsS0FBSztnQkFJQyxpQkFBaUI7c0JBRHZCLEtBQUs7Z0JBSUMsdUJBQXVCO3NCQUQ3QixLQUFLO2dCQUlDLGlCQUFpQjtzQkFEdkIsS0FBSztnQkFJQyxrQkFBa0I7c0JBRHhCLEtBQUs7Z0JBSUMsb0JBQW9CO3NCQUQxQixLQUFLO2dCQUlDLHVCQUF1QjtzQkFEN0IsS0FBSztnQkFJQyxtQkFBbUI7c0JBRHpCLEtBQUs7Z0JBSUMsb0JBQW9CO3NCQUQxQixLQUFLO2dCQUlDLGdCQUFnQjtzQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWZpbmRiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtZmluZGJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWZpbmRiYXIuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmRmluZGJhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGU6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG5cclxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZDtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRIaWdobGlnaHRBbGwgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZE1hdGNoQ2FzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kQ3VycmVudFBhZ2VPbmx5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRQYWdlUmFuZ2UgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVdvcmQgPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93RmluZEVudGlyZVBocmFzZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kTWF0Y2hEaWFjcml0aWNzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRGdXp6eVNlYXJjaCA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dGaW5kUmVzdWx0c0NvdW50ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd0ZpbmRNZXNzYWdlcyA9IHRydWU7XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21GaW5kYmFyID8gY3VzdG9tRmluZGJhciA6IGRlZmF1bHRGaW5kYmFyXCI+IDwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0RmluZGJhcj5cclxuICA8ZGl2XHJcbiAgICBjbGFzcz1cImZpbmRiYXIgaGlkZGVuIGRvb3JIYW5nZXJcIlxyXG4gICAgaWQ9XCJmaW5kYmFyXCJcclxuICAgIFtzdHlsZS50cmFuc2Zvcm1dPVwiJ3NjYWxlKCcgKyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSArICcpJ1wiXHJcbiAgICBbc3R5bGUudHJhbnNmb3JtT3JpZ2luXT1cIidsZWZ0IHRvcCdcIlxyXG4gICAgW3N0eWxlLmxlZnRdPVwiZmluZGJhckxlZnRcIlxyXG4gICAgW3N0eWxlLnRvcF09XCJmaW5kYmFyVG9wXCJcclxuICA+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbUZpbmRiYXJCdXR0b25zID8gY3VzdG9tRmluZGJhckJ1dHRvbnMgOiBkZWZhdWx0RmluZGJhckJ1dHRvbnNcIj4gPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRGaW5kYmFyQnV0dG9ucz5cclxuICA8cGRmLWZpbmQtaW5wdXQtYXJlYSBbY3VzdG9tRmluZGJhcklucHV0QXJlYV09XCJjdXN0b21GaW5kYmFySW5wdXRBcmVhXCI+PC9wZGYtZmluZC1pbnB1dC1hcmVhPlxyXG4gIDxwZGYtZmluZC1oaWdobGlnaHQtYWxsIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kSGlnaGxpZ2h0QWxsXCI+PC9wZGYtZmluZC1oaWdobGlnaHQtYWxsPlxyXG4gIDxwZGYtZmluZC1tYXRjaC1jYXNlIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kTWF0Y2hDYXNlXCI+PC9wZGYtZmluZC1tYXRjaC1jYXNlPlxyXG4gIDxwZGYtbWF0Y2gtZGlhY3JpdGljcyBbY2xhc3MuaGlkZGVuXT1cIiFzaG93RmluZE1hdGNoRGlhY3JpdGljc1wiPjwvcGRmLW1hdGNoLWRpYWNyaXRpY3M+XHJcbiAgPHBkZi1maW5kLWVudGlyZS13b3JkIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kRW50aXJlV29yZFwiPjwvcGRmLWZpbmQtZW50aXJlLXdvcmQ+XHJcbiAgPHBkZi1maW5kLXJlc3VsdHMtY291bnQgW2NsYXNzLmhpZGRlbl09XCIhc2hvd0ZpbmRSZXN1bHRzQ291bnRcIj48L3BkZi1maW5kLXJlc3VsdHMtY291bnQ+XHJcbiAgPHBkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyIFtjbGFzcy5oaWRkZW5dPVwiIXNob3dGaW5kTWVzc2FnZXNcIj48L3BkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=