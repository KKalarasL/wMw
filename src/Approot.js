import React from 'react'
import { Router, Route, Switch } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import asyncComponent from './asyncComponent';
// import ScrollToTopOnMount from './ScrollToTop';

const AsyncContactPage = asyncComponent(() => {
  return import('./contact');
});

const AsyncGalleryPage = asyncComponent(() => {
  return import('./gallery');
});

const AsyncMembersPage = asyncComponent(() => {
  return import('./members');
});

const AsyncNewsPage = asyncComponent(() => {
  return import('./news');
});

const AsyncEventsPage = asyncComponent(() => {
    return import('./events');
});

const AsyncForumPage = asyncComponent(() => {
  return import('./forum');
})

const AsyncHomePage = asyncComponent(() => {
    return import('./App');
});

let browserHistory = createBrowserHistory()

const ApplicationRoot = ({ store }) => (
      <Router history={browserHistory}>
          <Switch>
            <Route path="/contact" component={AsyncContactPage} />
            <Route path="/gallery" component={AsyncGalleryPage} />
            <Route path="/members" component={AsyncMembersPage} />
            <Route path="/news" component={AsyncNewsPage} />
            <Route path="/events" component={AsyncEventsPage} />
            <Route path="/forum" component={AsyncForumPage} />
            <Route path="/" component={AsyncHomePage} />
          </Switch>
      </Router>
      )

export default ApplicationRoot