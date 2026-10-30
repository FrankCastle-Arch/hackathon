# Game Night Picker

## The problem

Which game should the host and their friends play for game night?

## Links
- Live: https://app.netlify.com/projects/friendlyfirefriday/
- Repo: https://github.com/FrankCastle-Arch/hackathon

## The plan

The host of a game night has a group of friends coming over. Which game should they play? The Host can select how many people are coming, and every game that can't seat then dims. Clicking a square shows the details, the dice picks a game when nobody can decide. The key explains what each category and complexity level means. 

### Data
Dataset: `game-list`

|__src/
|   |__App.jsx
    |__App.css
    |__BoardGames.css
    |__CategoryInfo.js
    |__CategoryKey.jsx
    |__Footer.jsx
    |__GameBoard.jsx
    |__GameDetails.jsx
    |__Header.jsx
    |__index.css  
    |__main.jsx
    |__useFetchData.js
 ___|__Welcome.jsx
|__public/
    |__game-list.json
    |__favicon.svg
    |__icons.svg
|__node_modules/
|__.gitignore
|__.oxlintrc.json
|__bun.lock
|__index.html
|__package.json
|__README.md
|__vite.config.js


### Sections

Game Board, Category Info, Category Key, Footer, Game Details, Header, Welcome


### User action
To use it, the host picks how many people are coming, and every game that can’t seat that group dims out. Click any square to see its details. If the group can’t decide, roll the dice, and the highlight hops around the board one square at a time to pick a game.


### Team
Accountability partner: Mya Dennis


### Reflection

Not a whole lot changed from my first thoughts about this project. The hardest thing has been getting it to deploys to cloudflare, which it still has not yet. I haven't given up, and am trying different things. Fingers crossed it works!
