export interface Article {
    id: number;
    title: string;
    category: string;
}

export const JAVA_ARTICLES: Article[] = [
    { id: 1, title: 'Java Article 1', category: 'Java' },
    { id: 2, title: 'Java Article 2', category: 'Java' },
]
export const ANGULAR_ARTICLES: Article[] = [
    { id: 1, title: 'Angular Article 1', category: 'Angular' },
    { id: 2, title: 'Angular Article 2', category: 'Angular' },
    { id: 3, title: 'Angular Article 3', category: 'Angular' },
    { id: 4, title: 'Angular Article 4', category: 'Angular' },
]
export const FAVORITE_ARTICLES: Article[] = [
    { id: 2, title: 'Angular Article 2', category: 'Angular' },
    { id: 3, title: 'Angular Article 3', category: 'Angular' },
    { id: 4, title: 'Angular Article 4', category: 'Angular' }
]

