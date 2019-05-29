import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: './landing/landing.module#LandingPageModule'
	},
	{
		path: 'home/:branch',
		loadChildren: './home/home.module#HomePageModule'
	},
	{
		path: 'list',
		loadChildren: './list/list.module#ListPageModule'
	},
	{ path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
