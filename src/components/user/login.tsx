import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FormHead } from "./header";
import { InputField } from "./inputField";
import { LoginForm } from "@/forms/useLoginForm";
import { Field } from "@tanstack/react-form";

export function LoginPage() {
  const form = LoginForm();
  return (
    <>
      <Card className="w-[350px] mx-auto mt-20">
        <FormHead title="Login" description="Login to continue" />
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <Field
                form={form}
                name="email"
                children={(field) => (
                  <>
                    <InputField
                      label="email"
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
                name="password"
                children={(field) => (
                  <>
                    <InputField
                      label="password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </>
                )}
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <Button className=" w-[80%]" onClick={form.handleSubmit}>
            Login
          </Button>
          <p className="text-center pt-3 text-sm">
            Not registered ?{" "}
            <Link to="/register" className="text-orange-500">
              Sign Up
            </Link>{" "}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
