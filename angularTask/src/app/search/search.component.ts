import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: any[] = [];
  foodName: string = '';
  constructor(private _router:Router) {
    const navigation = this._router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.searchResults = navigation.extras.state['data'];
    }
   }

  ngOnInit(): void {
  }

}
