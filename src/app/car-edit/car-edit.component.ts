import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {ActivatedRoute,Router} from '@angular/router';
import {NgForm} from '@angular/forms';


import {CarService} from '../shared/car/car.service';
import {GiphyService} from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit,OnDestroy {

  car: any = {};
  hrefcon : string;
  sub: Subscription;

  constructor(private route :ActivatedRoute ,
              private router:Router,
              private carService:CarService , 
              private giphyService:GiphyService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if(id)
      {
        this.carService.get(id).subscribe((car :any) => {
          if(car)
          {
            this.car = car;
            this.car.herf = car._links.car.href;
            this.hrefcon = car._links.car.href;
            this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          }
          else 
          {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    
    });
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }
  gotoList()
  {
    this.router.navigate(['car-list']);
  }

  save(ngForm:NgForm)
  {
    this.carService.save(ngForm).subscribe(result => 
      {
        this.gotoList();
      },error => console.error(error));
  }

  remove(href)
  {
    this.carService.remove(href).subscribe(result => {
       this.gotoList();
      },error => console.error(error));
  }

}
