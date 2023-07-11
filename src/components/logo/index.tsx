import "./index.css"

function Logo() {
  return (
    <section className="flex p-5 lg:pl-[20rem] min-h-screen flex-1 flex-col justify-center">
      <h1 className="relative py-2 logo-blur-1st">
        F1uke.JS
        <span className="pr-5"></span>
        <span className="text-lg pl-5 absolute border-l">Jessada Supapsuntorn</span>
      </h1>
      <p className="text-xl suptext-blur-2nd">Full-Stack Developer</p>
    </section>
  )
}

export default Logo;