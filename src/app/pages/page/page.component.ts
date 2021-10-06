import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  routeParam: string | null = '';

  constructor(public backend: BackendService,private activatedRoute: ActivatedRoute, private router: Router) {
    router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.routeParam = params.get('id');
    });
    this.getPageDataFromService();
  }

  getPageDataFromService(): void {
    this.backend.getPageData(this.routeParam);
  }

}
