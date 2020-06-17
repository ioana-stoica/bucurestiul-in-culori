import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Map from './map.jsx';
import Profile from './profile.jsx';

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {

        state = {
        images: ['/img/wallp1_BW.jpg','/img/wallp1.jpg'],
        selectedImage: '/img/wallp1_BW.jpg'
    };

componentDidMount() {
    let intervalId = setInterval(()=> {
        this.setState(prevState => {
            if (prevState.selectedImage === this.state.images[0]) {
                    return {selectedImage: this.state.images[1]}
            } else {
                return {selectedImage: this.state.images[0]}
            }
        })
    }, 5000)
    this.setState({
        intervalId
    })
}

componentWillUnmount() {
    clearInterval(this.state.intervalId);
}



        render () {
            return ( 
                <div className="main-container" 
                    style={{
                        backgroundImage: `url(${this.state.selectedImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'repeat-y'
                        }}>
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