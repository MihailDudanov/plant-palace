import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginModel } from '../../models/login';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public formGroup: FormGroup = this.formBuilder.group({});

  constructor(
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,
    @Inject(AuthenticationService) private readonly authenticationService: AuthenticationService,
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    const payload = this.formGroup.getRawValue() as ILoginModel;
    this.authenticationService.login(payload).subscribe(result => {
      //TODO Handle result here
      console.log(result);
    })
  }
  
}
