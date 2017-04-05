import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {PageNotFoundComponent} from './app.PageNotFoundComponent';
import {ProductListComponent} from './app.ProductListComponent';
import {ProductDetailComponent} from './app.ProductDetailComponent';
import {ProductCenterComponent} from './app.ProductCenterComponent';
import {NewProductComponent} from './app.NewProductComponent';
import {RouterModule, Routes } from '@angular/router';
import {NavComponent} from './navComponent'
import {NewProductFormComponent} from './newProductFormComponent';
import {FormsModule}   from '@angular/forms'; 
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpService } from './http.service';




const appRoutes: Routes = [
  { path: 'product-center', component: ProductCenterComponent },
  { path: 'newProduct', component: NewProductComponent },
  { path: 'product/:id',      component: ProductDetailComponent },
  {
    path: 'products',
    component: ProductListComponent,
    data: { title: 'Product List' }
  },
  { path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports:      [ BrowserModule , FormsModule, RouterModule.forRoot(appRoutes) ,HttpModule,JsonpModule  ],
  providers: [HttpService],
  declarations: [ AppComponent,ProductListComponent, ProductDetailComponent, ProductCenterComponent, PageNotFoundComponent , NewProductComponent, NavComponent, NewProductFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
