-- CreateTable
CREATE TABLE "Coffees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tags" TEXT[],
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Coffees_pkey" PRIMARY KEY ("id")
);
