import { Component } from '@angular/core';

import '../assets/app.css';

declare var $:any;
@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    title = 'E-Lection'
    title2 = 'BETA TEST'

 }