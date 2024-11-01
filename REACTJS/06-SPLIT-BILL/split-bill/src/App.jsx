import { useState, useEffect } from 'react';
import FriendListCard from './components/FriendListCard';
import FormSplitBill from './components/FormSplitBill';
import FormAddFriend from './components/FormAddFriend';

// Daftar teman default
const defaultFriends = [
  {
    id: 118836,
    name: "Budi",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sukma",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState([]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Memuat data teman dari Local Storage dan menggabungkannya dengan teman default
  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem("friends")) || [];
    const mergedFriends = [...defaultFriends, ...storedFriends];
    setFriends(mergedFriends);
  }, []);

  const handleShowAddFriend = () => {
    setShowAddFriend(showAddFriend => !showAddFriend);
  }

  const onAddNewFriend = (friend) => {
    const updatedFriends = [...friends, friend];
    setFriends(updatedFriends);

    // Simpan teman baru di Local Storage (kecuali teman default)
    const nonDefaultFriends = updatedFriends.filter(
      (f) => !defaultFriends.some((df) => df.id === f.id)
    );
    localStorage.setItem("friends", JSON.stringify(nonDefaultFriends));
  };

  const onSelectedFriend = (friend) => {
    setSelectedFriend((prevSelected) =>
      prevSelected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    const updatedFriends = friends.map((friend) =>
      friend.id === selectedFriend?.id
        ? { ...friend, balance: friend.balance + value }
        : friend
    );
    setFriends(updatedFriends);

    // Simpan perubahan di Local Storage (hanya non-default)
    const nonDefaultFriends = updatedFriends.filter(
      (f) => !defaultFriends.some((df) => df.id === f.id)
    );
    localStorage.setItem("friends", JSON.stringify(nonDefaultFriends));
    setSelectedFriend(null);
  };

  const onDeleteFriend = (friendId) => {
    const updatedFriends = friends.filter((friend) => friend.id !== friendId);
    setFriends(updatedFriends);

    const nonDefaultFriends = updatedFriends.filter(
      (f) => !defaultFriends.some((df) => df.id === f.id)
    );
    localStorage.setItem("friends", JSON.stringify(nonDefaultFriends));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendListCard
          friends={friends}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          onDeleteFriend={onDeleteFriend}
        />
        {showAddFriend && <FormAddFriend onAddNewFriend={onAddNewFriend} />}
        <button className="button" onClick={handleShowAddFriend}>
          {showAddFriend ? "Tutup" : "Tambah Teman"}
        </button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;