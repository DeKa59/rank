'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.channelPerm = undefined;

var _discord = require('discord.js');

var _discord2 = _interopRequireDefault(_discord);

var _checkPerms = require('../checkPerms.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let channelPerm = exports.channelPerm = undefined;

const set = (msg, cmd, subcmd) => {
  const richEmbed = new _discord2.default.RichEmbed();
  if (subcmd === 'default' && (0, _checkPerms.checkAdmin)(msg) === true) {
    exports.channelPerm = channelPerm = undefined;
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`Referral checking can now be done in any channel.`)
    });
  } else if ((0, _checkPerms.checkAdmin)(msg) === true) {
    exports.channelPerm = channelPerm = subcmd;
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`Referral checking channel is now ${channelPerm}.`)
    });
  } else {
    msg.channel.send({
      embed: richEmbed.setColor('#ffffff').setDescription(`You don't have permission to do this.`)
    });
  }
};

exports.default = set;