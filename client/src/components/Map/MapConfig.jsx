import React from "react"
import {compose, withProps} from "recompose";
<<<<<<< c48b928c8975ba245f4aa38682ae078e72c8ce7f
<<<<<<< 8e5c83ced4cb2d5eab943bc6f4cd924a775dc0ff
import {GOOGLE_API} from '../../../../env.js';
import {withScriptjs, withGoogleMap, GoogleMap, Marker,Infowindow} from "react-google-maps";
=======
//import {GOOGLE_API} from '../../../../.env';
=======
import {GOOGLE_API} from '../../../../.env';
>>>>>>> working on Rating Component.
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
>>>>>>> fixing minor syntax errors in ProfileComp.jsx

const MyGoogleMap = compose(
  withProps({
    googleMapURL:`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API}&callback=initMap`,
    loadingElement: <div style={{height: `75%`}} />,
    containerElement:<div style={{height: `450px`}}/>,
    mapElement:<div style={{height:`50%`}}/>,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom = {11}
    defaultCenter={{ lat:19.397925, lng:-99.171663}}
  >
  {console.log(props.points)}
  {props.points.map(function(obj){
    return <Marker
            position={{lat:obj.location.coordinates[0],
                       lng:obj.location.coordinates[1]}}
            key={obj._id}
            />
  })}
</GoogleMap>
)

export default MyGoogleMap;
//resize to fit with the result page with vendor card
