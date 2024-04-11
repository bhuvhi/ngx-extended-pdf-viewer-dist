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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNoeS1idXR0b24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdG9vbGJhci9wZGYtc2h5LWJ1dHRvbi9wZGYtc2h5LWJ1dHRvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBd0IzQyxNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBSVMsWUFBTyxHQUE4QixFQUFFLENBQUM7S0FtRGhEO0lBakRRLEdBQUcsQ0FBQyxNQUE2QjtRQUN0QyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuRSxNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sV0FBVyxHQUE0QjtZQUMzQyxFQUFFO1lBQ0YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtZQUNyQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTztZQUN2QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSztZQUM1QixLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDdkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLFlBQVksRUFBRSxNQUFNLENBQUMsWUFBWTtZQUNqQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7U0FDbEMsQ0FBQztRQUNGLElBQUksa0JBQWtCLElBQUksQ0FBQyxFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsR0FBRyxXQUFXLENBQUM7WUFDL0MsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxNQUFNLG9CQUFvQixHQUFJLE1BQWMsQ0FBQyxvQkFBNkMsQ0FBQztnQkFDM0YsSUFBSSxvQkFBb0IsRUFBRSxJQUFJLEVBQUU7b0JBQzlCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTt3QkFDckQsbUVBQW1FO3dCQUNuRSw2Q0FBNkM7b0JBQy9DLENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsTUFBNkI7UUFDcEQsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2pELE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFDRCxPQUFPLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFTSxNQUFNLENBQUMsTUFBNkI7UUFDekMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUN6QyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7eUdBbkRVLG1CQUFtQjt3R0FBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTt1RkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSZXNwb25zaXZlQ1NTQ2xhc3MgfSBmcm9tICcuLi8uLi9yZXNwb25zaXZlLXZpc2liaWxpdHknO1xuaW1wb3J0IHsgUGRmU2h5QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtc2h5LWJ1dHRvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBkZlNoeUJ1dHRvbkRlc2NyaXB0aW9uIHtcbiAgaWQ6IHN0cmluZztcbiAgY3NzQ2xhc3M6IFJlc3BvbnNpdmVDU1NDbGFzcztcbiAgbDEwbklkOiBzdHJpbmc7XG4gIGwxMG5MYWJlbDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0b2dnbGVkOiBib29sZWFuO1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgb3JkZXI6IG51bWJlcjtcbiAgaW1hZ2U6IFNhZmVIdG1sO1xuICBhY3Rpb24/OiAoKSA9PiB2b2lkO1xuICBldmVudEJ1c05hbWU/OiBzdHJpbmc7XG4gIGNsb3NlT25DbGljaz86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQZGZTaHlCdXR0b25TZXJ2aWNlIHtcbiAgcHVibGljIGJ1dHRvbnM6IFBkZlNoeUJ1dHRvbkRlc2NyaXB0aW9uW10gPSBbXTtcblxuICBwdWJsaWMgYWRkKGJ1dHRvbjogUGRmU2h5QnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSBidXR0b24uc2Vjb25kYXJ5TWVudUlkID8/IHRoaXMuYWRkRGVmYXVsdFByZWZpeChidXR0b24pO1xuICAgIGNvbnN0IHByZXZpb3VzRGVmaW5pdGlvbiA9IHRoaXMuYnV0dG9ucy5maW5kSW5kZXgoKGIpID0+IGIuaWQgPT09IGlkKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbjogUGRmU2h5QnV0dG9uRGVzY3JpcHRpb24gPSB7XG4gICAgICBpZCxcbiAgICAgIGNzc0NsYXNzOiBidXR0b24uY3NzQ2xhc3MsXG4gICAgICBsMTBuSWQ6IGJ1dHRvbi5sMTBuSWQsXG4gICAgICBsMTBuTGFiZWw6IGJ1dHRvbi5sMTBuTGFiZWwsXG4gICAgICB0aXRsZTogYnV0dG9uLnRpdGxlLFxuICAgICAgdG9nZ2xlZDogYnV0dG9uLnRvZ2dsZWQsXG4gICAgICBkaXNhYmxlZDogYnV0dG9uLmRpc2FibGVkLFxuICAgICAgb3JkZXI6IGJ1dHRvbi5vcmRlciA/PyA5OTk5OSxcbiAgICAgIGltYWdlOiBidXR0b24uaW1hZ2VIdG1sLFxuICAgICAgYWN0aW9uOiBidXR0b24uYWN0aW9uLFxuICAgICAgZXZlbnRCdXNOYW1lOiBidXR0b24uZXZlbnRCdXNOYW1lLFxuICAgICAgY2xvc2VPbkNsaWNrOiBidXR0b24uY2xvc2VPbkNsaWNrLFxuICAgIH07XG4gICAgaWYgKHByZXZpb3VzRGVmaW5pdGlvbiA+PSAwKSB7XG4gICAgICB0aGlzLmJ1dHRvbnNbcHJldmlvdXNEZWZpbml0aW9uXSA9IGRlc2NyaXB0aW9uO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uIGFzIElQREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uPy5sMTBuKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5sMTBuLnRyYW5zbGF0ZShlbGVtZW50KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSAnbG9jYWxpemVkJyBldmVudCBvbiB0aGUgYGV2ZW50QnVzYCBvbmNlIHRoZSB2aWV3ZXJcbiAgICAgICAgICAgIC8vIGhhcyBiZWVuIGZ1bGx5IGluaXRpYWxpemVkIGFuZCB0cmFuc2xhdGVkLlxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idXR0b25zLnB1c2goZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICB0aGlzLmJ1dHRvbnMuc29ydCgoYSwgYikgPT4gYS5vcmRlciAtIGIub3JkZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGREZWZhdWx0UHJlZml4KGJ1dHRvbjogUGRmU2h5QnV0dG9uQ29tcG9uZW50KTogc3RyaW5nIHtcbiAgICBpZiAoYnV0dG9uLnByaW1hcnlUb29sYmFySWQuc3RhcnRzV2l0aCgncHJpbWFyeScpKSB7XG4gICAgICByZXR1cm4gYnV0dG9uLnByaW1hcnlUb29sYmFySWQucmVwbGFjZSgncHJpbWFyeScsICdzZWNvbmRhcnknKTtcbiAgICB9XG4gICAgcmV0dXJuICdzZWNvbmRhcnknICsgYnV0dG9uLnByaW1hcnlUb29sYmFySWQuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBidXR0b24ucHJpbWFyeVRvb2xiYXJJZC5zdWJzdHJpbmcoMSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGJ1dHRvbjogUGRmU2h5QnV0dG9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgaWQgPSBidXR0b24uc2Vjb25kYXJ5TWVudUlkID8/IHRoaXMuYWRkRGVmYXVsdFByZWZpeChidXR0b24pO1xuXG4gICAgaWYgKHRoaXMuYnV0dG9ucy5zb21lKChiKSA9PiBiLmlkID09PSBpZCkpIHtcbiAgICAgIHRoaXMuYWRkKGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG4iXX0=