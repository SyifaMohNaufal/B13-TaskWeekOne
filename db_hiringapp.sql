-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 08, 2020 at 06:33 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hiringapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_logo` varchar(255) DEFAULT NULL,
  `company_location` varchar(255) DEFAULT NULL,
  `company_desc` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_At` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id_company`, `id_user`, `company_name`, `company_logo`, `company_location`, `company_desc`, `created_at`, `updated_At`) VALUES
(1, 96, 'pt jaya abadi', 'src\\uploads\\stiker mozstick.jpg', 'jakarta', 'perusahaan batako', '2019-11-20 03:35:07', '2019-11-24 08:13:07'),
(2, 91, 'pt opal jaya abadi', 'src\\uploads\\logo baru.jpg', 'jonggol', 'perusahaan batu bata', '2019-11-24 07:31:41', '2019-11-24 07:31:41'),
(18, 80, NULL, NULL, NULL, NULL, '2019-12-08 15:23:28', '2019-12-08 15:23:28'),
(19, 81, NULL, NULL, NULL, NULL, '2019-12-08 15:26:23', '2019-12-08 15:26:23'),
(20, 82, NULL, NULL, NULL, NULL, '2019-12-08 15:27:13', '2019-12-08 15:27:13'),
(21, 83, NULL, NULL, NULL, NULL, '2019-12-08 15:47:06', '2019-12-08 15:47:06'),
(22, 84, NULL, NULL, NULL, NULL, '2019-12-08 15:53:15', '2019-12-08 15:53:15'),
(23, 85, NULL, NULL, NULL, NULL, '2019-12-08 16:05:32', '2019-12-08 16:05:32'),
(24, 86, NULL, NULL, NULL, NULL, '2019-12-08 16:11:03', '2019-12-08 16:11:03'),
(25, 87, NULL, NULL, NULL, NULL, '2019-12-08 16:55:26', '2019-12-08 16:55:26'),
(26, 88, NULL, NULL, NULL, NULL, '2019-12-08 16:59:56', '2019-12-08 16:59:56'),
(27, 89, NULL, NULL, NULL, NULL, '2019-12-08 17:04:07', '2019-12-08 17:04:07');

-- --------------------------------------------------------

--
-- Table structure for table `engineer`
--

CREATE TABLE `engineer` (
  `id_eng` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `eng_username` varchar(255) DEFAULT NULL,
  `eng_name` varchar(255) NOT NULL,
  `eng_image` varchar(1000) DEFAULT NULL,
  `eng_desc` varchar(255) NOT NULL,
  `project` int(255) DEFAULT NULL,
  `success` int(100) DEFAULT NULL,
  `eng_location` varchar(255) NOT NULL,
  `eng_dob` varchar(10) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `engineer`
--

INSERT INTO `engineer` (`id_eng`, `id_user`, `eng_username`, `eng_name`, `eng_image`, `eng_desc`, `project`, `success`, `eng_location`, `eng_dob`, `created_at`, `updated_at`) VALUES
(3, 0, 'asepsurasep', 'Asep Surasep', 'http://52.87.164.251:3013/image/eng_image-1575011650726.jpg', 'Front End Developer', 16, 80, 'Garut', '1995-04-22', '2019-11-20 06:38:15', '2019-11-29 07:14:10'),
(5, 0, 'sitimaemunah', 'Siti Maemunah', 'http://52.87.164.251:3013/image/eng_image-1575011597726.jpg', 'Front End Developer', 20, 75, 'Bandung', '1994-03-12', '2019-11-20 06:38:35', '2019-11-29 07:13:17'),
(7, 0, 'tejodwiputro', 'Tejo Dwi Putro', 'http://52.87.164.251:3013/image/eng_image-1575011768499.jpg', 'Full Stack Developer', 12, 85, 'Bojonegoro', '1994-05-09', '2019-11-22 11:07:30', '2019-11-29 07:16:08'),
(9, 0, 'annisanurhidayah', 'Annisa Nurhidayah', 'http://52.87.164.251:3013/image/eng_image-1575012997621.jpg', 'Back End Developer', 14, 70, 'Jogjakarta', '1993-02-18', '2019-11-23 07:51:09', '2019-11-29 07:36:37'),
(10, 0, 'arifsumaryono', 'Arif Sumaryono', 'http://52.87.164.251:3013/image/eng_image-1575597065556.jpg', 'Back End Developer', NULL, NULL, 'Lumajang', '1995-04-12', '2019-12-06 01:51:05', '2019-12-06 01:51:05'),
(11, 0, 'ramdanidani', 'Ramdani Dani', 'http://52.87.164.251:3013/image/eng_image-1575597135574.jpg', 'Front End Developer', NULL, NULL, 'Bogor', '1994-03-16', '2019-12-06 01:52:15', '2019-12-06 01:52:15'),
(12, 0, 'annisaayu', 'Annisa Ayu ', 'http://52.87.164.251:3013/image/eng_image-1575597278593.jpg', 'Front End Developer', NULL, NULL, 'Magelang', '1995-06-17', '2019-12-06 01:54:38', '2019-12-06 01:54:38'),
(14, 0, 'mariskatamaradita', 'Mariska Tamaradita', 'http://52.87.164.251:3013/image/eng_image-1575597433078.jpg', 'Back End Developer', NULL, NULL, 'Semarang', '1994-03-21', '2019-12-06 01:57:13', '2019-12-06 01:57:13'),
(15, 0, 'ragilnurihsan', 'Ragil Nur Ihsan', 'http://52.87.164.251:3013/image/eng_image-1575597493764.jpg', 'Front End Developer', NULL, NULL, 'Tangerang', '1995-02-29', '2019-12-06 01:58:13', '2019-12-06 01:58:13'),
(16, 0, 'fakhruddin', 'Fakhri Fakhruddin', 'http://52.87.164.251:3013/image/eng_image-1575597566889.png', 'Full Stack Developer', NULL, NULL, 'Bekasi', '1994-08-29', '2019-12-06 01:59:27', '2019-12-06 01:59:27'),
(17, 0, 'yudagunawan', 'Yuda Gunawan', 'http://52.87.164.251:3013/image/eng_image-1575597632605.jpg', 'Back End Developer', NULL, NULL, 'Cirebon', '1995-05-20', '2019-12-06 02:00:32', '2019-12-06 02:00:32'),
(18, 0, 'ajinugroho', 'Aji Nugroho', 'http://52.87.164.251:3013/image/eng_image-1575597713829.jpg', 'Front End Developer', NULL, NULL, 'Sragen', '1996-07-22', '2019-12-06 02:01:53', '2019-12-06 02:01:53'),
(19, 90, 'syifamnaufal', 'Syifa Mohammad Naufal', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO4tOLoCpCEaarwQ9T0yKcWdmlybvZBGFOT95bh6SEwOnkDrZ3', 'Full Stack Developer', NULL, NULL, '', '', '2019-12-08 17:09:32', '2019-12-08 17:09:32');

-- --------------------------------------------------------

--
-- Stand-in structure for view `engineer_skill`
-- (See below for the actual view)
--
CREATE TABLE `engineer_skill` (
`id_eng` int(11)
,`eng_username` varchar(255)
,`eng_name` varchar(255)
,`eng_image` varchar(1000)
,`eng_desc` varchar(255)
,`project` int(255)
,`success` int(100)
,`eng_location` varchar(255)
,`eng_dob` varchar(10)
,`skill_name` varchar(255)
,`skill_level` varchar(255)
,`showcase` varchar(255)
,`updated_At` timestamp
);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id_proj` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_company` int(11) NOT NULL,
  `proj_name` varchar(255) DEFAULT NULL,
  `proj_desc` varchar(255) DEFAULT NULL,
  `proj_deadline` varchar(255) DEFAULT NULL,
  `proj_fee` int(255) DEFAULT NULL,
  `status` enum('0','1','2') NOT NULL DEFAULT '1',
  `progress` enum('0','1','2') NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id_proj`, `id_user`, `id_company`, `proj_name`, `proj_desc`, `proj_deadline`, `proj_fee`, `status`, `progress`, `createdAt`, `updatedAt`) VALUES
