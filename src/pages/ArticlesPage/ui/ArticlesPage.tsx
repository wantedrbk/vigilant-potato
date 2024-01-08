import {Article, ArticleList, ArticleViewType} from 'entities/Article'
import {classNames} from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import {memo} from 'react'
import {useTranslation} from 'react-i18next'

interface ArticlesPageProps {
	className?: string
}

const article = {
	id: '1',
	title: 'A Winning Strategy to Building Innovation Dream Teams',
	subtitle: 'json-server subtitle',
	img: 'https://random.imagecdn.app/500/500',
	views: 310,
	createdAt: '25.12.2023',
	user: {
		id: '1',
		username: 'wantedrbk',
		avatar: 'https://random.imagecdn.app/500/500'
	},
	type: [
		'IT',
		'SPORT',
		'BUSINESS',
		'ART',
		'NEWS',
		'OTHER'
	],
	blocks: [
		{
			id: '1',
			type: 'TEXT',
			title: 'Block title',
			paragraphs: [
				'В поле request будет доступна реализация нативного интерфейса Request из Fetch API, так что вы сможете использовать все стандартные методы и свойства соответствующего класса. В поле params будут доступны параметры пути, такие как, к примеру, postId для URL вида api/posts/:postId. Наконец, поле cookies содержит все установленные при запросе куки в виде строковых пар ключ-значение.'
			]
		},
		{
			id: '2',
			type: 'CODE',
			content: '// response resolver\nconst postsResolver = ({ request, params, cookies }) => {\n  return HttpResponse.json([\n    {\n      title:\n        "Что такое генераторы статических сайтов и почему Astro — лучший фреймворк для разработки лендингов",\n      url: "https://habr.com/ru/articles/779428/",\n      author: "@AlexGriss",\n    },\n    {\n      title: "Как использовать html-элемент <dialog>?",\n      url: "https://habr.com/ru/articles/778542/",\n      author: "@AlexGriss",\n    },\n  ]);\n};'
		},
		{
			id: '4',
			type: 'TEXT',
			title: 'Block title',
			paragraphs: [
				'Первый параметр в request handler называется predicate (далее предикат) и отражает правила, по которым проверяется URL запроса. Предикат может быть как обычной строкой, так и регулярным выражением. Запрос будет обработан функцией-резолвером, переданной в параметре resolver, только если URL запроса совпадёт с правилом, заданным в предикате. В нашем случае предикатом является строка с относительным URL api/posts. Теперь при вызове любого GET-запроса на данный URL из клиентского приложения с работающим Mock Service Worker запустится обработчик вызова postsHandler.'
			]
		},
		{
			id: '3',
			type: 'CARD',
			username: 'wantedrbk',
			fullname: 'Dmytro Kostiuk',
			position: 'junior Frontend Developer'
		},
		{
			id: '5',
			type: 'IMAGE',
			link: 'https://random.imagecdn.app/500/350',
			title: 'Image title'
		}
	]
} as Article


const ArticlesPage = ({className}: ArticlesPageProps) => {
	const { t } = useTranslation()
	
	return <div className={classNames(cls.ArticlesPage, {}, [className])}>
		<ArticleList articles={new Array(16).fill(0).map(
			(item, index) => ({
				...article,
				id: String(index)
			})
		)}  view={ArticleViewType.LIST} isLoading={false}/>
	</div>
}

export default memo(ArticlesPage)
