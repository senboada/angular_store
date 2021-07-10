import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@core/services/auth/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  login(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const valueFrom = this.form.value;
      this.authService.login(valueFrom.email, valueFrom.password)
        .then(()=>{
          this.router.navigate(['/admin'])
        })
        .catch(() => {
          alert('No es valido');
        })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
