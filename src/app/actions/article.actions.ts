import { createAction, createFeatureSelector, createSelector, props } from '@ngrx/store';
import { Article } from '../models/article';
import { ArticleState } from '../reducer/app.states';

export const JavaArticlesAction = createAction('[ Article ] Java');
export const AngularArticlesAction = createAction('[ Article ] Angular');
export const FavoriteArticlesAction =
    createAction('[ Article ] Favorite_Articles', props<{ payload: Article[] }>());


export const getArticleState = createFeatureSelector<ArticleState>('articleState');

export const getArticles = createSelector(
    getArticleState,
    (state: ArticleState) => state.articles
); 