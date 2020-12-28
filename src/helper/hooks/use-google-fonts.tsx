import { useEffect } from 'react'

/**
 * Custom hook to embed google font script / api to html head
 */
const useGoogleFonts = () => {
    const LINK_URL =
        'https://fonts.googleapis.com/css2?family=Karla:wght@400;700;800&family=Nunito:wght@300;400;700;800&display=swap'

    const LINK_PRECONNECT_URL = 'https://fonts.gstatic.com'

    /**
     * Function to create link elements
     * @returns array of link element
     */
    const createLinks = () => {
        const fontLink = document.createElement('link')
        const preconnectLink = document.createElement('link')

        fontLink.href = LINK_URL
        fontLink.rel = 'stylesheet'

        preconnectLink.href = LINK_PRECONNECT_URL
        preconnectLink.rel = 'preconnect'

        return [fontLink, preconnectLink]
    }

    useEffect(() => {
        const links = createLinks()

        // Append links to document's head tag
        links.forEach(link => {
            document.head.appendChild(link)
        })

        return () => {
            // cleanup, remove links from document's head tag
            links.forEach(link => {
                document.head.removeChild(link)
            })
        }
    }, [])
}

export { useGoogleFonts }
