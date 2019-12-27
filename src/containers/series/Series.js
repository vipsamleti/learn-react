import React, { Component } from "react";
import SeriesNames from '../../components/series_name/SeriesNames'
import Intro from '../../components/intro/Intro'

class Series extends Component{

    state = {
        series: [],
        employeeId: '',
        isFetching: false
    }


    onSeriesIdInputChanges = e => {

        console.log("entered..."+ e.target.value);

        this.setState({ employeeId : e.target.value, isFetching : true});

        if(e.target.value !== ''){

            console.log('http://api.tvmaze.com/search/shows?q='.concat(e.target.value));

            fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
                .then(response => response.json())
                .then(json => this.setState({ series: json, isFetching: false}));
        }
        else{
            this.setState({isFetching: false, series: []});
        }
    }


    render(){

        const {series, employeeId: seriesId, isFetching} = this.state;

        return (
            <div>
                <p>
                    Learning ReactJS...
                </p>
          
                <Intro message = "Here you can find interesting web-series details..."/>

                <div>
                    <input value = {seriesId} 
                            type="text" 
                            onChange={this.onSeriesIdInputChanges}></input>
                </div>

                {
                    !isFetching && seriesId.trim() === ''
                    &&
                    <p>No web-series has been found</p>
                }
                {
                    isFetching && <p>Loading....</p>
                }
                {
                    !isFetching && series.length !== 0 && <SeriesNames list = {this.state.series}/>
                }
                
            </div>
        );
    }
}
export default Series;