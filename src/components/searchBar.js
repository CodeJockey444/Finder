import React from "react";

class SearchBar extends React.Component {
  state = { searchKey: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onInputSubmit(this.state.searchKey);
  };

  render() {
    return (
      <div className=" container m-5 d-flex mx-auto d-block p-3">
        <form className="w-100" onSubmit={this.handleSubmit}>
          <div className="input-group mb-3 input-group-lg ">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
              onChange={(e) => {
                this.setState({ searchKey: e.target.value });
              }}
              value={this.state.searchKey}
            />
            <div className="input-group-append ">
              <button className="btn btn-bg btn-lg " type="submit">
                <i className="bi bi-search text-white"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
