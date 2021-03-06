<div align="center">

# PredictABoat

### A NodeJS Twitch bot used during the 24/7 deep learning stream of @SerpentAI's Game Agent Development Kit

</div>


## Approach
Before a predicted AI run takes place, the predicting system will activate and allow viewers to predict various aspects of the upcoming AI run until it starts. Once the AI run has started, the system will wait until the run has finished and gather all data using events from a [Crossbar.io](http://crossbar.io) router connected to the game. It will then go through predictions and choose the winner(s) of the run. Points will be distributed among the winner(s) and saved in a database. At the end of the deep learning week, winners will be announced and receive a prize.

---

## Concepts
- **Framework** NodeJS
- **Game Socket** AutobahnJS/Crossbar.io
- **Data Storage** MongoDB/mongoose

---

## F.A.Q.
**What predictions can be made?**
There are countless predictions that viewers can make. It all depends on what data the game gives us. For now, predictions like `total score` and `# of matches` are likely to be predicted with the game *I Must Build A Boat*. Full list of predictions will be released prior to the start of the 24/7 stream.

**How is the winner for an AI run chosen?**
Before an AI run, viewers can make various predictions. For each type of prediction a winner is chosen by proximity to the outcome. In certain situations, there will be more than one winner per prediction.

**How are points calculated?**
The point system will be based on various factors. Amount of betters, amount of winners, proximity of prediction to outcome, type of prediction are some of the many factors that are taken into account.

**How can I bet?**
Betting will be done through the Twitch chat of [SerpentAI](https://twitch.tv/serpent_ai) and follow the syntax of `!bet <type> <prediction>`. For example, to predict the total distance of the AI run `!bet distance 648`. A full list of commands and categories will be released prior to the start of the 24/7 stream.

---

## Want to Contribute?
Create a pull request specifying the additions of your contribution. You may create issues and/or assign yourself to issues if you'd like. If you have suggestions or feedback, open an issue.
