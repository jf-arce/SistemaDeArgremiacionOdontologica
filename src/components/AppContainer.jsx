"use client"
import { AppProvider } from "@/Context/AppContext";
import { NextUIProvider } from "@nextui-org/react";

export const AppContainer = ({children}) => {
  return (
    <NextUIProvider>
      <AppProvider>
        {children}
      </AppProvider>
    </NextUIProvider>
  )
}
