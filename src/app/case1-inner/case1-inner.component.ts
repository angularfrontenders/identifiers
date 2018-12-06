import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case1-inner',
  templateUrl: './case1-inner.component.html',
  styleUrls: ['./case1-inner.component.css']
})
export class Case1InnerComponent implements OnInit {

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
