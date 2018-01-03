import { Component, OnInit } from '@angular/core';


declare interface TesttData {
    headerRow: string[];
    dataRows: string[][];

  
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'testt.component.html'
})

export class Testt implements OnInit{
    public tableData1: TesttData;
    public tableData2: TesttData;

    
    ngOnInit(){
        
    }

    
}
