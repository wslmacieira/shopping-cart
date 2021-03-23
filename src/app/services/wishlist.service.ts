import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { wishlistUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(): any {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        const productIds = [];

        result.forEach(item => productIds.push(item.id));

        return productIds;
      })
    );
  }

  addToWishlist(productId: number): any {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeToWishlist(productId: number): any {
    return this.http.delete(`${wishlistUrl}/${productId}`);
  }
}
