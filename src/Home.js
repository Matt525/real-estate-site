import React from 'react'
import './Home.css';
import Property from './Property';
import Grid from '@material-ui/core/Grid';
import $, { data } from 'jquery';
import CircularProgress from '@material-ui/core/CircularProgress';


export default class Home extends React.Component {

    constructor(props){
        super(props);

        this.state = { 
            housingData: [],
            showItems: 6,

        }

    }


    componentDidMount() { 

         // ***************** REALTOR API REQUEST *****************
        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "https://realtor.p.rapidapi.com/mortgage/calculate?hoi=56.0&tax_rate=1.2485549449920654&downpayment=44980&price=224900&term=30.0&rate=3.827",
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "realtor.p.rapidapi.com",
        //         "x-rapidapi-key": "873b045cacmshaa6122090c3fb86p126873jsn7297028c0bb4"
        //     }
        // }
        
        // $.ajax(settings).done(response => {
        //     this.setState({housingData: [response.properties]});
        //     for(let i = 0; i < this.state.housingData[0].length; i++){
        //         let data = this.state.housingData[0][i];
        //         let houses = [...data];
        //         houses ? this.setState({properties: houses}) : console.log("This didn't work");
                
        //     }
            
        // });  


        //****************** ZILLOW API REQUEST *****************************/

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://zillow-com.p.rapidapi.com/properties/nearby/37.788719679657554/-122.40057774847898?lot=true&asc=true&multi_family=true&radius=5&apartment=true&for_sale=true&townhouse=true&recently_sold=true&for_rent=true&page=1&max_price=0&manufactured=true&min_price=0&sort=change&foreclosed=true&single_family=true&condo=true&pre_foreclosure=true",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "zillow-com.p.rapidapi.com",
                    "x-rapidapi-key": "873b045cacmshaa6122090c3fb86p126873jsn7297028c0bb4"
                }
            }

            $.ajax(settings).done(response =>{
                console.log(response.result);
                    let dataArray = [];
            for(let i = 0; i < response.result.length; i++){
                    let obj = {}
                    obj = response.result[i].home;
                    dataArray = [...dataArray, obj];
                    
                    
            }
            this.setState({housingData: dataArray});       
            
        }

    )}    

    
            

    render() {
        // Assigned housing data state to variable for readability.
        let dataLoading = this.state.housingData;
        return ( 
            <div className="container">
                
                <Grid container>

{/* Conditional Rendering. Until state is loaded and API call is finished Loading Component is rendered */}
                    {this.state && dataLoading ?
                        <Property housingData={this.state.housingData} />
                        : <CircularProgress className="loader" />}
                </Grid>
                
            </div>
            
        )
}

}
