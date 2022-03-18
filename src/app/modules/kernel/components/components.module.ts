import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { NgxSpinnerModule } from 'ngx-spinner';

//********************************************************* */
//  ANTD
import { IconDefinition } from '@ant-design/icons-angular';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MenuFoldOutline, MenuUnfoldOutline, CloseSquareOutline, ReloadOutline, HistoryOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ProvinceNameTransformerPipe } from 'src/app/helpers/province-name-transformer.pipe';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const icons: IconDefinition[] = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  CloseSquareOutline,
  ReloadOutline,
  HistoryOutline
];


@NgModule({
  declarations: [
    LayoutComponent,
    ProvinceNameTransformerPipe
  ],
  imports: [
    NzIconModule.forRoot(icons),
    RouterModule,
    CommonModule,
    NzLayoutModule,
    NgxSpinnerModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzListModule,
    NzSelectModule,
    NzGridModule,
    NzButtonModule,
    NzNotificationModule,
    NzCardModule,
    NzTabsModule,
    NzDividerModule,
    NzMenuModule
  ],
  exports: [
    LayoutComponent,
    NgxSpinnerModule,
    NzLayoutModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzListModule,
    NzSelectModule,
    NzGridModule,
    NzButtonModule,
    NzNotificationModule,
    NzCardModule,
    ProvinceNameTransformerPipe,
    NzTabsModule,
    NzDividerModule,
    NzMenuModule
  ]
})
export class ComponentsModule { }
