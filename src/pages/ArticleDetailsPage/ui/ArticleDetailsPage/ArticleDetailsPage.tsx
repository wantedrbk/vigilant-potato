import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {memo, useCallback, useEffect} from 'react'
import {ArticleDetails, getArticleDetailsData, getArticleDetailsError} from 'entities/Article'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice'
import {useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Text, TextSize, TextTheme} from 'shared/ui/Text/Text'
import {CommentList} from 'entities/Comments'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
// eslint-disable-next-line max-len
import {fetchCommentsData} from 'pages/ArticleDetailsPage/models/services/fetchCommentsData/fetchCommentsData'
import {
	getArticleCommentsError,
	getArticleCommentsLoading
} from '../../models/selectors/commentsSelector'
import {AddCommentForm} from 'features/addNewComment'
import {addCommentForArticle} from 'pages/ArticleDetailsPage/models/services/addCommentForArticle/addCommentForArticle'
import {articleDetailsCommentsReducer, getArticleComments} from '../../models/slices/articleDetailsCommentsSlice'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer
}

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('article')
	const {id} = useParams<{id: string}>()
	const dispatch = useAppDispatch()
	const error = useSelector(getArticleCommentsError)
	const comments = useSelector(getArticleComments.selectAll)
	const isLoading = useSelector(getArticleCommentsLoading)
	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text))
		},
		[dispatch]
	)

	useInitialEffect(() => {
		dispatch(fetchCommentsData(id))
	})

	if (!id) {
		return (
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Article is not found')}
			</div>
		)
	}
	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={true}
		>
			<div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetails articleId={id} />
				<Text
					text={'Comments'}
					size={TextSize.XL}
					className={cls.comments}
					theme={TextTheme.PRIMARY}
				/>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList
					comments={comments}
					error={error}
					isLoading={isLoading}
				/>
			</div>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)
