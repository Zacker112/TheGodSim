import React, { Component } from 'react'

class Promotion extends Component {
    

    render() {
        return (
            <div className="tab-pane" id="tabContent170"><div className=""><div className="row"><div className="col-md-12"><div className="form-group">
            <label className="control-label control-label-left col-sm-3" htmlFor="PrintedMediaAdvertising">Printed Media Advertising</label>
            <div className="controls col-sm-9">

                <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" style={{ display: "inline-block" }} id="PrintedMediaAdvertising" placeholder="L" data-parsley-errors-container="#errId16" /><input id="PrintedMediaAdvertising" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield191" style={{ display: "none" }} data-parsley-errors-container="#errId16" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId16" className="error"></span></div>

        </div><div className="form-group">
                <label className="control-label control-label-left col-sm-3" htmlFor="DigitalMediaAdvertising">Digital Media Advertising</label>
                <div className="controls col-sm-9">

                    <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" style={{ display: "inline-block" }} id="DigitalMediaAdvertising" placeholder="M" data-parsley-errors-container="#errId17" /><input id="DigitalMediaAdvertising" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield192" style={{ display: "none" }} data-parsley-errors-container="#errId17" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId17" className="error"></span></div>

            </div><div className="form-group" style={{ display: "block" }}>
                <label className="control-label control-label-left col-sm-3" htmlFor="SpecialGift">Special Gift</label>
                <div className="controls col-sm-9">

                    <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" style={{ display: "inline-block" }} id="SpecialGift" placeholder="N" data-parsley-errors-container="#errId18" /><input id="SpecialGift" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield195" style={{ display: "none" }} data-parsley-errors-container="#errId18" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId18" className="error"></span></div>

            </div><div className="form-group btn-group pull-right group-inline">



                <button id="button388" type="button" className="btn btn-success">Submit</button> <button id="button390" type="button" className="btn btn-danger">Cancel</button> <button id="button391" type="button" className="btn btn-primary">Edit</button>  </div><div className="formControl ui-draggable" style={{ display: "none" }}>
                <img src="/images/ico_numeric.png" />Numeric
</div></div></div></div></div>
        )
    }
}

export default Promotion
