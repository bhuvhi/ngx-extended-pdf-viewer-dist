import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfOpenFileComponent {
    constructor() {
        this.showOpenFileButton = true;
    }
}
PdfOpenFileComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfOpenFileComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfOpenFileComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfOpenFileComponent, selector: "pdf-open-file", inputs: { showOpenFileButton: "showOpenFileButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  [cssClass]=\"showOpenFileButton | responsiveCSSClass : 'hiddenMediumView'\"\r\n  primaryToolbarId=\"openFile\"\r\n  title=\"Open File\"\r\n  l10nId=\"open_file\"\r\n  l10nLabel=\"open_file_label\"\r\n  image=\"<svg style='width: 24px; height: 20px' viewBox='0 0 24 24'><path fill='currentColor' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z' /></svg>\"\r\n  [order]=\"200\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"], components: [{ type: i1.PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": i2.ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfOpenFileComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-open-file', template: "<pdf-shy-button\r\n  [cssClass]=\"showOpenFileButton | responsiveCSSClass : 'hiddenMediumView'\"\r\n  primaryToolbarId=\"openFile\"\r\n  title=\"Open File\"\r\n  l10nId=\"open_file\"\r\n  l10nLabel=\"open_file_label\"\r\n  image=\"<svg style='width: 24px; height: 20px' viewBox='0 0 24 24'><path fill='currentColor' d='M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z' /></svg>\"\r\n  [order]=\"200\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host{margin-top:0}:host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0}\n"] }]
        }], propDecorators: { showOpenFileButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW9wZW4tZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLW9wZW4tZmlsZS9wZGYtb3Blbi1maWxlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRakQsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU9TLHVCQUFrQixHQUF5QixJQUFJLENBQUM7S0FDeEQ7O2lIQUhZLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDJHQ1JqQywyZkFVQTsyRkRGYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UsZUFBZTs4QkFNbEIsa0JBQWtCO3NCQUR4QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlVmlzaWJpbGl0eSB9IGZyb20gJy4uLy4uL3Jlc3BvbnNpdmUtdmlzaWJpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BkZi1vcGVuLWZpbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtb3Blbi1maWxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wZGYtb3Blbi1maWxlLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBkZk9wZW5GaWxlQ29tcG9uZW50IHtcclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b246IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxufVxyXG4iLCI8cGRmLXNoeS1idXR0b25cclxuICBbY3NzQ2xhc3NdPVwic2hvd09wZW5GaWxlQnV0dG9uIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlbk1lZGl1bVZpZXcnXCJcclxuICBwcmltYXJ5VG9vbGJhcklkPVwib3BlbkZpbGVcIlxyXG4gIHRpdGxlPVwiT3BlbiBGaWxlXCJcclxuICBsMTBuSWQ9XCJvcGVuX2ZpbGVcIlxyXG4gIGwxMG5MYWJlbD1cIm9wZW5fZmlsZV9sYWJlbFwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjRweDsgaGVpZ2h0OiAyMHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE0LDJMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkEyLDIgMCAwLDEgNCwyMFY0QTIsMiAwIDAsMSA2LDJIMTRNMTgsMjBWOUgxM1Y0SDZWMjBIMThNMTIsMTJMMTYsMTZIMTMuNVYxOUgxMC41VjE2SDhMMTIsMTJaJyAvPjwvc3ZnPlwiXHJcbiAgW29yZGVyXT1cIjIwMFwiXHJcbj5cclxuPC9wZGYtc2h5LWJ1dHRvbj5cclxuIl19