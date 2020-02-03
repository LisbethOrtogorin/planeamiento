import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { UbicacionComponent } from '../ubicacion/ubicacion.component';
import { ProductoComponent } from '../producto/producto.component';


const routes: Routes = [
  {path: '', component: ProductoComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path: 'plan-estrategico', component:UbicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
