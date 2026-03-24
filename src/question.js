import questinaire from "../src/assets/image.png";
import Red from "../src/assets/red.png";
import Yellow from "../src/assets/yellow.png";
import Blue from "../src/assets/blue.png";
import Tone from "../src/assets/T-one.png";
import Ttwo from "../src/assets/T-two.png";
import Tthree from "../src/assets/T-three.png";
import Tfour from "../src/assets/T-four.png";
import Green from "../src/assets/green.png";
import one from "../src/assets/1.png";
import two from "../src/assets/2.png";
import four from "../src/assets/4.png";
import five from "../src/assets/5.png";

const questions = [
  {
    id: 1,
    text: "What car has the color yellow?",
    image: questinaire,
    shape: null,
    options: [
      { image: Red, bg: "bg-[#F3E8D7]", correct: false },
      { image: Yellow, bg: "bg-[#EDE7E3]", correct: true },
      { image: Blue, bg: "bg-[#DCEAF3]", correct: false },
      { image: Green, bg: "bg-[#F3E1C7]", correct: false },
    ],
  },

  {
    id: 2,
    text: "Which shape is a triangle?",
    image: questinaire,
    shape: "/triangle-shape.png",
    options: [
      { image: Tone, bg: "bg-[#F3E8D7]", correct: false },
      { image: Ttwo, bg: "bg-[#EDE7E3]", correct: true },
      { image: Tthree, bg: "bg-[#DCEAF3]", correct: false },
      { image: Tfour, bg: "bg-[#F3E1C7]", correct: false },
    ],
  },

  {
    id: 3,
    text: "Select the option with 5 apples",
    image: questinaire,
    shape: null,
    options: [
      { image: one, bg: "bg-[#F3E8D7]", correct: false },
      { image: two, bg: "bg-[#EDE7E3]", correct: false },
      { image: five, bg: "bg-[#DCEAF3]", correct: true },
      { image: four, bg: "bg-[#F3E1C7]", correct: false },
    ],
  },
];

export default questions;
