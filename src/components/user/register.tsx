import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FormHead } from "./header";
import { InputField } from "./inputField";
import { RegisterForm } from "@/forms/useRegisterForm";
import { Field } from "@tanstack/react-form";

export function RegisterPage() {
  const form = RegisterForm();
  return (
    <>
      <Card className="w-[380px] mx-auto my-10">
        <FormHead title="Register" description="Sign Up and get access" />
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <Field
                form={form}
                name="username"
                children={(field) => (
                  <>
                    <InputField
                      label="username"
                      id="username"
                      type="text"
                      name="username"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Username"
                    />
                  </>
                )}
              />

              <Field
                form={form}
                name="email"
                children={(field) => (
                  <>
                    <InputField
                      label="email"
                      type="text"
                      id="email"
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      name="email"
                      placeholder="email"
                    />
                  </>
                )}
              />

              <Field
                form={form}
                name="password"
                children={(field) => (
                  <InputField
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    label="password"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                )}
              />
              <Field
                form={form}
                name="confirmPassword"
                children={(field) => (
                  <InputField
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    label="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                )}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <Button className="w-[80%]" onClick={form.handleSubmit}>
            Register
          </Button>
          <p className="text-center pt-3 text-sm">
            Already registered ?{" "}
            <Link to="/login" className="text-orange-500">
              login
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
