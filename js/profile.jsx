import React from 'react';


class Profile extends React.Component{
    render (){
        return (
                <div className={'profile-container'}>
                    
                    <img src={'img/IoanaSiAlpacele.JPG'}></img>
                    
                    <div className={'profile'}>
                        <h2> Ioana Trandafir </h2>
                        <p>30 ani</p>
                        <p>ioana.stoica89@gmail.com</p>
                        <p>+40 724 953 293</p>
                        <p>Despre mine: bla nnla</p>
                    </div>
                    
                </div>
                
        )
    }
}

export default Profile;