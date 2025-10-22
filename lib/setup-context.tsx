"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface OrganizationData {
  organizationType: string
  organizationName: string
  expectedStudents: string
}

interface AdminData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

interface SetupData {
  organization: OrganizationData
  admin: AdminData
}

interface SetupContextType {
  data: SetupData
  updateOrganization: (data: Partial<OrganizationData>) => void
  updateAdmin: (data: Partial<AdminData>) => void
  resetData: () => void
}

const SetupContext = createContext<SetupContextType | undefined>(undefined)

const initialData: SetupData = {
  organization: {
    organizationType: "",
    organizationName: "",
    expectedStudents: ""
  },
  admin: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
}

// Helper functions for localStorage
const STORAGE_KEY = 'studyhabit-setup-data'

const loadDataFromStorage = (): SetupData => {
  if (typeof window === 'undefined') return initialData
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return {
        organization: { ...initialData.organization, ...parsed.organization },
        admin: { ...initialData.admin, ...parsed.admin }
      }
    }
  } catch (error) {
    console.error('Error loading data from localStorage:', error)
  }
  return initialData
}

const saveDataToStorage = (data: SetupData) => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving data to localStorage:', error)
  }
}

export function SetupProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SetupData>(initialData)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load data from localStorage on mount
  useEffect(() => {
    const loadedData = loadDataFromStorage()
    setData(loadedData)
    setIsLoaded(true)
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      saveDataToStorage(data)
    }
  }, [data, isLoaded])

  const updateOrganization = (newData: Partial<OrganizationData>) => {
    setData(prev => ({
      ...prev,
      organization: { ...prev.organization, ...newData }
    }))
  }

  const updateAdmin = (newData: Partial<AdminData>) => {
    setData(prev => ({
      ...prev,
      admin: { ...prev.admin, ...newData }
    }))
  }

  const resetData = () => {
    setData(initialData)
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  return (
    <SetupContext.Provider value={{ data, updateOrganization, updateAdmin, resetData }}>
      {children}
    </SetupContext.Provider>
  )
}

export function useSetup() {
  const context = useContext(SetupContext)
  if (context === undefined) {
    throw new Error("useSetup must be used within a SetupProvider")
  }
  return context
}
