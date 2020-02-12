import React, { Component } from 'react'

class Intro extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
           
            <div className="row">
									<div className="col-md-12"><div className="form-group brdbot">
										<h3>Business Simulation [Marketing]</h3>
										<div className="controls col-sm-9">

											<p id="field1" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId1" className="error"></span></div>

									</div><div className="form-group">
											<label className="control-label" htmlFor="CurrentYearAndTimeLeft">Current Year and Time Left</label>
											<div className="controls">

												<span className="k-widget k-timepicker k-header form-control" ><span className="k-picker-wrap k-state-default"><input id="CurrentYearAndTimeLeft" type="text" className="form-control k-input" data-role="time" role="textbox" aria-haspopup="true" aria-expanded="false" aria-owns="field202_timeview" aria-disabled="false" aria-readonly="false" data-error-container="#errfield202" style={{ width: "100%" }} data-parsley-errors-container="#errId2" /><span unselectable="on" className="k-select" role="button" aria-controls="field202_timeview"><span unselectable="on" className="k-icon k-i-clock">select</span></span></span></span><span id="errId2" className="error"></span></div>

										</div><div className="form-group">
											<p>Marketing is the study and management of exchange relationships. It is the business process of creating relationships with and satisfying customers. Because marketing is used to attract customers, it is one of the primary components of business management and commerce.</p>


										</div></div>
								</div>
                                
        )
    }
}

export default Intro
