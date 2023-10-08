// src/app/user.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Login/users';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
API: string ='http://'


  
  constructor(private http: HttpClient) { }

  newUser: Users = new Users();

  public UsersArray: Users[] = [
    { id: 1, name: "Pablo", lastname: "Chasipanta", Email: "chasi64.z@gmail.com", password: "123456", country: "Ecuador", role: "Admin" },
    { id: 2, name: "Gabriel", lastname: "Chasipanta", Email: "GaboChasi@gmail.com", password: "654321", country: "Ecuador", role: "user" }
  ];

  public getUsers() {

  }

  public addUser(user: Users){

    if (user.id === 0) {
      user.id = this.generateUniqueID();
      user.role = "user";

    } else {
      const index = this.UsersArray.findIndex(u => u.id === user.id);
      if (index !== -1) {

      }
    }
    this.newUser = new Users();
  }

  private generateUniqueID(): number {
    const maxID = Math.max(...this.UsersArray.map(user => user.id), 0);
    return maxID + 1;
  }
  

  public deleteUser(user: Users){

  }

  public openForEdit(user: Users){
    this.newUser = user
  }

  Access(email: string,password: string): void{
    for (let i = 0; i < this.UsersArray.length; i++) {
      const user = this.UsersArray[i];
      if(email === this.UsersArray[i].Email && password === this.UsersArray[i].password)
      {
        if(this.UsersArray[i].role === "Admin"){
          // this.router.navigateByUrl('/Admin');
      } 
    }
    
  }
  }
}

