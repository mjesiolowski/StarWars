import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Starship } from './Starship';
import { addStarship, updateStarship, removeStarship } from '../../actions';
import { isStarshipInBasket, getStarshipCountInBasket } from '../../selectors';


const mapDispatchToProps = (dispatch) => ({
  addStarship: (starship) => dispatch(addStarship(starship)),
  updateStarship: (starship) => dispatch(updateStarship(starship)),
  removeStarship: (name) => dispatch(removeStarship(name)),
});

export default connect(
  createStructuredSelector({
    isStarshipInBasket,
    getStarshipCountInBasket,
  }),
  mapDispatchToProps,
)(Starship);
