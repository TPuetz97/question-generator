const questions = [
  "How long do you think you'd survive in a zombie apocalypse?",
  "What is your favorite smell?",
  "Have you ever gone a day without wearing underwear?",
  "What do you think your last words will be?",
  "What is it that you keep wanting to smell despite the fact that it doesn't smell particularly good?",
  "What secret conspiracy would you like to actually start letting other people know?",
  "If you can still remember, what are your funniest childhood memories?",
  "What is the best Wi-Fi name you have seen in your entire life?",
  "If you were a dog, which breed would you want to be?",
  "How do you hang toilet paper: over or under?",
  "Have you ever gone to a corner store and stolen a candy bar?",
  "How many beers do you think I'd be able to consume?",
  "What would you do if you won a million dollars?",
  "What is your Wi-Fi password?",
  "Why do round pizzas come in square boxes?",
  "Where was the most embarrassing place you have ever farted?",
  "Has someone caught you dancing in front of the mirror?",
  "If I fail a driver's test, which part will it be?",
  "Have you ever tried talking to your dog?",
  "What would you do if you could live forever?",
  "What would you call a male ladybug?",
  "Do you like pineapple on your pizza?",
  "Have you ever been caught cheating on a test?",
  "In your opinion, how long can my hair grow?",
  "Can you show me the hidden apps on your phone?",
  "Who was your first-ever crush?",
  "Do you sometimes hear certain voices in your head?",
  "What are three items you might purchase at the grocery store to get strange looks from the cashier?",
  "What's the sexiest name you’ve ever heard?",
  "Do you sleep with the lights on or off?",
  "What is the silliest thing you've ever seen a stranger do in public?",
  "If you could have a superpower, what would it be?",
  "What do you typically do when you're bored?",
  "What's one thing your dogs could say that would completely ruin your image if they could talk?",
  "What's the most hilarious fact you know?",
  "Do you have an imaginary friend?",
  "Can you eat ice cream using your bare hands?",
  "Have you ever made a prank call to someone you don't know?",
  "Have you ever fallen off your bike in front of a huge crowd?",
  "If you were to be banned from your local library, what would be the reason?",
  "What are some crazy adventures you want to try in your life?",
  "Have you ever fallen asleep during class?",
  "If you could ask me a funny question, what do you think would it be?",
  "Are you scared of horror movies?",
  "If you could remove one color in the whole world, what would it be and why?",
  "What do you think is the worst thing that a person can put on their bio for a dating app?",
  "Do people drink or eat soup?",
  "Have you ever been arrested?",
  "What's the most embarrassing moment in your entire childhood?",
  "What would you do if you only had 24 hours to live?",
  "Who is your all-time celebrity crush?",
  "What is the wildest fantasy you've ever had?",
  "What do you think your last meal would be if you were on death row?",
  "Which species would be the rudest if all animals could talk?",
  "Which person do you know that totally reminds you of a character in a TV show or movie?",
  "Have you ever forgotten your wallet when you were scheduled to pay for a meal?",
  "Do you still sleep with a stuffed toy?",
  "What's the craziest thing you've ever done after getting really drunk?",
  "What's your preference: to be buried or cremated?",
  "Do mermaids have live babies or lay eggs?",
  "What's the most creative insult you can think of?",
  "Have you ever consumed so much alcohol that you passed out?",
  "Do you think aliens really exist?",
  "Have you ever been in a secret relationship?",
  "Who is the first person on your hit list?",
  "Do you think the sea is salty because the shore never waves back at it?",
  "Have you ever succeeded in making one of your parents cry?",
  "Can you tell me the most hilarious joke you've ever heard?",
  "Are you afraid of staying home alone?",
  "Where would you like to time travel: back to the past or to the future?",
  'What does the word "ok" mean for you?',
  "Which of your body parts do you wish to change?",
  "Have you ever driven someone else's car without first getting permission?",
  "What has been the funniest or strangest thing that has happened to you on a first date?",
  "If you could choose any animated character, who would it be?",
  "What color would you like if you had to eat a crayon straight from the box?",
  "Do you believe it is possible to inflate a balloon when underwater?",
  "What has been the strangest thing a visitor has done at your home?",
  "Have you ever been in a car crash where you were at fault?",
  "What musical instrument has the most annoying sound to you?",
  "Would you like to be married or be in a live-in relationship in the future?",
  "What's the biggest lie you have ever told?",
  "What's the reason for saying 'after dark' when it's actually really after light?",
  "What is the funniest thing you've ever seen in another person's house?",
  "Have you ever secretly taken money from your parents' pocket or purse?",
  "If you had to lose your hands or your feet, which would you choose?",
  "What are the things you would like to change if you became God for a day?",
  "If you could put one condiment inside your belly button, what would it be and why?",
  "Who actually tests the specific dog food when they say that it has a new and improved flavor?",
  "What would be the outcome if the government decided to make everything illegal?",
  "Are you scared about flying on a plane?",
  "If life is a video game, what cheat code would you want to use most?",
  "Have you created a rumor about yourself just to be the talk of town?",
  "What music would you like to be played at your funeral?",
  "Where did all the money go if the whole world were in debt?",
  "Do you have a habit of going for a walk while sleeping?",
  "What's the first thing you wash in the shower?",
  "What do you call a girl named after her mother if a boy named after his father is called Junior?",
  "What is the worst possible name you might give your child?",
  "Have you experienced going skinny-dipping before?",
  "Do you know how to fold a fitted sheet?",
  "What is your deepest, darkest secret that no one else knows about?",
  "Between Superman and Goku, who do you think would win?",
  "Why do we say people work like dogs if they work all day, while dogs do nothing but lie around?",
  "What are some of your clients' or colleagues' nicknames?",
  "Have you accidentally glued your hands together when doing a craft project?",
  "Which living individual, outside of your family, do you value the most?",
  "Have you ever tried to punch me in the face because of what I've done?",
  "What do you want to be in your next birth, and why do you want to be that?",
  "When was the last time you screwed anything up and no one noticed?",
  "What's the worst tagline you can think of for a wart removal cream company?",
  "What will people be nostalgic for in 500 years?",
  "Have you ever been called out at school for wearing something embarrassing?",
  "As a kid, what was your favorite color?",
  "In terms of appearance, which athlete do you believe most closely resembles you?",
  "In all honesty, what are some of your guilty pleasures that you are willing to admit?",
  "What would you do if you could replace all of the grass on the planet with something else, and why?",
  "Who do you wish you could torture for the rest of your life?",
  "Which aspects of mine do you admire and which do you despise?",
  "Would you rather be forced to wear shoes every second of your life or never be able to wear shoes again?",
  "Who would you appoint as the president of the Internet, and why?",
  "Have you ever fired a gun?",
  "Have you ever offered to help anyone else with their homework in return for something specific?",
  "If we were to have a boxing match, who do you think would win?",
  "What's the weirdest thing you've given someone as a gift?",
  "What would you leave me in your last will and testament right now, if you were to die?",
  "What do you think the first person to milk a cow was actually trying to do?",
  "How many ants would it take to lift an elephant?",
  "Have you ever approached a stranger and said something that later turned out to be your best friend?",
  "Can you tell me one memory that you've never shared with me?",
  "Which movie would you want it to be if your life was a movie?",
  "What is the soundtrack of your life?",
  "If Donkey Kong is a monkey, not a donkey, why was he given that name?",
  "How would you show that you were from the future if you were transported 200 years into the past with no clothing or anything else?",
  "How do you sleep, with your eyes open or closed?",
  "Have you ever failed to prepare for an exam before the day you were supposed to take it?",
  "Who would help who if we were to help each other cheat on a test?",
  "Do you ever cry while watching an emotional film?",
  "Have you ever come into contact with human remains?",
  'Why wasn\'t the word "gullible" listed in the dictionary?',
  "What is the funniest name you have ever heard in real life?",
  "What are the unwritten laws at our workplace?",
  "What's the most amusing thing you've seen recently?",
  "What is the one thing about yourself that you would like to change?",
  "Can I ask you one question?",
  "Where does prune juice come from if prunes are dried plums?",
  "What would your friends and family think if you were arrested without explanation?",
  "Have you ever had a teacher call you in class when you had no idea what was going on?",
  "What kind of food would you never offer a tiger?",
  "Do you like dancing when no one is looking?",
  "What's your least favorite planet?",
  'Why do we refer to an alarm clock as going "off" when it actually turns on?',
  " What movie's plot changes entirely only by changing one letter in the title?",
  "Have your parents ever found you trying to leave the house without permission?",
  "What do we do when we reach retirement age?",
  "If you had to choose one fruit, what would you like to be?",
  "What is the most useless skill you possess?",
  "What's your favorite meme?",
  "Do you think penguins have knees?",
  "What is it that everybody seems to be doing that makes them look stupid?",
  "Have you ever cried yourself to sleep because of something that happened that day?",
  "Which celebrity friendship do you want to embody in our friendship?",
  "Do you have a habit of saying absurd things while you're sleeping?",
  "How would you pull off a perfect crime?",
  "Before there were dictionaries, where did dictionary makers search for the definitions of words?",
  "What's the best inside joke you've ever heard?",
  "How many zombies do you want to kill when the time comes?",
  "Have you ever lied about your age in order to gain access to a bar or nightclub?",
  "What color would you pick, if I let you dye my hair any color?",
  "Can you describe our friendship in three words?",
  "What sport do you think is the most boring to watch?",
  "If roses are red, why are violets blue?",
  "What is the strangest Amazon purchase you've made (or nearly made)?",
  "What's the craziest characteristic you have?",
  "Which of the meals is the most important?",
  "What would you do with the money if you won a lottery?",
  "What do you want to be remembered for?",
  "What was the last book or series you wished you could live in?",
  "What excuse have you recently used to avoid doing something?",
  "Which app on your phone do you use the most?",
  "What's your secret talent?",
  "As a child, what was your favorite game to play?",
  "What do you believe is the most horrible way to die?",
  "How would you sum up the internet in two sentences?",
  "What's one thing you wish we knew five years ago?",
  "Where would you go and what would you do if a millionaire were to fund your all-expenses-paid one-week trip to anywhere?",
  "What was the worst date you've ever experienced?",
  "Have you ever dreamt about one of your friends?",
  "What is your favorite GIF?",
  "Would you rather be smart or attractive?",
  "What kind of food would you eat if you could eat one for the rest of your life?",
  "What would peanut butter be named if it wasn't called peanut butter?",
  "Has someone ever made a comment on how loud you sing in the shower?",
  "In a zombie apocalypse, who will last the longest?",
  "What name will you give your next pet?",
  "Which type of clothing do you no longer want to wear but can't get rid of?",
  "How long has it been since you laughed out loud?",
  "What was your first-ever screen name?",
  "What would you do if you could become invisible for a day?",
  "Do you ever brag about your spontaneous acts of kindness?",
  'What do you think would be the worst "buy one, get one free" sale of all time?',
  "Have you ever dated anyone more than once while knowing it was bad for your mental health?",
  "If you were given the chance to have a controller that has the power to rewind or fast forward, which one would you press?",
  "What's the funniest movie line you've ever heard?",
  "What would you do or say if you had the attention of the whole world for twenty seconds?",
  "If you were a laptop brand, which one would you be and why?",
  "What are the things you would do if your gender changed for a day?",
  "What are the two totally normal things that become really weird if you do them back-to-back?",
  "Have you ever lied to your parents about the thing you accidentally broke?",
  "If you could ask the president one super silly question, what would you like to ask?",
  "What are your favorite ice cream toppings?",
  "Have you ever met your doppelgänger?",
  "What law would you introduce if you had the chance to make one?",
  "What's your best dance move?",
  "Have you experienced peeing in a pool?",
  "What would you do as a career if you could do anything in the world?",
  "What things are okay to do occasionally but definitely not okay to do every day?",
  "Have you slept in until four in the afternoon or later?",
  "Do you like your Easter eggs to be plastic and filled with small candies or to be real, hard-boiled eggs that you can actually peel and eat later?",
  "Who do you see as a hero in this world and why?",
  "If you were to open a store, what are the things you would sell and what would be its name?",
  "How do you react when you find something intriguing?",
  "What's the best brand of alcohol you always look for?",
  "Have you ever pretended to be sick when you were perfectly healthy?",
  "If you could have dinner with any five people from history, who would they be?",
  "What do you think the world would be like if it were filled with male and female copies of you?",
  "Have you ever broken your friend's bone in the past?",
  "What's the best joke you know and tell at parties?",
  "If you could be a dessert, what would you be?",
  "What is the weirdest food combination people eat that you just can't get behind?",
  "What was your childhood nickname?",
  "Have you ever been beaten by your friends for no apparent reason?",
  "If you could become a fart, would you rather be the 'loud and proud' type or the 'silent but deadly' type?",
  "If money and ethics weren't an issue, what scientific experiment would you run if you became a mad scientist?",
  "Have you ever been forced to spend a day with a person you didn't like?",
  "Would you be humiliated or pleased if someone asked you to go to the website you most often visit?",
  "What's your most treasured possession?",
  "What would your stage name be if you were famous?",
  "Do you secretly take stuff out of a hotel room?",
  "When you are done shopping at the grocery store, what do you usually do with your shopping cart?",
  "Have you ever attended a dance by yourself because you couldn't find someone to accompany you?",
  "If you could become any mythical creature for a day, what would it be and why?",
  "What pizza topping would you like if you had to be one?",
  "Who would be next to you on a first-class flight and what would you ask them?",
  "What word would you add to the dictionary, and what would its definition be?",
  "Have you ever laughed out loud and caused something you were drinking to come out of your nose?",
  "Where would you land if you could be a fly on the wall?",
  "What soap do you dislike the most and why?",
  "What's the funniest book you've read recently?",
  "If you were required to evacuate and only had time to grab 10 items, what would you take with you?",
]

