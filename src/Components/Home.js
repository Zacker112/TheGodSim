import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
           
                <div className="panel-group" id="accordion3" style={{ display: "block" }}>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion3" href="#accBody5" id="accHeading5" className="collapsed">Home</a>
                      </h4>
                    </div>
                    <div className="panel-collapse collapse" id="accBody5" style={{height: "0px" }}>
                      <div className="panel-body">

                        <div className="row"><div className="col-md-12"><div className="form-group brdbot">
                          <h3>Welcome message</h3>
                          <div className="controls col-sm-9">

                            <p id="field320" data-default-label="Header" data-default-is-header="true" data-control-type="header"></p><span id="errId3" className="error"></span></div>

                        </div><div className="form-group">
                            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>


                          </div></div></div></div>
                    </div>
                  </div>
                </div>
           
        )
    }
}

export default Home
