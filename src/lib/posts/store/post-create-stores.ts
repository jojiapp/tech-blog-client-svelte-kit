import { writable } from 'svelte/store';
import type PostCategory from '../component/category/post-category';

export const postCategories = writable<PostCategory>();
