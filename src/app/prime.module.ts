import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {DialogService} from 'primeng/dynamicdialog';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {ConfirmPopupModule} from 'primeng/confirmpopup';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,ConfirmPopupModule,
    DialogModule,
    ToastModule,ToolbarModule,ButtonModule
  ],
  providers: [
    DialogService,MessageService,ConfirmationService
  ],
  exports:[ConfirmPopupModule,
    DialogModule,
    ToastModule,ToolbarModule,
    ButtonModule
  ]
})
export class PrimeModule { }
