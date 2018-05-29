
Extension mechanism demo
========================
This is a broken example of extension mechanism in Angular using lazy loaded modules trying to implement Angular CommonModule keywords (*ngIf).


The goal is to be able to add Angular code & services into the extension module (currently adding a simple *ngIf breaks) and import the necessary modules ( in this case CommonModule).  Currently the platform class throws the below error when loading the extension module (removing the *ngIf and the CommonModule import works fine):

ERROR Error: Uncaught (in promise): Error: StaticInjectorError(AppModule)[NgIf -> ViewContainerRef]: 
  StaticInjectorError(Platform: core)[NgIf -> ViewContainerRef]: 
    NullInjectorError: No provider for ViewContainerRef!



Building the extension
----------------------

```
cd extension
npm i
npm run build
```

Running the application
-----------------------

```
cd platform
npm i
npm start
```

Open a browser and navigate to http://localhost:8080
