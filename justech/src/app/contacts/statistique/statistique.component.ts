import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StatistiqueService} from '../../services/statistique.service';
import { first } from 'rxjs/operators';
import {Statistique} from '../../models/Statistique'
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
stat_simple:Statistique;
loading:boolean=false;
  constructor(private statistiqueService:StatistiqueService) { }

  ngOnInit(): void {
this.statistiqueService.stat_simple().subscribe(res=>
  {this.stat_simple=res;
    this.loading=true;
  console.log(this.stat_simple)}
  )
  }

}
