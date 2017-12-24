import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Ranking', 'Name', 'Country', 'City', 'Votes'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '3738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '2789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '1542'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '875'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '642'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '501']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'Ranking', 'Name', 'Country', 'City', 'Votes'],
            dataRows: [
                ['1', 'Dakota Hawkins', 'Niger', 'Oud-Turnhout', '480'],
                ['2', 'Molly Hooper', 'England', 'London', '400'],
                ['3', 'Hermonie Granger', 'Netherlands', 'Baileux', '370'],
                ['4', 'Lee Ho', 'China', 'Bejing', '236'],
                ['5', 'Dorry Greene', 'Malawi', 'Feldkirchen in Kärnten', '126'],
                ['6', 'Harry Potter', 'Chile', 'Gloucester', '002']
            ]
        };
    }
}