import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.upsert({
    where: { name: 'BOOK' },
    update: {},
    create: {
      name: 'BOOK',
    },
  });

  const product1 = await prisma.product.upsert({
    where: {
      sku: 'BOOK-TECH-1000',
    },
    update: {},
    create: {
      sku: 'BOOK-TECH-1000',
      name: 'JavaScript - The Fun Parts',
      description: 'Learn JavaScript',
      imageUrl: 'assets/images/products/placeholder.png',
      active: 1,
      unitsInStock: 100,
      unitPrice: 19.99,
      categoryId: 1,
    },
  });
  const product2 = await prisma.product.upsert({
    where: {
      sku: 'BOOK-TECH-1001',
    },
    update: {},
    create: {
      sku: 'BOOK-TECH-1001',
      name: 'Spring Framework Tutorial',
      description: 'Learn Spring',
      imageUrl: 'assets/images/products/placeholder.png',
      active: 1,
      unitsInStock: 100,
      unitPrice: 29.99,
      categoryId: 1,
    },
  });
  const product3 = await prisma.product.upsert({
    where: {
      sku: 'BOOK-TECH-1002',
    },
    update: {},
    create: {
      sku: 'BOOK-TECH-1002',
      name: 'Kubernetes - Deploying Containers',
      description: 'Learn Kubernetes',
      imageUrl: 'assets/images/products/placeholder.png',
      active: 1,
      unitsInStock: 100,
      unitPrice: 24.99,
      categoryId: 1,
    },
  });
  const product4 = await prisma.product.upsert({
    where: {
      sku: 'BOOK-TECH-1003',
    },
    update: {},
    create: {
      sku: 'BOOK-TECH-1003',
      name: 'Internet of Things (IoT) - Getting Started',
      description: 'Learn IoT',
      imageUrl: 'assets/images/products/placeholder.png',
      active: 1,
      unitsInStock: 100,
      unitPrice: 29.99,
      categoryId: 1,
    },
  });
  const product5 = await prisma.product.upsert({
    where: {
      sku: 'BOOK-TECH-1004',
    },
    update: {},
    create: {
      sku: 'BOOK-TECH-1004',
      name: 'The Go Programming Language: A to Z',
      description: 'Learn Go',
      imageUrl: 'assets/images/products/placeholder.png',
      active: 1,
      unitsInStock: 100,
      unitPrice: 24.99,
      categoryId: 1,
    },
  });

  console.log(product1, product2, product3, product4, product5);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
