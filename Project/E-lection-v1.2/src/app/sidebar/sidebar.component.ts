import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // <ul class="right hide-on-med-and-down">
    //                 
    //                 <li ><a [routerLink]="['/users']">User Profile</a></li>
    //                 <li ><a [routerLink]="['/elections']">Elections</a></li>
    //                 <li><a [routerLink]="['/login']">Logout</a></li>
    //             </ul>

    { path: 'home', title: 'Home',  icon: 'ti-home', class: '' }, // = <li class="active"><a href="#/home">Home</a></li>
    { path: 'table', title: 'Election',  icon: 'ti-panel', class: '' },
    { path: 'charts', title: 'Chart',  icon: 'ti-panel', class: '' },
    { path: 'users', title: 'User Profile',  icon:'ti-user', class: '' },
   // { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
   // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
   // { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
   // { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
   // { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
