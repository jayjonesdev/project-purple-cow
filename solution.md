## Available Scripts

In the project directory, you can run:

### npm install

Installs all dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
Use a local http server to serve app. 

### Serve from build folder

After building run the following commands:

- npm install -g serve
- serve -s build

### Changing development server port

Run this command in your terminal:

**OS X:** export PORT={PORT_NUMBER}
**Windows:** SET PORT={PORT_NUMBER}

## Future Updates

- Grab initial count on screen load.
- Disable button spamming. 
- Api error handling.
- Loading spinner for longer requests.
- Ability to check hit count on the page level instead of just the domain level.
- Allow users to dynamically add/remove pages they want to get the hit count on.

## Assumptions

- Count api always returns a status code of 200.
- User only wanted to check count at domain level.
- Api key will always be correct.
- Namespace was 'fearless.tech'.