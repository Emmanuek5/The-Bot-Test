#!/usr/bin/env node
const { execSync } = require("child_process");

console.log("Starting updater...");


const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to run command: ${command}`);
    return false;
  }
  return true;
};

  const command = "git pull";
runCommand(command);

setInterval(() => {
    const command = "git pull main";

    if (runCommand(command)) {
      console.log("Successfully updated!");
    } else {
      console.log("Failed to update!");
    }
    return;
    
}, 10000);