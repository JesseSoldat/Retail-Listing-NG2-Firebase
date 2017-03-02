import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
	id: any;
	listing: any;
	imageUrl: any;

  constructor(private firebaseService: FirebaseService,
  						private router: Router,
  						private route: ActivatedRoute,
  						private location: Location) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];

  	this.firebaseService.getListingDetails(this.id).subscribe(listing => {
  		this.listing = listing;
  		// console.log(listing);
  	})
  }

}
 