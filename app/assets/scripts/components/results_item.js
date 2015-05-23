'use strict';
var React = require('react');
var actions = require('../actions/actions');

var ResultsItem = React.createClass({
  prevResult: function(e) {
    e.preventDefault();
    actions.prevResult();
  },
  viewAllResults: function(e) {
    e.preventDefault();
    actions.resultListView();
  },
  nextResult: function(e) {
    e.preventDefault();
    actions.nextResult();
  },

  render: function() {
    var d = this.props.data;
    var pagination = this.props.pagination;

    var isFirst = pagination.current == 1;
    var isLast = pagination.current == pagination.total;

    return (
      <article className="results-single">
        <header className="pane-header">
          <h1 className="pane-title" title="{d.title}">{d.title}</h1>
          <p className="pane-subtitle">{pagination.current} of {pagination.total} results</p>
        </header>
        <div className="pane-body">
          <div className="single-media">
            <img src={'http://lorempixel.com/600/400/?v=' + d._id} alt="Image {pagination.current}" />
          </div>
          <dl className="single-details">
            <dt>Type</dt>
            <dd>Multiscene TMS</dd>
            <dt>Date</dt>
            <dd>2015-05-18</dd>
            <dt>Res</dt>
            <dd>50 cm</dd>
          </dl>
        </div>
        <footer className="pane-footer">
          <ul>
            <li><a href=""><span>thing 1</span></a></li>
            <li><a href=""><span>thing 2</span></a></li>
          </ul>
          <ul>
            <li><a href="#" onClick={this.prevResult} className={isFirst ? 'disabled' : ''}><span>Prev</span></a></li>
            <li><a href="#" onClick={this.viewAllResults}><span>All</span></a></li>
            <li><a href="#" onClick={this.nextResult} className={isLast ? 'disabled' : ''}><span>Next</span></a></li>
          </ul>
        </footer>
      </article>
    );
  }
})

module.exports = ResultsItem;