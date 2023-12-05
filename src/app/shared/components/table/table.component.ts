import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ViewChild,
  Input
} from '@angular/core';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';
import { MatPaginator } from '@angular/material/paginator';
import { ColumnsTable } from '../../models/columns-table.models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModuleModule],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Input() showSpinner: boolean = false;
  dataSource: MatTableDataSource<Array<any>> = new MatTableDataSource();
  displayedColumns: string[] = [];
  columnsTable: ColumnsTable[] = [];

  @Input() set dataTable(data: any) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  @Input() set columns(columns: ColumnsTable[]) {
    this.columnsTable = columns;
    this.displayedColumns = this.columnsTable.map((col) => col.columns);
  }

  ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }  
}
