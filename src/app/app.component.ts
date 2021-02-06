import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EatTasty Challenge';

  titleRate = 'Avaliação do Cliente';
  imageSize = '50';
  imageOpacitySelect = 1;
  imageOpacityUnselect = 0.3;
  imageSrc = '../assets/img/eattasty_rate.png';
  imageColor = '';
  qtyRate = 5;
}
