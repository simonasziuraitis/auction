import { Component, OnInit } from '@angular/core';
import { mockAuctions } from 'src/app/mock/mock-auctions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  auctions = mockAuctions;

  ngOnInit(): void {
    console.log("app-list");
    
    //example
    this.auctions.forEach(x => console.log(x));


  }

}
