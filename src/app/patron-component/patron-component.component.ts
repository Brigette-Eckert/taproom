import { Component, OnInit } from '@angular/core';
import { Brew } from '../brew.model'
import { KegDataService } from '../keg-data.service';

@Component({
  selector: 'app-patron-component',
  templateUrl: './patron-component.component.html',
  styleUrls: ['./patron-component.component.css'],
})

export class PatronComponentComponent implements OnInit {
  //dependency injection
  constructor(private _kegDataService: KegDataService) { }

  kegs: Array<any>;

  ngOnInit() {
    this.kegs = this._kegDataService.startingKegs();
  }

}
