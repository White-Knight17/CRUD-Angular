import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../model/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoServices } from '../services/producto.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.scss'],
})
export class CrearproductoComponent implements OnInit {
  productoForms: FormGroup;
  titulo = 'crear producto';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productoServices: ProductoServices,
    private aRouter: ActivatedRoute
  ) {
    this.productoForms = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });

    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregaProducto() {
    console.log(this.productoForms);

    const PRODUCTO: Producto = {
      nombre: this.productoForms.get('producto')?.value,
      categoria: this.productoForms.get('categoria')?.value,
      ubicacion: this.productoForms.get('ubicacion')?.value,
      precio: this.productoForms.get('precio')?.value,
    };

    if (this.id !== null) {
      //editar prodcuto
      this._productoServices.obtenerProducto(this.id).subscribe({
        next: (data) => {
          this.productoForms.setValue({
            producto: data.nombre,
            categoria: data.categoria,
            ubicacion: data.ubicacion,
            precio: data.precio,
          });

          this.toastr.info('se ha modificado con', 'EXITO!!');
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      //agregamos producto
      this._productoServices.guardarProducto(PRODUCTO).subscribe({
        next: (data) => {
          this.toastr.success('producto agregado', 'EXITO!!');
          this.router.navigate(['/']);

          console.log(PRODUCTO);
          console.log('se agrego');
        },
        error: (err) => {
          console.log(err);
          this.productoForms.reset();
        },
      });
    }
  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar Producto';
      this._productoServices.obtenerProducto(this.id).subscribe({
        next: (data) => {
          this.productoForms.setValue({
            producto: data.nombre,
            categoria: data.categoria,
            ubicacion: data.ubicacion,
            precio: data.precio,
          });
        },
      });
    }
  }
}
