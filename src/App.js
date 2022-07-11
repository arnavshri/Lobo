import { useRef } from "react"; 
import Section1 from "./Components/Homepage/Section1";
import Section2 from "./Components/Homepage/Section2";
import Section3 from "./Components/Homepage/Section3";

function App() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView({behavior: "smooth"});
  return (
    <div className="Homepage">
      <Section1 myRef ={myRef} executeScroll={executeScroll}/>
      <Section2 />
      <Section3 myRef ={myRef}/>
    </div>
  );
}

export default App;
