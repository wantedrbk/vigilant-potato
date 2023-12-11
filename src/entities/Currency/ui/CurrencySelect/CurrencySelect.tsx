import {Currency} from '../../model/types/currency'
import {Select} from 'shared/ui/Select/Select'
import {useTranslation} from 'react-i18next'
import {memo, useCallback} from 'react'

interface CurrencySelectProps {
	className?: string
	value?: Currency
	readonly?: boolean
	onChangeCurrency?: (value: Currency) => void
}

const options = [
	{value: Currency.USD, content: Currency.USD},
	{value: Currency.EUR, content: Currency.EUR},
	{value: Currency.UAH, content: Currency.UAH}
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const {t} = useTranslation('profile')
	const {value, readonly, onChangeCurrency} = props

	const onChangeHandler = useCallback(
		(value: string) => {
			onChangeCurrency?.(value as Currency)
		},
		[onChangeCurrency]
	)

	return (
		<Select
			label={t('Your Currency')}
			options={options}
			value={value}
			onChange={onChangeHandler}
			disabled={readonly}
		/>
	)
})
