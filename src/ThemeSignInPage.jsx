import * as React from "react";
import { SignInPage } from "@toolpad/core/SignInPage";
import { GoogleLogin } from "@react-oauth/google";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function ThemeSignInPage() {
  const signIn = async (_, formData) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        console.log(
          `Signing in with credentials: ${formData.get("email")}, ${formData.get("password")}`
        );
        resolve();
      }, 300);
    });
    return promise;
  };

  return (
    <>
      <div style={{ position: "absolute" }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
          useOneTap
        />
      </div>

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
