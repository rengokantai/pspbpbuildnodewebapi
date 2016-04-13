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