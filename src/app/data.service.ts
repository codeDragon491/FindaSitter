import { Injectable } from '@angular/core';
import { Baby } from './home/entities/baby';
import { Sitter } from './home/entities/sitter';
import { User } from './home/entities/user';

@Injectable()
export class DataService {

  [x: string]: any;
  // call to a web server to get data or post data
  // add dummy data until we can do that

  babies: Baby[] = [
    {
      firstname: 'Oliver',
      lastname: 'Hultgren',
      birthdate: new Date(2017, 5, 17),
      area: 'Greater Copenhagen',
      rating: [5]
    },
    {
      firstname: 'Oliver',
      lastname: 'Hultgren',
      birthdate: new Date(2012, 5, 17),
      area: 'Greater Copenhagen',
      rating: [5]
    }
  ]
  sitters: Sitter[] = [
    {
      firstname: 'Elin',
      lastname: 'Skuladottir',
      birthdate: new Date(2012, 5, 17),
      area: 'Greater Copenhagen',
      rating: [15],
      gender: 'female',
      rate: 150,
      workAreas: ['Greater Copenhagen']
    },
    {
      firstname: 'Jenny',
      lastname: 'Lopez',
      birthdate: new Date(2012, 5, 17),//this.formatDate()
      area: 'Greater Copenhagen',
      rating: [15],
      gender: 'female',
      rate: 150,
      workAreas: ['Greater Copenhagen']
    }
  ]
  users: User[] = [
    {
      firstname: 'Elin',
      lastname: 'Skuladottir',
      role: 'admin',
      username: 'es.admin@dk',
      password: '123'
    }
  ]
  constructor() { }

  public addBaby(baby: Baby) {
    this.babies.push(baby)
    console.log(this.babies)
  }
  public updateBaby(id: String, baby: Baby) {
    if (this.babies.find(x => x.firstname === id)) {
      this.x.firstname = baby.firstname
      this.x.lastname = baby.lastname
      this.x.birthDate = baby.birthdate
      this.x.area = baby.area
      this.x.rating = baby.rating
    }
    console.log(this.babies)
  }
  public addSitter(sitter: Sitter) {
    this.sitters.push(sitter)
    console.log(this.sitters)
  }
  public getBaby(id: String): Baby {
    return this.babies.find(x => x.firstname === id);
    //for (int i=0; i < this.babies.)
  }
  public getSitter(id: String): Sitter {
    return this.sitters.find(x => x.firstname === id);
    //for (int i=0; i < this.babies.)
  }

}
