// ============== Database Types (inférés de Prisma) ==============
import type {
    Organization as PrismaOrganization,
    Profile as PrismaProfile,
    TeamMember as PrismaTeamMember,
    RexEntry as PrismaRexEntry,
    RexReport as PrismaRexReport,
    AuditLog as PrismaAuditLog
} from '@prisma/client'

export type { Role, ReportStatus } from '@prisma/client'
// Manual definition to resolve build export issues
export enum UrgencyLevel {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}

// Re-export specific types if needed or use directly
export type Organization = PrismaOrganization
export type Profile = PrismaProfile
export type TeamMember = PrismaTeamMember
export type RexEntry = PrismaRexEntry
export type RexReport = PrismaRexReport
export type AuditLog = PrismaAuditLog

// ============== API Types ==============

export interface ThemeAnalysis {
    name: string
    score: number
    verbatim: string
    urgency: 'LOW' | 'MEDIUM' | 'HIGH'
    insight: string
}

export interface ManagerKit {
    emailDraft: string
    interviewScript: string
    pitfalls: string[]
}
