import { Component, Input } from '@angular/core';
import { IDropdownItem } from '../../models/dropdown-item';

@Component({
  selector: 'app-navigation-dropdown',
  templateUrl: './navigation-dropdown.component.html',
  styleUrls: ['./navigation-dropdown.component.scss']
})
export class NavigationDropdownComponent {
  @Input() items: IDropdownItem[] = [];

}
