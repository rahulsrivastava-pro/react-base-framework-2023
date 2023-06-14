
# Installation

1. Open first terminal 
   
```
npm install
```

### Production

Build the app:

```
npm run build
```

Wait for the build to finish, then start the local server:

```
npm start
```

The file /public/js/bundle.js will be overwritten and minfied in production mode (with source maps
as a separate file). There will be no watch mode, and the build process will exit after completion.

### Development

1. Open another terminal and run the following to start developing:

```
npm run dev
```

2. Start the local server:

```
npm start
```

3. Open the browser at the url specified in the terminal.


Add/edit React files in the src folder. After saving, your files are built automaticallty. The file
/public/js/bundle.js will be created in development mode (including source maps). Refresh the
browser window.


### DB Server 

1. Open Third Terminal

2. Install globally the fake API server [json-server](https://github.com/typicode/json-server) I used to focalize in Redux:
```
npm install -g json-server
```

3. The backend with json-server:
```
json-server --watch db.json --port 6000
```


### Building Dashboard  

- Few Ideas: [yet-to-try]
1. https://github.com/DashboardPack/architectui-react-theme-free
2. https://github.com/wrappixel/xtreme-react-lite
3. https://github.com/MacKentoch/react-director-admin-template
4. https://github.com/devias-io/material-kit-react
5. https://github.com/creativetimofficial/material-dashboard
   