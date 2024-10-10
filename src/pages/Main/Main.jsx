import Navbar from "@/shared/Navbar";
import { AvatarChatGPT, AvatarUser, Dislike, Like } from "@/utils/icons.util";
import Input from "@/shared/Input";
import Aside from "@/shared/Aside";
import { Fragment, useState } from "react";
import ReactMarkdown from "react-markdown";
export function Main() {
  const [chat, setChat] = useState([
    {
      prompt: "What is a Chatbot?",
      response:
        "A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. Itcan be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.",
    },
  ]);
  return (
    <main className="text-white lg:flex lg:pl-[20%]">
      <Navbar setChat={setChat} />
      <Aside setChat={setChat} />
      <div className="w-full relative min-h-[90vh] lg:min-h-[100vh]">
        {chat.length > 0 && (
          <div className="pb-60">
            {chat.map((conversation, index) => {
              return (
                <Fragment key={index}>
                  <div className="container lg:px-48 mt-6">
                    <div className="flex gap-4">
                      <AvatarUser />
                      <p className="text-[14.4px] md:text-base">
                        {conversation.prompt}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-bright pt-7 pb-6 mt-5">
                      <div className="container lg:px-48 lg:flex items-start justify-between">
                        <div className="flex gap-4 max-w-3xl">
                          <div className="min-w-xs">
                            <AvatarChatGPT />
                          </div>
                          <div className="markdown-content">
                            {conversation.response ? (
                              <ReactMarkdown>
                                {conversation.response}
                              </ReactMarkdown>
                            ) : (
                              <span className="block w-3 animate-bounce h-3 bg-white rounded-full"></span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-4 mt-9 lg:mt-0 ml-12">
                          <Like />
                          <Dislike />
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
        <div className=" right-0 left-0 absolute bottom-0 bg-background pb-6 pt-4">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Input chat={chat} setChat={setChat} />
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
