interface Source {
    id: 'NYT' | 'GUA' | 'NEW'
    path: string
    name: string
    source?: string
}

export const sources: Source[]  =  [
    {
        id: 'NYT',
        path: '/nyt',
        name: 'New York Times',
    },
    {
        id: 'GUA',
        path: '/guardian',
        name: 'The Guardian',
    },
    {
        id: 'NEW',
        path: '/newsapi',
        name: 'News API',
    }
]