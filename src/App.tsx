import React, { useEffect } from 'react';
import Menutest from './components/menuTest';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './pages/aboutus';
import Home from './pages/home';
import ContactUs from './pages/contactus';
import BottomAction from './components/bottomAction';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';

// import

function App() {
  useEffect(() => {
    // Update the document title
    document.title = '西安芯柔微纳科技 - 仿生微纳功能材料助力全球节能减排';
    
    // Change favicon dynamically (optional)
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = '/favicon.ico';
    }
  }, []);

  return (

    <Router>
      <div className="App">     
        <Menutest />
        <ChatBot/>        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<AboutUs/>} />     
          <Route path="/contactus" element={<ContactUs/>} />    
          <Route path="/news" element={<NewsList />} />
         <Route path="/news/:slug" element={<NewsDetail />} /> 
        </Routes>
        <BottomAction/>
        <Footer /> 
       
      </div>

    </Router>

  
//     <div className="font-sans flex flex-col gap-2">
//       {/* <Header />
//       <Hero />
//       <Services />
//       <About />
//       <Awards />
//       <Team />
//       <Testimonials />
//       <Contact />
//       <Footer /> */}
//       <IndexBanner />
// {/* <MenusTest /> */}

//       {/* //<Menu/>
//       <Menutest></Menutest>
//       <About/>
//       <Culture/>
//       <KeyProduct></KeyProduct>
//       <Team/>
//      <Scenario></Scenario>
//      <ChatBot></ChatBot>
//       <Awards />    
//       <News/>
//       <Footer />  */}

      
      

//     </div>
  );
}

export default App;