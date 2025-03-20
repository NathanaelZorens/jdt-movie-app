import React from "react";
import { postLogin } from "../../services/auth/api";
import { useToken } from "../../hooks/useToken";
import { useNavigate } from "react-router";

const Login: React.FC = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const response = await postLogin({ username, password });

      changeToken(response.accessToken);
      localStorage.setItem("token", response.accessToken);
      navigate("/admin");
    } catch (error) {}
  };

  return (
    <div>
      Login
      <form
        action=""
        className="flex flex-col w-full h-screen justify-center items-center gap-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Username</label>
        <input
          className="border border-amber-300"
          name="username"
          type="text"
        />
        <label htmlFor="">Password</label>
        <input
          className="border border-amber-300"
          name="password"
          type="password"
        />

        <button
          type="submit"
          className="bg-blue-400 hover:bg-blue-800 px-3 py-1"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
