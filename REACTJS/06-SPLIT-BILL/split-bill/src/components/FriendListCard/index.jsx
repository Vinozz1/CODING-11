import "./friend-list.css";
import FriendCard from "../FriendCard";

export default function FriendListCard({ friends, onSelectedFriend, onDeleteFriend, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend, index) => (
        <FriendCard
          friend={friend}
          key={index}
          onSelectedFriend={onSelectedFriend}
          onDeleteFriend={onDeleteFriend} // Tambahkan props ini
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}