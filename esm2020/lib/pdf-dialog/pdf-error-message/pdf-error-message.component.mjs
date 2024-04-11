import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfErrorMessageComponent {
}
/** @nocollapse */ PdfErrorMessageComponent.ɵfac = function PdfErrorMessageComponent_Factory(t) { return new (t || PdfErrorMessageComponent)(); };
/** @nocollapse */ PdfErrorMessageComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfErrorMessageComponent, selectors: [["pdf-error-message"]], decls: 12, vars: 0, consts: [["id", "errorWrapper", "hidden", "true"], ["id", "errorMessageLeft"], ["id", "errorMessage"], ["type", "button", "id", "errorShowMore"], ["type", "button", "id", "errorShowLess", "hidden", "true"], ["id", "errorMessageRight"], ["type", "button", "id", "errorClose"], [1, "clearBoth"], ["id", "errorMoreInfo", "hidden", "true", "readonly", "readonly"]], template: function PdfErrorMessageComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵelement(2, "span", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵtext(4, "More Information");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵtext(6, "Less Information");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(7, "div", 5)(8, "button", 6);
        i0.ɵɵtext(9, "Close");
        i0.ɵɵelementEnd()();
        i0.ɵɵelement(10, "div", 7)(11, "textarea", 8);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfErrorMessageComponent, [{
        type: Component,
        args: [{ selector: 'pdf-error-message', template: "<div id=\"errorWrapper\" hidden=\"true\">\n  <div id=\"errorMessageLeft\">\n    <span id=\"errorMessage\"></span>\n    <button type=\"button\" id=\"errorShowMore\">More Information</button>\n    <button type=\"button\" id=\"errorShowLess\" hidden=\"true\">Less Information</button>\n  </div>\n  <div id=\"errorMessageRight\">\n    <button type=\"button\" id=\"errorClose\">Close</button>\n  </div>\n  <div class=\"clearBoth\"></div>\n  <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\n</div>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWVycm9yLW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9wZGYtZGlhbG9nL3BkZi1lcnJvci1tZXNzYWdlL3BkZi1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWRpYWxvZy9wZGYtZXJyb3ItbWVzc2FnZS9wZGYtZXJyb3ItbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0xQyxNQUFNLE9BQU8sd0JBQXdCOzttSEFBeEIsd0JBQXdCOzBHQUF4Qix3QkFBd0I7UUNOckMsOEJBQXFDLGFBQUE7UUFFakMsMEJBQStCO1FBQy9CLGlDQUF5QztRQUFBLGdDQUFnQjtRQUFBLGlCQUFTO1FBQ2xFLGlDQUF1RDtRQUFBLGdDQUFnQjtRQUFBLGlCQUFTLEVBQUE7UUFFbEYsOEJBQTRCLGdCQUFBO1FBQ1kscUJBQUs7UUFBQSxpQkFBUyxFQUFBO1FBRXRELDBCQUE2QixtQkFBQTtRQUUvQixpQkFBTTs7dUZETE8sd0JBQXdCO2NBSnBDLFNBQVM7MkJBQ0UsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1lcnJvci1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1lcnJvci1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGRmRXJyb3JNZXNzYWdlQ29tcG9uZW50IHt9XG4iLCI8ZGl2IGlkPVwiZXJyb3JXcmFwcGVyXCIgaGlkZGVuPVwidHJ1ZVwiPlxuICA8ZGl2IGlkPVwiZXJyb3JNZXNzYWdlTGVmdFwiPlxuICAgIDxzcGFuIGlkPVwiZXJyb3JNZXNzYWdlXCI+PC9zcGFuPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwiZXJyb3JTaG93TW9yZVwiPk1vcmUgSW5mb3JtYXRpb248L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cImVycm9yU2hvd0xlc3NcIiBoaWRkZW49XCJ0cnVlXCI+TGVzcyBJbmZvcm1hdGlvbjwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cImVycm9yTWVzc2FnZVJpZ2h0XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJlcnJvckNsb3NlXCI+Q2xvc2U8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjbGVhckJvdGhcIj48L2Rpdj5cbiAgPHRleHRhcmVhIGlkPVwiZXJyb3JNb3JlSW5mb1wiIGhpZGRlbj1cInRydWVcIiByZWFkb25seT1cInJlYWRvbmx5XCI+PC90ZXh0YXJlYT5cbjwvZGl2PlxuIl19