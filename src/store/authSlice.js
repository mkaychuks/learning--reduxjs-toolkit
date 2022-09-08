import { createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: { email: "dancing", password: "" },
  reducers: {
    loginUser: (state, action) => {
      signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        .then((userCredential) => {
            console.log(`Logged in as ${userCredential}`)
        })
        .catch((error) => {
          console.warn("Invalid credentials");
        });
    },
  },
});

const authActions = authSlice.actions;
export { authActions, authSlice };
