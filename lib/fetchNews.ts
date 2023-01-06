import { gql } from "graphql-request"
import sortNewsByDefault from "./sortNewsByImage"

const fetchNews = async (
	category?: Category | string,
	keywords?: string,
	isDynamic?: boolean
) => {
	// GraphQL query
	const query = gql`
		query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
			myQuery(
                access_key: $access_key
                categories: $categories
                countries: "gb"
                sort: "published_desc"
                keywords: $keywords
            ) {
				data {
					category
					author
					country
					description
					image
					language
					published_at
					source
					title
					url
				}
				pagination {
					count
					limit
					offset
					total
				}
			}
		}
	`

	// Fetch function with Next.js 13 caching
    const res = await fetch('https://canyonlake.stepzen.net/api/trendsetting-garfish/__graphql', {
        method: 'POST',
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 6000 },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                accesss_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords,
            },
        }),
    })
    console.log('Loading new data from api for category >>>', category, keywords)
    
    const newsResponse = await res.json()

    console.log(newsResponse)
    

	// Sort function
    // const news = sortNewsByDefault(newsResponse)

	// return res
    return newsResponse
}

export default fetchNews

// stepzen import curl http://api.mediastack.com/v1/news?access_key=f782c36b2740abb2801bd7054a4e88e6&countries=us%2Cgb&limit=20&offset=0&sort=published_desc
