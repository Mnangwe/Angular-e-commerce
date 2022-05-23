import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _localStorage: Storage;

  constructor( private localStorage: LocalStorageService) { }
}
