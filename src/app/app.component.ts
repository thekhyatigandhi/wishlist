import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    new WishItem('To learn angular'),
new WishItem ('Get coffe', true),
new WishItem ('Go for a run')]
  title = 'wishlist';
}
