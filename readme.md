# Angular Auto init (Angular 2 Style)

Idea: auto-bootstrap angular.js apps by using custom HTML Elements.

Note: This is just a small proof of concept

Example: [See it in action](http://weiland.github.io/angular-directive-init)

### Use it 
##### Prepare
Include `modLoader.js` *after* including angular.js and *before* including your app.

```html
<script src="//code.angularjs.org/1.3.9/angular.js"></script>
<script src="modLoader.js"></script>
<script src="app.js"></script>
```

##### "run" your app
Instead of using the ng-app attribute, the script creates a custom html element with the module's name. If you named your module `myApp` you can run your app by just adding `<my-app></my-app>` into your html. my-app is your application scope which means that all your code goes into that.

### Todo
- refactor
- ng interceptor 
 
