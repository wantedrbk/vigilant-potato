import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import {fetchArticleData} from '../../model/services/fetchArticleData/fetchArticleData'
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsLoading,
	getArticleMiniProfileLoading,
	getMiniProfile
} from '../../model/selectors/getArticleDetailsState'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {memo, useCallback, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Text, TextAlign, TextSize, TextTheme} from 'shared/ui/Text/Text'
import {Skeleton} from 'shared/ui/Skeleton/Skeleton'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import EyePic from '../../../../shared/assets/icons/eye-20-20.svg'
import CalendarPic from '../../../../shared/assets/icons/calendar-20-20.svg'
import {Icon} from 'shared/ui/Icon/Icon'
import {ArticleBlockType, ArticlesBlockAll} from '../../model/types/article'
import {ArticleCardBlockComponent} from '../ArticleCardBlockComponent/ArticleCardBlockComponent'
import {ArticleCodeBlockComponent} from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {ArticleImageBlockComponent} from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice'
import {ProfileMiniCard} from 'entities/Profile/ui/ProfileMiniCard/ProfileMiniCard'
import {
	articleDetailsMiniProfileAction,
	articleDetailsMiniProfileReducer
} from 'entities/Article/model/slice/articleDetailsMiniProfileSlice'
import {fetchMiniProfileDataByArticleId} from 'entities/Article/model/services/fetchProfileDataByArticleId/fetchMiniProfileDataByArticleId'

interface ArticleDetailsProps {
	className?: string
	articleId: string
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
	miniProfile: articleDetailsMiniProfileReducer
}

export const ArticleDetails = memo(({className, articleId}: ArticleDetailsProps) => {
	const dispatch = useAppDispatch()
	const data = useSelector(getArticleDetailsData)
	const loading = useSelector(getArticleDetailsLoading)
	const error = useSelector(getArticleDetailsError)
	const miniProfileData = useSelector(getMiniProfile)
	const miniProfileLoading = useSelector(getArticleMiniProfileLoading)
	const miniProfileError = useSelector(getArticleDetailsError)

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleData(articleId))
			dispatch(fetchMiniProfileDataByArticleId(articleId))
		}
	}, [dispatch, articleId])

	const renderBlock = useCallback((block: ArticlesBlockAll) => {
		switch (block.type) {
			case ArticleBlockType.CODE:
				return (
					<ArticleCodeBlockComponent
						block={block}
						key={block.id}
					/>
				)
			case ArticleBlockType.IMAGE:
				return (
					<ArticleImageBlockComponent
						block={block}
						key={block.id}
					/>
				)
			case ArticleBlockType.TEXT:
				return (
					<ArticleTextBlockComponent
						key={block.id}
						block={block}
					/>
				)
			default:
				return null
		}
	}, [])

	let content

	if (loading) {
		content = (
			<>
				<Skeleton
					className={cls.avatar}
					width={200}
					height={200}
					border={'50%'}
				/>

				<div className={cls.headerWrapper}>
					<Skeleton
						width={'100%'}
						height={32}
					/>
					<div className={cls.articleInfo}>
						<Skeleton
							className={cls.skeletonImg}
							width={24}
							height={24}
						/>
						<Skeleton
							className={cls.skeletonText}
							width={'100%'}
							height={24}
						/>
					</div>
					<div className={cls.articleInfo}>
						<Skeleton
							className={cls.skeletonImg}
							width={24}
							height={24}
						/>
						<Skeleton
							className={cls.skeletonText}
							width={'100%'}
							height={24}
						/>
					</div>
					{/*<div className={cls.articleCard}>{data?.blocks.map(renderCardBlock)}</div>*/}
				</div>
			</>
		)
	} else if (error) {
		content = (
			<Text
				title={'Error'}
				text={'Произошла ошибка при загрузке статьи'}
				theme={TextTheme.ERROR}
				align={TextAlign.CENTER}
			/>
		)
	} else {
		content = (
			<>
				<div className={cls.avatarWrapper}>
					<Avatar
						src={data?.img}
						className={cls.avatar}
					/>
				</div>

				<div className={cls.headerWrapper}>
					<Text
						className={cls.title}
						title={data?.title}
						text={data?.subtitle}
						size={TextSize.M}
					/>
					<div className={cls.articleInfo}>
						<Icon
							Svg={EyePic}
							className={cls.icon}
						/>
						<Text
							title={String(data?.views)}
							align={TextAlign.LEFT}
							size={TextSize.S}
						/>
					</div>
					<div className={cls.articleInfo}>
						<Icon
							Svg={CalendarPic}
							className={cls.icon}
						/>
						<Text
							title={data?.createdAt}
							align={TextAlign.LEFT}
							size={TextSize.S}
						/>
					</div>
				</div>
				{miniProfileData && (
					<ProfileMiniCard
						className={cls.miniCard}
						profile={miniProfileData}
						loading={miniProfileLoading}
						error={miniProfileError}
					/>
				)}

				<div className={cls.articleBlocks}>
					{data?.blocks.map((block) => renderBlock(block))}
				</div>
			</>
		)
	}

	return (
		<DynamicModuleLoader
			reducers={reducers}
			removeAfterUnmount={true}
		>
			<div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
		</DynamicModuleLoader>
	)
})
