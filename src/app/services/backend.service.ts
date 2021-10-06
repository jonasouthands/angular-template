import {Injectable} from '@angular/core';
import {Data} from '../../data';
import {HttpClient} from "@angular/common/http";
import {GlobalVar} from "../../GlobalVar";

@Injectable({
  providedIn: 'root'
})

//define class
export class BackendService {
//variables
  data: Data[] = [];
  global = GlobalVar;

//constructor
  constructor(public http: HttpClient) {}

//methods

//get data for home route
  getHomeData(): {} {
    //get request to global data url + the slug. Response of the get request gets passed into the data variable
    this.http.get<Data[]>(this.global.dataUrl + '/home').subscribe(res => {
      this.data = res;
    })
    return this.data;
  }

//get data from page specified by url slug
  getPageData(paramId: string | null): {} {
    this.http.get<Data[]>(this.global.dataUrl + paramId).subscribe(res => {
      this.data = res;
    })
    console.log(paramId);
    return this.data;
  }
}
