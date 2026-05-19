-- SQL Schema for ThinkPad Premium Store
-- You can import this into phpMyAdmin

CREATE TABLE IF NOT EXISTS `admins` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('superadmin', 'editor') DEFAULT 'editor',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `price` DECIMAL(15, 2) NOT NULL,
  `image_url` TEXT,
  `cpu` VARCHAR(100),
  `ram` VARCHAR(50),
  `storage` VARCHAR(50),
  `display` VARCHAR(100),
  `rating` DECIMAL(2, 1) DEFAULT 4.5,
  `is_promo` TINYINT(1) DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `site_settings` (
  `key` VARCHAR(50) PRIMARY KEY,
  `value` TEXT NOT NULL
);

-- Initial Settings Data
INSERT INTO `site_settings` (`key`, `value`) VALUES 
('hero_title', 'Performance For Professionals.'),
('hero_subtitle', 'Engineered for power, refined for elegance. The legendary ThinkPad reliability meets the future of AI-driven productivity.'),
('hero_spec_ai', 'AI-Enhanced'),
('hero_spec_freq', '5.2 GHz'),
('hero_spec_thermal', 'Thermal Management'),
('service_email', 'gilangpkyaa@gmail.com'),
('service_whatsapp', '087855032334'),
('service_instagram', 'gilang_pkyaa');

-- Initial Admin Data (Password should be hashed in production)
INSERT INTO `admins` (`username`, `password`, `role`) VALUES ('admin', 'admin123', 'superadmin');
