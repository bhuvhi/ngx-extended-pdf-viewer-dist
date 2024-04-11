import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfBreakpoints {
}
PdfBreakpoints.xs = 490;
PdfBreakpoints.sm = 560;
PdfBreakpoints.md = 610;
PdfBreakpoints.lg = 660;
PdfBreakpoints.xl = 780;
PdfBreakpoints.xxl = 900;
export class ResponsiveCSSClassPipe {
    transform(visible, defaultClass = 'always-visible') {
        switch (visible) {
            case undefined:
                return defaultClass;
            case false:
                return 'invisible';
            case true:
                return defaultClass;
            case 'always-visible':
                return 'always-visible';
            case 'always-in-secondary-menu':
                return 'always-in-secondary-menu';
            case 'xxs':
                return 'hiddenXXSView';
            case 'xs':
                return 'hiddenTinyView';
            case 'sm':
                return 'hiddenSmallView';
            case 'md':
                return 'hiddenMediumView';
            case 'lg':
                return 'hiddenLargeView';
            case 'xl':
                return 'hiddenXLView';
            case 'xxl':
                return 'hiddenXXLView';
        }
    }
}
/** @nocollapse */ ResponsiveCSSClassPipe.ɵfac = function ResponsiveCSSClassPipe_Factory(t) { return new (t || ResponsiveCSSClassPipe)(); };
/** @nocollapse */ ResponsiveCSSClassPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "responsiveCSSClass", type: ResponsiveCSSClassPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResponsiveCSSClassPipe, [{
        type: Pipe,
        args: [{ name: 'responsiveCSSClass' }]
    }], null, null); })();
