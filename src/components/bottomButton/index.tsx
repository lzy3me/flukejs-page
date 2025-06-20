import github from "../../assets/github-svgrepo-com.svg";
import linkedin from "../../assets/linkedin-rounded-svgrepo-com.svg";
import email from "../../assets/email-svgrepo-com.svg";
import download from "../../assets/download-svgrepo-com.svg";
import "./index.css";

function BottomButton({ className }: { className: string }) {
  return (
    <div className={`absolute flex flex-row left-1/2 transform -translate-x-1/2 bottom-10 items-center gap-4 ${className}`}>
        <a className="btn-info" target="_blank" href="https://github.com/lzy3me">
          <img src={github} alt="git" className="w-7 h-7" />
        </a>
        <a className="btn-info" target="_blank" href="https://linkedin.com/in/jessada-supapsuntorn-4a2a83182/">
          <img src={linkedin} alt="linked" className="w-7 h-7" />
        </a>
        <a className="btn-info" target="_blank" href="mailto:fluke.jessada.s@gmail.com">
          <img src={email} alt="email" className="w-7 h-7" />
        </a>
        <a className="btn-info" target="_blank" href="https://docs.google.com/document/u/0/export?format=pdf&id=11EFGDDa-cO9DNOvqLdwPdm1iTv_SHz9vAkBEL9-mQuM&token=AC4w5Vi2I0y_Fpt8R5Tb2RPpoGOmVpLW-Q:1727007743758&ouid=117416985708759544618&includes_info_params=true&usp=docs_home&cros_files=false">
          <img src={download} alt="cv" className="w-7 h-7" />
        </a>
      </div>
  );
}

export default BottomButton;