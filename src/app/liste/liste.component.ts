import { Component, OnInit } from '@angular/core';
import { Section } from '../interfaces/section';
import { DataServiceService } from '../services/dataService/data-service.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  constructor( private dataService:DataServiceService) { }

  repos: Section[] = [];
  
  ngOnInit() {

    this.getData();
  }

  getData(){
    this.dataService.getData().subscribe(
      (data:any) =>{
         console.log('data',data)
         
      },
      err=>{
        console.log('erreur',err)
      }
    )
  }

}
