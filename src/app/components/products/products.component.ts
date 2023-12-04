import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldSearchComponent } from 'src/app/shared/components/field-search/field-search.component';
import { TableComponent } from 'src/app/shared/components/table/table.component';
import { ParamsSearhProductModel } from '../model/params-search-product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastrModule } from 'ngx-toastr';
import { Products } from '../model/search-result-products.model';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { ColumnsTable } from 'src/app/shared/models/columns-table.models';
import { PRODUCTS_LABEL_CONSTANTS } from 'src/app/shared/constanst/constants-label-products';
import { PRODUCTS_DEF_CONSTANTS } from 'src/app/shared/constanst/constants-def-products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, FieldSearchComponent, TableComponent, ToastrModule],
})
export class ProductsComponent {
  columnsTable: ColumnsTable[] = [];
  searchProducts$ = new Subject<ParamsSearhProductModel>();
  productReturn$!: Observable<Products[]>;
  showSpinner: boolean = false;

  ngOnInit(): void {
    this.createTableColumns();
  }

  createTableColumns() {
    this.columnsTable = [
      {
        label: PRODUCTS_LABEL_CONSTANTS.BAR_CODE_LABEL,
        columns: PRODUCTS_DEF_CONSTANTS.BAR_CODE_LABEL,
        value: PRODUCTS_DEF_CONSTANTS.BAR_CODE_LABEL,
      },
      {
        label: PRODUCTS_LABEL_CONSTANTS.MANUFACTURE_LABEL,
        columns: PRODUCTS_DEF_CONSTANTS.MANUFACTURE_LABEL,
        value: PRODUCTS_DEF_CONSTANTS.MANUFACTURE_LABEL,
      },
      {
        label: PRODUCTS_LABEL_CONSTANTS.CATEGORY_LABEL,
        columns: PRODUCTS_DEF_CONSTANTS.CATEGORY_LABEL,
        value: PRODUCTS_DEF_CONSTANTS.CATEGORY_LABEL,
      },
      {
        label: PRODUCTS_LABEL_CONSTANTS.BRAND_LABEL,
        columns: PRODUCTS_DEF_CONSTANTS.BRAND_LABEL,
        value: PRODUCTS_DEF_CONSTANTS.BRAND_LABEL,
      },
      {
        label: PRODUCTS_LABEL_CONSTANTS.SEARCH_LABEL,
        columns: PRODUCTS_DEF_CONSTANTS.SEARCH_LABEL,
        value: PRODUCTS_DEF_CONSTANTS.SEARCH_LABEL,
      },
    ];
  }

  constructor(private productService: ProductService) {
     this.getProductosService();
  }

  getProductosService(){
    this.productReturn$ = this.searchProducts$.pipe( 
      debounceTime(500),
      filter(() => {
        this.showSpinner = false;
        return true;
      }),
      distinctUntilChanged(),
      switchMap((field) => this.productService.getProductsByParams(field))
    );
  }

  writeFormField(field: ParamsSearhProductModel) {
    this.showSpinner = true;
    this.searchProducts$.next(field);
  }
}
