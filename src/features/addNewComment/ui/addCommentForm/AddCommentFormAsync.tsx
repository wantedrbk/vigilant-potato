import {FC, lazy} from 'react'
import {AddCommentFormProps} from 'features/addNewComment/ui/addCommentForm/AddCommentForm'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
	// @ts-ignore
	// ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
	setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
