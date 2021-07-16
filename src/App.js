import React from 'react';

import Profile from './components/social-profile/Profile';
import user from './components/social-profile/user.json';

import Statistics from './components/statistics/Statistics'
import statisticalData from './components/statistics/statistical-data.json';

import FriendsList from './components/friends/FriendsList';
import friends from './components/friends/friends.json';

import TransactionHistory from './components/transaction-history/TransactionHistory';
import transactions from './components/transaction-history/transactions.json';

import Container from './components/container/Container';

const App = () => {
  return (
    <Container>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="Upload stats"
        stats={statisticalData}
      />
      <FriendsList
        friends={friends}
      />
      <TransactionHistory
        items={transactions}
      />
    </Container>
  )
}

export default App;