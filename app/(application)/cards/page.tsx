"use client";
import AddCard from "@/components/routes/cards/AddCard";
import CardsList from "@/components/routes/cards/CardsList";
import ChargeCard from "@/components/routes/cards/ChargeCard";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import { IoIosSave } from "react-icons/io";

const Page = () => {
  const { t } = useLanguage();

  return (
    <div className="p-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white col-span-2 dark:bg-grey-darker dark:text-grey-light rounded-lg p-4">
          <div className="flex flex-col justify-between h-full">
            <ChargeCard />
          </div>
        </div>

        <div className="bg-white col-span-3 dark:bg-grey-darker dark:text-grey-light rounded-lg p-4">
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default Page;
