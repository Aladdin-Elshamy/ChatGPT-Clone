import { GPTLogo } from "@/utils/icons.util";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
export const Welcome = () => {
  const token = Cookies.get("token");
  const email = Cookies.get("email");

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div>
        <div className="text-white flex justify-center mb-5">
          <GPTLogo />
        </div>
        <div className="text-white text-[15px] font-medium text-center">
          Welcome to ChatGPT
        </div>
        <div className="text-white text-[15px] font-medium text-center mt-[5px]">
          {token || email
            ? "Continue with your OpenAI account"
            : "Log in with your OpenAI account to continue"}
        </div>
        <div className="flex justify-center gap-3 mt-[14px]">
          {token || email ? (
            <Link
              to={"/main"}
              className="bg-primary text-sm rounded text-white font-medium px-[14px] py-[9px]"
            >
              Continue
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="bg-primary text-sm rounded text-white font-medium px-[14px] py-[9px]"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
