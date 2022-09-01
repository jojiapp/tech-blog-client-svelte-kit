import { writable } from 'svelte/store';
import type PostCategoryChoice from '../dto/post-category';
import type PostCreateMarkdown from '../dto/post-create-markdown';
import type Post from '../model/post';

export const postCategoryChoice = writable<PostCategoryChoice>();
export const postCreateMarkdown = writable<PostCreateMarkdown>();

export const post = writable<Post>();
