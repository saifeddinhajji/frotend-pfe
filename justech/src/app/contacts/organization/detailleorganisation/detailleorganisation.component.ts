import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailleorganisation',
  templateUrl: './detailleorganisation.component.html',
  styleUrls: ['./detailleorganisation.component.css']
})
export class DetailleorganisationComponent implements OnInit {
  isHidden: boolean = false;
    constructor() { }

  ngOnInit(): void {
  }
socialshow(){
  this.isHidden=true;
}
close(){
  this.isHidden=false;
}
}
