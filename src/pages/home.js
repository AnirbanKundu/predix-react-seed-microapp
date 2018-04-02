import React from 'react';
import {Notification, Icon, Card} from 'predix-ui';

export default () => (
  <div className='u-p'>
    <h2>Home</h2>
		<p>This is the home page.</p>
  
    <Notification 
      type='important' 
      statusIcon='px-utl:delete'
      opened>
      Widget has been removed from your dashboard.
    </Notification>
    <br/>
    <Card headerText='Icons'>
      This is the main content area.
      <Icon icon='px-utl:trash'/>
      <Icon icon='px-fea:home'/>
    </Card>
    <Card headerText='My Card'>
      This is the main content area.
    </Card>
  </div>
);