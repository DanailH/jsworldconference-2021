import * as React from 'react';
import PropTypes from 'prop-types';
import { useTabsState, useTabsDispatch } from './TabsContext';

export const TabHeader = React.memo(function TabHeader(props) {
  const {
    children,
    value,
  } = props;
  const state = useTabsState();
  const dispatch = useTabsDispatch();

  if (state === null || dispatch === null) {
    throw new TypeError('TabContext not provided.');
  }

  const isTabActive = React.useCallback(() => {
    return state.activeTab === value;
  }, [state, value]);

  const handleOnClick = React.useCallback(() => {
    dispatch({type: 'CHANGE_TAB', payload: value});
  }, [value, dispatch]);

  return (
    <div
      className={`${props.className} tab-list-item ${isTabActive() ? 'tab-list-active' : ''}`}
      onClick={handleOnClick}
    >
      { children }
    </div>
  );
});

TabHeader.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};