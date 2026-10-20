import { NextResponse } from 'next/server';
import { readDataFile, writeDataFile, checkAdminAuth } from '@/lib/dataStore';
import type { Article } from '@/lib/types';

export async function GET() {
  try {
    const articles = readDataFile<Article[]>('articles.json');
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, article } = body;

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!article || !article.title || !article.slug) {
      return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 });
    }

    const articles = readDataFile<Article[]>('articles.json');
    const newArticle: Article = {
      id: article.id || Date.now().toString(),
      slug: article.slug,
      title: article.title,
      author: article.author || 'Intangible Heritage Research Board',
      authorAffiliation: article.authorAffiliation || '',
      date: article.date || new Date().toISOString().split('T')[0],
      abstract: article.abstract || '',
      tags: Array.isArray(article.tags) ? article.tags : (article.tags ? article.tags.split(',').map((t: string) => t.trim()) : []),
      heritageCategory: article.heritageCategory || 'Art',
      downloadUrl: article.downloadUrl || '#',
      journal: article.journal || 'Journal of Sri Lankan Cultural Heritage',
      volume: article.volume || '',
      issue: article.issue || '',
    };

    articles.push(newArticle);
    writeDataFile('articles.json', articles);

    return NextResponse.json({ success: true, article: newArticle }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { password, article } = body;

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!article || (!article.id && !article.slug)) {
      return NextResponse.json({ error: 'Article identifier is required' }, { status: 400 });
    }

    const articles = readDataFile<Article[]>('articles.json');
    const index = articles.findIndex(a => (article.id && a.id === article.id) || (article.slug && a.slug === article.slug));
    if (index === -1) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    articles[index] = { ...articles[index], ...article };
    writeDataFile('articles.json', articles);

    return NextResponse.json({ success: true, article: articles[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const password = request.headers.get('x-admin-password');

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ error: 'Article ID is required' }, { status: 400 });
    }

    const articles = readDataFile<Article[]>('articles.json');
    const filtered = articles.filter(a => a.id !== id && a.slug !== id);
    writeDataFile('articles.json', filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}
