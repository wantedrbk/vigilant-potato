import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {memo, useCallback} from 'react'
import {ArticleDetails} from 'entities/Article'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {useNavigate, useParams} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Text, TextSize, TextTheme} from 'shared/ui/Text/Text'
import {CommentList} from 'entities/Comments'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
// eslint-disable-next-line max-len
import {fetchCommentsData} from '../../models/services/fetchCommentsData/fetchCommentsData'
import {getArticleCommentsError, getArticleCommentsLoading} from '../../models/selectors/commentsSelector'
import {AddCommentForm} from 'features/addNewComment'
import {addCommentForArticle} from '../../models/services/addCommentForArticle/addCommentForArticle'
import {articleDetailsCommentsReducer, getArticleComments} from '../../models/slices/articleDetailsCommentsSlice'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {Button, ThemeButton} from 'shared/ui/Button/Button'

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
	const navigate = useNavigate();
	
	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text))
		},
		[dispatch]
	)
	
	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);
	
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
				<Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
					{t('Назад к списку')}
				</Button>
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
