import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PRODUCTS_LABEL_CONSTANTS } from '../../constanst/constants-label-products';
import { ParamsSearhProductModel } from 'src/app/components/model/params-search-product.model';
import { Products } from 'src/app/components/model/search-result-products.model';
import { ColumnsTable } from '../../models/columns-table.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModuleModule],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any = [];
  displayedColumns: string[] = [];
  columnsTable: ColumnsTable[] = [];

  @Input() set dataTable(data: any) {
    this.dataSource = data;
  }

  @Input() set columns(columns: ColumnsTable[]) {
    this.columnsTable = columns;
    this.displayedColumns = this.columnsTable.map((col) => col.columns);
  }

  ngAfterViewInit() {
    if (this.dataSource) this.dataSource.paginator = this.paginator;
  }
}
