import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'

const MainPage = () => {
	const {t} = useTranslation('main')
	const [value, setValue] = useState('')

	const onChange = (value: string) => {
		setValue(value)
	}
	return (
		<div>
			{t('Main_page')}
			<Input
				placeholder="Введите текст"
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}
export default MainPage
