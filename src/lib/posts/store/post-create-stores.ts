import { writable } from 'svelte/store';
import type PostCategory from '../dto/post-category';
import type PostMarkdown from '../dto/post-markdown';

export const postCategory = writable<PostCategory>();
export const postMarkdown = writable<PostMarkdown>();
