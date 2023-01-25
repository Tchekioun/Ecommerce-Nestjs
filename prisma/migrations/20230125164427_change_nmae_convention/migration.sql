/*
  Warnings:

  - You are about to drop the column `last_updated` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "last_updated",
ADD COLUMN     "data_updated" TIMESTAMP(3);
