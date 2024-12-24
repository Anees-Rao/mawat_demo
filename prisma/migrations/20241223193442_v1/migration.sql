-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('NGO_USER', 'NAWAT_USER');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "ExpertStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'PENDING');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED');

-- CreateEnum
CREATE TYPE "ConsultantType" AS ENUM ('MEDICAL', 'AWARENESS');

-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "aliasName" TEXT,
    "email" TEXT NOT NULL,
    "ageRange" TEXT,
    "signUpDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "topics" TEXT,
    "status" "Status" NOT NULL DEFAULT 'ACTIVE',
    "maritalStatus" "MaritalStatus",
    "pinCode" INTEGER NOT NULL,
    "profilePicture" TEXT,
    "avatarImage" TEXT,
    "securityPin" INTEGER,
    "deviceToken" TEXT,
    "ngoCode" TEXT,
    "ngoId" INTEGER,
    "userType" "UserType" NOT NULL DEFAULT 'NAWAT_USER',
    "locationId" BIGINT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expert" (
    "id" BIGSERIAL NOT NULL,
    "expertId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "degree" TEXT,
    "certification" TEXT,
    "specialty" TEXT,
    "experience" TEXT,
    "gender" TEXT,
    "expertStatus" "ExpertStatus" NOT NULL DEFAULT 'ACTIVE',
    "consultantType" "ConsultantType" NOT NULL DEFAULT 'MEDICAL',
    "phone" TEXT,
    "profileImage" TEXT,
    "rating" TEXT,
    "affiliatedNgo" TEXT,
    "averageResponseTime" TEXT,
    "pinCode" INTEGER,
    "profileRejection" BOOLEAN NOT NULL DEFAULT false,
    "rejectionReason" TEXT,
    "degreeId" BIGINT,
    "majorId" BIGINT,
    "adminId" BIGINT,
    "document" TEXT,
    "video" TEXT,
    "deviceToken" TEXT,
    "audioCall" BOOLEAN NOT NULL DEFAULT false,
    "audioCallDuration" TIMESTAMP(3),
    "audioCallPrice" TEXT,
    "videoCall" BOOLEAN NOT NULL DEFAULT false,
    "videoCallDuration" TIMESTAMP(3),
    "videoCallPrice" TEXT,
    "chatCall" BOOLEAN NOT NULL DEFAULT false,
    "chatCallDuration" BIGINT,
    "inviteLink" TEXT,
    "locationId" BIGINT,

    CONSTRAINT "Expert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" BIGSERIAL NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" BIGSERIAL NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLocation" (
    "id" BIGSERIAL NOT NULL,
    "cityId" BIGINT,
    "countryId" BIGINT,
    "userId" BIGINT,
    "ngoId" BIGINT,

    CONSTRAINT "UserLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpertLocation" (
    "id" BIGSERIAL NOT NULL,
    "cityId" BIGINT,
    "countryId" BIGINT,
    "expertId" BIGINT,
    "ngoId" BIGINT,

    CONSTRAINT "ExpertLocation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLanguage" (
    "id" BIGSERIAL NOT NULL,
    "languageId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,

    CONSTRAINT "UserLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpertLanguage" (
    "id" BIGSERIAL NOT NULL,
    "languageId" BIGINT NOT NULL,
    "expertId" BIGINT NOT NULL,

    CONSTRAINT "ExpertLanguage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" BIGSERIAL NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpertTopic" (
    "id" BIGSERIAL NOT NULL,
    "topicId" BIGINT NOT NULL,
    "expertId" BIGINT NOT NULL,

    CONSTRAINT "ExpertTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExpertSubTopic" (
    "id" BIGSERIAL NOT NULL,
    "subTopicId" BIGINT NOT NULL,
    "expertId" BIGINT NOT NULL,

    CONSTRAINT "ExpertSubTopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" BIGSERIAL NOT NULL,
    "topics" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubTopic" (
    "id" BIGSERIAL NOT NULL,
    "subTopics" TEXT NOT NULL,
    "topicId" BIGINT NOT NULL,

    CONSTRAINT "SubTopic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Expert_expertId_key" ON "Expert"("expertId");

-- CreateIndex
CREATE UNIQUE INDEX "Expert_email_key" ON "Expert"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "UserLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expert" ADD CONSTRAINT "Expert_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "ExpertLocation"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocation" ADD CONSTRAINT "UserLocation_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLocation" ADD CONSTRAINT "UserLocation_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertLocation" ADD CONSTRAINT "ExpertLocation_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertLocation" ADD CONSTRAINT "ExpertLocation_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLanguage" ADD CONSTRAINT "UserLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLanguage" ADD CONSTRAINT "UserLanguage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertLanguage" ADD CONSTRAINT "ExpertLanguage_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertLanguage" ADD CONSTRAINT "ExpertLanguage_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertTopic" ADD CONSTRAINT "ExpertTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertTopic" ADD CONSTRAINT "ExpertTopic_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertSubTopic" ADD CONSTRAINT "ExpertSubTopic_subTopicId_fkey" FOREIGN KEY ("subTopicId") REFERENCES "SubTopic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertSubTopic" ADD CONSTRAINT "ExpertSubTopic_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubTopic" ADD CONSTRAINT "SubTopic_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
