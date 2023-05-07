import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../service/auth.service";
import {TokenStorageService} from "../../service/token-storage.service";
import {NotificationService} from "../../service/notification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.registerForm = this.createRegisterForm();
  }

  private createRegisterForm(): FormGroup {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])]
    })
  }

  public submit(): void {
    console.log(this.registerForm.value);
    this.authService.register({
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      firstname: this.registerForm.value.firstname,
      lastname: this.registerForm.value.lastname,
      confirmPassword: this.registerForm.value.confirmPassword,
    }).subscribe(data => {
      this.notificationService.showSnackBar('Successfully registered');
    }, error => {
      this.notificationService.showSnackBar('Something went wrong');
    });
  }
}

