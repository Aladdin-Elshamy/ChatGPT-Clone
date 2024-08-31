import Navbar from "@/shared/Nabar";
import {
  AvatarChatGPT,
  AvatarUser,
  Dislike,
  Like,
  Refresh,
} from "@/utils/icons.util";
import Input from "@/shared/Input";
import Aside from "@/shared/Aside";

export function Main() {
  return (
    <main className="text-white lg:flex">
      <Navbar />
      <Aside />
      <div className="w-full relative min-h-[90vh] lg:min-h-[100vh] lg:w-4/5">
        <div className="container lg:px-52 mt-6">
          <div className="flex gap-4">
            <AvatarUser />
            <p>What is a Chatbot?</p>
          </div>
        </div>
        <div className="pb-60">
          <div className="bg-bright pt-7 pb-6 mt-5">
            <div className="container lg:px-52 lg:flex items-start">
              <div className="flex gap-4 max-w-3xl">
                <div className="min-w-xs">
                  <AvatarChatGPT />
                </div>
                <p>
                  A chatbot is a computer program that simulates human
                  conversation through voice commands or text chats or both. It
                  can be integrated with various messaging platforms like
                  Facebook Messenger, WhatsApp, WeChat, etc. and can be used for
                  a variety of purposes, such as customer service,
                  entertainment, and e-commerce.
                </p>
              </div>
              <div className="flex gap-4 mt-9 lg:mt-0 ml-12">
                <Like />
                <Dislike />
              </div>
            </div>
          </div>
        </div>
        <div className=" right-0 left-0 absolute bottom-0 bg-background pb-6 pt-4">
          <div className="container">
            <button className="text-[#C5C5D1] flex mx-auto items-center gap-2 py-2 px-4 border border-bright rounded">
              <Refresh />
              Regenerate response
            </button>
            <div className="max-w-3xl mx-auto">
              <Input />
            </div>
          </div>
          <p className="text-[#9A9B9F] max-w-[95%] text-xs text-center lg: mx-auto">
            <a
              href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
              className="underline"
            >
              ChatGPT Jan 9 Version
            </a>
            . Free Research Preview. Our goal is to make AI systems more natural
            and safe to interact with. Your feedback will help us improve.
          </p>
        </div>
      </div>
    </main>
  );
}
