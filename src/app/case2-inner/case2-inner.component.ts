import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case2-inner',
  templateUrl: './case2-inner.component.html',
  styleUrls: ['./case2-inner.component.css']
})
export class Case2InnerComponent implements OnInit {

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
