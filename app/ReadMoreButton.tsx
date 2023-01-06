'use client'

import { useRouter } from "next/navigation"

type Props = {
    article: Article
}

const ReadMoreButton = ({ article }: Props) => {
    const router = useRouter()
    
    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join('&')
        const url = `/article?${queryString}`
        
        console.log("🚀 ~ file: ReadMoreButton.tsx:18 ~ handleClick ~ url", url)
        
        router.push(url)
    }

	return (
        <button className="bg-orange-400 h-10 rouded-b-lg dark:text-gray-900" onClick={handleClick}>
            Read More
        </button>
    )
}

export default ReadMoreButton
