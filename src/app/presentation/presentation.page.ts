import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Keyboard,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  EffectFade,
  Thumbs,
  Mousewheel,
  Controller
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([
  Keyboard,
  Scrollbar,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Mousewheel,
  Controller
]);
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
