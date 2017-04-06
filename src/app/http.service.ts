import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { URLSearchParams } from "@angular/http"


@Injectable()
export class HttpService {

    private _url: string = "http://localhost:8085/paygilant/getAllProducts"; 
    private saveProductURL = "http://localhost:8085/paygilant/saveProduct"; 
    private testResponse:Response;

    constructor(private _http: Http) {} // Injecting the Http Service
  
  sendData(data: any): Observable<Object> {

      //  let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers, method: "post"});
        let body = this._http.post(this.saveProductURL ,data, options).map((res: Response) => res || {});
        this._http.post(this.saveProductURL ,data, options).subscribe(
            data => {
                      this.testResponse = data ;
                      console.log("I SEE DATA HERE: ", this.testResponse.text());
                     }
        );
           return body;
}

 sendData01(data: any) {

      //  let encoded_data = JSON.stringify({ data });
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers, method: "post"});
       return this._http.post(this.saveProductURL ,data, options).map(data => data.json());
  }


  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }


 getAllProducts() {
    return this._http.get(this._url).map((res:Response) => res.json());
    //this._http.get(this._url).subscribe((res:Response) => this.people = res.json());
  }

testRequest() {
  let data = new URLSearchParams();
  
  data.append('username', 'username');
  data.append('password', 'password');

  this._http
    .post(this.saveProductURL, data)
      .subscribe(data => {
         console.log('********************* ok *******************');
      }, error => {
          console.log(error.json());
      });
}


    

}