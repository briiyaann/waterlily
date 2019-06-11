import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.page.html',
	styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

	constructor(private storage: Storage, private route: Router) { }

	ngOnInit() {
	}

	navigateHome(branch: string) {
		this.storage.set('branch', branch).then(() => {
			this.route.navigateByUrl('home/' + branch);
		});
	}

}
