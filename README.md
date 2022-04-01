# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Abdullah Saleh**

Time spent: **22** hours spent in total

Link to project: https://glitch.com/edit/#!/tasteful-aware-sheet?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:
* [x] Counter for how many guesses are left to complete level
* [x] When wrong tile is clicked, tile flashes red twice and game over sound is played
* [x] Added highscore counter
* [x] "Wait" and "Go" instructions 
* [x] Title and instructions fade out when game starts 
* [x] "Game Over" and "You Win" modal popups 
* [x] Changed colors, buttons grow when game starts

## Video Walkthrough (GIF)

**Full Game Playthrough / You Win Screen**

![memory_game2](https://user-images.githubusercontent.com/88620119/160011422-63b6a024-a047-4dd8-8ff2-5a85892d0532.gif)

**Other Features**

![memory_game1](https://user-images.githubusercontent.com/88620119/160011460-4adb8768-83e9-4aff-930f-cacf0c326f9a.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

 I used the website W3schools.com to read up on JavaScript functions and CSS properties. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

 I’ve had experience making simple websites with HTML and CSS in the past, but I haven’t had much experience adding functionality with JavaScript. I viewed this assignment as a good opportunity to challenge myself to implement practical functionality and animations into my website. After creating the basic form of the game, I asked myself “What changes can be made to make the game more appealing and playable for the user?” The ideas for a few changes came to me right off the bat - randomize the pattern for each level so the game has replayability, change the game over and you win alerts to be modal popups, and have a counter for the number of tiles left in each level and for the high score. Soon enough I ended up creating a giant to-do list of features to implement. As I created some of these features, I felt as though I was just piling up a bunch of random ideas without really making the game more enjoyable. I was having a hard time discerning which changes were necessary and which weren’t. I then had the idea to watch my brother and cousin play the game and listen to what they thought about it. My brother kept losing levels 7 and 8 and complained afterward that he clicked the right tile (even though he didn’t). My cousin would start clicking the tiles before the clue sequence ended, which interfered with the clue sequence and confused him. From observing users other than myself, I had recognized two areas of my game that could be improved. To make it more apparent if the wrong tile was clicked, I added a feature where it would flash red twice and make an incorrect buzzer sound. To ensure the user receives the full clue sequence before guessing, I added “wait” and “go” prompts. When implementing my features I had some difficulty making sure that animations would occur at the right time. I was able to fix this by learning how to use setTimeout(), clearTimeout() and timeoutIDs. I learned that a different perspective can go a long way in discovering new ideas. 
 
3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

  I’ve noticed that whenever I build an application I spend an unreasonable amount of time trying out different color palettes and formatting things in all sorts of ways. How do web developers make a firm decision on their design choices? Are there tools that make this process easier? I’ve learned that web development can be complex with many things to learn. While doing some research on creating simple animations, I stumbled upon dozens and dozens of different properties. I wonder if there’s an optimal method or structure to learning all these new things or if the best way to learn is by trying everything out one by one. Do professional web developers use such a wide range of properties and functions or do they stick to a smaller group of more versatile ones? The programming world is always growing and evolving. How do web developers keep up with new changes? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

  If I had a few more hours I would definitely go back and optimize the functions that called my animations. I was learning how to implement these animations so some of them were done by adding and removing classes to HTML elements and others were done by directly changing the class properties with JavaScript. I think the latter method was more efficient so I would standardize that throughout all my animation functions to make my code more understandable. For the sake of demo purposes, this game was only 8 levels long. Ideally, I’d want to make the game endless and track the high score for each user. Creating a multiuser backend database might be difficult to do in a short amount of time. An alternative solution to that might be to use cookies to track the high score on a particular device. Something I’d also want to add is optimization for mobile devices. I did try running the game on my phone, but the formatting is out of place and the audio doesn’t play properly. 

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.youtube.com/watch?v=7WZyVJn9EHQ)


## License

    Copyright [Abdullah Saleh]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
