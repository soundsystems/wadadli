import type { NextPage } from "next";
import Header from "../components/Header";
import Map from "../components/Map";

const Contact: NextPage = () => {
    return (
    <>    
    <Header/>
    <div className="grid grid-cols-3">
    
        <div>
        <p>(xxx) xxx-xxxx  </p>
            <p>gmoney@wadadli.com</p>
      
        </div>
        <Map/>

        <div>
            <p>this is our addreess</p>
        </div>

     </div>
     </>
)};

export default Contact