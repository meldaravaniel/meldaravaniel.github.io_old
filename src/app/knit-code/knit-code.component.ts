import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-knit-code',
  templateUrl: './knit-code.component.html',
  styleUrls: ['./knit-code.component.css']
})

export class KnitCodeComponent implements OnInit {

  userWord = '';
  charNumbers: number[] = [];
  indivCharNumbers: number[] = [];

  wordToEncode: CodeWord = {
    word: '',
    encodings: [[], [], [], [], [], [], [], [], []]
  };

  constructor() {
  }

  ngOnInit() {
  }

  public encodeWord(userWord: string) {
    this.wordToEncode.word = userWord;
    this.encode(userWord, 10);


    this.splitCharNumbers();
  }

  private encode(word: string, base: number) {
    for (let i = 0; i < word.length; i++) {
      this.wordToEncode.encodings[base - 2][i] = parseInt(word.charAt(i), base) - 9;
    }
  }

  private splitCharNumbers() {
    this.indivCharNumbers = [];
    this.charNumbers.forEach(() => {

    })
  }

}

export class CodeWord {
  word: string;
  encodings: number[][];
}
