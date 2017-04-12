import { Component } from '@angular/core';
import { Product }    from './app.Product';
import {NgModule} from "@angular/core";
import { NgForm } from '@angular/forms';
import { HttpService} from './http.service';
import {Router } from '@angular/router';

@Component({selector: 'newProductForm', templateUrl: 'app/newProductFormComponent.html'})
export class NewProductFormComponent{

private dataJson : JSON;

constructor(private _httpService: HttpService, private router: Router ) {}
  
  product: Object = {};
  
  saveProduct(form: any): void {  
    console.log('you submitted value:', form);  
     this.sendDataToServer(form);
 }

 sendDataToServer(dataFromForm : any) {

    // this._httpService.getAllProducts().subscribe(data => this.dataJson = data);
  
    this._httpService.sendData01(dataFromForm).subscribe(data => this.dataJson = data);
     //  redirectTo: '/products',  
   //  appRoutes.navigate(['products']);  
   this.router.navigate(['products']); 
  }


}
