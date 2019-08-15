# opt-apiname-id-mapper

### Install
1. `npm init --y`
2. `npm install`
3. `npm run start`

### Deploy to Heroku
1. Add code to a Heroku repo
2. Committing / pushing new changes will deploy automatically
```
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```
3. Heroku servers know to run `npm run start` and will automatically proxy port 80 traffic to app via https://github.com/cooperreid-optimizely/opt-apiname-id-mapper/blob/master/index.js#L4

### Usage
```shell
curl --header "X-Opt-Token: YOUR-V2-TOKEN" https://YOUR-HOSTNAME-AND-PORT/events/YOUR-PROJECT-ID
```
