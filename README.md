# Neil's Todos
Neil loves computers. He has at least eight of them, and out of those eight, maybe one is operable. One day, Neil decided the best way to bring down the man was to build a Todo list app. Don't ask me why -- this is just how the mind of a genius operates. Herein lies the culmination of his efforts.

## Instructions

### Fix the Build
The build is broken. It doesn't work quite right, and there are tons of errors. The logo image isn't working, either -- and it's not even present in the `dist` directory when `yarn build` is ran.

Fix the errors and get puppy working!

### Finish the Todo's App
The Todo's app is mostly finished. Neil certainly wouldn't want you to waste your time tediously creating the "hello world" of React ad nauseam. That's Neil's job. Instead, there are a few things that need fixing:

1) Users need to be able to filter Todo's in the UI. This can be done with inputs (dropdowns, buttons, etc), or via routing (seperate pages for complete, incomplete, and all).
2) Todos must be managed in a context. There's an existing one in src/hooks/useTodos/TodosProvider.tsx, along with a hook. Feel free to use this, or make your own.
3) Users must be able to add a Todo to the Todos array. Persisting this data is less important than your strategy behind form creation. Neil just wants to see what your best practices are for orchestrating forms.
4) Neil is old school. He heads to geocities and reminisces of the days where webpage size and performance was squeezed by consumer's operating on 56k modems. In fact, he pops open the profiler on Basecamp.com and sends the results to product folks to evangelize his vision. All that said, use your discretion and follow best practices when it comes to performance. Maybe you can convince Neil that React is a good modern solution.

## Rules
1) Types must remain untouched. You can add types, but the originals cannot be modified -- only extended or re-assigned and manipulated via utilities.
2) Absolutely no `axios`. Neil is convinced `axios` is a shill for the man.
3) I suppose everything else is fair game, including styles. If updating styles, please use BEM. That said, Neil doesn't expect everything to look pretty. That's a bonus.
4) If you're hung up on `TodosStateType`, google `discriminating unions` or `algebraic data types`.

## Expected Result
1) The dev server should work properly (`yarn start`)
2) Styles should work when the dev server is ran
3) The logo image should be visible when the dev server is ran
4) The user should be able to filter Todo's by complete or incomplete, and they should also be able to view all
5) The production build should run, and the logo image should be present (`yarn build`)
6) Styles should be present in the production build

# Commands

## yarn start
Runs the development server.

## yarn build
Builds the production bundle.

## yarn start:prod
Runs `http-server` on the `dist` directory, which is generated via `yarn build`.