import * as React from 'react';
import PropTypes from 'prop-types';
import { useTabsState } from './TabsContext';

export const TabContent = React.memo(function TabContent(props) {
  const {
    children,
    value,
  } = props;
  const state = useTabsState();

  if (state === null) return;

  if (value === state.activeTab) return null;

  return (
    <div className={props.className}>
      { children }
    </div>
  );
});

TabContent.propTypes = {
  children: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};