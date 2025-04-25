let quizData = [
    {
      question: "What is Mana's Major?",
      options: ["Illustration", "Animation", "Environmental Design", "Graphic Design"],
      answer: "Environmental Design" // for now... im starting to like comp sci
    },
    {
      question: "Where is Mana From?",
      options: ["Edmonton", "Vancouver", "Toronto", "Calgary"],
      answer: "Vancouver"
    },
    {
      question: "Who is Mana's Favourite Music Artist?",
      options: ["Taylor Swfit", "Gracie Abrams", "Noah Kahan", "One Direction"],
      answer: "One Direction"
    },
    {
        question: "What Sport did Mana Do Growing up?",
        options: ["Competitive Skiing", "Soccer", "Competitive Fencing","Field Hockey"],
        answer: "Competitive Skiing"
    },
    {
        question: "Mana's Favourite Animal is an Otter?",
        options: ["True", "False"],
        answer: "True" //how could it not be
    },
    {
      question: "How Many Languages does Mana Speak?",
      options: ["1", "2", "3", "4"],
      answer: "4"
    },
    {
      question: "What Languages Does Mana Speak?",
      options: ["English, French, Farsi, Turkish", "English, Farsi, Italian, Spanish", "English, French, Italian, Spanish", "English, French, Spanish, Turkish"],
      answer: "English, French, Farsi, Turkish"
    },
    {
      question: "What Jobs has Mana Worked?",
      options: ["PetSmart", "Ski Coach", "Starbucks", "Resident Assistant", "All of the Above"],
      answer: "All of the Above"
    },
    {
      question: "What is Mana's Favourite F1 Team?",
      options: ["Ferrari", "Red Bull", "Mercedes", "Haas", "McLaren", "Williams", "Alpine"],
      answer: "McLaren"
    },
    {
      question: "3 truths and a lie (pick the lie)?",
      options: ["I've met Miles Teller", "This Course is my First Time Coding", "I Can Play the Drums","I've had 8 Concussions"],
      answer: "I Can Play the Drums"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let selectedOption = -1;
  let showingFeedback = false;
  let showResult = false;
  
  function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
    textSize(18);
  }
  
  function draw() {
    background(0, 100, 20);
  
    if (showResult) {
      drawResults();
    } else {
      displayQuestion();
    }
  }
  
  function displayQuestion() {
    let q = quizData[currentQuestion];
    fill(0);
    textSize(20);
    text(`Question ${currentQuestion + 1}: ${q.question}`, width / 2, 50);
  
    for (let i = 0; i < q.options.length; i++) {
      let y = 100 + i * 50;
  
      // Determine button color
      let btnColor = color(200); 
  
      if (showingFeedback) {
        if (i === selectedOption && q.options[i] === q.answer) {
          btnColor = color(0, 200, 0); // green for correct
        } else if (i === selectedOption && q.options[i] !== q.answer) {
          btnColor = color(200, 0, 0); // red for wrong
        } else if (q.options[i] === q.answer) {
          btnColor = color(0, 200, 0); // highlight the correct one
        }
      } /* this series of lines is my favourite because it took me a while to figure out how to get the right answer to turn green and the wrong one to turn red
        I had a lot of fun solving this because it sounded like a good idea in my head and I wanted to make it come to "life"*/

      fill(btnColor);
      rect(150, y, 300, 40, 5);
      fill(0);
      text(q.options[i], width / 2, y + 20);
    }
  
    // Draw "Next" button after feedback
    if (showingFeedback) {
      fill(100, 100, 255);
      rect(width / 2 - 60, 500, 120, 40, 8);
      fill(255);
      textSize(18);
      text("Next", width / 2, 520);
    }
  } 
  
  function drawResults() {
    fill(0);
    textSize(24);
    text(`Quiz Completed!`, width / 2, height / 2 - 40);
    text(`Your score: ${score} / ${quizData.length}`, width / 2, height / 2);
  }
  
  function mousePressed() {
    if (showResult) return;
  
    let q = quizData[currentQuestion];
  
    // If showing feedback, check for "Next" button
    if (showingFeedback) {
      if (mouseX > width / 2 - 60 && mouseX < width / 2 + 60 &&
        mouseY > 500 && mouseY < 540) {
        currentQuestion++;
        showingFeedback = false;
        selectedOption = -1;
        if (currentQuestion >= quizData.length) {
          showResult = true;
        }
      } // this also took a while, I couldn't get the next button to work with a click
      return;
    }
  
    // Check which answer was clicked
    for (let i = 0; i < q.options.length; i++) {
      let y = 100 + i * 50;
      if (mouseX > 150 && mouseX < 450 && mouseY > y && mouseY < y + 40) {
        selectedOption = i;
        if (q.options[i] === q.answer) {
          score++;
        }
        showingFeedback = true;
        break;
      }
    }
  }
  // thank you for an amazing year adam! :)