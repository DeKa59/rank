'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const membercount = msg => {
  const richEmbed = new _discord2.default.RichEmbed();
  msg.channel.send({
    embed: richEmbed.setColor('#ffffff').setDescription(`There are ${msg.member.guild.memberCount} members in this guild.`)
  });
};

exports.default = membercount;