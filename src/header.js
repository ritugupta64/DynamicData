import React from 'react';


export class Header extends React.Component{
  render(){
   let x = 'hello';
   let y= 2;
   let para = '';

   if(y>1){
   	para = <p>Test content</p>
   }

    return(
      	<div>
      		
         <h1>Header Goes here</h1>
          Calling the variable here :: {x}
        	<br/>
        	{para}
        	<br/>
        	calling the string here :: {"Test msg"}
        	<br/>
        	using here ternary operator ::{4==3?'yes':'No'}
		</div>
    )
  }
}



