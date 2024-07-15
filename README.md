# Afg

#### Afrigames


## Repo Breakdown.

this repo contains or will in the near future contain a number of applications. 
It will usually be multitierd meaning website, client App, server App, socket server, DB layer, and importatly the core package powering the game model. take note of the term `core`. 

the First Application will be the `TIC-TAC-TOE`
to run the TIC-TAC-TOE will a lot be reffered to here as ttt. 

## Start the application
RUN `npm install` to install project dependencies in one go

Run `npm run ttt:dev` to start the tic tac toe client development server. Happy coding!

## Build Tic Tac Toe for production

Run `npm run ttt:build` to build the application. The build artifacts are stored in the outputsomewhere in the app.

Run `npm run ttt:serve` to start production server









##### <Internal Dirctive> : Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

 npx nx generate 

 npx nx generate @nx/react:host --name=ttt --devServerPort=3000 --directory=apps/ttt --compiler=swc --pascalCaseFiles=true --projectNameAndRootFormat=as-provided --strict=false --style=tailwind --tags=client --no-interactive --dry-run 


 pnpm nx generate @nx/react:host --name=ttt --directory=test/ttt-test-1 --strict=true


npx nx generate @nx/react:application --name=ttt --directory=testapps/ttt --projectNameAndRootFormat=as-provided --routing=true --no-interactive --dry-run 

pnpm nx g @nx/react:app my-app --bundler=vite --directory=apps/ttt --routing=true