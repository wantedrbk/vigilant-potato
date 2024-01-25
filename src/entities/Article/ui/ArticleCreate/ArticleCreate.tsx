import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleCreate.module.scss'
import {Card} from 'shared/ui/Card/Card'
import {Text} from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next';

interface ArticleCreateProps {
	className?: string;
}


export const ArticleCreate = ({className}: ArticleCreateProps) => {
    const {t} = useTranslation('')
	return (
		<Card className={classNames(cls.ArticleCreate, {}, [className])}>
	        <Text title={t('Create Article')}/>
         
		</Card>
	)
}

