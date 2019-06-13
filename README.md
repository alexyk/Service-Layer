# In Short

## Developing Flow
(short version)  
1. `git pull/checkout` (clean checkout, no node_modules)  
2. `npm install`  
3. Make changes  
4. Build - run `npm run ES6-to-ES5` (_lib_ folder will be updated) 
5. Test (with Centralized-App - see the _Developing Flow_ _In Detail_ below)  
6. Commit and push your changes  

## Releasing Flow
(short version)  
1. Make sure all changes are committed (step 6. in _Developing Flow_)  
2. `npm version patch|minor|major|...` (this creates a tag and commits it - without pushing it)  
3. Push the version change and the new generated tag  
  
  
# In Detail

## Developing Flow
1. Make sure you have a clean checkout and no _node_modules/_ (delete it if present)
2. Get dependencies with `npm install` 
3. Make your changes
4. Build - run `npm run ES6-to-ES5` (_lib_ folder will be updated)
5. Test by following these steps:
   - copy the current working _Service-Layer_ folder   into _Centralized-App/node_modules/locktrip-svc-layer_
   - run _Centralized-App_ and make sure your changes working as expected 
 
    **NOTE:** Alternatively you can directly checkout and work in the _Centralized-App/node_modules/locktrip-svc-layer/_ folder - but you have to know what you are doing. For examlpe running `npm install` could delete _node_modules/locktrip-svc-layer/_ and your canges would be lost if you hadn't committed your changes before running `npm install`.
6. Push changes to _Service-Layer_ GitHub. This should contain both changes in _src/_ and _lib/_ folders as well as any _package.json_ _package-lock.json_ files.

## Releasing Flow
1. Make sure all code is pushed to _Service-Layer_ on GitHub (step 6. in _Developing Flow_)
2. Run `npm version patch` to update version (or whatever other neded `npm version` alternative - minor, major etc.).
3. Push the version change and tag (created by `npm version ...` command in previous step 2.)
