import { Component } from '@angular/core';
import { Product }    from './app.Product';
import {NgModule} from "@angular/core";
import { NgForm } from '@angular/forms';
import { HttpService} from './http.service';

@Component({selector: 'newProductForm', templateUrl: 'app/newProductFormComponent.html'})
export class NewProductFormComponent{

private testResponse:Response;

constructor(private _httpService: HttpService) {}
  
  product: Object = {};
  
  saveProduct(form: any): void {  
    console.log('you submitted value:', form);  
     this.sendDataToServer(form);
 }

 sendDataToServer(dataFromForm : any) {

    // this._httpService.getAllProducts().subscribe(data => this.testResponse = data);
    //this._httpService.createFood(dataFromForm).subscribe(data => this.testResponse = data);
    this._httpService.sendData01(dataFromForm);
  }


}
