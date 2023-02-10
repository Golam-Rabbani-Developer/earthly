import Allproducts from "./Components/AllProducts/Allproducts";
import Banner from "./Components/Banner/Banner";
import Contacts from "./Components/Contacts/Contacts";
import Features from "./Components/Features/Features";
import Products from "./Components/Products/Products";
import Questions from "./Components/Questions/Questions";
import Videos from "./Components/Videos/Videos";
import Footer from "./Shared/Footer/Footer";
import Header from "./Shared/Header/Header";


function App() {
  return (

    <div className="font-roboto">
      <Header />
      <Banner />
      <div className="w-[95%] mx-auto md:w-[85%] lg:w-[65%]">
        <Products video={false} />
        <Features />
      </div>
      <Videos />
      <div className="w-[95%] mx-auto md:w-[85%] lg:w-[65%]">
        <Questions />
        <Allproducts />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
