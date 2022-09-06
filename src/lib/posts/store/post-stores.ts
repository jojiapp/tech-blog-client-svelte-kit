import { writable } from 'svelte/store';
import type CategoryChoice from '../../category/dto/CategoryChoice';
import type PostMarkdownDTO from '../dto/postMarkdownDTO';

export const categoryChoice = writable<CategoryChoice>();
export const postMarkdown = writable<PostMarkdownDTO>();
