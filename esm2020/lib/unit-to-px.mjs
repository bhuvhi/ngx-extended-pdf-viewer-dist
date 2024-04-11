export class UnitToPx {
    static initElements() {
        if (!document) {
            return;
        }
        if (!this.con || !this.el) {
            this.con = document.createElement('div');
            this.el = document.createElement('div');
        }
        this.con.style.position = 'absolute';
        this.con.style.width = '0';
        this.con.style.height = '0';
        this.con.style.visibility = 'hidden';
        this.con.style.overflow = 'hidden';
        this.con.appendChild(this.el);
    }
    static pxPerUnit(unit) {
        if (!this.pxPerUnitCache[unit]) {
            if (!this.con || !this.el) {
                this.initElements();
            }
            if (!this.con || !this.el) {
                // dummy implementation for server-side rendering
                return 1;
            }
            this.el.style.width = this.sample + unit;
            document.body.appendChild(this.con);
            const dimension = this.el.getBoundingClientRect();
            this.con.parentNode.removeChild(this.con);
            this.pxPerUnitCache[unit] = dimension.width / this.sample;
        }
        return this.pxPerUnitCache[unit];
    }
    static toPx(length) {
        const unitRe = /^\s*([+-]?[\d\.]*)\s*(.*)\s*$/i; // NOSONAR
        const match = unitRe.exec(length);
        if (match != null && match.length > 2) {
            const bare = match[1] === '';
            const val = bare ? 1 : Number(match[1]);
            const unit = match[2];
            const valid = !isNaN(val) && unit;
            if (valid) {
                return unit === 'px' ? val : this.pxPerUnit(unit) * val;
            }
        }
        throw new TypeError('Error parsing length');
    }
}
// cache this.con, el for reused
UnitToPx.con = undefined;
UnitToPx.el = undefined;
// high sample will more accurate?
UnitToPx.sample = 100;
UnitToPx.pxPerUnitCache = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC10by1weC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1leHRlbmRlZC1wZGYtdmlld2VyL3NyYy9saWIvdW5pdC10by1weC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sUUFBUTtJQVVYLE1BQU0sQ0FBQyxZQUFZO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBWTtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsaURBQWlEO2dCQUNqRCxPQUFPLENBQUMsQ0FBQzthQUNWO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztTQUMzRDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1FBQ3ZCLE1BQU0sTUFBTSxHQUFHLGdDQUFnQyxDQUFDLENBQUMsVUFBVTtRQUMzRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQztZQUNsQyxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7YUFDekQ7U0FDRjtRQUNELE1BQU0sSUFBSSxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUM5QyxDQUFDOztBQXhERCxnQ0FBZ0M7QUFDakIsWUFBRyxHQUErQixTQUFTLENBQUM7QUFDNUMsV0FBRSxHQUErQixTQUFTLENBQUM7QUFFMUQsa0NBQWtDO0FBQ1YsZUFBTSxHQUFHLEdBQUcsQ0FBQztBQUV0Qix1QkFBYyxHQUE4QixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVW5pdFRvUHgge1xyXG4gIC8vIGNhY2hlIHRoaXMuY29uLCBlbCBmb3IgcmV1c2VkXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29uOiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHN0YXRpYyBlbDogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIC8vIGhpZ2ggc2FtcGxlIHdpbGwgbW9yZSBhY2N1cmF0ZT9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBzYW1wbGUgPSAxMDA7XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHB4UGVyVW5pdENhY2hlOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGluaXRFbGVtZW50cygpOiB2b2lkIHtcclxuICAgIGlmICghZG9jdW1lbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLmNvbiB8fCAhdGhpcy5lbCkge1xyXG4gICAgICB0aGlzLmNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB0aGlzLmNvbi5zdHlsZS53aWR0aCA9ICcwJztcclxuICAgIHRoaXMuY29uLnN0eWxlLmhlaWdodCA9ICcwJztcclxuICAgIHRoaXMuY29uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIHRoaXMuY29uLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB0aGlzLmNvbi5hcHBlbmRDaGlsZCh0aGlzLmVsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIHB4UGVyVW5pdCh1bml0OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLnB4UGVyVW5pdENhY2hlW3VuaXRdKSB7XHJcbiAgICAgIGlmICghdGhpcy5jb24gfHwgIXRoaXMuZWwpIHtcclxuICAgICAgICB0aGlzLmluaXRFbGVtZW50cygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5jb24gfHwgIXRoaXMuZWwpIHtcclxuICAgICAgICAvLyBkdW1teSBpbXBsZW1lbnRhdGlvbiBmb3Igc2VydmVyLXNpZGUgcmVuZGVyaW5nXHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IHRoaXMuc2FtcGxlICsgdW5pdDtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbik7XHJcbiAgICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIHRoaXMuY29uLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKHRoaXMuY29uKTtcclxuICAgICAgdGhpcy5weFBlclVuaXRDYWNoZVt1bml0XSA9IGRpbWVuc2lvbi53aWR0aCAvIHRoaXMuc2FtcGxlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucHhQZXJVbml0Q2FjaGVbdW5pdF07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIHRvUHgobGVuZ3RoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHVuaXRSZSA9IC9eXFxzKihbKy1dP1tcXGRcXC5dKilcXHMqKC4qKVxccyokL2k7IC8vIE5PU09OQVJcclxuICAgIGNvbnN0IG1hdGNoID0gdW5pdFJlLmV4ZWMobGVuZ3RoKTtcclxuICAgIGlmIChtYXRjaCAhPSBudWxsICYmIG1hdGNoLmxlbmd0aCA+IDIpIHtcclxuICAgICAgY29uc3QgYmFyZSA9IG1hdGNoWzFdID09PSAnJztcclxuICAgICAgY29uc3QgdmFsID0gYmFyZSA/IDEgOiBOdW1iZXIobWF0Y2hbMV0pO1xyXG4gICAgICBjb25zdCB1bml0ID0gbWF0Y2hbMl07XHJcbiAgICAgIGNvbnN0IHZhbGlkID0gIWlzTmFOKHZhbCkgJiYgdW5pdDtcclxuICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuaXQgPT09ICdweCcgPyB2YWwgOiB0aGlzLnB4UGVyVW5pdCh1bml0KSAqIHZhbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXJyb3IgcGFyc2luZyBsZW5ndGgnKTtcclxuICB9XHJcbn1cclxuIl19