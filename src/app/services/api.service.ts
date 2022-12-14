import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@app/models/data.model';
import { environment } from '@env/environment';
import { Observable, of, tap } from 'rxjs';
import engineswap from 'src/assets/json/engine-swap.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public data!: Data;
  apiUrl: string = environment.urlApi;

  constructor(private http: HttpClient) { }

  getData(): Observable<Data> {
    return this.http.get<Data>(this.apiUrl).pipe(
      tap((res: Data) => {
        const { updatetimestamp, used, legend, dailyrace } = res;
        this.data = new Data(updatetimestamp, used, legend, dailyrace);
      }
      )
    );
  }

  getEngineSwaps(): Observable<any> {
    return of(engineswap);
  }
}