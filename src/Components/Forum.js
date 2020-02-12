import React, { Component } from 'react'

class Forum extends Component {
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
                                <a data-toggle="collapse" data-parent="#accordion3" href="#accBody53" id="accHeading53" className="collapsed">Forum</a>
                            </h4>
                        </div>
                        <div className="panel-collapse collapse" id="accBody53" style={{height: "0px"}}>
                            <div className="panel-body">
                                
                            <div className="row"><div className="col-md-12"><div className="form-group brdbot">
			    <h3>Mailing Service to other Groups</h3>
			    <div className="controls col-sm-9">
                    
                <p id="field240" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId35" className="error"></span></div>
                
		</div><div className="form-group">
			    <label className="control-label control-label-left col-sm-3" htmlFor="Search">Search</label>
			    <div className="controls col-sm-9">
                    
                <div id="field241" className="input-group">
        <input type="text" className="form-control" data-role="lookup" id="Search" data-parsley-errors-container="#errId36" />
      <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span></span>
     </div><span id="errId36" className="error"></span>
      </div>   </div>
		<div className="form-group">
			    <p>From Company 1 : Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
			    
                
		</div><div className="form-group">
			    <label className="control-label control-label-left col-sm-3" htmlFor="To">To </label>
			    <div className="controls col-sm-9">
                    
                <select id="To" className="form-control" data-role="select" data-parsley-errors-container="#errId37">
		  <option value=""></option>
		  <option value="Option 1">Company 1</option>
		  <option value="Option 2">Company 2</option>
		  <option value="Option 3">Company 3</option>
		  <option value="Option 4">Company 4</option>
		</select><span id="errId37" className="error"></span></div>
                
		</div><div className="form-group">
			    <label className="control-label control-label-left col-sm-3" htmlFor="Message">Message</label>
			    <div className="controls col-sm-9">
                    
                <textarea id="Message" rows="3" className="form-control k-textbox" data-role="textarea" spellCheck="false" style={{marginTop: "0px" , marginBottom: "0px" , height: "103px"}} data-parsley-errors-container="#errId38"></textarea><span id="errId38" className="error"></span></div>
                
		</div><div className="form-group pull-right">
			    
			    
                
		<button id="button244" type="button" className="btn btn-primary">Sent</button></div>
        
         </div></div></div></div></div>  
       
        )
    }
}

export default Forum
