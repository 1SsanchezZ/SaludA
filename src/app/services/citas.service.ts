import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private apiUrl = 'http://localhost:3001/api/citas'; // URL del microservicio de citas

  constructor(private http: HttpClient) {}

  agendarCita(especialidad: string, fecha: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/agendar`, { especialidad, fecha });
  }

  obtenerCitas(usuarioId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${usuarioId}`);
  }
}
