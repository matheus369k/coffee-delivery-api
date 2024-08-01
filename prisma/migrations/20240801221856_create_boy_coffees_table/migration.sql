-- CreateTable
CREATE TABLE "boyCoffees" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "total_price" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "addressUserId" TEXT NOT NULL,

    CONSTRAINT "boyCoffees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "boyCoffees" ADD CONSTRAINT "boyCoffees_addressUserId_fkey" FOREIGN KEY ("addressUserId") REFERENCES "addressUsers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
