
import css from "./FriendList.module.css"
const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {Array.isArray(friends)&& friends.map((friend) => {
        return (
                     <FriendListItem key={friend.id} friend={friend}
              
            />
          
        );
      })}
    </ul>
  );
};
export default FriendList;
const FriendListItem = ({ friend }) => {
    const friendIsonline = friend.isOnline;
  return (
      <>
          <li className={css.friendItem}>
      <img src={friend.avatar} alt="Avatar" width="48" />
              <p >{friend.name}</p>
              {friendIsonline?(<p className={css.online}>Online</p>):(<p className={css.offline}>Offline</p>)}
          </li>
    </>
  );
};