import { AfterViewInit, Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent  implements AfterViewInit {
  menuOpen = false;
  skillsArray = [
    {
      type: "frontend Development ",
      content: ["HTML", "CSS", "SCSS", "Bootstrap", "JavaScript", "TypeScript", "Angular", "NgRx"]
    },
    {
      type: "testing ",
      content: ["Unit Testing", "Integration Testing", "E2E Testing"]
    },
    {
      type: "database management ",
      content: ["PostgreSQL"]
    },
    {
      type: "version control & tools ",
      content: ["Git", "Postman", "Swagger"]
    },
    {
      type: "cloud services ",
      content: ["Amazon Web Services (AWS)"]
    },
    {
      type: "methodologies ",
      content: ["Agile", "Scrum"]
    },
    {
      type: "project management ",
      content: ["GitLab", "Jira"]
    },
    {
      type: "languages ",
      content: ["English", "Tamil", "Hindi"]
    }
  ];
  

  constructor(private renderer: Renderer2) {}

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

}
