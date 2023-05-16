# HelloAsso Donation Goal
A simple donation goal widget to embed in your livestreams.

It polls and scraps the amount of an HelloAsso crowdfund page every minute.

## Installation

`npm install`

## Running

This package uses natives ES Modules, use a recent node version.

`node server.mjs`

## OBS Setup

Add a **Browser Source** with the following config:

```
URL: <URL to the server>
Width: 1000
Height: 50
```
