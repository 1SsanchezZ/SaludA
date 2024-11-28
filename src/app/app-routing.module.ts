import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'actividad',
    loadChildren: () => import('./pages/actividad/actividad.module').then(m => m.ActividadPageModule)
  },
  {
    path: 'citas', 
    loadChildren: () => import('./pages/citas/citas.module').then( m => m.CitasPageModule)
  },
  {
    path: 'agua',
    loadChildren: () => import('./pages/agua/agua.module').then( m => m.AguaPageModule)
  },
  {
    path: 'registrate', 
    loadChildren: () => import('./pages/registrate/registrate.module').then( m => m.RegistratePageModule)
  },
  {
    path: 'cafeina',
    loadChildren: () => import('./pages/cafeina/cafeina.module').then( m => m.CafeinaPageModule)
  },
  {
    path: 'entrenamientos',
    loadChildren: () => import('./pages/entrenamientos/entrenamientos.module').then( m => m.EntrenamientosPageModule)
  },
  {
    path: 'estado',
    loadChildren: () => import('./pages/estado/estado.module').then( m => m.EstadoPageModule)
  },
  {
    path: 'ciclo',
    loadChildren: () => import('./pages/ciclo/ciclo.module').then( m => m.CicloPageModule)
  },
  {
    path: 'pasos',
    loadChildren: () => import('./pages/pasos/pasos.module').then( m => m.PasosPageModule)
  },
  {
    path: 'peso',
    loadChildren: () => import('./pages/peso/peso.module').then( m => m.PesoPageModule)
  },
  {
    path: 'estatura',
    loadChildren: () => import('./pages/estatura/estatura.module').then( m => m.EstaturaPageModule)
  },
  {
    path: 'sueno',
    loadChildren: () => import('./pages/sueno/sueno.module').then( m => m.SuenoPageModule)
  },
  {
    path: 'medicaciones',
    loadChildren: () => import('./pages/medicaciones/medicaciones.module').then( m => m.MedicacionesPageModule)
  },
  {
    path: 'geolocalizacion',
    loadChildren: () => import('./pages/geolocalizacion/geolocalizacion.module').then( m => m.GeolocalizacionPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
