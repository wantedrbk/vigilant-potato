import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {Page} from 'widgets/PageWrapper/Page'
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
	className?: string;
}
const reducers: ReducersList = {
}

const ArticleEditPage = ({className}: ArticleEditPageProps) => {
	const { t } = useTranslation();
	const { id } = useParams<{id: string}>()
	const isEdit = Boolean(id)
	
	return (
		<Page className={classNames(cls.ArticleEditPage, {}, [className])}>
			{isEdit
				? t('Редактирование статьи с ID = ') + id
				: t('Создание новой статьи')}
		</Page>
	)
}

export default ArticleEditPage