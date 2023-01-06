import { categories } from "../constants"
import fetchNews from "../lib/fetchNews"


async function Homepage() {
    // fetch the news data
    const news: NewsResponse = await fetchNews(categories.join(','))
    console.log("🚀 ~ file: page.tsx:8 ~ Homepage ~ news", news)
    

	return <div>
        {/* newslist */}
    </div>
}

export default Homepage
