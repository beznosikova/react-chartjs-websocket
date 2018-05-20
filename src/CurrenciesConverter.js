import React, { Component } from 'react'
import { FormGroup, FormControl, Grid, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const REMOTE_URL = "https://api.coinmarketcap.com/v2/ticker/";
const LIMIT = 5;

class  CurrenciesConverter extends Component {

  state = {
    value: '',
    cryptoCurenciesList: {},
    convertRezult: ''
  }

  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value, 'convertRezult':'' });
  }

  handleKeyPress(e) {
    if (/[-+e,.]{1}/.test(e.key))
      e.preventDefault();
  }

  handleSubmit(e){
    const {cryptoCurency, curency, value} = this.state;
    axios.get(`${REMOTE_URL+cryptoCurency}/?convert=${curency}`)
      .then(res => {
        const convertData = res.data.data;
        let rezult = Number.parseFloat(value * convertData['quotes'][curency]['price']).toFixed(2);
        let convertRezult = rezult + " " +curency;
        this.setState({
          convertRezult
        });        
      })    
    e.preventDefault();
  }

  componentWillMount() {
    const curency = this.props.availible[0];
    axios.get(`${REMOTE_URL}?&limit=${LIMIT}`)
      .then(res => {
        const cryptoCurenciesList = res.data.data;
        this.setState({
          cryptoCurenciesList, 
          cryptoCurency: Object.keys(cryptoCurenciesList)[0],
          curency});
      })
  }  

  render (){
    const {availible} = this.props;
    const {cryptoCurenciesList, cryptoCurency, curency, value, convertRezult} = this.state;

    return (      
      <form 
        className="converter-form"
        onSubmit={this.handleSubmit.bind(this)}
        >
      <h3>Cryptocurrency converter calculator</h3>

        <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6} sm={12}>
            <FormGroup
              controlId="formBasicText"
            >
              <FormControl
                type="number"
                name="value"
                value={value}
                placeholder="Enter number"
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleKeyPress}
                min="0"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={6} sm={12}>
            <FormGroup>
              <FormControl 
                name='cryptoCurency'
                value={cryptoCurency}
                onChange={this.handleChange.bind(this)}
                componentClass="select" 
                >
                {Object.values(cryptoCurenciesList).map(
                  (item, index) => (<option value={item.id} key={index}>{item.name}</option>)
                  )}
              </FormControl>
            </FormGroup>      
          </Col>    
          <Col xs={6} md={6} sm={12}>
            <FormGroup>
              <FormControl 
                componentClass="select"
                name='curency'
                value={curency}
                onChange={this.handleChange.bind(this)}
              >
                {availible.map((item, index) => 
                  (<option value={item} key={item+index}>{item}</option>))}
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={4} md={4} sm={12}>
            {(value.length > 0) && `${value} ${cryptoCurenciesList[cryptoCurency]['name']}`}
          </Col>
          <Col xs={4} md={4} sm={12}>
            <Button type="submit" disabled = {value.length===0}>Calculate</Button>          
          </Col>          
          <Col xs={4} md={4} sm={12}>{(convertRezult.length > 0) && `${convertRezult}`}</Col>
        </Row>               
        </Grid>

      </form>    

    )
  }
}

export default CurrenciesConverter;