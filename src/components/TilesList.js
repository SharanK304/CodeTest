import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class TilesList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
  }
  componentWillMount(){
    this.setState({
      data: this.props.data
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.data
    })
  }
  render(){
    return(
      <Row>
        <Col lg={12} md={12} sm={12}>
          <label htmlFor="tops" className="header">{this.props.header}</label>
          <ul id="tops">
							{
                this.state.data.length?this.state.data.map((d,i)=>{
                  return(
                    <li key={i}>
      								<div className="tile" tabIndex="1">
      										<img height="100%" src={d.img}/>
      									<button onClick={()=>{this.props.onClick(d)}} className="button button-primary" data-toggle="tooltip" title="Add to favourites">
      										{this.props.button}
      									</button>
      								</div>
      							</li>
                  )
                }):<div className="empty">Please add some recommendations</div>
              }
						</ul>
        </Col>
      </Row>
    );
  }
}

TilesList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array,
  button: PropTypes.string,
  onClick: PropTypes.func
}
