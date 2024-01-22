import { changeColor, fadeIn, marquee } from "./animation";

export const FadeInDiv = styled("div")({
  animation: `${fadeIn} 2s ease-in-out infinite`,
});

export const ChangeColorDiv = styled("div")({
  animation: `${changeColor} 15s ease-out forwards infinite`,
});

export const Marquee = styled("div")({
  animation: `${marquee} 10s linear infinite`,
});

export default ChangeColorDiv;
