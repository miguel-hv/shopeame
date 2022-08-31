import { Product } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  productForm: any;
  isSubmitted:boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0,[Validators.min(0)]],
      description: '', 
      rating: [0,[Validators.min(0), Validators.max(5)]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.isSubmitted = true;
    // if (this.productForm.valid) {
      const product: any = {
        name: this.productForm.get('name').value,
        price: this.productForm.get('price').value,
        description: this.productForm.get('description').value,
        rating: this.productForm.get('rating').value,
        image: this.productForm.get('image').value,
      };
      console.log(product);

      this.productForm.reset();
      this.isSubmitted = false;
    // }
  }

}
