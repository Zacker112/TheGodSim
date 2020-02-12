import React, { Component } from 'react'
import ChildProduct from './ChildProduct'
import Promotion from './Promotion'
import Place from './Place'
import People from './People'
import Price from './Price'

class Decisions extends Component {

    render() {
        return (
           
            <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion3" href="#accBody74" id="accHeading74" className="">Decisions</a>
                </h4>
            </div>
            <div className="panel-collapse collapse in" id="accBody74" style={{ height: "auto" }}>
                <div className="panel-body">

                    <div className="row" id="tab168" data-role="tab">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#tabContent169" data-toggle="tab" id="tabLabel169">Product</a></li>
                            <li className=""><a data-toggle="tab" href="#tabContent170" id="tabLabel170">Promotion</a></li>
                            <li className=""><a href="#tabContent171" data-toggle="tab" id="tabLabel171">Place</a></li><li className=""><a id="tabLabel172" href="#tabContent172" data-toggle="tab">People</a></li><li className=""><a id="tabLabel173" href="#tabContent173" data-toggle="tab">Price</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabContent169"><div className=""><div className="panel-group" id="accordion174">



                            </div>
                            
                            
                                
                               <ChildProduct />
                               
                               </div></div>
                                <Promotion />
                                <Place />
                                    
                                <People />
                                <Price />                                                                                           
                        </div>
                    </div></div>
            </div>
        </div>
        )
    }
}

export default Decisions
