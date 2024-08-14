/*
  Warnings:

  - You are about to drop the `address_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `boy_coffees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `shopping_coffee_list` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "boy_coffees" DROP CONSTRAINT "boy_coffees_shoppingCoffeeListId_fkey";

-- DropForeignKey
ALTER TABLE "shopping_coffee_list" DROP CONSTRAINT "shopping_coffee_list_addressUserId_fkey";

-- AlterTable
ALTER TABLE "coffees" ADD COLUMN     "slugs" TEXT[];

-- DropTable
DROP TABLE "address_users";

-- DropTable
DROP TABLE "boy_coffees";

-- DropTable
DROP TABLE "shopping_coffee_list";

-- CreateTable
CREATE TABLE "addresses" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "form_of_payment" TEXT NOT NULL,
    "address_id" TEXT NOT NULL,

    CONSTRAINT "shopping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "buy" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "total_price" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "shopping_id" TEXT NOT NULL,

    CONSTRAINT "buy_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "shopping" ADD CONSTRAINT "shopping_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "addresses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "buy" ADD CONSTRAINT "buy_shopping_id_fkey" FOREIGN KEY ("shopping_id") REFERENCES "shopping"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
