

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

import { Error } from './error.model';

@Injectable()
export class ErrorService {
  selectedError: Error;
  errors: Error[];
  readonly baseURL = 'http://localhost:3000/errors';

  constructor(private http: HttpClient) { }

  postError(err: Error) {
    return this.http.post(this.baseURL, err);
  }

  getErrorList() {
    return this.http.get(this.baseURL);
  }

  putError(err: Error) {
    return this.http.put(this.baseURL + `/${err._id}`, err);
  }

  deleteError(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
