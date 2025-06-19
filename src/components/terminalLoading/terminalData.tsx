import moment from "moment";

export interface TerminalData {
  str: string;
  type: "setup" | "system" | "redirect";
  delay?: number;
}

export const data: TerminalData[] = [
  {
    str: "Wait for flukejs.com to fully populated...",
    type: "setup",
    delay: 500,
  },
  {
    str: "Starting fake hwclock: loading system time.",
    type: "system",
    delay: 1000,
  },
  {
    str: moment().utc().format("ddd MMM DD HH:mm:ss z YYYY"),
    type: "system",
    delay: 1,
  },
  {
    str: "Setting perliminary keymap...",
    type: "setup",
    delay: 200,
  },
  {
    str: "Activating javascript...",
    type: "setup",
    delay: 200,
  },
  {
    str: "Activating react components...",
    type: "setup",
    delay: 200,
  },
  {
    str: "Mounting local storage...",
    type: "setup",
    delay: 300,
  },
  {
    str: "Mounting cookie storage...",
    type: "setup",
    delay: 100,
  },
  {
    str: "Configuring display interface...",
    type: "setup",
    delay: 100,
  },
  {
    str: "Configuring network interface...",
    type: "setup",
    delay: 200,
  },
  {
    str: "Starting flukejs.com...",
    type: "setup",
    delay: 400,
  },
  {
    str: "flukejs.com is ready.",
    type: "setup",
    delay: 1000,
  },
  {
    str: "Welcome to flukejs.com",
    type: "system",
    delay: 500,
  },
  {
    str: "",
    type: "redirect",
    delay: 1000,
  },
];
