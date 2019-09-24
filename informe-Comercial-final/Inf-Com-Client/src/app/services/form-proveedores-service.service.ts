import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { FormProveedores } from '../models/formularioExpress';
import { FormExpress} from '../models/formularioExpress';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FormProveedoresServiceService {
  private informesUrl = 'http://localhost:3308/api/informe';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getInformes (): Observable<FormExpress[]> {
    return this.http.get<FormExpress[]>(this.informesUrl)
  }

  getInforme(id: string): Observable<FormExpress> {
    const url = `${this.informesUrl}/${id}`;
    return this.http.get<FormExpress>(url);
  }

  addInforme (informe: FormExpress): Observable<FormExpress> {
    return this.http.post<FormExpress>(this.informesUrl, informe, httpOptions);
  }

  deleteInforme (informe: FormExpress | string): Observable<FormExpress> {
    const id = typeof informe === 'string' ? informe : informe._id;
    const url = `${this.informesUrl}/${id}`;

    return this.http.delete<FormExpress>(url, httpOptions);
  }

  updateInforme (informe: FormExpress): Observable<any> {
    return this.http.put(this.informesUrl, informe, httpOptions);
  }
}