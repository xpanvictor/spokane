import React from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import { useStateValue } from "../../context/stateProvider";
import { useLocation } from "react-router-dom";

const UserPasswordReset = () => {
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const [{ qEmail }, dispatch] = useStateValue();
  const search = useLocation().search;
  const email = new URLSearchParams(search).get("email");
  const submit = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://freehouses.herokuapp.com/api/v1/forget_password/?email=${email}`,
        {
          password: newPassword,
          confirm_password: confirmNewPassword,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Password Changed");
          window.location = `login`;
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainLayout>
      <main className="px-5 md:px-16 xl:px-52 pt-2">
        <div className="grid md:grid-cols-2 shadow mt-6 mb-16 md:h-600 pb-8 md:pb-0">
          <div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
            <h1 className="text-4xl lg:text-5xl font-bold pb-7">
              Password Reset
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <form className="py-4 px-5">
              <input
                className="input-box italic mb-4 outline-gray-400 bg-ash-100"
                type="text"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                className="input-box italic mb-4 outline-gray-400 bg-ash-100"
                type="text"
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button
                className="btn text-white h-btn font-bold bg-pur md:text-lg mt-8 w-full cursor-pointer"
                type="submit"
                onClick={submit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};
export default UserPasswordReset;
