####pspbpbuildnodewebapi
#####setting
generate default package.json directly
```
npm init 
```

#####Adding a datastore
######
```
npm install request --save 
npm install -g forever
```
start:
```
forever list
forever start app.js
```
typically use
```
nf index.js
```
Or change scripts in package.json
edit
```
"start": "nodemon index.js"
```
```
nf start
```
#####add async
```
nodemon pet_server.js
```

######need to use env process
change mongo link to env link, because nf cannot coexist with forever
```
mongoose.connect(process.env.DOG);
```
in .env file
```
{
"cat":"mongodb://user:pass@",
"dog":"mongodb://user:pass@
}
```
