import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import type { ReactElement } from 'react';

export interface CategoryCardProps {}

export default function CategoriesCard(props: CategoryCardProps): ReactElement {
  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <h3 className="font-bold text-2xl">Hashtags</h3>
        </CardHeader>
        <CardContent>
          #test #test #lorem Elit voluptas quasi quidem molestias qui? Nemo voluptatem quas dolores obcaecati obcaecati.
          Quasi repudiandae nesciunt?
        </CardContent>
      </Card>
    </>
  );
}
