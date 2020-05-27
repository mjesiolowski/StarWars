import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { App } from './App'
import { getTotalCount } from '../../selectors';

export default connect(
  createStructuredSelector({ totalCount: getTotalCount }),
)(App);
