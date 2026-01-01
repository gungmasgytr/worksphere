# WorkSphere - Job Portal Platform

WorkSphere adalah platform job portal modern yang dibangun dengan Laravel 12 dan React, dirancang untuk menghubungkan pencari kerja (job seekers) dengan perusahaan (recruiters) dalam ekosistem freelance dan pekerjaan profesional.

## ✨ Fitur Utama

### 👤 Untuk Job Seekers
- **Profile Management**: Lengkapi profile dengan skills, experience, dan bio
- **Job Browsing**: Cari dan apply pekerjaan freelance
- **Application Tracking**: Pantau status lamaran pekerjaan
- **Dashboard**: Overview aplikasi dan rekomendasi pekerjaan

### 🏢 Untuk Recruiters
- **Company Profile**: Kelola informasi perusahaan
- **Job Posting**: Buat dan kelola posting pekerjaan
- **Application Management**: Tinjau dan kelola lamaran pekerja
- **Dashboard**: Statistik perusahaan dan kandidat

### 🔐 Sistem Autentikasi
- Role-based authentication (Jobseeker/Recruiter)
- Secure login dan registration
- Protected routes berdasarkan role

## 🛠️ Tech Stack

### Backend
- **Laravel 12.44.0** - PHP Framework
- **MySQL** - Database
- **Spatie Laravel Permission** - Role & Permission Management
- **Inertia.js** - Modern Monolith Architecture

### Frontend
- **React 18** - UI Framework
- **Inertia.js React** - SPA tanpa API terpisah
- **Tailwind CSS** - Utility-first CSS Framework
- **Vite** - Build tool dan dev server

### Development Tools
- **Composer** - PHP Dependency Manager
- **NPM** - Node.js Package Manager
- **Laravel Breeze** - Authentication scaffolding
- **ESLint** - Code linting

## 📋 Prerequisites

Sebelum menjalankan project ini, pastikan Anda memiliki:

- **PHP 8.2 atau lebih tinggi**
- **Composer** - PHP dependency manager
- **Node.js 18+ & NPM** - JavaScript runtime dan package manager
- **MySQL 8.0+** - Database server
- **Git** - Version control

### Verifikasi Instalasi

```bash
# Check PHP version
php --version

# Check Composer
composer --version

# Check Node.js & NPM
node --version
npm --version

# Check MySQL
mysql --version
```

## 🚀 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/gungmasgytr/worksphere.git
cd worksphere
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install Node.js Dependencies

```bash
npm install
```

### 4. Environment Configuration

```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 5. Database Setup

```bash
# Create database di MySQL
# Nama database sesuai dengan .env (default: worksphere)

# Run migrations dan seeders
php artisan migrate:fresh --seed
```

### 6. Build Assets

```bash
# Build untuk production
npm run build

# Atau untuk development
npm run dev
```

### 7. Start Development Server

```bash
# Start Laravel server
php artisan serve

# Server akan berjalan di: http://localhost:8000
```

## 🔧 Configuration

### Environment Variables (.env)

```env
APP_NAME=WorkSphere
APP_ENV=local
APP_KEY=base64_generated_key
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=worksphere
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password

# Inertia.js
VITE_APP_NAME="${APP_NAME}"
```

### Database Configuration

Pastikan database MySQL sudah dibuat dan kredensial di `.env` sudah benar.

## 🎯 Usage

### Akses Aplikasi

1. Buka browser dan akses: `http://localhost:8000`
2. Register sebagai Jobseeker atau Recruiter
3. Login dan lengkapi profile
4. Explore fitur sesuai role Anda

### User Roles

#### Jobseeker
- Dashboard: `/jobseeker/dashboard`
- Profile: `/profile`
- Edit Profile: `/profile/edit`

#### Recruiter
- Dashboard: `/recruiter/dashboard`
- Profile: `/profile`
- Edit Profile: `/profile/edit`

## 🧪 Testing

### Unit Tests & Feature Tests

