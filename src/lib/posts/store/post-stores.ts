import { writable } from 'svelte/store';
import type PostCategoryChoice from '../../category/dto/post-category';
import type PostMarkdown from '../dto/post-markdown';
import type Post from '../model/post';

export const postCategoryChoice = writable<PostCategoryChoice>();
export const postMarkdown = writable<PostMarkdown>();

export const post = writable<Post>();
