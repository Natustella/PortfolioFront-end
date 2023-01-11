import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioFront-end';
  public contentfile: string='';

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {

}

public firstWay(): void {
  console.log();
}
}
