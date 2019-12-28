import React, {Component} from 'react'

class SingleSeries extends Component{

    state = {
        singleSeriesJson: null
    }

    componentDidMount(){

        const {id} = this.props.match.params;

        console.log('https://api.tvmaze.com/shows/'.concat(id).concat('?embed=episodes'));

        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
                .then(response => response.json())
                .then(json => this.setState({ singleSeriesJson: json}));


        console.log(this.state.singleSeriesJson);        
    }

    render(){
        
        const {singleSeriesJson} = this.state;

        return(
            <div>
                <a href="/learn-react">search more</a>
                {
        
                    singleSeriesJson !== null
                    &&
                    <div>
                        <h1>{singleSeriesJson.name}</h1>
                        <p>Premiered : {singleSeriesJson.premiered}</p>
                        <p>Ratings : {singleSeriesJson.rating.average}</p>
                        <p>Episodes : {singleSeriesJson._embedded.episodes.length}</p>
                        <p>
                            <img alt= "shosingleSeriesJsonw" src={singleSeriesJson.image.medium}></img>
                        </p>
                    </div>

                    
                }

            </div>
        );
    }
}

export default SingleSeries;