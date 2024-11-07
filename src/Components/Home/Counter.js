import React from 'react';

const Counter = () => {
  return (
    <section className="counter py-8">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xsm-6">
            <div className="item text-center">
              <span className="count text-3xl font-bold" data-speed="100">500</span>+
              <p className="text-lg mt-2">New Players Per Day</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xsm-6">
            <div className="item text-center">
              <span className="count text-3xl font-bold" data-speed="100">18</span>k
              <p className="text-lg mt-2">Active Players</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xsm-6">
            <div className="item text-center">
              <span className="count text-3xl font-bold" data-speed="100">10</span>+
              <p className="text-lg mt-2">Daily Contests</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xsm-6">
            <div className="item text-center">
              <span className="count text-3xl font-bold" data-speed="100">100</span>k
              <p className="text-lg mt-2">Daily Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
