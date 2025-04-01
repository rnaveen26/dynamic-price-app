import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      setUser(auth.currentUser);
      setName(auth.currentUser.displayName || "");
      setPhotoURL(auth.currentUser.photoURL || "");
    }
  }, []);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName: name, photoURL });
        setUser({ ...user, displayName: name, photoURL });
        alert("Profile updated successfully!");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/auth");
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <>
          <img src={user.photoURL || "default-avatar.png"} alt="Profile" width={100} />
          <p>Email: {user.email}</p>
          <input type="text" placeholder="Update Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Profile Picture URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
          <button onClick={handleUpdateProfile}>Update Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
