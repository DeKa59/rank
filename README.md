

## Commands

* Admin = "Administrator" permission
* Mod = "Manage Roles" permission

|Command|Description|Permissions|
|---|---|--|
|`help`|sends a list of all commands to the channel|everyone|
|`invites`|displays number of invites and number left until next role|everyone|
|`top <#>`|displays top <#> of inviters|everyone|
|`membercount`|displays total number of server members|everyone|
|`set <channel-name>`|set a specific channel for a bot to prevent spam|admin|
|`set default`|allow all channels to use the bot|admin|

Referobot also automatically updates user's roles.

## Installation

1. Download or clone les fichier
2. `cd` into the Referobot directory.
3. Lance `npm install` Pour installé dependencies.
4. Lance `npm run build` to build.
5. Ajoute ton bot token dans `your_auth.json`.
6. Renome `your_auth.json` to `auth.json`.
7. Lance `node lib/referobot.js`.<sup>1</sup>


