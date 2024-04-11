import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfAltTextDialogComponent {
    constructor() { }
    ngOnInit() { }
    /** @nocollapse */ static ɵfac = function PdfAltTextDialogComponent_Factory(t) { return new (t || PdfAltTextDialogComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfAltTextDialogComponent, selectors: [["pdf-alt-text-dialog"]], decls: 34, vars: 0, consts: [["id", "altTextDialog", "aria-labelledby", "dialogLabel", "aria-describedby", "dialogDescription"], ["id", "altTextContainer"], ["id", "overallDescription"], ["id", "dialogLabel", "data-l10n-id", "pdfjs-editor-alt-text-dialog-label", 1, "title"], ["id", "dialogDescription", "data-l10n-id", "pdfjs-editor-alt-text-dialog-description"], ["id", "addDescription"], [1, "radio"], [1, "radioButton"], ["type", "radio", "id", "descriptionButton", "name", "altTextOption", "tabindex", "0", "aria-describedby", "descriptionAreaLabel", "checked", ""], ["for", "descriptionButton", "data-l10n-id", "pdfjs-editor-alt-text-add-description-label"], [1, "radioLabel"], ["id", "descriptionAreaLabel", "data-l10n-id", "pdfjs-editor-alt-text-add-description-description"], [1, "descriptionArea"], ["id", "descriptionTextarea", "placeholder", "For example, \u201CA young man sits down at a table to eat a meal\u201D", "aria-labelledby", "descriptionAreaLabel", "data-l10n-id", "pdfjs-editor-alt-text-textarea", "tabindex", "0"], ["id", "markAsDecorative"], ["type", "radio", "id", "decorativeButton", "name", "altTextOption", "aria-describedby", "decorativeLabel"], ["for", "decorativeButton", "data-l10n-id", "pdfjs-editor-alt-text-mark-decorative-label"], ["id", "decorativeLabel", "data-l10n-id", "pdfjs-editor-alt-text-mark-decorative-description"], ["id", "buttons"], ["id", "altTextCancel", "tabindex", "0"], ["data-l10n-id", "pdfjs-editor-alt-text-cancel-button"], ["id", "altTextSave", "tabindex", "0"], ["data-l10n-id", "pdfjs-editor-alt-text-save-button"]], template: function PdfAltTextDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "dialog", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Choose an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, " Alt text (alternative text) helps when people can\u2019t see the image or when it doesn\u2019t load. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 5)(8, "div", 6)(9, "div", 7);
            i0.ɵɵelement(10, "input", 8);
            i0.ɵɵelementStart(11, "label", 9);
            i0.ɵɵtext(12, "Add a description");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 10)(14, "span", 11);
            i0.ɵɵtext(15, " Aim for 1-2 sentences that describe the subject, setting, or actions. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 12);
            i0.ɵɵelement(17, "textarea", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 14)(19, "div", 6)(20, "div", 7);
            i0.ɵɵelement(21, "input", 15);
            i0.ɵɵelementStart(22, "label", 16);
            i0.ɵɵtext(23, "Mark as decorative");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 10)(25, "span", 17);
            i0.ɵɵtext(26, " This is used for ornamental images, like borders or watermarks. ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(27, "div", 18)(28, "button", 19)(29, "span", 20);
            i0.ɵɵtext(30, "Cancel");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(31, "button", 21)(32, "span", 22);
            i0.ɵɵtext(33, "Save");
            i0.ɵɵelementEnd()()()()();
        } } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfAltTextDialogComponent, [{
        type: Component,
        args: [{ selector: 'pdf-alt-text-dialog', template: "<dialog id=\"altTextDialog\" aria-labelledby=\"dialogLabel\" aria-describedby=\"dialogDescription\">\r\n  <div id=\"altTextContainer\">\r\n    <div id=\"overallDescription\">\r\n      <span id=\"dialogLabel\" data-l10n-id=\"pdfjs-editor-alt-text-dialog-label\" class=\"title\">Choose an option</span>\r\n      <span id=\"dialogDescription\" data-l10n-id=\"pdfjs-editor-alt-text-dialog-description\">\r\n        Alt text (alternative text) helps when people can\u2019t see the image or when it doesn\u2019t load.\r\n      </span>\r\n    </div>\r\n    <div id=\"addDescription\">\r\n      <div class=\"radio\">\r\n        <div class=\"radioButton\">\r\n          <input type=\"radio\" id=\"descriptionButton\" name=\"altTextOption\" tabindex=\"0\" aria-describedby=\"descriptionAreaLabel\" checked />\r\n          <label for=\"descriptionButton\" data-l10n-id=\"pdfjs-editor-alt-text-add-description-label\">Add a description</label>\r\n        </div>\r\n        <div class=\"radioLabel\">\r\n          <span id=\"descriptionAreaLabel\" data-l10n-id=\"pdfjs-editor-alt-text-add-description-description\">\r\n            Aim for 1-2 sentences that describe the subject, setting, or actions.\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"descriptionArea\">\r\n        <textarea\r\n          id=\"descriptionTextarea\"\r\n          placeholder=\"For example, \u201CA young man sits down at a table to eat a meal\u201D\"\r\n          aria-labelledby=\"descriptionAreaLabel\"\r\n          data-l10n-id=\"pdfjs-editor-alt-text-textarea\"\r\n          tabindex=\"0\"\r\n        ></textarea>\r\n      </div>\r\n    </div>\r\n    <div id=\"markAsDecorative\">\r\n      <div class=\"radio\">\r\n        <div class=\"radioButton\">\r\n          <input type=\"radio\" id=\"decorativeButton\" name=\"altTextOption\" aria-describedby=\"decorativeLabel\" />\r\n          <label for=\"decorativeButton\" data-l10n-id=\"pdfjs-editor-alt-text-mark-decorative-label\">Mark as decorative</label>\r\n        </div>\r\n        <div class=\"radioLabel\">\r\n          <span id=\"decorativeLabel\" data-l10n-id=\"pdfjs-editor-alt-text-mark-decorative-description\">\r\n            This is used for ornamental images, like borders or watermarks.\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"buttons\">\r\n      <button id=\"altTextCancel\" tabindex=\"0\"><span data-l10n-id=\"pdfjs-editor-alt-text-cancel-button\">Cancel</span></button>\r\n      <button id=\"altTextSave\" tabindex=\"0\"><span data-l10n-id=\"pdfjs-editor-alt-text-save-button\">Save</span></button>\r\n    </div>\r\n  </div>\r\n</dialog>\r\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfAltTextDialogComponent, { className: "PdfAltTextDialogComponent", filePath: "lib\\pdf-dialog\\pdf-alt-text-dialog\\pdf-alt-text-dialog.component.ts", lineNumber: 8 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWFsdC10ZXh0LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3BkZi1kaWFsb2cvcGRmLWFsdC10ZXh0LWRpYWxvZy9wZGYtYWx0LXRleHQtZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvcGRmLWRpYWxvZy9wZGYtYWx0LXRleHQtZGlhbG9nL3BkZi1hbHQtdGV4dC1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7QUFPbEQsTUFBTSxPQUFPLHlCQUF5QjtJQUNwQyxnQkFBZSxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO3NHQUhGLHlCQUF5Qjs0RkFBekIseUJBQXlCO1lDSmhDLEFBREYsQUFERixBQURGLGlDQUE4RixhQUNqRSxhQUNJLGNBQzREO1lBQUEsZ0NBQWdCO1lBQUEsaUJBQU87WUFDOUcsK0JBQXFGO1lBQ25GLHNIQUNGO1lBQ0YsQUFERSxpQkFBTyxFQUNIO1lBR0YsQUFERixBQURGLDhCQUF5QixhQUNKLGFBQ1E7WUFDdkIsNEJBQStIO1lBQy9ILGlDQUEwRjtZQUFBLGtDQUFpQjtZQUM3RyxBQUQ2RyxpQkFBUSxFQUMvRztZQUVKLEFBREYsZ0NBQXdCLGdCQUMyRTtZQUMvRix3RkFDRjtZQUVKLEFBREUsQUFERSxpQkFBTyxFQUNILEVBQ0Y7WUFDTixnQ0FBNkI7WUFDM0IsZ0NBTVk7WUFFaEIsQUFERSxpQkFBTSxFQUNGO1lBR0YsQUFERixBQURGLGdDQUEyQixjQUNOLGNBQ1E7WUFDdkIsNkJBQW9HO1lBQ3BHLGtDQUF5RjtZQUFBLG1DQUFrQjtZQUM3RyxBQUQ2RyxpQkFBUSxFQUMvRztZQUVKLEFBREYsZ0NBQXdCLGdCQUNzRTtZQUMxRixrRkFDRjtZQUdOLEFBREUsQUFERSxBQURFLGlCQUFPLEVBQ0gsRUFDRixFQUNGO1lBRW9DLEFBQXhDLEFBREYsZ0NBQWtCLGtCQUN3QixnQkFBeUQ7WUFBQSx1QkFBTTtZQUFPLEFBQVAsaUJBQU8sRUFBUztZQUNqRixBQUF0QyxtQ0FBc0MsZ0JBQXVEO1lBQUEscUJBQUk7WUFHdkcsQUFERSxBQURFLEFBRDBHLEFBQVAsaUJBQU8sRUFBUyxFQUM3RyxFQUNGLEVBQ0M7OztpRkR6Q0kseUJBQXlCO2NBTHJDLFNBQVM7MkJBQ0UscUJBQXFCOztrRkFJcEIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLWFsdC10ZXh0LWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1hbHQtdGV4dC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1hbHQtdGV4dC1kaWFsb2cuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmQWx0VGV4dERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcbn1cclxuIiwiPGRpYWxvZyBpZD1cImFsdFRleHREaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJkaWFsb2dMYWJlbFwiIGFyaWEtZGVzY3JpYmVkYnk9XCJkaWFsb2dEZXNjcmlwdGlvblwiPlxyXG4gIDxkaXYgaWQ9XCJhbHRUZXh0Q29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGlkPVwib3ZlcmFsbERlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGlkPVwiZGlhbG9nTGFiZWxcIiBkYXRhLWwxMG4taWQ9XCJwZGZqcy1lZGl0b3ItYWx0LXRleHQtZGlhbG9nLWxhYmVsXCIgY2xhc3M9XCJ0aXRsZVwiPkNob29zZSBhbiBvcHRpb248L3NwYW4+XHJcbiAgICAgIDxzcGFuIGlkPVwiZGlhbG9nRGVzY3JpcHRpb25cIiBkYXRhLWwxMG4taWQ9XCJwZGZqcy1lZGl0b3ItYWx0LXRleHQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgQWx0IHRleHQgKGFsdGVybmF0aXZlIHRleHQpIGhlbHBzIHdoZW4gcGVvcGxlIGNhbuKAmXQgc2VlIHRoZSBpbWFnZSBvciB3aGVuIGl0IGRvZXNu4oCZdCBsb2FkLlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJhZGREZXNjcmlwdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmFkaW9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9CdXR0b25cIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cImRlc2NyaXB0aW9uQnV0dG9uXCIgbmFtZT1cImFsdFRleHRPcHRpb25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZGVzY3JpcHRpb25BcmVhTGFiZWxcIiBjaGVja2VkIC8+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25CdXR0b25cIiBkYXRhLWwxMG4taWQ9XCJwZGZqcy1lZGl0b3ItYWx0LXRleHQtYWRkLWRlc2NyaXB0aW9uLWxhYmVsXCI+QWRkIGEgZGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0xhYmVsXCI+XHJcbiAgICAgICAgICA8c3BhbiBpZD1cImRlc2NyaXB0aW9uQXJlYUxhYmVsXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWFsdC10ZXh0LWFkZC1kZXNjcmlwdGlvbi1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBBaW0gZm9yIDEtMiBzZW50ZW5jZXMgdGhhdCBkZXNjcmliZSB0aGUgc3ViamVjdCwgc2V0dGluZywgb3IgYWN0aW9ucy5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbkFyZWFcIj5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25UZXh0YXJlYVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZvciBleGFtcGxlLCDigJxBIHlvdW5nIG1hbiBzaXRzIGRvd24gYXQgYSB0YWJsZSB0byBlYXQgYSBtZWFs4oCdXCJcclxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImRlc2NyaXB0aW9uQXJlYUxhYmVsXCJcclxuICAgICAgICAgIGRhdGEtbDEwbi1pZD1cInBkZmpzLWVkaXRvci1hbHQtdGV4dC10ZXh0YXJlYVwiXHJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBpZD1cIm1hcmtBc0RlY29yYXRpdmVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJhZGlvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQnV0dG9uXCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJkZWNvcmF0aXZlQnV0dG9uXCIgbmFtZT1cImFsdFRleHRPcHRpb25cIiBhcmlhLWRlc2NyaWJlZGJ5PVwiZGVjb3JhdGl2ZUxhYmVsXCIgLz5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZWNvcmF0aXZlQnV0dG9uXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWFsdC10ZXh0LW1hcmstZGVjb3JhdGl2ZS1sYWJlbFwiPk1hcmsgYXMgZGVjb3JhdGl2ZTwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvTGFiZWxcIj5cclxuICAgICAgICAgIDxzcGFuIGlkPVwiZGVjb3JhdGl2ZUxhYmVsXCIgZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWFsdC10ZXh0LW1hcmstZGVjb3JhdGl2ZS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICBUaGlzIGlzIHVzZWQgZm9yIG9ybmFtZW50YWwgaW1hZ2VzLCBsaWtlIGJvcmRlcnMgb3Igd2F0ZXJtYXJrcy5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJidXR0b25zXCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJhbHRUZXh0Q2FuY2VsXCIgdGFiaW5kZXg9XCIwXCI+PHNwYW4gZGF0YS1sMTBuLWlkPVwicGRmanMtZWRpdG9yLWFsdC10ZXh0LWNhbmNlbC1idXR0b25cIj5DYW5jZWw8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJhbHRUZXh0U2F2ZVwiIHRhYmluZGV4PVwiMFwiPjxzcGFuIGRhdGEtbDEwbi1pZD1cInBkZmpzLWVkaXRvci1hbHQtdGV4dC1zYXZlLWJ1dHRvblwiPlNhdmU8L3NwYW4+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaWFsb2c+XHJcbiJdfQ==