-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 06, 2016 at 09:18 PM
-- Server version: 5.7.13-0ubuntu0.16.04.2
-- PHP Version: 7.0.9-1+deb.sury.org~xenial+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee_inf`
--

CREATE TABLE `employee_inf` (
  `id` int(32) NOT NULL,
  `EmployeeNumber` varchar(32) NOT NULL,
  `Lastname` varchar(32) NOT NULL,
  `Firstname` varchar(32) NOT NULL,
  `Position` varchar(32) NOT NULL,
  `Salary` double NOT NULL,
  `HireDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_inf`
--

INSERT INTO `employee_inf` (`id`, `EmployeeNumber`, `Lastname`, `Firstname`, `Position`, `Salary`, `HireDate`) VALUES
(1, '40229', 'Erandio', 'Christian Rey', 'Sde 1', 12000, '2014-11-28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee_inf`
--
ALTER TABLE `employee_inf`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee_inf`
--
ALTER TABLE `employee_inf`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
