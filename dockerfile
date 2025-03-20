"# Stage 1: Build React App
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy semua file ke dalam container
COPY . .

# Build aplikasi React
RUN npm run build

# Stage 2: Run dengan serve
FROM node:18-alpine
WORKDIR /app

# Install serve secara global
RUN npm install -g serve

# Copy hasil build dari stage 1
COPY --from=build /app/dist /app/dist

# Expose port 5173
EXPOSE 5173

# Jalankan serve untuk menyajikan React App
CMD [""serve"", ""-s"", ""dist"", ""-l"", ""5173""]"
