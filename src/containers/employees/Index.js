import React, { Component } from "react";

class Employees extends Component{


    state = {
        series: []
      }
    
      componentDidMount(){
    
        fetch('	http://dummy.restapiexample.com/api/v1/employees')
          .then(response => response.json())
          .then(json => this.setState({ series: json}))
          .then(json => console.log( this.state.series ));
      }

    render(){
        return (
            
            <div>
                <div>Employees Names : </div>
                <p>The length of series array is : {this.state.series.length} </p>
            </div>
        );
    }
}
export default Employees;