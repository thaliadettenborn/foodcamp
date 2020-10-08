import React, {useState} from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';


export default function Main(){
    var [activedButton, setStateButton] = useState(false);
    function changeStateButtonToActive(){
        setStateButton(!activedButton)
    }

    return (
        <div>
            <Header />
            <Menu changeStateButton={changeStateButtonToActive}/>
            <Footer activedButton={activedButton} />
        </div>
    )
}