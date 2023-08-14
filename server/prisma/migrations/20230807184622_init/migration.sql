/*
  Warnings:

  - A unique constraint covering the columns `[account]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "account" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Account_account_key" ON "Account"("account");
