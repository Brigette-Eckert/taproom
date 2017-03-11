import { Component, OnInit } from '@angular/core';
import { KegDataService } from '../keg-data.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css'],
})
export class EmployeeComponentComponent implements  OnInit{
  //dependency injection
  constructor(private _kegDataService: KegDataService) { }
  kegs: Array<any>;

  ngOnInit() {
    this.kegs = this._kegDataService.startingKegs();
  }

}
