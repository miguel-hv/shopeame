import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0,[Validators.required, Validators.min(0)]],
    description: '', 
    rating: [0,[Validators.required, Validators.min(0), Validators.max(5)]],
    image: [''],
  }); 

  get form (){
    return this.productForm.controls;
  }

  isSubmitted:boolean = false;

  constructor(private formBuilder: NonNullableFormBuilder) { 
    // this.productForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   price: [0,[Validators.min(0)]],
    //   description: '', 
    //   rating: [0,[Validators.min(0), Validators.max(5)]],
    //   image: ['', [Validators.required]],
    // });
  }

  ngOnInit(): void {
    this.productForm.valueChanges.subscribe((changes) => {
      console.log(changes);
    })
    console.log(this.form.name);
  }



  // this.myForm.valueChanges
  // .filter(() => this.myForm.valid)
  // .map(value => new Lesson(value.title, value.duration,
  //     value.description,"",StudentLevel.BEGINNER))
  // .do(formValue => console.log("Valid Form Value:", formValue))
  // .subscribe(
  //     lesson => this.lesson = lesson
  // );

  public onSubmit(): void {
    this.isSubmitted = true;
    // if (this.productForm.valid) {
      // const product: any = {
      //   name: this.productForm.get('name').value,
      //   price: this.productForm.get('price').value,
      //   description: this.productForm.get('description').value,
      //   rating: this.productForm.get('rating').value,
      //   image: this.productForm.get('image').value,
      // };
      console.log(this.productForm);
      console.log(this.productForm.value);

      // this.productForm.reset();
      this.isSubmitted = false;
    // }
  }

}
