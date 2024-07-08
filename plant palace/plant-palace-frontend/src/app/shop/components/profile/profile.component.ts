import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public formGroup: FormGroup = this.formBuilder.group({});
  disable: boolean = true;

  constructor(
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,) {}  // No need for @Inject here

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['Test', Validators.required],
      surname: ['Test', Validators.required],
      password: ['test', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['test@gmail.com', [Validators.required, Validators.email]],
      address: ['Ul. Ruger Boshkovikj 16', Validators.required],
      zipcode: [1000, [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      telephone: [2034953, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      info: ['Test info', Validators.required],
      city: ['Skopje', Validators.required],
      emailAddress: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.formGroup.valid) {
      // Handle form submission
      console.log('Form Submitted', this.formGroup.value);
    }
  }
}
