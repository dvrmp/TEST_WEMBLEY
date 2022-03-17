import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public isCollapsed: boolean = false;
  public currentPath: string = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPath = this.router.url.substring(1);
  }

}
