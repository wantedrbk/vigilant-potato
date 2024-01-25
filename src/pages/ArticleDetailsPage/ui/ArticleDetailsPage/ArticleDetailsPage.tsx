import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import {memo, useCallback} from 'react'
import {ArticleDetails, ArticleList, ArticleViewType} from 'entities/Article'
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
import {getArticleComments} from '../../models/slices/articleDetailsCommentsSlice'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import {Page} from 'widgets/PageWrapper/Page'
import {articleDetailsPageReducer} from '../../models/slices'
import {getArticleRecommendations} from '../../models/slices/articleDetailsRecomendationsSlice'
import {
	fetchArticleRecommendations
} from '../../models/services/fetchArticleRecommendations/fetchArticleRecommendations'
import {
	getArticleRecommendationsError,
	getArticleRecommendationsLoading
} from '../../models/selectors/recommendationsSelector'
import {ArticleDetailsPageHeader} from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader'

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer
}

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('article')
	const {id} = useParams<{id: string}>()
	const dispatch = useAppDispatch()
	const comments = useSelector(getArticleComments.selectAll)
	const isLoading = useSelector(getArticleCommentsLoading)
	const error = useSelector(getArticleCommentsError)
	const recArticles = useSelector(getArticleRecommendations.selectAll)
	const recLoading = useSelector(getArticleRecommendationsLoading)
	const recError = useSelector(getArticleRecommendationsError)
	
	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text))
		},
		[dispatch]
	)
	
	
	useInitialEffect(() => {
		dispatch(fetchCommentsData(id))
		dispatch(fetchArticleRecommendations())
	})

	if (!id) {
		return (
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Article is not found')}
			</Page>
		)
	}
	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={true}
		>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<ArticleDetailsPageHeader />
				<ArticleDetails articleId={id} />
				<Text
					text={'Recommendations'}
					size={TextSize.L}
					theme={TextTheme.PRIMARY}
				/>
				<ArticleList
					articles={recArticles}
					view={ArticleViewType.GRID}
					className={cls.recommendations}
					error={recError}
					isLoading={recLoading}
					target={'_blank'}
					/>
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
			</Page>
		</DynamicModuleLoader>
	)
}

export default memo(ArticleDetailsPage)
