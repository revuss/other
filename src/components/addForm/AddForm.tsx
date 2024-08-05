import { Field } from "@tanstack/react-form";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { InputField } from "../user/inputField";
import { useStudentForm } from "@/forms/useStudentForm";

interface AddFormProps {
  isOpen: boolean;
  closeDialog: () => void;
}

export function AddForm({ isOpen, closeDialog }: AddFormProps) {
  const form = useStudentForm();
  return (
    <>
      <Dialog open={isOpen} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[425px] flex flex-col justify-between">
          <DialogHeader>
            <DialogTitle>Student Data</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Field
              form={form}
              name="id"
              children={(field) => (
                <>
                  <InputField
                    label="Student ID"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                  />
                </>
              )}
            />
            <Field
              form={form}
              name="firstName"
              children={(field) => (
                <>
                  <InputField
                    label="FirstName"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                  />
                </>
              )}
            />
            <Field
              form={form}
              name="lastName"
              children={(field) => (
                <>
                  <InputField
                    label="Last Name"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                  />
                </>
              )}
            />
            <Field
              form={form}
              name="emailId"
              children={(field) => (
                <>
                  <InputField
                    label="Email ID"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="text"
                    name="emailId"
                    placeholder="EMAIL"
                  />
                </>
              )}
            />
            <Field
              form={form}
              name="mobileNumber"
              children={(field) => (
                <>
                  <InputField
                    label="Phone number"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="number"
                    name="mobileNumber"
                    placeholder="Student Number"
                  />
                </>
              )}
            />
            <Field
              form={form}
              name="attendance"
              children={(field) => (
                <>
                  <InputField
                    label="attendance"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    type="text"
                    name="attendance"
                    placeholder="Attendance"
                  />
                </>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit" onClick={form.handleSubmit}>
              Add Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
