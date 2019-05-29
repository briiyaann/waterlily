import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

	constructor(private storage: Storage, private route: Router, private aroute: ActivatedRoute) { }

	headerTitle;
	branchName = this.aroute.snapshot.paramMap.get('branch');
	
	ngOnInit() {
		this.headerTitle = 'bluewater ' + this.branchName;
	}
}
