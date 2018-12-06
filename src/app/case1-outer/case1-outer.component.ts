import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case1-outer',
  templateUrl: './case1-outer.component.html',
  styleUrls: ['./case1-outer.component.css']
})
export class Case1OuterComponent implements OnInit {

  private _id: string = null;

  public constructor() { }

  public ngOnInit() {
  }

  public get id(): string {
    return this._id;
  }
  @Input()
  public set id(value: string) {
    this._id = value;
  }

}
