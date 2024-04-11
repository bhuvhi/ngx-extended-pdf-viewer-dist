import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfBreakpoints {
    static xs = 490;
    static sm = 560;
    static md = 610;
    static lg = 660;
    static xl = 780;
    static xxl = 900;
}
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
    /** @nocollapse */ static ɵfac = function ResponsiveCSSClassPipe_Factory(t) { return new (t || ResponsiveCSSClassPipe)(); };
    /** @nocollapse */ static ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "responsiveCSSClass", type: ResponsiveCSSClassPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResponsiveCSSClassPipe, [{
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
    /** @nocollapse */ static ɵfac = function NegativeResponsiveCSSClassPipe_Factory(t) { return new (t || NegativeResponsiveCSSClassPipe)(); };
    /** @nocollapse */ static ɵpipe = /** @pureOrBreakMyCode */ i0.ɵɵdefinePipe({ name: "invertForSecondaryToolbar", type: NegativeResponsiveCSSClassPipe, pure: true });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NegativeResponsiveCSSClassPipe, [{
        type: Pipe,
        args: [{ name: 'invertForSecondaryToolbar' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2l2ZS12aXNpYmlsaXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvc3JjL2xpYi9yZXNwb25zaXZlLXZpc2liaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7O0FBSXBELE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0lBRWhCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDOztBQTRCbkIsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxTQUFTLENBQUMsT0FBeUMsRUFBRSxlQUFtQyxnQkFBZ0I7UUFDdEcsUUFBUSxPQUFPLEVBQUU7WUFDZixLQUFLLFNBQVM7Z0JBQ1osT0FBTyxZQUFZLENBQUM7WUFDdEIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssSUFBSTtnQkFDUCxPQUFPLFlBQVksQ0FBQztZQUN0QixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxnQkFBZ0IsQ0FBQztZQUMxQixLQUFLLDBCQUEwQjtnQkFDN0IsT0FBTywwQkFBMEIsQ0FBQztZQUNwQyxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxlQUFlLENBQUM7WUFDekIsS0FBSyxJQUFJO2dCQUNQLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxJQUFJO2dCQUNQLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxJQUFJO2dCQUNQLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxJQUFJO2dCQUNQLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxJQUFJO2dCQUNQLE9BQU8sY0FBYyxDQUFDO1lBQ3hCLEtBQUssS0FBSztnQkFDUixPQUFPLGVBQWUsQ0FBQztTQUMxQjtJQUNILENBQUM7bUdBNUJVLHNCQUFzQjtvSEFBdEIsc0JBQXNCOztpRkFBdEIsc0JBQXNCO2NBRGxDLElBQUk7ZUFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRTs7QUFpQ3BDLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsU0FBUyxDQUFDLE9BQWtEO1FBQzFELFFBQVEsT0FBTyxFQUFFO1lBQ2YsS0FBSyxTQUFTO2dCQUNaLE9BQU8sZ0JBQWdCLENBQUM7WUFDMUIsS0FBSyxnQkFBZ0IsQ0FBQztZQUN0QixLQUFLLElBQUk7Z0JBQ1AsT0FBTyxXQUFXLENBQUM7WUFDckIsS0FBSyxXQUFXLENBQUM7WUFDakIsS0FBSyxLQUFLO2dCQUNSLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUssMEJBQTBCO2dCQUM3QixPQUFPLDBCQUEwQixDQUFDO1lBQ3BDLEtBQUssZUFBZSxDQUFDO1lBQ3JCLEtBQUssS0FBSztnQkFDUixPQUFPLGdCQUFnQixDQUFDO1lBQzFCLEtBQUssZ0JBQWdCLENBQUM7WUFDdEIsS0FBSyxJQUFJO2dCQUNQLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxrQkFBa0IsQ0FBQztZQUM1QixLQUFLLElBQUksQ0FBQztZQUNWLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLG1CQUFtQixDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDO1lBQ1YsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sa0JBQWtCLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUM7WUFDVixLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sZUFBZSxDQUFDO1lBQ3pCLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxlQUFlO2dCQUNsQixPQUFPLGdCQUFnQixDQUFDO1NBQzNCO0lBQ0gsQ0FBQzsyR0FuQ1UsOEJBQThCOzJIQUE5Qiw4QkFBOEI7O2lGQUE5Qiw4QkFBOEI7Y0FEMUMsSUFBSTtlQUFDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZVZpc2liaWxpdHkgPSBib29sZWFuIHwgJ2Fsd2F5cy12aXNpYmxlJyB8ICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnIHwgJ3h4cycgfCAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8ICd4eGwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBkZkJyZWFrcG9pbnRzIHtcclxuICBzdGF0aWMgeHMgPSA0OTA7XHJcblxyXG4gIHN0YXRpYyBzbSA9IDU2MDtcclxuXHJcbiAgc3RhdGljIG1kID0gNjEwO1xyXG5cclxuICBzdGF0aWMgbGcgPSA2NjA7XHJcblxyXG4gIHN0YXRpYyB4bCA9IDc4MDtcclxuXHJcbiAgc3RhdGljIHh4bCA9IDkwMDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVzcG9uc2l2ZUNTU0NsYXNzID1cclxuICB8ICdoaWRkZW5YWFNWaWV3J1xyXG4gIHwgJ2hpZGRlblRpbnlWaWV3J1xyXG4gIHwgJ2hpZGRlblNtYWxsVmlldydcclxuICB8ICdoaWRkZW5NZWRpdW1WaWV3J1xyXG4gIHwgJ2hpZGRlbkxhcmdlVmlldydcclxuICB8ICdoaWRkZW5YTFZpZXcnXHJcbiAgfCAnaGlkZGVuWFhMVmlldydcclxuICB8ICdpbnZpc2libGUnXHJcbiAgfCAnYWx3YXlzLXZpc2libGUnXHJcbiAgfCAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JztcclxuXHJcbmV4cG9ydCB0eXBlIFJlc3BvbnNpdmVDU1NDbGFzc0luU2Vjb25kYXJ5VG9vbGJhciA9XHJcbiAgfCAndmlzaWJsZVhYU1ZpZXcnXHJcbiAgfCAndmlzaWJsZVRpbnlWaWV3J1xyXG4gIHwgJ3Zpc2libGVTbWFsbFZpZXcnXHJcbiAgfCAndmlzaWJsZU1lZGl1bVZpZXcnXHJcbiAgfCAndmlzaWJsZUxhcmdlVmlldydcclxuICB8ICd2aXNpYmxlWExWaWV3J1xyXG4gIHwgJ3Zpc2libGVYWExWaWV3J1xyXG4gIHwgJ2ludmlzaWJsZSdcclxuICB8ICdhbHdheXMtdmlzaWJsZSdcclxuICB8ICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnO1xyXG5cclxuQFBpcGUoeyBuYW1lOiAncmVzcG9uc2l2ZUNTU0NsYXNzJyB9KVxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2aXNpYmxlOiBSZXNwb25zaXZlVmlzaWJpbGl0eSB8IHVuZGVmaW5lZCwgZGVmYXVsdENsYXNzOiBSZXNwb25zaXZlQ1NTQ2xhc3MgPSAnYWx3YXlzLXZpc2libGUnKTogUmVzcG9uc2l2ZUNTU0NsYXNzIHtcclxuICAgIHN3aXRjaCAodmlzaWJsZSkge1xyXG4gICAgICBjYXNlIHVuZGVmaW5lZDpcclxuICAgICAgICByZXR1cm4gZGVmYXVsdENsYXNzO1xyXG4gICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgIHJldHVybiAnaW52aXNpYmxlJztcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0Q2xhc3M7XHJcbiAgICAgIGNhc2UgJ2Fsd2F5cy12aXNpYmxlJzpcclxuICAgICAgICByZXR1cm4gJ2Fsd2F5cy12aXNpYmxlJztcclxuICAgICAgY2FzZSAnYWx3YXlzLWluLXNlY29uZGFyeS1tZW51JzpcclxuICAgICAgICByZXR1cm4gJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc7XHJcbiAgICAgIGNhc2UgJ3h4cyc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5YWFNWaWV3JztcclxuICAgICAgY2FzZSAneHMnOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuVGlueVZpZXcnO1xyXG4gICAgICBjYXNlICdzbSc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5TbWFsbFZpZXcnO1xyXG4gICAgICBjYXNlICdtZCc6XHJcbiAgICAgICAgcmV0dXJuICdoaWRkZW5NZWRpdW1WaWV3JztcclxuICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuTGFyZ2VWaWV3JztcclxuICAgICAgY2FzZSAneGwnOlxyXG4gICAgICAgIHJldHVybiAnaGlkZGVuWExWaWV3JztcclxuICAgICAgY2FzZSAneHhsJzpcclxuICAgICAgICByZXR1cm4gJ2hpZGRlblhYTFZpZXcnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQFBpcGUoeyBuYW1lOiAnaW52ZXJ0Rm9yU2Vjb25kYXJ5VG9vbGJhcicgfSlcclxuZXhwb3J0IGNsYXNzIE5lZ2F0aXZlUmVzcG9uc2l2ZUNTU0NsYXNzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gIHRyYW5zZm9ybSh2aXNpYmxlOiBSZXNwb25zaXZlQ1NTQ2xhc3MgfCBSZXNwb25zaXZlVmlzaWJpbGl0eSk6IFJlc3BvbnNpdmVDU1NDbGFzc0luU2Vjb25kYXJ5VG9vbGJhciB7XHJcbiAgICBzd2l0Y2ggKHZpc2libGUpIHtcclxuICAgICAgY2FzZSB1bmRlZmluZWQ6XHJcbiAgICAgICAgcmV0dXJuICdhbHdheXMtdmlzaWJsZSc7XHJcbiAgICAgIGNhc2UgJ2Fsd2F5cy12aXNpYmxlJzpcclxuICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgIHJldHVybiAnaW52aXNpYmxlJztcclxuICAgICAgY2FzZSAnaW52aXNpYmxlJzpcclxuICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICByZXR1cm4gJ2ludmlzaWJsZSc7XHJcbiAgICAgIGNhc2UgJ2Fsd2F5cy1pbi1zZWNvbmRhcnktbWVudSc6XHJcbiAgICAgICAgcmV0dXJuICdhbHdheXMtaW4tc2Vjb25kYXJ5LW1lbnUnO1xyXG4gICAgICBjYXNlICdoaWRkZW5YWFNWaWV3JzpcclxuICAgICAgY2FzZSAneHhzJzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVYWFNWaWV3JztcclxuICAgICAgY2FzZSAnaGlkZGVuVGlueVZpZXcnOlxyXG4gICAgICBjYXNlICd4cyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlVGlueVZpZXcnO1xyXG4gICAgICBjYXNlICdzbSc6XHJcbiAgICAgIGNhc2UgJ2hpZGRlblNtYWxsVmlldyc6XHJcbiAgICAgICAgcmV0dXJuICd2aXNpYmxlU21hbGxWaWV3JztcclxuICAgICAgY2FzZSAnbWQnOlxyXG4gICAgICBjYXNlICdoaWRkZW5NZWRpdW1WaWV3JzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVNZWRpdW1WaWV3JztcclxuICAgICAgY2FzZSAnbGcnOlxyXG4gICAgICBjYXNlICdoaWRkZW5MYXJnZVZpZXcnOlxyXG4gICAgICAgIHJldHVybiAndmlzaWJsZUxhcmdlVmlldyc7XHJcbiAgICAgIGNhc2UgJ3hsJzpcclxuICAgICAgY2FzZSAnaGlkZGVuWExWaWV3JzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVYTFZpZXcnO1xyXG4gICAgICBjYXNlICd4eGwnOlxyXG4gICAgICBjYXNlICdoaWRkZW5YWExWaWV3JzpcclxuICAgICAgICByZXR1cm4gJ3Zpc2libGVYWExWaWV3JztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19