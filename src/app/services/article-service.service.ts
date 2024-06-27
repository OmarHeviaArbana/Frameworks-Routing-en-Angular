import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable, of as Observableof} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(query: string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/api/articles?q=${query}`);
  }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>('http://localhost:3000/api/articles', article);
  }
  changeQuantity(articleId: number, changeInQuantity: number): Observable<Article> {
    return this.http.patch<Article>(`http://localhost:3000/api/articles/${articleId}`, {changeInQuantity});
  }
  getDetailArticle(articleId: string): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/api/articles/${articleId}`);
  }
}
