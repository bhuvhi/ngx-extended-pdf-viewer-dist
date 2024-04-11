import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPreparePrintingDialogComponent {
}
/** @nocollapse */ PdfPreparePrintingDialogComponent.ɵfac = function PdfPreparePrintingDialogComponent_Factory(t) { return new (t || PdfPreparePrintingDialogComponent)(); };
/** @nocollapse */ PdfPreparePrintingDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPreparePrintingDialogComponent, selectors: [["pdf-prepare-printing-dialog"]], decls: 12, vars: 0, consts: [["id", "printServiceDialog", 2, "min-width", "200px"], [1, "row"], ["data-l10n-id", "print_progress_message"], ["value", "0", "max", "100"], ["data-l10n-id", "print_progress_percent", "data-l10n-args", "{ \"progress\": 0 }", 1, "relative-progress"], [1, "buttonRow"], ["id", "printCancel", "type", "button", 1, "dialogButton"], ["data-l10n-id", "print_progress_close"]], template: function PdfPreparePrintingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "dialog", 0)(1, "div", 1)(2, "span", 2);
        i0.ɵɵtext(3, "Preparing document for printing\u2026");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelement(5, "progress", 3);
        i0.ɵɵelementStart(6, "span", 4);
        i0.ɵɵtext(7, "0%");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(8, "div", 5)(9, "button", 6)(10, "span", 7);
        i0.ɵɵtext(11, "Cancel");
        i0.ɵɵelementEnd()()()();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPreparePrintingDialogComponent, [{
        type: Component,
        args: [{ selector: 'pdf-prepare-printing-dialog', template: "<dialog id=\"printServiceDialog\" style=\"min-width: 200px\">\n  <div class=\"row\">\n    <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\n  </div>\n  <div class=\"row\">\n    <progress value=\"0\" max=\"100\"></progress>\n    <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\n  </div>\n  <div class=\"buttonRow\">\n    <button id=\"printCancel\" class=\"dialogButton\" type=\"button\">\n      <span data-l10n-id=\"print_progress_close\">Cancel</span></button>\n  </div>\n</dialog>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWRpYWxvZy9wZGYtcHJlcGFyZS1wcmludGluZy1kaWFsb2cvcGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTFDLE1BQU0sT0FBTyxpQ0FBaUM7O3FJQUFqQyxpQ0FBaUM7bUhBQWpDLGlDQUFpQztRQ045QyxpQ0FBeUQsYUFBQSxjQUFBO1FBRVQscURBQWdDO1FBQUEsaUJBQU8sRUFBQTtRQUVyRiw4QkFBaUI7UUFDZiw4QkFBeUM7UUFDekMsK0JBQXlHO1FBQUEsa0JBQUU7UUFBQSxpQkFBTyxFQUFBO1FBRXBILDhCQUF1QixnQkFBQSxlQUFBO1FBRXVCLHVCQUFNO1FBQUEsaUJBQU8sRUFBQSxFQUFBLEVBQUE7O3VGREpoRCxpQ0FBaUM7Y0FKN0MsU0FBUzsyQkFDRSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXByZXBhcmUtcHJpbnRpbmctZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wcmVwYXJlLXByaW50aW5nLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBkZlByZXBhcmVQcmludGluZ0RpYWxvZ0NvbXBvbmVudCB7fVxuIiwiPGRpYWxvZyBpZD1cInByaW50U2VydmljZURpYWxvZ1wiIHN0eWxlPVwibWluLXdpZHRoOiAyMDBweFwiPlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicHJpbnRfcHJvZ3Jlc3NfbWVzc2FnZVwiPlByZXBhcmluZyBkb2N1bWVudCBmb3IgcHJpbnRpbmfigKY8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPHByb2dyZXNzIHZhbHVlPVwiMFwiIG1heD1cIjEwMFwiPjwvcHJvZ3Jlc3M+XG4gICAgPHNwYW4gZGF0YS1sMTBuLWlkPVwicHJpbnRfcHJvZ3Jlc3NfcGVyY2VudFwiIGRhdGEtbDEwbi1hcmdzPSd7IFwicHJvZ3Jlc3NcIjogMCB9JyBjbGFzcz1cInJlbGF0aXZlLXByb2dyZXNzXCI+MCU8L3NwYW4+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uUm93XCI+XG4gICAgPGJ1dHRvbiBpZD1cInByaW50Q2FuY2VsXCIgY2xhc3M9XCJkaWFsb2dCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9XCJwcmludF9wcm9ncmVzc19jbG9zZVwiPkNhbmNlbDwvc3Bhbj48L2J1dHRvbj5cbiAgPC9kaXY+XG48L2RpYWxvZz5cbiJdfQ==