import { Toaster, toast as sonnerToast } from "sonner"

/**
 * ponytail: thin sonner adapter for the Base UI toast API surface used by the
 * data-grid examples. Renders messages through sonner instead of re-implementing
 * a toast manager; upgrade to a real manager if stacking/animation parity matters.
 */
type ToastOptions = {
  type?: "success" | "error" | "info" | "warning"
  title?: string
  description?: string
  timeout?: number
}

type ToastFn = (message: string, options?: Record<string, unknown>) => string

const call = (options: ToastOptions, id?: string) => {
  const fn = (options.type
    ? (sonnerToast as unknown as Record<string, ToastFn>)[options.type]
    : (sonnerToast as unknown as ToastFn)) as ToastFn
  return fn(options.title ?? options.description ?? "", {
    description: options.title ? options.description : undefined,
    duration: options.timeout,
    id,
  })
}

export const toast = {
  add: (options: ToastOptions) => call(options),
  update: (id: string, options: ToastOptions) => call(options, id),
  close: (id: string) => sonnerToast.dismiss(id),
}

type ToastRecord = {
  id: string
  type?: string
  title?: string
  description?: string
}

export function useToastManager() {
  return { toasts: [] as ToastRecord[] }
}

type LooseProps = { children?: React.ReactNode } & Record<string, unknown>

export function ToastProvider({ children }: LooseProps) {
  return <>{children}</>
}

export function ToastPortal({ children }: LooseProps) {
  return <>{children}</>
}

export function ToastViewport(_props: LooseProps) {
  return <Toaster position="top-left" />
}

export function Toast(_props: LooseProps) {
  return null
}

export function ToastContent({ children }: LooseProps) {
  return <>{children}</>
}

export function ToastTitle() {
  return null
}

export function ToastDescription() {
  return null
}

export function ToastClose() {
  return null
}
