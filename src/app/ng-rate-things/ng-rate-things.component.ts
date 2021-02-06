import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ng-rate-things',
  templateUrl: './ng-rate-things.component.html',
  styleUrls: ['./ng-rate-things.component.css']
})
export class NgRateThingsComponent implements OnInit {
  @Input() dados;
  @Input() title;
  @Input() imageColor;
  @Input() imageSize;
  @Input() imageOpacitySelect;
  @Input() imageOpacityUnselect;
  @Input() imageSrc;
  @Input() qtyRate;
  imageOpacity: number;
  list = [];
  opacityOriginal = [];
  avaliacao;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.title) this.title = 'Avaliação do Cliente';
    if (!this.qtyRate) this.qtyRate = 5;
    if (!this.imageColor) this.imageColor = '#FFBD1B'
    if (!this.imageSrc) this.imageSrc = '../../assets/img/star.png';
    if (!this.imageSize) this.imageSize = '50';
    if (!this.imageOpacityUnselect) this.imageOpacityUnselect = 0.3;
    if (!this.imageOpacitySelect) this.imageOpacitySelect = 1;
    this.imageOpacity = this.imageOpacityUnselect || 0.3;

    for (let i = 0; i < this.qtyRate; i++) {
      this.list.push({
        rate: i,
        opacity: this.imageOpacity
      })
    }
    this.saveBackup();
  }

  click($event) {
    this.list.forEach(element => {
      if (element.rate <= $event.target.id) {
        element.opacity = this.imageOpacitySelect;
      } else {
        element.opacity = this.imageOpacityUnselect;
      }
    });
    this.saveBackup();
  }

  mouseOver($event) {
    this.list.forEach(element => {
      if (element.rate <= $event.target.id) {
        element.opacity = this.imageOpacitySelect;
      } else {
        element.opacity = this.imageOpacityUnselect;
      }
    });
  }

  mouseOut($event) {
    this.list.forEach(element => {
      element.opacity = this.opacityOriginal[element.rate].opacity
    })
  }

  saveBackup() {
    this.opacityOriginal = [];
    this.list.forEach(element => {
      this.opacityOriginal.push({ id: element.rate, opacity: element.opacity })
    })
  }

  cadastrar(): void {
  }

}
