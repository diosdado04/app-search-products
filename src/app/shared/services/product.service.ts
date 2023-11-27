import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { ParamsSearhProductModel } from 'src/app/components/model/params-search-product.model';
import {
  Products,
  SearchResultProducts,
} from 'src/app/components/model/search-result-products.model';
import { URLBACKEND } from 'src/app/core/constanst/url-backend';
import { deleteObjectValuesNullUndefinedEmpty } from 'src/app/utils/functions/delete-object-values-null-undefined-empty';
import { formatedStringSpecialCharacterObject } from 'src/app/utils/functions/formated-string-special-character-object';
import { knowObjectHaveValue } from 'src/app/utils/functions/know-object-have-value';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  urlBackend = URLBACKEND;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
  ) {}

  getProductsByParams(data: ParamsSearhProductModel): Observable<Products[]> {
    const isThereValueDataObject = knowObjectHaveValue(
      deleteObjectValuesNullUndefinedEmpty(data)
    );
    const valueFormated = isThereValueDataObject
      ? formatedStringSpecialCharacterObject(data)
      : '';
    return this.http
      .get<SearchResultProducts>(
        `${this.urlBackend}products${valueFormated}${
          isThereValueDataObject ? '&' : '?'
        }key=your_api_key`,
        {
          headers: this.httpOptions.headers,
        }
      )
      .pipe(
        map((response) => response?.products),
        catchError(() => {
          this.messagesService.error(
            'Lo sentimos.',
            'Ha ocurrido un error en la búsqueda.'
          );
          return of();
        })
      );
  }
}
