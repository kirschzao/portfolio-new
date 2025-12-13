"use client"

import * as React from "react"
import { useTranslation } from "react-i18next"; // Importe o hook

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
  const { t, i18n } = useTranslation(); 
  const [position, setPosition] = React.useState(i18n.language || "pt");

  const handleLanguageChange = (value: string) => {
    setPosition(value);
    i18n.changeLanguage(value); 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="bg-[#222] text-[#ffffff30] hover:text-black hover:bg-white active:border-0">
          {t('nav.language')} {/* Texto traduzido */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 relative z-50 bg-[#ffffff10] border-0 text-white">
        <DropdownMenuLabel>{t('nav.select')}:</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={position} onValueChange={handleLanguageChange} >
          {/* Note que os values agora são os códigos de idioma: pt, en, de */}
          <DropdownMenuRadioItem className="hover:bg-black" value="pt">Português</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="de">Deutsch</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}