# Stage 1: Build
FROM node:18.20.4-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci --legacy-peer-deps && \
    npm cache clean --force

# Copy application source
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18.20.4-alpine AS production

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev --legacy-peer-deps && \
    npm cache clean --force

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Create directories for persistent data
RUN mkdir -p /app/uploads/HojasDeVida && \
    mkdir -p /app/logs

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nestjs -u 1001

# Change ownership of the app directory and persistent directories
RUN chown -R nestjs:nodejs /app && \
    chown -R nestjs:nodejs /app/uploads && \
    chown -R nestjs:nodejs /app/logs

# Switch to non-root user
USER nestjs

# Declare volumes for persistent data
VOLUME ["/app/uploads", "/app/logs"]

# Expose port (default NestJS port)
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]