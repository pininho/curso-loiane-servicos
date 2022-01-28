import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {

  constructor() {

  }

  getCursos() {
    return ['Angular 2', 'Java', 'Phonegap'];
  }
}
