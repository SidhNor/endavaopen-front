import Component from 'react-pure-render/component';
import React, { PropTypes } from 'react';
import invariant from 'invariant';

const onError = error => console.log(error); // eslint-disable-line no-console
const ensureArrayWithDefaultOnError = item => {
  const array = [].concat(item);
  if (array.length === 1) array.push(onError);
  return array;
};
// Use key whenever you want to force off / on event registration. It's useful
// when queried component must be rerendered, for example when app state is
// recycled on logout. Then we can just set the key to the current viewer.
const optionsToPayload = ({ path, key, params }) => ({ path, key, params });
const optionsToPayloadString = options => JSON.stringify(optionsToPayload(options));

let serverFetching = false;
let serverFetchingPromises = null;

// queryFirebaseServer is for server side data fetching. Example:
// await queryFirebaseServer(() => {
//   // Render app calls componentWillMount on every rendered component, so
//   // we don't have to rely on react-router routes. It's pretty fast, under
//   // 10ms generally, because view has no data yet.
//   renderApp(store, renderProps);
// });
// const html = renderPage(store, renderProps, req);
export const queryFirebaseServer = renderAppCallback => {
  serverFetching = true;
  serverFetchingPromises = [];
  try {
    renderAppCallback();
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  } finally {
    serverFetching = false;
    // Wait until all promises in an array are either rejected or fulfilled.
    // http://bluebirdjs.com/docs/api/reflect.html
    const promises = serverFetchingPromises.map(promise => promise.reflect());
    serverFetchingPromises = null;
    return Promise.all(promises);
  }
};
