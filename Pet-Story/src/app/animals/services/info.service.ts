import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private isInfoClosed$$ = new BehaviorSubject(false);

  isInfoClosed$ = this.isInfoClosed$$.asObservable();

  constructor() { }

  updateIsInfoClosed(value: boolean) {
    this.isInfoClosed$$.next(value);
  }
}
