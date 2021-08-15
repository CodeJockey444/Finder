import React from "react";
import config from './config'
import SearchBar from "./searchBar";
import Banner from "./banner";
import ImageList from "./ImageList";
import './home.css'

class App extends React.Component {
  state = { pictures: [] };

  formSubmit = async (input) => {
    const response = await config.get("/search/photos", {
      params: {
        query: input,
        per_page:30,
      },
    });
    try {
      this.setState({ pictures: response.data.results });
    } catch (error) {
      console.log(`Oops,${error}`);
    }
  };
  render() {
    return (
      <div>
        <Banner heading="Finder" note="powered by UNSPLASH"/>
        <SearchBar onInputSubmit={this.formSubmit} />
        <ImageList images={this.state.pictures}/>
        <Banner  note="&copy; All rights reserved" className="footer"/>
        
      </div>
    );
  }
}

export default App;
