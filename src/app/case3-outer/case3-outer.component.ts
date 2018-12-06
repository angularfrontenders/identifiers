import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case3-outer',
  templateUrl: './case3-outer.component.html',
  styleUrls: ['./case3-outer.component.css']
})
export class Case3OuterComponent implements OnInit {

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
    return `${this._id}_case3Inner`;
  }

}
