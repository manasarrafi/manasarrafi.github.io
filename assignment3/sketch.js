let input, button, dropdown, output;
let lyrics = {
  "What Makes You Beautiful": [
    "You're insecure, don't know what for",
    "Everyone else in the room can see it",
    "You don't know you're beautiful!"
  ],
  "Up All Night":[
    "It feels like we've been living in fast forward",
    "I wanna stay up all night, and jump around until we see the sun",
    "Katy Perry's on replay, she's on replay"
  ],
  "Live While We're Young":[
    "The music up,the window's down",
    "Let's go crazy, crazy, crazy 'til we see the sun",
    "Tonight let's get some, and live while we're young"
  ],
  "Story of My Life": [
    "The story of my life, I take her home",
    "I drive all night to keep her warm",
    "Is frozen (the story of, the story of)"
  ],
  "C'mon C'mon":[
    "Yeah, I've been watching you all night",
    "Yeah, the music is so loud, I wanna be yours now",
    "So c'mon, c'mon, and dance with me, baby"
  ],
  "Right Now":[
    "Lights go down, and the night is calling to me",
    "Right now, I wish you were here with me",
    "You know I can't fight the feeling, and every night I feel it"
  ],
  "Night Changes": [
    "Going out tonight, changes into something red",
    "Everything that you've ever dreamed of",
    "Even when the night changes, it will never change me and you"
  ],
  "Fireproof":[
    "'Cause nobody knows you, baby, the way I do",
    "It's been so long, it's been so long, maybe we're fireproof",
    "Yeah, I roll, and I roll, t'il I'm out of luck"
  ],
  "Drag Me Down":[
    "If I didn't have you, there would be nothing left",
    "With your love, nobody can drag me down",
    "Baby, you're my only reason"
  ],
  "What a Feeling":[
    "What a feeling to be right here beside you now, holdingyou in my arms",
    "I'm watching you like this imagining you're mine",
    "I wish I could be there now"
  ]

};

function setup() {
  noCanvas();
  

  dropdown = createSelect();
  dropdown.position(20, 100);
  for (let song in lyrics) {
    dropdown.option(song);
  }
  
  button = createButton("Generate Lyric");
  button.position(20, 130);
  button.mousePressed(generateLyric);
  
  output = createP("Your lyric will appear here.");
  output.position(20, 140);
}

function generateLyric() {
  let songChoice = dropdown.value();
  let lyricArray = lyrics[songChoice];
  let randomLyric = random(lyricArray);
  output.html(`"${randomLyric}"`);
}

function keyPressed() {
  if (keyCode === ENTER) {
    generateLyric();
  }
}
