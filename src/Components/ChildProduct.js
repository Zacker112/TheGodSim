import React, { Component } from 'react'

class ChildProduct extends Component {

    render() {
        return (
            <>
            <div className="row" id="tab288" data-role="tab">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#tabContent289" data-toggle="tab" id="tabLabel289">Product 1</a></li>
                    <li className=""><a data-toggle="tab" href="#tabContent290" id="tabLabel290">Product 2</a></li>
                    <li className=""><a href="#tabContent291" data-toggle="tab" id="tabLabel291">Product 3</a></li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tabContent289"><div className=""></div></div>
                    <div className="tab-pane" id="tabContent290"><div className=""></div></div>
                    <div className="tab-pane" id="tabContent291"><div className=""></div></div>
                </div>
            </div>
            <div className="row"><div className="col-md-12"><div className="form-group" style={{ display: "block" }}>
                <label className="control-label control-label-left col-sm-3" htmlFor="DesignLevel">Design Level</label>
                <div className="controls col-sm-9">

                    <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" id="DesignLevel" style={{ display: "inline-block" }} placeholder="A [P1,P2,P3]" data-parsley-errors-container="#errId9" /><input id="DesignLevel" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield219" style={{ display: "none" }} data-parsley-errors-container="#errId9" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId9" className="error"></span></div>

            </div><div className="form-group" style={{ display: "block" }}>
                    <label className="control-label control-label-left col-sm-3" htmlFor="TechnologyLevel">Technology Level</label>
                    <div className="controls col-sm-9">

                        <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" style={{ display: "inline-block" }} id="TechnologyLevel" placeholder="B [P1,P2,P3]" data-parsley-errors-container="#errId10" /><input id="TechnologyLevel" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield216" style={{ display: "none" }} data-parsley-errors-container="#errId10" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId10" className="error"></span></div>

                </div><div className="form-group" style={{ display: "block" }}>
                    <label className="control-label control-label-left col-sm-3" htmlFor="EcologyLevel">Ecology Level</label>
                    <div className="controls col-sm-9">

                        <span className="k-widget k-numerictextbox form-control" ><span className="k-numeric-wrap k-state-default"><input type="text" className="k-formatted-value form-control k-input" tabIndex="0" aria-disabled="false" aria-readonly="false" style={{ display: "inline-block" }} id="EcologyLevel" placeholder="C [P1,P2,P3]" data-parsley-errors-container="#errId11" /><input id="EcologyLevel" value="" type="text" className="form-control k-input" data-role="numeric" data-format="integer" role="spinbutton" aria-valuenow="" aria-disabled="false" aria-readonly="false" data-error-container="#errfield217" style={{ display: "none" }} data-parsley-errors-container="#errId11" /><span className="k-select"><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-n" title="Increase value">Increase value</span></span><span unselectable="on" className="k-link"><span unselectable="on" className="k-icon k-i-arrow-s" title="Decrease value">Decrease value</span></span></span></span></span><span id="errId11" className="error"></span></div>

                </div><div className="form-group" rel="popover" data-trigger="hover" data-content="D [P1,P2,P3]" data-original-title="">
                    <label className="control-label control-label-left col-sm-3" htmlFor="QualityControlLevel">Quality Control Level</label>
                    <div className="controls col-sm-9">

                        <select id="QualityControlLevel" className="form-control" data-role="select" selected="selected" data-parsley-errors-container="#errId12">





                            <option value="D [P1,P2,P3]"></option><option value="1 Sigma">1 Sigma</option><option value="2 Sigma">2 Sigma</option><option value="3 Sigma">3 Sigma</option><option value="4 Sigma">4 Sigma</option><option value="5 Sigma">5 Sigma</option><option value="">6 Sigma</option></select><span className="help-block">D [P1,P2,P3]</span><span id="errId12" className="error"></span></div>

                </div><div className="form-group" style={{ display: "block" }}>
                    <label className="control-label control-label-left col-sm-3">Availability</label>
                    <div className="controls col-sm-9">

                        <label className="radio col-md-4" htmlFor="radio222"><input type="radio" value="Option 1" id="radio222" name="field221" data-parsley-errors-container="#errId13" />High</label><label className="radio col-md-4" htmlFor="radio223"><input type="radio" value="Option 2" id="radio223" name="field221" data-parsley-errors-container="#errId13" />Normal</label><label className="radio col-md-4" htmlFor="radio224"><input type="radio" value="Option 3" id="radio224" name="field221" data-parsley-errors-container="#errId13" />Low</label><span className="help-block">E [P1,P2,P3]</span><span id="errId13" className="error"></span></div>

                </div><div className="form-group" style={{ display: "block" }}>
                    <label className="control-label control-label-left col-sm-3">Guarantee</label>
                    <div className="controls col-sm-9">

                        <label className="radio col-md-4" htmlFor="radio227"><input type="radio" value="Option 1" id="radio227" name="field226" data-parsley-errors-container="#errId14" />1 month</label><label className="radio col-md-4" htmlFor="radio228"><input type="radio" value="Option 2" id="radio228" name="field226" data-parsley-errors-container="#errId14" />6 months</label><label className="radio col-md-4" htmlFor="radio229"><input type="radio" value="Option 3" id="radio229" name="field226" data-parsley-errors-container="#errId14" />12 months</label><span className="help-block">F [P1,P2,P3]</span><span id="errId14" className="error"></span></div>

                </div><div className="form-group" style={{ display: "block" }}>
                    <label className="control-label control-label-left col-sm-3">Cover area</label>
                    <div className="controls col-sm-9">

                        <label className="checkbox col-md-4" htmlFor="checkbox232"><input type="checkbox" value="Replace" id="checkbox232" name="field231" data-parsley-errors-container="#errId15" />Replace</label><label className="checkbox col-md-4" htmlFor="checkbox233"><input type="checkbox" value="Spare Parts" id="checkbox233" name="field231" data-parsley-errors-container="#errId15" />Spare Parts</label><label className="checkbox col-md-4"><input id="checkbox239" name="field231" type="checkbox" value="Service" data-parsley-errors-container="#errId15" />Service</label><span id="errId15" className="error"></span></div>

                </div><div className="form-group btn-group pull-right group-inline">



                    <button id="button393" type="button" className="btn btn-success">Submit</button> <button id="button395" type="button" className="btn btn-danger">Cancel</button> <button id="button396" type="button" className="btn btn-primary">Edit</button>  </div></div></div>
                    </>
        )
    }
}

export default ChildProduct
