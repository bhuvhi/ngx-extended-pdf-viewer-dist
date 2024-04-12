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
ResponsiveCSSClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ResponsiveCSSClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ResponsiveCSSClassPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ResponsiveCSSClassPipe, name: "responsiveCSSClass" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: ResponsiveCSSClassPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'responsiveCSSClass' }]
        }] });
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
NegativeResponsiveCSSClassPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NegativeResponsiveCSSClassPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NegativeResponsiveCSSClassPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NegativeResponsiveCSSClassPipe, name: "invertForSecondaryToolbar" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: NegativeResponsiveCSSClassPipe, decorators: [{
            type: Pipe,
            args: [{ name: 'invertForSecondaryToolbar' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS12aXNpYmlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9yZXNwb25zaXZlLXZpc2liaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxjQUFjOztBQUNsQixpQkFBRSxHQUFHLEdBQUcsQ0FBQztBQUVULGlCQUFFLEdBQUcsR0FBRyxDQUFDO0FBRVQsaUJBQUUsR0FBRyxHQUFHLENBQUM7QUFFVCxpQkFBRSxHQUFHLEdBQUcsQ0FBQztBQUVULGlCQUFFLEdBQUcsR0FBRyxDQUFDO0FBRVQsa0JBQUcsR0FBRyxHQUFHLENBQUM7QUE0Qm5CLE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsU0FBUyxDQUFDLE9BQXlDLEVBQUUsZUFBbUMsZ0JBQWdCO1FBQ3RHLFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUNaLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLEtBQUssS0FBSztnQkFDUixPQUFPLFdBQVcsQ0FBQztZQUNyQixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxZQUFZLENBQUM7WUFDdEIsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSywwQkFBMEI7Z0JBQzdCLE9BQU8sMEJBQTBCLENBQUM7WUFDcEMsS0FBSyxLQUFLO2dCQUNSLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGtCQUFrQixDQUFDO1lBQzVCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGlCQUFpQixDQUFDO1lBQzNCLEtBQUssSUFBSTtnQkFDUCxPQUFPLGNBQWMsQ0FBQztZQUN4QixLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxlQUFlLENBQUM7U0FDMUI7SUFDSCxDQUFDOzttSEE1QlUsc0JBQXNCO2lIQUF0QixzQkFBc0I7MkZBQXRCLHNCQUFzQjtrQkFEbEMsSUFBSTttQkFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFpQ3BDLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsU0FBUyxDQUFDLE9BQWtEO1FBQzFELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUNaLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxnQkFBZ0IsQ0FBQztZQUN0QixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxXQUFXLENBQUM7WUFDckIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssMEJBQTBCO2dCQUM3QixPQUFPLDBCQUEwQixDQUFDO1lBQ3BDLEtBQUssZUFBZSxDQUFDO1lBQ3JCLEtBQUssS0FBSztnQkFDUixPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssZ0JBQWdCLENBQUM7WUFDdEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxrQkFBa0IsQ0FBQztZQUM1QixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLG1CQUFtQixDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxlQUFlO2dCQUNsQixPQUFPLGdCQUFnQixDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7MkhBbkNVLDhCQUE4Qjt5SEFBOUIsOEJBQThCOzJGQUE5Qiw4QkFBOEI7a0JBRDFDLElBQUk7bUJBQUMsRUFBRSxJQUFJLEVBQUUsMkJBQTJCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlVmlzaWJpbGl0eSA9IGJvb2xlYW4gfCAnYWx3YXlzLXZpc2libGUnIHwgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudScgfCAneHhzJyB8ICd4cycgfCAnc20nIHwgJ21kJyB8ICdsZycgfCAneGwnIHwgJ3h4bCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGRmQnJlYWtwb2ludHMge1xyXG4gIHN0YXRpYyB4cyA9IDQ5MDtcclxuXHJcbiAgc3RhdGljIHNtID0gNTYwO1xyXG5cclxuICBzdGF0aWMgbWQgPSA2MTA7XHJcblxyXG4gIHN0YXRpYyBsZyA9IDY2MDtcclxuXHJcbiAgc3RhdGljIHhsID0gNzgwO1xyXG5cclxuICBzdGF0aWMgeHhsID0gOTAwO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZXNwb25zaXZlQ1NTQ2xhc3MgPVxyXG4gIHwgJ2hpZGRlblhYU1ZpZXcnXHJcbiAgfCAnaGlkZGVuVGlueVZpZXcnXHJcbiAgfCAnaGlkZGVuU21hbGxWaWV3J1xyXG4gIHwgJ2hpZGRlbk1lZGl1bVZpZXcnXHJcbiAgfCAnaGlkZGVuTGFyZ2VWaWV3J1xyXG4gIHwgJ2hpZGRlblhMVmlldydcclxuICB8ICdoaWRkZW5YWExWaWV3J1xyXG4gIHwgJ2ludmlzaWJsZSdcclxuICB8ICdhbHdheXMtdmlzaWJsZSdcclxuICB8ICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZUNTU0NsYXNzSW5TZWNvbmRhcnlUb29sYmFyID1cclxuICB8ICd2aXNpYmxlWFhTVmlldydcclxuICB8ICd2aXNpYmxlVGlueVZpZXcnXHJcbiAgfCAndmlzaWJsZVNtYWxsVmlldydcclxuICB8ICd2aXNpYmxlTWVkaXVtVmlldydcclxuICB8ICd2aXNpYmxlTGFyZ2VWaWV3J1xyXG4gIHwgJ3Zpc2libGVYTFZpZXcnXHJcbiAgfCAndmlzaWJsZVhYTFZpZXcnXHJcbiAgfCAnaW52aXNpYmxlJ1xyXG4gIHwgJ2Fsd2F5cy12aXNpYmxlJ1xyXG4gIHwgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc7XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdyZXNwb25zaXZlQ1NTQ2xhc3MnIH0pXHJcbmV4cG9ydCBjbGFzcyBSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZpc2libGU6IFJlc3BvbnNpdmVWaXNpYmlsaXR5IHwgdW5kZWZpbmVkLCBkZWZhdWx0Q2xhc3M6IFJlc3BvbnNpdmVDU1NDbGFzcyA9ICdhbHdheXMtdmlzaWJsZScpOiBSZXNwb25zaXZlQ1NTQ2xhc3Mge1xyXG4gICAgc3dpdGNoICh2aXNpYmxlKSB7XHJcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0Q2xhc3M7XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgcmV0dXJuICdpbnZpc2libGUnO1xyXG4gICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDbGFzcztcclxuICAgICAgY2FzZSAnYWx3YXlzLXZpc2libGUnOlxyXG4gICAgICAgIHJldHVybiAnYWx3YXlzLXZpc2libGUnO1xyXG4gICAgICBjYXNlICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnOlxyXG4gICAgICAgIHJldHVybiAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JztcclxuICAgICAgY2FzZSAneHhzJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlblhYU1ZpZXcnO1xyXG4gICAgICBjYXNlICd4cyc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5UaW55Vmlldyc7XHJcbiAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlblNtYWxsVmlldyc7XHJcbiAgICAgIGNhc2UgJ21kJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlbk1lZGl1bVZpZXcnO1xyXG4gICAgICBjYXNlICdsZyc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5MYXJnZVZpZXcnO1xyXG4gICAgICBjYXNlICd4bCc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5YTFZpZXcnO1xyXG4gICAgICBjYXNlICd4eGwnOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuWFhMVmlldyc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AUGlwZSh7IG5hbWU6ICdpbnZlcnRGb3JTZWNvbmRhcnlUb29sYmFyJyB9KVxyXG5leHBvcnQgY2xhc3MgTmVnYXRpdmVSZXNwb25zaXZlQ1NTQ2xhc3NQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZpc2libGU6IFJlc3BvbnNpdmVDU1NDbGFzcyB8IFJlc3BvbnNpdmVWaXNpYmlsaXR5KTogUmVzcG9uc2l2ZUNTU0NsYXNzSW5TZWNvbmRhcnlUb29sYmFyIHtcclxuICAgIHN3aXRjaCAodmlzaWJsZSkge1xyXG4gICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICByZXR1cm4gJ2Fsd2F5cy12aXNpYmxlJztcclxuICAgICAgY2FzZSAnYWx3YXlzLXZpc2libGUnOlxyXG4gICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgcmV0dXJuICdpbnZpc2libGUnO1xyXG4gICAgICBjYXNlICdpbnZpc2libGUnOlxyXG4gICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgIHJldHVybiAnaW52aXNpYmxlJztcclxuICAgICAgY2FzZSAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JzpcclxuICAgICAgICByZXR1cm4gJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc7XHJcbiAgICAgIGNhc2UgJ2hpZGRlblhYU1ZpZXcnOlxyXG4gICAgICBjYXNlICd4eHMnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZVhYU1ZpZXcnO1xyXG4gICAgICBjYXNlICdoaWRkZW5UaW55Vmlldyc6XHJcbiAgICAgIGNhc2UgJ3hzJzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVUaW55Vmlldyc7XHJcbiAgICAgIGNhc2UgJ3NtJzpcclxuICAgICAgY2FzZSAnaGlkZGVuU21hbGxWaWV3JzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVTbWFsbFZpZXcnO1xyXG4gICAgICBjYXNlICdtZCc6XHJcbiAgICAgIGNhc2UgJ2hpZGRlbk1lZGl1bVZpZXcnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZU1lZGl1bVZpZXcnO1xyXG4gICAgICBjYXNlICdsZyc6XHJcbiAgICAgIGNhc2UgJ2hpZGRlbkxhcmdlVmlldyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlTGFyZ2VWaWV3JztcclxuICAgICAgY2FzZSAneGwnOlxyXG4gICAgICBjYXNlICdoaWRkZW5YTFZpZXcnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZVhMVmlldyc7XHJcbiAgICAgIGNhc2UgJ3h4bCc6XHJcbiAgICAgIGNhc2UgJ2hpZGRlblhYTFZpZXcnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZVhYTFZpZXcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=