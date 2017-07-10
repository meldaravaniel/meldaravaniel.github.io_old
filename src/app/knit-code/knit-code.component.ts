import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-knit-code',
  templateUrl: './knit-code.component.html',
  styleUrls: ['./knit-code.component.css']
})

export class KnitCodeComponent implements OnInit {

  userWord: string = '';

  wordToEncode: CodeWord = {
    word: ''
  };

  constructor() { }

  ngOnInit() {
  }

  encodeWord(userWord: string) {
    this.wordToEncode.word = userWord;
  }

}

export class CodeWord {
  word: string;
}
