
  import { auth } from "./firebase.js";
  import { onAuthStateChanged } from
    "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

  const guestView = document.getElementById("guestView");
  const userView = document.getElementById("userView");
  const userEmail = document.getElementById("userEmail");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      guestView.style.display = "none";
      userView.style.display = "block";
      userEmail.innerText = user.email;
    } else {
      guestView.style.display = "block";
      userView.style.display = "none";
    }
  });
