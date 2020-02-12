import React, { Component } from 'react'

class Price extends Component {

    render() {
        return (
            <div className="tab-pane" id="tabContent173"><div className=""><div className="row"><div className="col-md-12"><div className="row" id="tab211" data-role="tab">
                <ul className="nav nav-tabs">
                    <li className=""><a href="#tabContent212" data-toggle="tab" id="tabLabel212">Product 1</a></li>
                    <li className=""><a data-toggle="tab" href="#tabContent213" id="tabLabel213">Product 2</a></li>
                    <li className=""><a href="#tabContent214" data-toggle="tab" id="tabLabel214">Product 3</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane" id="tabContent212"><div className=""></div></div>
                    <div className="tab-pane" id="tabContent213"><div className=""></div></div>
                    <div className="tab-pane" id="tabContent214"><div className=""></div></div>
                </div>
            </div><div className="form-group">
                    <label className="control-label control-label-left col-sm-3" htmlFor="SellingPrice">Selling Price</label>
                    <div className="controls col-sm-9">

                        <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" id="SellingPrice" style={{ display: "inline-block" }} placeholder="T" data-parsley-errors-container="#errId29" /><input id="SellingPrice" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield196" style={{ display: "none" }} data-parsley-errors-container="#errId29" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId29" className="error"></span></div>

                </div><div className="form-group">
                    <label className="control-label control-label-left col-sm-3" htmlFor="DiscountAmount">Discount Amount</label>
                    <div className="controls col-sm-9">

                        <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" id="DiscountAmount" style={{ display: "inline-block" }} placeholder="U" data-parsley-errors-container="#errId30" /><input id="DiscountAmount" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield198" style={{ display: "none" }} data-parsley-errors-container="#errId30" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId30" className="error"></span></div>

                </div><div className="form-group">
                    <label className="control-label control-label-left col-sm-3" htmlFor="FreeOfChargeAmount">Free of Charge Amount</label>
                    <div className="controls col-sm-9">

                        <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" id="FreeOfChargeAmount" placeholder="10 1, 10 2, 10 3, etc V" style={{ display: "inline-block" }} data-parsley-errors-container="#errId31" /><input id="FreeOfChargeAmount" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield199" style={{ display: "none" }} data-parsley-errors-container="#errId31" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId31" className="error"></span></div>

                </div><div className="form-group btn-group group-inline pull-right">



                    <button id="button368" type="button" className="btn btn-success">Submit</button> <button id="button370" type="button" className="btn btn-danger">Cancel</button> <button id="button381" type="button" className="btn btn-primary">Edit</button>  </div></div></div></div></div>
        )
    }
}

export default Price
