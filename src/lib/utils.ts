import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
    return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date))
}

export function formatRelativeTime(date: Date | string): string {
    const now = new Date()
    const then = new Date(date)
    const diff = now.getTime() - then.getTime()

    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'À l\'instant'
    if (minutes < 60) return `Il y a ${minutes} min`
    if (hours < 24) return `Il y a ${hours}h`
    if (days < 7) return `Il y a ${days}j`

    return formatDate(date)
}

export function getUrgencyColor(urgency: string): string {
    switch (urgency) {
        case 'HIGH': return 'text-red-600 bg-red-50'
        case 'MEDIUM': return 'text-amber-600 bg-amber-50'
        case 'LOW': return 'text-green-600 bg-green-50'
        default: return 'text-gray-600 bg-gray-50'
    }
}

export function getScoreColor(score: number): string {
    if (score >= 7) return 'text-green-600'
    if (score >= 5) return 'text-amber-600'
    return 'text-red-600'
}
