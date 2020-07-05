import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  myInput = [];
  constructor() { }

  ngOnInit() {
  }

  getNum(event){
    this.myInput = this.myInput + event.target.innerHTML;
  }

}
