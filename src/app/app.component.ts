import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectf1';

  username=new FormControl ('Mukesh');
    password=new FormControl('Kumar');
    email=new FormControl ('email');
    adress=new FormControl('adress')

collectData()
{
  console.log(this.username.value+this.password.value+this.email.value+this.adress.value)
  // alert(this.username.value+this.password.value)
}

}
