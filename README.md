IONIC 2  - STARTER TEMPLATE ![GitHub tag](https://img.shields.io/badge/license-MIT-blue.svg)
============================
This starter template provide a basis on which build awesome apps with [ionic](http://ionicframework.com/);
at the moment the starter template demonstrate how to build: 

- welcome screen on which logon o signup
- signup and logon through auth services provided by  [ionic.io](http://ionic.io/cloud#authentication)
- side menu and tabs layout
- displaying maps using [MAPBOX-GL APIs](https://www.mapbox.com/mapbox-gl-js/api/)
- access to a backend API making an HTTP request and using a provider


Index
------
<!-- Table of Contents generated by https://www.npmjs.com/package/readme-toc -->

<!-- toc -->

* [Preview the app](#preview-the-app)
* [Prerquisites](#prerquisites)
* [Install](#install)
* [Post install](#post-install)
  * [Get mapbox-gl](#get-mapbox-gl)
  * [Backend services](#backend-services)
      * [Ionic cloud](#ionic-cloud)
      * [Mapbox Studio](#mapbox-studio)
* [Run myAppTs app](#run-myappts-app)

<!-- toc stop -->

# Preview the app


If you like you can view the app with ionic view (see http://view.ionic.io). 
The App_id is *fb578e52*


# Prerquisites


The following prerequisites must be met

- Ionic Framework Version: 2.0.0-rc.1
- Ionic CLI Version: 2.1.4
- Ionic App Lib Version: 2.1.2
- Ionic App Scripts Version: 0.0.36
- Node Version: v6.9.1
- Cordova version: 6.3.1
- MapboxGL version 0.26.0 


# Install

Assuming you have already installed npm, nvm and node.js, first of all check node-js version

    nvm ls

you'll get something like this:

            v0.8.28
           v0.10.46
           v0.12.15 
        iojs-v3.3.1
             v4.5.0
            v5.12.0
    ->       v6.9.1
             system
    default -> 4 (-> v4.5.0)
    node -> stable (-> v6.9.1) (default)
    stable -> 6.9 (-> v6.9.1) (default)
    iojs -> iojs-v3.3 (-> iojs-v3.3.1) (default)
    
If your node.js version is different from 6.9.1 (the current LTS) run:
    
    nvm install v6

Now you can install ionic and cordova CLI 

    npm install -g ionic cordova

and clone the app from GitHub

    ionic start myApp https://github.com/madHorse54/kukua --v2
    
this will create your Ionic 2 projects in your myAppTs folder.   

# Post install


    cd myAppTs
    npm install @ionic/cloud-angular --save-dev 
    ionic plugin add cordova-plugin-geolocation


## Get mapbox-gl

    npm install --save mapbox-gl

Add to myAppTs/www/index.html after the body taf

    <link href='https://api.mapbox.com/mapbox-gl-js/v0.25.0/mapbox-gl.css' rel='stylesheet' />

    
 Create declarations.d.tsin myAppTs/src and add this line to the file

    declare module 'theLibraryName';

or install Typescript definition from

    npm install --save @types/mapbox-gl
    

## Backend services

#### Ionic cloud

Signup to Ionic.io and follow the instructions at http://docs.ionic.io/setup.html.

#### Mapbox Studio

Signup to https://www.mapbox.com/developers/ and get your free access token.

    cd myAppTs/src/app 
    
rename secret.ts.example in secret.ts, edit it adding your access Mapbox access token
    
    
# Run myAppTs app


    ionic serve
    
    


