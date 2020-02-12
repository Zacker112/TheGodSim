import React, { Component } from 'react'

class Team extends Component {
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
                                <a data-toggle="collapse" data-parent="#accordion3" href="#accBody113" id="accHeading113" className="collapsed">Team</a>
                            </h4>
                        </div>
                        <div className="panel-collapse collapse" id="accBody113" style={{height: "0px"}}>
                            <div className="panel-body">
                                
                            <div className="row"><div className="col-md-6"><div className="form-group">
			    <label className="control-label" htmlFor="NumberOfMembers">Number of Members</label>
			    <div className="controls">
                    
                <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" id="NumberOfMembers" style={{display: "inline-block"}} data-parsley-errors-container="#errId4" /><input id="NumberOfMembers" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield165" style={{display: "none"}} data-parsley-errors-container="#errId4" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId4" className="error"></span></div>
                
		</div></div><div className="col-md-6"></div></div><div className="row"><div className="col-md-12"><div className="form-group">
			    <label className="control-label control-label-left col-sm-3" htmlFor="NameOfTeam">Name of Team</label>
			    <div className="controls col-sm-9">
                    
                <textarea id="NameOfTeam" rows="3" className="form-control k-textbox" data-role="textarea" style={{marginTop:"0px",marginBottom: "0px", height: "36px"}} data-parsley-errors-container="#errId5"></textarea><span id="errId5" className="error"></span></div>
             </div>   
		</div><div className="form-group">
			    <label className="control-label control-label-left col-sm-3" htmlFor="NameOfMember">Name of Member</label>
			    <div className="controls col-sm-9">
                    
                <input id="NameOfMember" type="text" className="form-control k-textbox" data-role="mask" data-parsley-errors-container="#errId6" /><span id="errId6" className="error"></span></div>
                
		</div><div className="form-group">
			    <label className="control-label control-label-left col-sm-3" htmlFor="AssignRole">Assign Role</label>
			    <div className="controls col-sm-9">
                    
                <select id="AssignRole" className="form-control" data-role="select" data-parsley-errors-container="#errId7">
		  <option value=""></option>
		  <option value="Option 1">Option 1</option>
		  <option value="Option 2">Option 2</option>
		  <option value="Option 3">Option 3</option>
		  <option value="Option 4">Option 4</option>
		</select><span id="errId7" className="error"></span></div>
                
		</div><div className="form-group group-inline btn-group pull-right">
			    
			    
                
		<button id="button316" type="button" className="btn btn-success">Summit</button> <button id="button318" type="button" className="btn btn-danger">Cancel</button> </div></div></div></div>
                        </div>
                    
        )
    }
}

export default Team
