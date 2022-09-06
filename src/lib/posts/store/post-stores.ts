import { writable } from 'svelte/store';
import type CategoryChoice from '../../category/dto/CategoryChoice';
import type PostMarkdown from '../dto/post-markdown';

export const categoryChoice = writable<CategoryChoice>();
export const postMarkdown = writable<PostMarkdown>();
