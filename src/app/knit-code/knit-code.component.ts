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
    const base10 = this.encodeBase10(userWord);
    this.wordToEncode.encodings[8] = base10;
    for (let i = 2; i < 10; i++) {
      this.wordToEncode.encodings[i - 2] = this.encodeBase(i, base10);
    }

    this.splitCharNumbers();
  }

  private encodeBase10(word: string): number[] {
    const result = [];
    for (let i = 0; i < word.length; i++) {
      result[i] = parseInt(word.charAt(i), 36) - 9;
    }
    return result;
  }

  private encodeBase(base: number, base10: number[]): number[] {
    const result = [];
    for (let i = 0; i < base10.length; i++) {
      let curr = base10[i];
      let res = 0;
      while (curr > 0) {
        const remainder = curr % base;
        curr = (curr - remainder) / base;
        res = this.decimalToBase(remainder) + res;
      }
      result[i] = res;
    }
    return result;
  }

  private decimalToBase(input: number): number {
    if (input >= 0 && input <= 9) {
      return input;
    }
    return input - 10;
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
