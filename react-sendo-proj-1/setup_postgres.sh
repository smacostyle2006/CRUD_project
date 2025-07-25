#!/bin/bash

set -e

# 1. Cài đặt PostgreSQL nếu chưa có
if ! command -v psql > /dev/null; then
  echo "Installing PostgreSQL..."
  sudo apt-get update
  sudo apt-get install postgresql postgresql-contrib -y
else
  echo "PostgreSQL already installed."
fi

# 2. Khởi động PostgreSQL
echo "Starting PostgreSQL service..."
sudo service postgresql start || sudo systemctl start postgresql

# 3. Đặt lại mật khẩu cho user postgres
echo "Setting password for user postgres..."
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'Testing';"

# 4. Tạo database allproducts (nếu chưa có)
echo "Creating database allproducts (if not exists)..."
sudo -u postgres psql -tc "SELECT 1 FROM pg_database WHERE datname = 'allproducts'" | grep -q 1 || sudo -u postgres createdb allproducts

# 5. Import file SQL (nếu có)
SQL_FILE="src/backend/create-tables.sql" # <-- Sửa lại đường dẫn file SQL cho đúng
if [ -f "$SQL_FILE" ]; then
  echo "Importing SQL file: $SQL_FILE"
  sudo -u postgres psql -d allproducts -f "$SQL_FILE"
else
  echo "SQL file not found at $SQL_FILE, skipping import."
fi

echo "PostgreSQL setup completed!"