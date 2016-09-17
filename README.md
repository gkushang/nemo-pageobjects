## nemo-pageobjects
  page objects for nemo.js


#### nemoPage
Initializes the Page Objects automatically and attaches pages to the `nemo.page` namespace. You do not need to instantiate the pages in your suite.

Add below part to your `world` once `nemo` is launched.

###### Usage -- world.js

```
//world.js

var nemoPage = require('nemo-pageobjects').nemoPage;

...
...

world.nemo = new Nemo(... , function _cbNemo(err) {
  nemoPage(world)
        .then(resolve);

  //e.g. nemo.page.loginPage instances will be available to use in your step definitions
  ...
  ...

```
