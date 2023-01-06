import { categories } from "../constants"
import fetchNews from "../lib/fetchNews"
import NewsList from "./NewsList"
// Mock data
// import response from '../response.json'


async function Homepage() {
    // fetch the news data
    const news: NewsResponse = await fetchNews(categories.join(','))

    // using mock data
    // const news: any = response 

	return <div>
       <NewsList news={news} />
    </div>
}

export default Homepage
