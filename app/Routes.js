import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import Expenses from './components/Expenses/Expenses';
import KitchenStock from './components/KitchenStock/KitchenStock';
import ReportPage from './components/Report/Report';

export default () => (
  <App>
    <Switch>
      <Route path={routes.DAILY_EXPENSE} exact component={Expenses} />
      <Route path={routes.KITCHEN_STOCK} exact component={KitchenStock} />
      <Route path={routes.REPORT} exact component={ReportPage}/>
    </Switch>
  </App>
);
