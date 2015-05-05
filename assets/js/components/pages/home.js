var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var FlatButton = mui.FlatButton;
var Card = require('../controls/card.js');
var PageTransitionMixin = require('../controls/pagetransition-mixin');
var CountDown = require('../controls/countdown');

var HomePage = React.createClass({

  mixins: [
    PageTransitionMixin
  ],

  render: function () {
    var classes = React.addons.classSet(this.getCurrentAnimClasses(), 'mui-app-content-canvas');
    return (
      <div className={classes}>
        <Card>
          <h3>
            Endava Open is always magical and this year will be no different.
          </h3>
          <div className="layout vertical">
            This is a unique opportunity where representatives across our Endava units meet for some great time together, to share Endava experiences from different locations, and of course to fight for the Endava Championship Title
          </div>
        </Card>
        <section className="onsite-pic"></section>
        <section className="open-begins layout flex vertical">
          <h2>Endava Open begins May 15 1:00 PM EEST</h2>
          <CountDown/>
        </section>
      </div>
    );
  }
});

module.exports = HomePage;

/*
 <div className="layout flex sidebyside">
 <Card className="flex">
 <span>
 <h4>Exclusive opening and closing cerempony</h4>
 <h4>Wonderful atmosphere</h4>
 <h4>Enthusiastic supporters</h4>
 <h4>Engaging discussions</h4>
 </span>
 </Card>
 <Card className="flex" fullScreenFirst={true}>
 <div className="card-photo drawing flex"></div>
 <div>
 <img className="play-button" src="images/play-video-button.png" alt="2014 drawing"/>
 <FlatButton link={true} primary={true} label="Watch the 2014 Endava Open Drawing"/>
 </div>
 </Card>
 </div>

 */
