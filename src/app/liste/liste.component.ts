import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Section } from '../interfaces/section';
import { DataServiceService } from '../services/dataService/data-service.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import * as moment from 'moment';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  encapsulation: ViewEncapsulation.None
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
        let repos = [];
        data.items.forEach(function(element,key) {
          repos[key]={
            avatar: element.owner.avatar_url,
            name_repo:element.name,
            name_owner: element.owner.login,
            description_repo:element.description,
            nb_stars:element.stargazers_count,
            nb_issues:element.open_issues_count,
            time:moment().diff(moment(element.created_at), "days"),
          }
        });
        this.repos=repos;
        console.log(this.repos)

      },
      err=>{
        console.log('erreur',err)
      }
    )
  }

}
