import { Component, OnInit } from '@angular/core';
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public backend: BackendService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }
  getDataFromService(): void {
    this.backend.getHomeData();
  }

}
