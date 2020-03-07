import { Component, OnInit } from '@angular/core';
import { GalaxyService } from './galaxy.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'gr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'galaxy-rating-app';
  galaxies = [];
  galaxyForm: FormGroup;

  constructor(private galaxyService: GalaxyService) {
  }
  ngOnInit() {
    this.galaxyService.getGalaxies().subscribe((res) => {
      this.galaxies = res;
    })
    this.createForm();
    this.onFormChanges();
  }

  createForm() {
    this.galaxyForm = new FormGroup({
      galaxy: new FormControl({value: null, disabled: false}, [Validators.required]),
      rating: new FormControl({value: 2, disabled: true}, [Validators.required]),
      name: new FormControl({value: null, disabled: false}, [Validators.required])
    });
  }

  onFormChanges() {
    this.galaxyForm.get('rating').valueChanges.subscribe((val) => {
      console.log('=============rating', val)
    });


    this.galaxyForm.get('galaxy').valueChanges.subscribe((val) => {
      let ratingControl = this.galaxyForm.get('rating')
      if(val) {
        ratingControl.enable();
      }
      else {
        ratingControl.patchValue(null);
        ratingControl.disable();
      }
    });
  }

  onSubmit() {
    console.log(this.galaxyForm.value);
  }
}
