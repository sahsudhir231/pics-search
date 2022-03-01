import React from "react";

class ImageCard extends React.Component{
     
    constructor(props){
        super(props);

        this.state={spans:0};

        this.imgeRef = React.createRef();

    }

    componentDidMount(){
        this.imgeRef.current.addEventListener('load',this.setSpans);

    }

    setSpans = () => {
       const height = this.imgeRef.current.clientHeight;
       console.log(height);
       const spans = Math.ceil(height/10);
       this.setState({spans});
    }

    render(){
        const{ description,urls} = this.props.image;
        return(

            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img
                    ref={this.imgeRef}
                    alt={description}
                    src={urls.regular}
                    />
            </div>
        );
    }
}

export default ImageCard;