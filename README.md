To install my app:

Assuming a properly installed Node environment,
you need to drop this git into a generic npm react app. Do:
```
npx create-react-app
```

Then delete the newly created .git folder if it makes it, and copy my .git into the project root.
```
git reset --hard
```
will write and overwrite all the files in the master commit, populating the directory with my source codes.

Then you can run
```
npm start
```
to start the app.