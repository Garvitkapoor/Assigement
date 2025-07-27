import SignupForm from './components/SignupForm';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: '2rem' }}>
        <SignupForm />
        <UserCard name="Jane Doe" email="jane@example.com" />
      </div>
    </>
  );
}

export default App;
