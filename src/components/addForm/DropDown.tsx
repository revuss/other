import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function GenderSelect() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <>
      <div>
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Gender</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="top">Male</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">
                Female
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">
                Others
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
