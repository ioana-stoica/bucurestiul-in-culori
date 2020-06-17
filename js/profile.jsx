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
                    </div>
                    <div className={'description'}>Sunt o persoana motivata, calda si pozitiva si imi doresc sa fac o schimbare de cariera in frontend development. In ultimul an am invatat programare prin intermediul unor programe part-time dar si full-time, dedicandu-ma studiului JavaScript, HTML si CSS.</div>
                </div>
                
        )
    }
}

export default Profile;