import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class PdfShyButtonService {
    constructor() {
        this.buttons = [];
    }
    add(button) {
        const id = button.secondaryMenuId ?? this.addDefaultPrefix(button);
        const previousDefinition = this.buttons.findIndex((b) => b.id === id);
        const description = {
            id,
            cssClass: button.cssClass,
            l10nId: button.l10nId,
            l10nLabel: button.l10nLabel,
            title: button.title,
            toggled: button.toggled,
            disabled: button.disabled,
            order: button.order ?? 99999,
            image: button.imageHtml,
            action: button.action,
            eventBusName: button.eventBusName,
            closeOnClick: button.closeOnClick,
        };
        if (previousDefinition >= 0) {
            this.buttons[previousDefinition] = description;
            setTimeout(() => {
                const PDFViewerApplication = window.PDFViewerApplication;
                if (PDFViewerApplication?.l10n) {
                    const element = document.getElementById(id);
                    PDFViewerApplication.l10n.translate(element).then(() => {
                        // Dispatch the 'localized' event on the `eventBus` once the viewer
                        // has been fully initialized and translated.
                    });
                }
            }, 0);
        }
        else {
            this.buttons.push(description);
        }
        this.buttons.sort((a, b) => a.order - b.order);
    }
    addDefaultPrefix(button) {
        if (button.primaryToolbarId.startsWith('primary')) {
            return button.primaryToolbarId.replace('primary', 'secondary');
        }
        return 'secondary' + button.primaryToolbarId.substring(0, 1).toUpperCase() + button.primaryToolbarId.substring(1);
    }
    update(button) {
        const id = button.secondaryMenuId ?? this.addDefaultPrefix(button);
        if (this.buttons.some((b) => b.id === id)) {
            this.add(button);
        }
    }
}
PdfShyButtonService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PdfShyButtonService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.4.0", ngImport: i0, type: PdfShyButtonService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBd0IzQyxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBSVMsWUFBTyxHQUE4QixFQUFFLENBQUM7S0FtRGhEO0lBakRRLEdBQUcsQ0FBQyxNQUE2QjtRQUN0QyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRSxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sV0FBVyxHQUE0QjtZQUMzQyxFQUFFO1lBQ0YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSztZQUM1QixLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDdkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7U0FDbEMsQ0FBQztRQUNGLElBQUksa0JBQWtCLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDL0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLG9CQUFvQixHQUFJLE1BQWMsQ0FBQyxvQkFBNkMsQ0FBQztnQkFDM0YsSUFBSSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7b0JBQzlCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDckQsbUVBQW1FO3dCQUNuRSw2Q0FBNkM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsTUFBNkI7UUFDcEQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pELE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFTSxNQUFNLENBQUMsTUFBNkI7UUFDekMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Z0hBbkRVLG1CQUFtQjtvSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgUmVzcG9uc2l2ZUNTU0NsYXNzIH0gZnJvbSAnLi4vLi4vcmVzcG9uc2l2ZS12aXNpYmlsaXR5JztcclxuaW1wb3J0IHsgUGRmU2h5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZGZTaHlCdXR0b25EZXNjcmlwdGlvbiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjc3NDbGFzczogUmVzcG9uc2l2ZUNTU0NsYXNzO1xyXG4gIGwxMG5JZDogc3RyaW5nO1xyXG4gIGwxMG5MYWJlbDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdG9nZ2xlZDogYm9vbGVhbjtcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBvcmRlcjogbnVtYmVyO1xyXG4gIGltYWdlOiBTYWZlSHRtbDtcclxuICBhY3Rpb24/OiAoKSA9PiB2b2lkO1xyXG4gIGV2ZW50QnVzTmFtZT86IHN0cmluZztcclxuICBjbG9zZU9uQ2xpY2s/OiBib29sZWFuO1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGRmU2h5QnV0dG9uU2VydmljZSB7XHJcbiAgcHVibGljIGJ1dHRvbnM6IFBkZlNoeUJ1dHRvbkRlc2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgcHVibGljIGFkZChidXR0b246IFBkZlNoeUJ1dHRvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWQgPSBidXR0b24uc2Vjb25kYXJ5TWVudUlkID8/IHRoaXMuYWRkRGVmYXVsdFByZWZpeChidXR0b24pO1xyXG4gICAgY29uc3QgcHJldmlvdXNEZWZpbml0aW9uID0gdGhpcy5idXR0b25zLmZpbmRJbmRleCgoYikgPT4gYi5pZCA9PT0gaWQpO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb246IFBkZlNoeUJ1dHRvbkRlc2NyaXB0aW9uID0ge1xyXG4gICAgICBpZCxcclxuICAgICAgY3NzQ2xhc3M6IGJ1dHRvbi5jc3NDbGFzcyxcclxuICAgICAgbDEwbklkOiBidXR0b24ubDEwbklkLFxyXG4gICAgICBsMTBuTGFiZWw6IGJ1dHRvbi5sMTBuTGFiZWwsXHJcbiAgICAgIHRpdGxlOiBidXR0b24udGl0bGUsXHJcbiAgICAgIHRvZ2dsZWQ6IGJ1dHRvbi50b2dnbGVkLFxyXG4gICAgICBkaXNhYmxlZDogYnV0dG9uLmRpc2FibGVkLFxyXG4gICAgICBvcmRlcjogYnV0dG9uLm9yZGVyID8/IDk5OTk5LFxyXG4gICAgICBpbWFnZTogYnV0dG9uLmltYWdlSHRtbCxcclxuICAgICAgYWN0aW9uOiBidXR0b24uYWN0aW9uLFxyXG4gICAgICBldmVudEJ1c05hbWU6IGJ1dHRvbi5ldmVudEJ1c05hbWUsXHJcbiAgICAgIGNsb3NlT25DbGljazogYnV0dG9uLmNsb3NlT25DbGljayxcclxuICAgIH07XHJcbiAgICBpZiAocHJldmlvdXNEZWZpbml0aW9uID49IDApIHtcclxuICAgICAgdGhpcy5idXR0b25zW3ByZXZpb3VzRGVmaW5pdGlvbl0gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb24gYXMgSVBERlZpZXdlckFwcGxpY2F0aW9uO1xyXG4gICAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbj8ubDEwbikge1xyXG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmwxMG4udHJhbnNsYXRlKGVsZW1lbnQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgJ2xvY2FsaXplZCcgZXZlbnQgb24gdGhlIGBldmVudEJ1c2Agb25jZSB0aGUgdmlld2VyXHJcbiAgICAgICAgICAgIC8vIGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkIGFuZCB0cmFuc2xhdGVkLlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGRlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuICAgIHRoaXMuYnV0dG9ucy5zb3J0KChhLCBiKSA9PiBhLm9yZGVyIC0gYi5vcmRlcik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFkZERlZmF1bHRQcmVmaXgoYnV0dG9uOiBQZGZTaHlCdXR0b25Db21wb25lbnQpOiBzdHJpbmcge1xyXG4gICAgaWYgKGJ1dHRvbi5wcmltYXJ5VG9vbGJhcklkLnN0YXJ0c1dpdGgoJ3ByaW1hcnknKSkge1xyXG4gICAgICByZXR1cm4gYnV0dG9uLnByaW1hcnlUb29sYmFySWQucmVwbGFjZSgncHJpbWFyeScsICdzZWNvbmRhcnknKTtcclxuICAgIH1cclxuICAgIHJldHVybiAnc2Vjb25kYXJ5JyArIGJ1dHRvbi5wcmltYXJ5VG9vbGJhcklkLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgYnV0dG9uLnByaW1hcnlUb29sYmFySWQuc3Vic3RyaW5nKDEpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShidXR0b246IFBkZlNoeUJ1dHRvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgaWQgPSBidXR0b24uc2Vjb25kYXJ5TWVudUlkID8/IHRoaXMuYWRkRGVmYXVsdFByZWZpeChidXR0b24pO1xyXG5cclxuICAgIGlmICh0aGlzLmJ1dHRvbnMuc29tZSgoYikgPT4gYi5pZCA9PT0gaWQpKSB7XHJcbiAgICAgIHRoaXMuYWRkKGJ1dHRvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==