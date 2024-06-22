import { Component, VERSION, OnInit } from '@angular/core';
import { xtee } from '../../xtee/xtee';

@Component({
  selector: 'graaf13',
  templateUrl: './graaf13.component.html',
  styleUrls: [ './graaf13.component.scss' ]
})
export class Graaf13Component implements OnInit  {
  type:any;
  options: any;
  
  ngOnInit(): void {

    this.options = {
      tooltip: {},
      angleAxis: [
        {
          type: 'category',
          polarIndex: 0,
          startAngle: 90,
          endAngle: 0,
          data: ['S1', 'S2', 'S3']
        },
        {
          type: 'category',
          polarIndex: 1,
          startAngle: -90,
          endAngle: -180,
          data: ['T1', 'T2', 'T3']
        }
      ],
      radiusAxis: [{ polarIndex: 0 }, { polarIndex: 1 }],
      polar: [{}, {}],
      series: [
        {
          type: 'bar',
          polarIndex: 0,
          data: [1, 2, 3],
          coordinateSystem: 'polar'
        },
        {
          type: 'bar',
          polarIndex: 1,
          data: [1, 2, 3],
          coordinateSystem: 'polar'
        }
      ]
    };


  }


}

