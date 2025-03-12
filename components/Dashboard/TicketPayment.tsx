"use client";

import { useLanguage } from "@/context/LanguageContext";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { LuTicketCheck } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosSave } from "react-icons/io";

const TicketPayment = () => {
  const { t } = useLanguage();
  const [ticketNumber, setTicketNumber] = useState("");
  const [totalAmount, setTotalAmount] = useState<number | null>();
  const [paymentType, setPaymentType] = useState<string | null>();
  const [paiedAmount, setPaidAmount] = useState<string | null>();

  const onTicketChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTicketNumber(e.target.value);
  };

  const onPaidAmountchange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaidAmount(e.target.value);
  };

  return (
    <>
      <h2 className="text-lg font-bold mb-3 text-primary dark:text-grey-light flex items-center gap-2">
        <LuTicketCheck />
        <span>{t("ticketPayment")}</span>
      </h2>
      <div className="flex gap-5">
        <input
          type="text"
          placeholder="Enter ticket number"
          onChange={onTicketChange}
          className="text-black w-full text-xs py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
        />

        <button
          disabled={ticketNumber.length > 4 ? false : true}
          onClick={() => setTotalAmount(35)}
          className="disabled:bg-grey-light disabled:text-grey-dark disabled:cursor-not-allowed flex items-center gap-2 bg-primary hover:bg-primary-dark transition duration-300 px-5 rounded-lg text-white text-sm"
        >
          <FaCalculator className="text-lg" />
          <span>{t("calculate")}</span>
        </button>
      </div>

      {totalAmount && (
        <>
          <p className="flex items-center gap-1 my-3 text-green-500">
            <MdOutlineAttachMoney />
            <span>{t("totalAmount")}</span> : {totalAmount} <span>{t("egp")}</span>
          </p>

          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <input
                id="cash"
                type="radio"
                value=""
                name="paymentType"
                className="w-4 h-4 "
                onChange={() => setPaymentType("cash")}
              />
              <label htmlFor="cash" className="flex items-center gap-2 text-sm font-medium">
                {t("payCash")}
                <span>
                  <GiMoneyStack className="text-2xl" />
                </span>
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="visa"
                type="radio"
                value=""
                name="paymentType"
                className="w-4 h-4"
                onChange={() => setPaymentType("cash")}
              />
              <label htmlFor="visa" className="flex items-center gap-2 text-sm font-medium">
                <span>{t("payVisa")}</span>
                <BsCreditCard2FrontFill className="text-2xl" />
              </label>
            </div>
          </div>
        </>
      )}

      {paymentType && (
        <>
          <input
            type="text"
            placeholder="Paid amount"
            onChange={onPaidAmountchange}
            className="w-full mt-3 text-xs py-2 px-2 pr-8 rounded-md focus:outline-none focus:ring-1 font-normal border-gray-200 border-2"
          />

          <button className="mt-3 w-full text-sm flex items-center justify-center gap-2 py-2 bg-primary hover:bg-primary-dark transition duration-300 px-5 rounded-lg text-white">
            <IoIosSave className="text-2xl" />
            <span>{t("save")}</span>
          </button>
        </>
      )}
    </>
  );
};

export default TicketPayment;