```bash
# Run all tests
php artisan test

# Run specific test
php artisan test --filter=ExampleTest

# Run with coverage
php artisan test --coverage
```

### Manual Testing

1. **Authentication Testing**
   - Register sebagai jobseeker dan recruiter
   - Test login/logout
   - Test role-based access

2. **Profile Management**
   - Create/update jobseeker profile
   - Create/update recruiter profile
   - Test validation rules

3. **Dashboard Testing**
   - Access dashboards sesuai role
   - Test data display

## 📁 Project Structure

```
worksphere/
├── app/                          # Laravel Application Code
│   ├── Http/Controllers/         # Controllers
│   │   ├── Auth/                # Authentication Controllers
│   │   ├── DashboardController.php
│   │   └── ProfileController.php
│   ├── Models/                  # Eloquent Models
│   │   ├── User.php
│   │   ├── JobseekerProfile.php
│   │   └── RecruiterProfile.php
│   └── Providers/
├── bootstrap/                   # Laravel Bootstrap
├── config/                      # Configuration Files
├── database/                    # Database Migrations & Seeders
│   ├── migrations/             # Database Schema
│   └── seeders/                # Database Seeders
├── public/                      # Public Assets
├── resources/                   # Views & Frontend Assets
│   ├── js/                     # React Components
│   │   ├── Components/         # Reusable Components
│   │   └── Pages/             # Page Components
│   └── views/                  # Blade Templates
├── routes/                      # Route Definitions
│   └── web.php                 # Web Routes
├── storage/                     # File Storage
├── tests/                       # Test Files
├── vendor/                      # Composer Dependencies
├── .env.example                # Environment Template
├── artisan                     # Laravel CLI
├── composer.json               # PHP Dependencies
├── package.json                # Node Dependencies
├── vite.config.js              # Vite Configuration
└── README.md                   # This File
```

## 🔒 Security Features

- **CSRF Protection**: Semua form dilindungi CSRF token
- **Role-based Access Control**: Route protection berdasarkan user role
- **Input Validation**: Server-side validation untuk semua input
- **SQL Injection Protection**: Menggunakan Eloquent ORM
- **XSS Protection**: Auto-escaping di Blade templates

## 🚀 Deployment

### Production Build

```bash
# Build assets untuk production
npm run build

# Optimize Laravel untuk production
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Setup untuk Production

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database production
DB_CONNECTION=mysql
DB_HOST=your_production_db_host
DB_DATABASE=your_production_db
DB_USERNAME=your_production_user
DB_PASSWORD=your_production_password

# Security
APP_KEY=your_generated_app_key
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Development Guidelines

- Follow PSR-12 coding standards
- Write tests untuk fitur baru
- Update documentation
- Use meaningful commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**1. Permission Issues**
```bash
# Fix storage permissions
chmod -R 755 storage/
chmod -R 755 bootstrap/cache/
```

**2. Database Connection Error**
- Pastikan MySQL service running
- Check database credentials di `.env`
- Test connection: `php artisan migrate:status`

**3. Assets Not Loading**
```bash
# Clear cache dan rebuild
php artisan cache:clear
php artisan view:clear
npm run build
```

**4. Permission Denied Errors**
```bash
# Install dependencies dengan permissions yang benar
composer install --no-dev --optimize-autoloader
npm install --production=false
```

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/your-username/worksphere/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/worksphere/discussions)
- **Documentation**: Check `/docs` folder

## 🙏 Acknowledgments

- [Laravel](https://laravel.com/) - The PHP Framework
- [React](https://reactjs.org/) - UI Library
- [Inertia.js](https://inertiajs.com/) - Modern Monolith
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Spatie Laravel Permission](https://spatie.be/docs/laravel-permission) - Role Management

---

**WorkSphere** - Connecting Talent with Opportunity 🚀</content>
<parameter name="oldString"><p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

---

**WorkSphere** - Connecting Talent with Opportunity 🚀
