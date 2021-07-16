import React from 'react';
import PropTypes from 'prop-types';
import StatsList from './StatsList';
import styles from './Statistics.module.css';


const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && (
                <h2 className={styles.title}>{title}</h2>
            )}
            <StatsList data={stats}/>
        </section>
)
}


Statistics.defaultProps = {
    title: "",
  };

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
}

export default Statistics;