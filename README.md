# Halstack Browser
Halstack Browser is a React component that provides a visual mechanism to crawl and discover API resources and operations dynamically for those APIs implementing the HATEOAS pattern. In contrarty to other path-based approaches such as OpenAPI - where static AP specs are used to describe a list of pre-defined path resources and available operations - Halstack Browser allows both API consumers and producers to work with hypermedia, auto-discoverable REST APIs. Thus, everytime an API implementation changes, these updates will be automatically visible in Halstack browser without the need of importing or configuring any API spec.

## Use
### Installation

```sh
npm install --save @diaas/hal-ui
```
### Implementation example

```js
// import the HalUI component
import HalUI from "@diaas/hal-ui";

// use the component in your app
<HalUI url={api_base_url} headers={headers_object} />
```
### Properties
Name|Type|Default|Description
|:---|:---|:---|:---
`url`|`String`|None|Required. This property contains the base url of your HAL API.
`headers`|`JSON Object`|None|Contains an object with the headers to be sent to every request to the API.

## Develop
In the first place, clone this repository.
```bash
git clone https://github.dxc.com/DIaaS/diaas-hal-ui.git
```
Local development is broken into two parts, related to the lib/example folders.

First, within the lib folder, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
cd lib
npm install
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

# License
See Halstack Browser License [here](./LICENSE)
