import { keyframes } from "@emotion/react";

export const changeColor = keyframes`
  0%: {
    background-color: #FF8080;
  }
  15% {
    background-color: #FFCF96;
  }
  30% {
    background-color: #F6FDC3;
  }
  45% {
    background-color: #CDFAD5;
  }
  60% {
    background-color: #AEE2FF;
  } 
  75% {
    background-color: #C3ACD0;
  }
  90% {
    background-color: #FCC8D1;
  }
  100% {
    background-color: #FFABAB;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const marquee = keyframes`
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
`;
