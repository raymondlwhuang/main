import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolios = [
    { website:'http://driving.ca', url: environment.helpUrl+'/images/driving.png',show: false },
    { website:'http://www.livingdeal.com', url: environment.helpUrl+'/images/livingdeal.png',show: false },
    { website:'https://fansunited.org/', url: environment.helpUrl+'/images/fansunited.png',show: false },
    { website:'http://o.canada.com', url: environment.helpUrl+'/images/ocanada.png',show: false },
    { website:'http://www.windsorstar.com', url: environment.helpUrl+'/images/windsorstar.png',show: false },
    { website:'http://www.edmontonjournal.com', url: environment.helpUrl+'/images/edmontonjournal.png',show: false },
    { website:'http://www.calgaryherald.com', url: environment.helpUrl+'/images/calgaryherald.png',show: false },
    { website:'http://ernie.com/', url: environment.helpUrl+'/images/ernie.png',show: false }
  ]
  constructor() { }

  ngOnInit() {
  }

}
