import Navbar from "@/shared/Navbar";
import { Flash, Light, Limitation, Refresh } from "@/utils/icons.util";
import Input from "@/shared/Input";
import Aside from "@/shared/Aside";
import InfoProvider from "@/components/InfoProvider";

export function Start() {
  return (
    <main className="text-white lg:flex">
      <Navbar />
      <Aside />
      <div className="w-full relative min-h-[90vh] lg:min-h-[100vh] lg:w-4/5">
        <div className="container lg:px-5 mt-36 pb-60">
          <h1 className="text-4xl text-center font-medium">ChatGPT</h1>
          <div className="mt-16 pt-1 grid gap-2 grid-cols-1 md:gap-8 lg:gap-4 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto">
            <div className="mx-auto w-fit">
              <div className="text-center">
                <Light classes="w-6 h-6 mx-auto" />
                <h2 className="text-xl font-medium pt-4 pb-1">Examples</h2>
              </div>
              <InfoProvider>
                <p>“Explain quantum computing in simple terms” →</p>
              </InfoProvider>
              <InfoProvider>
                <p>“Got any creative ideas for a 10 year old’s birthday?” →</p>
              </InfoProvider>
              <InfoProvider>
                <p>
                  “How do I make an HTTP <br />
                  request in Javascript?” →
                </p>
              </InfoProvider>
            </div>
            <div className="mx-auto w-fit">
              <div className="text-center">
                <Flash classes={"mx-auto"} />
                <h2 className="text-xl font-medium pt-4 pb-1">Capabilities</h2>
              </div>
              <InfoProvider>
                <p>
                  Remembers what user said
                  <br /> earlier in the conversation
                </p>
              </InfoProvider>
              <InfoProvider>
                <p>
                  Allows user to provide follow-
                  <br /> up corrections
                </p>
              </InfoProvider>
              <InfoProvider>
                <p>Trained to decline inappropriate requests</p>
              </InfoProvider>
            </div>
            <div className="mx-auto w-fit">
              <div className="text-center">
                <Limitation classes={"mx-auto"} />
                <h2 className="text-xl font-medium pt-4 pb-1">Limitations</h2>
              </div>
              <InfoProvider>
                <p>May occasionally generate incorrent information</p>
              </InfoProvider>
              <InfoProvider>
                <p>
                  May occasionally produce
                  <br /> harmful instructions or biased
                  <br /> content
                </p>
              </InfoProvider>
              <InfoProvider>
                <p>Limited knowledge of world and events after 2021</p>
              </InfoProvider>
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
