import { Component, AfterViewInit, HostListener } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent implements AfterViewInit {
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  numStars: number = 3000;
  stars: any[] = [];
  speed: number = 8;
  wakeUpCat = false;

  constructor(private router: Router){}

  ngAfterViewInit(): void {
    setTimeout(() => {
      const namePortfolioElement = document.querySelector('.name-portfolio');
      if (namePortfolioElement) {
        namePortfolioElement.classList.add('show');
      }
      const containerSecondElement = document.querySelector('.container-second');
      if (containerSecondElement) {
        containerSecondElement.classList.add('show');
      }
    }, 100);
  }

  wakeup(){ 
    const containerfirst = document.querySelector('.container-first');
        if (containerfirst) {
          containerfirst.classList.add('show');
        }
    const actionHand = document.querySelector('.right-hand');
        if (actionHand) {
          actionHand.classList.add('animate');
        }  
    const actionMouth = document.querySelector('.mouth');
        if (actionMouth) {
          actionMouth.classList.add('animate');
        }  
    const actionNoAnimation = document.querySelector('.cat-second');
        if (actionNoAnimation) {
          actionNoAnimation.classList.add('animate');
        }  
    const actionEye = document.querySelector('.eye');
        if (actionEye) {
          actionEye.classList.add('animate');
        }  
        // Assuming this code runs after the DOM is loaded

// 1. Create a new div element
const newDiv = document.createElement('div');

// 2. Add some properties to the div (e.g., class name, content)
newDiv.className = 'pupils'; // Assign a class
newDiv.style.width = '6px'; // Add some styling
newDiv.style.height = '7px';
newDiv.style.backgroundColor = 'black';
newDiv.style.position = 'absolute';
newDiv.style.borderRadius = '50%';
newDiv.style.bottom = '-2px';
newDiv.style.left = '34px';

// 4. Append the new div to the parent element
if (actionEye) {
  actionEye.appendChild(newDiv);
}

    
        // Get the collection of elements with class 'bubble'
        const actionBubbles = document.getElementsByClassName('bubble') as HTMLCollectionOf<HTMLElement>;

        // Iterate through the collection and hide each element
        for (let i = 0; i < actionBubbles.length; i++) {
            actionBubbles[i].style.display = 'none';
        }
        // Get the collection of elements with class 'bubble'
        const actionClick = document.getElementsByClassName('click') as HTMLCollectionOf<HTMLElement>;

        // Iterate through the collection and hide each element
        for (let i = 0; i < actionClick.length; i++) {
          actionClick[i].style.display = 'none';
        }
        const actionNoOpacity = document.querySelector('.cat-second.animate');
        if (actionNoOpacity) {
          actionNoOpacity.classList.add('show');
        } 

        this.wakeUpCat = true; 
      setTimeout(() => {
        const containerfirst = document.querySelector('.container-first');
        if (containerfirst) {
          containerfirst.classList.add('animate');
        }
          setTimeout(() => {
            this.router.navigateByUrl('bio');            
          }, 3000); 
      }, 1500);
  }
}
