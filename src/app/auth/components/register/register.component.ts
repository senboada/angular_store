import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  register(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const valueForm = this.form.value;
      const resultado = this.AuthService.createUser(valueForm.email, valueForm.password)
        .then((result) => {
          this.router.navigate(['/auth/login']);
        }).catch((err) => {
          console.log(err);
        });
        
    }
  }


  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
