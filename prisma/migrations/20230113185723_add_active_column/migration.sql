/*
  Warnings:

  - Added the required column `active` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "active" BIT NOT NULL;
