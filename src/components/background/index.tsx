import { ReactNode } from "react";
import "./index.css";

interface PropsType {
  children?: ReactNode;
}

function Background(props: PropsType) {
  return <div className="w-screen h-screen background">{props.children}</div>;
}

export default Background;
