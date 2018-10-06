import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { dummyAction } from "./actions";
import { connect } from 'react-redux'

export class Images extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <div>
          <h1>
              Hello {this.props.word}!
          </h1>
          <button onClick={this.props.dummyAction}>Change</button>
          <h3>
            {this.props.sentense}
          </h3>
          <div>
            {this.props.data.map(
              d => <p>
                {d.title}
              </p>
            )}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  word: state.dummy.word,
  sentense: state.dummy.sentense,
  data: state.dummy.data
});

const mapDispatchToProps = {
    dummyAction  
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
