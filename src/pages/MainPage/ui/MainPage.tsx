import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {Page} from 'shared/ui/PageWrapper/Page'

const MainPage = () => {
	const {t} = useTranslation()
	const [value, setValue] = useState('')

	const onChange = (value: string) => {
		setValue(value)
	}
	return (
		<Page>
			{t('Main page')}
			<Input
				placeholder='Введите текст'
				value={value}
				onChange={onChange}
			/>
		</Page>
	)
}
export default MainPage
