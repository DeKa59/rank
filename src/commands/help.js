'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const help = (bot, msg, cmd) => {
  const richEmbed = new _discord2.default.RichEmbed();

  msg.channel.send({
    embed: richEmbed.setColor('#ffffff').setDescription(`${"`" + ">invites" + "`"} - Vérifier ton nombres d'invitations
${"`" + ">top <#>" + "`"} - regardé le top 
${"`" + ">membercount" + "`"} - Membres total du serveur
N'oublie pas de créer une invitation permanente.`)
  });
};

exports.default = help;