import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-stamp-editor/pdf-stamp-editor.component";
import * as i3 from "../pdf-text-editor/pdf-text-editor.component";
import * as i4 from "../pdf-draw-editor/pdf-draw-editor.component";
function PdfEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "pdf-stamp-editor", 3)(2, "pdf-text-editor", 3)(3, "pdf-draw-editor", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r0.showStampEditor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r0.showTextEditor);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("show", ctx_r0.showDrawEditor);
} }
function PdfEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
export class PdfEditorComponent {
    constructor() {
        this.showDrawEditor = true;
        this.showTextEditor = true;
        this.showStampEditor = true;
    }
}
/** @nocollapse */ PdfEditorComponent.ɵfac = function PdfEditorComponent_Factory(t) { return new (t || PdfEditorComponent)(); };
/** @nocollapse */ PdfEditorComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfEditorComponent, selectors: [["pdf-editor"]], inputs: { showDrawEditor: "showDrawEditor", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor" }, decls: 2, vars: 2, consts: [["id", "editorModeButtons", "class", "splitToolbarButton toggled hiddenTinyView", "role", "radiogroup", 4, "ngIf"], ["id", "editorModeSeparator", "class", "verticalToolbarSeparator hiddenTinyView", 4, "ngIf"], ["id", "editorModeButtons", "role", "radiogroup", 1, "splitToolbarButton", "toggled", "hiddenTinyView"], [3, "show"], ["id", "editorModeSeparator", 1, "verticalToolbarSeparator", "hiddenTinyView"]], template: function PdfEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PdfEditorComponent_div_0_Template, 4, 3, "div", 0);
        i0.ɵɵtemplate(1, PdfEditorComponent_div_1_Template, 1, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !!ctx.showStampEditor || !!ctx.showDrawEditor || !!ctx.showTextEditor);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !!ctx.showStampEditor || !!ctx.showDrawEditor || !!ctx.showTextEditor);
    } }, directives: [i1.NgIf, i2.PdfStampEditorComponent, i3.PdfTextEditorComponent, i4.PdfDrawEditorComponent], styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfEditorComponent, [{
        type: Component,
        args: [{ selector: 'pdf-editor', template: "<div\r\n  id=\"editorModeButtons\"\r\n  class=\"splitToolbarButton toggled hiddenTinyView\"\r\n  role=\"radiogroup\"\r\n  *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"\r\n>\r\n  <pdf-stamp-editor [show]=\"showStampEditor\"></pdf-stamp-editor>\r\n  <pdf-text-editor [show]=\"showTextEditor\"></pdf-text-editor>\r\n  <pdf-draw-editor [show]=\"showDrawEditor\"></pdf-draw-editor>\r\n</div>\r\n\r\n<div id=\"editorModeSeparator\" class=\"verticalToolbarSeparator hiddenTinyView\" *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"></div>\r\n", styles: ["button{padding:0}\n"] }]
    }], null, { showDrawEditor: [{
            type: Input
        }], showTextEditor: [{
            type: Input
        }], showStampEditor: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWVkaXRvci9wZGYtZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZWRpdG9yL3BkZi1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNBakQsOEJBS0M7SUFDQyxzQ0FBOEQseUJBQUEseUJBQUE7SUFHaEUsaUJBQU07OztJQUhjLGVBQXdCO0lBQXhCLDZDQUF3QjtJQUN6QixlQUF1QjtJQUF2Qiw0Q0FBdUI7SUFDdkIsZUFBdUI7SUFBdkIsNENBQXVCOzs7SUFHMUMseUJBQXNKOztBREh0SixNQUFNLE9BQU8sa0JBQWtCO0lBTC9CO1FBT1MsbUJBQWMsR0FBeUIsSUFBSSxDQUFDO1FBRzVDLG1CQUFjLEdBQXlCLElBQUksQ0FBQztRQUc1QyxvQkFBZSxHQUF5QixJQUFJLENBQUM7S0FDckQ7O3VHQVRZLGtCQUFrQjtvR0FBbEIsa0JBQWtCO1FDUi9CLG1FQVNNO1FBRU4sbUVBQXNKOztRQVBuSiw0RkFBK0Q7UUFPYSxlQUErRDtRQUEvRCw0RkFBK0Q7O3VGREhqSSxrQkFBa0I7Y0FMOUIsU0FBUzsyQkFDRSxZQUFZO2dCQU1mLGNBQWM7a0JBRHBCLEtBQUs7WUFJQyxjQUFjO2tCQURwQixLQUFLO1lBSUMsZUFBZTtrQkFEckIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZFZGl0b3JDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEcmF3RWRpdG9yOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dUZXh0RWRpdG9yOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dTdGFtcEVkaXRvcjogUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSB0cnVlO1xyXG59XHJcbiIsIjxkaXZcclxuICBpZD1cImVkaXRvck1vZGVCdXR0b25zXCJcclxuICBjbGFzcz1cInNwbGl0VG9vbGJhckJ1dHRvbiB0b2dnbGVkIGhpZGRlblRpbnlWaWV3XCJcclxuICByb2xlPVwicmFkaW9ncm91cFwiXHJcbiAgKm5nSWY9XCIhIXNob3dTdGFtcEVkaXRvciB8fCAhIXNob3dEcmF3RWRpdG9yIHx8ICEhc2hvd1RleHRFZGl0b3JcIlxyXG4+XHJcbiAgPHBkZi1zdGFtcC1lZGl0b3IgW3Nob3ddPVwic2hvd1N0YW1wRWRpdG9yXCI+PC9wZGYtc3RhbXAtZWRpdG9yPlxyXG4gIDxwZGYtdGV4dC1lZGl0b3IgW3Nob3ddPVwic2hvd1RleHRFZGl0b3JcIj48L3BkZi10ZXh0LWVkaXRvcj5cclxuICA8cGRmLWRyYXctZWRpdG9yIFtzaG93XT1cInNob3dEcmF3RWRpdG9yXCI+PC9wZGYtZHJhdy1lZGl0b3I+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBpZD1cImVkaXRvck1vZGVTZXBhcmF0b3JcIiBjbGFzcz1cInZlcnRpY2FsVG9vbGJhclNlcGFyYXRvciBoaWRkZW5UaW55Vmlld1wiICpuZ0lmPVwiISFzaG93U3RhbXBFZGl0b3IgfHwgISFzaG93RHJhd0VkaXRvciB8fCAhIXNob3dUZXh0RWRpdG9yXCI+PC9kaXY+XHJcbiJdfQ==