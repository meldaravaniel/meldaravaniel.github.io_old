import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-knit-code',
  templateUrl: './knit-code.component.html',
  styleUrls: ['./knit-code.component.css']
})

export class KnitCodeComponent implements OnInit {

  wordToEncode: CodeWord = {
    word: 'knit'
  };

  constructor() { }

  ngOnInit() {
  }

  //wordAdded() {
  //  let wordToEncode = 'you clicked a button!';
  //}

}

export class CodeWord {
  word: string;
}
