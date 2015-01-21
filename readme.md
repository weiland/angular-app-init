# Angular App Init (Angular 2 Style)

Idea: bootstrap angular.js apps by using custom HTML Elements. (as seen in Component Directives in Angular 2)

Example: [See it in action](http://weiland.github.io/angular-app-init)

instead of writing `<html ng-app="testApp">` one can easily use: 
```html
<test-app>
  <my-customer></my-customer>
</test-app>
```

Note: This is just a small proof of concept

### Use it 
##### Prepare
Include `modLoader.js` *after* including angular.js and *before* including your app.

```html
<script src="//code.angularjs.org/1.3.9/angular.js"></script>
<script src="modLoader.js"></script>
<script src="app.js"></script>
```

##### "run" your app
 If you named your module `myApp` you can run your app by just adding `<my-app></my-app>` into your html. my-app is your application scope which means that all your code goes into that.

### Todo
- refactor
- ng interceptor 
 

