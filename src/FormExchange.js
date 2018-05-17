import React from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


const FormExchange = ({currency, onChange, availible}) => {
  // console.log(availible);
  return (
    <form>
      <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select currency</ControlLabel>
        <FormControl 
          componentClass="select" 
          placeholder="select" 
          name="currency" 
          onChange={(e)=>onChange(e)}>
          {
            availible.map((item, index) => {
            let selected = (item == currency) ? 'selected' : '';
            return <option value="{item}" key={item+index} selected="{selected}">{item}</option>
            }
          )
          }
        </FormControl>
      </FormGroup>                
    </form>
)}

export default FormExchange;