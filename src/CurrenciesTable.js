import React from 'react'
import { Table } from 'react-bootstrap';

const CurrenciesTable = ({curenciesList, currency}) => {

	if (!Object.keys(curenciesList).length){
	  return (
	    <div>Loading...</div>
	    );
	}
	return (
		<Table responsive>
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>Name</th>
		      <th>Value</th>
		    </tr>
		  </thead>
		  <tbody>
	    	{Object.values(curenciesList).map((item,index) => (
	    		<tr key={item.id}>
	    			<td>{index+1}</td>
	            	<td>{item.name}</td>
	            	<td>{Number.parseFloat(item.quotes[currency]['price']).toFixed(2)}</td>
            	</tr>
	        ))}
		  </tbody>
		</Table>
	)
}

export default CurrenciesTable;