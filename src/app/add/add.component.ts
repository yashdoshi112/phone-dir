import { Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {CompService} from '../comp.service';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  // contactData: any = [];
  contactForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl('')
   });

  constructor(private router:Router, private compService: CompService) { 
  }

  ngOnInit() {
  }

  onSubmit(){
    // alert(JSON.stringify(this.contactForm.value));
    this.compService.contactData.push(this.contactForm.value);
    console.log(this.compService.contactData)
    this.router.navigate(['']);
  }

  onSubmitForm() {
    console.log(this.contactForm.value);
    this.router.navigate(['']);
  }

  goback(){
    this.router.navigate(['']);
  }

}
