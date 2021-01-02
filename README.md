[![npm](https://img.shields.io/npm/v/@kronos-integration/service-http.svg)](https://www.npmjs.com/package/@kronos-integration/service-http)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/@kronos-integration/service-http)](https://bundlephobia.com/result?p=@kronos-integration/service-http)
[![downloads](http://img.shields.io/npm/dm/@kronos-integration/service-http.svg?style=flat-square)](https://npmjs.org/package/@kronos-integration/service-http)
[![GitHub Issues](https://img.shields.io/github/issues/Kronos-Integration/service-http.svg?style=flat-square)](https://github.com/Kronos-Integration/service-http/issues)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FKronos-Integration%2Fservice-http%2Fbadge&style=flat)](https://actions-badge.atrox.dev/Kronos-Integration/service-http/goto)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/Kronos-Integration/service-http/badge.svg)](https://snyk.io/test/github/Kronos-Integration/service-http)
[![Coverage Status](https://coveralls.io/repos/Kronos-Integration/service-http/badge.svg)](https://coveralls.io/github/Kronos-Integration/service-http)

# @kronos-integration/service-http

koa backed http server

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ServiceHTTP](#servicehttp)
    -   [Properties](#properties)
    -   [extendetName](#extendetname)
    -   [endpointFactoryFromConfig](#endpointfactoryfromconfig)
        -   [Parameters](#parameters)
    -   [isSecure](#issecure)
    -   [serverOptions](#serveroptions)
    -   [name](#name)
-   [CTX](#ctx)
    -   [Properties](#properties-1)
-   [HTTPEndpoint](#httpendpoint)
    -   [Parameters](#parameters-1)
-   [endpointRouter](#endpointrouter)
    -   [Parameters](#parameters-2)
-   [WSEndpoint](#wsendpoint)
    -   [Parameters](#parameters-3)
    -   [Properties](#properties-2)
-   [authenticate](#authenticate)
    -   [Parameters](#parameters-4)
-   [CTXInterceptor](#ctxinterceptor)
    -   [name](#name-1)
-   [CTXBodyParamInterceptor](#ctxbodyparaminterceptor)
    -   [name](#name-2)
-   [CTXJWTVerifyInterceptor](#ctxjwtverifyinterceptor)
    -   [name](#name-3)
-   [reportError](#reporterror)
    -   [Parameters](#parameters-5)

## ServiceHTTP

**Extends Service**

HTTP server.

### Properties

-   `server` **http.Server** only present if state is running

### extendetName

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** name with url

### endpointFactoryFromConfig

On demand create RouteSendEndpoint´s.

#### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `definition` **([Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String))** 
-   `ic`  

Returns **Class** RouteSendEndpoint if path is present of name starts with '/'

### isSecure

Should we make a secure connection.

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** true if key is present

### serverOptions

Options passed to @see {http.createServer} or @see {https.createServer}.

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'http'

## CTX

Type: [Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Properties

-   `res` **http.ServerResponse** 
-   `req` **http.ServerRequest** 
-   `is` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
-   `throw` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 

## HTTPEndpoint

**Extends SendEndpoint**

Endpoint to link against a http route.

The endpoint name may be in the form of '<METHOD>:<path>'.
Then <METHOD> will be used as http method
and <path> as the url path component.

### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** endpoint name
-   `owner` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** owner of the endpoint
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `options.path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** url path component defaults to endpoint name
    -   `options.method` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** http method defaults to GET

## endpointRouter

### Parameters

-   `httpService` **HTTPServer** 

Returns **RequestListener** 

## WSEndpoint

**Extends SendReceiveEndpoint**

Endpoint to link against a websocket route.

### Parameters

-   `name` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** endpoint name
-   `owner` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** owner of the endpoint
-   `options` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `options.path` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** url path defaults to endpoint name

### Properties

-   `sockets` **[Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)&lt;[WebSocket](https://developer.mozilla.org/docs/WebSockets)>** 

## authenticate

Check sec-websocket-protocol header for presence of
'access_token' and the token.
Throws if no valid token is present.

### Parameters

-   `service` **Service** 
-   `request` **any** 

## CTXInterceptor

**Extends Interceptor**

Basic interceptor providing/consuming http request/response.

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'ctx-body-param'

## CTXBodyParamInterceptor

**Extends CTXInterceptor**

Extracts params from request body.
Supported content types are:

-   application/json
-   application/x-www-form-urlencoded

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'ctx-body-param'

## CTXJWTVerifyInterceptor

**Extends Interceptor**

Only forward requests if a valid JWT token is present.

### name

Returns **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 'ctx-jwt-verify'

## reportError

Write WWW-Authenticate header.

### Parameters

-   `ctx` **any** 
-   `code`  
-   `error` **any** 
-   `description` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# install

With [npm](http://npmjs.org) do:

```shell
npm install @kronos-integration/service-http
```

# license

BSD-2-Clause
