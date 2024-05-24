import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DemoService } from 'src/services/demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodName: string = '';
  constructor(private _demo: DemoService, private _router:Router) { }

  ngOnInit(): void {
  }
  search(){
    this._demo.getSearchResult(this.foodName).subscribe((res)=>{
      this._router.navigate(['/search'], {state:{data:res.results}})
      console.log('search result', res.results);
      
    })

  }
}
