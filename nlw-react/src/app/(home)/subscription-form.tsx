'use client'

import { Button } from '@/components/button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type subscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<subscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: subscriptionSchema) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors.name && (
            <p className="text-danger text.xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
        </div>
      </div>

      {errors.email && (
        <p className="text-danger text.xs font-semibold">
          {errors.email.message}
        </p>
      )}

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}
