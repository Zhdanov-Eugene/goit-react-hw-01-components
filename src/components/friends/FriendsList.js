import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import styles from './Friends.module.css';


const FriendsList = ({friends}) => {
    return (
        <ul className={styles.list}>
            {friends.map(friend => {
                return (
                    <FriendListItem 
                        id={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )
            })}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendsList;