# LIRI Bot

LIRI Bot is a SIRI competitor, allowing users to input commands into their terminal and receive valuable results!

## Getting Started

In order to use this app you must create a Spotify Developer account in order to access your personal Client ID and Spotify User Key. Store these in your own '.env' file so that others can't use your proprietary keys. 

Navigate to your app and simply enter one of the following commands into the command line of your terminal to get started:
1. To find out when your favourite artist is in town, type in: `concert-this <artist/band name here>`
2. To find your favourite song on Spotify, type in: `spotify-this-song '<song name here>'`
3. To find out more information about your favourite movie, type in: `movie-this '<movie name here>'`

### Prerequisites

Make sure you install the following dependencies and create a Spotify Developer account.
*[node-spotify-api](https://www.npmjs.com/package/node-spotify-api)

<details> 
    <summary>How to get Spotify Keys</summary>

   <p>The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   1. Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   2. Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   3. Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   4. Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).</p>
</details>

* [Axios](https://www.npmjs.com/package/axios)

* [Moment](https://www.npmjs.com/package/moment)

* [DotEnv](https://www.npmjs.com/package/dotenv)

### Examples

![Example of all 3 commands](./images/examples.png)