let currentQuestion = "";
const askedQuestionIdexes = [];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function findNewQuestion() {
	const idx = getRandomInt(0, questions.length - 1);
  
  currentQuestion = !askedQuestionIdexes.includes(idx) ? questions[idx] : findNewQuestion();
  askedQuestionIdexes.push(idx);
  
  return currentQuestion
}

async function fillQuestionContainerWith(text) {
  const el = document.querySelector("#question-container")
  el.innerText = ""
  let innerText = ""
  let currentSpeed = getRandomInt(10, 50)

  for (let i = 0; i < text.length && currentQuestion === text; i++) {
    innerText = `${innerText}${text[i]}`
    el.innerText = innerText
    await sleepAsync(currentSpeed)

    if (text[i] === " ") {
      currentSpeed = getRandomInt(10, 60)
    }
  }
}

async function emptyQuestionContainer() {
  const el = document.querySelector("#question-container")
  let innerText = el.innerText
  let currentSpeed = getRandomInt(1, 10)

  while (innerText.length > 1) {
    if (innerText[innerText.length - 1] === " ") {
      currentSpeed = getRandomInt(1, 10)
    }

    innerText = innerText.slice(0, -1)
    el.innerText = innerText
    await sleepAsync(currentSpeed)
  }
}

function sleepAsync(millis) {
  return new Promise((resolve, reject) => setTimeout(resolve, millis))
}

async function findNewQuestionAndFillContainer() {
  const question = findNewQuestion()

  const el = document.querySelector("#question-container")

  await emptyQuestionContainer()

  fillQuestionContainerWith(question)
  // el.innerText  = question;
}

fillQuestionContainerWith(findNewQuestion())
