import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
// username= new FormControl;
// password= new FormControl;
// email= new FormControl;
// adress= new FormControl;
// pincode= new FormControl
companyname= new FormControl;
policyname= new FormControl;
attachment= new FormControl;
pincode= new FormControl;
adress= new FormControl;
email= new FormControl;
password= new FormControl;
username= new FormControl
  constructor() { }
  ngOnInit(): void {
  }
  // collectData(){
  //   console.log(this.username.value+this.password.value+this.email.value+this.adress.value)
   // }
   collectData(){}
   collectdata(){
    console.log();
  }

}
