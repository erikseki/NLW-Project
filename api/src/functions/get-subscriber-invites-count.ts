// função responsável por inscrever o usuário no evento.

import { redis } from '../redis/client'

interface getSubscriberInviteCountParams {
  subscriberId: string
}

export async function getSubscriberInvitesCount({
  subscriberId,
}: getSubscriberInviteCountParams) {
  //   await redis.hincrby('referral:access-count', subscriberId, 1)

  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
