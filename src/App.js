import React, {Component} from 'react';
import Headers from './components/Headers';
import ProductsContainer from './containers/ProductsContainer';
import MessageContainer from './containers/MessageContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer'
class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <Headers />
                    <main id="mainContainer">
                        <div className="container">
                            <ProductsContainer />
                            <MessageContainer />
                            <CartContainer />
                        </div>
                    </main>
                    <Footer />
                    </div>
            </div>
        );
    }
}

export default App;
