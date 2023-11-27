import { FormControl } from '@angular/forms';

export interface FormTypeProducts {
  barcode: FormControl<string | null>;
  category: FormControl<string | null>;
  manufacturer: FormControl<string | null>;
  brand: FormControl<string | null>;
  search: FormControl<string | null>;
}