export class NegativeResponsiveCSSClassPipe {
    transform(visible) {
        switch (visible) {
            case undefined:
                return 'always-visible';
            case 'always-visible':
            case true:
                return 'invisible';
            case 'invisible':
            case false:
                return 'invisible';
            case 'always-in-secondary-menu':
                return 'always-in-secondary-menu';
            case 'hiddenXXSView':
            case 'xxs':
                return 'visibleXXSView';
            case 'hiddenTinyView':
            case 'xs':
                return 'visibleTinyView';
            case 'sm':
            case 'hiddenSmallView':
                return 'visibleSmallView';
            case 'md':
            case 'hiddenMediumView':
                return 'visibleMediumView';
            case 'lg':
            case 'hiddenLargeView':
                return 'visibleLargeView';
            case 'xl':
            case 'hiddenXLView':
                return 'visibleXLView';
            case 'xxl':
            case 'hiddenXXLView':
                return 'visibleXXLView';
        }
    }
}
/** @nocollapse */ NegativeResponsiveCSSClassPipe.ɵfac = function NegativeResponsiveCSSClassPipe_Factory(t) { return new (t || NegativeResponsiveCSSClassPipe)(); };
/** @nocollapse */ NegativeResponsiveCSSClassPipe.ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "invertForSecondaryToolbar", type: NegativeResponsiveCSSClassPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NegativeResponsiveCSSClassPipe, [{
        type: Pipe,
        args: [{ name: 'invertForSecondaryToolbar' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS12aXNpYmlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9yZXNwb25zaXZlLXZpc2liaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxjQUFjOztBQUNsQixpQkFBRSxHQUFHLEdBQUcsQ0FBQztBQUVULGlCQUFFLEdBQUcsR0FBRyxDQUFDO0FBRVQsaUJBQUUsR0FBRyxHQUFHLENBQUM7QUFFVCxpQkFBRSxHQUFHLEdBQUcsQ0FBQztBQUVULGlCQUFFLEdBQUcsR0FBRyxDQUFDO0FBRVQsa0JBQUcsR0FBRyxHQUFHLENBQUM7QUE0Qm5CLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsU0FBUyxDQUFDLE9BQXlDLEVBQUUsZUFBbUMsZ0JBQWdCO1FBQ3RHLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUNaLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQztZQUNyQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxZQUFZLENBQUM7WUFDdEIsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSywwQkFBMEI7Z0JBQzdCLE9BQU8sMEJBQTBCLENBQUM7WUFDcEMsS0FBSyxLQUFLO2dCQUNSLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGtCQUFrQixDQUFDO1lBQzVCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGNBQWMsQ0FBQztZQUN4QixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxlQUFlLENBQUM7U0FDMUI7SUFDSCxDQUFDOzsrR0E1QlUsc0JBQXNCO2dJQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0FBaUNwQyxNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLFNBQVMsQ0FBQyxPQUFrRDtRQUMxRCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDWixPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssZ0JBQWdCLENBQUM7WUFDdEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQztZQUNyQixLQUFLLDBCQUEwQjtnQkFDN0IsT0FBTywwQkFBMEIsQ0FBQztZQUNwQyxLQUFLLGVBQWUsQ0FBQztZQUNyQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLGdCQUFnQixDQUFDO1lBQ3RCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxtQkFBbUIsQ0FBQztZQUM3QixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLGtCQUFrQixDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxjQUFjO2dCQUNqQixPQUFPLGVBQWUsQ0FBQztZQUN6QixLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxnQkFBZ0IsQ0FBQztTQUMzQjtJQUNILENBQUM7OytIQW5DVSw4QkFBOEI7K0lBQTlCLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBRDFDLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVWaXNpYmlsaXR5ID0gYm9vbGVhbiB8ICdhbHdheXMtdmlzaWJsZScgfCAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JyB8ICd4eHMnIHwgJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCAneHhsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQZGZCcmVha3BvaW50cyB7XHJcbiAgc3RhdGljIHhzID0gNDkwO1xyXG5cclxuICBzdGF0aWMgc20gPSA1NjA7XHJcblxyXG4gIHN0YXRpYyBtZCA9IDYxMDtcclxuXHJcbiAgc3RhdGljIGxnID0gNjYwO1xyXG5cclxuICBzdGF0aWMgeGwgPSA3ODA7XHJcblxyXG4gIHN0YXRpYyB4eGwgPSA5MDA7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVDU1NDbGFzcyA9XHJcbiAgfCAnaGlkZGVuWFhTVmlldydcclxuICB8ICdoaWRkZW5UaW55VmlldydcclxuICB8ICdoaWRkZW5TbWFsbFZpZXcnXHJcbiAgfCAnaGlkZGVuTWVkaXVtVmlldydcclxuICB8ICdoaWRkZW5MYXJnZVZpZXcnXHJcbiAgfCAnaGlkZGVuWExWaWV3J1xyXG4gIHwgJ2hpZGRlblhYTFZpZXcnXHJcbiAgfCAnaW52aXNpYmxlJ1xyXG4gIHwgJ2Fsd2F5cy12aXNpYmxlJ1xyXG4gIHwgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlQ1NTQ2xhc3NJblNlY29uZGFyeVRvb2xiYXIgPVxyXG4gIHwgJ3Zpc2libGVYWFNWaWV3J1xyXG4gIHwgJ3Zpc2libGVUaW55VmlldydcclxuICB8ICd2aXNpYmxlU21hbGxWaWV3J1xyXG4gIHwgJ3Zpc2libGVNZWRpdW1WaWV3J1xyXG4gIHwgJ3Zpc2libGVMYXJnZVZpZXcnXHJcbiAgfCAndmlzaWJsZVhMVmlldydcclxuICB8ICd2aXNpYmxlWFhMVmlldydcclxuICB8ICdpbnZpc2libGUnXHJcbiAgfCAnYWx3YXlzLXZpc2libGUnXHJcbiAgfCAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JztcclxuXHJcbkBQaXBlKHsgbmFtZTogJ3Jlc3BvbnNpdmVDU1NDbGFzcycgfSlcclxuZXhwb3J0IGNsYXNzIFJlc3BvbnNpdmVDU1NDbGFzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmlzaWJsZTogUmVzcG9uc2l2ZVZpc2liaWxpdHkgfCB1bmRlZmluZWQsIGRlZmF1bHRDbGFzczogUmVzcG9uc2l2ZUNTU0NsYXNzID0gJ2Fsd2F5cy12aXNpYmxlJyk6IFJlc3BvbnNpdmVDU1NDbGFzcyB7XHJcbiAgICBzd2l0Y2ggKHZpc2libGUpIHtcclxuICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDbGFzcztcclxuICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICByZXR1cm4gJ2ludmlzaWJsZSc7XHJcbiAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICByZXR1cm4gZGVmYXVsdENsYXNzO1xyXG4gICAgICBjYXNlICdhbHdheXMtdmlzaWJsZSc6XHJcbiAgICAgICAgcmV0dXJuICdhbHdheXMtdmlzaWJsZSc7XHJcbiAgICAgIGNhc2UgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc6XHJcbiAgICAgICAgcmV0dXJuICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnO1xyXG4gICAgICBjYXNlICd4eHMnOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuWFhTVmlldyc7XHJcbiAgICAgIGNhc2UgJ3hzJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlblRpbnlWaWV3JztcclxuICAgICAgY2FzZSAnc20nOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuU21hbGxWaWV3JztcclxuICAgICAgY2FzZSAnbWQnOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuTWVkaXVtVmlldyc7XHJcbiAgICAgIGNhc2UgJ2xnJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlbkxhcmdlVmlldyc7XHJcbiAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlblhMVmlldyc7XHJcbiAgICAgIGNhc2UgJ3h4bCc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5YWExWaWV3JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBQaXBlKHsgbmFtZTogJ2ludmVydEZvclNlY29uZGFyeVRvb2xiYXInIH0pXHJcbmV4cG9ydCBjbGFzcyBOZWdhdGl2ZVJlc3BvbnNpdmVDU1NDbGFzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICB0cmFuc2Zvcm0odmlzaWJsZTogUmVzcG9uc2l2ZUNTU0NsYXNzIHwgUmVzcG9uc2l2ZVZpc2liaWxpdHkpOiBSZXNwb25zaXZlQ1NTQ2xhc3NJblNlY29uZGFyeVRvb2xiYXIge1xyXG4gICAgc3dpdGNoICh2aXNpYmxlKSB7XHJcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgIHJldHVybiAnYWx3YXlzLXZpc2libGUnO1xyXG4gICAgICBjYXNlICdhbHdheXMtdmlzaWJsZSc6XHJcbiAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICByZXR1cm4gJ2ludmlzaWJsZSc7XHJcbiAgICAgIGNhc2UgJ2ludmlzaWJsZSc6XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgcmV0dXJuICdpbnZpc2libGUnO1xyXG4gICAgICBjYXNlICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnOlxyXG4gICAgICAgIHJldHVybiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JztcclxuICAgICAgY2FzZSAnaGlkZGVuWFhTVmlldyc6XHJcbiAgICAgIGNhc2UgJ3h4cyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlWFhTVmlldyc7XHJcbiAgICAgIGNhc2UgJ2hpZGRlblRpbnlWaWV3JzpcclxuICAgICAgY2FzZSAneHMnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZVRpbnlWaWV3JztcclxuICAgICAgY2FzZSAnc20nOlxyXG4gICAgICBjYXNlICdoaWRkZW5TbWFsbFZpZXcnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZVNtYWxsVmlldyc7XHJcbiAgICAgIGNhc2UgJ21kJzpcclxuICAgICAgY2FzZSAnaGlkZGVuTWVkaXVtVmlldyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlTWVkaXVtVmlldyc7XHJcbiAgICAgIGNhc2UgJ2xnJzpcclxuICAgICAgY2FzZSAnaGlkZGVuTGFyZ2VWaWV3JzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVMYXJnZVZpZXcnO1xyXG4gICAgICBjYXNlICd4bCc6XHJcbiAgICAgIGNhc2UgJ2hpZGRlblhMVmlldyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlWExWaWV3JztcclxuICAgICAgY2FzZSAneHhsJzpcclxuICAgICAgY2FzZSAnaGlkZGVuWFhMVmlldyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlWFhMVmlldyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==