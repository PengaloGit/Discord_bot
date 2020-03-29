# Pengubot
[![GitHub license](https://img.shields.io/github/license/PengaloGit/Discord_bot)](https://github.com/PengaloGit/Discord_bot/blob/master/LICENSE)

A [discord](https://discordapp.com/) bot using nodeJs and [Discord.js](https://discord.js.org/#/) library and [nodejs](https://nodejs.org/en/).


## Set up

Clone the repo to your local machine.

Open the config.json in your favorite code editor and fill the values

```json
{
    "prefix": "YOUR-PREFIXE",
    "token": "YOUR-TOKEN",
    "cat_api_key" : "X-KEY-API",
    "SERVER_NAME" : "YOUR-SERVER-NAME",
    "BOT_NAME" : "YOUR-BOT-NAME"
}
```
To get the token go to [discord developper](https://discordapp.com/developers/applications), to get the cat api key go to [thecatapi.com](https://thecatapi.com/)

### Using node locally

Install nodejs on your machine.

Then run
```
npm install
node app.js
```

### Using Docker image
Run
```
docker build -t <username>/<botname> .
```
Check if the image was built successfully
```
docker images 
```
Now run the docker image

```
docker run <username>/<botname>
```

Ps :*The image size is 933 mb after extraction and around 300 mb before* 


## Acknowledgment
* [Dev Daksan](https://github.com/R3l3ntl3ss) free memes api [repo](https://github.com/R3l3ntl3ss/Meme_Api)
* [David Katz](https://github.com/15Dkatz) free jokes api [repo](https://github.com/15Dkatz/official_joke_api)
* [dog.ceo](https://dog.ceo/dog-api/) free dogs images


## Authors

* **Loukmane MAADA** - [PengaloGit](https://github.com/PengaloGit)

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details


