import * as React from 'react';
import PropTypes from 'prop-types';
import { useTabsState } from './TabsContext';
import { TabHeader } from './TabHeader';

export const TabsStateless = React.memo(function TabsStateless(props) {
  const { children } = props;
  const state = useTabsState();

  const renderTabHeaders = () => {
    return children.map((child) => {
      const { label } = child.props;

      return (
        <TabHeader
          value={label}
          key={label}
        >
          { label }
        </TabHeader>
      );
    });
  };

  const renderTabContent = React.useCallback(() => {
    return children.filter((child) => {
      return child.props.label === state.activeTab;
    })
  }, [children, state]);

  return (
    <div className={`${props.className} tabs`}>
      <div className="tab-list">
        { renderTabHeaders() }
      </div>
      <div className="tab-content">
        { renderTabContent() }
      </div>
    </div>
  );
});

TabsStateless.propTypes = {
  children: PropTypes.array.isRequired,
};