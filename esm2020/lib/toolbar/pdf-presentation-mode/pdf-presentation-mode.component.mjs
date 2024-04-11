import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfPresentationModeComponent {
    constructor() {
        this.showPresentationModeButton = true;
    }
}
/** @nocollapse */ PdfPresentationModeComponent.ɵfac = function PdfPresentationModeComponent_Factory(t) { return new (t || PdfPresentationModeComponent)(); };
/** @nocollapse */ PdfPresentationModeComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfPresentationModeComponent, selectors: [["pdf-presentation-mode"]], inputs: { showPresentationModeButton: "showPresentationModeButton" }, decls: 2, vars: 5, consts: [["primaryToolbarId", "presentationMode", "title", "Switch to Presentation Mode", "l10nId", "presentation_mode", "l10nLabel", "presentation_mode_label", "image", "<svg style='width: 27px; height: 27px; margin-top: -2px' viewBox='0 0 24 24'><path fill='currentColor' d='M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z' /></svg>", 3, "cssClass", "order"]], template: function PdfPresentationModeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "pdf-shy-button", 0);
        i0.ɵɵpipe(1, "responsiveCSSClass");
    } if (rf & 2) {
        i0.ɵɵproperty("cssClass", i0.ɵɵpipeBind2(1, 2, ctx.showPresentationModeButton, "hiddenLargeView"))("order", 100);
    } }, directives: [i1.PdfShyButtonComponent], pipes: [i2.ResponsiveCSSClassPipe], styles: ["[_nghost-%COMP%]   button.toolbarButton[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]:focus{outline:none}svg[_ngcontent-%COMP%]:focus{outline:none}button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfPresentationModeComponent, [{
        type: Component,
        args: [{ selector: 'pdf-presentation-mode', template: "<pdf-shy-button\r\n  primaryToolbarId=\"presentationMode\"\r\n  [cssClass]=\"showPresentationModeButton | responsiveCSSClass : 'hiddenLargeView'\"\r\n  title=\"Switch to Presentation Mode\"\r\n  l10nId=\"presentation_mode\"\r\n  l10nLabel=\"presentation_mode_label\"\r\n  [order]=\"100\"\r\n  image=\"<svg style='width: 27px; height: 27px; margin-top: -2px' viewBox='0 0 24 24'><path fill='currentColor' d='M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host button.toolbarButton{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
    }], null, { showPresentationModeButton: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFPUywrQkFBMEIsR0FBeUIsSUFBSSxDQUFDO0tBQ2hFOzsySEFIWSw0QkFBNEI7OEdBQTVCLDRCQUE0QjtRQ1J6QyxvQ0FTaUI7OztRQVBmLGtHQUFnRixjQUFBOzt1RkRNckUsNEJBQTRCO2NBTHhDLFNBQVM7MkJBQ0UsdUJBQXVCO2dCQU0xQiwwQkFBMEI7a0JBRGhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlc3BvbnNpdmVWaXNpYmlsaXR5IH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGRmLXByZXNlbnRhdGlvbi1tb2RlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxufVxyXG4iLCI8cGRmLXNoeS1idXR0b25cclxuICBwcmltYXJ5VG9vbGJhcklkPVwicHJlc2VudGF0aW9uTW9kZVwiXHJcbiAgW2Nzc0NsYXNzXT1cInNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlbkxhcmdlVmlldydcIlxyXG4gIHRpdGxlPVwiU3dpdGNoIHRvIFByZXNlbnRhdGlvbiBNb2RlXCJcclxuICBsMTBuSWQ9XCJwcmVzZW50YXRpb25fbW9kZVwiXHJcbiAgbDEwbkxhYmVsPVwicHJlc2VudGF0aW9uX21vZGVfbGFiZWxcIlxyXG4gIFtvcmRlcl09XCIxMDBcIlxyXG4gIGltYWdlPVwiPHN2ZyBzdHlsZT0nd2lkdGg6IDI3cHg7IGhlaWdodDogMjdweDsgbWFyZ2luLXRvcDogLTJweCcgdmlld0JveD0nMCAwIDI0IDI0Jz48cGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J001LDVIMTBWN0g3VjEwSDVWNU0xNCw1SDE5VjEwSDE3VjdIMTRWNU0xNywxNEgxOVYxOUgxNFYxN0gxN1YxNE0xMCwxN1YxOUg1VjE0SDdWMTdIMTBaJyAvPjwvc3ZnPlwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19