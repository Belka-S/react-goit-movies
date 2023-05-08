import { useEffect, useState } from 'react';
import css from './Styles.module.scss';

export const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(searchQuery.trim(' ') === '');
  }, [searchQuery]);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleReset = e => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <form className={css.Form} onSubmit={handleSubmit}>
      <input name="search" value={searchQuery} onChange={handleChange}></input>
      <button type="submit" disabled={isDisabled}>
        Search
      </button>
      <button type="button" onClick={handleReset} disabled={isDisabled}>
        Reset
      </button>
    </form>
  );
};
