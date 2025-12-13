"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="bg-[#222] text-[#ffffff30] hover:text-black hover:bg-white active:border-0">Idioma</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 relative z-50 bg-[#ffffff10] border-0 text-white">
        <DropdownMenuLabel >Selecionar:</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition} >
          <DropdownMenuRadioItem className ="hover:bg-black" value="Português">Português</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="English">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Deutsch">Deutsch</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
