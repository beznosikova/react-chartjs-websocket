import React from 'react'
import { FormGroup, FormControl } from 'react-bootstrap';


const FormExchange = ({valueSelected, onChange, availible, children}) => {
  return (
    <form  className="converter-form">
      <h3>{children}</h3>
      <FormGroup controlId="formControlsSelect">
        <FormControl 
          componentClass="select" 
          placeholder="select" 
          value={valueSelected}
          onChange={(e)=>onChange(e)}>
          {availible.map((item, index) => (<option value={item} key={item+index}>{item}</option>))}
        </FormControl>
      </FormGroup>                
    </form>
)}

export default FormExchange;