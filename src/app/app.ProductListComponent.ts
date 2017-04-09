import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { Product }    from './app.Product';

@Component({selector: 'ProductList', templateUrl: 'app/app.ProductListComponent.html'})
export class ProductListComponent{

    public dataJson : JSON;
    public arrayOfKeys :string[];

    constructor(private _httpService: HttpService) {
      
       this.getProductList();
       // this.arrayOfKeys =   [{"id","name"}];                 //Object.keys(this.getProductList());
        // this.arrayOfKeys = Object.keys(this.getProductList()); 
         console.log("\n \n **************** Keys: " + this.dataJson);
    }

    
    ngOnInit() { 
        // this.getProductList();
        // this.arrayOfKeys = Object.keys(this.getProductList());
        // console.log("\n \n **************** Keys: " + this.arrayOfKeys);
    }

      getProductList(){
         this._httpService.getAllProducts().subscribe(data => this.dataJson = data);
    }

}