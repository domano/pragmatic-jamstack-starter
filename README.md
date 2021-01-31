# pragmatic-jamstack-starter
Boilerplate code for self-hosted Jamstack sites. Uses Next.js with typescript for the site generation, strapi for APIs, tailwind for styling and react-cosmos to iterate on components.

# Structure
This is a single repo with 2 seperate modules and a shared lib folder.

## /api
Contains strapi

`npm i` to install all dependencies

`npm run development` will start strapi and ask you to create an admin user. Navigate to `localhost:1337` to get started.

## /app
Contains next js and the frondend code. Also comes with react-cosmos and an example for a fixture

`npm i` installs all the dependencies for next.js, tailwind, tailwind animations and react-cosmos.

`npm run dev` starts the next.js development server. Navigate to `localhost:3000` to see your app.

`npm run build` builds a production release of your app.

`npm run start` servers a production version of your app.

`npm run cosmos` servers a production version of your app. Navigate to `localhost:5000` to see your component library.

`npm run cosmos:export` exports a static version of your cosmos build if you want to use it as a styleguide.

## /lib
Contains shared functions which can be imported with relative paths. `add.js` is an example and is referenced in the 

