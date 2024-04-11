import { OnChanges, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ResponsiveCSSClass } from '../../responsive-visibility';
import { PdfShyButtonService } from './pdf-shy-button-service';
import * as i0 from "@angular/core";
export declare class PdfShyButtonComponent implements OnInit, OnChanges {
    private pdfShyButtonServiceService;
    private sanitizer;
    primaryToolbarId: string;
    secondaryMenuId: string;
    cssClass: ResponsiveCSSClass;
    eventBusName: string | undefined;
    l10nId: string;
    l10nLabel: string;
    title: string;
    toggled: boolean;
    disabled: boolean;
    order: number;
    action: (() => void) | undefined;
    closeOnClick: boolean;
    onlySecondaryMenu: boolean;
    private _imageHtml;
    get imageHtml(): SafeHtml;
    set image(value: string);
    constructor(pdfShyButtonServiceService: PdfShyButtonService, sanitizer: DomSanitizer);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    private sanitizeHtml;
    onClick(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfShyButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfShyButtonComponent, "pdf-shy-button", never, { "primaryToolbarId": "primaryToolbarId"; "secondaryMenuId": "secondaryMenuId"; "cssClass": "cssClass"; "eventBusName": "eventBusName"; "l10nId": "l10nId"; "l10nLabel": "l10nLabel"; "title": "title"; "toggled": "toggled"; "disabled": "disabled"; "order": "order"; "action": "action"; "closeOnClick": "closeOnClick"; "onlySecondaryMenu": "onlySecondaryMenu"; "image": "image"; }, {}, never, ["*"]>;
}
