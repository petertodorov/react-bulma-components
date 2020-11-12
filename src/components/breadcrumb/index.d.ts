import * as React from 'react';
import { BulmaComponent } from '..';
import { Size } from '../../modifiers';

interface BreadcrumbItem {
  url: string;
  active?: boolean;
  name?: React.ReactNode;
}

interface BreadcrumbProps {
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: Size;
  align?: 'right' | 'center';
  items?: BreadcrumbItem[];
  hrefAttr?: string;
}

export const Breadcrumb: BulmaComponent<BreadcrumbProps, 'a'>;
