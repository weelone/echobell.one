import type { MDXComponents } from 'mdx/types'
import { Callout } from 'fumadocs-ui/components/callout';
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
  }
}