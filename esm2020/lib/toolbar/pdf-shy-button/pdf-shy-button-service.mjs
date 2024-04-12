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
/** @nocollapse */ PdfShyButtonService.ɵfac = function PdfShyButtonService_Factory(t) { return new (t || PdfShyButtonService)(); };
/** @nocollapse */ PdfShyButtonService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: PdfShyButtonService, factory: PdfShyButtonService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PdfShyButtonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBd0IzQyxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBSVMsWUFBTyxHQUE4QixFQUFFLENBQUM7S0FtRGhEO0lBakRRLEdBQUcsQ0FBQyxNQUE2QjtRQUN0QyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRSxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sV0FBVyxHQUE0QjtZQUMzQyxFQUFFO1lBQ0YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSztZQUM1QixLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDdkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7U0FDbEMsQ0FBQztRQUNGLElBQUksa0JBQWtCLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDL0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLG9CQUFvQixHQUFJLE1BQWMsQ0FBQyxvQkFBNkMsQ0FBQztnQkFDM0YsSUFBSSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7b0JBQzlCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDckQsbUVBQW1FO3dCQUNuRSw2Q0FBNkM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsTUFBNkI7UUFDcEQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pELE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFTSxNQUFNLENBQUMsTUFBNkI7UUFDekMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7eUdBbkRVLG1CQUFtQjt3R0FBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTt1RkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb24gfSBmcm9tICcuLi8uLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlQ1NTQ2xhc3MgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xyXG5pbXBvcnQgeyBQZGZTaHlCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3BkZi1zaHktYnV0dG9uLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBkZlNoeUJ1dHRvbkRlc2NyaXB0aW9uIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGNzc0NsYXNzOiBSZXNwb25zaXZlQ1NTQ2xhc3M7XHJcbiAgbDEwbklkOiBzdHJpbmc7XHJcbiAgbDEwbkxhYmVsOiBzdHJpbmc7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB0b2dnbGVkOiBib29sZWFuO1xyXG4gIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIG9yZGVyOiBudW1iZXI7XHJcbiAgaW1hZ2U6IFNhZmVIdG1sO1xyXG4gIGFjdGlvbj86ICgpID0+IHZvaWQ7XHJcbiAgZXZlbnRCdXNOYW1lPzogc3RyaW5nO1xyXG4gIGNsb3NlT25DbGljaz86IGJvb2xlYW47XHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZGZTaHlCdXR0b25TZXJ2aWNlIHtcclxuICBwdWJsaWMgYnV0dG9uczogUGRmU2h5QnV0dG9uRGVzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBwdWJsaWMgYWRkKGJ1dHRvbjogUGRmU2h5QnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpZCA9IGJ1dHRvbi5zZWNvbmRhcnlNZW51SWQgPz8gdGhpcy5hZGREZWZhdWx0UHJlZml4KGJ1dHRvbik7XHJcbiAgICBjb25zdCBwcmV2aW91c0RlZmluaXRpb24gPSB0aGlzLmJ1dHRvbnMuZmluZEluZGV4KChiKSA9PiBiLmlkID09PSBpZCk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbjogUGRmU2h5QnV0dG9uRGVzY3JpcHRpb24gPSB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBjc3NDbGFzczogYnV0dG9uLmNzc0NsYXNzLFxyXG4gICAgICBsMTBuSWQ6IGJ1dHRvbi5sMTBuSWQsXHJcbiAgICAgIGwxMG5MYWJlbDogYnV0dG9uLmwxMG5MYWJlbCxcclxuICAgICAgdGl0bGU6IGJ1dHRvbi50aXRsZSxcclxuICAgICAgdG9nZ2xlZDogYnV0dG9uLnRvZ2dsZWQsXHJcbiAgICAgIGRpc2FibGVkOiBidXR0b24uZGlzYWJsZWQsXHJcbiAgICAgIG9yZGVyOiBidXR0b24ub3JkZXIgPz8gOTk5OTksXHJcbiAgICAgIGltYWdlOiBidXR0b24uaW1hZ2VIdG1sLFxyXG4gICAgICBhY3Rpb246IGJ1dHRvbi5hY3Rpb24sXHJcbiAgICAgIGV2ZW50QnVzTmFtZTogYnV0dG9uLmV2ZW50QnVzTmFtZSxcclxuICAgICAgY2xvc2VPbkNsaWNrOiBidXR0b24uY2xvc2VPbkNsaWNrLFxyXG4gICAgfTtcclxuICAgIGlmIChwcmV2aW91c0RlZmluaXRpb24gPj0gMCkge1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbcHJldmlvdXNEZWZpbml0aW9uXSA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbiBhcyBJUERGVmlld2VyQXBwbGljYXRpb247XHJcbiAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5sMTBuKSB7XHJcbiAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ubDEwbi50cmFuc2xhdGUoZWxlbWVudCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSAnbG9jYWxpemVkJyBldmVudCBvbiB0aGUgYGV2ZW50QnVzYCBvbmNlIHRoZSB2aWV3ZXJcclxuICAgICAgICAgICAgLy8gaGFzIGJlZW4gZnVsbHkgaW5pdGlhbGl6ZWQgYW5kIHRyYW5zbGF0ZWQuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5idXR0b25zLnB1c2goZGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5idXR0b25zLnNvcnQoKGEsIGIpID0+IGEub3JkZXIgLSBiLm9yZGVyKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRGVmYXVsdFByZWZpeChidXR0b246IFBkZlNoeUJ1dHRvbkNvbXBvbmVudCk6IHN0cmluZyB7XHJcbiAgICBpZiAoYnV0dG9uLnByaW1hcnlUb29sYmFySWQuc3RhcnRzV2l0aCgncHJpbWFyeScpKSB7XHJcbiAgICAgIHJldHVybiBidXR0b24ucHJpbWFyeVRvb2xiYXJJZC5yZXBsYWNlKCdwcmltYXJ5JywgJ3NlY29uZGFyeScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdzZWNvbmRhcnknICsgYnV0dG9uLnByaW1hcnlUb29sYmFySWQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBidXR0b24ucHJpbWFyeVRvb2xiYXJJZC5zdWJzdHJpbmcoMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlKGJ1dHRvbjogUGRmU2h5QnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpZCA9IGJ1dHRvbi5zZWNvbmRhcnlNZW51SWQgPz8gdGhpcy5hZGREZWZhdWx0UHJlZml4KGJ1dHRvbik7XHJcblxyXG4gICAgaWYgKHRoaXMuYnV0dG9ucy5zb21lKChiKSA9PiBiLmlkID09PSBpZCkpIHtcclxuICAgICAgdGhpcy5hZGQoYnV0dG9uKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19