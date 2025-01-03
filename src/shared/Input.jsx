import { GoogleGenerativeAI } from "@google/generative-ai";
import { Refresh } from "@/utils/icons.util";
import { useState } from "react";

export default function Input({ chat, setChat }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [rotate, setRotate] = useState(false);
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAuPdoZHMUieDFn04qafijPhlPdeH5QtYI"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  async function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    const searchValue = search;
    try {
      setSearch("");
      setLoading(true);
      setChat([...chat, { prompt: searchValue, response: "" }]);
      const result = await model.generateContent(searchValue);
      console.log(result);
      if (result && result.response && result.response.text) {
        setChat([
          ...chat,
          { prompt: searchValue, response: result.response.text() },
        ]);
      } else {
        setChat([
          ...chat,
          {
            prompt: searchValue,
            response: "Invalid response from model.generateContent",
          },
        ]);
        console.error("Invalid response from model.generateContent");
      }
    } catch (error) {
      setChat([
        ...chat,
        { prompt: searchValue, response: "Api Qouta Exceeded" },
      ]);
      console.error("Error in handleSubmit:", error);
    } finally {
      setLoading(false);
    }
  }
  async function handleRegenerate() {
    if (!chat) return;
    try {
      setLoading(true);
      setRotate(true);
      const result = await model.generateContent(chat[chat.length - 1].prompt);
      if (result && result.response && result.response.text) {
        setChat([
          ...chat,
          {
            prompt: chat[chat.length - 1].prompt,
            response: result.response.text(),
          },
        ]);
      } else {
        console.error("Invalid response from model.generateContent");
      }
    } catch (error) {
      console.error("Error in handleRegenerate:", error);
    } finally {
      setLoading(false);
      setRotate(false);
    }
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <form className="mb-2 mx-auto" onSubmit={handleSubmit}>
      <button
        type="button"
        className={`${
          (loading && "cursor-not-allowed") ||
          (!chat.length && "cursor-not-allowed opacity-70 md:opacity-100")
        } text-[#C5C5D1] flex mx-auto items-center gap-2 py-2 px-4 border border-bright rounded`}
        onClick={handleRegenerate}
        disabled={loading || chat.length === 0}
      >
        <Refresh className={rotate ? "animate-spin-reverse" : ""} />
        Regenerate response
      </button>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative mt-[0.6rem]">
        <button
          className={`${
            (loading && "cursor-not-allowed") ||
            (search.length === 0 && "cursor-not-allowed")
          } absolute z-10 inset-y-0 end-3 flex items-center ps-3`}
          disabled={loading || search.length === 0}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.517 7.78232C13.6622 7.70957 13.7842 7.59787 13.8695 7.45972C13.9548 7.32156 14 7.1624 14 7.00004C14 6.83767 13.9548 6.67851 13.8695 6.54036C13.7842 6.4022 13.6622 6.2905 13.517 6.21775L1.26652 0.0924925C1.11462 0.0164901 0.943888 -0.013663 0.775147 0.00571153C0.606407 0.025086 0.446953 0.0931506 0.316236 0.201602C0.185518 0.310054 0.0891905 0.454204 0.0390005 0.616468C-0.0111885 0.778733 -0.0130692 0.952096 0.0335884 1.11541L1.28402 5.4906C1.33632 5.67346 1.44678 5.8343 1.59867 5.94877C1.75056 6.06324 1.93561 6.12511 2.1258 6.125L6.1256 6.125C6.35767 6.125 6.58024 6.21719 6.74434 6.38129C6.90844 6.54539 7.00063 6.76796 7.00063 7.00004C7.00063 7.23211 6.90844 7.45468 6.74434 7.61878C6.58024 7.78288 6.35767 7.87507 6.1256 7.87507L2.1258 7.87507C1.93561 7.87497 1.75056 7.93683 1.59867 8.0513C1.44678 8.16577 1.33632 8.32661 1.28402 8.50948L0.0344624 12.8847C-0.0122877 13.0479 -0.0105196 13.2213 0.0395511 13.3835C0.0896219 13.5458 0.185831 13.69 0.316447 13.7986C0.447062 13.9071 0.606437 13.9753 0.775136 13.9948C0.943837 14.0143 1.11457 13.9843 1.26652 13.9085L13.517 7.7832L13.517 7.78232Z"
              fill="#8E8E9E"
            />
          </svg>
        </button>
        <input
          onChange={handleChange}
          value={search}
          type="text"
          id="default-search"
          autoComplete="off"
          aria-label="Ask my clone of chatGPT"
          className="text-white shadow-[0px_0px_6px_0px_#0000001A] block w-full rounded border-[#303139] bg-[#40414E] py-3 px-4 placeholder-gray-500 focus:ring-0 focus:border-[#303139] sm:text-sm focus:outline-none"
        />
      </div>
    </form>
  );
}
