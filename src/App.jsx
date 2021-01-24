import React from 'react';
import './App.css';
import {
  Tabs,
  TabsProvider ,
  TabHeader,
  TabContent
} from './components/Tabs';

function App() {
  return (
    <div className="container">
      <h1 className="mb-60">Tabs demo</h1>

      <h2>Default demo</h2>
      <Tabs className="mb-40" defaultTab="Gator">
        <div label="Gator">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>

      <h2>Context demo</h2>
      <TabsProvider value="Gator">
        <div className="tabs">
          <div className="tab-list">
            <TabHeader value="Gator">
              Gator
            </TabHeader>
            <TabHeader value="Croc">
              Croc
            </TabHeader>
          </div>
          <div className="tab-content">
            <TabContent value="Gator">
              See ya later, <em>Alligator</em>!
            </TabContent>
            <TabContent value="Croc">
              After 'while, <em>Crocodile</em>!
            </TabContent>
          </div>
        </div>
      </TabsProvider>
    </div>
  );
}

export default App;
