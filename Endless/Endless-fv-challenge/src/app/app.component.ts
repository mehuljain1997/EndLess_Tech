import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Endless-fv-challenge';
  response: any
  newarray:[]
  constructor(private appservice:AppService) {
  }

  ngOnInit() {
    this.fetchData()
  }

  fetchData() {
    this.appservice.getRecord().subscribe((res:any) => {
    this.response =res
    this.response.sort(function(a,b) 
      {
       return a.stepNumber-b.stepNumber
      })

    for(let j=0; j<this.response.length;j++) 
    {
        this.response[j].versionContent.sort(function(a,b) 
        {
        return (b.effectiveDate < a.effectiveDate) ? -1 : ((b.effectiveDate > a.effectiveDate) ? 1 : 0);
        })
    }

  })
  }
}

