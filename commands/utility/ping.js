const { SlashCommandBuilder } = require('discord.js');

/**
 * 2 parts
 *  1. the slash command -> SlashCommandBuilder.setName('').setDescription('')
 *  2. the response -> execute(interaction) 
 */ 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

