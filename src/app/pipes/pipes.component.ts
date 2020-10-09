import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  clickCounter: number = 0;
  dblClickCounter: number = 0;
  name: string = '';
  number: number= 0;

  ngOnInit(): void {
  }
  click(): void{
    this.clickCounter += 1;
  }

  dblclick():void{
    this.dblClickCounter += 1;
  }

  blur(): void{
    console.log("Blur event is working");
  }

  focus(): void{
    console.log("Focus event is working");
  }

  scroll(): void{
    console.log("Scroll is working");
  }

  pipes(name: string): void{
    this.name = name;
  }

  numbers(currency: number): void{
    this.number = currency; 
  }

}
