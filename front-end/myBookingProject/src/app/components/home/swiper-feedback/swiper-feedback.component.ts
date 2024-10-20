import { Component } from '@angular/core';
@Component({
  selector: 'app-swiper-feedback',
  templateUrl: './swiper-feedback.component.html',
  styleUrl: './swiper-feedback.component.css'
})
export class SwiperFeedbackComponent {
  slideIndex !: number;
  slides !: HTMLElement;
  totalSlide !: number;
  slideWidth !: number;
  dots !: NodeListOf<Element>;
  autoSlide: ReturnType<typeof setInterval> | undefined;

  constructor() {
    this.slideIndex = 0;
    this.slides = document.querySelector('.swiper-wrapper') as HTMLElement;
    this.totalSlide = document.querySelectorAll('.swiper-cation').length;
    this.slideWidth = this.slides.offsetWidth;
    this.dots = document.querySelectorAll('pagination-fb');

    document.querySelector('.swiper-button-next')?.addEventListener('click', () => this.manualNextSlide());
    document.querySelector('.swiper-button-next')?.addEventListener('click', () => this.manualPrevSlide());
    this.dots.forEach((pagination, index) => {
      pagination.addEventListener('click', () => this.moveToSlide(index));
    });

    this.showSlide(this.slideIndex);

    this.autoSlide = setInterval(() => this.nextSlide(), 3000);
  }

  showSlide(index: number): void {
    this.slides.style.transform = `translateX(${-index * this.slideWidth}px)`;
    this.updateDots(index);
  }
  updateDots(index: number): void {
    this.dots.forEach(pagination => pagination.classList.remove('active'));
    this.dots[index].classList.add('active');
  }

  nextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.totalSlide;
    this.showSlide(this.slideIndex);
  }

  prevSlide(): void {
    this.slideIndex = (this.slideIndex - 1) % this.totalSlide;
    this.showSlide(this.slideIndex);
  }

  manualNextSlide(): void {
    clearInterval(this.autoSlide);
    this.nextSlide();
    this.autoSlide = setInterval(() => this.nextSlide(), 3000);
  }

  manualPrevSlide(): void {
    clearInterval(this.autoSlide);
    this.prevSlide();
    this.autoSlide = setInterval(() => this.nextSlide(), 3000);
  }

  moveToSlide(index: number): void {
    clearInterval(this.autoSlide);
    this.slideIndex = index;
    this.showSlide(this.slideIndex);
    this.autoSlide = setInterval(() => this.nextSlide(), 3000);
  }
}