import { useState, useEffect } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import TestComponent from "./TestComponent";

const testOne = [
  // {
  //   title: "Verbal Ability",
  //   sectionDetails: "24 Questions, 7:30 mins",
  //   timeLimit: 450,
  //   questions: Array.from({ length: 24 }, (_, i) => ({
  //     id: i + 1,
  //     label: `All birds can fly. Penguins are birds. Therefore, penguins can fly. ${
  //       i + 1
  //     }`,
  // image: `/images/verbal/q${i + 1}.png`,
  //     options: [
  //       { id: 1, label: "Apple" },
  //       { id: 2, label: "Banana" },
  //       { id: 3, label: "Uncertain" },
  //       { id: 4, label: "Depends on context" },
  //       { id: 5, label: "Only sometimes true" },
  //     ],
  //   })),
  // },
  {
    title: "Verbal Ability",
    // description:
    //   "This section tests your understanding and command of the English language, including grammar, vocabulary, sentence structure, and reading comprehension.",
    sectionDetails: "20 Questions, 5:00 mins",
    timeLimit: 1,
    questions: [
      {
        id: 1,
        image: "https://files.prepinsta.com/2019/09/visual11.png",
        label: "Choose the synonym of the word- Big' :",
        options: [
          { id: 1, label: "YeTinys" },
          { id: 2, label: "Huge" },
          { id: 3, label: "Small" },
          { id: 4, label: "Weak" },
          { id: 5, label: "Little" },
        ],
      },
      {
        id: 1,
        image:
          "https://media-hosting.imagekit.io/f7e98c9a50964d98/%7B70A2FED4-61B3-4866-B4D6-0D314150B96C%7D.png?Expires=1839580265&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NVU5EwBtxuyYsG7FffXfuRCGUiALuzZiPSSW9xZtlHNu6IUY0ecA~gkrpANg~fD97QzNs1uXzhOw9pg9LORhWgl3rEJ5EU6ueBUkuQ4vZubd2ECcXEHBMuo7oegt27t9rzegH9alhYJsfsyCjbOfrMFMmQDLYsFTipdEqmabRqo1cSMlT31ZJHHNnYBgxvYDFQJTEROE~Pwr~LbUgCeszi2twSSc2YXLB2KJ6rZ6dtjHe7OfIuoRYY9ZMwDlemUPyXy~lc1Qx6CpxDIiKMzszaqbQanOO3Gnf~cqcIxByJWShDQxi4I7q9aq9S-mmBO87DRutDAfiJDf7c56ecDQLg__",
        label: "Choose the synonym of the word- Big' :",
        options: [
          { id: 1, label: "SAME" },
          { id: 2, label: "REVERSE" },
        ],
      },
      {
        id: 2,
        label: "Select the correctly spelled word:",
        options: [
          { id: 1, label: "Comitee" },
          { id: 2, label: "Comittee" },
          { id: 3, label: "Commetee" },
          { id: 4, label: "Committee" },
          { id: 5, label: "Commitee" },
        ],
      },
      {
        id: 3,
        label: "Choose the antonym of “Cold”:",
        options: [
          { id: 1, label: "Snowy" },
          { id: 2, label: "Chilly" },
          { id: 3, label: "Warm" },
          { id: 4, label: "Freeze" },
          { id: 5, label: "Ice" },
        ],
      },
      {
        id: 4,
        label: "Pick the noun from the following words:",
        options: [
          { id: 1, label: "Quickly" },
          { id: 2, label: "Run" },
          { id: 3, label: "Blue" },
          { id: 4, label: "Dog" },
          { id: 5, label: "Walk" },
        ],
      },
      {
        id: 5,
        label: "Fill in the blank: She ___ to school every day.",
        options: [
          { id: 1, label: "walk" },
          { id: 2, label: "walked" },
          { id: 3, label: "walks" },
          { id: 4, label: "walking" },
          { id: 5, label: "has walk" },
        ],
      },
      {
        id: 6,
        label: "Choose the synonym of “Happy”:",
        options: [
          { id: 1, label: "Angry" },
          { id: 2, label: "Joyful" },
          { id: 3, label: "Tired" },
          { id: 4, label: "Hungry" },
          { id: 5, label: "Nervous" },
        ],
      },
      {
        id: 7,
        label: "Identify the plural form of “Foot”:",
        options: [
          { id: 1, label: "Feets" },
          { id: 2, label: "Foots" },
          { id: 3, label: "Fets" },
          { id: 4, label: "Fetes" },
          { id: 5, label: "Feet" },
        ],
      },
      {
        id: 8,
        label: "Which of the following is a verb?",
        options: [
          { id: 1, label: "Table" },
          { id: 2, label: "Book" },
          { id: 3, label: "Jump" },
          { id: 4, label: "Sweet" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 9,
        label: "Is the analogy strong or weak?",
        options: [
          { id: 1, label: "Strong" },
          { id: 2, label: "Weak" },
        ],
      },
      {
        id: 10,
        label: "Does this statement contradict earlier information?",
        options: [
          { id: 1, label: "while" },
          { id: 2, label: "when" },
          { id: 3, label: "although" },
          { id: 4, label: "until" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 11,
        label: "Choose the synonym of the word- Big':",
        options: [
          { id: 1, label: "YeTinys" },
          { id: 2, label: "Huge" },
          { id: 3, label: "Small" },
          { id: 4, label: "Weak" },
          { id: 5, label: "Little" },
        ],
      },
      {
        id: 12,
        label: "Select the correctly spelled word:",
        options: [
          { id: 1, label: "Comitee" },
          { id: 2, label: "Comittee" },
          { id: 3, label: "Commetee" },
          { id: 4, label: "Committee" },
          { id: 5, label: "Commitee" },
        ],
      },
      {
        id: 13,
        label: "Choose the antonym of “Cold”:",
        options: [
          { id: 1, label: "Snowy" },
          { id: 2, label: "Chilly" },
          { id: 3, label: "Warm" },
          { id: 4, label: "Freeze" },
          { id: 5, label: "Ice" },
        ],
      },
      {
        id: 14,
        label: "Pick the noun from the following words:",
        options: [
          { id: 1, label: "Quickly" },
          { id: 2, label: "Run" },
          { id: 3, label: "Blue" },
          { id: 4, label: "Dog" },
          { id: 5, label: "Walk" },
        ],
      },
      {
        id: 15,
        label: "Fill in the blank: She ___ to school every day.",
        options: [
          { id: 1, label: "walk" },
          { id: 2, label: "walked" },
          { id: 3, label: "walks" },
          { id: 4, label: "walking" },
          { id: 5, label: "has walk" },
        ],
      },
      {
        id: 16,
        label: "Choose the synonym of “Happy”:",
        options: [
          { id: 1, label: "Angry" },
          { id: 2, label: "Joyful" },
          { id: 3, label: "Tired" },
          { id: 4, label: "Hungry" },
          { id: 5, label: "Nervous" },
        ],
      },
      {
        id: 17,
        label: "Identify the plural form of “Foot”:",
        options: [
          { id: 1, label: "Feets" },
          { id: 2, label: "Foots" },
          { id: 3, label: "Fets" },
          { id: 4, label: "Fetes" },
          { id: 5, label: "Feet" },
        ],
      },
      {
        id: 18,
        label: "Which of the following is a verb?",
        options: [
          { id: 1, label: "Table" },
          { id: 2, label: "Book" },
          { id: 3, label: "Jump" },
          { id: 4, label: "Sweet" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 19,
        label: "Is the analogy strong or weak?",
        options: [
          { id: 1, label: "Strong" },
          { id: 2, label: "Weak" },
        ],
      },
      {
        id: 20,
        label: "Does this statement contradict earlier information?",
        options: [
          { id: 1, label: "while" },
          { id: 2, label: "when" },
          { id: 3, label: "although" },
          { id: 4, label: "until" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 21,
        label: "Does this statement contradict earlier information?",
        options: [
          { id: 1, label: "while" },
          { id: 2, label: "when" },
          { id: 3, label: "although" },
          { id: 4, label: "until" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 22,
        label: "Does this statement contradict earlier information?",
        options: [
          { id: 1, label: "while" },
          { id: 2, label: "when" },
          { id: 3, label: "although" },
          { id: 4, label: "until" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 23,
        label: "Does this statement contradict earlier information?",
        options: [
          { id: 1, label: "while" },
          { id: 2, label: "when" },
          { id: 3, label: "although" },
          { id: 4, label: "until" },
          { id: 5, label: "Red" },
        ],
      },
      {
        id: 25,
        label: "Does this statement contradict earlier information?",
        options: [
          { id: 1, label: "while" },
          { id: 2, label: "when" },
          { id: 3, label: "although" },
          { id: 4, label: "until" },
          { id: 5, label: "Red" },
        ],
      },
    ],
  },
  {
    // description:
    //   "This section evaluates your problem-solving and mathematical skills, including algebra, arithmetic, and geometry. Answer the questions within the given time frame.",
    title: "Numerical Ability",
    sectionDetails: "20 Questions, 5:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "What is 25 + 17?",
        options: [
          { id: 1, label: "41" },
          { id: 2, label: "42" },
          { id: 3, label: "43" },
          { id: 4, label: "44" },
          { id: 5, label: "45" },
        ],
      },
      {
        id: 2,
        label: "If a pen costs ₹15, how many can you buy with ₹75?",
        options: [
          { id: 1, label: "3" },
          { id: 2, label: "4" },
          { id: 3, label: "5" },
          { id: 4, label: "6" },
          { id: 5, label: "7" },
        ],
      },
      {
        id: 3,
        label: "What is the next number in the series: 2, 4, 6, 8, ___?",
        options: [
          { id: 1, label: "9" },
          { id: 2, label: "10" },
          { id: 3, label: "11" },
          { id: 4, label: "12" },
          { id: 5, label: "14" },
        ],
      },
      {
        id: 4,
        label: "Simplify: 3 × (2 + 4)",
        options: [
          { id: 1, label: "15" },
          { id: 2, label: "18" },
          { id: 3, label: "21" },
          { id: 4, label: "12" },
          { id: 5, label: "9" },
        ],
      },
      {
        id: 5,
        label: "Which number is an even number?",
        options: [
          { id: 1, label: "11" },
          { id: 2, label: "13" },
          { id: 3, label: "15" },
          { id: 4, label: "16" },
          { id: 5, label: "17" },
        ],
      },
      {
        id: 6,
        label: "What is 15% of 200?",
        options: [
          { id: 1, label: "20" },
          { id: 2, label: "25" },
          { id: 3, label: "30" },
          { id: 4, label: "35" },
          { id: 5, label: "40" },
        ],
      },
      {
        id: 7,
        label: "Find the missing number: 5, 10, __, 20, 25",
        options: [
          { id: 1, label: "11" },
          { id: 2, label: "12" },
          { id: 3, label: "13" },
          { id: 4, label: "15" },
          { id: 5, label: "17" },
        ],
      },
      {
        id: 8,
        label: "What is the square of 9?",
        options: [
          { id: 1, label: "72" },
          { id: 2, label: "81" },
          { id: 3, label: "91" },
          { id: 4, label: "99" },
          { id: 5, label: "100" },
        ],
      },
      {
        id: 9,
        label: "Simplify: (18 ÷ 3) + 2 × 4",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "12" },
          { id: 3, label: "14" },
          { id: 4, label: "16" },
          { id: 5, label: "18" },
        ],
      },
      {
        id: 10,
        label:
          "A book costs ₹120. A discount of 25% is offered. What is the price after discount?",
        options: [
          { id: 1, label: "₹80" },
          { id: 2, label: "₹85" },
          { id: 3, label: "₹90" },
          { id: 4, label: "₹95" },
          { id: 5, label: "₹100" },
        ],
      },
      {
        id: 11,
        label: "What is the value of 3³?",
        options: [
          { id: 1, label: "6" },
          { id: 2, label: "9" },
          { id: 3, label: "18" },
          { id: 4, label: "27" },
          { id: 5, label: "81" },
        ],
      },
      {
        id: 12,
        label: "If 5x = 60, what is x?",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "11" },
          { id: 3, label: "12" },
          { id: 4, label: "13" },
          { id: 5, label: "14" },
        ],
      },
      {
        id: 13,
        label: "What is the least common multiple (LCM) of 6 and 8?",
        options: [
          { id: 1, label: "12" },
          { id: 2, label: "18" },
          { id: 3, label: "24" },
          { id: 4, label: "36" },
          { id: 5, label: "48" },
        ],
      },
      {
        id: 14,
        label: "What is the cube root of 64?",
        options: [
          { id: 1, label: "2" },
          { id: 2, label: "3" },
          { id: 3, label: "4" },
          { id: 4, label: "5" },
          { id: 5, label: "6" },
        ],
      },
      {
        id: 15,
        label: "Solve for x: 2x - 5 = 15",
        options: [
          { id: 1, label: "8" },
          { id: 2, label: "9" },
          { id: 3, label: "10" },
          { id: 4, label: "11" },
          { id: 5, label: "12" },
        ],
      },
      {
        id: 16,
        label: "Which number is both a square and a cube?",
        options: [
          { id: 1, label: "8" },
          { id: 2, label: "16" },
          { id: 3, label: "64" },
          { id: 4, label: "36" },
          { id: 5, label: "49" },
        ],
      },
      {
        id: 17,
        label:
          "If 12 workers complete a task in 10 days, how many days would 6 workers take?",
        options: [
          { id: 1, label: "15" },
          { id: 2, label: "18" },
          { id: 3, label: "20" },
          { id: 4, label: "22" },
          { id: 5, label: "24" },
        ],
      },
      {
        id: 18,
        label: "A car travels 180 km in 3 hours. What is its average speed?",
        options: [
          { id: 1, label: "50 km/h" },
          { id: 2, label: "55 km/h" },
          { id: 3, label: "60 km/h" },
          { id: 4, label: "65 km/h" },
          { id: 5, label: "70 km/h" },
        ],
      },
      {
        id: 19,
        label:
          "If the radius of a circle is 7 cm, what is its area? (Use π = 22/7)",
        options: [
          { id: 1, label: "144 cm²" },
          { id: 2, label: "148 cm²" },
          { id: 3, label: "154 cm²" },
          { id: 4, label: "158 cm²" },
          { id: 5, label: "162 cm²" },
        ],
      },
      {
        id: 20,
        label:
          "What is the compound interest on ₹10,000 at 10% per annum for 2 years?",
        options: [
          { id: 1, label: "₹1000" },
          { id: 2, label: "₹1100" },
          { id: 3, label: "₹1200" },
          { id: 4, label: "₹1210" },
          { id: 5, label: "₹1220" },
        ],
      },
    ],
  },
  {
    title: "Closure Ability",
    sectionDetails: "20 Questions, 4:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "Which figure completes the pattern?",
        options: [
          { id: 1, label: "Option A" },
          { id: 2, label: "Option B" },
          { id: 3, label: "Option C" },
          { id: 4, label: "Option D" },
        ],
      },
      {
        id: 2,
        label: "Which image best completes the figure?",
        options: [
          { id: 1, label: "Image A" },
          { id: 2, label: "Image B" },
          { id: 3, label: "Image C" },
          { id: 4, label: "Image D" },
        ],
      },
      {
        id: 3,
        label: "Select the option that completes the shape logically.",
        options: [
          { id: 1, label: "1" },
          { id: 2, label: "2" },
          { id: 3, label: "3" },
          { id: 4, label: "4" },
        ],
      },
      {
        id: 4,
        label: "Which figure logically fits in the missing space?",
        options: [
          { id: 1, label: "Shape A" },
          { id: 2, label: "Shape B" },
          { id: 3, label: "Shape C" },
          { id: 4, label: "Shape D" },
        ],
      },
      {
        id: 5,
        label: "Identify the missing part in the figure sequence.",
        options: [
          { id: 1, label: "Pattern A" },
          { id: 2, label: "Pattern B" },
          { id: 3, label: "Pattern C" },
          { id: 4, label: "Pattern D" },
        ],
      },
      {
        id: 6,
        label: "Which option completes the incomplete picture?",
        options: [
          { id: 1, label: "Choice A" },
          { id: 2, label: "Choice B" },
          { id: 3, label: "Choice C" },
          { id: 4, label: "Choice D" },
        ],
      },
      {
        id: 7,
        label: "Choose the correct piece that fits in the blank area.",
        options: [
          { id: 1, label: "Piece A" },
          { id: 2, label: "Piece B" },
          { id: 3, label: "Piece C" },
          { id: 4, label: "Piece D" },
        ],
      },
      {
        id: 8,
        label: "Which part completes the symmetrical pattern?",
        options: [
          { id: 1, label: "Sym A" },
          { id: 2, label: "Sym B" },
          { id: 3, label: "Sym C" },
          { id: 4, label: "Sym D" },
        ],
      },
      {
        id: 9,
        label: "Select the image that fills the missing part of the design.",
        options: [
          { id: 1, label: "Fill A" },
          { id: 2, label: "Fill B" },
          { id: 3, label: "Fill C" },
          { id: 4, label: "Fill D" },
        ],
      },
      {
        id: 10,
        label: "Find the correct image to complete the whole.",
        options: [
          { id: 1, label: "Whole A" },
          { id: 2, label: "Whole B" },
          { id: 3, label: "Whole C" },
          { id: 4, label: "Whole D" },
        ],
      },
      {
        id: 11,
        label: "Which piece completes the cut-out figure?",
        options: [
          { id: 1, label: "Cut A" },
          { id: 2, label: "Cut B" },
          { id: 3, label: "Cut C" },
          { id: 4, label: "Cut D" },
        ],
      },
      {
        id: 12,
        label: "Which image shows the complete pattern?",
        options: [
          { id: 1, label: "Pattern A" },
          { id: 2, label: "Pattern B" },
          { id: 3, label: "Pattern C" },
          { id: 4, label: "Pattern D" },
        ],
      },
      {
        id: 13,
        label: "Find the part that logically fits the puzzle.",
        options: [
          { id: 1, label: "Part A" },
          { id: 2, label: "Part B" },
          { id: 3, label: "Part C" },
          { id: 4, label: "Part D" },
        ],
      },
      {
        id: 14,
        label: "Select the missing piece of the diagram.",
        options: [
          { id: 1, label: "Diagram A" },
          { id: 2, label: "Diagram B" },
          { id: 3, label: "Diagram C" },
          { id: 4, label: "Diagram D" },
        ],
      },
      {
        id: 15,
        label: "Choose the part that completes the circle.",
        options: [
          { id: 1, label: "Circle A" },
          { id: 2, label: "Circle B" },
          { id: 3, label: "Circle C" },
          { id: 4, label: "Circle D" },
        ],
      },
      {
        id: 16,
        label: "Which piece fits into the grid to complete the structure?",
        options: [
          { id: 1, label: "Grid A" },
          { id: 2, label: "Grid B" },
          { id: 3, label: "Grid C" },
          { id: 4, label: "Grid D" },
        ],
      },
      {
        id: 17,
        label: "What is the best match for the missing piece?",
        options: [
          { id: 1, label: "Match A" },
          { id: 2, label: "Match B" },
          { id: 3, label: "Match C" },
          { id: 4, label: "Match D" },
        ],
      },
      {
        id: 18,
        label: "Which choice completes the illustration?",
        options: [
          { id: 1, label: "Ill A" },
          { id: 2, label: "Ill B" },
          { id: 3, label: "Ill C" },
          { id: 4, label: "Ill D" },
        ],
      },
      {
        id: 19,
        label: "Choose the fitting piece to finalize the shape.",
        options: [
          { id: 1, label: "Final A" },
          { id: 2, label: "Final B" },
          { id: 3, label: "Final C" },
          { id: 4, label: "Final D" },
        ],
      },
      {
        id: 20,
        label: "Identify the correct option to complete the image.",
        options: [
          { id: 1, label: "Image A" },
          { id: 2, label: "Image B" },
          { id: 3, label: "Image C" },
          { id: 4, label: "Image D" },
        ],
      },
    ],
  },
  {
    title: "Spatial Ability",
    sectionDetails: "72 Questions, 10:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "What is the value of x if 2x + 3 = 11?",
        options: [
          { id: 1, label: "3" },
          { id: 2, label: "4" },
          { id: 3, label: "5" },
          { id: 4, label: "6" },
        ],
      },
      {
        id: 2,
        label: "Find the next number in the sequence: 2, 4, 8, 16, ...",
        options: [
          { id: 1, label: "18" },
          { id: 2, label: "24" },
          { id: 3, label: "32" },
          { id: 4, label: "36" },
        ],
      },
      {
        id: 3,
        label: "If a triangle has angles 30° and 60°, the third angle is:",
        options: [
          { id: 1, label: "30°" },
          { id: 2, label: "60°" },
          { id: 3, label: "90°" },
          { id: 4, label: "120°" },
        ],
      },
      {
        id: 4,
        label: "The square root of 144 is:",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "11" },
          { id: 3, label: "12" },
          { id: 4, label: "13" },
        ],
      },
      {
        id: 5,
        label: "Which of the following is a prime number?",
        options: [
          { id: 1, label: "21" },
          { id: 2, label: "23" },
          { id: 3, label: "25" },
          { id: 4, label: "27" },
        ],
      },
      {
        id: 6,
        label: "What is the area of a circle with radius 7?",
        options: [
          { id: 1, label: "49π" },
          { id: 2, label: "14π" },
          { id: 3, label: "28π" },
          { id: 4, label: "77" },
        ],
      },
      {
        id: 7,
        label: "Simplify: 3(x + 2) = ?",
        options: [
          { id: 1, label: "3x + 2" },
          { id: 2, label: "3x + 6" },
          { id: 3, label: "x + 6" },
          { id: 4, label: "6x + 3" },
        ],
      },
    ],
  },
  {
    title: "Mechanical Ability",
    sectionDetails: "25 Questions, 10:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "What is the value of x if 2x + 3 = 11?",
        options: [
          { id: 1, label: "3" },
          { id: 2, label: "4" },
          { id: 3, label: "5" },
          { id: 4, label: "6" },
        ],
      },
      {
        id: 2,
        label: "Find the next number in the sequence: 2, 4, 8, 16, ...",
        options: [
          { id: 1, label: "18" },
          { id: 2, label: "24" },
          { id: 3, label: "32" },
          { id: 4, label: "36" },
        ],
      },
      {
        id: 3,
        label: "If a triangle has angles 30° and 60°, the third angle is:",
        options: [
          { id: 1, label: "30°" },
          { id: 2, label: "60°" },
          { id: 3, label: "90°" },
          { id: 4, label: "120°" },
        ],
      },
      {
        id: 4,
        label: "The square root of 144 is:",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "11" },
          { id: 3, label: "12" },
          { id: 4, label: "13" },
        ],
      },
      {
        id: 5,
        label: "Which of the following is a prime number?",
        options: [
          { id: 1, label: "21" },
          { id: 2, label: "23" },
          { id: 3, label: "25" },
          { id: 4, label: "27" },
        ],
      },
      {
        id: 6,
        label: "What is the area of a circle with radius 7?",
        options: [
          { id: 1, label: "49π" },
          { id: 2, label: "14π" },
          { id: 3, label: "28π" },
          { id: 4, label: "77" },
        ],
      },
      {
        id: 7,
        label: "Simplify: 3(x + 2) = ?",
        options: [
          { id: 1, label: "3x + 2" },
          { id: 2, label: "3x + 6" },
          { id: 3, label: "x + 6" },
          { id: 4, label: "6x + 3" },
        ],
      },
    ],
  },
  {
    title: "Clerical Ability",
    sectionDetails: "72 Questions, 10:00 mins",
    timeLimit: 4,
    questions: [
      {
        id: 1,
        label: "What is the value of x if 2x + 3 = 11?",
        options: [
          { id: 1, label: "3" },
          { id: 2, label: "4" },
          { id: 3, label: "5" },
          { id: 4, label: "6" },
        ],
      },
      {
        id: 2,
        label: "Find the next number in the sequence: 2, 4, 8, 16, ...",
        options: [
          { id: 1, label: "18" },
          { id: 2, label: "24" },
          { id: 3, label: "32" },
          { id: 4, label: "36" },
        ],
      },
      {
        id: 3,
        label: "If a triangle has angles 30° and 60°, the third angle is:",
        options: [
          { id: 1, label: "30°" },
          { id: 2, label: "60°" },
          { id: 3, label: "90°" },
          { id: 4, label: "120°" },
        ],
      },
      {
        id: 4,
        label: "The square root of 144 is:",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "11" },
          { id: 3, label: "12" },
          { id: 4, label: "13" },
        ],
      },
      {
        id: 5,
        label: "Which of the following is a prime number?",
        options: [
          { id: 1, label: "21" },
          { id: 2, label: "23" },
          { id: 3, label: "25" },
          { id: 4, label: "27" },
        ],
      },
      {
        id: 6,
        label: "What is the area of a circle with radius 7?",
        options: [
          { id: 1, label: "49π" },
          { id: 2, label: "14π" },
          { id: 3, label: "28π" },
          { id: 4, label: "77" },
        ],
      },
      {
        id: 7,
        label: "Simplify: 3(x + 2) = ?",
        options: [
          { id: 1, label: "3x + 2" },
          { id: 2, label: "3x + 6" },
          { id: 3, label: "x + 6" },
          { id: 4, label: "6x + 3" },
        ],
      },
    ],
  },
  {
    title: "Reasoning Ability",
    sectionDetails: "12 Questions, 10:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "What is the value of x if 2x + 3 = 11?",
        options: [
          { id: 1, label: "3" },
          { id: 2, label: "4" },
          { id: 3, label: "5" },
          { id: 4, label: "6" },
        ],
      },
      {
        id: 2,
        label: "Find the next number in the sequence: 2, 4, 8, 16, ...",
        options: [
          { id: 1, label: "18" },
          { id: 2, label: "24" },
          { id: 3, label: "32" },
          { id: 4, label: "36" },
        ],
      },
      {
        id: 3,
        label: "If a triangle has angles 30° and 60°, the third angle is:",
        options: [
          { id: 1, label: "30°" },
          { id: 2, label: "60°" },
          { id: 3, label: "90°" },
          { id: 4, label: "120°" },
        ],
      },
      {
        id: 4,
        label: "The square root of 144 is:",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "11" },
          { id: 3, label: "12" },
          { id: 4, label: "13" },
        ],
      },
      {
        id: 5,
        label: "Which of the following is a prime number?",
        options: [
          { id: 1, label: "21" },
          { id: 2, label: "23" },
          { id: 3, label: "25" },
          { id: 4, label: "27" },
        ],
      },
      {
        id: 6,
        label: "What is the area of a circle with radius 7?",
        options: [
          { id: 1, label: "49π" },
          { id: 2, label: "14π" },
          { id: 3, label: "28π" },
          { id: 4, label: "77" },
        ],
      },
      {
        id: 7,
        label: "Simplify: 3(x + 2) = ?",
        options: [
          { id: 1, label: "3x + 2" },
          { id: 2, label: "3x + 6" },
          { id: 3, label: "x + 6" },
          { id: 4, label: "6x + 3" },
        ],
      },
    ],
  },
  {
    title: "Psychomotor Ability",
    sectionDetails: "70 Questions, 10:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "What is the value of x if 2x + 3 = 11?",
        options: [
          { id: 1, label: "3" },
          { id: 2, label: "4" },
          { id: 3, label: "5" },
          { id: 4, label: "6" },
        ],
      },
      {
        id: 2,
        label: "Find the next number in the sequence: 2, 4, 8, 16, ...",
        options: [
          { id: 1, label: "18" },
          { id: 2, label: "24" },
          { id: 3, label: "32" },
          { id: 4, label: "36" },
        ],
      },
      {
        id: 3,
        label: "If a triangle has angles 30° and 60°, the third angle is:",
        options: [
          { id: 1, label: "30°" },
          { id: 2, label: "60°" },
          { id: 3, label: "90°" },
          { id: 4, label: "120°" },
        ],
      },
      {
        id: 4,
        label: "The square root of 144 is:",
        options: [
          { id: 1, label: "10" },
          { id: 2, label: "11" },
          { id: 3, label: "12" },
          { id: 4, label: "13" },
        ],
      },
      {
        id: 5,
        label: "Which of the following is a prime number?",
        options: [
          { id: 1, label: "21" },
          { id: 2, label: "23" },
          { id: 3, label: "25" },
          { id: 4, label: "27" },
        ],
      },
      {
        id: 6,
        label: "What is the area of a circle with radius 7?",
        options: [
          { id: 1, label: "49π" },
          { id: 2, label: "14π" },
          { id: 3, label: "28π" },
          { id: 4, label: "77" },
        ],
      },
      {
        id: 7,
        label: "Simplify: 3(x + 2) = ?",
        options: [
          { id: 1, label: "3x + 2" },
          { id: 2, label: "3x + 6" },
          { id: 3, label: "x + 6" },
          { id: 4, label: "6x + 3" },
        ],
      },
    ],
  },
  {
    title: "Personality",
    sectionDetails: "6 Questions, 3:00 mins",
    timeLimit: 3,
    questions: [
      {
        id: 1,
        label: "You enjoy group activities.",
        options: [
          { id: 1, label: "Strongly Disagree" },
          { id: 2, label: "Disagree" },
          { id: 3, label: "Neutral" },
          { id: 4, label: "Agree" },
          { id: 5, label: "Strongly Agree" },
        ],
      },
      {
        id: 2,
        label: "You prefer to plan things ahead.",
        options: [
          { id: 1, label: "Strongly Disagree" },
          { id: 2, label: "Disagree" },
          { id: 3, label: "Neutral" },
          { id: 4, label: "Agree" },
          { id: 5, label: "Strongly Agree" },
        ],
      },
      {
        id: 3,
        label: "Do you find it easy to empathize with others?",
        options: [
          { id: 1, label: "Yes" },
          { id: 2, label: "No" },
        ],
      },
      {
        id: 4,
        label: "You enjoy working under pressure.",
        options: [
          { id: 1, label: "Strongly Disagree" },
          { id: 2, label: "Disagree" },
          { id: 3, label: "Neutral" },
          { id: 4, label: "Agree" },
          { id: 5, label: "Strongly Agree" },
        ],
      },
      {
        id: 5,
        label: "Are you open to criticism?",
        options: [
          { id: 1, label: "Yes" },
          { id: 2, label: "No" },
        ],
      },
      {
        id: 6,
        label: "You often reflect on your decisions.",
        options: [
          { id: 1, label: "Strongly Disagree" },
          { id: 2, label: "Disagree" },
          { id: 3, label: "Neutral" },
          { id: 4, label: "Agree" },
          { id: 5, label: "Strongly Agree" },
        ],
      },
    ],
  },
];

