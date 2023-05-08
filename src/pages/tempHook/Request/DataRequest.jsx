import { useEffect, useReducer } from 'react';
import { SearchView } from './SearchView';
import { PendingView } from './PendingView';
import { ErrorView } from './ErrorView';
import * as dataAPI from './DataApi';

const STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
};

function reducer(state, action) {
  return { ...state, ...action };
}

export const DataRequest = ({ searchQuery }) => {
  const [state, dispatch] = useReducer(reducer, {
    fetchedData: null,
    error: null,
    status: STATUS.idle,
  });
  console.log('useReducer');

  useEffect(() => {
    if (searchQuery === '') {
      dispatch({ status: STATUS.idle });
      return;
    }

    dispatch({ status: STATUS.pending });
    dataAPI
      .fetchData(searchQuery)
      .then(data => {
        dispatch({ fetchedData: data });
        dispatch({ status: STATUS.resolved });
      })
      .catch(error => {
        dispatch({ error });
        dispatch({ status: STATUS.rejected });
      });
  }, [searchQuery]);

  switch (state.status) {
    case STATUS.idle:
      return <span>Enter searchQuery</span>;
    case STATUS.pending:
      return <PendingView searchQuery={searchQuery} />;
    case STATUS.rejected:
      return <ErrorView message={state.error.message} />;
    case STATUS.resolved:
      return <SearchView fetchedData={state.fetchedData} />;
    default:
      break;
  }
};
