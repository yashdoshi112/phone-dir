import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {CompService} from '../comp.service';

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public phoneData:any = []
  constructor(private router:Router, private compService: CompService) { }

  ngOnInit() {
    this.phoneData = this.compService.contactData;
    console.log(this.compService.contactData)
  }

  deleteItem(index:any)
  {
      this.compService.contactData.splice(index, 1);
  }


  goto() {
    this.router.navigate(['add'])
  }
}