const testTwo = [
  {
    title: "Self Motivation",
    sectionDetails: "50 Questions, 20: mins",
    timeLimit: 30,
    questions: Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      label: `Do you set personal goals regularly ? ${i + 1}`,
      options: [
        { id: 1, label: "Yes" },
        { id: 2, label: "No" },
      ],
    })),
  },
];

// Array of your tests

const SecureTestManagement = () => {
  const allTests = [testOne, testTwo];
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [allTestAnswers, setAllTestAnswers] = useState({});
  const [testCompleted, setTestCompleted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [currentTest, setCurrentTest] = useState(allTests[0]); // Initialize with the first test

  useEffect(() => {
    // Update the current test based on the currentTestIndex
    setCurrentTest(allTests[currentTestIndex]);
  }, [currentTestIndex, allTests]);

  const handleTestSubmit = (answers) => {
    if (currentTestIndex == allTests.length - 1) {
      setTestCompleted(true);
    }
    setCurrentTestIndex(1);
    console.log(
      `${allTests[currentTestIndex].title} Completed. Answers:`,
      answers
    );

    // Store the answers for the completed test
    setAllTestAnswers((prevAnswers) => ({
      ...prevAnswers,
      [allTests[currentTestIndex].title]: answers,
    }));

    // Mark the test as completed
    setTestCompleted(true);

    // Automatically move to the next test if available
    if (currentTestIndex < allTests.length - 1) {
      setTimeout(() => {
        handleNextSection();
      }, 1000); // Optional delay for better user experience
    } else {
      console.log("All tests completed!");
    }
  };

  const handleNextSection = () => {
    if (currentTestIndex < allTests.length - 1) {
      setCurrentTestIndex((prevIndex) => prevIndex + 1);
      setTestCompleted(false);
    }
  };

  return (
    <Box>
      {currentTest ? (
        <>
          {/* Button to open the description modal */}
          <Button
            variant="outlined"
            onClick={() => setIsModalOpen(true)}
            sx={{
              position: "relative", // Allows positioning relative to its container
              left: "-30px", // Moves the button to the left
              top: "30px", // Moves the button slightly down
              mb: 0,
            }}
          >
            Hint
          </Button>
          {/* Modal for displaying the description */}
          <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            aria-labelledby="test-description-title"
            aria-describedby="test-description-content"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 1200,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
                overflowY: "auto",
                maxHeight: "80vh",
              }}
            >
              <Typography
                id="test-description-title"
                variant="h6"
                component="h2"
              >
                {currentTest.title}
              </Typography>
              <Typography id="test-description-content" sx={{ mt: 2 }}>
                {currentTest.description ||
                  "This section tests your understanding and command of the English language, including grammar, vocabulary, sentence structure, and reading comprehension. It may include questions on synonyms, antonyms, sentence completion, and reading passages."}
              </Typography>

              {/* Adding an image */}
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <img
                  src="https://dreamdesk.in/assets/img/logo/logo.png"
                  alt="Test Description"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              </Box>

              {/* Adding a card */}
              <Box sx={{ mt: 2 }}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Verbal Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Welcome to the Verbal Ability section of the test. This
                    section assesses your understanding and interpretation of
                    written language. ⏱️ Time Limit: 7 minutes 30 seconds 📋
                    Total Questions: 24 ✅ Question Type: Multiple Choice
                    Questions (MCQs) 🧠 Marks per Question: 1 mark ✅ Correct
                    Answer Format: Choose the most appropriate option (A, B, C,
                    D, or E)
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Numerical Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Welcome to the Numerical Ability section of the test. This
                    section is designed to evaluate your mathematical reasoning
                    and number problem-solving skills. ⏱️ Time Limit: 5 minutes
                    30 seconds 📋 Total Questions: 20 ✅ Question Type: Multiple
                    Choice Questions (MCQs) 🧠 Marks per Question: 1 mark ✅
                    Correct Answer Format: Select the most accurate option (A,
                    B, C, D, or E)
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Closure Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    🧩 Closure Ability (CA) – Instructions Welcome to the
                    Closure Ability section of the test. This section measures
                    your visual perception skills, especially your ability to
                    mentally complete incomplete figures or patterns. ⏱️ Time
                    Limit: 4 minutes 30 seconds 📋 Total Questions: 20 ✅
                    Question Type: Multiple Choice Questions (MCQs) with Images
                    🧠 Marks per Question: 1 mark ✅ Correct Answer Format:
                    Choose the option that best completes the image or pattern.
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Spatial Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    🧭 Spatial Ability (SA) – Instructions Welcome to the
                    Spatial Ability section. This part of the test assesses your
                    ability to understand and manipulate visual and spatial
                    information — an important skill in reasoning and
                    problem-solving. ⏱️ Time Limit: 4 minutes 30 seconds 📋
                    Total Questions: 20 ✅ Question Type: Multiple Choice
                    Questions (MCQs) with Images 🧠 Marks per Question: 1 mark
                    ✅ Correct Answer Format: Choose the option that correctly
                    represents the spatial relationship or transformation.
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Mechanical Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    ⚙️ Mechanical Ability (MA) – Instructions Welcome to the
                    Mechanical Ability section. This part of the test is
                    designed to measure your understanding of mechanical and
                    physical principles, and how different systems and objects
                    function. ⏱️ Time Limit: 4 minutes 30 seconds 📋 Total
                    Questions: 20 ✅ Question Type: Image-based Multiple Choice
                    Questions (MCQs) 🧠 Marks per Question: 1 mark ✅ Correct
                    Answer Format: Choose the option that best describes how the
                    mechanical system works or behaves.
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Clerical Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    This test is designed to evaluate your skills in various
                    areas. Make sure to read the instructions carefully before
                    starting.
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Reasoning Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    This test is designed to evaluate your skills in various
                    areas. Make sure to read the instructions carefully before
                    starting.
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    Psychomotor Ability:
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    This test is designed to evaluate your skills in various
                    areas. Make sure to read the instructions carefully before
                    starting.
                  </Typography>
                </Box>
              </Box>

              {/* Adding a link */}
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2">
                  For more details, visit{" "}
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1976d2", textDecoration: "none" }}
                  >
                    this link
                  </a>
                  .
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsModalOpen(false)}
                sx={{ mt: 2 }}
              >
                Close
              </Button>
            </Box>
          </Modal>
          <TestComponent
            key={currentTest.id} // Important for re-rendering component when test changes
            title={currentTest.title}
            testData={currentTest}
            timeLimit={currentTest.timeLimit}
            onSubmit={handleTestSubmit}
          />
        </>
      ) : (
        <p>All assessments completed!</p>
      )}
    </Box>
  );
};

export default SecureTestManagement;
