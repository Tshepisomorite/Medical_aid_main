import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  //Http Methods
  constructor(private http: HttpClient) {}

  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl+ '/register', user, this.noAuthHeader);
  }

login(authCredentials:any) {
  return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials, this.noAuthHeader);
}

getUserProfile() {
  return this.http.get(environment.apiBaseUrl + '/userProfile');
}

//Helper Methods

setToken(token: string) {
 return localStorage.setItem('token', token);
}

getToken(){
  return localStorage.getItem('token');
}
deleteToken() {
  localStorage.removeItem('token');
}

getUserPayLoad(){

  const token = this.getToken();
  if(token) {
    var userPayLoad = atob(token.split('.')[1]);
    return JSON.parse(userPayLoad);
  }
  else 
    return null;
  
}
  isLoggeIn() {
    var userPayLoad = this.getUserPayLoad();
    if(userPayLoad)
    return userPayLoad.exp > Date.now() / 1000;
    else
       return false;
  }
}


