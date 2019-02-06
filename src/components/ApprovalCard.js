import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content" data-test="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic red button" onClick={props.onClick}>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
