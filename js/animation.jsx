import React, {SVGAttributes as eye} from 'react';

class Animation extends React.Component {

    constructor(props) {
        super(props);
        this.leftEyeRef = React.createRef();
        this.rightEyeRef = React.createRef();
    }

    handleMove(event) {
        // console.log("I'm in the event!");
        const node = event.target;
        // console.log(node);

        if (node instanceof HTMLElement) {
            // console.log("am ajuns in if");
            const eyes = node.querySelectorAll('.eye');
            // console.log(eyes);
            eyes.forEach(eye => {
               var x =  (eye.offsetLeft) + (eye.offsetWidth / 2);
                var y = (eye.offsetTop) + (eye.offsetHeight / 2);
                var rad = Math.atan2(event.pageX - x, event.pageY - y);
                var rot = (rad * (180 / Math.PI) * -1) + 180;
                eye.style.transform = 'rotate(' + rot + 'deg)';
                eye.style.webkitTransform = 'rotate(' + rot + 'deg)';
            });

        }

    }

    render() {
        return (
            <div className={'animation'} onMouseMove={this.handleMove}>
                <section className={'move-area'}>
                    <div className={'animation-container'}>
                        <div className={'face'}>
                            <div className={'eye'} ref={this.leftEyeRef}></div>
                            <div className={'eye'} ref={this.rightEyeRef}></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Animation;

