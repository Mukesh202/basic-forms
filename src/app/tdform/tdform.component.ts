import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  //  @ViewChild('contactForm', null)
  //  contactForm: NgForm = new NgForm;
 
  "contact":"contact";

  // value:{
  //   "userbane":"hello",
  //   "password":"world"
  // }
  constructor() { }

  ngOnInit(): void {

    // this.contact={
    //   username:"",
    //   password:""
    // }
  }

  onSubmit(contactForm: any){
    console.log(contactForm.value);
    
  }
  // export class contact{
  //   username:string;
  //   // password:string
  // }

}
