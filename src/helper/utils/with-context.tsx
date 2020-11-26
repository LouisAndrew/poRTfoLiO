import React from 'react'

import PageContext, { Context as ContextType, defaultValues } from 'context'

type Params = {
    children: any
    contextValue?: ContextType
}

const withContext = ({ children, contextValue = defaultValues }: Params) => {
    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    )
}

export default withContext
