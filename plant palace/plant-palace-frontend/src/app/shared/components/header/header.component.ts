import { Component } from '@angular/core';
import { IDropdownItem } from '../../models/dropdown-item';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed = true;

  plantsDropdownItems: IDropdownItem[] = [
    {
      type: 'plants',
      categoryName: 'Flowers',
      categoryLink: 'flowers'
    },
    {
      type: 'plants',
      categoryName: 'Small Plants',
      categoryLink: 'small-plants'
    },
    {
      type: 'plants',
      categoryName: 'Large Plants',
      categoryLink: 'large-plants'
    },
    {
      type: 'plants',
      categoryName: 'Outdoor Plants',
      categoryLink: 'outdoor-plants'
    },
    {
      type: 'plants',
      categoryName: 'Fake Plants',
      categoryLink: 'fake-plants'
    },
  ];

  equipmentDropdownItems: IDropdownItem[] = [
    {
      type: 'equipment',
      categoryName: 'Pots',
      categoryLink: 'pots'
    },
    {
      type: 'equipment',
      categoryName: 'Gardening Tools',
      categoryLink: 'gardening-tools'
    },
    {
      type: 'equipment',
      categoryName: 'Gloves',
      categoryLink: 'gloves'
    },
    {
      type: 'equipment',
      categoryName: 'Pesticides',
      categoryLink: 'pesticides'
    },
    {
      type: 'equipment',
      categoryName: 'Soil',
      categoryLink: 'soil'
    },
  ];

}
