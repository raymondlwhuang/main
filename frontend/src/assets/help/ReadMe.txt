npm install -g @angular/cli@next
//Bootstrap setup
npm install --save bootstrap
npm install ngx-bootstrap --save
npm install --save jquery
npm install ngx-bootstrap --save
npm install bootstrap ngx-bootstrap jquery popper.js --save

Go through the ngx-bootstrap and add the modules needed in your app.module.ts. For example, suppose we want to use the Dropdown, Tooltip and Modal components:
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
angular.json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "styles.scss"
]
//Bootstrap setup end//
//for lazy load image
npm i @trademe/ng-defer-load    
import it into your app.module.ts  --> DeferLoadModule
npm install -g npm-install-peers
  imagesList = [
    {url: '../../assets/images/1.jpg',show: false},
    {url: '../../assets/images/2.jpg',show: false},
   ]
    <div class="images" *ngFor="let image of imagesList" (deferLoad)="image.show = true">
        <ng-container *ngIf="image.show">
          <img src={{image.url}}>
        </ng-container>
    </div>
	
You can use npm-install-peers to find and install required peer dependencies.
npm install -g npm-install-peers	
//for lazy load image end //
ng add @angular/material //pick custom or anything are ok
In angular 6 angular.json file, use the bootstrap or purple-green.css file like this will fix your issue.
	"styles": [
	  {
		"input": "node_modules/bootstrap/dist/css/bootstrap.min.css"
	  },              {
		"input": "./node_modules/@angular/material/prebuilt-themes/purple-green.css"
	  },
	  "styles.scss"
	],
//angular material //
go to https://material.angular.io/guide/getting-started for more information
ng add @angular/material - choose any - i choosed Indigo/Pink
//angular material end//
npm i -g @angular/pwa //service worker
ng add @angular/pwa

ERROR in Cannot read property 'flattenedMappings' of null
npm install -g @angular/cli@8.3.25
//ngRx
npm install @ngrx/store @ngrx/effects