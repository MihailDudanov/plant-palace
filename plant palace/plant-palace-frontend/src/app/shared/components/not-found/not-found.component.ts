import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  errorCode: number = 404;
  errorMessage: string = 'Ooops! The page you are trying to access does not exist.'
}
