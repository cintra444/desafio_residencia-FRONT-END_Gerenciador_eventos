import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}