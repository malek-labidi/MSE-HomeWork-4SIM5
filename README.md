# MSE-HomeWork-4SIM5
This repository contains my homework submissions for the Mobile Software Engineering (MSE) module.

## Homework Assignments
List your homework assignments here with brief descriptions and links to relevant files or folders.

1. **Homework 1**: [https://github.com/malek-labidi/MSE-HomeWork-4SIM5/tree/master/exercice6-nodejs](homework1/)
   - Description: This Node.js application is designed to interact with the "SteamGames.json" file as a data source. It provides the following functionalities:

       1. Retrieve All Games
           Endpoint: /game
           Description: Fetches the list of all games from the JSON file and responds with the data as a JSON object. The response is returned with a status code of 200.
          
       2.Retrieve Games by Year
          Endpoint: /game/select/:year
          Description: Retrieves a list of games with a release year greater than the specified year parameter. The filtered games are returned as a JSON object with a status code of 200.
     
       3. Retrieve Steam URL of a Game
          Endpoint: /game/:name
          Description: Allows users to obtain the Steam URL of a game by providing its name as a parameter in the URI. The URL is returned as a JSON response with a status code of 200.
      The application operates on a data entity named "Game," which includes attributes such as name, year, and the Steam URL.
