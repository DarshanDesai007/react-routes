import React, { Component } from 'react';
import { Route ,Routes} from 'react-router-dom';
import Home from './home';
import Book from './book';
import Hello from './main';
import Notfound from './404';
import New from './new';


class App extends Component {
  render() {
    return (
      <>
          <Routes>
            <Route path= "/" element={<Home />} />
            <Route path= "/book" element={<Book />} />
            <Route path= "/main" element={<Hello />} />
            <Route path="*" element={<Notfound />} />
            <Route path="/new" element={<New />} />
          </Routes>
          </>
        
    );
  }
}

export default App;