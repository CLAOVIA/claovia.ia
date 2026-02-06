type DataLayerEvent = {
  event: string
  [key: string]: unknown
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[]
  }
}

/**
 * Push un événement personnalisé dans le dataLayer GTM.
 * Utilisable côté client uniquement.
 *
 * @example
 * trackEvent("cta_click", { cta_name: "lancer_rex", page: "/onboarding" })
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...params,
  })
}
