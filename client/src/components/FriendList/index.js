import React from 'react';
import { Link } from 'react-router-dom';

const FriendList = ({ followCount, username, follow}) => {
    if (!follow || !follow.length) { return <p className="bg-dark text-light p-3"> {username}, make some friends! </p>;
}

return (
    <div className="friend-list">
        <h5>
            {username}'s {followCount} {followCount === 1 ? 'friend' : 'friends'}
        </h5>
        {follow.map(friend => (
            <button className = "btn w-100 display-block mb-2" key={friend.username}>
                <Link to={`/profile/${friend.username}`}>{friend.username}</Link>
            </button>
        ))}
    </div>
);
};

export default FriendList;