import React, { useEffect, useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";

function UserDetail() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const auth = useAuthUser()

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  console.log("UserDetail component mounted");
  console.log(auth);

  return (
    <>
      <div className="user-detail">
        <h1>User Detail</h1>
        <p>Hello: {auth.name}</p>
        <p>Welcome to your user details page.</p>
        <Button variant="primary" onClick={handleLogout}>Logout</Button>
      </div>
    </>
  )
}
export default UserDetail;