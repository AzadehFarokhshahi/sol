import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'secintv',
  templateUrl: './secintv.component.html',
  styleUrls: ['./secintv.component.less']
})
export class SecintvComponent implements OnInit {

  asce =false;
  desc = false;
  l1=false;
  l2=false;
  l3=false;
  l4=false;
  l5=false;
  l6=false;
  l7=false;
  l8=false;
  l9=false;
  l10=false;

  constructor() { }

  ngOnInit(): void {
  }

  selectAsce(){
    this.asce =true;
    this.desc =false;
  }

  selectDesc(){
    this.desc =true;
    this.asce=false;
  }

  selectL1(){
    this.l1 =true;
    this.l2 =false;
  }

}
