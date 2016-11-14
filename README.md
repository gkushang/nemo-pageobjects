## nemo-pageobjects
  page objects for nemo.js


### nemoPage
Initializes the Page Objects automatically and attaches pages to the `nemo.page` namespace. You do not need to instantiate the pages in your suite.


### Setup

<p><strong>1. Install </strong></p> 

```
    
    npm install nemo-pageobjects --save-dev
    
```

<p><strong>2. Add to your suite </strong></p> 

Add the NemoPage to your Before hook right after Nemo is launched or add as a part of Nemo callback as shown below,

'baseDir` is the path to your end to end suite, e.g. `"baseDir": "/acceptance/",` or `"baseDir": "/functional/",`


```
      function _cbNemo(err) {

            return nemoPage({nemo: world.nemo, baseDir: world.nemo._config.get('baseDir')})
                .then(callback) // success callback
                .catch(callback); // error callback
        }

```

<p><strong>3. Access your pages in your suite </strong></p> 

```
    nemo.page.{pageName}, e.g. nemo.page.loginPage
```

Refer to the complete E2E Example [here][1]. Nemo Page object is initialized [here][2]
 
[1]: https://github.paypal.com/kugajjar/nemo-cucumberjs-framework
[2]: https://github.paypal.com/kugajjar/nemo-cucumberjs-framework/blob/master/acceptance/helpers/world.js#L38-L40



