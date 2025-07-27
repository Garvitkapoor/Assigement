import './UserCard.css';

export default function UserCard({ name, email }) {
  return (
    <div className="user-card">
      <div className="avatar">{name.charAt(0)}</div>
      <div className="info">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
}
