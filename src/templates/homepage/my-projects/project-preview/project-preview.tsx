import React from 'react'
// import styling libs
// import local components

import { ProjectPreviewData } from '../my-projects'

/**
 * Function that transforms a project name to a slug (identic to function at gatsby-node.js)
 * @param name
 */
export const nameToSlug = (name: string) =>
    name
        .toLowerCase()
        .split(' ')
        .join('_')

type Props = ProjectPreviewData

/**
 * Function to show project preview on homepage
 */
const ProjectPreview: React.FC<Props> = () => {
    return <></>
}

export { ProjectPreview }
