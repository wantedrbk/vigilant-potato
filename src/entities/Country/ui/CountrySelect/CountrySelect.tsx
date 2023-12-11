import {Country} from '../../model/types/country'
import {Select} from 'shared/ui/Select/Select'
import {useTranslation} from 'react-i18next'
import {memo, useCallback} from 'react'

interface CurrencySelectProps {
	className?: string
	value?: Country
	readonly?: boolean
	onChangeCountry?: (value: Country) => void
}

const options = [
	{value: Country.Germany, content: Country.Germany},
	{value: Country.USA, content: Country.USA},
	{value: Country.Italy, content: Country.Italy},
	{value: Country.Poland, content: Country.Poland},
	{value: Country.Spain, content: Country.Spain},
	{value: Country.Ukraine, content: Country.Ukraine}
]

export const CountrySelect = memo((props: CurrencySelectProps) => {
	const {t} = useTranslation('profile')
	const {value, readonly, onChangeCountry} = props

	const onChangeHandler = useCallback(
		(value: string) => {
			onChangeCountry?.(value as Country)
		},
		[onChangeCountry]
	)

	return (
		<Select
			label={t('Your Country')}
			options={options}
			value={value}
			onChange={onChangeHandler}
			disabled={readonly}
		/>
	)
})
