# florianaspets

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).



## Documentation

### Layouts folder
The layouts folder only contains one file currently which is the default.vue file. This
file is the layout structure of the entire website and must be included. It would behoove 
the developers to make a <template> <header> <nuxt> <footer> <template> structure where
the entire site is wrapped in a template and with the nuxt app being injected into the template.
The header and footer would always appear in the app with only the nuxt content changing.

### Middleware folder
The middleware folder only has an auth.js file in it currently and it must be configged 
in the nuxt.config.js file prior to it being read in the app. This file checks the route
trying to be reached as well as the authentication of a user. If the user isn't authenticated
and is trying to reach a protected route they will be redirected. Upon authentication through
the signin page they will again be redirected but this time into the protected route.

### Store folder
This folder is not required but will be used in this project. The store a store is a 
centralized location to keep up with data that is available across all the application components. 
The store handles all states
of the user. It handles any major changes in state and ensures that all errors are handled
in this manner. It also creates for a better/bug-free environment when implemented. The store
works in this manner: it contains actions, mutations, and state. When an action is called 
the state is changed using a mutation. More information on the usage (highly recommend) of
the store can be found here
- [@NuxtStore](https://vueschool.io/articles/vuejs-tutorials/what-is-a-store-in-vue-js/#:~:text=In%20Vue%2C%20as%20well%20as,that%20belongs%20in%20a%20store.)

### nuxt.config.js
#### Routing
This file contains all of the configs for nuxt including plugins, middleware, metadata etc. 
Nuxt using file routing automatically so the pages folder contains automatic routing except
for dynamic routing such as pet:id where the individual
pet is necessary. All of that can be configured in the router portion of the config file.
More information on dynamic routing for nuxt can be found here
- [@NuxtDynamicRouting](https://nuxtjs.org/examples/routing/dynamic-pages)

Also configured in the router is the middleware. The only configuration currently is for
authentication purposes and is set to 'auth'. The middleware will run prior to the loading
the current pages. In our case it will run before getting to any of the auth routes.
More information on middleware can be found here 
- [@NuxtMiddleware](https://nuxtjs.org/examples/middlewares/router)

#### Modules
The modules config in this file is responsible for the config for any modules installed
such as pwa, firebase, axios etc. This is where the firebase configs go and where services
are authorized. Firebase requires you to instantiate services prior to usage so services
such as auth,firestore, functions etc. must be instantiated here prior to their usage.
Furthermore, methods must also be initialized here such as state change for the store. 

