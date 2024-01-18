import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import {Select, SelectOption} from 'shared/ui/Select/Select'
import {t} from 'i18next'
import { useMemo } from 'react';
import {ArticleSortField} from 'entities/Article/model/types/article'
import {SortOrder} from 'shared/types'

interface ArticleSortSelectorProps {
    sort: ArticleSortField | undefined
    order: SortOrder | undefined
    changeSort: (newSort: ArticleSortField) => void
    changeOrder: (newOrder: SortOrder) => void
	className?: string;
}


export const ArticleSortSelector = ( props: ArticleSortSelectorProps) => {
    const {
        className,
        sort,
        order,
        changeSort,
        changeOrder,
    } = props
    
    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);
    
    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [t]);
    
	return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<SortOrder>
                options={orderOptions}
                label={t('Сортировать ПО')}
                value={order}
                onChange={changeOrder}
            />
            <Select
                options={sortFieldOptions}
                label={t('по')}
                value={sort}
                onChange={changeSort}
                className={cls.order}
            />
        </div>
    )
}

