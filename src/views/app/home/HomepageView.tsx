import CarouselDesktop from '../../../components/CarouselDesktop/CarouselDesktop';
import Footer from '../../../components/Footer/Footer';
import Navbar from '../../../components/Navbar/Navbar';
import Card from '../../../components/Card/Card';
import './homepageView.css';

function HomepageView() {

    return (
      <>
        <Navbar></Navbar>
        <h1 className='titre'>Créez Ton Championnat</h1>
        <h2 className='sous_titre'>CTC, la plateforme qui t’aide à organiser tes compétitions sportives!</h2>
        <div className='cards'>
            <Card 
                title='Consulter les championnats'
                linkUrl='/championnats'
                backgroundImage='https://images.unsplash.com/photo-1579449446519-80bbec97a932?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            </Card>
            <Card 
                title="S'inscrire"
                linkUrl='/inscription'
                backgroundImage='https://images.unsplash.com/photo-1631495634750-0f14320bc0a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            </Card>
            <Card 
                title='Se connecter'
                linkUrl='/connexion'
                backgroundImage='https://images.unsplash.com/photo-1520399636535-24741e71b160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
            </Card>
        </div>
        
        <Footer></Footer>
        <CarouselDesktop></CarouselDesktop>
      </>
    )
  }
  
  export default HomepageView;
  