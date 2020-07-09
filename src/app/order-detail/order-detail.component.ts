import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  //private orderAomt: ElementRef;
  
  @ViewChild('item', {static: false}) item: ElementRef;
  @ViewChild('orders', {static: false}) orders: ElementRef;
  // @ViewChild('orderAmt', {static: false}) set orderAmt(orderAmtt: ElementRef){
  //   if(orderAmtt){
  //     this.orderAomt = orderAmtt;
  //   }
  // }
  subTotal:number = 0.00;
  isSuccess:boolean = false;
  taxAmt:number = 0.00;
  total:number = 0.00;
  orderDetailData = [];
  quantity:Array<number> = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
 

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.get().subscribe(resp =>{
    //   resp;
    //   console.log(resp)
    // });
    //this.calc0();
  }
  onSuccess(){
    this.isSuccess = true;
    
  }
  
  qtyInc(index, order){
    this.quantity[index] = this.quantity[index] + 1;
    if(order.itemName == "Dbl_Che Marg" || order.itemName == "Farmhouse" || order.itemName == "Pepper Paneer" || order.itemName == "Mexican Green" || order.itemName == "Deluxe Veggie" || order.itemName == "Pizza Pizza" || order.itemName == "Pizza Pizza" || order.itemName == "Fresh Veggie" || order.itemName == "Paneer Makhani" || order.itemName == "Corn and Cheese" || order.itemName == "PM Onion" || order.itemName == "PM Golden Corn" || order.itemName == "PM Paneer Pizza"){
      order.itemPrice += 240;
      this.subTotal = this.subTotal + 240;
      this.taxAmt = (5 * this.subTotal)/100;
      this.total = this.taxAmt + this.subTotal;
    }
    else if(order.itemName == "PM Tomato" || order.itemName == "PM Cheesy" || order.itemName == "Gold Delight" || order.itemName == "NVG Dominato" || order.itemName == "Nvg Supreme" || order.itemName == "Chicken Fiesta" || order.itemName == "Pepper BBQ" || order.itemName == "Afron PP Veg" || order.itemName == "PM Chicken Sausage" || order.itemName == "Tomato and Cheese" || order.itemName == "JAMX JRK Veg" || order.itemName == "Chicken Sausage"){
      order.itemPrice += 150;
      this.subTotal = this.subTotal + 150;
      this.taxAmt = (5 * this.subTotal)/100;
      this.total = this.taxAmt + this.subTotal;
    }
     else if(order.itemName == "Tandoori Paneer" || order.itemName == "Ausi BBQ Veg"){
      order.itemPrice += 100;
      this.subTotal = this.subTotal + 100;
      this.taxAmt = (5 * this.subTotal)/100;
      this.total = this.taxAmt + this.subTotal;
     }
  }

  qtyDec(index, order){
    if(this.quantity[index] > 1){
      this.quantity[index] = this.quantity[index] - 1;
      if(order.itemName == "Dbl_Che Marg" || order.itemName == "Farmhouse" || order.itemName == "Pepper Paneer" || order.itemName == "Mexican Green" || order.itemName == "Deluxe Veggie" || order.itemName == "Pizza Pizza" || order.itemName == "Pizza Pizza" || order.itemName == "Fresh Veggie" || order.itemName == "Paneer Makhani" || order.itemName == "Corn and Cheese" || order.itemName == "PM Onion" || order.itemName == "PM Golden Corn" || order.itemName == "PM Paneer Pizza"){
        order.itemPrice -= 240;
        this.subTotal = this.subTotal - 240;
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(order.itemName == "PM Tomato" || order.itemName == "PM Cheesy" || order.itemName == "Gold Delight" || order.itemName == "NVG Dominato" || order.itemName == "Nvg Supreme" || order.itemName == "Chicken Fiesta" || order.itemName == "Pepper BBQ" || order.itemName == "Afron PP Veg" || order.itemName == "PM Chicken Sausage" || order.itemName == "Tomato and Cheese" || order.itemName == "JAMX JRK Veg" || order.itemName == "Chicken Sausage"){
        order.itemPrice -= 150;
        this.subTotal = this.subTotal - 150;
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
       else if(order.itemName == "Tandoori Paneer" || order.itemName == "Ausi BBQ Veg"){
        order.itemPrice -= 100;
        this.subTotal = this.subTotal - 100;
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
       }
    }
  }

  calc0(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Dbl_Che Marg")[0];
      if(this.item.nativeElement.children[0].className == ""){
        this.orderDetailData.push(option);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[0].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      
    });
  }
  calc1(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Farmhouse")[0];
      if(this.item.nativeElement.children[1].className == ""){
        this.orderDetailData.push(option);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[1].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      
    });
  }
  calc2(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Pepper Paneer")[0];
      if(this.item.nativeElement.children[2].className == ""){
        this.orderDetailData.push(option);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[2].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      
    });
  }
  calc3(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Mexican Green")[0];
      if(this.item.nativeElement.children[3].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[3].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      
    });
  }
  calc4(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Deluxe Veggie")[0];
      if(this.item.nativeElement.children[4].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[4].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      
    });
  }
  calc5(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Pizza Pizza")[0];
      if(this.item.nativeElement.children[5].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[5].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc6(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Fresh Veggie")[0];
      if(this.item.nativeElement.children[6].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[6].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc7(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Paneer Makhani")[0];
      if(this.item.nativeElement.children[7].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[7].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc8(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Corn and Cheese")[0];
      if(this.item.nativeElement.children[8].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[8].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc9(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "PM Onion")[0];
      if(this.item.nativeElement.children[9].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[9].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc10(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "PM Golden Corn")[0];
      if(this.item.nativeElement.children[10].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData[0]);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[10].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc11(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "PM Paneer Pizza")[0];
      if(this.item.nativeElement.children[11].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData[0]);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[11].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc12(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "PM Cheesy")[0];
      if(this.item.nativeElement.children[12].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[12].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc13(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "PM Tomato")[0];
      if(this.item.nativeElement.children[13].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[13].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc14(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Gold Delight")[0];
      if(this.item.nativeElement.children[14].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[14].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc15(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "NVG Dominato")[0];
      if(this.item.nativeElement.children[15].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[15].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc16(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Nvg Supreme")[0];
      if(this.item.nativeElement.children[16].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[16].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc17(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Chicken Fiesta")[0];
      if(this.item.nativeElement.children[17].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[17].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc18(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Pepper BBQ")[0];
      if(this.item.nativeElement.children[18].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[18].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc19(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Afron PP Veg")[0];
      if(this.item.nativeElement.children[19].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[19].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc20(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "PM Chicken Sausage")[0];
      if(this.item.nativeElement.children[20].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[20].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc21(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Chicken Sausage")[0];
      if(this.item.nativeElement.children[21].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[21].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc22(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Tomato and Cheese")[0];
      if(this.item.nativeElement.children[22].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[22].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc23(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "JAMX JRK Veg")[0];
      if(this.item.nativeElement.children[23].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[23].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc24(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Tandoori Paneer")[0];
      if(this.item.nativeElement.children[24].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[24].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
  calc25(){
    this.dataService.get().subscribe(resp =>{
      let data = resp;
      let option = data.filter( item => item['itemName'] === "Ausi BBQ Veg")[0];
      if(this.item.nativeElement.children[25].className == ""){
        this.orderDetailData.push(option);
        let orderData = this.orderDetailData.filter(ele => ele.itemPrice)[0];
        console.log(orderData['itemPrice']);
        this.subTotal = this.subTotal + option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
      else if(this.item.nativeElement.children[25].className == "selected"){
        let index = this.orderDetailData.indexOf(option);
        this.orderDetailData.splice(index, 1);
        this.subTotal = this.subTotal - option['itemPrice'];
        this.taxAmt = (5 * this.subTotal)/100;
        this.total = this.taxAmt + this.subTotal;
      }
    });
  }
}
