import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Points } from 'tabs/Points';
import { Props } from 'tabs/Props';

export const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Props</Tab>
        <Tab>Points</Tab>
      </TabList>

      <TabPanel>
        <Props />
      </TabPanel>
      <TabPanel>
        <Points />
      </TabPanel>
    </Tabs>
  );
};
