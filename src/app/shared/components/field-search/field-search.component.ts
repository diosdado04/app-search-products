import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  Output,
  OnInit,
  Input,
} from '@angular/core';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-field-search',
  templateUrl: './field-search.component.html',
  styleUrls: ['./field-search.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModuleModule, ReactiveFormsModule],
})
export class FieldSearchComponent implements OnInit, OnDestroy {
  @Input() labelFormControl: { label: string; formcontrol: string }[] = [];
  @Input() formGroup!: FormGroup<any>;
  destroy$ = new Subject<void>();
  @Output() valueForm = new EventEmitter<any>();

  ngOnInit(): void {
    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        map((formsData) => {
          this.valueForm.emit(formsData);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
