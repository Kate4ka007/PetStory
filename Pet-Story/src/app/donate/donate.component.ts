import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  params = '';

  animal = '';

  data = '';

  form = new FormGroup({
    radios: new FormControl('250', Validators.required)
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
}
