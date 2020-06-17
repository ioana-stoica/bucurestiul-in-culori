import React from 'react';

class Map extends React.Component{

    componentDidMount () {

    var mymap = L.map('map').setView([51.505, -0.09], 11);

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaW9hbmF0cmFuZGFmaXIiLCJhIjoiY2s2cGJzN3cyMG9kNDNrcDlmNmc5YXpxNCJ9.x4LRclEnrRJxtJvNDvAzqw', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'your.mapbox.access.token'
            }).addTo(mymap);
            mymap.panTo([44.437100, 26.104707]);

    var sector1 = L.polygon([
        [44.539337, 26.104103],
        [44.495810, 25.989911],
        [44.474255, 25.982015],
        [44.481114, 25.994374],
        [44.436761, 26.086041],
        [44.4267674, 26.1025384]
    ], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 0.5
    }).addTo(mymap);

    var sector2 = L.polygon([
        [44.479320, 26.182060],
        [44.487416, 26.105620],
        [44.4267674, 26.1025384],
        [44.442471, 26.197370],
        [44.456105, 26.156559]
    ], {
        color: 'orange',
        fillColor: 'orange',
        fillOpacity: 0.5
    }).addTo(mymap);

    var sector3 = L.polygon([
        [44.4267674, 26.1025384],
        [44.433662, 26.108711],
        [44.440962, 26.193220],
        [44.432137, 26.225492],
        [44.395597, 26.211698],
        [44.394491, 26.179324],
        [44.409376, 26.122493],
        [44.425370, 26.108797]
    ], {
        color: 'yellow',
        fillColor: 'yellow',
        fillOpacity: 0.5
    }).addTo(mymap);

    var sector4 = L.polygon([
        [44.397990, 26.161444],
        [44.408720, 26.122823],
        [44.429324, 26.096838],
        [44.421919, 26.089450],
        [44.403455, 26.097371],
        [44.370803, 26.088299],
        [44.335226, 26.152033],
        [44.343914, 26.165844],
        [44.370048, 26.141896]
    ], {
        color: 'green',
        fillColor: 'green',
        fillOpacity: 0.5
    }).addTo(mymap);

    var sector5 = L.polygon([
        [44.434711, 26.097381],
        [44.433870, 26.059768],
        [44.418336, 26.059633],
        [44.404127, 25.998681],
        [44.380003, 26.040107],
        [44.369833, 26.087768]
    ], {
        color: 'blue',
        fillColor: 'blue',
        fillOpacity: 0.5
    }).addTo(mymap);

    var sector6 = L.polygon([
        [44.440817, 26.071999],
        [44.479204, 26.000146],
        [44.466765, 25.977400],
        [44.457814, 26.015239],
        [44.443094, 26.014602],
        [44.440210, 25.967621],
        [44.407265, 25.976762],
        [44.419261, 26.058394],
        [44.433987, 26.058819]
    ], {
        color: 'indigo',
        fillColor: '#indigo',
        fillOpacity: 0.5
    }).addTo(mymap);


    }



    render (){
        return (
            <div className="map-container" id={'map'}>map</div>
        )
    }
}

export default Map;