import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-knit-code',
  templateUrl: './knit-code.component.html',
  styleUrls: ['./knit-code.component.css']
})

export class KnitCodeComponent implements OnInit {

  userWord: string = '';
  charNumbers: number[] = [];
  indivCharNumbers: number[] = [];

  wordToEncode: CodeWord = {
    word: ''
  };

  constructor() { }

  ngOnInit() {
  }

  public encodeWord(userWord: string) {
    this.wordToEncode.word = userWord;
    this.charNumbers = [];
    for(var i = 0; i < userWord.length; i++) {
      this.charNumbers.push(parseInt(userWord.charAt(i), 36) - 9);
    }
    this.splitCharNumbers();
  }

  private splitCharNumbers() {
    this.indivCharNumbers = [];
    this.charNumbers.forEach(() => {

    })
  }

}

export class CodeWord {
  word: string;
}
