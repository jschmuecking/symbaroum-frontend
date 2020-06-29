import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trait } from '../../model/trait';

@Injectable()
export class TraitService {
  private readonly api = 'http://localhost:8080';
  private readonly BASE_URL = `${this.api}/api/admin/trait`;

  constructor(private http: HttpClient) {}

  getTraitList(): Observable<Trait[]> {
    return this.http.get<Trait[]>(this.BASE_URL);
  }

  getTrait(id: string): Observable<Trait> {
    return this.http.get<Trait>(`${this.BASE_URL}/${id}`);
  }
}
