// Style Notes for future
// Make responsive

// Feature notes
// Add sidebar hamburger
import { saveToDoList, loadToDoList } from "./saveload";
import "./style.css";

window.addEventListener("beforeunload", () => {
  saveToDoList();
  return null;
});

loadToDoList();
