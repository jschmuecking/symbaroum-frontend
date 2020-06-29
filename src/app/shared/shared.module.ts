import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, SafeHtmlPipe],
})
export class SharedModule {}
