import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  sendMsg(product: any): void {
    // console.log(product);
    this.subject.next(product); // Triggering an event
  }

  getMsg(): any {
    return this.subject.asObservable();
  }
}
