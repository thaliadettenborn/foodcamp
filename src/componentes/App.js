import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


export default function App(){
    var [activedButton, setStateButton] = useState(false);
    function changeStateButtonToActive(){
        setStateButton(!activedButton)
    }

    return (
        <div>
            <Header />
            <Main changeStateButton={changeStateButtonToActive}/>
            <Footer activedButton={activedButton} reviewOrder={reviewOrder}/>
        </div>
    )
}

function reviewOrder(){
    console.log('chamou');
}