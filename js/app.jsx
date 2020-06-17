import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Map from './map.jsx';
import Profile from './profile.jsx';

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        render () {
            return ( 
                <div className="main-container">
                    <Header/> 
                    <Map/>
                    <Profile/>
                </div>
            )
        }
    }

ReactDOM.render(
        <App />,
        document.getElementById('app')
    )

})