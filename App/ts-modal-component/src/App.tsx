import { useState } from "react";
import "./App.scss";
import Modal from "./components/modal/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal
        width={200}
        height={200}
        font="Times New Roman"
        bg="#232323"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div>modal open</div>
      </Modal>
    </div>
  );
}

export default App;
