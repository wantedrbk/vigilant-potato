import {ArticleList, ArticleViewSelector, ArticleViewType} from 'entities/Article'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {memo, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articlePageActions, articlePageReducer, getArticles} from '../models/slices/ArticlePageSlice'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {useSelector} from 'react-redux'
import {getArticleError, getArticleLoading, getArticlesPageView} from '../models/selectors/articleSelectors'
import {Page} from 'shared/ui/PageWrapper/Page'
import {fetchNextArticles} from '../models/services/fetchNextArticles'
import {initArticlesPage} from '../models/services/initArticlesPage'


interface ArticlesPageProps {
	className?: string
}

const reducers: ReducersList = {
	articlePage: articlePageReducer
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
	const { t } = useTranslation()
	const dispatch = useAppDispatch()
	const articles = useSelector(getArticles.selectAll)
	const isLoading = useSelector(getArticleLoading);
	const view = useSelector(getArticlesPageView);
	const error = useSelector(getArticleError);
	
	
	useInitialEffect(() => {
		dispatch(initArticlesPage())
	})
	
	const onViewChange = useCallback((view: ArticleViewType)=> {
		dispatch(articlePageActions.setView(view))
	},[dispatch])
	
	const onLoadNextPart = useCallback(() => {
			dispatch(fetchNextArticles());
	}, [dispatch]);
	
	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={false}
		>
			<Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
				<ArticleViewSelector view={view} onViewChange={onViewChange} className={cls.viewSelector}/>
				<ArticleList articles={articles} view={view} isLoading={isLoading} error={error}/>
			</Page>
		</DynamicModuleLoader>
	
	)
	
	
}

export default memo(ArticlesPage)
