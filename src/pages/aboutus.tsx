import Team from '../components/Team';
import About from '../components/About';
import Culture from '../components/Culture';
import AboutPage from '../components/AboutPage';
import Honor from '../components/Honor';

const AboutUs = () => {
  return (
    <div className="font-sans flex flex-col gap-2">
      <h1>关于我们</h1>
      <AboutPage></AboutPage>
      <About />
      <Culture />
      <Team/> 
      <Honor/>
      
    </div>
  );
};
export default AboutUs;