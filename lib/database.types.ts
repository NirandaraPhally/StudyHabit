export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string
          role: 'admin' | 'student'
          organization_id: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          full_name?: string
          role?: 'admin' | 'student'
          organization_id?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          email?: string
          full_name?: string
          role?: 'admin' | 'student'
          organization_id?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      organizations: {
        Row: {
          id: string
          organization_name: string
          organization_type: string
          expected_students: string
          subscription_plan: 'monthly' | 'yearly'
          subscription_status: 'active' | 'inactive' | 'trial' | 'cancelled'
          trial_ends_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_name: string
          organization_type: string
          expected_students: string
          subscription_plan?: 'monthly' | 'yearly'
          subscription_status?: 'active' | 'inactive' | 'trial' | 'cancelled'
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          organization_name?: string
          organization_type?: string
          expected_students?: string
          subscription_plan?: 'monthly' | 'yearly'
          subscription_status?: 'active' | 'inactive' | 'trial' | 'cancelled'
          trial_ends_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      study_sessions: {
        Row: {
          id: string
          user_id: string
          subject: string
          duration_hours: number
          notes: string | null
          session_date: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          subject: string
          duration_hours: number
          notes?: string | null
          session_date?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          subject?: string
          duration_hours?: number
          notes?: string | null
          session_date?: string
          created_at?: string
          updated_at?: string
        }
      }
      invitations: {
        Row: {
          id: string
          organization_id: string
          invitation_code: string
          student_name: string
          student_email: string
          status: 'pending' | 'accepted' | 'expired'
          created_by: string
          expires_at: string
          accepted_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          invitation_code: string
          student_name: string
          student_email: string
          status?: 'pending' | 'accepted' | 'expired'
          created_by: string
          expires_at: string
          accepted_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          organization_id?: string
          invitation_code?: string
          student_name?: string
          student_email?: string
          status?: 'pending' | 'accepted' | 'expired'
          created_by?: string
          expires_at?: string
          accepted_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

