import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Basket } from './Basket'
import { getTotalCount } from '../../selectors';

export default connect(
  createStructuredSelector({ totalCount: getTotalCount }),
)(Basket);
