import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import type { ReactElement } from 'react';
import TagModel from '@/models/TagModel';
import TagService from '@/services/TagService';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function TagsCard(): ReactElement {
  const [tags, setTags] = useState<TagModel[]>([]);
  const tagService = new TagService();

  useEffect(() => {
    tagService.getAll().then((tags) => {
      setTags(tags);
    });
  }, []);

  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <h3 className="font-bold text-2xl">Hashtags</h3>
        </CardHeader>
        <CardContent>
          {tags.map((tag) => (
            <NextLink key={tag.id} href={`/posts/tag/${tag.slug}`}>
              #<span>{tag.name} </span>
            </NextLink>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
