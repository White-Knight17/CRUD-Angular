import { Component, OnInit } from '@angular/core';
import { ProductoServices } from '../services/producto.service';
import { Producto } from '../model/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.scss'],
})
export class ListaproductosComponent implements OnInit {
  listaProducto: Producto[] = [];

  constructor(
    private _productoServices: ProductoServices,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto() {
    this._productoServices.getProducto().subscribe({
      next: (data) => {
        console.log(data), (this.listaProducto = data);
      },
      error: (err) => console.log('Error, no hay observable' + err),
    });
  }

  eliminarProducto(id: any) {
    this._productoServices.eliminarProducto(id).subscribe({
      next: (data) => {
        console.log('no llego');
        this.obtenerProducto();
      },
    });
  }
}
