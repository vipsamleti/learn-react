import React from 'react';
import './SeriesList.css';
import { Link } from 'react-router-dom';

const SeriesListItem  = ({series}) => (

    <li>
        <Link to = {`/series/${series.show.id}`}>
            {series.show.name}
        </Link>
    </li>
)

const SeriesNames = (props) => {

    return(
        <div>
            Web-Series Names:
            <ul>
                {props.list.map(series  =>(
                    <li key = {series.show.id} className="listNames">
                        
                        <SeriesListItem series = {series} key={series.show.id}/>
                    
                    </li>
                ))}
                
            </ul>
        </div>
    );
}

export default SeriesNames;