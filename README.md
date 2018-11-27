# Front End test - Itunes API

## Description 

Front end exercise where we need to connect to the iTunes API store and display a search bar and enter the terms (whether artists, songs, albums, genres ...). The search results should be listed on the same page, showing the song title and artist, and more in detail, the album title, release date, cover thumbnail, song length, genre and price. It should offer the ability to sort the list over these last three fields. 

The displayed list of results should lead to a detail description page where more information regarding the result should be displayed in a similar design of current music players and contain a button that lets us share what we are listening in social media.

## User Stories

- **404** As a user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
- **Search bar** As a user I want to use the search bar so that I can enter a term and find my favorite artists, songs, albums and genres.
- **List Result** As a user I want to see the result of my search so that I can see the song title and artist, and more in detail, the album title, release date, cover thumbnail, song length, genre and price. And I should be able to have the ability to sort the list over these last three fields.
- **Music Player** As a user I would like that each result navigates to a modern music player so that I can listen to the song, play and pause, and skip to the previous and next song of the list of search results.
- **Going Back** As a user while in the Music player display, I would like to go back to my previous search results so that I can keep on listening to my favorite tunes.
- **Social Sharing** As a user I would like to have a share button so that I can share what I'm listening to in my social networks. 


# Client

## Routes

- / - Homepage
- /tunes/query? - Search Result List
- /tunes/:trackId - Music Player with selected track

## Pages

- Home Page
- Music Player (with selected track)

## Components 

Home Page
- Search Bar
- List
- Card

Music Player
- Music Player
- Social Sharing

## Services (API)

Itunes API Service
 - itunes.getQuery

## TDD

enzyme
chai
mocha