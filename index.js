'use strict';

const discordIRC = require('discord-irc').default;
const config = require('./config.json');

config.discordToken = process.env.DISCORD_TOKEN;

discordIRC(config);
