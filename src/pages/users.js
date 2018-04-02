import React from 'react';
import {Card} from 'predix-ui';

export default class UsersPage extends React.Component{
  render(){
    return (
      <div className='u-p flex'>

        <Card headerText='Users'>
          This is the main content area.
        </Card>
        <Card headerText='User Detail'>
          This is the main content area.
        </Card>
      </div>
    )
  }
}
