import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm
  user = {
    email:'',
    subscription: '',
    password: ''
  }
  text: string[]= [
    'Dont worry! we would not display your password here',
    'You need to remember it',
    'Its a test of your memory!',
    'we care about your privacy. Hence password could not be displayed here!',
    '463dbee@3wdudedu544b2u!'
  ]
  submitted=false;

  onSubmit() {
    console.log(this.signupForm);
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.text[Math.floor(Math.random()* this.text.length)];
    this.signupForm.resetForm();

  }

}
