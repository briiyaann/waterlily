import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html'
})
export class AppComponent {

	branch = '';
	appPages:any;

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private storage: Storage
	) {
		this.storage.get('branch').then((data) => {
			this.branch = data;

			this.appPages = [
				{
					title: 'Home',
					url: '/home/' + this.branch,
					icon: 'home'
				},
				{
					title: 'Dining',
					url: '/dining',
					icon: 'restaurant'
				},
				{
					title: 'Accommodation',
					url: '/accommodation',
					icon: 'bed'
				}
			];
		});

		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
