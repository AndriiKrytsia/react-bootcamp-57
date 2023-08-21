import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Points } from 'tabs/Points';
import { Props } from 'tabs/Props';
import { Counter } from 'tabs/Counter';


export const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Props</Tab>
        <Tab>Points</Tab>
        <Tab>Counter</Tab>
      </TabList>

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
