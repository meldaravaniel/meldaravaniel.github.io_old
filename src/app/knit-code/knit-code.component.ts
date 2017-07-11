import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-knit-code',
  templateUrl: './knit-code.component.html',
  styleUrls: ['./knit-code.component.css']
})

export class KnitCodeComponent implements OnInit {

  userWord: string = '';
  charNumbers: number[] = [];

  wordToEncode: CodeWord = {
    word: ''
  };

  constructor() { }

  ngOnInit() {
  }

  encodeWord(userWord: string) {
    this.wordToEncode.word = userWord;
    this.charNumbers = [];
    for(var i = 0; i < userWord.length; i++) {
      this.charNumbers.push(parseInt(userWord.charAt(i), 36) - 9);
    }
  }

}

export class CodeWord {
  word: string;
}
