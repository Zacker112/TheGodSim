import React, { Component } from 'react'

import TheRest from './TheRest'

class BusinessSimulation extends Component {
   

    render() {
        return (
            <div className="container-fluid">
            <div className="row">

                <form action="../submit" id="formentry" className="form-horizontal" role="form" data-parsley-validate noValidate>
                    <div className="container-fluid shadow">
                        <div className="row">
                            <div id="valErr" className="row viewerror clearfix hidden">
                                <div className="alert alert-danger">Oops! Seems there are some errors..</div>
                            </div>
                            <div id="valOk" className="row viewerror clearfix hidden">
                                <div className="alert alert-success">Yay! ..</div>
                            </div>

                            <TheRest />
                          
                        </div> </div></form></div></div>
        )
    }
}

export default BusinessSimulation
