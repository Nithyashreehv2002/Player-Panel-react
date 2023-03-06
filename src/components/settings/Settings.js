import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setAllowRegistration,
  setDisableslamswonOnAdd,
  setDisableslamswonOnEdit
} from "../../actions/settingsactions";

class Settings extends Component {
  disableslamswonOnAddChange = () => {
    const { setDisableslamswonOnAdd } = this.props;
    setDisableslamswonOnAdd();
  };

  disableslamswonOnEditChange = () => {
    const { setDisableslamswonOnEdit } = this.props;
    setDisableslamswonOnEdit();
  };

  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  };

  render() {
    const {
      disableslamswonOnAdd,
      disableslamswonOnEdit,
      allowRegistration
    } = this.props.settings;

    return (
      <div style={{backgroundColor:"white",opacity:"0.6",padding:"10px",border:"10px white"}}>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back To Dashboard
            </Link>
          </div>
        </div>

        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Allow Registration</label>{" "}
                <input
                  type="checkbox"
                  name="allowRegistration"
                  checked={!!allowRegistration}
                  onChange={this.allowRegistrationChange}
                />
              </div>

              <div className="form-group">
                <label>Disable slamswon On Add</label>{" "}
                <input
                  type="checkbox"
                  name="disableslamswonOnAdd"
                  checked={!!disableslamswonOnAdd}
                  onChange={this.disableslamswonOnAddChange}
                />
              </div>

              <div className="form-group">
                <label>Disable slamswon On Edit</label>{" "}
                <input
                  type="checkbox"
                  name="disableslamswonOnEdit"
                  checked={!!disableslamswonOnEdit}
                  onChange={this.disableslamswonOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableslamswonOnAdd: PropTypes.func.isRequired,
  setDisableslamswonOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired
};

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }),
  { setAllowRegistration, setDisableslamswonOnAdd, setDisableslamswonOnEdit }
)(Settings);
