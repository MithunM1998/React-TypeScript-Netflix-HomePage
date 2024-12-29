import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #141414;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 25px;
`;

const LogoutButton = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #f40612;
  }

  &:focus {
    outline: none;
  }
`;

const Header = () => {
  const handleLogout = () => {
    // Clear stored session or user data
    localStorage.removeItem('action'); // Remove token or session-related key
    localStorage.removeItem('user_data'); // Remove user data if stored

    // Optionally clear everything (use with caution if you need other localStorage items)
    // localStorage.clear();

    // Redirect to login page
    window.location.href = '/'; // Adjust '/login' if your login route is different
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
