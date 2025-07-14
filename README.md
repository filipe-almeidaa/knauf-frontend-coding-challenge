# KNAUF Frontend Coding Challenge

## Architectural choices

- Created route handler to handle filtering of users by name. I am aware that in this case it
  could be made on the client since the list is small, but I wanted a more complete solution.
- Save the search filter in the URL to save its state and allow the user to share the link with the filter applied.
- Save the users list state in the store

## Design choices

- Used the debounce technique to prevent unnecessary request to the server

## Other notes

- As for the Redux store, I just followed the documentation templates to create the store and the users slice,
  always trying to keep all state related logic inside the actions. However, this is a very simple case so there is not
  much logic involved.
- Created a helper [useUsers](src/lib/features/users/useUsers.ts) to unify the users state and actions and simplify its
  usage across components

## How to run the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
