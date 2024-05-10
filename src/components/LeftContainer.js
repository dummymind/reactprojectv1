import React from 'react';

function LeftContainer() {
    return (
        <div className="leftcontainer d-flex flex-column progress-bar bg-white rounded-end" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ minHeight: '500px' }}>
            <div className="leftsearchbox">
                <div className="container-fluid d-flex align-items-center statuscontainer">
                    <h6 className="calendar-headerh6 mr-2">Status</h6>
                    <div className="input-group input-group-search">
                        <input type="text" className="form-control form-control-search" placeholder="" />
                        <div className="input-group-append">
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Draft X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Under review X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Open Event X</button>
                            <button type="button" className="btn btn-outline-secondary search-button crossbuttons">Family Attendance Confirmed X</button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid d-flex align-items-center">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="input-group mb-3">
                                <label htmlFor="searchInput" className="input-group-text" >Search</label>
                                <input type="text" className="form-control" id="searchInput" placeholder="Type a keyword &#x1F50E;" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group mb-3">
                                <label htmlFor="dateInput" className="input-group-text">Date</label>
                                <input type="date" className="form-control" id="dateInput" placeholder="Date &#x1F4C5;" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="input-group mb-3">
                                <label className="input-group-text" htmlFor="inputGroupFile01">Sort By</label>
                                <select className="form-select" aria-label="Sort By">
                                    <option selected>Newest</option>
                                    <option value="older">Older</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listitems"></div>
            <div className="paging align-items-center">
                <span className="centered-text">1-1 OF 1 ELEMENTS</span>
            </div>
        </div>
    );
}

export default LeftContainer;
