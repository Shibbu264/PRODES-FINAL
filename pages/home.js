import { useState, useEffect } from 'react';
import NavBar from '../components/Navbar';
import Main from '../components/Main';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { getAuth ,onAuthStateChanged} from 'firebase/auth';


export default function Home() {




  const [navbar, setNavbar] = useState(false);

  return (
    <div className="bg-[#11001E]">
     { <NavBar navbar={true} />}
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
