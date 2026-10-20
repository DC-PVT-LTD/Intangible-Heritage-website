import { NextResponse } from 'next/server';
import { readDataFile, writeDataFile, checkAdminAuth } from '@/lib/dataStore';
import type { HeritageCategoryItem } from '@/lib/types';

export async function GET() {
  try {
    const categories = readDataFile<HeritageCategoryItem[]>('categories.json');
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { password, category } = body;

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!category || !category.id) {
      return NextResponse.json({ error: 'Invalid category data' }, { status: 400 });
    }

    const categories = readDataFile<HeritageCategoryItem[]>('categories.json');
    const index = categories.findIndex(c => c.id === category.id || c.slug === category.slug);

    if (index === -1) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    categories[index] = { ...categories[index], ...category };
    writeDataFile('categories.json', categories);

    return NextResponse.json({ success: true, category: categories[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update category' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, category } = body;

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!category || !category.name) {
      return NextResponse.json({ error: 'Category name is required' }, { status: 400 });
    }

    const categories = readDataFile<HeritageCategoryItem[]>('categories.json');
    const newCategory: HeritageCategoryItem = {
      id: category.id || category.name.toLowerCase().replace(/\s+/g, '-'),
      slug: category.slug || category.name.toLowerCase().replace(/\s+/g, '-'),
      name: category.name,
      shortDescription: category.shortDescription || '',
      description: category.description || '',
      image: category.image || '/images/traditional-art.jpg',
      icon: category.icon || '🏛️',
      focusAreas: category.focusAreas || [],
    };

    categories.push(newCategory);
    writeDataFile('categories.json', categories);

    return NextResponse.json({ success: true, category: newCategory }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}
