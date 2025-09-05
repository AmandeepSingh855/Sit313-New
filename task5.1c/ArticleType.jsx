import React from "react";
import { Form, Button } from "semantic-ui-react";

const ArticleType = ({ article, setArticle }) => {
  return (
    <Form>
      <Form.Input
        label="Title"
        placeholder="Enter a descriptive title"
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
      />

      <Form.Input
        label="Abstract"
        placeholder="Enter a 1-paragraph abstract"
        value={article.abstract}
        onChange={(e) => setArticle({ ...article, abstract: e.target.value })}
      />

      <Form.TextArea
        label="Article Text"
        placeholder="Enter a 1-paragraph abstract"
        value={article.content}
        onChange={(e) => setArticle({ ...article, content: e.target.value })}
      />

      <Form.Input
        label="Tags"
        placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
        value={article.tags}
        onChange={(e) => setArticle({ ...article, tags: e.target.value })}
      />

      <Button>Post</Button>
    </Form>
  );
};

export default ArticleType;
