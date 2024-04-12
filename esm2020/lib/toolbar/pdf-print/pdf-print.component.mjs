import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../pdf-shy-button/pdf-shy-button.component";
import * as i2 from "../../responsive-visibility";
export class PdfPrintComponent {
    constructor() {
        this.showPrintButton = true;
    }
}
PdfPrintComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPrintComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PdfPrintComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.4.0", type: PdfPrintComponent, selector: "pdf-print", inputs: { showPrintButton: "showPrintButton" }, ngImport: i0, template: "<pdf-shy-button\r\n  primaryToolbarId=\"print\"\r\n  [cssClass]=\"showPrintButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Print\"\r\n  l10nId=\"print\"\r\n  l10nLabel=\"print\"\r\n  [order]=\"300\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"], components: [{ type: i1.PdfShyButtonComponent, selector: "pdf-shy-button", inputs: ["primaryToolbarId", "secondaryMenuId", "cssClass", "eventBusName", "l10nId", "l10nLabel", "title", "toggled", "disabled", "order", "action", "closeOnClick", "onlySecondaryMenu", "image"] }], pipes: { "responsiveCSSClass": i2.ResponsiveCSSClassPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfPrintComponent, decorators: [{
            type: Component,
            args: [{ selector: 'pdf-print', template: "<pdf-shy-button\r\n  primaryToolbarId=\"print\"\r\n  [cssClass]=\"showPrintButton | responsiveCSSClass : 'hiddenSmallView'\"\r\n  title=\"Print\"\r\n  l10nId=\"print\"\r\n  l10nLabel=\"print\"\r\n  [order]=\"300\"\r\n  image=\"<svg style='width: 22px; height: 22px' viewBox='0 0 24 24'><path fill='currentColor' d='M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z' /></svg>\"\r\n>\r\n</pdf-shy-button>\r\n", styles: [":host:focus{outline:none}button:focus{outline:none}svg:focus{outline:none}button{padding:0;margin-top:0;margin-bottom:0}\n"] }]
        }], propDecorators: { showPrintButton: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXByaW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUWpELE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFPUyxvQkFBZSxHQUF5QixJQUFJLENBQUM7S0FDckQ7OzhHQUhZLGlCQUFpQjtrR0FBakIsaUJBQWlCLGlHQ1I5QixpZ0JBVUE7MkZERmEsaUJBQWlCO2tCQUw3QixTQUFTOytCQUNFLFdBQVc7OEJBTWQsZUFBZTtzQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtcHJpbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtcHJpbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BkZi1wcmludC5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZQcmludENvbXBvbmVudCB7XHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcbn1cclxuIiwiPHBkZi1zaHktYnV0dG9uXHJcbiAgcHJpbWFyeVRvb2xiYXJJZD1cInByaW50XCJcclxuICBbY3NzQ2xhc3NdPVwic2hvd1ByaW50QnV0dG9uIHwgcmVzcG9uc2l2ZUNTU0NsYXNzIDogJ2hpZGRlblNtYWxsVmlldydcIlxyXG4gIHRpdGxlPVwiUHJpbnRcIlxyXG4gIGwxMG5JZD1cInByaW50XCJcclxuICBsMTBuTGFiZWw9XCJwcmludFwiXHJcbiAgW29yZGVyXT1cIjMwMFwiXHJcbiAgaW1hZ2U9XCI8c3ZnIHN0eWxlPSd3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4JyB2aWV3Qm94PScwIDAgMjQgMjQnPjxwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTE4LDNINlY3SDE4TTE5LDEyQTEsMSAwIDAsMSAxOCwxMUExLDEgMCAwLDEgMTksMTBBMSwxIDAgMCwxIDIwLDExQTEsMSAwIDAsMSAxOSwxMk0xNiwxOUg4VjE0SDE2TTE5LDhINUEzLDMgMCAwLDAgMiwxMVYxN0g2VjIxSDE4VjE3SDIyVjExQTMsMyAwIDAsMCAxOSw4WicgLz48L3N2Zz5cIlxyXG4+XHJcbjwvcGRmLXNoeS1idXR0b24+XHJcbiJdfQ==