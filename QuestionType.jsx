import React from "react";
import { Form, Button } from "semantic-ui-react";

const QuestionType = ({ question, setQuestion }) => {
  return (
    <Form>
      <Form.Input
        label="Title"
        placeholder="Start your question with how, what, why, etc."
        value={question.title}
        onChange={(e) => setQuestion({ ...question, title: e.target.value })}
      />

      <Form.TextArea
        label="Describe your problem"
        placeholder="What is your problem"
        value={question.details}
        onChange={(e) => setQuestion({ ...question, details: e.target.value })}
      />

      <Form.Input
        label="Tags"
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        value={question.tags}
        onChange={(e) => setQuestion({ ...question, tags: e.target.value })}
      />

      <Button primary>Post</Button>
    </Form>
  );
};

export default QuestionType;
