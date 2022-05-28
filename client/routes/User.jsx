const React = require('react');
import CreateReviewCard from '../components/CreateReviewCard.jsx';

class User extends React.Component {
  render() {
    return (
      <div className="" style={{width: '1090px', margin:'40px auto'}}>
        <CreateReviewCard />
      </div>
    )
  }
}

export default User;