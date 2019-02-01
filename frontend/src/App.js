import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/views/navbar/navbar';
import Home from './components/views/home/home';
import About from './components/views/about/about';
import Blogs from './components/views/blogs/blogs';
import Gallery from './components/views/gallery/gallery';
import Contact from './components/views/contact/contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div class="container-fluid">
              <div class="row full-height">
                  <Navbar />
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/blogs" component={Blogs} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/contact" component={Contact} />
              </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
