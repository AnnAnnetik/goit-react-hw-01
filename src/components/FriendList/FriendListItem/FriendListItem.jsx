
import css from"./FriendListItem.module.css"
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
export default FriendListItem
{/* <p className={clsx(css.friendListItem, { [css.full]: friendIsonline, })}>{friend.status}
              {friendIsonline ? <span>Online</span> : <span>Offline</span>}</p> */}