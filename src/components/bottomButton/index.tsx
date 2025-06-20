import github from "../../assets/github-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-rounded-svgrepo-com.svg";
import email from "../../assets/email-svgrepo-com.svg";
import download from "../../assets/download-svgrepo-com.svg";
import "./index.css";

function BottomButton({ className }: { className: string }) {
  return (
    <div className={`absolute flex flex-row left-1/2 transform -translate-x-1/2 bottom-10 items-center gap-4 ${className}`}>
        <a className="btn-info" href="https://github.com/lzy3me">
          <img src={github} alt="git" className="w-7 h-7" />
        </a>
        <div className="w-12 h-12 border-2 border-solid rounded-full border-white flex items-center justify-center">
          <img src={linkedin} alt="linked" className="w-7 h-7" />
        </div>
        <div className="w-12 h-12 border-2 border-solid rounded-full border-white flex items-center justify-center">
          <img src={email} alt="email" className="w-7 h-7" />
        </div>
        <div className="w-12 h-12 border-2 border-solid rounded-full border-white flex items-center justify-center">
          <img src={download} alt="cv" className="w-7 h-7" />
        </div>
      </div>
  );
}

export default BottomButton;