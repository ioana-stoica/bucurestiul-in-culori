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
                    <div className={'description'}>
                    Sunt o persoana motivata, calda si pozitiva si imi doresc sa fac o schimbare de cariera in frontend development. 
                    Fiind farmacist in ultimii 7 ani, am avut ocazia sa imi imbunatatesc abilitatile de comunicare prin intermediul contactului cu diverse tipologii de oameni (pacienti, colegi, reprezentanti medicali).     
                    In ultimul an am invatat programare prin intermediul unor programe part-time dar si full-time, dedicandu-ma studiului JavaScript (React.js), HTML si CSS (Sass).
                    
                    
                    
                    </div>
                </div>
                
        )
    }
}

export default Profile;