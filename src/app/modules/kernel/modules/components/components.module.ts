import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';

//********************************************************* */
//  ANTD
import { IconDefinition } from '@ant-design/icons-angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { MenuFoldOutline, MenuUnfoldOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  MenuFoldOutline,
  MenuUnfoldOutline
];


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    NzIconModule.forRoot(icons),
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule
  ],
  exports: [
    LayoutComponent,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule
  ]
})
export class ComponentsModule { }
