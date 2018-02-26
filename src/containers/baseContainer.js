import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import PropTypes from 'prop-types';
import React from 'react';

class baseContainer extends React.Component {
  renderData() {
    return <div>{this.props.data}</div>;
  }

  render() {
    return (
      <div className="">
          {this.props.data.length > 0
            ?
            this.renderData()
            :
            <div className="">
              No Data
            </div>
          }
      </div>
    );
  }
}

baseContainer.propTypes = {
  actions: PropTypes.object,
  stuffs: PropTypes.array
};

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(baseContainer);
