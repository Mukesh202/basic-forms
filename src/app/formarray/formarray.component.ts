import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {

  simpleform= new FormGroup ({

    username: new FormControl('',Validators.required),
    password: new FormControl

  })
  constructor() { }
  getdata(){
    console.log(this.simpleform.value);
  }

  ngOnInit(): void {
  }

}
