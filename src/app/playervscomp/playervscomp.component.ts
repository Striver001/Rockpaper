import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playervscomp',
  templateUrl: './playervscomp.component.html',
  styleUrls: ['./playervscomp.component.scss']
})
export class PlayervscompComponent implements OnInit {

  constructor() { }

  
  userScore = 0;
  compScore = 0;
  public userSelected: string = '';
  compSelected: string = '';
  action: string = '';
  status: string = '';
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];
 ngOnInit(): void {
  }
  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log(this.userSelected);
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 3000);
  }

  win(user:any, comp:any) {
    this.userScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }


  lose(user:any, comp:any) {
    this.compScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  draw(user:any, comp:any) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }

  }
}
