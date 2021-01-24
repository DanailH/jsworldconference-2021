import * as React from 'react';
import PropTypes from 'prop-types';
import { TabsProvider, useTabsState } from './TabsContext';
import { TabsStateless } from './TabsStateless';

export const Tabs = React.memo(function Tabs(props) {
  const state = useTabsState();

  if (state !== null) {
    throw new TypeError('TabContext provided. Please use TabHeader and TabContent directly.');
  }

  return (
    <TabsProvider value={props.defaultTab}>
      <TabsStateless {...props} />
    </TabsProvider>
  )
});

Tabs.propTypes = {
  children: PropTypes.array.isRequired,
  defaultTab: PropTypes.string.isRequired,
};