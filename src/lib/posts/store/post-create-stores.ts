import { writable } from 'svelte/store';
import type PostCategory from '../component/category/post-category';
import type PostMarkdown from '../component/markdown/post-markdown';

export const postCategory = writable<PostCategory>();
export const postMarkdown = writable<PostMarkdown>();
