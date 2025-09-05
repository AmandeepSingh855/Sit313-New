import React from "react";
import { Dropdown } from "semantic-ui-react";

const SelectPostType = ({ postType, setPostType }) => {
  const options = [
    { key: "q", text: "Question", value: "question" },
    { key: "a", text: "Article", value: "article" },
  ];

  return (
    <Dropdown
      placeholder="Select Post Type"
      fluid
      selection
      options={options}
      value={postType}
      onChange={(e, { value }) => setPostType(value)}
    />
  );
};

export default SelectPostType;
