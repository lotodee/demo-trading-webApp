import  { useState } from 'react';
import Gravatar from 'react-gravatar';
import useReloadOnMount from '../../../../useReloadOnMount';
import "./AuthScreen.css"
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
function AuthScreen() {
    useReloadOnMount()
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleFetchProfile = async () => {
    if (email && username) {
      try {
        // Fetch GitHub repositories using the provided GitHub username
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        setRepos(data);
        setProfile({ email, username });
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    }
  };

  return (
    <MainTemplate>
    <div className="auth-screen">
      <h1>Auth Screen</h1>
      <div className='input-btn'>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleFetchProfile}>Fetch Profile</button>
        
      </div>
     
      {profile && (
        <div className="profile">
          <h2>Profile</h2>
          <Gravatar email={profile.email} size={100} />
          <p>Email: {profile.email}</p>
          <p>GitHub Username: {profile.username}</p>
        </div>
      )}
      {repos.length > 0 && (
        <div className="repositories">
          <h2>GitHub Repositories</h2>
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </MainTemplate>
  );
}

export default AuthScreen;
