import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarService {

  public API = 'http://localhost:8080';
  public CAR_API = this.API + '/angularspringmaven/carcrud/car/';

  constructor(private http:HttpClient) 
  {}

  getAll():Observable<any>{
    return this.http.get(this.CAR_API);
  }

  get(id:string)
  {
    return this.http.get(this.CAR_API + id);
  }

  save(car:any) :Observable<any>
  {
    let result:Observable<Object>;
    
    
    if (car.href) {
      result = this.http.put(this.CAR_API+car.href, car);
    } else {
      result = this.http.post(this.CAR_API, car);
    }
    return result;
  }

  remove(href:string)
  {
    return this.http.delete(this.CAR_API+href);
  }
  
}
