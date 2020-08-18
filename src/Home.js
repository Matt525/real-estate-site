import React from 'react'
import './Home.css';
import Property from './Property';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery'; 

export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            housingData: "",
        }
        

    }

    componentDidMount() { 
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://realtor.p.rapidapi.com/properties/v2/list-for-rent?sort=relevance&city=New%20York%20City&state_code=NY&limit=200&offset=0",
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "realtor.p.rapidapi.com",
                "x-rapidapi-key": "f76ca2b1c4msh33c4abca334d588p16879ajsn952b22a139fd"
            }
        }
        
        $.ajax(settings).done(response => {
            for(let i = 0; i < response.properties.length; i++){
                let data = response.properties[i];
                this.setState({housingData: data})
            } 
        });        
    }

    render() {
        return ( 
            <div className="container">
                <Grid container>
                        <Property housingData={this.state.housingData} />
                </Grid>
            </div>
        )
}

}
