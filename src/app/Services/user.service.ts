// src/app/user.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Login/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private router: Router) { }

  newUser: Users = new Users();

  public UsersArray: Users[] = [
    { id: 1, name: "Pablo", lastname: "Chasipanta", Email: "chasi64.z@gmail.com", password: "123456", country: "Ecuador", role: "Admin" },
    { id: 2, name: "Gabriel", lastname: "Chasipanta", Email: "GaboChasi@gmail.com", password: "654321", country: "Ecuador", role: "user" }
  ];

  public getUsers(): Users[] {
    return this.UsersArray;
  }

  public addUser(user: Users): void {

    if (user.id === 0) {
      user.id = this.generateUniqueID();
      user.role = "user";
      this.UsersArray.push(user);
    } else {
      const index = this.UsersArray.findIndex(u => u.id === user.id);
      if (index !== -1) {
        this.UsersArray[index] = user;
      }
    }
    this.newUser = new Users();
  }

  private generateUniqueID(): number {
    const maxID = Math.max(...this.UsersArray.map(user => user.id), 0);
    return maxID + 1;
  }
  

  public deleteUser(user: Users): void {
    if (confirm('Are you sure want to delete this user ? ')) {
      const index = this.UsersArray.findIndex(u => u === user);
      if (index !== -1) {
        this.UsersArray.splice(index, 1); 
        this.newUser = new Users(); 
      }
    }
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
          this.router.navigateByUrl('/Admin');
      } 
    }
    
  }
  }
}

