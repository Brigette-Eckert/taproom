import { Component, OnInit } from '@angular/core';
import { Brew } from './brew.model'

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  kegs: Brew[] = [
    new Brew('Hazelnut Brown Nectar', 'Rogue Ales', 'A nutty twist to a traditional European Brown Ale. Dark brown in color with a hazelnut aroma, a rich nutty flavor and a smooth malty finish.', 7, 5.6 , 8, '../assets/img/hazelnut.jpg'),
    new Brew('Obsidian Stout', 'Deschutes Brewery', 'Notes of espresso and dark chocolate with a roasty finish.', 7, 6.4, 100, '../assets/img/stout.jpg'),
    new Brew('Ruby Ale', 'McMenamins', 'Light, crisp and refreshingly fruity. Great Western Premium 2-Row and 42 pounds of Oregon-grown and processed raspberry puree is used to craft every colorful batch. Simple but delicious.', 5, 4.39, 45, '../assets/img/ruby2.png'),
    new Brew('Widmer Hefeweizen', 'Widmer Brothers Brewing Company', 'This naturally cloudy flagship brew starts with the highest quality wheat. It\'s bold, clean flavor and pronounced citrus and floral aromas are what define American-style Hefeweizen. So pour yourself a cool, cloudy glass, finish with a lemon and enjoy', 4, 4.9, 25, '../assets/img/hefe.jpg')
  ];

  selectedBrew: Brew = this.kegs[0];

  editKeg(clickedBrew){
    this.selectedBrew = clickedBrew;
  }

 replaceKeg(clickedBrew){
    this.selectedBrew = clickedBrew;
    this.selectedBrew.pintsRemaining = 124;
 }

  constructor() { }

  ngOnInit() {
  }

}
