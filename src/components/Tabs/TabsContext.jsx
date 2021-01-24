import * as React from 'react';
import PropTypes from 'prop-types';

const TabsStateContext = React.createContext(null);
const TabsDispatchContext = React.createContext(null);

function tabsReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_TAB': {
      return { activeTab: action.payload || state.activeTab };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
};

export function useTabsState() {
  return React.useContext(TabsStateContext);
};

export function useTabsDispatch() {
  return React.useContext(TabsDispatchContext);
};

export function TabsProvider(props) {
  const {
    children,
    value,
  } = props;
  const [ state, dispatch ] = React.useReducer(tabsReducer, {activeTab: value});

  return (
    <TabsStateContext.Provider value={state}>
      <TabsDispatchContext.Provider value={dispatch}>
        {children}
      </TabsDispatchContext.Provider>
    </TabsStateContext.Provider>
  );
};

TabsProvider.propTypes = {
  children: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};
