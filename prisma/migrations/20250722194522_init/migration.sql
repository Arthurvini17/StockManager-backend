-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "stockmanager";

-- CreateTable
CREATE TABLE "stockmanager"."Product" (
    "id" SERIAL NOT NULL,
    "Product_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
