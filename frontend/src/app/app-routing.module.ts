import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { CrearproductoComponent } from './crearproducto/crearproducto.component';

const routes: Routes = [
  { path: '', component: ListaproductosComponent },
  { path: 'crearProducto', component: CrearproductoComponent },
  { path: 'modificarProducto/:id', component: CrearproductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
