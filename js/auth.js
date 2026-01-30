
  import { auth } from "./firebase.js";
  import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

  // SIGN UP
  window.signup = async function () {
    const email = signupEmail.value;
    const password = signupPassword.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
      window.location.href = "user-dashboard.html";
    } catch (err) {
      alert(err.message);
    }
  };

  // LOGIN
  window.login = async function () {
    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
      window.location.href = "user-dashboard.html";
    } catch (err) {
      alert(err.message);
    }
  };

  // LOGOUT
  window.logout = async function () {
    await signOut(auth);
    alert("Logged out");
    window.location.reload();
  };