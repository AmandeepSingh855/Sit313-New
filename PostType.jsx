import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

const PostType = () => {
  const [postType, setPostType] = useState("question");
  const [question, setQuestion] = useState({ title: "", details: "", tags: "" });

  const handleChange = (e, field) => {
    setQuestion({ ...question, [field]: e.target.value });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "20px auto", padding: "15px", border: "1px solid #ddd" }}>
      <div style={{ backgroundColor: "#e0e0e0", padding: "8px" }}>
        <b>New Post</b>
      </div>

      <div style={{ margin: "15px 0 20px" }}>
        <label>Select Post Type: </label>
        <input
          type="radio"
          value="question"
          checked={postType === "question"}
          onChange={() => setPostType("question")}
        /> Question
        <input
          type="radio"
          value="article"
          checked={postType === "article"}
          onChange={() => setPostType("article")}
          style={{ marginLeft: "20px" }}
        /> Article
      </div>

      <div style={{ backgroundColor: "#f2f2f2", padding: "10px", marginBottom: "15px" }}>
        <p style={{ margin: "0 0 5px" }}>
          <b>What do you want to ask or share</b>
        </p>
        <p style={{ margin: 0 }}>
          This section is designed based on the type of the post. It could be developed by conditional rendering.{" "}
        </p>
      </div>

      {postType === "question" && (
        <Form>
        
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <label style={{ width: "80px" }}>Title</label>
            <input
              type="text"
              placeholder="Start your question with how, what, why, etc."
              style={{ flex: 1, padding: "8px" }}
              value={question.title}
              onChange={(e) => handleChange(e, "title")}
            />
          </div>

          
          <Form.TextArea
            label="Describe your problem"
            placeholder="What is your problem"
            value={question.details}
            onChange={(e) => handleChange(e, "details")}
          />

          
          <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
            <label style={{ width: "80px" }}>Tags</label>
            <input
              type="text"
              placeholder="Please add up to 3 tags e.g., Java"
              style={{ flex: 1, padding: "8px" }}
              value={question.tags}
              onChange={(e) => handleChange(e, "tags")}
            />
          </div>

          <div style={{ textAlign: "right" }}>
            <Button primary>Post</Button>
          </div>
        </Form>
      )}

      {postType === "article" && (
        <Form>
          <Form.Input label="Title" placeholder="Write the title here" />
          <Form.TextArea label="Content" placeholder="Write your article..." />
          <Form.Input label="Tags" placeholder="Add some tags" />
          <div style={{ textAlign: "right" }}>
            <Button primary>Post</Button>
          </div>
        </Form>
      )}
    </div>
  );
};

export default PostType;
