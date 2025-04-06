import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile, signOut, reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false)
  const [photoURL, setPhotoURL] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName: name, photoURL });
  
        // 🔁 Reload the user to get updated profile info
        await reload(user);
  
        // ✅ Update state with fresh data from Firebase
        setUser(auth.currentUser);
  
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
      { user && (
         <>
         <img 
            src={user.photoURL || "https://via.placeholder.com/100"} 
            alt="Profile" 
            width={100} 
            height={100} 
            onError={(e) => { e.target.src = "https://via.placeholder.com/100"; }} 
            style={{ borderRadius: "50%" }} 
          />
         <p>Email: {user.email}</p>
         <input type="text" placeholder="Update Name" value={name} onChange={(e) => setName(e.target.value)} />
         <input type="text" placeholder="Profile Picture URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
         <button onClick={handleUpdateProfile}>Update Profile</button>
         <button onClick={handleLogout}>Logout</button>
       </>
      )}
      {loading && (
                <p>Loading...</p>

      )}
    
    </div>
  );
};

export default Profile;