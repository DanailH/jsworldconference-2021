import React from 'react';
import './App.css';
import {
  Tabs,
  TabsProvider,
  TabHeader,
  TabContent
} from './components/Tabs';

function App() {
  return (
    <div className="container">
      <h1 className="mb-60">Tabs demo</h1>

      <h2>Default demo</h2>
      <Tabs className="mb-40" defaultTab="one">
        <div label="one">
          This is tab <em>ONE</em>!
        </div>
        <div label="two">
          This is tab <em>TWO</em>!
        </div>
        <div label="three">
          This is tab <em>THREE</em>!
        </div>
      </Tabs>

      <h2>Context demo</h2>
      <TabsProvider value="one">
        <div className="tabs">
          <div className="tab-list">
            <TabHeader value="one">
              one
            </TabHeader>
            <TabHeader value="two">
              two
            </TabHeader>
          </div>
          <div className="tab-content">
            <TabContent value="one">
              This is tab <em>ONE</em>!
            </TabContent>
            <TabContent value="two">
              This is tab <em>TWO</em>!
            </TabContent>
          </div>
        </div>
      </TabsProvider>
    </div>
  );
}

export default App;
