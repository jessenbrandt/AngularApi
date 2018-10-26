import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Results } from '../results';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  results: Results[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getAPI(api: string, input: string): void {
    this.dataService.getAPI(api, input).subscribe(results => {
      this.results = results.results
      return JSON.stringify(this.dataService);
      console.log(this.results)
    })
  }

}
