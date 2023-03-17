import { render } from '@testing-library/react';
import moment from 'moment';

let time =moment().format('MMMM Do YYYY, h:mm:ss a');
let t2 =moment().format('dddd');

function Hello(){
    {
        
    return(<h1>hello</h1>,
    <h2>{time}</h2>,
    <h3>{t2}</h3>
    )
}
}

export default Hello