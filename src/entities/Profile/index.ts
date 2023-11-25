import {getProfileData} from 'entities/Profile/model/selectors/getProfileData/getProfileData'

export {ProfileSchema, Profile} from './model/types/profile'

export {profileActions, profileReducer} from './model/slice/profileSlice'

export {fetchProfileData} from './model/services/fetchProfileData/fetchProfileData'
export {updateProfileData} from './model/services/updateProfileData/updateProfileData'
export {ProfileCard} from './ui/ProfileCard'

export {getProfileData} from './model/selectors/getProfileData/getProfileData'
export {getProfileLoading} from './model/selectors/getProfileLoading/getProfileLoading'
export {getProfileError} from './model/selectors/getProfileError/getProfileError'
export {getProfileReadOnly} from 'entities/Profile/model/selectors/getProfileReadOnly/getProfileReadOnly'
export {getProfileForm} from 'entities/Profile/model/selectors/getProfileForm/getProfileForm'
