import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private orderAomt: ElementRef;
  
  @ViewChild('item', {static: false}) item: ElementRef;
  @ViewChild('orders', {static: false}) orders: ElementRef;
  @ViewChild('orderAmt', {static: false}) set orderAmt(orderAmtt: ElementRef){
    if(orderAmtt){
      this.orderAomt = orderAmtt;
    }
  }
  subTotal:number = 0.00;
  isSuccess:boolean = false;
  taxAmt:number = 0.00;
  total:number = 0.00;
  arr = [];
  // pmTomato:boolean = false;
  dblChe:boolean = false;
  // farmhouse:boolean = false;
  // pepperPaneer:boolean = false;
  // pizzaPizza:boolean = false;
  // deluxeVeggie: boolean = false;
  // pepperBbq: boolean = false;
  // pmPaneerpizza: boolean = false;
  // mexicanGreen: boolean = false;
 

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    
  }
  ngAfterViewChecked(){
    //console.log(typeof(this.orderAomt.nativeElement.innerHTML));
    // if(this.dblChe == true){
    //   this.calcSubTotal();
    // }
  }
  onSuccess(){
    this.isSuccess = true;
    
  }
  calcSubTotal(){
    this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    this.taxAmt = (5 * this.subTotal)/100;
    this.total = this.taxAmt + this.subTotal;
    console.log(parseFloat(this.orderAomt.nativeElement.innerHTML));
    console.log(this.item.nativeElement.children)
    this.arr = this.item.nativeElement.children
    console.log(this.orders.nativeElement.children.length);
    if(this.item.nativeElement.children[0].className == "selected"){
      // this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
      // this.taxAmt = (5 * this.subTotal)/100;
      // this.total = this.taxAmt + this.subTotal;
      console.log("ture0")
    }else if(this.item.nativeElement.children[0].className == ""){
      // this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
      // this.taxAmt = (5 * this.subTotal)/100;
      // this.total = this.taxAmt + this.subTotal;
      console.log("false0")
    }
    // else{
    //   this.subTotal = this.subTotal;
    //   this.taxAmt = this.taxAmt;
    //   this.total = this.total;
    // }
    if(this.item.nativeElement.children[1].className == "selected"){
      // this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
      // this.taxAmt = (5 * this.subTotal)/100;
      // this.total = this.taxAmt + this.subTotal;
      console.log("ture1")
    }else if(this.item.nativeElement.children[1].className == ""){
      // this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
      // this.taxAmt = (5 * this.subTotal)/100;
      // this.total = this.taxAmt + this.subTotal;
      console.log("false1")
    }
    // else{
    //   this.subTotal = this.subTotal;
    //   this.taxAmt = this.taxAmt;
    //   this.total = this.total;
    // }
    if(this.item.nativeElement.children[2].className == "selected"){
      // this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
      // this.taxAmt = (5 * this.subTotal)/100;
      // this.total = this.taxAmt + this.subTotal;
      console.log("ture2")
    }else if(this.item.nativeElement.children[2].className == ""){
      // this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
      // this.taxAmt = (5 * this.subTotal)/100;
      // this.total = this.taxAmt + this.subTotal;
      console.log("false2")
    }
    // else{
    //   this.subTotal = this.subTotal;
    //   this.taxAmt = this.taxAmt;
    //   this.total = this.total;
    // }
    // if(this.item.nativeElement.children[3].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[4].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[5].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[6].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[7].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[8].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[9].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    // if(this.item.nativeElement.children[10].className == "selected"){
    //   this.subTotal = this.subTotal + parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }else{
    //   this.subTotal = this.subTotal - parseFloat(this.orderAomt.nativeElement.innerHTML);
    //   this.taxAmt = (5 * this.subTotal)/100;
    //   this.total = this.taxAmt + this.subTotal;
    // }
    if(this.orders.nativeElement.children.length == 0){
      this.subTotal = 0;
      this.taxAmt = 0;
      this.total = 0;
    }
  }
}
