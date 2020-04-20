import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div className="post">
        <h3>
          {props.name}
        </h3>
        <p>
          {props.content}
        </p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;