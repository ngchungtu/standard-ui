import './App.css';
import 'remixicon/fonts/remixicon.css'
import ProductList from './components/ProductList';
import CarouselComponent from './components/CarouselComponent';

function App() {

  return (
    <div className="App">
      <div className='App_carousel'>
        <CarouselComponent />
      </div>
      <div className='App_productList'>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
