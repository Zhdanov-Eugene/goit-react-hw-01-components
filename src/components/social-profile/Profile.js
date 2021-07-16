import React from 'react';

import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <div className={styles.info}>
                <img
                    src={props.url}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{props.name}</p>
                <p className={styles.tag}>@{props.tag}</p>
                <p className={styles.location}>{props.location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}> {props.followers}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}> Views</span>
                    <span className={styles.quantity}> {props.views}</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{props.likes}</span>
                </li>
            </ul>
        </div>
    )
};

Profile.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};

export default Profile;