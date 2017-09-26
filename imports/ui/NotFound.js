import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
    return (
      <div className="boxed-view">
             <div className="boxed-view__box">
                <h1>Page Not Found</h1>
                <p>We are unable to find that page.</p>
                <Link to="/" className="button button--link">HEAD HOME</Link>
             </div>
      </div>
    )
}

// export default class NotFound extends React.Component {
//   render() {
//     return <p>NotFound component here</p>;
//   }
// }
