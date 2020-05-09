import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  // teams: any = [];
  // data$: Observable<any>;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.data$ = this.http.get('api/comments');
    // this.data$.subscribe(x => {
    //   this.teams = [...x];
    // })
  }

}
