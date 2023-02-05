import type { PageLoad } from './$types';
import { getBlogList } from './blog-service';

export const load = (() => getBlogList(1)) satisfies PageLoad;
