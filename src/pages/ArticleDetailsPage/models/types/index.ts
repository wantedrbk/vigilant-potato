import {ArticleDetailsCommentsSchema} from './ArticleDetailsCommentsSchema'
import {MiniProfilesSchema} from '../../../../entities/Article/model/types/articleMiniProfileSchema'
import {ArticleDetailsRecommendationsSchema} from './ArticleDetailsRecommendationsSchema'

export interface ArticleDetailsPageSchema {
	comments: ArticleDetailsCommentsSchema
	recommendations: ArticleDetailsRecommendationsSchema
}
