import type * as React from 'react';

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        [key: string]: any;
      };
    }
  }
}
