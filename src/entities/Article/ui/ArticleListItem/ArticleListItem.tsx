import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import {Article, ArticleViewType} from 'entities/Article'
import { Card } from 'shared/ui/Card/Card';
import {memo, useCallback} from 'react'
import { useNavigate } from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig'
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import { Avatar } from 'shared/ui/Avatar/Avatar';
import {ArticleBlockText, ArticleBlockType} from '../../model/types/article'
import {ArticleTextBlockComponent} from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import {Button, ThemeButton} from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next';


interface ArticleListItemProps {
	className?: string;
	article: Article;
	view: ArticleViewType;
}


export const ArticleListItem = memo(({className, article, view}: ArticleListItemProps) => {
	const navigate = useNavigate()
	const { t } = useTranslation();
	console.log(article)
	
	const onOpenArticle = useCallback(()=> {
		navigate(RoutePath.article_details + article.id)
	},[])
	
	const types = <Text text={article.type.join(', ')} className={cls.types} />;
	
	const views = (
		<>
			<Text text={String(article.views)} className={cls.views} />
			<Icon Svg={EyeIcon} />
		</>
	);
	
	
	if ( view === ArticleViewType.LIST ) {
		
		const textBlock = article.blocks.find(
			(block) => block.type === ArticleBlockType.TEXT,
		) as ArticleBlockText;
		
		return (
			<div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
				<Card className={cls.card}>
					<div className={cls.header}>
						<Avatar size={30} src={article.user.avatar} />
						<Text text={article.user.username} className={cls.username} />
						<Text text={article.createdAt} className={cls.date} />
					</div>
					<Text title={article.title} className={cls.title} />
					{types}
					<img src={article.img} className={cls.img} alt={article.title} />
					{textBlock && (
						<ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
					)}
					<div className={cls.footer}>
						<Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
							{t('Читать далее...')}
						</Button>
						{views}
					</div>
				</Card>
			</div>
		)
	}
	
	return (
		<Card className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
			<div className={cls.card} onClick={onOpenArticle}>
				<div className={cls.imageWrapper}>
					<img alt={article.title} src={article.img} className={cls.img} />
					<Text text={article.createdAt} className={cls.date} />
				</div>
				<div className={cls.infoWrapper}>
					{types}
					{views}
				</div>
				<Text text={article.title} className={cls.title} />
			</div>
		</Card>
	)
})