(1, 96, 1, 'website', 'website', '2019-12-31', 3000000, '1', '0', '2019-12-13 14:00:33', '2019-12-13 14:00:33'),
(5, 96, 1, 'Website warteg biru', 'Membuat rancangan front end untuk website warteg biru dengan tampilan yang menarik', '2020-02-07', 5000000, '1', '0', '2019-12-13 14:00:33', '2019-12-13 14:00:33'),
(6, 91, 2, 'website warung tegal biru', 'membuat rancangan back end untuk website warteg biru', '2020-01-31', 30000000, '1', '0', '2019-12-13 14:00:33', '2019-12-13 14:00:33'),
(7, 0, 0, 'kjanksjfbf', 'djnfdkjfdnkfd', NULL, NULL, '1', '0', '2019-12-15 15:17:30', '2019-12-15 15:17:30'),
(8, 0, 0, 'kjanksjfbf', 'djnfdkjfdnkfd', NULL, NULL, '1', '0', '2019-12-15 15:19:18', '2019-12-15 15:19:18'),
(9, 0, 0, 'project test', 'project test', '2020-12-31', 1000000, '1', '0', '2019-12-15 16:17:07', '2019-12-15 16:17:07'),
(10, 96, 1, 'project test', 'project test', '2020-12-31', 1000000, '1', '0', '2019-12-15 16:41:33', '2019-12-15 16:41:33'),
(11, 96, 1, 'Aaaaa', 'Aaaa', NULL, 111111, '1', '0', '2019-12-15 17:46:31', '2019-12-15 17:46:31');

