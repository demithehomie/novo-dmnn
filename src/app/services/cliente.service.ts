import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


const clienteURL = 'https://apimakrom-production.up.railway.app/customers/';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  create(datacliente: any): Observable<any>{
    return this.httpClient.post(clienteURL,datacliente)
  }

  findAll() {
    return this.httpClient.get(clienteURL+'listar');
  }

  login(body: any): Observable<any> {
    return this.httpClient.post(clienteURL+'login', body);
  }

}
