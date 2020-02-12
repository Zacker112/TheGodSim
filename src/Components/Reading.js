import React, { Component } from 'react'

class Reading extends Component {
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
                        <a data-toggle="collapse" data-parent="#accordion3" href="#accBody63" id="accHeading63" className="collapsed">Reading</a>
                    </h4>
                </div>
                <div className="panel-collapse collapse" id="accBody63" style={{ height: "0px" }}>
                    <div className="panel-body">

                        <div className="row"><div className="col-md-12"><div className="form-group">
                            <label className="control-label control-label-left col-sm-3" htmlFor="SearchArticle">Search article</label>
                            <div className="controls col-sm-9">

                                <div id="field263" className="input-group">
                                    <input type="text" className="form-control" data-role="lookup" id="SearchArticle" data-parsley-errors-container="#errId32" />
                                    <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
                                  
                                    </div> <span id="errId32" className="error"></span></div>


                                  </div>
                                    <div className="form-group brdbot">
                                        <h3>What are the 5 marketing concepts?</h3>
                                        <div className="controls col-sm-9">

                                            <p id="field259" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId33" className="error"></span></div>

                                    </div><div className="form-group">
                                        <p>Production Concept,
                        Product Concept,
                        Selling Concept,
                        Marketing Concept,
Societal Marketing Concept.</p>


</div> </div>  </div>
<div className="row"><div className="col-md-12"><div className="form-group brdbot">
                                        <h3>What are the 7 principles of marketing?</h3>
                                        <div className="controls col-sm-9">

                                            <p id="field261" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId34" className="error"></span></div>

                                    </div><div className="form-group">
                                            <p>The 7 Ps of Marketing. Once you've developed your marketing strategy, there is a "Seven P Formula" you should use to continually evaluate and reevaluate your business activities. These seven are: product, price, promotion, place, packaging, positioning and people.</p>


                                        </div></div></div>

                                   
                              
                                </div>
                                </div>
                                </div>

                              
        )
    }
}

export default Reading
