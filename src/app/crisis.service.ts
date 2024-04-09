import { Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';

export interface Crisis {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }
}
