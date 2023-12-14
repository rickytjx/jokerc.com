import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

export const redis = new Redis({
  // eslint-disable-next-line node/prefer-global/process
  url: process.env.UPSTASH_REDIS_REST_URL as string,
  // eslint-disable-next-line node/prefer-global/process
  token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
})

// Create a new ratelimiter, that allows 20 requests per 10 seconds
export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(20, '10 s'),
  analytics: true,
})
