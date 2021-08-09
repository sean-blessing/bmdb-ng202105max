import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/model/actor.class';
import { ActorService } from 'src/app/service/actor.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title: string = "Actor-List";
  actors: Actor[] = [];

  constructor(private actorSvc: ActorService) {
  }

  ngOnInit() {
    console.log("calling all actors!");
    this.actorSvc.list().subscribe(
      resp => {
        this.actors = resp as Actor[];
      },
      err => { console.log(err);}
    );

  }

}
