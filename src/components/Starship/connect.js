import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Starship } from './Starship'
import { addStarship, updateStarship } from '../../actions';
import { getAllStarshipsInBasket } from '../../selectors';


const mapDispatchToProps = dispatch => ({
  addStarship: (starship) => dispatch(addStarship(starship))
})

export default connect(
  createStructuredSelector({ allStarshipsInBasket: getAllStarshipsInBasket }),
  mapDispatchToProps
)(Starship);
