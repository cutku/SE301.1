-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3306
-- Üretim Zamanı: 03 Oca 2018, 19:20:20
-- Sunucu sürümü: 5.7.19
-- PHP Sürümü: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `e-lection`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `candidate`
--

DROP TABLE IF EXISTS `candidate`;
CREATE TABLE IF NOT EXISTS `candidate` (
  `candidate_name` varchar(45) NOT NULL,
  `candidate_surname` varchar(45) NOT NULL,
  `candidate_ID` int(15) NOT NULL,
  `candidate_info` longtext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `election`
--

DROP TABLE IF EXISTS `election`;
CREATE TABLE IF NOT EXISTS `election` (
  `election_name` varchar(45) NOT NULL,
  `election_type` varchar(45) NOT NULL,
  `election_status` varchar(45) NOT NULL,
  `election_area_zıp` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `voter`
--

DROP TABLE IF EXISTS `voter`;
CREATE TABLE IF NOT EXISTS `voter` (
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `id` int(14) NOT NULL,
  `e_mail` varchar(45) NOT NULL,
  `password` varchar(16) NOT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `e_mail` (`e_mail`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `voter`
--

INSERT INTO `voter` (`name`, `surname`, `username`, `id`, `e_mail`, `password`) VALUES
('ilkay', 'depe', 'ilkay123', 1000, 'ilkaydepe@gmail.com', '159753123'),
('can', 'utku', 'can101', 1001, 'canutku@gmail.com', '159753123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
