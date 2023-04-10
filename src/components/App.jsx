import user from 'data/user.json';
import data from 'data/data.json';
import friends from "data/friends.json";
import transactions from 'data/transactions.json'
import {User}from './userProfile/user.jsx';
import {Statistics} from "./Statistics/stats.jsx";
import {Friends} from './FriendsList/friendsList.jsx';
import {Transactions} from './TransactionHistory/Transaction'
export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 40,
        marginTop: 70,

      }}
    >  
      

    <User  username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />

<Statistics title="Upload stats" stats={data} />
<Friends  friends={friends}/>
<Transactions items={transactions}></Transactions>



    </div>
  );
};

