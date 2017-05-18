import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EntriesService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getList() {
    console.log("hi");
   return this.http.get(`${this.BASE_URL}/api/journal-entries`)
     .map((res) => res.json());
  }

  get(id) {
     return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
       .map((res) => res.json());
   }

   add(entry) {
     console.log("add entry",entry);
     return this.http.post(`${this.BASE_URL}/api/journal-entries`,entry).map((res) => res.json());
   }

}
