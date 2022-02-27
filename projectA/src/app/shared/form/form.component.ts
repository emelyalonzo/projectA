import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/core/services/models/product.model';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public product?: ProductInterface;

  public createProductForm?: FormGroup;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      name: new FormControl(this.product?.name || '', Validators.required),
      price: new FormControl(this.product?.price || '', [ Validators.required, Validators.maxLength(5)]),
      image: new FormControl(this.product?.image || '', Validators.required),
      description: new FormControl(this.product?.description || ''),
      stars: new FormControl(this.product?.stars || Validators.required),
    });
  }

  public saveProduct(event: Event) {
    event.preventDefault();
    if (this.createProductForm?.valid) {
      // Añadir condición de que si el producto introducido por input está definido se edite el producto si no
      // que se cree.
      this.productsService
        .createProduct(this.createProductForm.value)
        .subscribe(() => {
          this.router.navigate(['/products']);
        });
      this.createProductForm.reset();
    }
  }
}
