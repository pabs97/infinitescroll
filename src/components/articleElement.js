import React from 'react';

function ArticleElement(props) {
  const { titleText, sentinel } = props;
  let classes = 'article';
  if (sentinel) classes += ' sentinel';

  return (
    <article className={classes}>
      <h3>{titleText}</h3>
      <p>This is an article element. This is an article element. This is an article element. This is an article element. This is an article element. </p>
    </article>
  );
}

export default ArticleElement;