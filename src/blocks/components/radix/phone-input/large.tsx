import { PhoneInput } from "@/components/kit/phone-input"

export default function Pattern() {
  return (
    <PhoneInput
      variant="lg"
      placeholder="Enter phone number"
      defaultCountry="US"
      value="+12125551234"
    />
  )
}