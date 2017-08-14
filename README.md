<div align="center">
# BetABoat

### A betting system used during the 24/7 deep learning stream of @SerpentAI's Game Agent Development Kit

</div>


## Approach
Before a predicted AI run takes place, the betting system will activate and allow viewers to bet on various aspects of the upcoming run. Once the AI run has started, the system will wait until it is done and gather all data from that run. It will then go through the betting predictions and choose the winner(s) of the round. Points will be distributed among the winner(s) and saved in a leaderboard. At the end of the deep learning week, a winner will be announced.

---

## Concepts
- **Framework** NodeJS
- **Game Socket** AutobahnJS
- **Data Storage** MongoDB/mongoose

---

## F.A.Q.
**What predictions can be made?**
There are countless predictions that viewers can make. It all depends on what data the game gives us. For now, predictions like `total score` and `# of matches` are likely to be predicted with the game *I Must Build A Boat*. Full list of predictions will be released in the future.

**How is the winner for an AI run chosen?**
Before an AI run viewers can make various predictions. For each type of prediction the winner is chosen by proximity to the outcome. There can be more than one winner per prediction per round.

**How are points calculated?**
The point system will be based on various factors. Amount of betters, amount of winners, proximity of prediction to outcome, type of prediction are some of the many factors that are taken into account.

**How can I bet?**
Betting will be done through the Twitch chat of [SerpentAI](https://twitch.tv/serpent_ai) and follow the syntax of `!bet <type> <prediction>`. For example, to predict the total score of the AI run `!bet totalscore 648`.
