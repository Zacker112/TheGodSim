import React, { Component } from 'react'

class News extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
           
            <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion3" href="#accBody275" id="accHeading275" className="collapsed">News</a>
                </h4>
            </div>
            <div className="panel-collapse collapse" id="accBody275" style={{height: "0px"}}>
                <div className="panel-body">
                    
                </div>
            </div>
        </div>
      
        )
    }
}

export default News
