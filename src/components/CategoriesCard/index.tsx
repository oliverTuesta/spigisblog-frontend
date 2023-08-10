import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

import type { ReactElement } from 'react';

export interface CategoryCardProps {}

export default function CategoriesCard(props: CategoryCardProps): ReactElement {
  return (
    <>
      <Card className="bg-transparent shadow-none">
        <CardHeader>
          <h3 className="font-bold text-2xl">Categories</h3>
        </CardHeader>
        <CardContent>
          <ul>
            <li>
              <a href="#" className="font-bold">
                Gaming
              </a>
              - Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <a href="#" className="font-bold">
                Web Development
              </a>
              - Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              <a href="#" className="font-bold">
                Machine Learning
              </a>
              - Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
