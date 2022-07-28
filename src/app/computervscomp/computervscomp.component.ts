import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computervscomp',
  templateUrl: './computervscomp.component.html',
  styleUrls: ['./computervscomp.component.scss']
})
export class ComputervscompComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

  userPick(): void {
    const randomNum = Math.floor(Math.random() * 3);
    this.userSelected = this.compWeapons[randomNum];
        this.checkResult();

    const randomNums = Math.floor(Math.random() * 3);
    this.compSelected = this.compWeapons[randomNums];
        this.checkResult();


  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 3000);
  }

  win(user: any, comp: any) {
    this.userScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. Computer1 win!';
    this.clearField();
  }


  lose(user: any, comp: any) {
    this.compScore++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. Computer1 lose!';
    this.clearField();
  }

  draw(user: any, comp: any) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. Computer1 draw!';
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
