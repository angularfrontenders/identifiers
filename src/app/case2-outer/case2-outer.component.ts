import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case2-outer',
  templateUrl: './case2-outer.component.html',
  styleUrls: ['./case2-outer.component.css']
})
export class Case2OuterComponent implements OnInit {

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

  public get resultId(): string {
    return `${this._id}_case2Inner`;
  }

}
