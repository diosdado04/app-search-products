import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  OnInit,
} from '@angular/core';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';
import { PRODUCTS_LABEL_CONSTANTS } from '../../constanst/constants-label-products';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, map, takeUntil } from 'rxjs';
import { ParamsSearhProductModel } from 'src/app/components/model/params-search-product.model';
import { FormTypeProducts } from 'src/app/components/model/form-type-products';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModuleModule, ReactiveFormsModule],
})
export class FieldSearchComponent implements OnInit, OnDestroy {
  labelProducts = PRODUCTS_LABEL_CONSTANTS;
  formGroup: FormGroup<FormTypeProducts>;
  destroy$ = new Subject<void>();
  @Output() valueForm = new EventEmitter<ParamsSearhProductModel>();

  constructor() {
    this.formGroup = new FormGroup({
      barcode: new FormControl(''),
      category: new FormControl(''),
      manufacturer: new FormControl(''),
      brand: new FormControl(''),
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        map((formsData) => {
          this.valueForm.emit(formsData as ParamsSearhProductModel);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
