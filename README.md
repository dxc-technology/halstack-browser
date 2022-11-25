# Halstack Browser
Halstack Browser is a React component that can be included in any React Web App and provides a visual mechanism to crawl and discover API resources and operations dynamically for hypermedia-based APIs. In contrary to other path-based approaches such as OpenAPI (where static specs are used to describe a list of pre-defined path resources and available operations) Halstack Browser allows both API consumers and producers work with auto-discoverable REST APIs just based on their implementations, without any spec. Thus, every time an API implementation changes, these updates will be automatically visible in Halstack Browser Web component without the need of importing or configuring any API spec.

## Halstack Browser in Action

See [this demo app using Halstack browser](https://hal.us.insurance.dxc.com/). Paste your hypermedia-based API endpoint and start browsing!

## Use
### Installation

```sh
npm install --save TBD
```
### Implementation example

```js
// import the HalUI component
import HalUI from "@diaas/hal-browser";

// use the component in your app
<HalUI url={api_base_url} headers={headers_object} />
```
### Properties
| Name      | Type          | Default | Description                                                                 |
| :-------- | :------------ | :------ | :-------------------------------------------------------------------------- |
| `url`     | `String`      | None    | Required. This property contains the base URL of your HAL API.              |
| `headers` | `JSON Object` | None    | Contains an object with the headers to be sent to every request to the API. |

## Develop
In the first place, clone this repository.
```bash
git clone https://github.com/dxc-technology/halstack-browser
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
