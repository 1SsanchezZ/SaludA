import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {

  private database!: SQLiteObject;

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private toastController: ToastController
  ) {
    // Llamamos a crearBD cuando la plataforma esté lista
    this.platform.ready().then(() => {
      this.crearBD();
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async crearBD() {
    try {
      await this.platform.ready();
      this.database = await this.sqlite.create({
        name: 'noticias.db',
        location: 'default'
      });
      this.presentToast("BD creada exitosamente");
      await this.crearTablas();  // Llamamos a crear tablas una vez creada la BD
    } catch (e) {
      this.presentToast('Error creando BD: ' + JSON.stringify(e));
    }
  }

  async crearTablas() {
    const sql = `
      CREATE TABLE IF NOT EXISTS noticias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descripcion TEXT NOT NULL,
        fecha TEXT NOT NULL
      );
    `;
    try {
      await this.database.executeSql(sql, []);
      this.presentToast('Tabla "noticias" creada');
    } catch (e) {
      this.presentToast('Error creando tabla: ' + JSON.stringify(e));
    }
  }

  async insertarNoticia(titulo: string, descripcion: string, fecha: string) {
    const sql = `
      INSERT INTO noticias (titulo, descripcion, fecha) 
      VALUES (?, ?, ?);
    `;
    try {
      await this.database.executeSql(sql, [titulo, descripcion, fecha]);
      this.presentToast('Noticia insertada correctamente');
    } catch (e) {
      this.presentToast('Error al insertar noticia: ' + JSON.stringify(e));
    }
  }

  async obtenerNoticias() {
    const sql = `SELECT * FROM noticias`;
    try {
      const result = await this.database.executeSql(sql, []);
      let noticias = [];
      for (let i = 0; i < result.rows.length; i++) {
        noticias.push(result.rows.item(i));
      }
      return noticias;
    } catch (e) {
      this.presentToast('Error al obtener noticias: ' + JSON.stringify(e));
      return [];
    }
  }

  async eliminarNoticia(id: number) {
    const sql = `DELETE FROM noticias WHERE id = ?`;
    try {
      await this.database.executeSql(sql, [id]);
      this.presentToast('Noticia eliminada correctamente');
    } catch (e) {
      this.presentToast('Error al eliminar noticia: ' + JSON.stringify(e));
    }
  }

  async actualizarNoticia(id: number, titulo: string, descripcion: string, fecha: string) {
    const sql = `
      UPDATE noticias
      SET titulo = ?, descripcion = ?, fecha = ?
      WHERE id = ?;
    `;
    try {
      await this.database.executeSql(sql, [titulo, descripcion, fecha, id]);
      this.presentToast('Noticia actualizada correctamente');
    } catch (e) {
      this.presentToast('Error al actualizar noticia: ' + JSON.stringify(e));
    }
  }
}