-- --------------------------------------------------------

--
-- Table structure for table `project_eng`
--

CREATE TABLE `project_eng` (
  `id_projeng` int(11) NOT NULL,
  `id_proj` int(11) NOT NULL,
  `id_eng` int(11) NOT NULL,
  `sts_project_eng` enum('0','1','2','3') DEFAULT '1',
  `date_accepted_Eng` datetime DEFAULT NULL,
  `progress` enum('0','1') DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_eng`
--

INSERT INTO `project_eng` (`id_projeng`, `id_proj`, `id_eng`, `sts_project_eng`, `date_accepted_Eng`, `progress`, `createdAt`, `updatedAt`) VALUES
(2, 5, 9, '1', NULL, NULL, '2019-12-13 15:18:35', '2019-12-13 15:18:35'),
(3, 1, 17, '1', NULL, NULL, '2019-12-13 15:19:35', '2019-12-13 15:19:35'),
(4, 5, 3, '1', NULL, NULL, '2019-12-13 15:31:39', '2019-12-13 15:31:39'),
(5, 1, 3, '1', NULL, NULL, '2019-12-13 17:33:03', '2019-12-13 17:33:03'),
(6, 1, 3, '1', NULL, NULL, '2019-12-13 17:46:39', '2019-12-13 17:46:39'),
(7, 6, 7, '1', NULL, NULL, '2019-12-14 03:15:35', '2019-12-14 03:15:35'),
(8, 1, 3, '1', NULL, NULL, '2019-12-14 13:14:47', '2019-12-14 13:14:47'),
(9, 1, 3, '1', NULL, NULL, '2019-12-14 13:15:35', '2019-12-14 13:15:35'),
(10, 1, 3, '1', NULL, NULL, '2019-12-14 13:16:00', '2019-12-14 13:16:00'),
(11, 1, 3, '1', NULL, NULL, '2019-12-14 13:16:37', '2019-12-14 13:16:37');

-- --------------------------------------------------------

--
-- Table structure for table `showcase`
--

CREATE TABLE `showcase` (
  `id_showcase` int(11) NOT NULL,
  `id_eng` int(11) NOT NULL,
  `showcase` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `showcase`
--

INSERT INTO `showcase` (`id_showcase`, `id_eng`, `showcase`) VALUES
(1, 3, 'github/Naufal'),
(2, 4, 'github/hahihuheho'),
(3, 5, 'github/moh naufal'),
(5, 7, 'github/duljak'),
(6, 9, 'github/annisanrhdyh');

-- --------------------------------------------------------

--
-- Table structure for table `skill`
--

CREATE TABLE `skill` (
  `id_skill` int(11) NOT NULL,
  `id_eng` int(11) NOT NULL,
  `skill_name` varchar(255) NOT NULL,
  `skill_level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skill`
--

INSERT INTO `skill` (`id_skill`, `id_eng`, `skill_name`, `skill_level`) VALUES
(3, 3, 'javascript', '80'),
(4, 5, 'PHP', '69'),
(7, 7, 'Python', '85'),
(8, 9, 'Javascript', '78');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` enum('1','2') DEFAULT NULL,
  `created_At` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_At` timestamp NOT NULL DEFAULT current_timestamp(),
  `auth` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `email`, `name`, `level`, `created_At`, `updated_At`, `auth`) VALUES
(5, 'naufalnaufal', 'naufal123', 'naufal123@naufal.com', 'naufal jirolu', '', '2019-11-20 09:19:51', '2019-11-20 09:19:51', ''),
(8, 'akunbaruloh', '$2a$10$nin9Dt0g5GZcRP/fK9zqeOKPjmNZbDid21ZltE0AP3xCs0ykAyW3.', 'akunbaru@akunbaru.com', 'akun baru', '', '2019-11-20 18:24:25', '2019-11-20 18:24:25', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo4LCJ1c2VybmFtZSI6ImFrdW5iYXJ1bG9oIiwiZW1haWwiOiJha3VuYmFydUBha3VuYmFydS5jb20iLCJuYW1lIjoiYWt1biBiYXJ1IiwiaWF0IjoxNTc1MDIwNTIwLCJleHAiOjE1NzUxMDY5MjB9.beDIct4nCiO5TE65lXlUtOMDUoQbBKz144acozUbZA0'),
(9, 'halloha', '$2a$10$bl3rMsjq1Z.wrKYRXKVuVO8YiXwuCX4kgrLhpUeZR5lEiqFN7wxbq', 'laho@loha.com', 'halo loha', '', '2019-11-20 18:53:06', '2019-11-20 18:53:06', ''),
(10, 'akuusernameloh', '$2a$10$VM8kb3.UR5N/ioPvndmjb.mMIO/kZP.yguI1olu9STy3AvfiKN7pO', 'akuemail@email.com', 'aku punya nama loh', '', '2019-11-21 08:32:46', '2019-11-21 08:32:46', ''),
(13, 'akun_baru_loh', '$2a$10$Kdt/WSES1ajm6cJYVaxZyuuUWh2QzNfVDnmtJgyBUFNgUZYmy8mKu', 'emailbaru@baru.com', 'ini baru loh', '', '2019-11-22 16:50:28', '2019-11-22 16:50:28', NULL),
(14, 'asep', '$2a$10$HP85SWRlZI6uecHGW4mzEODSVgdaeMf7QhWOzWhP.7hv5fxBJXoQO', 'iniemail@ini.com', 'ini nama loh', '', '2019-11-23 04:41:16', '2019-11-23 04:41:16', NULL),
(15, 'asep', '$2a$10$jbKBqg9cu0S1bWGbiQHN5ONYKVJyIvqAfH2WYs8ZNkXnkxowCaop.', 'iniemail@ini.com', 'ini nama loh', '', '2019-11-23 08:18:37', '2019-11-23 08:18:37', NULL),
(16, 'iniusernamelohh', '$2a$10$cfo5pyWOj1T6xUwPeGspNeC2PyXRWrDl/NylkoW.C6tOqnVHqleIa', 'iniemail@ini.com', 'ini nama loh', '', '2019-11-28 08:26:15', '2019-11-28 08:26:16', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoxNiwidXNlcm5hbWUiOiJpbml1c2VybmFtZWxvaGgiLCJlbWFpbCI6ImluaWVtYWlsQGluaS5jb20iLCJuYW1lIjoiaW5pIG5hbWEgbG9oIiwiaWF0IjoxNTc0OTUyNTk0LCJleHAiOjE1NzUwMzg5OTR9.KeKebBXlNs5VLktHiocuCTXmTZTthJ-jxX7EpHgm86c'),
(17, 'fedcba', '$2a$10$qZWd2BEN3FvYNF8lycXZT.ZPuFTdLSJik9mhsciBfzRR.Dpaed5jq', 'iniemail@ini.com', 'ini nama loh', '', '2019-11-28 10:07:38', '2019-11-28 10:07:38', NULL),
(18, 'aaaaaa', '$2a$10$wuu1NqlH.KqmDuy32nVEsOnw8lbUjtFOAM9kwkLxrEr43g2G7NkZ.', 'aaaaaa', 'sassss', '', '2019-11-28 10:16:20', '2019-11-28 10:16:20', NULL),
(22, 'abc123', '$2a$10$8uDjaCxljGOkNmSL5eeVPuY1plf5/lVqU55IDcL3kc55YHORy3hNm', 'abc123@def.com', 'abc 123 def', '', '2019-11-28 10:25:34', '2019-11-28 10:25:34', NULL),
(23, 'defghi', '$2a$10$cgjJ0MEBmih31vYh7eX5EeQg7L77FHV1Cdg4ZdcT0o/7LKsWH3Wf.', 'defghi@jkl.com', 'def ghi', '', '2019-11-28 10:29:19', '2019-11-28 10:29:19', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoyMywidXNlcm5hbWUiOiJkZWZnaGkiLCJlbWFpbCI6ImRlZmdoaUBqa2wuY29tIiwibmFtZSI6ImRlZiBnaGkiLCJpYXQiOjE1NzUwNDExNzQsImV4cCI6MTU3NTEyNzU3NH0.4JrWhXOB5yB7JIPWJU0G3H5o-rF3gVlkgDYHoVTtECw'),
(24, 'sanserif', '$2a$10$bVOSEwbRytQpV/B34Es5AurKZVavsxR79LXIZADv9AtO6j/uU9PNe', 'bukanebi2@hotmail.com', 'sanserif', '', '2019-11-28 11:28:45', '2019-11-28 11:28:45', NULL),
(25, 'budisetiawan', '$2a$10$GwCJgAEi.HTUhPTSZtEH2OK9vhK4bk.V/LAudoSGXisoyk.mfebGW', 'budisetiawan@email.com', 'budi setiawan', '', '2019-11-29 12:14:58', '2019-11-29 12:14:58', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbG9hZCI6eyJpZF91c2VyIjoyNSwicGFzc3dvcmQiOiJhYmMxMjMifSwiaWF0IjoxNTc3MDY0MjE2LCJleHAiOjE1NzcxMjQyMTZ9.PWrb1g-2_2bch8dUWNJEKkfaAsg5C3mUR_nx_Q9BIEs'),
(29, 'naufal94', '$2a$10$N4hsIshhgjtuY/O2CcvvAeVuiR5wdnRsw44G4wmVU95UWp7gH833C', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-11-30 03:48:36', '2019-11-30 03:48:36', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoyOSwidXNlcm5hbWUiOiJuYXVmYWw5NCIsImVtYWlsIjoiU3lpZmFtbmF1ZmFsQGdtYWlsLmNvbSIsIm5hbWUiOiJTeWlmYSBNb2hhbW1hZCBOYXVmYWwiLCJpYXQiOjE1NzUwODU3MzEsImV4cCI6MTU3NTE3MjEzMX0.sLtAxqdpRrPQXuzy6_Prf71QYD25mTgr0rwIxQW1T2Q'),
(62, 'kjsdkdja', '$2a$10$q5JFSkLnxkw2O6DOaZimDeqVnGdMrmAyHbWSZ4dCM0WGfm2WPF7g6', 'kjsdhkjshds', 'kjahkjdh', '', '2019-11-30 16:26:10', '2019-11-30 16:26:10', NULL),
(67, 'bukanebi', '123456', 'ebifebria@yahoo.co.id', 'ebifebriansyah', '', '2019-12-01 19:12:40', '2019-12-01 19:12:40', NULL),
(68, 'test', '123456', 'test@test.test', 'test', '', '2019-12-01 19:14:27', '2019-12-01 19:14:27', NULL),
(69, 'testdua', '123456', 'a@a.a', 'test', '', '2019-12-01 19:19:25', '2019-12-01 19:19:25', NULL),
(70, 'syifamnaufal', 'abcdefg', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-12-02 02:26:32', '2019-12-02 02:26:32', NULL),
(71, 'syifamnaufal', 'asdfqwer', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-12-05 02:38:15', '2019-12-05 02:38:15', NULL),
(72, 'test123', '$2a$10$F8H2g3o23MF3.JqcYFroTuLYTMWrDkYr8drxHQJdGWz6sgWsvynPK', 'test@123.com', 'test 123 ', '', '2019-12-06 00:05:04', '2019-12-06 00:05:04', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbG9hZCI6eyJpZF91c2VyIjo3MiwicGFzc3dvcmQiOiJ0ZXN0MTIzIn0sImlhdCI6MTU3NTU5NDAwNiwiZXhwIjoxNTc1NjU0MDA2fQ.b7lPqas2t7vbsz0c_1Zo-c0eK33IdQxbRWQBjudV0Uc'),
(73, 'cobacoba123', '$2a$10$n94P.HMv9msjEBIQfyPLZuCYotLjqIsD8i2S/0w3uGsqanJa6bDFO', 'coba@123.com', 'coba 123 ', '', '2019-12-06 00:09:38', '2019-12-06 00:09:38', NULL),
(74, 'akuanakindo', 'akuanak', 'akuanakindo@email.com', 'aku anak indonesia', '', '2019-12-07 01:28:27', '2019-12-07 01:28:27', NULL),
(75, 'yusufpratama', '123456', 'yusuf@pratama.com', 'yusuf pratama', '', '2019-12-07 04:23:01', '2019-12-07 04:23:01', NULL),
(76, 'syifamnaufal', 'abcdefg', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-12-08 13:30:53', '2019-12-08 13:30:53', NULL),
(77, 'syifamnaufal', '123456', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-12-08 13:34:12', '2019-12-08 13:34:12', NULL),
(78, 'syifamnaufal', 'asdfqwer', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-12-08 13:36:52', '2019-12-08 13:36:52', NULL),
(79, 'syifamnaufal', 'abcdefg', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '', '2019-12-08 13:39:08', '2019-12-08 13:39:08', NULL),
(80, 'syifamnaufal', 'abcdefg', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '1', '2019-12-08 15:23:28', '2019-12-08 15:23:28', NULL),
(81, 'smnaufal', '12345', 'naufal@gmail.com', 'Syifa Mohammad Naufal', '1', '2019-12-08 15:26:23', '2019-12-08 15:26:23', NULL),
(82, 'k;jdfndfkjnfdkj', '12345', 'kjnkjf@kfdkdf.com', 'kjnakjnfklfd', '1', '2019-12-08 15:27:13', '2019-12-08 15:27:13', NULL),
(83, 'naufalsm', '123123', 'naufal@naufal.com', 'Syifa Mohammad Naufal', '1', '2019-12-08 15:47:06', '2019-12-08 15:47:06', NULL),
(84, 'budisetiawan', '123', '123@123.com', '123', '1', '2019-12-08 15:53:15', '2019-12-08 15:53:15', NULL),
(85, 'budisetiawan', '$2a$10$ty7nswK107TB6u8OnEok9.AlB1/ydsto/mzUwbYVbcmuM/wV4hXka', '123@123.com', '1234', '1', '2019-12-08 16:05:32', '2019-12-08 16:05:32', NULL),
(86, '123123123', '$2a$10$0OIiRNrGaY7g.xm8fIaPCegtGeEEMBOGTLKJpNDi7ffa.noSY.ihm', '123@123.com', '123123123', '1', '2019-12-08 16:11:03', '2019-12-08 16:11:03', NULL),
(87, 'budisetiawan', '$2a$10$R2o2IU7JVCydVIJN4V62eOqPkIczUx6wExVEjBT5Rz4mJWar15HA.', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '1', '2019-12-08 16:55:26', '2019-12-08 16:55:26', NULL),
(88, 'syifamnaufal', '$2a$10$ccisy8Ad9c0f38WsYb3YZeGbbN3wfOJ1eBkWCsC7aC4mzibD2K1OS', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '1', '2019-12-08 16:59:56', '2019-12-08 16:59:56', NULL),
(89, 'testbaru', '$2a$10$8xAjOoD.fclO2Bpqghwjr.HrirdERISDRnJnsOqGfra9gyngvT/Ze', 'test@baru.com', 'test baru', '1', '2019-12-08 17:04:07', '2019-12-08 17:04:07', NULL),
(90, 'syifamnaufal', '$2a$10$GYRS2aRO6VtZlyu/kbWJM.RlzhYNkbPTMnUTr1UeI.Xfo7MOvuWd6', 'Syifamnaufal@gmail.com', 'Syifa Mohammad Naufal', '2', '2019-12-08 17:09:32', '2019-12-08 17:09:32', NULL),
(91, 'buatanakokcoba2', '$2a$10$uyWhJlSUcIfwKsSDxR28e.HPDoL6mqeIARqu0tMBUmMNIE4JRmYTm', 'coba@123.com', 'coba 123 ', '1', '2019-12-12 04:40:18', '2019-12-12 04:40:18', NULL),
(96, 'Ebi', '$2a$10$.VsknRuktGYM5xMqyQjDpu16hvpUzNzVrznFUJqy/fY3wtjBWi2Ly', 'Ebi', 'Ebi', '1', '2019-12-12 09:54:23', '2019-12-12 09:54:23', NULL),
(97, 'Erdindin', '$2a$10$5v41fPQtNVkeOMq6QrDq8OOma7aDDgJxZ/./6pHODl99UjZh0qRdq', 'Erdin@erdin.com', 'Erdin din', NULL, '2019-12-13 02:24:19', '2019-12-13 02:24:19', NULL),
(98, 'Abcdef', '$2a$10$vdNE7MXtmgV4/0HXmq5ur.1qUzTbYvKKOnmIIVCVEnkRdTgVNAAoi', 'Abc@def.com', 'Abc def', NULL, '2019-12-13 02:26:56', '2019-12-13 02:26:56', NULL),
(99, 'Naufalnaufal11', '$2a$10$x2iQ95O5LkiLVXvQHhOLX.5ATlGhno8k2Oxoakw2uZdCUyzOy423m', 'Naufal@naufal.com', 'Mohammad Naufal', '1', '2019-12-14 03:14:46', '2019-12-14 03:14:46', NULL),
(100, 'Asdfa', '$2a$10$KVn4UpEKClBvuSKxYSU65eW8GKQ0AufG5o4EC3DNAhpJqe1U5hdN2', 'Asdfa', 'Asdfa', '2', '2019-12-15 12:10:44', '2019-12-15 12:10:44', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwbG9hZCI6eyJpZF91c2VyIjoxMDAsInBhc3N3b3JkIjoiQXNkZmEifSwiaWF0IjoxNTc2NDUxNjA5LCJleHAiOjE1NzY1MTE2MDl9.w1aPkxA6gl3K0LJHkKzUXH0Paz9TWTgwqhL2E4KyPNM');

--
-- Triggers `user`
--
DELIMITER $$
CREATE TRIGGER `after_user_insert` AFTER INSERT ON `user` FOR EACH ROW BEGIN
    IF NEW.level = '2' THEN
        INSERT INTO engineer(eng_name, id_user)
        VALUES(new.name, new.id_user);
    ELSEIF NEW.level = '1' THEN
    	INSERT INTO company(id_user)
        VALUES(new.id_user);
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_projeng`
-- (See below for the actual view)
--
CREATE TABLE `v_projeng` (
`proj_name` varchar(255)
,`eng_name` varchar(255)
,`status` enum('0','1','2','3')
);

-- --------------------------------------------------------

--
-- Structure for view `engineer_skill`
--
DROP TABLE IF EXISTS `engineer_skill`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `engineer_skill`  AS  select `engineer`.`id_eng` AS `id_eng`,`engineer`.`eng_username` AS `eng_username`,`engineer`.`eng_name` AS `eng_name`,`engineer`.`eng_image` AS `eng_image`,`engineer`.`eng_desc` AS `eng_desc`,`engineer`.`project` AS `project`,`engineer`.`success` AS `success`,`engineer`.`eng_location` AS `eng_location`,`engineer`.`eng_dob` AS `eng_dob`,`skill`.`skill_name` AS `skill_name`,`skill`.`skill_level` AS `skill_level`,`showcase`.`showcase` AS `showcase`,`engineer`.`updated_at` AS `updated_At` from ((`engineer` left join `skill` on(`engineer`.`id_eng` = `skill`.`id_eng`)) left join `showcase` on(`engineer`.`id_eng` = `showcase`.`id_eng`)) ;

-- --------------------------------------------------------

--
-- Structure for view `v_projeng`
--
DROP TABLE IF EXISTS `v_projeng`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_projeng`  AS  select `b`.`proj_name` AS `proj_name`,`c`.`eng_name` AS `eng_name`,`a`.`sts_project_eng` AS `status` from ((`project_eng` `a` join `project` `b`) join `engineer` `c` on(`a`.`id_proj` = `b`.`id_proj` and `a`.`id_eng` = `c`.`id_eng`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`);

--
-- Indexes for table `engineer`
--
ALTER TABLE `engineer`
  ADD PRIMARY KEY (`id_eng`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_proj`);

--
-- Indexes for table `project_eng`
--
ALTER TABLE `project_eng`
  ADD PRIMARY KEY (`id_projeng`);

--
-- Indexes for table `showcase`
--
ALTER TABLE `showcase`
  ADD PRIMARY KEY (`id_showcase`);

--
-- Indexes for table `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`id_skill`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `engineer`
--
ALTER TABLE `engineer`
  MODIFY `id_eng` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id_proj` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `project_eng`
--
ALTER TABLE `project_eng`
  MODIFY `id_projeng` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `showcase`
--
ALTER TABLE `showcase`
  MODIFY `id_showcase` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `skill`
--
ALTER TABLE `skill`
  MODIFY `id_skill` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
