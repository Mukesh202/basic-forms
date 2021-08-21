import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  simpleform = new FormGroup ({
    username: new FormControl('',Validators.required) ,
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  // contactform= new FormGroup ({
  //   companyname: new FormControl('',Validators.required),
  //   policyname: new FormControl('')        
  // });

// addLoanTypeForm= new FormGroup ({})

//   'user'= new FormArray([
//     this.fb.group({
//       'name': new FormControl (''),
//       'age': new FormControl(''),
//       'dept': new FormControl('')
//     })
//   ])
 
  constructor(private fb:FormBuilder) { }
  ngOnInit(): void {
  }
  // addLoanType(){}
  

  //  collectdata(){
  //   console.log(this.contactform.value);
  //     }
  onSubmit(){
    console.log(this.simpleform.value);
    console.log(this.simpleform.controls['username'].value);
      }

    
}
