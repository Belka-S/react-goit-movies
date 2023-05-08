import PropTypes from 'prop-types';
import css from './Button.module.scss';

export const Button = ({ children, onClick }) => (
  <button className={css.Button} type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
};
