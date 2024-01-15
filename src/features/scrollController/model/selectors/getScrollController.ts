import { createSelector } from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider'

export const getScrollController = (state: StateSchema) => state.scrollController.scroll;

export const getScrollControllerByPath = createSelector(
	getScrollController,
	(state: StateSchema, path: string) => path,
	(scroll, path) => scroll[path] || 0,
);
