import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EnsureImportedOnceModule } from './import-guard';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [PageNotFoundComponent, WelcomeComponent],
  imports: [CommonModule],
})
export class CoreModule extends EnsureImportedOnceModule {
  public constructor(@SkipSelf() @Optional() parent: CoreModule) {
    super(parent);
  }
}
