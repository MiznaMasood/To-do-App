import React from 'react'
import Practice from './Practice';
import Welcome from './Welcome';

const Conditional = () => {
    const display = true;
return display ? <h1><Practice /></h1> : <Welcome />

}

export default Conditional
