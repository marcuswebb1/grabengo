import React from "react";
import "./searchForm.css";

const SearchForm = () => {
  return (
    <div className="container">
      <div className="container searchForm rounded">
        <form
          autocomplete="off"
          className="row"
          method="get"
          action="html/pages/all-spaces.html"
        >
          <div className="col-12 col-lg-5">
            <div className="form-group mb-lg-0">
              <div className="input-group input-group-lg mb-lg-0">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  id="search-location"
                  type="text"
                  className="form-control autocomplete"
                  placeholder="Search location"
                  tabindex="1"
                  required=""
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="input-group input-group-lg mb-3 mb-lg-0">
              <div className="input-group-prepend">
                <span className="input-group-text bg-white">
                  <i className="far fa-calendar-alt"></i>
                </span>
              </div>
              <input
                className="form-control datepicker"
                placeholder="Select date"
                type="text"
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <button
              className="btn btn-lg btn-dark btn-block mt-3 mt-md-0 animate-up-2"
              type="submit"
            >
              Discover
            </button>
          </div>
        </form>
        {/* <form className="form-inline">
          <div class="calendar-btn">
            <i class="fas fa-search"></i>
          </div>
          <input
            className="form-control mr-sm-2 rounded-0"
            type="search"
            placeholder="Search for lists / items"
            aria-label="Search"
          />
        </form>
        <form className="form-inline">
          <div class="calendar-btn">
            <i class="far fa-calendar-alt"></i>
          </div>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Select by date"
            aria-label="Search"
          />
        </form>
        <button type="button" class="btn btn-dark btn-lg btn-block mt-3">
          Discover
        </button> */}
      </div>
    </div>
  );
};

export default SearchForm;
