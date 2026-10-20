import { NextResponse } from 'next/server';
import { readDataFile, writeDataFile, checkAdminAuth } from '@/lib/dataStore';
import type { Product } from '@/lib/types';

export async function GET() {
  try {
    const products = readDataFile<Product[]>('products.json');
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, product } = body;

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!product || !product.name) {
      return NextResponse.json({ error: 'Product name is required' }, { status: 400 });
    }

    const products = readDataFile<Product[]>('products.json');
    const newProduct: Product = {
      id: product.id || Date.now().toString(),
      name: product.name,
      description: product.description || '',
      price: product.price ? Number(product.price) : 0,
      image: product.image || '/images/crafts.jpg',
      category: product.category || 'General',
      heritageCategory: product.heritageCategory || 'Crafts',
      inStock: product.inStock !== false,
    };

    products.push(newProduct);
    writeDataFile('products.json', products);

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { password, product } = body;

    if (!checkAdminAuth(password)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin password' }, { status: 401 });
    }

    if (!product || !product.id) {
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const products = readDataFile<Product[]>('products.json');
    const index = products.findIndex(p => p.id === product.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    products[index] = { ...products[index], ...product };
    writeDataFile('products.json', products);

    return NextResponse.json({ success: true, product: products[index] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
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
      return NextResponse.json({ error: 'Product ID is required' }, { status: 400 });
    }

    const products = readDataFile<Product[]>('products.json');
    const filtered = products.filter(p => p.id !== id);
    writeDataFile('products.json', filtered);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
