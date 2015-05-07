var React = require('react');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var Paper = mui.Paper;

var CountDown = React.createClass({

  beginDate: new Date('May 15, 2015, 13:00:00 GMT+0300').getTime(),
  currentDate: new Date().getTime(),

  getInitialState: function(){
    return {
      daysRemaining: Math.floor((this.beginDate - this.currentDate) / (1000 * 60 * 60 * 24)),
      hoursRemaining: Math.floor((this.beginDate - this.currentDate) / (1000 * 60 * 60)),
      minutesRemaining: Math.floor((this.beginDate - this.currentDate) / (1000 * 60))
    };
  },

  render: function () {
    var label =  '';
    var count = this.state.daysRemaining;
    if (this.state.daysRemaining > 0) {
      label = 'DAYS UNTIL ENDAVA OPEN BEGINS';
    } else if (this.state.hoursRemaining > 0) {
      count = this.state.hoursRemaining;
      label = 'HOURS UNTIL ENDAVA OPEN BEGINS';
    } else {
      count = this.state.minutesRemaining;
      label = 'minutes until ENDAVA open begins';
    }
    return (
      <div className="countdown layout vertical center">
        <div className="countdown-timer">
          {count}
        </div>
        <FlatButton link={true} href="#schedule" label={label}/>
      </div>
    );
  }
});

module.exports = CountDown;
