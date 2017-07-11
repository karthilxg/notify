import {Routes,RouterModule} from '@angular/router';
import {StyleComponent}     from './style/style.component';

 const routes:Routes = [
     {path:'style',component:StyleComponent},

 ];
 export const routing = RouterModule.forRoot(routes);


