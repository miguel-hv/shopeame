import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  product: Product = {    
    name: "",
    price: 0,
    description: "",
    rating: 0,
    image: "",
  };
  // product: any={};

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0,[Validators.required, Validators.min(0)]],
    description: '', 
    rating: [0,[Validators.required, Validators.min(0), Validators.max(5)]],
    image: '',
  }); 

  get form (){
    return this.productForm.controls;
  }

  isSubmitted:boolean = false;

  constructor(private formBuilder: NonNullableFormBuilder) { 
  }

  ngOnInit(): void {
  }


  public onSubmit(): void {
    this.isSubmitted = true;
    // if (this.productForm.valid) {
      this.product = {
        name: this.productForm.get('name')!.value,
        price: this.productForm.get('price')!.value,
        description: this.productForm.get('description')!.value,
        rating: this.productForm.get('rating')!.value,
        image: this.productForm.get('image')!.value,
      };
      // this.product = this.productForm.value;

      console.log(this.productForm);
      console.log(this.productForm.value);

      // this.productForm.reset();
      this.isSubmitted = false;
    // }
  }

}
