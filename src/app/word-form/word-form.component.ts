import { Component, Output, EventEmitter} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-word-form',
  template: `
  	<form (ngSubmit)="onSubmit()"
  		novalidate 
  		[formGroup]="form">
  		<input formControlName="word">
		<button
			type="submit"
			[disabled]="form.invalid">
			Let's knit!
		</button>
	</form>`,
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent {

	@Output()
	change: EventEmitter<string> = new EventEmitter<string>();

	form = this.formBuilder.group({
		word: ['', Validators.required]
	});

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
  	let result = confirm("Are you sure you want to proceed?  This will erase all progress.");
  	if(result) {
  		console.log(this.form);
  		this.change.emit(this.form.controls.word.value);
  	}
  }

}
