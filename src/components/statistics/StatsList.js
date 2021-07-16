import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const StatsList = ({ data }) => {
    return (
        <ul className={styles.list}>
            {data.map(stat => {
                return (
                    <li className={styles.item} style={{backgroundColor: getRandomColor()}} key={stat.id}>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}</span>
                    </li> 
                )
            })}
        </ul>
    )
}

StatsList.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
}

function getRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

export default StatsList;