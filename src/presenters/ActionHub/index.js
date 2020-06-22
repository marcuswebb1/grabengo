import React from "react";
import "./actionHub.css";
import { Link } from 'react-router-dom'

const ActionHub = () => {
  return (
    <div className="container">
      <div className="row actionHub my-4">
        <div className="col-6 col-lg-3">
          {/* Icon box 1*/}

          <div className="icon-box text-center text-muted">
            <div className="icon icon-primary icon-xl">
              <i className="fas fa-clock"></i>
            </div>
            <h6 className="font-weight-normal text-gray mt-4 mb-3">
              Recent searches
            </h6>
          </div>

          {/* End of Icon box 1 */}
        </div>
        <div className="col-6 col-lg-3">
          {/* Icon box 2 */}

          <Link to="/createNewList">
          <div className="icon-box text-center text-primary">
            <div className="icon icon-primary icon-xl">
              <i className="fas fa-scroll"></i>
            </div>
            <h6 className="font-weight-normal text-gray mt-4 mb-3">
              Create New List
            </h6>
          </div>
          </Link>

          {/* End of Icon box 2 */}
        </div>
        <div className="col-6 col-lg-3">
          {/* Icon box 3 */}

          <div className="icon-box text-center text-muted">
            <div className="icon icon-primary icon-xl">
              <i className="fas fa-binoculars"></i>
            </div>
            <h6 className="font-weight-normal text-gray mt-4 mb-3">
              View List
            </h6>
          </div>

          {/* End of Icon box 3 */}
        </div>
        <div className="col-6 col-lg-3">
          {/* Icon box 4 */}

          <div className="icon-box text-center text-muted">
            <div className="icon icon-primary icon-xl">
              <i className="fas fa-share-square"></i>
            </div>
            <h6 className="font-weight-normal text-gray mt-4 mb-3">
              Share Lists
            </h6>
          </div>

          {/* End of Icon box 4 */}
        </div>
      </div>
    </div>
  );
};

export default ActionHub;
