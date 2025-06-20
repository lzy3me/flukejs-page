import BottomButton from "../bottomButton";
import "./index.css";

function Logo() {
  return (
    <section className="logo-section">
      <div className="absolute -z-10 background"></div>

      <div className="min-h-screen flex max-lg:flex-col lg:flex-row lg:px-40 xl:px-72 max-lg:items-center justify-center">
        <div className="flex flex-1 flex-col justify-center max-lg:items-center">
          <h1 className="max-lg:flex max-lg:flex-col lg:relative py-2 logo-blur-1st lg:w-[380px]">
            F1uke.JS
            <span className="text-lg lg:pl-5 lg:ml-5 lg:absolute max-lg:border-t lg:border-l">
              Jessada Supapsuntorn
            </span>
          </h1>
          <p className="text-xl max-lg:ml-2 suptext-blur-2nd">Full-Stack Developer</p>
        </div>

        <div className="max-lg:hidden lg:absolute lg:top-1/2 lg:right-1/4 max-lg:right-1/2 lg:translate-x-full lg:-translate-y-1/2 max-lg:-translate-x-1/3 scroll-blur-3nd">
          <p className="-top-6">I've worked with</p>
          <div className="absolute h-12 overflow-hidden">
            <ul className="content-show-list silkscreen-bold">
              <li className="content-show-list-item">React</li>
              <li className="content-show-list-item">Node</li>
              <li className="content-show-list-item">Linux</li>
              <li className="content-show-list-item">AWS</li>
              <li className="content-show-list-item">Roblox</li>
            </ul>
          </div>
        </div>
      </div>

      <BottomButton className="scroll-blur-3nd" />
    </section>
  );
}

export default Logo;
