import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
    private menuData = new Subject<any>();
    private adminMenuData = new Subject<any>();
    private searchData = new Subject<any>();
    private specialViewModeStatus = new Subject<any>();
 
    sendMenuData(data : any) {
        this.menuData.next(data);
    }
 
    clearMenuData() {
        this.menuData.next();
    }
 
    getMenuData() : Observable<any> {
        return this.menuData.asObservable();
    }

    sendAdminMenuData(data : any) {
        this.adminMenuData.next(data);
    }
    
    clearAdminMenuData() {
        this.adminMenuData.next();
    }

    getAdminMenuData() {
        return this.adminMenuData.asObservable();
    }

    sendSearchData(data : any) {
        this.searchData.next(data);
    }

    clearSearchData() {
        this.searchData.next();
    }

    getSearchData() : Observable<any> {
        return this.searchData.asObservable();
    }

    getSpecialViewModeStatus() : Observable<any> {
        return this.specialViewModeStatus.asObservable();
    }

    sendSpecialViewModeStatus(data : any) {
        this.specialViewModeStatus.next(data);
    }
}
