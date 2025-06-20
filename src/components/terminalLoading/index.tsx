import { data, TerminalData } from "./terminalData";
import { useEffect, useState } from "react";
import "./index.css";

function DelayedList({ items, onRedirect }: { items: TerminalData[], onRedirect: () => void }) {
  const [displayedItems, setDisplayedItems] = useState<TerminalData[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < items.length) {
      const timer = setTimeout(() => {
        const currentItem = items[index];
        setDisplayedItems(prevItems => [...prevItems, currentItem]);
        
        // Check if current item is redirect type
        if (currentItem.type === "redirect") {
          onRedirect();
        }
        
        setIndex(prevIndex => prevIndex + 1);
      }, items[index].delay);

      return () => clearTimeout(timer); // Cleanup timer on unmount or index change
    }
  }, [items, index, onRedirect]);

  return displayedItems.map((item, index) => {
    if (item.type == "setup") return <p key={index}><span className="text-green-500 font-bold">[ ok ]</span> {item.str}</p>;
    else if (item.type == "system") return <p key={index}>{item.str}</p>;
    else return <></>;
  });
}

export default function TerminalLoading({ onRedirect }: { onRedirect: () => void }) {
  return (
    <section className="terminal-loading">
      <div className="flex">
        <img src="/linux.png" alt="LOGO" width={50} height={50} />
        <img src="/linux.png" alt="LOGO" width={50} height={50} />
        <img src="/linux.png" alt="LOGO" width={50} height={50} />
        <img src="/linux.png" alt="LOGO" width={50} height={50} />
        <img src="/linux.png" alt="LOGO" width={50} height={50} />
      </div>

      <div className="">
        <DelayedList items={data} onRedirect={onRedirect} />
      </div>
    </section>
  );
}

