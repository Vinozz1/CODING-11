import { useState } from "react";
import "./form.css";

export default function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [amount, setAmount] = useState("");
  const [myBill, setMyBill] = useState("");
  const friendBill = amount ? amount - myBill : "";
  const [whoisPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!amount || !myBill) return;
    handleSplitBill(whoisPaying === "user" ? friendBill : -myBill);
  }

  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
      <h2>Patungan Bareng si {selectedFriend.name}</h2>

      <label htmlFor="totalTagihan">💵 Total Tagihan</label>
      <input
        type="text"
        id="totalTagihan"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />

      <label htmlFor="tagihanKamu">💵 Tagihan kamu</label>
      <input
        type="text"
        id="tagihanKamu"
        value={myBill}
        onChange={(e) => setMyBill(Number(e.target.value))}
      />

      <label htmlFor="tagihan">💵 Tagihan {selectedFriend.name}</label>
      <input type="text" id="tagihan" disabled value={friendBill} />

      <label htmlFor="opsiTeman">💵 Dibayarin sama</label>
      <select
        id="opsiTeman"
        value={whoisPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">Kamu</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button" type="submit">
        Tambah
      </button>
    </form>
  );
}