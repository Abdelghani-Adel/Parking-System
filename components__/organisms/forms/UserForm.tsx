import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/ui/select";
import { Label } from "@/components/ui/shadcn/ui/label";
import { Input } from "@/components/ui/shadcn/ui/input";
import { SheetClose, SheetFooter } from "@/components/ui/shadcn/ui/sheet";
import { Button } from "@/components/ui/shadcn/ui/button";

interface IProps {
  id?: string;
  onSubmit: (data: any) => void;
}

const FormUser: React.FC<IProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Email Field */}
      <Controller
        name="email"
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input {...field} type="text" id="email" placeholder="Enter email of the user" />
          </div>
        )}
      />

      {
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input {...field} type="text" id="name" placeholder="password" />
            </div>
          )}
        />
      }

      {/* Phone Field */}
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input {...field} type="text" id="name" placeholder="name" />
          </div>
        )}
      />

      {/* Role Selection */}
      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label>User role</Label>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">Super Admin</SelectItem>
                  <SelectItem value="2">Admin</SelectItem>
                  <SelectItem value="3">Supervisor</SelectItem>
                  <SelectItem value="4">Operator</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      />

      {/* Save Button */}
      <SheetFooter>
        <SheetClose>
          <Button>Save</Button>
        </SheetClose>
      </SheetFooter>
    </form>
  );
};

export default FormUser;
