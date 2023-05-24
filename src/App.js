import ImgProvider from "./Context/ImgProvider";
import Provider from "./Context/Provider";
import RoutesPath from "./Routes/RoutesPath";



function App() {

  return (
    
 
    <Provider>
    <ImgProvider>

 <div className="w-screen h-screen bg-[#4B4949] overflow-auto scrollbar-hide" >
      <div className="pr-[15%] pl-[15%] h-screen"> 
<RoutesPath/>

  </div>
  </div> 
    </ImgProvider>
    </Provider> 
      

  );
}

export default App;
