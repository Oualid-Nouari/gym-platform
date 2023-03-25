import { useState } from "react";
import "./App.css";
import BodyPartsModal from "./Components/BodyPartsModal";
import Hero from "./Components/Hero";
import Back from "./Pages/Back";
import { Contexts } from "./Contexts/Context";
import Cardio from "./Pages/Cardio";
import Chest from "./Pages/Chest";
import LowerArms from "./Pages/LowerArms";
import LowerLegs from "./Pages/LowerLegs";
import Neck from "./Pages/Neck";
import Shoulders from "./Pages/Shoulders";
import Waist from "./Pages/Waist";
import UpperArms from "./Pages/UpperArms";
import UpperLegs from "./Pages/UpperLegs";
import Contact from "./Components/Contact";

function App() {
  const [openBpModal, setOpenBpModal] = useState(false);
  const [openContactModal, setContactModal] = useState(false);
  const [openBackEx, setOpenBackEx] = useState(false);
  const [openCardimEx, setOpenCardioEx] = useState(false);
  const [openChestEx, setOpenChestEx] = useState(false);
  const [openLowerArmsEx, setOpenLowerArmsEx] = useState(false);
  const [openLowerLegsEx, setOpenLowerLegsEx] = useState(false);
  const [openNeckEx, setOpenNeckEx] = useState(false);
  const [openShouldersEx, setOpenShouldersEx] = useState(false);
  const [openWaistEx, setOpenWaistEx] = useState(false);
  const [openUpperArmsEx, setOpenUpperArmsEx] = useState(false);
  const [openUpperLegsEx, setOpenUpperLegsEx] = useState(false);
  return (
    <div className="App">
      <Contexts.Provider
        value={{
          setOpenBpModal, setContactModal, setOpenBackEx, setOpenCardioEx, setOpenChestEx,
          setOpenLowerArmsEx, setOpenLowerLegsEx, setOpenNeckEx, setOpenShouldersEx,
          setOpenWaistEx, setOpenUpperArmsEx,setOpenUpperLegsEx
        }}
      >
        <Hero />
        {openBackEx && <Back />}
        {openCardimEx && <Cardio />}
        {openChestEx && <Chest />}
        {openLowerArmsEx && <LowerArms />}
        {openLowerLegsEx && <LowerLegs />}
        {openNeckEx && <Neck />}
        {openShouldersEx && <Shoulders />}
        {openWaistEx && <Waist />}
        {openUpperArmsEx && <UpperArms />}
        {openUpperLegsEx && <UpperLegs />}
        {openBpModal && <BodyPartsModal />}
        {openContactModal && <Contact />}
      </Contexts.Provider>
    </div>
  );
}
export default App;
