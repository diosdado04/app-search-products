import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private toast: ToastrService) {}
  error(title: string, body: string) {
    if (this.toast.toasts.length === 0) this.toast.error(title, body);
  }
}
