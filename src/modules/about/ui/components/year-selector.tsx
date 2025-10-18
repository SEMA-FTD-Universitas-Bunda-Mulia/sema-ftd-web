"use client";

import { CheckIcon, ChevronsUpDown } from "lucide-react";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

const years = [
  {
    value: "2025",
    label: "2025",
  },
  {
    value: "2024",
    label: "2024",
  },
  {
    value: "2023",
    label: "2023",
  },
  {
    value: "2022",
    label: "2022",
  },
  {
    value: "2021",
    label: "2021",
  },
  {
    value: "2020",
    label: "2020",
  },
];

export default function YearSelector() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(years[0].value);

  return (
    <div className="pt-7 h-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="noShadow"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between md:max-w-[200px]"
          >
            {value
              ? years.find((year) => year.value === value)?.label
              : "Select year..."}
            <ChevronsUpDown />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-(--radix-popover-trigger-width) border-0 p-0">
          <Command className="**:data-[slot=command-input-wrapper]:h-11">
            <CommandInput placeholder="Search year..." />
            <CommandList className="p-1">
              <CommandEmpty>No year found.</CommandEmpty>
              <CommandGroup>
                {years.map((year) => (
                  <CommandItem
                    key={year.value}
                    value={year.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {year.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto",
                        value === year.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
