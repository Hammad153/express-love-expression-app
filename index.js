import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3001;

const apiKey = "4PIQq0yBmnTvA9ipX1d18rCmfdJ4jD4n";
const loveApiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=love&rating=pg`;
const sadApiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=sad&rating=pg`;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index.ejs");
});

app.post("/no", async (req, res) => {
  try {
    const response = await axios.get(sadApiUrl);
    const sadGif = response.data.data.images.original.url;

    const sadWords = [
      "I'm sad.",
      "Feeling down.",
      "I`m sad please tell me you love me",
      "Tell me you love me now, before i will become sad",
      "I will be sad forever if you don`t tell me you love me",
      "i will consider myself unlucky if you don`t tell me you love me now",
      "please make me happy by telling me you love me, i`m so sad",
      "I'm feeling really low right now. Can you please tell me you love me?",
      "It hurts so much... I just need to hear that you love me.",
      "I don’t want to feel this way forever... please tell me you love me.",
      "I'm scared of being alone with these feelings... tell me you love me so I can feel better.",
      "If you don’t tell me you love me now, I’ll be lost in this sadness.",
      "Please say you love me, or I’ll start to believe I’m not enough.",
      "I need you to say it... I’m feeling so empty right now.",
      "I’m fighting this sadness, but all I need is to hear that you love me.",
      "Can you make me feel better? Please, just tell me you love me.",
      "I’m feeling so alone right now, and your words could make it go away.",
      "I’ll be stuck in this sadness forever if you don’t say it, please... tell me you love me.",
      "I feel like I’m falling apart, and the only thing that can fix me is hearing you say you love me.",
      "I’m not asking for much, just for you to remind me that you love me.",
      "I’m on the edge of sadness... please don’t let me fall. Tell me you love me.",
      "I know I might seem dramatic, but this sadness feels endless without you telling me you love me.",
      "My heart feels heavy, and all I need is your love to lift me.",
      "I feel like I’m fading away... please tell me you love me before I disappear.",
      "I need your love right now, more than anything. Can you tell me?",
      "Please, I can’t bear this sadness anymore. Tell me you love me and make it go away.",
      "I need to hear your love, or I’ll keep feeling lost and alone.",
    ];

    const thinkingAgainWords = [
      "do rethink and tell me that you love me",
      "Please reconsider and say you love me, it would mean everything right now.",
      "I need to hear that you love me, think about it and say it.",
      "Stop for a second and remind me that I’m loved.",
      "Think carefully and tell me you love me, please.",
      "Just for a moment, remember how much I need to hear those words.",
      "Take a deep breath and say it—tell me that you love me.",
      "Don’t let me doubt; think and tell me you love me.",
      "Pause and tell me that I’m loved, I really need it right now.",
      "Please stop and rethink, I need to hear you say it—tell me you love me.",
      "Before we go any further, remind me that you love me.",
      "I need to hear it again—take a moment and say that you love me.",
      "Please, reconsider and tell me that you love me, I’m feeling uncertain.",
      "Can you stop for a second and say you love me, just to make things better?",
      "Pause and remind me how much I mean to you by saying you love me.",
      "Think about it and tell me you love me, I’m waiting.",
      "Take a minute to think and tell me that you love me.",
      "Just pause for a moment and remind me of your love.",
      "Please, I need to hear you say it again. Do rethink and tell me you love me.",
      "Think for a second and tell me I’m loved. It would make all the difference.",
      "I need your words right now. Please think and say you love me.",
      "Pause, and from the bottom of your heart, tell me that you love me.",
      "Think about it and tell me that you still love me, it’s all I need.",
      "Can you remind me once more? Just think and tell me you love me.",
      "I need your reassurance—think it over and tell me you love me, please.",
    ];

    const randomSadWord = sadWords[Math.floor(Math.random() * sadWords.length)];
    const randomThinkingAgainWords =
      thinkingAgainWords[Math.floor(Math.random() * thinkingAgainWords.length)];

    res.render("index.ejs", {
      sadGif,
      sadWord: randomSadWord,
      thinkingAgain: randomThinkingAgainWords,
    });
  } catch (error) {
    console.error("Error fetching GIF:", error);
    res.status(500).send("Error fetching GIF: " + error.message);
  }
});

app.post("/yes", async (req, res) => {
  try {
    const response = await axios.get(loveApiUrl);
    const loveGif = response.data.data.images.original.url;

    const loveWords = [
      "I love you!",
      "Feeling the love!",
      "I`m happy someone like you love me fr, YeYeYe",
      "Now that you tell me that you love me, i`ve became so very happy",
      "i will be happy forever, now that you tell me that you love me",
      "i see myself lucky telling me that you love me",
      "Thanks for making me happy with your sweet love words",
      "I adore everything about you.",
      "My devotion to you knows no bounds.",
      "Being with you fills me with euphoria.",
      "You are my beloved, my one and only.",
      "Your love lights up my world, you're my radiance.",
      "You make my life feel magical.",
      "Every moment with you is pure enchantment.",
      "I’m passionate about everything we share.",
      "The connection we share is so deep, I cherish our intimacy.",
      "When you whisper my name, it feels like the sweetest melody.",
      "With you, I find my serenity.",
      "You are my ultimate bliss.",
      "You are my most treasured possession.",
      "You are absolutely stunning, inside and out.",
      "You’re the dream I never want to wake up from.",
      "You bring so much joy into my life.",
      "You are my comfort, my safe place.",
      "I feel so cherished when I'm with you.",
      "I adore you more every day.",
      "I’m completely infatuated with you.",
      "You’re irreplaceable, there’s no one else like you.",
      "You are my everything, my reason for everything.",
      "My love for you is timeless.",
      "You have this magnetic pull, I’m drawn to you always.",
      "My love for you is unconditional.",
      "You are absolutely gorgeous, in every way.",
      "Meeting you was pure serendipity.",
      "You're the most enchanting person I’ve ever met.",
      "You’re so unique, there’s no one else like you.",
      "With you, I feel complete.",
    ];

    const randomLoveWord =
      loveWords[Math.floor(Math.random() * loveWords.length)];
    res.render("index.ejs", {
      loveGif,
      loveWord: randomLoveWord,
    });
  } catch (error) {
    console.error("Error fetching GIF:", error);
    res.status(500).send("Error fetching GIF: " + error.message);
  }
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
