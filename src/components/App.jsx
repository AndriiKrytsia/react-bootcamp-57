import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Points, Props, Counter, Todos } from 'tabs';

export const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Todos</Tab>
        <Tab>Props</Tab>
        <Tab>Points</Tab>
        <Tab>Counter</Tab>
      </TabList>

      <TabPanel>
        <Todos />
      </TabPanel>
      <TabPanel>
        <Props />
      </TabPanel>
      <TabPanel>
        <Points />
      </TabPanel>
      <TabPanel>
        <Counter />
      </TabPanel>
    </Tabs>
  );
};
