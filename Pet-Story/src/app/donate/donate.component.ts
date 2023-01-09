import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {

  text1 = false;  

  params = '';

  animal = '';

  data = '';

  foodForDays = '4';

  form = new FormGroup({
    radios: new FormControl('500', Validators.required)
  });

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const id = params['id'];
      this.params = `assets/images/${id}_donate.png`;
      this.animal = id;
      console.log(this.params);
    });
  }

  onSubmit() {
    console.log(this.form.value.radios);
  }

  onChoose() {

    const food = +this.form.value.radios! / 125;

    if (food % 1 === 0) {
      this.foodForDays = food.toString();
    } else {
      this.foodForDays = food.toFixed(2).toString();
    }
  }


}
