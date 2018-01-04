-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Anamakine: localhost
-- Üretim Zamanı: 04 Oca 2018, 00:03:39
-- Sunucu sürümü: 5.7.20-0ubuntu0.16.04.1
-- PHP Sürümü: 7.0.24-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `E-lection`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `candidate`
--

CREATE TABLE `candidate` (
  `id` int(12) NOT NULL,
  `name` varchar(64) CHARACTER SET utf8 NOT NULL,
  `codename` varchar(32) CHARACTER SET utf8 NOT NULL,
  `userId` int(12) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `candidatebyelection`
--

CREATE TABLE `candidatebyelection` (
  `id` int(12) NOT NULL,
  `candidateId` int(12) NOT NULL,
  `electionId` int(12) NOT NULL,
  `totalVotes` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `election`
--

CREATE TABLE `election` (
  `id` int(12) NOT NULL,
  `name` varchar(64) CHARACTER SET utf8 NOT NULL,
  `typeId` int(15) NOT NULL,
  `status` int(5) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `electiontypes`
--

CREATE TABLE `electiontypes` (
  `id` int(12) NOT NULL,
  `name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `users`
--

CREATE TABLE `users` (
  `id` int(14) NOT NULL,
  `name` varchar(64) NOT NULL,
  `surname` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(256) NOT NULL,
  `type` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `votesbyelection`
--

CREATE TABLE `votesbyelection` (
  `id` int(12) NOT NULL,
  `userId` int(12) NOT NULL,
  `electionId` int(12) NOT NULL,
  `isUsed` tinyint(1) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `candidate`
--
ALTER TABLE `candidate`
  ADD UNIQUE KEY `candidate_ID` (`id`);

--
-- Tablo için indeksler `candidatebyelection`
--
ALTER TABLE `candidatebyelection`
  ADD UNIQUE KEY `cbe_ID` (`id`);

--
-- Tablo için indeksler `election`
--
ALTER TABLE `election`
  ADD UNIQUE KEY `election_ID` (`id`);

--
-- Tablo için indeksler `electiontypes`
--
ALTER TABLE `electiontypes`
  ADD UNIQUE KEY `et_ID` (`id`);

--
-- Tablo için indeksler `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `user_ID` (`id`);

--
-- Tablo için indeksler `votesbyelection`
--
ALTER TABLE `votesbyelection`
  ADD UNIQUE KEY `vbe_ID` (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `candidate`
--
ALTER TABLE `candidate`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- Tablo için AUTO_INCREMENT değeri `candidatebyelection`
--
ALTER TABLE `candidatebyelection`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- Tablo için AUTO_INCREMENT değeri `election`
--
ALTER TABLE `election`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- Tablo için AUTO_INCREMENT değeri `electiontypes`
--
ALTER TABLE `electiontypes`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
--
-- Tablo için AUTO_INCREMENT değeri `users`
--
ALTER TABLE `users`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Tablo için AUTO_INCREMENT değeri `votesbyelection`
--
ALTER TABLE `votesbyelection`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
