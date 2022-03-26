# Light and Sound Memory Game by Abdullah Saleh

Full Game Playthrough / You Win Screen 

![memory_game2](https://user-images.githubusercontent.com/88620119/160011422-63b6a024-a047-4dd8-8ff2-5a85892d0532.gif)



Other Features

![memory_game1](https://user-images.githubusercontent.com/88620119/160011460-4adb8768-83e9-4aff-930f-cacf0c326f9a.gif)


Features added: 
- randomly generated pattern, game is only 8 levels 
- Counter for how many guesses are left to complete level
- When wrong tile is clicked, tile flashes red twice and game over sound is played
- Added highscore counter
- "wait" and "go" instructions 
- title and instructions fade out when game starts 
- "game over" and "you win" modal popups 
- changed colors, buttons grow when game starts

## Reflections about the light and sound memory game

<strong>1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.</strong>
  
  I used the website W3schools.com to read up on JavaScript functions and CSS properties. 

**2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it?**
	
  I’ve had experience making simple websites with HTML and CSS in the past, but I haven’t had much experience adding functionality with JavaScript. I viewed this assignment as a good opportunity to challenge myself to implement practical functionality and animations into my website. After creating the basic form of the game, I asked myself “What changes can be made to make the game more appealing and playable for the user?” The ideas for a few changes came to me right off the bat - randomize the pattern for each level so the game has replayability, change the game over and you win alerts to be modal popups, and have a counter for the number of tiles left in each level and for the high score. Soon enough I ended up creating a giant to-do list of features to implement. As I created some of these features, I felt as though I was just piling up a bunch of random ideas without really making the game more enjoyable. I was having a hard time discerning which changes were necessary and which weren’t. I then had the idea to watch my brother and cousin play the game and listen to what they thought about it. My brother kept losing levels 7 and 8 and complained afterward that he clicked the right tile (even though he didn’t). My cousin would start clicking the tiles before the clue sequence ended, which interfered with the clue sequence and confused him. From observing users other than myself, I had recognized two areas of my game that could be improved. To make it more apparent if the wrong tile was clicked, I added a feature where it would flash red twice and make an incorrect buzzer sound. To ensure the user receives the full clue sequence before guessing, I added “wait” and “go” prompts. When implementing my features I had some difficulty making sure that animations would occur at the right time. I was able to fix this by learning how to use setTimeout(), clearTimeout() and timeoutIDs. I learned that a different perspective can go a long way in discovering new ideas. 
 
**3. What questions about web development do you have after completing your submission?**
  
  I’ve noticed that whenever I build an application I spend an unreasonable amount of time trying out different color palettes and formatting things in all sorts of ways. How do web developers make a firm decision on their design choices? Are there tools that make this process easier? I’ve learned that web development can be complex with many things to learn. While doing some research on creating simple animations, I stumbled upon dozens and dozens of different properties. I wonder if there’s an optimal method or structure to learning all these new things or if the best way to learn is by trying everything out one by one. Do professional web developers use such a wide range of properties and functions or do they stick to a smaller group of more versatile ones? The programming world is always growing and evolving. How do web developers keep up with new changes? 
  
**4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc).**

  If I had a few more hours I would definitely go back and optimize the functions that called my animations. I was learning how to implement these animations so some of them were done by adding and removing classes to HTML elements and others were done by directly changing the class properties with JavaScript. I think the latter method was more efficient so I would standardize that throughout all my animation functions to make my code more understandable. For the sake of demo purposes, this game was only 8 levels long. Ideally, I’d want to make the game endless and track the high score for each user. Creating a multiuser backend database might be difficult to do in a short amount of time. An alternative solution to that might be to use cookies to track the high score on a particular device. Something I’d also want to add is optimization for mobile devices. I did try running the game on my phone, but the formatting is out of place and the audio doesn’t play properly. 
