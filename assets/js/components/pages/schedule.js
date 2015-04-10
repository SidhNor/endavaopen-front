var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var Card = require('../controls/card');
var ScheduleIcon = require('../controls/schedule-icon');

var SchedulePage = React.createClass({
  render: function () {
    return (
      <div className="mui-app-content-canvas">
        <section className="page-section">
          <Card>
            <h4>Friday, May 15</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">13:00 - 13:30</span>
                  <span>Opening Ceremony</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">13:30 - 21:30</span>
                  <span>1st Round</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Saturday, May 16</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">09:00 - 15:00</span>
                  <span>2nd Round</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">15:00 - 18:00</span>
                  <span>Quarter-finals Doubles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">18:00 - 21:00</span>
                  <span>Quarter-finals Singles</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
        <section className="page-section">
          <Card>
            <h4>Sunday, May 17</h4>
            <div className="layout horizontal">
              <ScheduleIcon className="schedule"/>
              <div className="schedule-rows">
                <div className="layout horizontal">
                  <span className="schedule-time">10:00 - 12:00</span>
                  <span>Semi-finals Singles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">13:00 - 14:00</span>
                  <span>Semi-finals Doubles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">14:00 - 16:00</span>
                  <span>Finals Singles</span>
                </div>
                <div className="layout horizontal">
                  <span className="schedule-time">16:00 - 18:00</span>
                  <span>Finals Doubles</span>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    );
  }
});

module.exports = SchedulePage;
