'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const invites = (msg, numberUses, numberLeft, nextRole) => {
  const richEmbed = new _discord2.default.RichEmbed();
  msg.channel.send({
    embed: richEmbed.setColor('#ffffff').setDescription(`**Stats for ${msg.author}**

:ballot_box_with_check: Nombres d'invitations: ${numberUses}
:trophy: Rank Actuel: ${msg.member.highestRole}
:chart_with_upwards_trend: Invitations Restantes: ${numberLeft}
:level_slider: Rank Suivant: ${nextRole}
N'oublie pas de créer une invitation permanente.`)
  });
};

exports.default = invites;