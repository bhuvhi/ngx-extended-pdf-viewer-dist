import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pdf-draw-editor/pdf-draw-editor.component";
import * as i3 from "../pdf-highlight-editor/pdf-highlight-editor.component";
import * as i4 from "../pdf-stamp-editor/pdf-stamp-editor.component";
import * as i5 from "../pdf-text-editor/pdf-text-editor.component";
function PdfEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "pdf-highlight-editor", 3)(2, "pdf-text-editor", 3)(3, "pdf-stamp-editor", 3)(4, "pdf-draw-editor", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r0.showHighlightEditor);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r0.showTextEditor);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r0.showStampEditor);
    i0.ɵɵadvance();
    i0.ɵɵproperty("show", ctx_r0.showDrawEditor);
} }
function PdfEditorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
export class PdfEditorComponent {
    showDrawEditor = true;
    showHighlightEditor = true;
    showTextEditor = true;
    showStampEditor = true;
    /** @nocollapse */ static ɵfac = function PdfEditorComponent_Factory(t) { return new (t || PdfEditorComponent)(); };
    /** @nocollapse */ static ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: PdfEditorComponent, selectors: [["pdf-editor"]], inputs: { showDrawEditor: "showDrawEditor", showHighlightEditor: "showHighlightEditor", showTextEditor: "showTextEditor", showStampEditor: "showStampEditor" }, decls: 2, vars: 2, consts: [["id", "editorModeButtons", "class", "splitToolbarButton toggled hiddenTinyView", "role", "radiogroup", 4, "ngIf"], ["id", "editorModeSeparator", "class", "verticalToolbarSeparator hiddenTinyView", 4, "ngIf"], ["id", "editorModeButtons", "role", "radiogroup", 1, "splitToolbarButton", "toggled", "hiddenTinyView"], [3, "show"], ["id", "editorModeSeparator", 1, "verticalToolbarSeparator", "hiddenTinyView"]], template: function PdfEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PdfEditorComponent_div_0_Template, 5, 4, "div", 0)(1, PdfEditorComponent_div_1_Template, 1, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !!ctx.showHighlightEditor || !!ctx.showStampEditor || !!ctx.showDrawEditor || !!ctx.showTextEditor);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !!ctx.showStampEditor || !!ctx.showDrawEditor || !!ctx.showTextEditor);
        } }, dependencies: [i1.NgIf, i2.PdfDrawEditorComponent, i3.PdfHighlightEditorComponent, i4.PdfStampEditorComponent, i5.PdfTextEditorComponent], styles: ["button[_ngcontent-%COMP%]{padding:0}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfEditorComponent, [{
        type: Component,
        args: [{ selector: 'pdf-editor', template: "<div\r\n  id=\"editorModeButtons\"\r\n  class=\"splitToolbarButton toggled hiddenTinyView\"\r\n  role=\"radiogroup\"\r\n  *ngIf=\"!!showHighlightEditor || !!showStampEditor || !!showDrawEditor || !!showTextEditor\"\r\n>\r\n  <pdf-highlight-editor [show]=\"showHighlightEditor\"></pdf-highlight-editor>\r\n  <pdf-text-editor [show]=\"showTextEditor\"></pdf-text-editor>\r\n  <pdf-stamp-editor [show]=\"showStampEditor\"></pdf-stamp-editor>\r\n  <pdf-draw-editor [show]=\"showDrawEditor\"></pdf-draw-editor>\r\n</div>\r\n\r\n<div id=\"editorModeSeparator\" class=\"verticalToolbarSeparator hiddenTinyView\" *ngIf=\"!!showStampEditor || !!showDrawEditor || !!showTextEditor\"></div>\r\n", styles: ["button{padding:0}\n"] }]
    }], null, { showDrawEditor: [{
            type: Input
        }], showHighlightEditor: [{
            type: Input
        }], showTextEditor: [{
            type: Input
        }], showStampEditor: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PdfEditorComponent, { className: "PdfEditorComponent", filePath: "lib\\toolbar\\pdf-editor\\pdf-editor.component.ts", lineNumber: 9 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci9zcmMvbGliL3Rvb2xiYXIvcGRmLWVkaXRvci9wZGYtZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtZWRpdG9yL3BkZi1lZGl0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDQWpELDhCQUtDO0lBSUMsQUFEQSxBQURBLEFBREEsMENBQTBFLHlCQUNmLDBCQUNHLHlCQUNIO0lBQzdELGlCQUFNOzs7SUFKa0IsY0FBNEI7SUFBNUIsaURBQTRCO0lBQ2pDLGNBQXVCO0lBQXZCLDRDQUF1QjtJQUN0QixjQUF3QjtJQUF4Qiw2Q0FBd0I7SUFDekIsY0FBdUI7SUFBdkIsNENBQXVCOzs7SUFHMUMseUJBQXNKOztBREp0SixNQUFNLE9BQU8sa0JBQWtCO0lBRXRCLGNBQWMsR0FBeUIsSUFBSSxDQUFDO0lBRzVDLG1CQUFtQixHQUF5QixJQUFJLENBQUM7SUFHakQsY0FBYyxHQUF5QixJQUFJLENBQUM7SUFHNUMsZUFBZSxHQUF5QixJQUFJLENBQUM7K0ZBWHpDLGtCQUFrQjs0RkFBbEIsa0JBQWtCO1lDSS9CLEFBWkEsbUVBS0Msc0RBTytJOztZQVI3SSx5SEFBd0Y7WUFRWixjQUErRDtZQUEvRCw0RkFBK0Q7OztpRkRKakksa0JBQWtCO2NBTDlCLFNBQVM7MkJBQ0UsWUFBWTtnQkFNZixjQUFjO2tCQURwQixLQUFLO1lBSUMsbUJBQW1CO2tCQUR6QixLQUFLO1lBSUMsY0FBYztrQkFEcEIsS0FBSztZQUlDLGVBQWU7a0JBRHJCLEtBQUs7O2tGQVZLLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZVZpc2liaWxpdHkgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwZGYtZWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWVkaXRvci5jb21wb25lbnQuY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZFZGl0b3JDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dEcmF3RWRpdG9yOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHNob3dIaWdobGlnaHRFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1RleHRFZGl0b3I6IFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2hvd1N0YW1wRWRpdG9yOiBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IHRydWU7XHJcbn1cclxuIiwiPGRpdlxyXG4gIGlkPVwiZWRpdG9yTW9kZUJ1dHRvbnNcIlxyXG4gIGNsYXNzPVwic3BsaXRUb29sYmFyQnV0dG9uIHRvZ2dsZWQgaGlkZGVuVGlueVZpZXdcIlxyXG4gIHJvbGU9XCJyYWRpb2dyb3VwXCJcclxuICAqbmdJZj1cIiEhc2hvd0hpZ2hsaWdodEVkaXRvciB8fCAhIXNob3dTdGFtcEVkaXRvciB8fCAhIXNob3dEcmF3RWRpdG9yIHx8ICEhc2hvd1RleHRFZGl0b3JcIlxyXG4+XHJcbiAgPHBkZi1oaWdobGlnaHQtZWRpdG9yIFtzaG93XT1cInNob3dIaWdobGlnaHRFZGl0b3JcIj48L3BkZi1oaWdobGlnaHQtZWRpdG9yPlxyXG4gIDxwZGYtdGV4dC1lZGl0b3IgW3Nob3ddPVwic2hvd1RleHRFZGl0b3JcIj48L3BkZi10ZXh0LWVkaXRvcj5cclxuICA8cGRmLXN0YW1wLWVkaXRvciBbc2hvd109XCJzaG93U3RhbXBFZGl0b3JcIj48L3BkZi1zdGFtcC1lZGl0b3I+XHJcbiAgPHBkZi1kcmF3LWVkaXRvciBbc2hvd109XCJzaG93RHJhd0VkaXRvclwiPjwvcGRmLWRyYXctZWRpdG9yPlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgaWQ9XCJlZGl0b3JNb2RlU2VwYXJhdG9yXCIgY2xhc3M9XCJ2ZXJ0aWNhbFRvb2xiYXJTZXBhcmF0b3IgaGlkZGVuVGlueVZpZXdcIiAqbmdJZj1cIiEhc2hvd1N0YW1wRWRpdG9yIHx8ICEhc2hvd0RyYXdFZGl0b3IgfHwgISFzaG93VGV4dEVkaXRvclwiPjwvZGl2PlxyXG4iXX0=