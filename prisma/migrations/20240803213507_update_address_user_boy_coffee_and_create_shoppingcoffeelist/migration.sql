/*
  Warnings:

  - You are about to drop the `addressUsers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `boyCoffees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "boyCoffees" DROP CONSTRAINT "boyCoffees_addressUserId_fkey";

-- DropTable
DROP TABLE "addressUsers";

-- DropTable
DROP TABLE "boyCoffees";

-- CreateTable
CREATE TABLE "address_users" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "address_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "boy_coffees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "total_price" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "shoppingCoffeeListId" TEXT NOT NULL,

    CONSTRAINT "boy_coffees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shopping_coffee_list" (
    "id" TEXT NOT NULL,
    "create_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "form_of_payment" TEXT NOT NULL,
    "addressUserId" TEXT NOT NULL,

    CONSTRAINT "shopping_coffee_list_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "boy_coffees" ADD CONSTRAINT "boy_coffees_shoppingCoffeeListId_fkey" FOREIGN KEY ("shoppingCoffeeListId") REFERENCES "shopping_coffee_list"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shopping_coffee_list" ADD CONSTRAINT "shopping_coffee_list_addressUserId_fkey" FOREIGN KEY ("addressUserId") REFERENCES "address_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
