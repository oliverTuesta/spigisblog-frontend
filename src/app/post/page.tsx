'use client';
import type { ReactElement } from 'react';
import Markdown from 'marked-react';

export interface PostProps {}

export default function Post(props: PostProps): ReactElement {
  const postMarkdown = '## Testing markdown parser **marked-react**';

  return (
    <>
      <Markdown>{postMarkdown}</Markdown>
    </>
  );
}
