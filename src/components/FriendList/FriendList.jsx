const FriendListItem = ({avatar, name, isOnline})=>{
    return (
        <div>
  <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            { isOnline===true?<p>Online</p>:<p>Offline</p>}
  
  
</div>)
}
const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem  />
          </li>
        );
      })}
    </ul>
  );
};
export default FriendList