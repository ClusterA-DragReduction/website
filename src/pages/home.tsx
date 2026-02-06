import Container from '../components/Section';
import IndexBanner from '../components/indexBanner';
import KeyProduct from '../components/keyProduct';
import Scenario from '../components/Scenario';
import News from '../components/News';
import About from '../components/About';
import Technology from '../components/Technology';  
import Honor from '../components/Honor';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    return  (

      
    <div className="font-sans flex flex-col gap-2">
<Helmet>
        <title>西安芯柔微纳科技 - 仿生微纳材料解决方案</title>
        <meta name="description" content="致力于为高铁、航空、新能源等领域提供先进的仿生微纳功能薄膜材料。国家高新技术企业，多项创新成果落地应用。" />
        <meta name="keywords" content="微纳材料,仿生减阻,微纳疏冰薄膜,微纳减阻薄膜,汽车车衣,无人机防除冰,高铁材料,新能源材料" />

       
      </Helmet>
      

      <IndexBanner />    
      <Container  id="about" bgColor="bg-white"><About/></Container>
      <Container id="technology" bgColor="bg-gradient-to-r from-blue-50 to-indigo-50"><Technology></Technology></Container>
 
      <Container id="keyProduct" bgColor="bg-white"><KeyProduct></KeyProduct></Container>

    <Container id="scenario" bgColor="bg-gradient-to-r from-blue-50 to-indigo-50"> <Scenario></Scenario>   </Container>
     <Container id="honor" bgColor="bg-white"><Honor></Honor></Container>
      
      <News/>
      
  

      
      

    </div>
    )
};

export default Home;