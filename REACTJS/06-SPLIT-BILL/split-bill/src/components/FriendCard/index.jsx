import "./friend.css";

export default function FriendCard({ friend }) {

    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3> {friend.name} </h3>
            {friend.balance < 0 && (
                <p className="red">
                    Kamu berhutang Rp{Math.abs(friend.balance)} ke { friend.name }
                </p>    
            )}
            {friend.balance > 0 && (
                <p className="red">
                    {friend.name} berhutang Rp{Math.abs(friend.balance)} ke { friend.name }
                </p>    
            )}
            {friend.balance === 0 && <p>Kamu dan {friend.name} tidak ada hutang </p>}
            <button className="button">
                Pilih
            </button>
        </li>
    );
}