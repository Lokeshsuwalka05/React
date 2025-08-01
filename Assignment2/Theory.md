## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Q: What is `npm`?

A: `npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.

npm is lots of things:

- `npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.
- `npm` alternative is `yarn`

### How to initialize `npm`?

```
npm init
```

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

- `npm` is the command line client that allows developers to install and publish those packages.

## Q: What is `Parcel/Webpack`? Why do we need it?

A: 
They are bundlers — tools that take your raw code (JS, CSS, HTML, images, etc.) and bundle, optimize, and serve it to the browser efficiently.
🔥 Parcel = Developer-friendly
Just write code. Parcel figures out how to build, bundle, and reload it.

what parcel can do for you??
- Tree Shaking-Remove unused code for you
- HMR=Hot Module Replacement
- Dev Build
- Local Server
- File watchig Algorithm- written in c++
- Caching-Faster Builds
- Image Optimization
- Minification
- Bundling
- Compressing
- Code Splitting
- Consistent Hashing
- Differential Bundling-Support older browsers
- Diagnostics-Gives you better ui for errors/beautiful errors in terminal
- Https- by using npx parcel index.html --https
- different dev and production bundles
- Error Handling

🏗️ Webpack = Config-heavy powerhouse
More flexible but requires manual setup using loaders, plugins, etc.

### installation commands:

- Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>
  ```

## Q: Why is the difference between ~(tilde) and ^(caret) on parcel version(^2.0.1)?

A:caret is for minor version  and tilde is for major  version installation automatically but don't use tilde your app can break.

## Q: What is package.json?
A:package.json is a file that stores all the info about your Node.js project like its name, version, scripts, and dependencies.
configuration for npm it keeps track which version of package is installed in our project.

## Q: What is package.lock.json?
it keeps a tracks of all the exact versions of dependecies.

## Q: Why is `.parcel-cache` folder?

A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## Q: What is `npx`?

A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

## Q: What is difference between `dependencies vs devDependencies`?

A: `"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.

## Q: What is Tree Shaking? in Parcel?

A: `Tree shaking`, also known as `dead code elimination`, is the practice of `removing unused code in your production build`. It's important to ship as little code to your end-users as possible. By statically analyzing our source code, we can determine what's not being used and exclude it from our final bundle.

## Q: What is Hot Module Replacement?

A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

## Q: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

### Parcel features:

- Dev Build - parcel provides us develop build
- Local Server - parcel also provides us a local server, which can be used to see live changes in our application.
- HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload

and some of more cool features of Parcel are:

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

## Q: What is `.gitignore`? What should we add and not add into it?

A: gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo. / will ignore directories with the name.

In our code we shouldn't add the files, which we can re-generate in future e.g, `node_modules`, `dist` etc.

## Q: What is the difference between `package.json` and `package-lock.json` files?

A: Both of these files have the same format, and perform similar functions in the root of a project. The difference is that `package-lock. json` cannot be published, and it will be ignored if found in any place other than the root project.

The package. json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock. json is solely used to lock dependencies to a specific version number.

## Q: Why should I not modify `package-lock.json`?

A: It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit `package-lock.json` to your code repository

You should avoid updating the `package.json` manually since it could break the synchronization between `package.json` and `package-lock. json`.

## Q: What is `node_modules`? Is it a good idea to push that on git?

A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages. json

## Q: What is the `dist` folder?

A: The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## Q: What is `browserlists`?

A: Browserslist defines and shares the list of target browsers between various frontend build tools.
