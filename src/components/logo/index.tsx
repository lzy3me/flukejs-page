import "./index.css";

function Logo() {
  return (
    <section className="logo-section">
      <div className="absolute -z-10 background"></div>

      <div className="flex flex-row max-lg:px-5 lg:px-[18rem]">
        <div className="flex min-h-screen flex-1 flex-col justify-center">
          <h1 className="relative py-2 logo-blur-1st w-[380px]">
            F1uke.JS
            <span className="pr-5"></span>
            <span className="text-lg pl-5 absolute border-l">
              Jessada Supapsuntorn
            </span>
          </h1>
          <p className="text-xl suptext-blur-2nd">Full-Stack Developer</p>
        </div>

        <div className="absolute top-1/2 right-1/4 translate-x-full -translate-y-1/2 scroll-blur-3nd">
          <p className="-top-6">I've worked with</p>
          <div className="max-lg:invisible absolute h-12 overflow-hidden">
            <ul className="content-show-list silkscreen-bold">
              <li className="content-show-list-item">React</li>
              <li className="content-show-list-item">Roblox</li>
              <li className="content-show-list-item">Nest.js</li>
              <li className="content-show-list-item">Angular</li>
              <li className="content-show-list-item">Spring</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col left-1/2 right-1/2 bottom-10 scroll-blur-3nd items-center">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </div>
    </section>
  );
}

export default Logo;
