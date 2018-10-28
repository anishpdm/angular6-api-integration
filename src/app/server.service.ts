import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ServerService {
  constructor(private http: Http) {}
  storeServers(servers: any[]) {
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('https://udemy-ng-http.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    return this.http.put('https://newapp-9c0c1.firebaseio.com/data.json',
      servers,
      {headers: headers});
  }
  getServers():any {
    // return this.http.get('https://newapp-9c0c1.firebaseio.com/data.json')

    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(
        (response: Response) =>  response.json()  )
      // .catch(
      //   (error: Response) => {
      //     return Observable.throw('Something went wrong');
      //   }
      // );
  }
  getAppName() {
    return this.http.get('https://newapp-9c0c1.firebaseio.com/appName.json')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
