import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // on a routing error, navigate back to home
      errorHandler: () => {
        window.location.href = '/';
      },
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
