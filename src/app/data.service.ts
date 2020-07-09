import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  orderDetail: Array<object> = [
    {itemName:'Dbl_Che Marg', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Farmhouse', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Pepper Paneer', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Deluxe Veggie', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Mexican Green', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Pizza Pizza', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Fresh Veggie', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Paneer Makhani', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'Corn and Cheese', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'PM Onion', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'PM Golden Corn', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'PM Paneer Pizza', itemType:'15 Inch Large', itemPrice: 240.00},
    {itemName:'PM Tomato', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'PM Cheesy', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Gold Delight', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'NVG Dominato', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Nvg Supreme', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Chicken Fiesta', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Pepper BBQ', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Afron PP Veg', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'PM Chicken Sausage', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Chicken Sausage', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Tomato and Cheese', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'JAMX JRK Veg', itemType:'15 Inch Large', itemPrice: 150.00},
    {itemName:'Tandoori Paneer', itemType:'15 Inch Large', itemPrice: 100.00},
    {itemName:'Ausi BBQ Veg', itemType:'15 Inch Large', itemPrice: 100.00}
  ];
  constructor() { }

  get(){
    return of(this.orderDetail)
  }
}
