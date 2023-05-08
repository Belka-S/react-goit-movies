import PropTypes from 'prop-types';
import css from './IconBtn.module.scss';

export const IconBtn = ({ children, onClick, ...allyProps }) => (
  <button
    className={css.IconBtn}
    type="button"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconBtn.defaultProps = { onClick: null, children: null };

IconBtn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};
