# Install dependencies only when needed
FROM node:lts-alpine3.16 AS deps
RUN apk add --no-cache libc6-compat nasm autoconf automake bash libltdl libtool gcc make g++ zlib-dev tzdata
WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install --frozen-lockfile

FROM --platform=linux/amd64 node:lts-alpine3.16 AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm add sharp
RUN npm run build

# Production image, copy all the files and run next
FROM --platform=linux/amd64 node:lts-alpine3.16 AS runner
WORKDIR /app

LABEL org.opencontainers.image.source=https://github.com/parinyapt/prinflix_frontend

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV TZ Asia/Bangkok

RUN apk add --no-cache libc6-compat nasm autoconf automake bash tzdata

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 80

ENV PORT 80

CMD ["node", "server.js"]
