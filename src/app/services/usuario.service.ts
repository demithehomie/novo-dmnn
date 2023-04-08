import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


// const usuarioURL = 'https://apimakrom-production.up.railway.app/usuario/';

const usuarioURL = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  create(data: any): Observable<any>{
    return this.httpClient.post(usuarioURL+'/criar',data)
  }

  findAll() {
    return this.httpClient.get(usuarioURL+'listar');
  }

  findOne(data: any): Observable<any>{
    return this.httpClient.get(usuarioURL+'listartodos', data);
  }

  update(data: any){
    return this.httpClient.patch(usuarioURL, data);
  }
  
  delete(data: any){
    return this.httpClient.get(usuarioURL, data);
  }

// autenticação

  login(body: any): Observable<any> {
    return this.httpClient.post(usuarioURL+'login', body);
  }

  //LOGOUT?



  //

  getData(data: any) {
    return this.httpClient.get(usuarioURL, data);
  }




}
