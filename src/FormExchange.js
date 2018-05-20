import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';


const FormExchange = ({currency, onChange, availible}) => {
  return (
    <form  className="converter-form">
      <h3>Select currency</h3>
      <FormGroup controlId="formControlsSelect">
        <FormControl 
          componentClass="select" 
          placeholder="select" 
          name="currency" 
          value={currency}
          onChange={(e)=>onChange(e)}>
          {availible.map((item, index) => (<option value={item} key={item+index}>{item}</option>))}
        </FormControl>
      </FormGroup>                
    </form>
)}

export default FormExchange;