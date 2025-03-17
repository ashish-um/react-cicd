import * as React from "react";
import { SignInPage } from "@toolpad/core/SignInPage";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

const providers = [
  { id: "google", name: "Google" },
  { id: "credentials", name: "Email and Password" },
];

export default function ThemeSignInPage() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
    onError: (errorResponse) => console.error(errorResponse),
  });

  const signIn = async (provider) => {
    if (provider.id === "google") {
      login(); // Trigger Google login when Google button is clicked
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Sign in with ${provider.id}`);
          resolve({ error: "This is a mock error message." });
        }, 10);
      });
    }

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log(`Sign in with ${provider.id}`);
    //     resolve({ error: "This is a mock error message." });
    //   }, 500);
    // });
  };

  return (
    <>
      <SignInPage
        signIn={signIn}
        providers={providers}
        slotProps={{ form: { noValidate: true } }}
        sx={{
          "& form > .MuiStack-root": {
            marginTop: "2rem",
            rowGap: "0.5rem",
          },
        }}
      />
    </>
  );
}
