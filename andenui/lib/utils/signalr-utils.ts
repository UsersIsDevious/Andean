/**
 * Utility function to get the base URL for SignalR hubs
 * - If running on port 3000 (development), connects to port 7109
 * - Otherwise, uses the same host as the current window
 */
export function getSignalRBaseUrl(): string {
  // Default to localhost:7109 for server-side rendering or as fallback
  let baseUrl = "https://localhost:7109"

  // Only run in browser environment
  if (typeof window !== "undefined") {
    const currentHost = window.location.host
    const currentPort = window.location.port
    const protocol = window.location.protocol

    // If running on port 3000 (development), connect to port 7109
    // Otherwise, use the same host
    if (currentPort === "3000") {
      // In development, connect to the backend server on port 7109
      const hostname = window.location.hostname
      baseUrl = `https://${hostname}:7109`
    } else {
      // In production, use the same host
      baseUrl = `${protocol}//${currentHost}`
    }

    console.log(`SignalR base URL: ${baseUrl}`)
  }

  return baseUrl
}

/**
 * Get the full URL for a specific SignalR hub
 */
export function getSignalRHubUrl(hubName: string): string {
  return `${getSignalRBaseUrl()}/${hubName}`
}
