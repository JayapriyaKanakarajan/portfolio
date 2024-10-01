import { AfterViewInit, Component, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  menuOpen = false;
  apps = 
    {
      app1: [
        "HTML",
        "scss",
        "Bootstrap",
        "Angular 15",
        "TypeScript",
        "Angular Material UI",
        "ng2-charts",
        "chart.js",
        "CoinGecko API",
        "HttpClientModule",
        "Angular Forms",
        "Angular Router"
      ],
      app2: [
        "HTML",
        "scss",
        "Angular 15",
        "TypeScript",
        "PWA",
        "Service Workers",
        "Nebular UI",
        "ngsw-worker.js",
        "Angular Animations",  
        "Nebular Cosmic Theme",     
        "Tic-Tac-Toe Game Logic",
      ]
    };

  constructor(private renderer: Renderer2, private router: Router) {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  ngAfterViewInit() {
    // Add the 'show' class to trigger the fade-in effect
    const content = document.querySelector('.fade-in');
    if (content) {
      setTimeout(() => {
        this.renderer.addClass(content, 'show');
      }, 0); // 0ms to apply the class immediately after the view is initialized
    }
  }

  
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.resetBurgerIcon();
  }

  closeMenu() {
    this.menuOpen = false;
    this.resetBurgerIcon();
  }

  resetBurgerIcon() {
    const checkbox = document.getElementById('menuToggle') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = this.menuOpen;  // Manually reset the checkbox to ensure burger icon resets
    }
  }

  
  // HostListener listens to mouse movement when hovering over any social link
  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const githubLinks = document.querySelectorAll('.social-icon.github');

    githubLinks.forEach(githubLink => {
      const githubIcon = (githubLink.querySelector('.github-icon') as HTMLElement);

      if (githubLink && githubIcon) {
        // Only update position if the link is actually hovered
        if (githubLink.matches(':hover')) {
          const rect = githubLink.getBoundingClientRect();
          githubIcon.style.left = `${event.clientX - rect.left - 15}px`;
          githubIcon.style.top = `${event.clientY - rect.top - 15}px`;
          githubIcon.style.opacity = '0.7';
        } else {
          // Reset icon position if not hovered
          githubIcon.style.opacity = '0';
          // githubIcon.style.left = '0';
          // githubIcon.style.top = '0';
        }
      }
    });
  }

  // Reset position and opacity when mouse leaves the element
  @HostListener('mouseleave') onMouseLeave() {
    const githubIcons = document.querySelectorAll('.github-icon') as NodeListOf<HTMLElement>;

    githubIcons.forEach(githubIcon => {
      githubIcon.style.opacity = '0'; // Reset the opacity
      // githubIcon.style.left = '0'; // Reset the position
      // githubIcon.style.top = '0'; // Reset the position
    });
  }

  goToTictactoeWeb(){
    window.open('https://jayapriyakanakarajan.github.io/tic-tac-toe/', '_blank');
  }
  goToCryptoWeb(){
    window.open('https://jayapriyakanakarajan.github.io/crypto_checker/', '_blank');
  }

}
