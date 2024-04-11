import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-search-input-field/pdf-search-input-field.component";
import * as i3 from "../pdf-find-previous/pdf-find-previous.component";
import * as i4 from "../pdf-find-next/pdf-find-next.component";
function PdfFindInputAreaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "pdf-search-input-field")(2, "pdf-find-previous")(3, "pdf-find-next");
    i0.ɵɵelementEnd();
} }
export class PdfFindInputAreaComponent {
}
/** @nocollapse */ PdfFindInputAreaComponent.ɵfac = function PdfFindInputAreaComponent_Factory(t) { return new (t || PdfFindInputAreaComponent)(); };
/** @nocollapse */ PdfFindInputAreaComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfFindInputAreaComponent, selectors: [["pdf-find-input-area"]], inputs: { customFindbarInputArea: "customFindbarInputArea" }, decls: 2, vars: 2, consts: [["id", "findbarInputContainer", 4, "ngIf"], [3, "ngTemplateOutlet"], ["id", "findbarInputContainer"]], template: function PdfFindInputAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PdfFindInputAreaComponent_div_0_Template, 4, 0, "div", 0);
        i0.ɵɵelementContainer(1, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.customFindbarInputArea);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.customFindbarInputArea || null);
    } }, directives: [i1.NgIf, i2.PdfSearchInputFieldComponent, i3.PdfFindPreviousComponent, i4.PdfFindNextComponent, i1.NgTemplateOutlet], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfFindInputAreaComponent, [{
        type: Component,
        args: [{ selector: 'pdf-find-input-area', template: "<div id=\"findbarInputContainer\" *ngIf=\"!customFindbarInputArea\">\n  <pdf-search-input-field></pdf-search-input-field>\n  <pdf-find-previous></pdf-find-previous>\n  <pdf-find-next></pdf-find-next>\n</div>\n\n<ng-container [ngTemplateOutlet]=\"customFindbarInputArea || null\"> </ng-container>\n", styles: [""] }]
    }], null, { customFindbarInputArea: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtaW5wdXQtYXJlYS9wZGYtZmluZC1pbnB1dC1hcmVhLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNBOUQsOEJBQWdFO0lBQzlELHlDQUFpRCx3QkFBQSxvQkFBQTtJQUduRCxpQkFBTTs7QURHTixNQUFNLE9BQU8seUJBQXlCOztxSEFBekIseUJBQXlCOzJHQUF6Qix5QkFBeUI7UUNQdEMsMEVBSU07UUFFTiwyQkFBa0Y7O1FBTmpELGtEQUE2QjtRQU1oRCxlQUFtRDtRQUFuRCxxRUFBbUQ7O3VGRENwRCx5QkFBeUI7Y0FMckMsU0FBUzsyQkFDRSxxQkFBcUI7Z0JBTXhCLHNCQUFzQjtrQkFENUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1maW5kLWlucHV0LWFyZWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT4gfCB1bmRlZmluZWQ7XG59XG4iLCI8ZGl2IGlkPVwiZmluZGJhcklucHV0Q29udGFpbmVyXCIgKm5nSWY9XCIhY3VzdG9tRmluZGJhcklucHV0QXJlYVwiPlxuICA8cGRmLXNlYXJjaC1pbnB1dC1maWVsZD48L3BkZi1zZWFyY2gtaW5wdXQtZmllbGQ+XG4gIDxwZGYtZmluZC1wcmV2aW91cz48L3BkZi1maW5kLXByZXZpb3VzPlxuICA8cGRmLWZpbmQtbmV4dD48L3BkZi1maW5kLW5leHQ+XG48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21GaW5kYmFySW5wdXRBcmVhIHx8IG51bGxcIj4gPC9uZy1jb250YWluZXI+XG4iXX0=