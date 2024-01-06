import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import {memo, useCallback, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {addCommentFormReducer, addCommentFormSlice} from 'features/addNewComment/model/slice/addCommentFormSlice'
import {Input} from 'shared/ui/Input/Input'
import {getAddCommentFormError, getAddCommentFormText} from 'features/addNewComment'
import {Button, ButtonSize, ThemeButton} from 'shared/ui/Button/Button'

export interface AddCommentFormProps {
	className?: string
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({className, onSendComment}: AddCommentFormProps) => {
	const {t} = useTranslation()
	const dispatch = useAppDispatch()
	const text = useSelector(getAddCommentFormText)
	const error = useSelector(getAddCommentFormError)
	

	const [isCommentFormVisible, setIsCommentFormVisible] = useState(false)

	const handleInputChange = useCallback((value:string) => {
		dispatch(addCommentFormSlice.actions.setText(value))
	}, [dispatch])

	const handleOpenCommentForm = () => {
		setIsCommentFormVisible(true)
	}
	const handleCloseCommentForm = () => {
		setIsCommentFormVisible(false)
		dispatch(addCommentFormSlice.actions.setText(''))
	}
	
	const onSendHandler = useCallback((event) => {
		event.preventDefault();
		onSendComment(text || '');
		handleInputChange('');
	}, [handleInputChange, onSendComment, text]);
	
	const mods: Mods = {
		[cls.closed]: isCommentFormVisible,
	}
	
	const modsButton: Mods = {
		[cls.addCommentButton]: !isCommentFormVisible
	}
	
	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.AddCommentForm, modsButton, [className])}>
				<Button onClick={handleOpenCommentForm} size={ButtonSize.M} theme={ThemeButton.BACKGROUND_INVERTED} className={classNames(cls._, mods)}>Add Comment</Button>
				{isCommentFormVisible && (
					<form onSubmit={(event) => onSendHandler(event)} className={cls.commentForm}>
						<label className={cls.labelForm}>
							Content:
							<Input
								name='content'
								value={text}
								onChange={handleInputChange}
								className={cls.inputFormComment}
							/>
						</label>
						<div className={cls.submitCommentButtons}>
							<Button type='submit' size={ButtonSize.M} theme={ThemeButton.BACKGROUND_INVERTED} >Submit</Button>
							<Button onClick={handleCloseCommentForm} size={ButtonSize.M} theme={ThemeButton.BACKGROUND_INVERTED} className={classNames(cls.cancelButton, {})}>Cancel</Button>
						</div>
					</form>
				)}
			</div>
		</DynamicModuleLoader>
	
	
	)
})

export default AddCommentForm