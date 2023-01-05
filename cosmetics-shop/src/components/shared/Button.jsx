import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { title, ...rest } = props;
  const Tag = rest.href ? "a" : "button";

  return (
      <Tag className="button" {...rest}>
        {title}
      </Tag>
  );
};

export default Button;
