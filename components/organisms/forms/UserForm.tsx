import React, { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { createUser, IUser, updateUser } from "@/redux/slices/userSlice";
import { useRolesForSelect } from "@/hooks/selectOptions";

interface IProps {
  id?: string;
}

const FormUser: React.FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const usersList = useAppSelector((state) => state.users.data);
  const user = usersList.find((item) => item.id === id);
  const roles = useRolesForSelect();

  const form = useForm<IUser>({
    defaultValues: user ?? {
      id: "",
      name: "",
      email: "",
      phone: "",
      roleId: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (data: IUser) => {
    if (id) {
      dispatch(updateUser(data));
    } else {
      dispatch(createUser(data));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Controller
        name="name"
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              {...field}
              type="text"
              id="name"
              placeholder="Enter name of the user"
            />
          </div>
        )}
      />

      {/* Email Field */}
      <Controller
        name="email"
        control={control}
        rules={{ required: "Email is required" }}
        render={({ field }) => (
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              {...field}
              type="text"
              id="email"
              placeholder="Enter email of the user"
            />
          </div>
        )}
      />

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
        name="roleId"
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
                  {roles.map((option) => (
                    <SelectItem key={option.id} value={option.id}>
                      {option.name}
                    </SelectItem>
                  ))}
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
