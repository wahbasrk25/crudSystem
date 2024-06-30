import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyInterFace } from '../components/models/my-inter-face';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http:HttpClient) { }


 Url = 'http://localhost:3000/commandes';


// function of get

  getAll():Observable<any>{

    return  this.http.get<MyInterFace>(this.Url);
  }

// function of delete


delete(id:any):Observable<any>{

   return this.http.delete(`${this.Url}/${id}`);
}


// function add of post


create(commandes:any):Observable<any>{

   return this.http.post<MyInterFace>(this.Url , commandes);
}

// function update

update(commandes:any):Observable<any>{

     return this.http.put(`${this.Url}/${commandes.id}`, commandes);
}









} 
