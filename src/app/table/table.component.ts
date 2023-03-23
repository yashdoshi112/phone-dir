import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Angular 6';
  email="";
  id = "";
  emailId="";
  aa:boolean=false;

  users=[{
    id:'123',
    email:'abc@gmail.com'
  },{
    id:'1234',
    email:'xyz@hotmail.com'
  },{
    id:'12345',
    email:'jsgsbh@kk.com'
  },{
    id:'123456',
    email:'test@gmail.com'
  }]

  setIndex(ii){
    this.aa=ii;
    console.log
  }

  showDetails(customer){
    this.id = customer.id;
    this.emailId = customer.email;
  }
}
