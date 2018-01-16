import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {

  userWord = '';

  charNumbers: number[] = [];
  indivCharNumbers: number[] = [];

  wordToEncode: CodeWord = {
    encodings: [[], [], [], [], [], [], [], [], []]
  };

  constructor() { }

  onSubmit() {
    const base10 = this.encodeBase10(this.userWord);
    this.wordToEncode.encodings[8] = base10;
    for (let i = 2; i < 10; i++) {
      this.wordToEncode.encodings[i - 2] = this.encodeBase(i, base10);
    }

    this.splitCharNumbers();
  }

  ngOnInit() {
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
  encodings: number[][];
}
