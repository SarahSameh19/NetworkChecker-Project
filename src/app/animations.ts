import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('in', style({ opacity: 1 })),
  transition(':enter', [style({ opacity: 0 }), animate('1200ms ease-out')]),
  transition(':leave', animate('600ms ease-in', style({ opacity: 0 })))
]);

export const slideDownAnimation = trigger('slideDown', [
    state('expanded', style({ transform: 'translateY(100%)', opacity: 1 })), // Define expanded state
    state('collapsed', style({ transform: 'translateY(10)', opacity: 1 })), // Define collapsed state
    transition('collapsed => expanded', animate('1000ms ease-out')), // Transition from collapsed to expanded
    transition('expanded => collapsed', animate('1000ms ease-in')), // Transition from expanded to collapsed
  ]);

  export const slideLeftAnimation = trigger('slideLeft', [
    state('void', style({ transform: 'translateX(10%)', opacity: 0 })),
    transition(':enter', [
      animate('700ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
    transition(':leave', [
        animate('700ms ease-out', style({ transform: 'translateX(-10%)', opacity: 0 })),
      ]),
  ]);