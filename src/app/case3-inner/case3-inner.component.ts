import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case3-inner',
  templateUrl: './case3-inner.component.html',
  styleUrls: ['./case3-inner.component.css']
})
export class Case3InnerComponent implements OnInit {

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
