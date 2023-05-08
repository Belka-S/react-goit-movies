import errorImage from 'img/mark-error.png';
import css from './Styles.module.scss';

export const ErrorView = ({ message }) => (
  <div className={css.Wrap} role="alert">
    <span>{message}</span>
    <img src={errorImage} width="100" height="100" alt="cross"></img>
  </div>
);
