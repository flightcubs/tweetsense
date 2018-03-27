# tweetsense

A Node.js server and API for automatic sentiment analysis for topics at Twitter.

#### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech/framework](#tech)
- [Limitations](#limitations)
- [Licence](#licence)

## Introduction <a name="introduction"></a>
Tweetsense is a personal project for putting Node.js to work. The goal was to reach a functional prototype, and I'm aware that there are many improvements and refactoring possibilities in the codebase (see [limitations](#limitations))


## Features <a name="features"></a>

The API lets the user create "Topics" that they are interested in following the trends on Twitter. The server regularly searches twitter for these topics via the Twitter API. The tweets are analysed with an NLP sentiment module, and stored in the database. The tweets and sentiment analysis is then available via the API. 

#### Features
- API: Add, list, and manage "Topics"
- Topics are regularly searched for on Twitter via their API
- Each Tweet is analysed with an NLP sentiment
- API: List tweets and their sentiment for a topic


## Tech/framework used <a name="tech"></a>
Built with:
- Node.js
- Express.js
- Mongoose / MongoDB
- Sentiment

## Limitations and known shortcomings <a name="limitations"></a>

#### Technical limitations
Since it's at a prototype/alpha stage:
- The code needs refactoring
- Not production ready
- No tests written yet

#### Functional limitations
- Not search for nor write existing tweets to the database
- Expand the API to retrieve a sum of sentiments for a topic
- Expand the API to handle searches within dates for most API calls
- Run "tweetsense" on a separate server as the API
- No user management. Each user could have their own topics that they follow.

## Motivation
This project was made for showcasing an understanding of Node, some of it's frameworks, and APIs.

## Licence <a name="licence"></a>
The code in this project is licensed under MIT license.
