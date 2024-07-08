import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IRegisterModel } from '../../models/register';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public formGroup: FormGroup = this.formBuilder.group({});

  constructor(
    @Inject(FormBuilder) private readonly formBuilder: FormBuilder,
    @Inject(AuthenticationService) private readonly authenticationService: AuthenticationService,
    ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public submit() {
    const payload = this.formGroup.getRawValue() as IRegisterModel;
    this.authenticationService.register(payload).subscribe(result => {
      //TODO Handle result here
      console.log(result);
    })
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
