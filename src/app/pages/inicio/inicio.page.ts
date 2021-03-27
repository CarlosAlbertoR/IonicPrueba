import { Component, OnInit } from '@angular/core';

interface pagina{
  icon:string,
  nombre:string,
  redirectTo:string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  paginas:pagina[]=[
    {
      icon:"logo-facebook",
      nombre:"Alerta",
      redirectTo:"/alert"
    },
    {
      icon: "logo-octocat",
      nombre: "Action",
      redirectTo: "/action"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
