import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import FormAddFriend from "./components/FormAddFriend";

function App() {
    const [friends, setFriends] = useState([]);

    // Ambil data dari Local Storage saat aplikasi dimuat
    useEffect(() => {
        const storedFriends = JSON.parse(localStorage.getItem("friends")) || [];
        setFriends(storedFriends);
    }, []);

    // Handler untuk menambahkan teman baru
    const handleAddNewFriend = (newFriend) => {
        const updatedFriends = [...friends, newFriend];
        setFriends(updatedFriends);

        // Simpan data ke Local Storage
        localStorage.setItem("friends", JSON.stringify(updatedFriends));
    };
}


// Render Aplikasi
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);