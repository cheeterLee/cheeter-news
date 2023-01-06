import fetchNews from "../../../lib/fetchNews"
import NewsList from "../../NewsList"

type Props = {
	params: { category: Category }
}

const NewsCategory = async ({ params: { category } }: Props) => {
    // const news: NewsResponse = await fetchNews(category)
    
	return <div>NewsCategory</div>
}

export default NewsCategory
