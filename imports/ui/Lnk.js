import React from 'react';

import {Links} from '../api/links';
import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import Addlink from './Addlink';
import LinksListFilters from './LinksListFilters';

// export default () => {
//      return (
//        <div>
//                      <PrivateHeader title="Your links"/>
//                      <LinksList/>
//                      <Addlink/>
//        </div>
//      )
// }

export default class Lnk extends React.Component {
  componentWillMount() {
       if (!Meteor.userId())
           this.props.history.replace('/');
   }

  render() {
    return (
         <div>
              <PrivateHeader title="Your links"/>
                <div className="page-content">
              <LinksListFilters/>
              <Addlink/>
              <LinksList/>
               </div>
         </div>
    )
  }
}
