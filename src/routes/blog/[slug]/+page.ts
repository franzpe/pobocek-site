import type { PageLoad } from './$types';
import { getBlogPost } from '../blog-service';

export const load = (({ params }) => getBlogPost(params.slug)) satisfies PageLoad;
