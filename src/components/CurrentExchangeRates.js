import React from 'react'
import { Form, Field } from 'react-final-form'

const onSubmit = (values) => {
	console.log("onSubmit", values);
};

const CurrentExchangeRates = () => {

	return (
      <Form
	    onSubmit={onSubmit}
	    initialValues={{currency: "USD"}}
        render={({ values }) => {
        	console.log("onRender", values);
          return (
              <div>
                <label>Select currency </label>
                <Field name="currency" component="select">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="RUB">RUB</option>
                </Field>
              	<pre>{JSON.stringify(values, 0, 2)}</pre>
              </div>
          );

        }}
      />
	)
}

export default CurrentExchangeRates;