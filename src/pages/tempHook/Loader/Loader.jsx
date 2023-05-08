import { ImSpinner2 as ReactIconSpinner } from 'react-icons/im';
import css from './Loader.module.scss';

export const IconSpinner = ({ size, message = 'Loading...' }) => (
  <span className={css.Wrap}>
    <ReactIconSpinner className={css.IconSpinner} size={size} /> {message}
  </span>
);
