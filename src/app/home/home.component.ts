import { Component, OnInit } from '@angular/core';
import {ServerService} from '../server.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newdata=[];
  constructor(private serverService:ServerService) { 
    this.onGet();
  }

  onGet() {
    this.serverService.getServers()
      .subscribe(
      
        (newdata: any[]) => {console.log(newdata);this.newdata = newdata },
        (error) => console.log(error)
      );
  }

  ngOnInit() {
  }

}
