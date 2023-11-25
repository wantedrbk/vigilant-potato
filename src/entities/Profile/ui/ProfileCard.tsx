import {classNames, Mods} from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import {Text, TextAlign, TextTheme} from 'shared/ui/Text/Text'
import {useTranslation} from 'react-i18next'
import {Input} from 'shared/ui/Input/Input'
import {Profile} from 'entities/Profile'
import {Loading} from 'features/AuthByUsername/model/types/loginSchema'
import {Loader} from 'shared/ui/Loader/Loader'
import {ChangeEvent, useEffect} from 'react'
import {Avatar} from 'shared/ui/Avatar/Avatar'
import {Select} from 'shared/ui/Select/Select'
import {Currency, CurrencySelect} from 'entities/Currency'
import {Country, CountrySelect} from 'entities/Country'

interface ProfileCardProps {
	className?: string
	loading?: Loading
	error?: string
	data?: Profile
	onChangeFirstName?: (value: string) => void
	onChangeLastName?: (value: string) => void
	onChangeUsername?: (value: string) => void
	onChangeAvatar?: (value: string) => void
	onChangeAge?: (value: number) => void
	onChangeCountry?: (country: Country) => void
	onChangeCity?: (value: string) => void
	onChangeCurrency?: (currency: Currency) => void
	readonly?: boolean
	options?: string[]
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		loading,
		error,
		onChangeFirstName,
		onChangeLastName,
		onChangeUsername,
		onChangeAvatar,
		onChangeAge,
		onChangeCountry,
		onChangeCity,
		onChangeCurrency,
		data,
		readonly
	} = props
	const {t} = useTranslation('profile')
	if (loading === 'pending') {
		return (
			<div className={classNames(cls.ProfileCard, {[cls.loading]: true}, [className])}>
				<Loader />
			</div>
		)
	}

	if (error) {
		return (
			<div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
				<Text
					title={t('Error')}
					text={t('something get wrong , try to reload page')}
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
				/>
			</div>
		)
	}

	const mods: Mods = {
		[cls.editing]: !readonly
	}
	return (
		<div className={classNames(cls.ProfileCard, mods, [className])}>
			<div className={cls.data}>
				<div className={cls.avatarWrapper}>
					{data?.avatar && (
						<Avatar
							src={data?.avatar}
							alt={t('Not found')}
							size={150}
						/>
					)}
				</div>
				<Input
					id='avatar'
					value={data?.avatar}
					placeholder={t('Your avatar link')}
					className={cls.input}
					onChange={onChangeAvatar}
					readOnly={readonly}
				/>
				<Input
					id='username'
					value={data?.username}
					placeholder={t('Your Username')}
					className={cls.input}
					onChange={onChangeUsername}
					readOnly={readonly}
				/>
				<Input
					id='firstname'
					value={data?.firstname}
					placeholder={t('Your Name')}
					className={cls.input}
					onChange={onChangeFirstName}
					readOnly={readonly}
				/>
				<Input
					id='secondname'
					value={data?.lastname}
					placeholder={t('Your Surname')}
					className={cls.input}
					onChange={onChangeLastName}
					readOnly={readonly}
				/>
				<Input
					id='age'
					value={data?.age}
					placeholder={t('Your Age')}
					className={cls.input}
					onChange={onChangeAge}
					readOnly={readonly}
				/>
				<CountrySelect
					value={data?.country}
					onChangeCountry={onChangeCountry}
					readonly={readonly}
				/>
				<Input
					id='city'
					value={data?.city}
					placeholder={t('Your City')}
					className={cls.input}
					onChange={onChangeCity}
					readOnly={readonly}
				/>
				<CurrencySelect
					value={data?.currency}
					onChangeCurrency={onChangeCurrency}
					readonly={readonly}
				/>
			</div>
		</div>
	)
}
