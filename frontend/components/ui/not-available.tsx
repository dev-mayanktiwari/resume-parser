interface NotAvailableProps {
  message?: string
}

export function NotAvailable({ message = "Not Available" }: NotAvailableProps) {
  return <span className="text-gray-400 italic text-sm">{message}</span>
}
