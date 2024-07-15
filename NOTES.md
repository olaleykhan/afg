 npx nx generate 

 npx nx generate @nx/react:host --name=ttt --devServerPort=3000 --directory=apps/ttt --compiler=swc --pascalCaseFiles=true --projectNameAndRootFormat=as-provided --strict=false --style=tailwind --tags=client --no-interactive --dry-run 


 pnpm nx generate @nx/react:host --name=ttt --directory=test/ttt-test-1 --strict=true


npx nx generate @nx/react:application --name=ttt --directory=testapps/ttt --projectNameAndRootFormat=as-provided --routing=true --no-interactive --dry-run 

pnpm nx g @nx/react:app my-app --bundler=vite --directory=apps/ttt --routing=true