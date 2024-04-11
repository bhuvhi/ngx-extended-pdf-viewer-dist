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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS12aXNpYmlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9yZXNwb25zaXZlLXZpc2liaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxjQUFjOztBQUNsQixpQkFBRSxHQUFHLEdBQUcsQ0FBQztBQUVULGlCQUFFLEdBQUcsR0FBRyxDQUFDO0FBRVQsaUJBQUUsR0FBRyxHQUFHLENBQUM7QUFFVCxpQkFBRSxHQUFHLEdBQUcsQ0FBQztBQUVULGlCQUFFLEdBQUcsR0FBRyxDQUFDO0FBRVQsa0JBQUcsR0FBRyxHQUFHLENBQUM7QUE0Qm5CLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsU0FBUyxDQUFDLE9BQXlDLEVBQUUsZUFBbUMsZ0JBQWdCO1FBQ3RHLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUNaLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQztZQUNyQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxZQUFZLENBQUM7WUFDdEIsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSywwQkFBMEI7Z0JBQzdCLE9BQU8sMEJBQTBCLENBQUM7WUFDcEMsS0FBSyxLQUFLO2dCQUNSLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGtCQUFrQixDQUFDO1lBQzVCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGNBQWMsQ0FBQztZQUN4QixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxlQUFlLENBQUM7U0FDMUI7SUFDSCxDQUFDOzsrR0E1QlUsc0JBQXNCO2dJQUF0QixzQkFBc0I7dUZBQXRCLHNCQUFzQjtjQURsQyxJQUFJO2VBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0FBaUNwQyxNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLFNBQVMsQ0FBQyxPQUFrRDtRQUMxRCxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssU0FBUztnQkFDWixPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssZ0JBQWdCLENBQUM7WUFDdEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssV0FBVyxDQUFDO1lBQ2pCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQztZQUNyQixLQUFLLDBCQUEwQjtnQkFDN0IsT0FBTywwQkFBMEIsQ0FBQztZQUNwQyxLQUFLLGVBQWUsQ0FBQztZQUNyQixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLGdCQUFnQixDQUFDO1lBQ3RCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxtQkFBbUIsQ0FBQztZQUM3QixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLGtCQUFrQixDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxjQUFjO2dCQUNqQixPQUFPLGVBQWUsQ0FBQztZQUN6QixLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxnQkFBZ0IsQ0FBQztTQUMzQjtJQUNILENBQUM7OytIQW5DVSw4QkFBOEI7K0lBQTlCLDhCQUE4Qjt1RkFBOUIsOEJBQThCO2NBRDFDLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSwyQkFBMkIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBib29sZWFuIHwgJ2Fsd2F5cy12aXNpYmxlJyB8ICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xuXG5leHBvcnQgY2xhc3MgUGRmQnJlYWtwb2ludHMge1xuICBzdGF0aWMgeHMgPSA0OTA7XG5cbiAgc3RhdGljIHNtID0gNTYwO1xuXG4gIHN0YXRpYyBtZCA9IDYxMDtcblxuICBzdGF0aWMgbGcgPSA2NjA7XG5cbiAgc3RhdGljIHhsID0gNzgwO1xuXG4gIHN0YXRpYyB4eGwgPSA5MDA7XG59XG5cbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVDU1NDbGFzcyA9XG4gIHwgJ2hpZGRlblhYU1ZpZXcnXG4gIHwgJ2hpZGRlblRpbnlWaWV3J1xuICB8ICdoaWRkZW5TbWFsbFZpZXcnXG4gIHwgJ2hpZGRlbk1lZGl1bVZpZXcnXG4gIHwgJ2hpZGRlbkxhcmdlVmlldydcbiAgfCAnaGlkZGVuWExWaWV3J1xuICB8ICdoaWRkZW5YWExWaWV3J1xuICB8ICdpbnZpc2libGUnXG4gIHwgJ2Fsd2F5cy12aXNpYmxlJ1xuICB8ICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnO1xuXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlQ1NTQ2xhc3NJblNlY29uZGFyeVRvb2xiYXIgPVxuICB8ICd2aXNpYmxlWFhTVmlldydcbiAgfCAndmlzaWJsZVRpbnlWaWV3J1xuICB8ICd2aXNpYmxlU21hbGxWaWV3J1xuICB8ICd2aXNpYmxlTWVkaXVtVmlldydcbiAgfCAndmlzaWJsZUxhcmdlVmlldydcbiAgfCAndmlzaWJsZVhMVmlldydcbiAgfCAndmlzaWJsZVhYTFZpZXcnXG4gIHwgJ2ludmlzaWJsZSdcbiAgfCAnYWx3YXlzLXZpc2libGUnXG4gIHwgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc7XG5cbkBQaXBlKHsgbmFtZTogJ3Jlc3BvbnNpdmVDU1NDbGFzcycgfSlcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2aXNpYmxlOiBSZXNwb25zaXZlVmlzaWJpbGl0eSB8IHVuZGVmaW5lZCwgZGVmYXVsdENsYXNzOiBSZXNwb25zaXZlQ1NTQ2xhc3MgPSAnYWx3YXlzLXZpc2libGUnKTogUmVzcG9uc2l2ZUNTU0NsYXNzIHtcbiAgICBzd2l0Y2ggKHZpc2libGUpIHtcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gZGVmYXVsdENsYXNzO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgcmV0dXJuICdpbnZpc2libGUnO1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICByZXR1cm4gZGVmYXVsdENsYXNzO1xuICAgICAgY2FzZSAnYWx3YXlzLXZpc2libGUnOlxuICAgICAgICByZXR1cm4gJ2Fsd2F5cy12aXNpYmxlJztcbiAgICAgIGNhc2UgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc6XG4gICAgICAgIHJldHVybiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JztcbiAgICAgIGNhc2UgJ3h4cyc6XG4gICAgICAgIHJldHVybiAnaGlkZGVuWFhTVmlldyc7XG4gICAgICBjYXNlICd4cyc6XG4gICAgICAgIHJldHVybiAnaGlkZGVuVGlueVZpZXcnO1xuICAgICAgY2FzZSAnc20nOlxuICAgICAgICByZXR1cm4gJ2hpZGRlblNtYWxsVmlldyc7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICAgIHJldHVybiAnaGlkZGVuTWVkaXVtVmlldyc7XG4gICAgICBjYXNlICdsZyc6XG4gICAgICAgIHJldHVybiAnaGlkZGVuTGFyZ2VWaWV3JztcbiAgICAgIGNhc2UgJ3hsJzpcbiAgICAgICAgcmV0dXJuICdoaWRkZW5YTFZpZXcnO1xuICAgICAgY2FzZSAneHhsJzpcbiAgICAgICAgcmV0dXJuICdoaWRkZW5YWExWaWV3JztcbiAgICB9XG4gIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAnaW52ZXJ0Rm9yU2Vjb25kYXJ5VG9vbGJhcicgfSlcbmV4cG9ydCBjbGFzcyBOZWdhdGl2ZVJlc3BvbnNpdmVDU1NDbGFzc1BpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZpc2libGU6IFJlc3BvbnNpdmVDU1NDbGFzcyB8IFJlc3BvbnNpdmVWaXNpYmlsaXR5KTogUmVzcG9uc2l2ZUNTU0NsYXNzSW5TZWNvbmRhcnlUb29sYmFyIHtcbiAgICBzd2l0Y2ggKHZpc2libGUpIHtcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gJ2Fsd2F5cy12aXNpYmxlJztcbiAgICAgIGNhc2UgJ2Fsd2F5cy12aXNpYmxlJzpcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgcmV0dXJuICdpbnZpc2libGUnO1xuICAgICAgY2FzZSAnaW52aXNpYmxlJzpcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHJldHVybiAnaW52aXNpYmxlJztcbiAgICAgIGNhc2UgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc6XG4gICAgICAgIHJldHVybiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JztcbiAgICAgIGNhc2UgJ2hpZGRlblhYU1ZpZXcnOlxuICAgICAgY2FzZSAneHhzJzpcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlWFhTVmlldyc7XG4gICAgICBjYXNlICdoaWRkZW5UaW55Vmlldyc6XG4gICAgICBjYXNlICd4cyc6XG4gICAgICAgIHJldHVybiAndmlzaWJsZVRpbnlWaWV3JztcbiAgICAgIGNhc2UgJ3NtJzpcbiAgICAgIGNhc2UgJ2hpZGRlblNtYWxsVmlldyc6XG4gICAgICAgIHJldHVybiAndmlzaWJsZVNtYWxsVmlldyc7XG4gICAgICBjYXNlICdtZCc6XG4gICAgICBjYXNlICdoaWRkZW5NZWRpdW1WaWV3JzpcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlTWVkaXVtVmlldyc7XG4gICAgICBjYXNlICdsZyc6XG4gICAgICBjYXNlICdoaWRkZW5MYXJnZVZpZXcnOlxuICAgICAgICByZXR1cm4gJ3Zpc2libGVMYXJnZVZpZXcnO1xuICAgICAgY2FzZSAneGwnOlxuICAgICAgY2FzZSAnaGlkZGVuWExWaWV3JzpcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlWExWaWV3JztcbiAgICAgIGNhc2UgJ3h4bCc6XG4gICAgICBjYXNlICdoaWRkZW5YWExWaWV3JzpcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlWFhMVmlldyc7XG4gICAgfVxuICB9XG59XG4iXX0=