import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    min: new FormControl(""),
    max: new FormControl("")
  })

  ngOnInit(): void {
    console.log("input works");
    //this.subscribe();    
  }

  // subscribe() {
  //   this.form.valueChanges.subscribe(values => 
  //     {
  //       console.log(values)
  //     }
  //   );
  // }

  onSubmit() {
    console.log("On submit values", this.form.value);
    //send to service
  }


}
