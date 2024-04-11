import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfPasswordDialogComponent {
}
/** @nocollapse */ PdfPasswordDialogComponent.ɵfac = function PdfPasswordDialogComponent_Factory(t) { return new (t || PdfPasswordDialogComponent)(); };
/** @nocollapse */ PdfPasswordDialogComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPasswordDialogComponent, selectors: [["pdf-password-dialog"]], decls: 13, vars: 0, consts: [["id", "passwordDialog"], [1, "row"], ["for", "password", "id", "passwordText", "data-l10n-id", "password_label"], ["type", "hidden", "id", "password", 1, "toolbarField"], [1, "buttonRow"], ["id", "passwordCancel", 1, "dialogButton"], ["data-l10n-id", "password_cancel"], ["id", "passwordSubmit", 1, "dialogButton"], ["data-l10n-id", "password_ok"]], template: function PdfPasswordDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "dialog", 0)(1, "div", 1)(2, "label", 2);
        i0.ɵɵtext(3, "Enter the password to open this PDF file:");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelement(5, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 4)(7, "button", 5)(8, "span", 6);
        i0.ɵɵtext(9, "Cancel");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "button", 7)(11, "span", 8);
        i0.ɵɵtext(12, "OK");
        i0.ɵɵelementEnd()()()();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPasswordDialogComponent, [{
        type: Component,
        args: [{ selector: 'pdf-password-dialog', template: "<dialog id=\"passwordDialog\">\n  <div class=\"row\">\n    <label for=\"password\" id=\"passwordText\" data-l10n-id=\"password_label\">Enter the password to open this PDF\n      file:</label>\n  </div>\n  <div class=\"row\">\n    <input type=\"hidden\" id=\"password\" class=\"toolbarField\" />\n  </div>\n  <div class=\"buttonRow\">\n    <button id=\"passwordCancel\" class=\"dialogButton\"><span data-l10n-id=\"password_cancel\">Cancel</span></button>\n    <button id=\"passwordSubmit\" class=\"dialogButton\"><span data-l10n-id=\"password_ok\">OK</span></button>\n  </div>\n</dialog>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhc3N3b3JkLWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kaWFsb2cvcGRmLXBhc3N3b3JkLWRpYWxvZy9wZGYtcGFzc3dvcmQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWRpYWxvZy9wZGYtcGFzc3dvcmQtZGlhbG9nL3BkZi1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNMUMsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjs0R0FBMUIsMEJBQTBCO1FDTnZDLGlDQUE0QixhQUFBLGVBQUE7UUFFOEMseURBQy9EO1FBQUEsaUJBQVEsRUFBQTtRQUVqQiw4QkFBaUI7UUFDZiwyQkFBMEQ7UUFDNUQsaUJBQU07UUFDTiw4QkFBdUIsZ0JBQUEsY0FBQTtRQUNpRSxzQkFBTTtRQUFBLGlCQUFPLEVBQUE7UUFDbkcsa0NBQWlELGVBQUE7UUFBaUMsbUJBQUU7UUFBQSxpQkFBTyxFQUFBLEVBQUEsRUFBQTs7dUZESmxGLDBCQUEwQjtjQUp0QyxTQUFTOzJCQUNFLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtcGFzc3dvcmQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wYXNzd29yZC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZQYXNzd29yZERpYWxvZ0NvbXBvbmVudCB7fVxuIiwiPGRpYWxvZyBpZD1cInBhc3N3b3JkRGlhbG9nXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkVGV4dFwiIGRhdGEtbDEwbi1pZD1cInBhc3N3b3JkX2xhYmVsXCI+RW50ZXIgdGhlIHBhc3N3b3JkIHRvIG9wZW4gdGhpcyBQREZcbiAgICAgIGZpbGU6PC9sYWJlbD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwicGFzc3dvcmRcIiBjbGFzcz1cInRvb2xiYXJGaWVsZFwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uUm93XCI+XG4gICAgPGJ1dHRvbiBpZD1cInBhc3N3b3JkQ2FuY2VsXCIgY2xhc3M9XCJkaWFsb2dCdXR0b25cIj48c3BhbiBkYXRhLWwxMG4taWQ9XCJwYXNzd29yZF9jYW5jZWxcIj5DYW5jZWw8L3NwYW4+PC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD1cInBhc3N3b3JkU3VibWl0XCIgY2xhc3M9XCJkaWFsb2dCdXR0b25cIj48c3BhbiBkYXRhLWwxMG4taWQ9XCJwYXNzd29yZF9va1wiPk9LPC9zcGFuPjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGlhbG9nPlxuIl19