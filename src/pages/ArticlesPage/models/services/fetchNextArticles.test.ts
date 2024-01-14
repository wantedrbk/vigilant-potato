import {TestAsyncThunk} from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import {fetchNextArticles} from './fetchNextArticles'
import {fetchAllArticles} from './fecthAllArticles'


jest.mock('./fecthAllArticles')


describe('fetchNextArticle', () => {
	test('success', async ()=> {
		const thunk = new TestAsyncThunk(fetchNextArticles, {
			articlePage: {
				page: 2,
				ids:[],
				entities: {},
				limit: 5,
				hasMore: true,
				loading: false,
			},
		})
		
		await thunk.callThunk();
		
		expect(thunk.dispatch).toBeCalledTimes(4)
		expect(fetchAllArticles).toHaveBeenCalledWith({page: 3})
		

		
		
	})
})
