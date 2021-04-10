import { Component, OnInit } from '@angular/core';

interface page {
  icon: string, name: string, redirectTo: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pages: page[] = [
    {
      icon: 'alert',
      name: 'Alert',
      redirectTo: '/alert'
    }, 
    { 
      icon: 'open-outline', 
      name:'Action',
      redirectTo: '/action'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
