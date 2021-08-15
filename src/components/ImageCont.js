import React from "react";

class ImageCont extends React.Component {
  constructor(props) {
    super(props);
    this.state={spans:0}
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      let height=this.imageRef.current.clientHeight;
      let spans = height/10;
      this.setState({spans:spans})
    });
  }

  render() {
    const { urls, description } = this.props.pics;
    return (
      <div>
        <img
        style={{gridRowEnd:`spans ${this.state.spans}`}}
          src={urls.regular}
          alt={description}
          className="m-3 img-fluid"
          ref={this.imageRef}
        />
      </div>
    );
  }
}

export default ImageCont;
