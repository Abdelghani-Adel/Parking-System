"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/shadcn/ui/input";
import { Label } from "@/components/ui/shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/ui/select";
import { Button } from "@/components/ui/shadcn/ui/button";
import {
  useParkingsForSelect,
  useVehicleTypesForSelect,
} from "@/hooks/selectOptions";
import MuiModal from "@/components/ui/MuiModal";
import { FaCheck, FaPrint, FaMoneyBill, FaCreditCard } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

interface TicketFormData {
  ticketNumber: string;
  parkingId: string;
  vehicleTypeId: string;
}

const POSForm = () => {
  const { t } = useLanguage();
  const [isCalculated, setIsCalculated] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [totalFees, setTotalFees] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "visa" | null>(
    null
  );

  const parkingOptions = useParkingsForSelect();
  const vehicleTypes = useVehicleTypesForSelect();

  const form = useForm<TicketFormData>({
    defaultValues: {
      ticketNumber: "",
      parkingId: "",
      vehicleTypeId: "",
    },
  });

  const { handleSubmit, control } = form;

  const onCalculate = (data: TicketFormData) => {
    // In a real application, this would call an API to calculate fees
    // For now, we'll simulate a calculation
    const randomFee = Math.floor(Math.random() * 100) + 20;
    setTotalFees(randomFee);
    setIsCalculated(true);
    setIsConfirmModalOpen(true);
  };

  const handlePaymentMethodSelect = (method: "cash" | "visa") => {
    setPaymentMethod(method);
  };

  const handleCheckout = () => {
    setIsConfirmModalOpen(false);
    setIsPrintModalOpen(true);
  };

  const handlePrintInvoice = () => {
    // In a real application, this would trigger printing to a thermal printer
    // For now, we'll just simulate printing by opening a new window with the invoice
    const invoiceWindow = window.open("", "_blank");
    if (invoiceWindow) {
      const formData = form.getValues();

      invoiceWindow.document.write(`
        <html>
          <head>
            <title>Parking Invoice</title>
            <style>
              body { font-family: Arial; width: 80mm; margin: 0; padding: 10px; }
              .header { text-align: center; margin-bottom: 10px; }
              .info { margin-bottom: 5px; }
              .total { font-weight: bold; margin-top: 10px; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>Parking Receipt</h2>
            </div>
            <div class="info">Ticket #: ${formData.ticketNumber}</div>
            <div class="info">Date: ${new Date().toLocaleDateString()}</div>
            <div class="info">Time: ${new Date().toLocaleTimeString()}</div>
            <div class="info">Payment Method: ${paymentMethod?.toUpperCase()}</div>
            <div class="total">Total Amount: $${totalFees.toFixed(2)}</div>
            <div class="footer">Thank you for your business!</div>
          </body>
        </html>
      `);
      invoiceWindow.document.close();
      invoiceWindow.print();
    }

    // Reset the form
    setIsPrintModalOpen(false);
    setIsCalculated(false);
    form.reset();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Payment</h2>

      {/* Step 1: Calculation Form */}
      <form onSubmit={handleSubmit(onCalculate)} className="space-y-5">
        <Controller
          name="ticketNumber"
          control={control}
          rules={{ required: "Ticket number is required" }}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="ticketNumber">Ticket Number</Label>
              <Input
                {...field}
                type="text"
                id="ticketNumber"
                placeholder="Enter ticket number"
              />
            </div>
          )}
        />

        <div>
          <h5 className="mb-2">Parking</h5>
          <Controller
            name="parkingId"
            control={control}
            rules={{ required: "Parking is required" }}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select parking" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {parkingOptions.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <div>
          <h5 className="mb-2">Vehicle Type</h5>
          <Controller
            name="vehicleTypeId"
            control={control}
            rules={{ required: "Vehicle type is required" }}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {vehicleTypes.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>

        <Button type="submit" className="w-full">
          Calculate
        </Button>
      </form>

      {/* Step 2: Confirmation Modal */}
      <MuiModal
        isOpened={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h3 className="text-xl font-bold mb-4">Payment Confirmation</h3>

          <div className="mb-6">
            <p className="text-lg font-semibold text-green-600 mb-4">
              Total Fees: ${totalFees.toFixed(2)}
            </p>

            <div className="space-y-3">
              <p className="font-medium">Select Payment Method:</p>

              <div className="flex space-x-4">
                <Button
                  variant={paymentMethod === "cash" ? "default" : "outline"}
                  onClick={() => handlePaymentMethodSelect("cash")}
                  className="flex items-center space-x-2 flex-1"
                >
                  <FaMoneyBill />
                  <span>Cash</span>
                </Button>

                <Button
                  variant={paymentMethod === "visa" ? "default" : "outline"}
                  onClick={() => handlePaymentMethodSelect("visa")}
                  className="flex items-center space-x-2 flex-1"
                >
                  <FaCreditCard />
                  <span>Visa</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button
              variant="outline"
              onClick={() => setIsConfirmModalOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleCheckout} disabled={!paymentMethod}>
              Checkout
            </Button>
          </div>
        </div>
      </MuiModal>

      {/* Step 3: Print Invoice Modal */}
      <MuiModal
        isOpened={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <FaCheck className="text-green-600 text-4xl" />
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-6">
            Your transaction has been completed.
          </p>

          <Button
            onClick={handlePrintInvoice}
            className="w-full flex items-center justify-center space-x-2"
          >
            <FaPrint />
            <span>Print Invoice</span>
          </Button>
        </div>
      </MuiModal>
    </div>
  );
};

export default POSForm;
