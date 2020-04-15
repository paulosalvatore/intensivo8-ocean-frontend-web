import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  public lugares = [];

  constructor(private http: HttpClient) {
    this.loadLugares();
  }

  public loadLugares() {
    this.http.get<any[]>('https://jsonblob.com/api/jsonBlob/953291f0-7eae-11ea-b97d-f39fbc854bba')
      .subscribe(lugares => {
        this.lugares = lugares;
      });
  }
}
