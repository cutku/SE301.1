import {Component, ViewChild, Input, Output, ElementRef, EventEmitter} from '@angular/core';

import {BaThemePreloader} from '../../../theme/services';

import 'amcharts3';
import 'amcharts3/amcharts/plugins/responsive/responsive.js';
import 'amcharts3/amcharts/serial.js';

import 'ammap3';
import 'ammap3/ammap/maps/js/worldLow';


import {BaAmChartThemeService} from './baAmChartTheme.service';

@Component({
  selector: 'ba-am-chart',
  templateUrl: './baAmChart.html',
  styleUrls: ['./baAmChart.scss'],
  providers: [BaAmChartThemeService],
})
export class BaAmChart {
  static ready(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  static isReady: any;
  static makeChart(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
  static themes: any;

  @Input() baAmChartConfiguration:Object;
  @Input() baAmChartClass:string;
  @Output() onChartReady = new EventEmitter<any>();

  @ViewChild('baAmChart') public _selector:ElementRef;

  constructor (private _baAmChartThemeService:BaAmChartThemeService) {
    this._loadChartsLib();
  }

  ngOnInit() {
    BaAmChart.themes.blur = this._baAmChartThemeService.getTheme();
  }

  ngAfterViewInit() {
    let chart = BaAmChart.makeChart(this._selector.nativeElement, this.baAmChartConfiguration);
    this.onChartReady.emit(chart);
  }

  private _loadChartsLib():void {
    BaThemePreloader.registerLoader(new Promise((resolve, reject) => {
      let amChartsReadyMsg = 'AmCharts ready';

      if (BaAmChart.isReady) {
        resolve(amChartsReadyMsg);
      } else {
        BaAmChart.ready(function () {
          resolve(amChartsReadyMsg);
        });
      }
    }));
  }
}
