import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-book-with-us',
  templateUrl: './why-book-with-us.component.html',
  styleUrls: ['./why-book-with-us.component.scss']
})
export class WhyBookWithUsComponent implements OnInit {
 points:any[]=[
   {
     heading:"Easy Bookings",
     subHeading:"You can make the booking on call or chat . Very easy. Right?",
   },
   {
     heading:"100% Customizable",
     subHeading:"Tell us about your trip requirement. We'll work together to customize your trip to meet your exact requirement so that you have memorabe trip."
   },
   {
     heading:"Local Experts. Middle-man Free Pricing",
     subHeading:"We're a local travel agency. When you book with us, you get best possible price, which is middle-man free"
   },
   {
     heading:"No Hidden Charges",
     subHeading:"We don't add hidden extras cost. All trips include travel permit, lodging and fooding, There are no surprises with hidden costs."
   },
   {
     heading:"Easy Payments",
     subHeading:"Customer's ease is our priority, so help that we accept every type of payments weather it is cash or the UPI payments."
   },
   {
     heading:"Quick And 24/7 Support",
     subHeading:"We have a very quick and 24/7 helpline system always ready to help our valuable customers."
   }
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
