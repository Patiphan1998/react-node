import React from 'react'
import '../../../css/style.css'

export default function TopBar() {
    return (
        <div>
            {/* Top bar Start */}
            <div className="top-bar mb-0 rounded mx-auto img-fluid z-depth-1">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-between">
                            <div className="text-left">
                                <i className="fa fa-envelope" />pathipan7149@gmail.com
                            </div>
                            <div className="text-right">
                                <i className="fa fa-phone-alt" />0985686158
                            </div>
                        </div>
                    </div>
                </div>
                {/* Top bar End */}
        </div>
    )
}
